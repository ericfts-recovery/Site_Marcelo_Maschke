import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { buttonClasses } from "@/components/ui/button-styles";
import { PageHero } from "@/components/sections/page-hero";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="Erro 404" title="Esta página saiu do salão.">
        <p className="text-ash mt-6 max-w-xl text-lg">
          O endereço pode ter mudado ou não existe mais. Que tal voltar ao início ou conhecer nossos
          serviços?
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className={buttonClasses("gold")}>
            Voltar ao início
          </Link>
          <WhatsappButton location="not_found" variant="outline-light" />
        </div>
      </PageHero>
      <nav aria-label="Serviços" className="container-page py-16">
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/servicos/${service.slug}`}
                className="font-display hover:text-gold-deep inline-flex min-h-12 items-center text-3xl"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
