import type { Faq } from "@/types/content";
import { cn } from "@/lib/utils";
import { PlusIcon } from "@/components/ui/icons";

type FaqListProps = {
  faqs: Faq[];
  tone?: "light" | "dark";
};

/** Acordeão nativo (details/summary): acessível e sem JavaScript. */
export function FaqList({ faqs, tone = "light" }: FaqListProps) {
  const isDark = tone === "dark";

  return (
    <div className={cn("border-t", isDark ? "border-line-dark" : "border-line-light")}>
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className={cn("group border-b", isDark ? "border-line-dark" : "border-line-light")}
        >
          <summary
            className={cn(
              "font-display flex min-h-16 cursor-pointer items-center justify-between gap-6 py-5 text-left text-[1.375rem] leading-snug transition-colors sm:text-2xl",
              isDark ? "text-paper hover:text-gold" : "text-ink hover:text-gold-deep",
            )}
          >
            <span>{faq.question}</span>
            <span
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-open:rotate-45",
                isDark ? "border-line-dark text-gold" : "border-line-light text-gold-deep",
              )}
            >
              <PlusIcon size={16} />
            </span>
          </summary>
          <p className={cn("max-w-3xl pr-14 pb-6", isDark ? "text-ash" : "text-stone")}>
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
