/**
 * Store mínimo de consentimento de cookies (LGPD), lido via useSyncExternalStore.
 * "unknown" = ainda não decidiu (ou renderização no servidor).
 */
export type ConsentState = "granted" | "denied" | "unknown";

const STORAGE_KEY = "mm-cookie-consent";
const CHANGE_EVENT = "mm-consent-change";

export function getConsent(): ConsentState {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : "unknown";
  } catch {
    return "unknown";
  }
}

export function getServerConsent(): ConsentState {
  return "unknown";
}

export function setConsent(value: Exclude<ConsentState, "unknown">): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Armazenamento bloqueado: a escolha vale só para esta visita.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function resetConsent(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignora: sem armazenamento não há o que limpar.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribeConsent(callback: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
