import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

type Props = {
  title: string;
  lastUpdated: string;
  intro?: string;
  children: React.ReactNode;
};

/**
 * LegalShell — shared layout for /legal/* pages. Renders the same Header
 * and Footer as the home page, plus a constrained prose column with the
 * page title, last-updated stamp and brief intro.
 *
 * Long-form prose styles are applied via the local `legal-prose` utility
 * class so we don't pull in the Tailwind typography plugin.
 */
export function LegalShell({ title, lastUpdated, intro, children }: Props) {
  return (
    <>
      <Header />
      <main className="bg-white py-16 md:py-24">
        <div className="container-x mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-teal-900 md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-teal-900/60">
            Last updated: {lastUpdated}
          </p>
          {intro && (
            <p className="mt-6 text-lg leading-relaxed text-teal-900/85">
              {intro}
            </p>
          )}
          <div className="legal-prose mt-10">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
