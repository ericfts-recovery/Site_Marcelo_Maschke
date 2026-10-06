"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  getConsent,
  getServerConsent,
  resetConsent,
  setConsent,
  subscribeConsent,
} from "@/lib/consent";
import { buttonClasses } from "@/components/ui/button-styles";

export function useConsent() {
  return useSyncExternalStore(subscribeConsent, getConsent, getServerConsent);
}

/** Banner LGPD: cookies de análise só são ativados após o "Aceitar". */
export function CookieConsent() {
  const consent = useConsent();
  if (consent !== "unknown") return null;

  return (
    <section
      aria-label="Aviso de cookies"
      className="border-line-dark bg-graphite text-paper fixed inset-x-3 bottom-[calc(var(--mobile-bar-h)+env(safe-area-inset-bottom)+0.75rem)] z-50 border p-5 shadow-[0_20px_60px_-20px_rgb(0_0_0/0.6)] sm:inset-x-auto sm:left-6 sm:max-w-md lg:bottom-6"
    >
      <p className="text-ash text-[0.9375rem]">
        Usamos cookies de análise para entender como o site é usado e melhorar sua experiência. Você
        decide.{" "}
        <Link
          href="/politica-de-privacidade"
          className="text-paper decoration-gold underline underline-offset-4"
        >
          Saiba mais
        </Link>
        .
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setConsent("denied")}
          className={buttonClasses("outline-light", "px-4")}
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => setConsent("granted")}
          className={buttonClasses("gold", "px-4")}
        >
          Aceitar
        </button>
      </div>
    </section>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={resetConsent} className={className}>
      Preferências de cookies
    </button>
  );
}
