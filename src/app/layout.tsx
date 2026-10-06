import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/content/site";
import { hairSalonSchema } from "@/lib/schema";
import { Analytics } from "@/components/layout/analytics";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/ui/json-ld";
import "./globals.css";

// Fontes auto-hospedadas (OFL) via next/font/local: zero requisição a terceiros.
const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-latin-wght-normal.woff2", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-wght-italic.woff2", style: "italic" },
  ],
  weight: "300 700",
  variable: "--font-cormorant",
  display: "swap",
});

const jost = localFont({
  src: "./fonts/jost-latin-wght-normal.woff2",
  weight: "300 700",
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Visagismo, Mechas e Noivas`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.owner }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#conteudo"
          className="bg-gold text-ink sr-only z-[60] px-4 py-3 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileCtaBar />
        <CookieConsent />
        <Analytics />
        <JsonLd data={hairSalonSchema()} />
      </body>
    </html>
  );
}
