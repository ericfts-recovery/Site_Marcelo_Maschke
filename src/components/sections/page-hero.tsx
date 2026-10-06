import type { ReactNode } from "react";
import { HairLines } from "@/components/ui/hair-lines";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

/** Topo escuro e compacto para páginas internas simples. */
export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-title"
      className="bg-ink text-paper relative isolate overflow-hidden pt-(--header-h)"
    >
      <HairLines className="text-gold/20 absolute top-0 -right-40 -z-10 h-full w-[40rem]" />
      <div className="container-page pt-12 pb-16 sm:pt-16 sm:pb-20">
        <p className="eyebrow text-gold flex items-center gap-4">
          <span aria-hidden="true" className="bg-gold h-px w-10" />
          {eyebrow}
        </p>
        <h1 id="page-title" className="mt-6 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
