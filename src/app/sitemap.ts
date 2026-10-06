import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...services.map((service) => ({
      url: `${base}/servicos/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/agendar`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/politica-de-privacidade`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
