/**
 * Fixed-window rate limiter.
 *
 * Deliberately dependency-free and in-process. The honeypot stops naive bots,
 * but any client can POST a Server Action directly in a loop, and every valid
 * request relays mail through our Gmail account — which risks both the inbox
 * and the account's sending reputation.
 *
 * LIMITATION, on purpose: state lives in module memory, so it is per-instance
 * and resets on cold start. On Vercel that means a determined attacker spread
 * across many lambda instances gets a higher effective ceiling than the numbers
 * below suggest. This raises the bar substantially for the realistic case (one
 * script, one address) without adding Redis/Vercel KV and the env config that
 * comes with it. If abuse ever becomes real, swap `consume` for a KV-backed
 * implementation — the call sites don't change.
 *
 * This module is intentionally free of framework imports so the logic can be
 * exercised directly in tests; IP resolution lives in `lib/request-ip.ts`.
 */

export type RateLimitResult = {
  ok: boolean;
  /** Requests left in the current window (0 when blocked). */
  remaining: number;
  /** Seconds until the window resets (0 when not blocked). */
  retryAfterSec: number;
};

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/** Hard ceiling on tracked keys, so a spray of unique IPs can't grow memory without bound. */
const MAX_TRACKED_KEYS = 5000;

function evictExpired(now: number): void {
  for (const [key, bucket] of buckets) {
    if (now >= bucket.resetAt) buckets.delete(key);
  }
  // Still oversized means the traffic is adversarial rather than organic;
  // dropping everything is safe (it only forgives, never over-blocks) and
  // keeps memory bounded.
  if (buckets.size >= MAX_TRACKED_KEYS) buckets.clear();
}

/**
 * Record one attempt against `key` and report whether it is allowed.
 * `now` is injectable so window expiry can be tested without waiting.
 */
export function consume(
  key: string,
  limit: number,
  windowMs: number,
  now: number = Date.now()
): RateLimitResult {
  const bucket = buckets.get(key);

  if (!bucket || now >= bucket.resetAt) {
    if (!bucket && buckets.size >= MAX_TRACKED_KEYS) evictExpired(now);
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfterSec: 0 };
  }

  if (bucket.count >= limit) {
    return {
      ok: false,
      remaining: 0,
      retryAfterSec: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  bucket.count += 1;
  return { ok: true, remaining: limit - bucket.count, retryAfterSec: 0 };
}

/** Test-only: drop all state. */
export function __resetRateLimits(): void {
  buckets.clear();
}
