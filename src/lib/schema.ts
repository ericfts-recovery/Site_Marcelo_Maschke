import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import type { Faq, Service } from "@/types/content";
import { absoluteUrl } from "@/lib/utils";

const businessId = `${siteConfig.url}/#salao`;

export function hairSalonSchema() {
  const { address, contact, social, openingHours } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": businessId,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl("/opengraph-image", siteConfig.url),
    logo: absoluteUrl("/icon.svg", siteConfig.url),
    telephone: contact.phoneHref,
    email: contact.email,
    founder: { "@type": "Person", name: siteConfig.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    ...(address.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: address.geo.latitude,
        longitude: address.geo.longitude,
      },
    }),
    areaServed: address.city,
    sameAs: [social.instagram],
    openingHoursSpecification: openingHours.flatMap((entry) =>
      entry.schema
        ? [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: entry.schema.dayOfWeek,
              opens: entry.schema.opens,
              closes: entry.schema.closes,
            },
          ]
        : [],
    ),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: absoluteUrl(`/servicos/${service.slug}`, siteConfig.url),
        },
      })),
    },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.seo.description,
    url: absoluteUrl(`/servicos/${service.slug}`, siteConfig.url),
    areaServed: siteConfig.address.city,
    provider: { "@id": businessId },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, siteConfig.url),
    })),
  };
}
