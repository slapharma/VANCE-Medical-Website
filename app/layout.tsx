import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/components/ui/CookieBanner";

const SITE_URL = "https://www.vancemedical.co.uk";
const SITE_NAME = "Vance Medical Foods";
const SITE_TITLE =
  "Vance Medical Foods | Medical Foods for Gastrointestinal Health";
const SITE_DESC =
  "Vance Medical Foods Ltd develops medical foods for the dietary management of gastrointestinal conditions, with an indication-led pipeline targeting inflammatory bowel disease (IBD) and irritable bowel syndrome (IBS).";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description:
      "Specialist medical foods for the dietary management of gastrointestinal conditions.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Specialist medical foods for the dietary management of gastrointestinal conditions.",
  },
  robots: { index: true, follow: true },
  // Note: app/icon.tsx, app/apple-icon.tsx, app/opengraph-image.tsx and
  // app/twitter-image.tsx are picked up by Next.js's file conventions; no
  // explicit `icons` config needed here.
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vance Medical Foods Ltd",
  alternateName: "Vance Medical",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESC,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@vancemedical.co.uk",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "medical information",
      email: "medical@vancemedical.co.uk",
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  knowsAbout: [
    "Medical foods",
    "Foods for Special Medical Purposes",
    "Gastrointestinal health",
    "Inflammatory bowel disease",
    "Irritable bowel syndrome",
    "Eicosapentaenoic acid",
    "Butyrate",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESC,
  publisher: { "@type": "Organization", name: "Vance Medical Foods Ltd" },
  inLanguage: "en-GB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* No-JS fallback: ensures Reveal-initialised content is visible for
            crawlers and users with JavaScript disabled. Pairs with the
            prefers-reduced-motion CSS override in globals.css. */}
        <noscript>
          <style>{`
            .transition-all.duration-700 { opacity: 1 !important; transform: none !important; }
          `}</style>
        </noscript>
      </head>
      <body>
        {children}
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
