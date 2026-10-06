import Link from "next/link";
import { services } from "@/content/services";
import type { Service } from "@/types/content";
import { ArrowRightIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesGrid() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="bg-paper py-20 sm:py-28 lg:py-36"
    >
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="servicos-title"
            index="02"
            eyebrow="Serviços"
            title={
              <>
                Do primeiro fio ao <em className="text-gold-deep">último detalhe</em>.
              </>
            }
          />
          <p className="text-stone max-w-sm text-lg">
            Cada serviço começa com uma avaliação. É assim que garantimos um resultado com a sua
            cara — e saúde para o seu cabelo.
          </p>
        </div>

        <ul className="border-line-light bg-line-light mt-14 grid gap-px border sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug} className="flex">
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicos/${service.slug}`}
      className="group bg-paper ease-luxe hover:bg-ink focus-visible:bg-ink relative flex w-full flex-col p-7 transition-colors duration-500 focus-visible:outline-offset-[-4px] sm:p-8 lg:min-h-[22rem]"
    >
      <span className="font-display text-gold-deep group-hover:text-gold group-focus-visible:text-gold text-lg transition-colors duration-500">
        {service.number}
      </span>
      <h3 className="text-ink group-hover:text-paper group-focus-visible:text-paper mt-6 text-[2rem] transition-colors duration-500 lg:mt-auto">
        {service.name}
      </h3>
      <p className="text-stone group-hover:text-ash group-focus-visible:text-ash mt-3 transition-colors duration-500">
        {service.summary}
      </p>
      <span className="text-ink group-hover:text-gold group-focus-visible:text-gold mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-[0.16em] uppercase transition-colors duration-500">
        Conhecer
        <ArrowRightIcon
          size={16}
          className="transition-transform duration-500 group-hover:translate-x-1.5"
        />
      </span>
      <span
        aria-hidden="true"
        className="bg-gold ease-luxe absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
      />
    </Link>
  );
}
