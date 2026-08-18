import "server-only";
import { headers } from "next/headers";

/**
 * Best-effort client identifier for rate limiting.
 *
 * Vercel sets `x-forwarded-for`; the left-most entry is the originating client.
 * Locally there is no proxy header, so every caller collapses to "local" — which
 * is fine, and makes the limiter easy to exercise in development.
 *
 * `x-forwarded-for` is client-supplied and therefore spoofable in general. Behind
 * Vercel's proxy the left-most value is set by the platform, so it is trustworthy
 * for this deployment; do not reuse this helper for authorisation decisions.
 */
export function clientIp(): string {
  const h = headers();
  const forwarded = h.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  return first || h.get("x-real-ip")?.trim() || "local";
}
