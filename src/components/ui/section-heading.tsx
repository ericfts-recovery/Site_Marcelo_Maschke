import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  id?: string;
  className?: string;
};

/** Cabeçalho editorial: "01 ——— O salão" + título serifado + apoio. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  id,
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "eyebrow flex items-center gap-4",
          align === "center" && "justify-center",
          isDark ? "text-gold" : "text-gold-deep",
        )}
      >
        {index && <span className="font-display text-base tracking-normal">{index}</span>}
        <span aria-hidden="true" className="h-px w-10 bg-current opacity-60" />
        <span>{eyebrow}</span>
      </p>
      <h2
        id={id}
        className={cn(
          "mt-5 text-[2.5rem] sm:text-5xl lg:text-6xl",
          isDark ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead && <p className={cn("mt-5 text-lg", isDark ? "text-ash" : "text-stone")}>{lead}</p>}
    </div>
  );
}
