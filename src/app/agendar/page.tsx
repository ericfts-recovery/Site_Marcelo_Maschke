import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { BookingForm } from "@/components/booking/booking-form";
import { HairLines } from "@/components/ui/hair-lines";
import { CheckIcon } from "@/components/ui/icons";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export const metadata: Metadata = buildMetadata({
  title: "Agendar horário",
  description: `Pré-agende seu horário no ${siteConfig.name}: visagismo, mechas, mega hair, cortes, unhas, make, penteados e noivas. Resposta pelo WhatsApp.`,
  path: "/agendar",
});

const reasons = [
  "Retorno pelo WhatsApp para confirmar dia e horário",
  "Leva menos de um minuto para preencher",
  "Seus dados são usados apenas para este contato",
];

export default function BookingPage() {
  return (
    <div className="bg-fog grid lg:min-h-svh lg:grid-cols-[42%_58%]">
      <section
        aria-labelledby="agendar-title"
        className="bg-ink text-paper relative isolate overflow-hidden px-5 pt-[calc(var(--header-h)+2.5rem)] pb-14 sm:px-10 lg:px-12 lg:pt-[calc(var(--header-h)+5rem)] xl:pl-[max(3rem,calc((100vw-1280px)/2+3rem))]"
      >
        <HairLines className="text-gold/20 absolute inset-0 -z-10 h-full w-full" />
        <div className="max-w-md">
          <p className="eyebrow text-gold flex items-center gap-4">
            <span aria-hidden="true" className="bg-gold h-px w-10" />
            Agendamento
          </p>
          <h1 id="agendar-title" className="mt-6 text-5xl sm:text-6xl">
            Vamos marcar o seu horário?
          </h1>
          <p className="text-ash mt-5 text-lg">
            Conte o que você procura e retornamos para confirmar o melhor dia e horário. Se
            preferir, fale direto com a gente.
          </p>
          <ul className="text-ash mt-8 space-y-3">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3">
                <CheckIcon size={18} className="text-gold mt-1 shrink-0" />
                {reason}
              </li>
            ))}
          </ul>
          <WhatsappButton
            label="Prefiro o WhatsApp"
            location="booking_page"
            variant="outline-light"
            className="mt-10 w-full sm:w-auto"
          />
        </div>
      </section>

      <section
        aria-label="Formulário de pré-agendamento"
        className="px-5 py-14 sm:px-10 lg:px-16 lg:pt-[calc(var(--header-h)+5rem)] lg:pb-24"
      >
        <div className="max-w-2xl">
          <BookingForm />
        </div>
      </section>
    </div>
  );
}
