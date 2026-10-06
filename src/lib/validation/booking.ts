import { z } from "zod";
import { serviceNames } from "@/content/services";

export const periodOptions = ["Manhã", "Tarde", "Sem preferência"] as const;

export const MESSAGE_MAX_LENGTH = 400;

/**
 * Coleta mínima (LGPD): só o necessário para retornar o contato.
 * O mesmo schema valida no navegador e no servidor.
 */
export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(80, "Use no máximo 80 caracteres."),
  phone: z
    .string()
    .trim()
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 13;
    }, "Informe um WhatsApp válido com DDD."),
  service: z.enum(serviceNames as [string, ...string[]], {
    error: "Escolha um serviço.",
  }),
  period: z.enum(periodOptions, { error: "Escolha um período." }),
  message: z
    .string()
    .trim()
    .max(MESSAGE_MAX_LENGTH, `Use no máximo ${MESSAGE_MAX_LENGTH} caracteres.`),
  consent: z.literal(true, {
    error: "É preciso autorizar o contato para enviarmos sua solicitação.",
  }),
  /** Honeypot: campo invisível que só robôs preenchem. */
  website: z.string().max(0),
  /** Momento em que o formulário foi renderizado (trava de tempo anti-spam). */
  startedAt: z.number(),
});

export type BookingInput = z.input<typeof bookingSchema>;
export type BookingData = z.output<typeof bookingSchema>;

export type BookingResult = { status: "success" } | { status: "error"; message: string };
