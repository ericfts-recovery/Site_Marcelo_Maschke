"use client";

import Script from "next/script";
import { useConsent } from "@/components/layout/cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** Google Analytics 4 carregado somente com consentimento (LGPD). */
export function Analytics() {
  const consent = useConsent();
  if (!GA_ID || consent !== "granted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
