import { aboutContent } from "@/content/home";
import { siteConfig } from "@/content/site";
import { ImageFrame } from "@/components/ui/image-frame";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-fog py-20 sm:py-28 lg:py-36">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <ImageFrame
          image={siteConfig.portrait}
          placeholderLabel="Marcelo Maschke atendendo uma cliente"
          tone="light"
          aspect="aspect-[4/5]"
          outline
          className="mr-3 sm:mr-5"
        />

        <div data-reveal>
          <SectionHeading
            id="sobre-title"
            index="01"
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
          />
          <div className="text-stone mt-8 space-y-5 text-lg">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="font-display text-gold-deep mt-8 text-4xl italic">
            {aboutContent.signature}
          </p>
          <p className="eyebrow text-stone mt-1">{aboutContent.signatureRole}</p>

          <dl className="divide-line-light border-line-light mt-12 grid grid-cols-3 divide-x border-y">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="px-3 py-6 first:pl-0 sm:px-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-ink text-3xl sm:text-5xl">{stat.value}</dd>
                <dd aria-hidden="true" className="text-stone mt-2 text-sm leading-snug">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
