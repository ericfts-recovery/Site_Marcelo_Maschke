import type { Faq } from "@/types/content";
import { FaqList } from "@/components/ui/faq-list";
import { SectionHeading } from "@/components/ui/section-heading";

type FaqSectionProps = {
  faqs: Faq[];
  index?: string;
  title?: string;
};

export function FaqSection({ faqs, index, title = "Perguntas frequentes" }: FaqSectionProps) {
  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-title"
      className="bg-paper py-20 sm:py-28 lg:py-36"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            id="duvidas-title"
            index={index}
            eyebrow="Dúvidas"
            title={title}
            lead="Não encontrou o que procurava? Fale com a gente pelo WhatsApp."
          />
        </div>
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}
