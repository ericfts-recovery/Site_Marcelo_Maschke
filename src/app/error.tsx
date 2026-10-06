"use client";

import { buttonClasses } from "@/components/ui/button-styles";
import { PageHero } from "@/components/sections/page-hero";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export default function ErrorPage({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <PageHero eyebrow="Algo deu errado" title="Tivemos um imprevisto por aqui.">
      <p className="text-ash mt-6 max-w-xl text-lg">
        Tente novamente em instantes. Se preferir, fale com a gente pelo WhatsApp — respondemos
        rapidinho.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => retry()} className={buttonClasses("gold")}>
          Tentar novamente
        </button>
        <WhatsappButton location="error_page" variant="outline-light" />
      </div>
    </PageHero>
  );
}
