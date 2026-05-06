import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "For healthcare professionals | Vance Medical Foods",
  description:
    "Information for UK healthcare professionals about Vance Medical Foods' pipeline of medical foods (Foods for Special Medical Purposes) for gastrointestinal health.",
  alternates: { canonical: "/healthcare-professionals" },
  // No noindex — we want HCP-targeted pages discoverable. The self-declaration
  // is a soft gate (localStorage), not a content restriction.
};

export default function HCPPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-teal-50 py-20 md:py-28">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(700px 400px at 80% 20%, rgba(120,191,191,0.55), transparent 60%), radial-gradient(500px 300px at 10% 90%, rgba(174,219,219,0.55), transparent 60%)",
            }}
          />
          <div className="container-x relative max-w-3xl">
            <p className="mb-5 inline-block border border-teal-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              For healthcare professionals
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-teal-900 md:text-5xl">
              Clinical resources for medical foods in gastrointestinal health.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-teal-900/80">
              These pages are intended for UK clinicians, pharmacists and
              other healthcare professionals. Information here describes the
              regulatory category, our pipeline status, and how to request
              clinical detail.
            </p>
          </div>
        </section>

        {/* Pipeline status */}
        <section className="bg-white py-16 md:py-20">
          <div className="container-x max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-teal-900">
              Pipeline status
            </h2>
            <p className="mt-4 text-base leading-relaxed text-teal-900/80">
              Vance Medical Foods develops medical foods (Foods for Special
              Medical Purposes, FSMP) for the dietary management of specific
              gastrointestinal conditions, used under medical supervision. Our
              two named products are at the following stages:
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="border border-teal-100 bg-teal-50 p-7">
                <span className="inline-flex bg-teal-700 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  Coming soon
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                  Omega-3 (EPA) medical food
                </p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-teal-900">
                  Inflammatory bowel disease
                </h3>
                <p className="mt-3 text-sm text-teal-900/80">
                  Highly purified eicosapentaenoic acid (EPA) formulation,
                  designed for daily long-term use under medical supervision.
                  Detailed clinical specification available on request.
                </p>
              </div>
              <div className="border border-teal-100 bg-white p-7">
                <span className="inline-flex border border-teal-700 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-teal-700">
                  In development
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                  Butyrate capsule
                </p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-teal-900">
                  Irritable bowel syndrome
                </h3>
                <p className="mt-3 text-sm text-teal-900/80">
                  Butyrate capsule for the dietary management of irritable
                  bowel syndrome, addressing conditions where butyrate
                  availability is a therapeutic target.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-teal-900/70">
              Detailed prescribing information, formulation specifications and
              clinical evidence summaries will be published here as products
              become available. To be notified, please contact our medical
              information team.
            </p>
          </div>
        </section>

        {/* Request information */}
        <section className="bg-teal-100 py-16 md:py-20">
          <div className="container-x max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-teal-900">
              Request clinical information
            </h2>
            <p className="mt-4 text-base leading-relaxed text-teal-900/80">
              For clinical detail, formulation queries, or supply enquiries,
              please use the contact form on the home page (selecting{" "}
              <strong>Healthcare professional</strong>) or email our medical
              information team directly.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-teal-900"
              >
                Contact form
                <span aria-hidden className="ml-2">
                  →
                </span>
              </a>
              <a
                href="mailto:medical@vancemedical.co.uk"
                className="inline-flex items-center border border-teal-700 bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition-colors hover:bg-white/70"
              >
                medical@vancemedical.co.uk
              </a>
            </div>
          </div>
        </section>

        {/* Regulatory note */}
        <section className="bg-white py-16 md:py-20">
          <div className="container-x max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-teal-900">
              Regulatory category
            </h2>
            <p className="mt-4 text-base leading-relaxed text-teal-900/80">
              Our products are <strong>medical foods</strong> (in the UK and
              EU known as Foods for Special Medical Purposes, or FSMP), a
              regulated category distinct from food supplements and from
              medicines. They are formulated for the dietary management of
              specific conditions and are intended for use under medical
              supervision.
            </p>
            <p className="mt-4 text-sm text-teal-900/70">
              This page does not constitute promotion of a medicinal product.
              Information is provided to support clinical decision-making by
              UK healthcare professionals. Materials referencing prescribing
              information will be subject to appropriate codes of practice
              when those materials become available.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
