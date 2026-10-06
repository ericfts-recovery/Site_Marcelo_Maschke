import { cn } from "@/lib/utils";

export type ButtonVariant = "gold" | "outline-light" | "outline-dark" | "dark";

const base =
  "group inline-flex min-h-12 max-w-full items-center text-center justify-center gap-3 px-7 text-[0.875rem] font-medium uppercase tracking-[0.16em] transition-[background-color,color,border-color] duration-300 ease-luxe focus-visible:outline-offset-4";

const variants: Record<ButtonVariant, string> = {
  gold: "bg-gold text-ink hover:bg-gold-soft",
  dark: "bg-ink text-paper hover:bg-charcoal",
  "outline-light": "border border-paper/30 text-paper hover:border-gold hover:text-gold",
  "outline-dark": "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
};

export function buttonClasses(variant: ButtonVariant = "gold", className?: string): string {
  return cn(base, variants[variant], className);
}
