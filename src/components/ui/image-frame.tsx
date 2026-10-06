import Image from "next/image";
import type { ImageAsset } from "@/types/content";
import { cn } from "@/lib/utils";
import { HairLines } from "@/components/ui/hair-lines";

type ImageFrameProps = {
  image?: ImageAsset;
  /** Legenda exibida enquanto a foto real não é enviada. */
  placeholderLabel: string;
  shape?: "arch" | "rect";
  tone?: "dark" | "light";
  /** Classe de proporção, ex.: "aspect-[3/4]". Reserva espaço e evita CLS. */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  /** Filete dourado deslocado atrás da imagem. */
  outline?: boolean;
  className?: string;
};

export function ImageFrame({
  image,
  placeholderLabel,
  shape = "rect",
  tone = "dark",
  aspect = "aspect-[3/4]",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  outline = false,
  className,
}: ImageFrameProps) {
  const shapeClass = shape === "arch" ? "arch" : "";

  return (
    <div className={cn("relative", className)}>
      {outline && (
        <div
          aria-hidden="true"
          className={cn(
            "border-gold/60 absolute inset-0 translate-x-3 translate-y-3 border sm:translate-x-5 sm:translate-y-5",
            shapeClass,
          )}
        />
      )}
      <div className={cn("relative overflow-hidden", aspect, shapeClass)}>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <Placeholder label={placeholderLabel} tone={tone} />
        )}
      </div>
    </div>
  );
}

function Placeholder({ label, tone }: { label: string; tone: "dark" | "light" }) {
  const isDark = tone === "dark";

  return (
    <div
      role="img"
      aria-label={`Espaço reservado para foto: ${label}`}
      className={cn(
        "absolute inset-0 flex items-end",
        isDark
          ? "bg-[radial-gradient(120%_80%_at_30%_20%,#2c2c2b_0%,#161616_55%,#0e0e0e_100%)]"
          : "bg-[radial-gradient(120%_80%_at_30%_20%,#ffffff_0%,#efeeeb_55%,#e2e1dd_100%)]",
      )}
    >
      <HairLines
        className={cn(
          "absolute inset-0 h-full w-full",
          isDark ? "text-gold/50" : "text-gold-deep/35",
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl italic",
          isDark ? "text-gold/30" : "text-gold-deep/25",
        )}
      >
        MM
      </span>
      <span
        className={cn(
          "relative m-4 border-l px-3 py-1 text-xs tracking-[0.12em] uppercase",
          isDark ? "border-gold/60 text-ash" : "border-gold-deep/60 text-stone",
        )}
      >
        Foto: {label}
      </span>
    </div>
  );
}
