import "server-only";
import { Resend } from "resend";
import { siteConfig } from "@/content/site";
import type { BookingData } from "@/lib/validation/booking";

type SendResult = { ok: true } | { ok: false; reason: "not-configured" | "provider-error" };

/**
 * Envia a solicitação de pré-agendamento para o salão.
 * E-mail em texto puro: nada do que o visitante digita é interpretado como HTML.
 */
export async function sendBookingEmail(data: BookingData): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_TO_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return { ok: false, reason: "not-configured" };
  }

  const resend = new Resend(apiKey);
  const phoneDigits = data.phone.replace(/\D/g, "");

  const text = [
    `Nova solicitação de agendamento pelo site — ${siteConfig.name}`,
    "",
    `Nome: ${data.name}`,
    `WhatsApp: ${data.phone} (https://wa.me/${phoneDigits.startsWith("55") ? phoneDigits : `55${phoneDigits}`})`,
    `Serviço: ${data.service}`,
    `Período preferido: ${data.period}`,
    `Mensagem: ${data.message || "—"}`,
    "",
    "A cliente autorizou o contato conforme a Política de Privacidade.",
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to,
    subject: `Agendamento pelo site: ${data.service} — ${data.name}`,
    text,
  });

  return error ? { ok: false, reason: "provider-error" } : { ok: true };
}
