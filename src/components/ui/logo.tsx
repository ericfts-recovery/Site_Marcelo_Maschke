import Link from "next/link";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/**
 * Wordmark provisório em tipografia. Substitua pelo logo oficial (SVG) quando
 * o cliente enviar o arquivo.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — página inicial`}
      className={cn("group inline-flex min-h-11 flex-col justify-center leading-none", className)}
    >
      <span className="font-display text-paper group-hover:text-gold text-[1.6rem] tracking-[0.02em] transition-colors sm:text-[1.75rem]">
        Marcelo Maschke
      </span>
      <span className="text-gold mt-1 flex items-center gap-2 text-[0.625rem] font-medium tracking-[0.42em] uppercase">
        <span aria-hidden="true" className="bg-gold/70 h-px w-4" />
        Hair Salon
        <span aria-hidden="true" className="bg-gold/70 h-px w-4" />
      </span>
    </Link>
  );
}
