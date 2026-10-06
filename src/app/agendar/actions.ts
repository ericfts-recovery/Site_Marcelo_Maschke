"use server";

import { headers } from "next/headers";
import { isRateLimited } from "@/lib/rate-limit";
import { bookingSchema, type BookingResult } from "@/lib/validation/booking";
import { sendBookingEmail } from "@/services/email";

/** Envios mais rápidos que isso vêm de robôs, não de pessoas. */
const MIN_FILL_TIME_MS = 3000;

const GENERIC_ERROR = "Não conseguimos enviar agora. Por favor, fale com a gente pelo WhatsApp.";

export async function submitBooking(input: unknown): Promise<BookingResult> {
  const parsed = bookingSchema.safeParse(input);

  if (!parsed.success) {
    return { status: "error", message: "Revise os campos destacados e tente novamente." };
  }

  const data = parsed.data;

  // Honeypot preenchido ou envio instantâneo: respondemos "sucesso" para não
  // ensinar o robô, mas descartamos a solicitação.
  if (data.website || Date.now() - data.startedAt < MIN_FILL_TIME_MS) {
    return { status: "success" };
  }

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    requestHeaders.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Recebemos muitas tentativas. Aguarde alguns minutos ou chame no WhatsApp.",
    };
  }

  const result = await sendBookingEmail(data);
  return result.ok ? { status: "success" } : { status: "error", message: GENERIC_ERROR };
}
