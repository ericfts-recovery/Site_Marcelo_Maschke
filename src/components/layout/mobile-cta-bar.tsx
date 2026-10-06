import { buildWhatsappUrl, phoneUrl } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/ui/tracked-link";
import { PhoneIcon, WhatsappIcon } from "@/components/ui/icons";

/**
 * Barra fixa de conversão no mobile e botão flutuante no desktop.
 * O <main> recebe padding inferior equivalente para não cobrir conteúdo.
 */
export function MobileCtaBar() {
  return (
    <>
      <div className="border-line-dark bg-ink/95 fixed inset-x-0 bottom-0 z-40 border-t pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
        <div className="grid h-(--mobile-bar-h) grid-cols-[1fr_auto] gap-2 px-3 py-2.5">
          <TrackedLink
            href={buildWhatsappUrl()}
            event="whatsapp_click"
            eventParams={{ location: "mobile_bar" }}
            external
            className="bg-gold text-ink flex items-center justify-center gap-2.5 text-sm font-medium tracking-[0.14em] uppercase"
          >
            <WhatsappIcon size={18} />
            Agendar pelo WhatsApp
          </TrackedLink>
          <TrackedLink
            href={phoneUrl}
            event="phone_click"
            eventParams={{ location: "mobile_bar" }}
            aria-label="Ligar para o salão"
            className="border-line-dark text-gold flex aspect-square items-center justify-center border"
          >
            <PhoneIcon size={20} />
          </TrackedLink>
        </div>
      </div>

      <TrackedLink
        href={buildWhatsappUrl()}
        event="whatsapp_click"
        eventParams={{ location: "floating_button" }}
        external
        aria-label="Conversar no WhatsApp"
        className="bg-gold text-ink hover:bg-gold-soft fixed right-8 bottom-8 z-40 hidden size-14 items-center justify-center rounded-full shadow-[0_10px_30px_-10px_rgb(0_0_0/0.5)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 lg:flex"
      >
        <WhatsappIcon size={24} />
      </TrackedLink>
    </>
  );
}
