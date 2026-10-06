import { cn } from "@/lib/utils";

type HairLinesProps = {
  className?: string;
  animated?: boolean;
};

/**
 * Ornamento assinatura: fios finos e fluidos em dourado, como mechas em
 * movimento. Puramente decorativo.
 */
export function HairLines({ className, animated = false }: HairLinesProps) {
  return (
    <svg
      viewBox="0 0 600 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", animated && "animate-strand", className)}
    >
      <g stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
        <path pathLength={1} d="M120 -20C60 160 260 260 210 420S40 640 140 820" />
        <path pathLength={1} d="M170 -20C110 170 300 270 255 430S95 650 190 820" opacity="0.8" />
        <path pathLength={1} d="M220 -20C165 180 345 280 300 440S150 660 240 820" opacity="0.6" />
        <path pathLength={1} d="M270 -20C220 190 390 290 345 450S205 670 290 820" opacity="0.45" />
        <path pathLength={1} d="M320 -20C275 200 435 300 390 460S260 680 340 820" opacity="0.3" />
        <path pathLength={1} d="M370 -20C330 210 480 310 435 470S315 690 390 820" opacity="0.2" />
      </g>
    </svg>
  );
}
