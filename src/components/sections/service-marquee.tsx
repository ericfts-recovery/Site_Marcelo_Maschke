import { services } from "@/content/services";
import { SparkIcon } from "@/components/ui/icons";

/** Faixa contínua com os serviços (decorativa; a lista real está na seção de serviços). */
export function ServiceMarquee() {
  const items = [...services, ...services];

  return (
    <div aria-hidden="true" className="border-line-dark bg-ink overflow-hidden border-y py-5">
      <div className="animate-marquee flex w-max items-center">
        {items.map((service, index) => (
          <span
            key={`${service.slug}-${index}`}
            className="font-display text-paper/80 flex items-center gap-8 pr-8 text-2xl italic sm:text-3xl"
          >
            {service.name}
            <SparkIcon size={14} className="text-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
