import Link from "next/link";
import { processContent, signatureContent } from "@/content/home";
import { buttonClasses } from "@/components/ui/button-styles";
import { HairLines } from "@/components/ui/hair-lines";
import { ArrowRightIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

export function Signature() {
  return (
    <section
      aria-labelledby="assinatura-title"
      className="bg-ink text-paper relative isolate overflow-hidden py-20 sm:py-28 lg:py-36"
    >
      <HairLines className="text-gold/15 absolute -top-20 -left-60 -z-10 h-[140%] w-[44rem]" />

      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            id="assinatura-title"
            index="03"
            eyebrow={signatureContent.eyebrow}
            title={signatureContent.title}
            lead={signatureContent.lead}
            tone="dark"
          />
          <Link href="/servicos/visagismo" className={buttonClasses("outline-light", "mt-10")}>
            Conhecer o visagismo
            <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ol className="border-line-dark border-t">
          {processContent.map((step, index) => (
            <li
              key={step.title}
              data-reveal
              className="border-line-dark grid grid-cols-[4rem_1fr] gap-4 border-b py-8 sm:grid-cols-[6rem_1fr] sm:py-10"
            >
              <span
                aria-hidden="true"
                className="font-display text-gold text-4xl italic sm:text-5xl"
              >
                {ROMAN[index]}
              </span>
              <div>
                <h3 className="text-3xl sm:text-4xl">{step.title}</h3>
                <p className="text-ash mt-3 max-w-md">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
