/** Junta classes condicionais sem depender de bibliotecas extras. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Valores entre [COLCHETES] são placeholders ainda não preenchidos. */
export function isPlaceholder(value: string | undefined): boolean {
  if (!value) return true;
  return /\[[^\]]+\]/.test(value);
}

export function absoluteUrl(path: string, baseUrl: string): string {
  return new URL(path, baseUrl).toString();
}
