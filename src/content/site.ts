import type { ImageAsset, NavItem, OpeningHours, Stat } from "@/types/content";

/**
 * Dados centrais do cliente. Tudo entre [COLCHETES] é placeholder e deve ser
 * confirmado com o salão antes de publicar (ver README > Checklist de lançamento).
 */
export const siteConfig = {
  name: "Marcelo Maschke Hair Salon",
  shortName: "Marcelo Maschke",
  owner: "Marcelo Maschke",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marcelomaschke.com.br",
  locale: "pt_BR",
  tagline: "Beleza sob medida, desenhada para você.",
  description:
    "Salão de beleza com visagismo, mechas, mega hair, cortes, unhas, make e penteados. Atendimento exclusivo para noivas e eventos. Agende pelo WhatsApp.",

  contact: {
    /** Somente dígitos, com DDI e DDD. Ex.: 5551999999999 */
    whatsapp: "5500000000000",
    phoneHref: "+5500000000000",
    phoneDisplay: "[(00) 00000-0000]",
    email: "[contato@marcelomaschke.com.br]",
  },

  address: {
    street: "[RUA E NÚMERO]",
    district: "[BAIRRO]",
    city: "[CIDADE]",
    state: "[UF]",
    postalCode: "[CEP]",
    country: "BR",
    googleBusinessUrl: "[LINK DO PERFIL NO GOOGLE]",
    /** Opcional: coordenadas para o JSON-LD. */
    geo: undefined as { latitude: number; longitude: number } | undefined,
  },

  social: {
    instagram: "https://www.instagram.com/marcelomaschkehairsalon",
    instagramHandle: "@marcelomaschkehairsalon",
  },

  openingHours: [
    { days: "[DIAS DE ATENDIMENTO]", time: "[00h às 00h]" },
    { days: "[SÁBADO]", time: "[00h às 00h]" },
  ] as OpeningHours[],

  /** Números de autoridade — preencher com dados reais do salão. */
  stats: [
    { value: "[00]+", label: "anos dedicados à beleza" },
    { value: "[0.000]+", label: "clientes atendidas" },
    { value: "[0,0]", label: "nota média no Google" },
  ] satisfies Stat[],

  portrait: undefined as ImageAsset | undefined,
  heroImage: undefined as ImageAsset | undefined,
  bridalImage: undefined as ImageAsset | undefined,
} as const;

export const mainNav: NavItem[] = [
  { label: "O salão", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Visagismo", href: "/servicos/visagismo" },
  { label: "Noivas", href: "/servicos/noivas" },
  { label: "Contato", href: "/#contato" },
];

export const legalNav: NavItem[] = [
  { label: "Política de privacidade", href: "/politica-de-privacidade" },
];

export const fullAddress = [
  siteConfig.address.street,
  siteConfig.address.district,
  `${siteConfig.address.city} – ${siteConfig.address.state}`,
  siteConfig.address.postalCode,
].join(", ");

export const defaultWhatsappMessage =
  "Olá! Vim pelo site do Marcelo Maschke Hair Salon e gostaria de agendar um horário.";
