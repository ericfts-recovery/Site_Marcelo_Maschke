import { defaultWhatsappMessage, siteConfig } from "@/content/site";

export function buildWhatsappUrl(message: string = defaultWhatsappMessage): string {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${siteConfig.contact.whatsapp}?${params.toString()}`;
}

export const phoneUrl = `tel:${siteConfig.contact.phoneHref}`;
