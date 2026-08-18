/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

// The site loads zero third-party resources, so `default-src 'self'` is
// achievable. Two necessary relaxations:
//  - style-src 'unsafe-inline': Tailwind emits inline style attributes, and
//    layout.tsx carries an inline <style> in its <noscript> fallback.
//  - script-src 'unsafe-inline': Next's App Router bootstrap and the two
//    JSON-LD blocks are inline. Nonces would need middleware; not worth
//    making every route dynamic for a fully static marketing site.
// 'unsafe-eval' is dev-only (React Refresh).
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

// The canonical origin. Every metadata surface already agrees on it —
// app/layout.tsx (SITE_URL), app/sitemap.ts (BASE) and app/robots.ts — and the
// secondary domains below exist to funnel into it, not to serve alongside it.
const CANONICAL_ORIGIN = "https://www.vancemedicalfoods.co.uk";

// Every hostname pointed at this project that is NOT the canonical one.
//
// All of these were attached to the Vercel project as plain aliases, so each
// served a full, independently reachable copy of the site under a 200 and
// deferred to the canonical only through the <link rel="canonical"> tag in
// layout.tsx. That tag is a hint search engines are free to ignore; a 308 is
// not. Three live origins for one company splits ranking signals and triples
// the surface anyone has to keep an eye on.
//
// vance-medical-website.vercel.app is deliberately absent. It is the origin the
// uptime dashboard probes directly (vmw-app-home, vmw-app-sitemap and the rest),
// and redirecting it would point those checks at the public domain, so a broken
// deployment could still look healthy through a working alias. Preview
// deployment URLs are likewise untouched.
const NON_CANONICAL_HOSTS = [
  "vancemedical.co.uk",
  "www.vancemedical.co.uk",
  "vancemedicalfoods.com",
  "www.vancemedicalfoods.com",
  // The apex of the canonical domain itself. Vercel already 308s it to www at
  // the platform level; stating it here means the repo describes the whole
  // routing story rather than half of it, and it keeps working if that
  // platform-level setting is ever cleared.
  "vancemedicalfoods.co.uk",
];

const nextConfig = {
  reactStrictMode: true,
  // Don't advertise the framework version.
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // 308 rather than 302: permanent, and it preserves the request method. Path
  // is carried across by :path*; Next forwards the query string on its own.
  async redirects() {
    return NON_CANONICAL_HOSTS.map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: `${CANONICAL_ORIGIN}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
