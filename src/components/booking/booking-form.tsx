"use client";

import Link from "next/link";
import { useEffect, useId, useState, type ReactNode } from "react";
import { useForm, useWatch, type FieldError } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitBooking } from "@/app/agendar/actions";
import { serviceNames } from "@/content/services";
import { siteConfig } from "@/content/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import {
  bookingSchema,
  MESSAGE_MAX_LENGTH,
  periodOptions,
  type BookingData,
  type BookingInput,
} from "@/lib/validation/booking";
import { buttonClasses } from "@/components/ui/button-styles";
import { CheckIcon, WhatsappIcon } from "@/components/ui/icons";
import { TrackedLink } from "@/components/ui/tracked-link";

const fieldClass =
  "mt-2 block min-h-12 w-full border border-line-light bg-paper px-4 py-3 text-base text-ink transition-colors placeholder:text-stone/70 hover:border-ink/40 focus:border-gold-deep focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-gold aria-invalid:border-red-700";

export function BookingForm({ defaultService }: { defaultService?: string }) {
  const [success, setSuccess] = useState<BookingData | null>(null);

  if (success) {
    return <SuccessMessage data={success} onReset={() => setSuccess(null)} />;
  }

  // Ao voltar do sucesso, o formulário é remontado do zero (inclusive a trava de tempo).
  return <BookingFields defaultService={defaultService} onSuccess={setSuccess} />;
}

type BookingFieldsProps = {
  defaultService?: string;
  onSuccess: (data: BookingData) => void;
};

function BookingFields({ defaultService, onSuccess }: BookingFieldsProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BookingInput, unknown, BookingData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: defaultService ?? "",
      period: "Sem preferência",
      message: "",
      website: "",
      startedAt: 0,
    },
  });

  // Marca quando a pessoa começou a preencher (trava de tempo anti-robô).
  useEffect(() => {
    setValue("startedAt", Date.now());
  }, [setValue]);

  const messageLength = useWatch({ control, name: "message" })?.length ?? 0;

  const onSubmit = async (data: BookingData) => {
    setErrorMessage(null);
    const result = await submitBooking(data);

    if (result.status === "success") {
      track("booking_submit", { service: data.service });
      onSuccess(data);
    } else {
      track("booking_error", { service: data.service });
      setErrorMessage(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <Field label="Nome" error={errors.name}>
        {(id, describedBy) => (
          <input
            id={id}
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy}
            className={fieldClass}
            {...register("name")}
          />
        )}
      </Field>

      <Field
        label="WhatsApp"
        hint="Com DDD. É por aqui que vamos te responder."
        error={errors.phone}
      >
        {(id, describedBy) => (
          <input
            id={id}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy}
            className={fieldClass}
            {...register("phone")}
          />
        )}
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Serviço" error={errors.service}>
          {(id, describedBy) => (
            <select
              id={id}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={describedBy}
              className={cn(
                fieldClass,
                "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 8%22><path d=%22M1 1l5 5 5-5%22 fill=%22none%22 stroke=%22%236f5d40%22 stroke-width=%221.5%22/></svg>')] appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10",
              )}
              {...register("service")}
            >
              <option value="" disabled>
                Selecione
              </option>
              {serviceNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          )}
        </Field>

        <fieldset>
          <legend className="text-ink text-sm font-medium tracking-[0.08em] uppercase">
            Melhor período
          </legend>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {periodOptions.map((option) => (
              <label key={option} className="relative">
                <input
                  type="radio"
                  value={option}
                  className="peer sr-only"
                  {...register("period")}
                />
                <span className="border-line-light bg-paper text-stone peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-gold hover:border-ink/40 flex min-h-12 cursor-pointer items-center justify-center border px-2 text-center text-sm leading-tight transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2">
                  {option}
                </span>
              </label>
            ))}
          </div>
          {errors.period && <ErrorText>{errors.period.message}</ErrorText>}
        </fieldset>
      </div>

      <Field
        label="Mensagem (opcional)"
        hint={`${messageLength}/${MESSAGE_MAX_LENGTH} · Ex.: referência de cor, data do evento. Não envie dados de saúde.`}
        error={errors.message}
      >
        {(id, describedBy) => (
          <textarea
            id={id}
            rows={4}
            maxLength={MESSAGE_MAX_LENGTH}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy}
            className={cn(fieldClass, "resize-y")}
            {...register("message")}
          />
        )}
      </Field>

      {/* Honeypot: invisível para pessoas, irresistível para robôs. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Não preencha este campo
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div>
        <label className="text-stone flex cursor-pointer gap-3 text-[0.9375rem]">
          <input
            type="checkbox"
            aria-invalid={Boolean(errors.consent)}
            className="accent-ink mt-1 size-5 shrink-0"
            {...register("consent")}
          />
          <span>
            Autorizo o <strong className="text-ink font-medium">{siteConfig.name}</strong> a usar
            meus dados apenas para responder a este pedido de agendamento, conforme a{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-ink decoration-gold-deep underline underline-offset-4"
            >
              Política de Privacidade
            </Link>
            .
          </span>
        </label>
        {errors.consent && <ErrorText>{errors.consent.message}</ErrorText>}
      </div>

      {errorMessage && (
        <div role="alert" className="border-l-2 border-red-700 bg-red-50 p-4 text-red-900">
          <p>{errorMessage}</p>
          <TrackedLink
            href={buildWhatsappUrl()}
            event="whatsapp_click"
            eventParams={{ location: "booking_form_error" }}
            external
            className="mt-2 inline-flex min-h-11 items-center gap-2 font-medium underline underline-offset-4"
          >
            <WhatsappIcon size={18} />
            Falar no WhatsApp
          </TrackedLink>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={buttonClasses(
          "dark",
          "w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto",
        )}
      >
        {isSubmitting ? "Enviando…" : "Enviar pedido de agendamento"}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  hint?: string;
  error?: FieldError;
  children: (id: string, describedBy: string | undefined) => ReactNode;
};

function Field({ label, hint, error, children }: FieldProps) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className="text-ink text-sm font-medium tracking-[0.08em] uppercase">
        {label}
      </label>
      {children(id, describedBy)}
      {hint && (
        <p id={hintId} className="text-stone mt-2 text-sm">
          {hint}
        </p>
      )}
      {error && <ErrorText id={errorId}>{error.message}</ErrorText>}
    </div>
  );
}

function ErrorText({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-2 text-sm text-red-800">
      {children}
    </p>
  );
}

function SuccessMessage({ data, onReset }: { data: BookingData; onReset: () => void }) {
  const whatsappMessage = `Olá! Acabei de enviar um pedido de agendamento pelo site. Nome: ${data.name}. Serviço: ${data.service}. Período: ${data.period}.`;

  return (
    <div role="status" className="border-line-light bg-paper border p-8 sm:p-10">
      <span className="bg-ink text-gold flex size-12 items-center justify-center rounded-full">
        <CheckIcon size={22} />
      </span>
      <h2 className="mt-6 text-4xl">Pedido recebido, {data.name.split(" ")[0]}!</h2>
      <p className="text-stone mt-3">
        Em breve entraremos em contato pelo WhatsApp para confirmar o melhor horário para{" "}
        <strong className="text-ink font-medium">{data.service.toLowerCase()}</strong>.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <TrackedLink
          href={buildWhatsappUrl(whatsappMessage)}
          event="whatsapp_click"
          eventParams={{ location: "booking_success", service: data.service }}
          external
          className={buttonClasses("gold")}
        >
          <WhatsappIcon size={18} />
          Agilizar pelo WhatsApp
        </TrackedLink>
        <button type="button" onClick={onReset} className={buttonClasses("outline-dark")}>
          Enviar outro pedido
        </button>
      </div>
    </div>
  );
}
