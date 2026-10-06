import { buildWhatsappUrl } from "@/lib/whatsapp";
import { buttonClasses, type ButtonVariant } from "@/components/ui/button-styles";
import { TrackedLink } from "@/components/ui/tracked-link";
import { WhatsappIcon } from "@/components/ui/icons";

type WhatsappButtonProps = {
  label?: string;
  message?: string;
  /** Onde o botão está (hero, rodapé, página de serviço...). Vai para o analytics. */
  location: string;
  service?: string;
  variant?: ButtonVariant;
  className?: string;
};

export function WhatsappButton({
  label = "Agendar pelo WhatsApp",
  message,
  location,
  service,
  variant = "gold",
  className,
}: WhatsappButtonProps) {
  return (
    <TrackedLink
      href={buildWhatsappUrl(message)}
      event="whatsapp_click"
      eventParams={{ location, service }}
      external
      className={buttonClasses(variant, className)}
    >
      <WhatsappIcon size={18} />
      <span>{label}</span>
    </TrackedLink>
  );
}
