import { testimonials } from "@/content/home";
import { siteConfig } from "@/content/site";
import { isPlaceholder } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const googleUrl = siteConfig.address.googleBusinessUrl;

  return (
    <section
      aria-labelledby="depoimentos-title"
      className="bg-ink text-paper py-20 sm:py-28 lg:py-36"
    >
      <div className="container-page">
        <SectionHeading
          id="depoimentos-title"
          index="06"
          eyebrow="Depoimentos"
          title="O que dizem as clientes."
          tone="dark"
          align="center"
        />

        <ul className="bg-line-dark mt-14 grid gap-px lg:mt-20 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <li key={`${testimonial.author}-${index}`} data-reveal className="bg-ink">
              <figure className="flex h-full flex-col p-8 sm:p-10">
                <span aria-hidden="true" className="font-display text-gold text-7xl leading-none">
                  “
                </span>
                <blockquote className="font-display text-paper mt-2 text-2xl leading-snug italic">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-auto pt-8">
                  <span className="text-paper block">{testimonial.author}</span>
                  <span className="eyebrow text-gold mt-1 block">{testimonial.service}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {!isPlaceholder(googleUrl) && (
          <p className="mt-10 text-center">
            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ash decoration-gold hover:text-gold inline-flex min-h-11 items-center gap-2 underline underline-offset-8"
            >
              Ver todas as avaliações no Google
              <ArrowUpRightIcon size={16} />
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
