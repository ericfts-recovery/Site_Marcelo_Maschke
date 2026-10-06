import Link from "next/link";
import type { ReactNode } from "react";
import { buttonClasses } from "@/components/ui/button-styles";
import { HairLines } from "@/components/ui/hair-lines";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

type CtaBandProps = {
  title: ReactNode;
  lead?: string;
  whatsappLabel?: string;
  whatsappMessage?: string;
  location: string;
  service?: string;
};

export function CtaBand({
  title,
  lead = "Conte o que você imagina. A gente cuida do resto — com hora marcada e atenção total a você.",
  whatsappLabel,
  whatsappMessage,
  location,
  service,
}: CtaBandProps) {
  return (
    <section
      aria-labelledby={`cta-${location}`}
      className="bg-graphite text-paper relative isolate overflow-hidden py-24 text-center sm:py-32"
    >
      <HairLines className="text-gold/20 absolute top-0 left-1/2 -z-10 h-full w-[50rem] -translate-x-1/2" />
      <div className="container-page">
        <span aria-hidden="true" className="bg-gold/70 mx-auto block h-12 w-px" />
        <h2
          id={`cta-${location}`}
          className="mx-auto mt-8 max-w-3xl text-[2.6rem] sm:text-6xl lg:text-7xl"
        >
          {title}
        </h2>
        <p className="text-ash mx-auto mt-6 max-w-xl text-lg">{lead}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsappButton
            label={whatsappLabel}
            message={whatsappMessage}
            location={location}
            service={service}
          />
          <Link href="/agendar" className={buttonClasses("outline-light")}>
            Prefiro pré-agendar pelo site
          </Link>
        </div>
      </div>
    </section>
  );
}
