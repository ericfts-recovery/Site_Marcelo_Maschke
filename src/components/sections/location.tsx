import { fullAddress, siteConfig } from "@/content/site";
import { buildWhatsappUrl, phoneUrl } from "@/lib/whatsapp";
import { MapEmbed } from "@/components/layout/map-embed";
import {
  ClockIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackedLink } from "@/components/ui/tracked-link";

const rowClass = "flex min-h-11 items-start gap-4 border-b border-line-light py-4";

export function Location() {
  const { contact, openingHours, social } = siteConfig;

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="bg-fog py-20 sm:py-28 lg:py-36"
    >
      <div className="container-page grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <SectionHeading
            id="contato-title"
            index="08"
            eyebrow="Contato"
            title="Venha nos visitar."
            lead="Atendimento com hora marcada, para que o seu momento seja só seu."
          />

          <address className="border-line-light mt-10 border-t not-italic">
            <p className={rowClass}>
              <MapPinIcon size={20} className="text-gold-deep mt-0.5 shrink-0" />
              <span>{fullAddress}</span>
            </p>
            <TrackedLink
              href={buildWhatsappUrl()}
              event="whatsapp_click"
              eventParams={{ location: "home_contact" }}
              external
              className={`${rowClass} hover:text-gold-deep transition-colors`}
            >
              <WhatsappIcon size={20} className="text-gold-deep mt-0.5 shrink-0" />
              <span>WhatsApp {contact.phoneDisplay}</span>
            </TrackedLink>
            <TrackedLink
              href={phoneUrl}
              event="phone_click"
              eventParams={{ location: "home_contact" }}
              className={`${rowClass} hover:text-gold-deep transition-colors`}
            >
              <PhoneIcon size={20} className="text-gold-deep mt-0.5 shrink-0" />
              <span>{contact.phoneDisplay}</span>
            </TrackedLink>
            <TrackedLink
              href={social.instagram}
              event="instagram_click"
              eventParams={{ location: "home_contact" }}
              external
              className={`${rowClass} hover:text-gold-deep transition-colors`}
            >
              <InstagramIcon size={20} className="text-gold-deep mt-0.5 shrink-0" />
              <span>{social.instagramHandle}</span>
            </TrackedLink>
            <div className={rowClass}>
              <ClockIcon size={20} className="text-gold-deep mt-0.5 shrink-0" />
              <dl className="w-full space-y-1">
                {openingHours.map((entry) => (
                  <div key={entry.days} className="flex justify-between gap-4">
                    <dt className="text-stone">{entry.days}</dt>
                    <dd>{entry.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </address>
        </div>

        <MapEmbed />
      </div>
    </section>
  );
}
