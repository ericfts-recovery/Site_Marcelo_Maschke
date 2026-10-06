import Link from "next/link";
import { cacheLife } from "next/cache";
import { fullAddress, legalNav, mainNav, siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { buildWhatsappUrl, phoneUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/logo";
import { TrackedLink } from "@/components/ui/tracked-link";
import { CookieSettingsButton } from "@/components/layout/cookie-consent";
import { InstagramIcon, MapPinIcon, PhoneIcon, WhatsappIcon } from "@/components/ui/icons";

const linkClass = "inline-flex min-h-11 items-center text-ash transition-colors hover:text-gold";

export function SiteFooter() {
  const { contact, social, openingHours } = siteConfig;

  return (
    <footer className="bg-ink text-paper pb-(--mobile-bar-h) lg:pb-0">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="text-ash mt-6 max-w-xs">
            Visagismo, cor, mega hair, cortes, unhas, make e penteados — com hora marcada e atenção
            a cada detalhe.
          </p>
          <TrackedLink
            href={social.instagram}
            event="instagram_click"
            eventParams={{ location: "footer" }}
            external
            className="text-paper hover:text-gold mt-6 inline-flex min-h-11 items-center gap-3 transition-colors"
          >
            <InstagramIcon size={20} />
            {social.instagramHandle}
          </TrackedLink>
        </div>

        <nav aria-label="Serviços">
          <h2 className="eyebrow text-gold font-sans">Serviços</h2>
          <ul className="mt-4">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/servicos/${service.slug}`} className={linkClass}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Navegação do rodapé">
          <h2 className="eyebrow text-gold font-sans">Navegue</h2>
          <ul className="mt-4">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/agendar" className={linkClass}>
                Pré-agendamento
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-gold font-sans">Contato</h2>
          <address className="mt-4 space-y-3 not-italic">
            <p className="text-ash flex gap-3">
              <MapPinIcon size={18} className="text-gold mt-1 shrink-0" />
              <span>{fullAddress}</span>
            </p>
            <TrackedLink
              href={buildWhatsappUrl()}
              event="whatsapp_click"
              eventParams={{ location: "footer" }}
              external
              className="text-ash hover:text-gold flex min-h-11 items-center gap-3 transition-colors"
            >
              <WhatsappIcon size={18} className="text-gold shrink-0" />
              WhatsApp {contact.phoneDisplay}
            </TrackedLink>
            <TrackedLink
              href={phoneUrl}
              event="phone_click"
              eventParams={{ location: "footer" }}
              className="text-ash hover:text-gold flex min-h-11 items-center gap-3 transition-colors"
            >
              <PhoneIcon size={18} className="text-gold shrink-0" />
              {contact.phoneDisplay}
            </TrackedLink>
          </address>
          <dl className="text-ash mt-5 space-y-1 text-sm">
            {openingHours.map((entry) => (
              <div
                key={entry.days}
                className="border-line-dark flex justify-between gap-4 border-b py-2"
              >
                <dt>{entry.days}</dt>
                <dd className="text-paper">{entry.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-line-dark border-t">
        <div className="container-page text-ash flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.name}. Todos os direitos reservados.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton className={linkClass} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

/** Ano capturado no cache (Cache Components não permite new Date() solto no prerender). */
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
