import Link from "next/link";
import { heroContent } from "@/content/home";
import { siteConfig } from "@/content/site";
import { buttonClasses } from "@/components/ui/button-styles";
import { HairLines } from "@/components/ui/hair-lines";
import { ImageFrame } from "@/components/ui/image-frame";
import { SparkIcon } from "@/components/ui/icons";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-ink text-paper relative isolate overflow-hidden pt-(--header-h)"
    >
      <HairLines
        animated
        className="text-gold/25 absolute top-0 -right-40 -z-10 h-full w-[46rem] sm:-right-24 lg:right-[28%] lg:w-[40rem]"
      />
      <div
        aria-hidden="true"
        className="from-ink absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t to-transparent"
      />

      <div className="container-page grid items-end gap-12 pt-12 pb-16 sm:pt-20 lg:min-h-[min(100svh,58rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-16 lg:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow animate-rise text-gold flex items-center gap-4">
            <span aria-hidden="true" className="animate-line bg-gold h-px w-10" />
            {heroContent.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="animate-rise mt-6 text-[2.9rem] leading-[0.98] sm:text-7xl lg:text-[5.75rem] xl:text-[6.5rem]"
          >
            {heroContent.titleStart}{" "}
            <em className="text-gold font-light">{heroContent.titleHighlight}</em>{" "}
            {heroContent.titleEnd}
          </h1>

          <p className="text-ash mt-7 max-w-xl text-lg sm:text-xl">{heroContent.lead}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsappButton location="hero" />
            <Link href="/#servicos" className={buttonClasses("outline-light")}>
              Conhecer os serviços
            </Link>
          </div>

          <ul className="border-line-dark text-ash mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t pt-6 text-[0.9375rem]">
            {heroContent.trust.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <SparkIcon size={12} className="text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ImageFrame
          image={siteConfig.heroImage}
          placeholderLabel="Retrato do Marcelo no salão"
          shape="arch"
          aspect="aspect-[4/5] lg:aspect-[3/4]"
          sizes="(min-width: 1024px) 36vw, 80vw"
          priority
          outline
          className="ml-auto w-[82%] max-w-md sm:w-[60%] lg:w-full"
        />
      </div>
    </section>
  );
}
