export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Faq = {
  question: string;
  answer: string;
};

export type TitledText = {
  title: string;
  text: string;
};

export type Service = {
  slug: string;
  name: string;
  number: string;
  tagline: string;
  /** Texto curto do card na home. */
  summary: string;
  h1: string;
  intro: string[];
  highlights: TitledText[];
  steps: TitledText[];
  faqs: Faq[];
  seo: {
    title: string;
    description: string;
  };
  whatsappMessage: string;
  ctaLabel: string;
  /** Foto real do serviço. Enquanto não houver, o site exibe uma moldura elegante com a legenda abaixo. */
  image?: ImageAsset;
  imageLabel: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  service: string;
};

export type DayOfWeek =
  "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export type OpeningHours = {
  days: string;
  time: string;
  /** Preencha para publicar o horário no JSON-LD (Google). */
  schema?: {
    dayOfWeek: DayOfWeek[];
    opens: string;
    closes: string;
  };
};

export type Stat = {
  value: string;
  label: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type GalleryItem = {
  label: string;
  image?: ImageAsset;
};
