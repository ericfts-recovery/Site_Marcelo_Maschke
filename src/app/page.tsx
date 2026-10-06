import type { Metadata } from "next";
import { homeFaqs } from "@/content/home";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/json-ld";
import { About } from "@/components/sections/about";
import { Bridal } from "@/components/sections/bridal";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Location } from "@/components/sections/location";
import { ServiceMarquee } from "@/components/sections/service-marquee";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Signature } from "@/components/sections/signature";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | Salão de beleza em ${siteConfig.address.city}`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceMarquee />
      <About />
      <ServicesGrid />
      <Signature />
      <Bridal />
      <Gallery />
      <Testimonials />
      <FaqSection faqs={homeFaqs} index="07" />
      <CtaBand
        title={
          <>
            Seu próximo visual começa com <em className="text-gold">uma conversa</em>.
          </>
        }
        location="home_final"
      />
      <Location />
      <JsonLd data={faqSchema(homeFaqs)} />
    </>
  );
}
