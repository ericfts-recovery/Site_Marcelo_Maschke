export type AnalyticsEvent =
  | "whatsapp_click"
  | "phone_click"
  | "instagram_click"
  | "cta_click"
  | "booking_submit"
  | "booking_error"
  | "map_open";

export type AnalyticsParams = Record<string, string | number | undefined>;

type Gtag = (command: "event", eventName: string, params?: AnalyticsParams) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

/**
 * Dispara eventos para o GA4 (gtag) e para o dataLayer (GTM).
 * Se o visitante não consentiu, o gtag não foi carregado e nada é enviado.
 */
export function track(event: AnalyticsEvent, params: AnalyticsParams = {}): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
  window.dataLayer?.push({ event, ...params });
}
