import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/content/services";
import type { Service } from "@/types/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { HairLines } from "@/components/ui/hair-lines";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ImageFrame } from "@/components/ui/image-frame";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/servicos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/servicos/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps<"/servicos/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/#servicos" },
    { name: service.name, path: `/servicos/${service.slug}` },
  ];

  return (
    <>
      <ServiceHero service={service} crumbs={crumbs} />
      <ServiceHighlights service={service} />
      <ServiceSteps service={service} />
      <FaqSection faqs={service.faqs} title={`Dúvidas sobre ${service.name.toLowerCase()}`} />
      <RelatedServices current={service.slug} />
      <CtaBand
        title={service.tagline}
        whatsappLabel={service.ctaLabel}
        whatsappMessage={service.whatsappMessage}
        location={`service_${service.slug}_final`}
        service={service.name}
      />
      <JsonLd data={[serviceSchema(service), faqSchema(service.faqs), breadcrumbSchema(crumbs)]} />
    </>
  );
}

function ServiceHero({
  service,
  crumbs,
}: {
  service: Service;
  crumbs: Array<{ name: string; path: string }>;
}) {
  return (
    <section
      aria-labelledby="servico-title"
      className="bg-ink text-paper relative isolate overflow-hidden pt-(--header-h)"
    >
      <HairLines
        animated
        className="text-gold/20 absolute top-0 -right-48 -z-10 h-full w-[44rem] lg:right-[30%]"
      />
      <div className="container-page grid items-end gap-12 pt-8 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-14 lg:pb-24">
        <div>
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow animate-rise text-gold mt-8 flex items-center gap-4">
            <span className="font-display text-base tracking-normal">{service.number}</span>
            <span aria-hidden="true" className="animate-line bg-gold h-px w-10" />
            {service.name}
          </p>
          <h1
            id="servico-title"
            className="animate-rise mt-6 text-[2.7rem] leading-[1] sm:text-6xl lg:text-7xl"
          >
            {service.h1}
          </h1>
          <div className="text-ash mt-7 max-w-xl space-y-4 text-lg">
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <WhatsappButton
            label={service.ctaLabel}
            message={service.whatsappMessage}
            location={`service_${service.slug}_hero`}
            service={service.name}
            className="mt-9 w-full sm:w-auto"
          />
        </div>

        <ImageFrame
          image={service.image}
          placeholderLabel={service.imageLabel}
          shape="arch"
          aspect="aspect-[4/5]"
          sizes="(min-width: 1024px) 34vw, 80vw"
          priority
          outline
          className="ml-auto w-[78%] max-w-sm sm:w-[55%] lg:w-full"
        />
      </div>
    </section>
  );
}

function ServiceHighlights({ service }: { service: Service }) {
  return (
    <section aria-labelledby="diferenciais-title" className="bg-fog py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="diferenciais-title"
          eyebrow="O que faz a diferença"
          title={
            <>
              Detalhes que você <em className="text-gold-deep">sente</em> no resultado.
            </>
          }
        />
        <ul className="border-line-light bg-line-light mt-14 grid gap-px border md:grid-cols-3">
          {service.highlights.map((highlight, index) => (
            <li key={highlight.title} data-reveal className="bg-fog p-8 sm:p-10">
              <span className="font-display text-gold-deep text-lg">0{index + 1}</span>
              <h3 className="mt-6 text-3xl">{highlight.title}</h3>
              <p className="text-stone mt-3">{highlight.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceSteps({ service }: { service: Service }) {
  return (
    <section aria-labelledby="etapas-title" className="bg-ink text-paper py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="etapas-title"
          eyebrow="Como funciona"
          title="Passo a passo, sem surpresas."
          tone="dark"
        />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {service.steps.map((step, index) => (
            <li key={step.title} data-reveal className="border-gold/50 border-t pt-6">
              <span aria-hidden="true" className="font-display text-gold text-5xl italic">
                {index + 1}
              </span>
              <h3 className="mt-4 text-[1.75rem]">{step.title}</h3>
              <p className="text-ash mt-2">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function RelatedServices({ current }: { current: string }) {
  const related = services.filter((service) => service.slug !== current);

  return (
    <nav
      aria-labelledby="outros-title"
      className="border-line-light bg-paper border-t py-16 sm:py-20"
    >
      <div className="container-page">
        <h2 id="outros-title" className="eyebrow text-gold-deep font-sans">
          Outros serviços
        </h2>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          {related.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/servicos/${service.slug}`}
                className="group font-display text-ink hover:text-gold-deep inline-flex min-h-12 items-center gap-2 text-3xl transition-colors"
              >
                {service.name}
                <ArrowRightIcon
                  size={18}
                  className="text-gold-deep opacity-0 transition-[opacity,transform] group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
