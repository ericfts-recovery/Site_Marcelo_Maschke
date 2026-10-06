/**
 * Rate limit em memória (janela fixa por IP).
 * Suficiente para um site institucional; em serverless cada instância tem seu
 * próprio contador. Para tráfego alto, troque por Upstash Redis ou Vercel KV.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(key: string, now: number = Date.now()): boolean {
  const entry = hits.get(key);

  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}
