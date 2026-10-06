import Link from "next/link";
import { bridalContent } from "@/content/home";
import { getServiceBySlug } from "@/content/services";
import { siteConfig } from "@/content/site";
import { CheckIcon } from "@/components/ui/icons";
import { ImageFrame } from "@/components/ui/image-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export function Bridal() {
  const bridalService = getServiceBySlug("noivas");

  return (
    <section
      id="noivas"
      aria-labelledby="noivas-title"
      className="bg-mist relative isolate overflow-hidden py-20 sm:py-28 lg:py-36"
    >
      <span
        aria-hidden="true"
        className="font-display text-ink/[0.04] absolute -bottom-10 left-1/2 -z-10 -translate-x-1/2 text-[9rem] leading-none whitespace-nowrap italic select-none sm:text-[16rem] lg:text-[22rem]"
      >
        Noivas
      </span>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <div data-reveal className="order-2 lg:order-1">
          <SectionHeading
            id="noivas-title"
            index="04"
            eyebrow={bridalContent.eyebrow}
            title={bridalContent.title}
            lead={bridalContent.lead}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {bridalContent.items.map((item) => (
              <li key={item} className="border-line-light text-ink flex gap-3 border-t pt-4">
                <CheckIcon size={18} className="text-gold-deep mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <WhatsappButton
              label="Consultar minha data"
              message={bridalService?.whatsappMessage}
              location="home_bridal"
              service="Noivas"
              variant="dark"
            />
            <Link
              href="/servicos/noivas"
              className="text-ink decoration-gold-deep hover:text-gold-deep inline-flex min-h-12 items-center px-2 text-sm font-medium tracking-[0.16em] uppercase underline underline-offset-8"
            >
              Como funciona
            </Link>
          </div>
        </div>

        <ImageFrame
          image={siteConfig.bridalImage}
          placeholderLabel="Noiva pronta, com penteado e véu"
          aspect="aspect-[4/5]"
          outline
          className="order-1 mr-3 sm:mr-5 lg:order-2"
        />
      </div>
    </section>
  );
}
