import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { HCPContactForm } from "@/components/forms/HCPContactForm";

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
      <main id="main-content" className="bg-white">
        {/* Hero — photographic, mirrors components/sections/Hero.tsx structure
            with a stronger overlay so this page reads as a calmer, more
            clinical destination than the home page. */}
        <section className="hcp-hero-section">
          <Image
            src="/hero-gi.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/85 via-teal-900/60 to-teal-900/90" />
          <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_20%,rgba(120,191,191,0.30),transparent_60%)]" />

          <div className="relative flex h-full items-center">
            <div className="container-x">
              <div className="max-w-2xl animate-fade-in-up">
                <p className="hero-pretitle">For healthcare professionals</p>
                <h1 className="homepage-hero-title">
                  <span className="block text-teal-300">Clinical resources</span>
                  <span className="block text-white">for medical foods in GI health.</span>
                </h1>
                <p className="hero-subhead">
                  These pages are intended for UK clinicians, pharmacists and
                  other healthcare professionals: pipeline detail, the
                  regulatory category, and direct lines to our medical-information team.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#pipeline" className="hero-cta-primary">
                    View pipeline
                    <span aria-hidden className="ml-2">→</span>
                  </a>
                  <a href="#hcp-contact" className="hero-cta-outline">
                    Request information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline status */}
        <section id="pipeline" className="bg-white py-16 md:py-20">
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
              <div className="flex flex-col border border-teal-100 bg-teal-50 p-7">
                <p className="programme-pretitle">
                  <span className="programme-pretitle-num">Programme 1</span>
                  <span aria-hidden className="programme-pretitle-num">|</span>
                  <span className="programme-pretitle-status-soon">Coming Soon</span>
                </p>
                <h3 className="text-2xl font-bold tracking-tight text-teal-900">
                  Inflammatory Bowel Disease
                </h3>
                <p className="mt-3 text-sm text-teal-900/80">
                  A medical food providing a clinically relevant dose of a
                  highly purified active ingredient, formulated for the dietary
                  management of inflammatory bowel disease (IBD) under medical
                  supervision.
                </p>
                <ul className="mt-4 space-y-2">
                  <ProgrammeBullet>Highly purified formulation</ProgrammeBullet>
                  <ProgrammeBullet>Designed for daily, long-term use</ProgrammeBullet>
                  <ProgrammeBullet>For use under medical supervision</ProgrammeBullet>
                </ul>
                <div className="mt-6">
                  <a
                    href="?product=epa-ibd#hcp-contact"
                    className="cta-teal-sm"
                  >
                    Request product details
                    <span aria-hidden className="ml-2">→</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col border border-teal-100 bg-white p-7">
                <p className="programme-pretitle">
                  <span className="programme-pretitle-num">Programme 2</span>
                  <span aria-hidden className="programme-pretitle-num">|</span>
                  <span className="programme-pretitle-status-dev">In Development</span>
                </p>
                <h3 className="text-2xl font-bold tracking-tight text-teal-900">
                  Irritable Bowel Syndrome
                </h3>
                <p className="mt-3 text-sm text-teal-900/80">
                  A forthcoming medical food designed to deliver a key
                  gut-health compound with a well-established role in
                  gastrointestinal function, developed for the dietary
                  management of irritable bowel syndrome (IBS).
                </p>
                <ul className="mt-4 space-y-2">
                  <ProgrammeBullet>Targeted at IBS dietary management</ProgrammeBullet>
                  <ProgrammeBullet>Convenient oral capsule format</ProgrammeBullet>
                  <ProgrammeBullet>For use under medical supervision</ProgrammeBullet>
                </ul>
                <div className="mt-6">
                  <a
                    href="?product=butyrate-ibs#hcp-contact"
                    className="cta-teal-sm"
                  >
                    Request product details
                    <span aria-hidden className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-teal-900/80">
              Detailed prescribing information, formulation specifications and
              clinical evidence summaries will be published here as products
              become available.
            </p>
          </div>
        </section>

        {/* Join us in our work */}
        <section id="join-us" className="bg-teal-50 py-20 md:py-28">
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-800">
                Collaborate with us
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-teal-900 md:text-4xl">
                Join us in our work.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-teal-900/80">
                We work closely with clinicians, pharmacists and academic
                centres to make medical foods more clinically useful. There are
                four areas where HCP involvement makes the biggest difference.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-px overflow-hidden bg-teal-100 md:grid-cols-2 lg:grid-cols-4">
              {pillars.map((p, i) => (
                <Reveal
                  key={p.label}
                  delay={i * 100}
                  className="group flex flex-col bg-teal-50 p-7 transition-colors hover:bg-white"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center border border-teal-300 bg-white text-teal-700 transition-colors group-hover:border-teal-700">
                    <div className="h-6 w-6">{p.icon}</div>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">
                    {p.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-teal-900/80">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 flex flex-wrap items-center gap-3">
              <a
                href="#hcp-contact"
                className="inline-flex items-center bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-teal-900"
              >
                Get in touch with our medical team
                <span aria-hidden className="ml-2">→</span>
              </a>
              <span className="text-sm text-teal-900/80">
                Your contact request will be received, a member of our team
                will contact you shortly.
              </span>
            </Reveal>
          </div>
        </section>

        {/* Collaborate on VanceHealthHub */}
        <section id="vancehealthhub-collab" className="bg-white py-20 md:py-28">
          <div className="container-x grid items-start gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-800">
                Community partnership
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-teal-900 md:text-4xl">
                Collaborate with us on VanceHealthHub.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-teal-900/80">
                Vance Medical proudly supports{" "}
                <a
                  href="https://www.vancehealthhub.co.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-900"
                >
                  VanceHealthHub.co.uk
                </a>
                , a free, open knowledge platform for people living with IBD,
                IBS and related GI conditions, and for the clinicians who care
                for them.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-teal-900/80">
                We&apos;re always looking for healthcare professionals to help shape
                the content and engage with the community.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.vancehealthhub.co.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-teal-900"
                >
                  Visit VanceHealthHub.co.uk
                  <span aria-hidden className="ml-2">→</span>
                </a>
                <a
                  href="#hcp-contact"
                  className="inline-flex items-center border border-teal-700 bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50"
                >
                  Discuss collaboration
                </a>
              </div>
            </Reveal>

            <Reveal delay={140} className="md:col-span-6">
              <ul className="grid gap-4 sm:grid-cols-2">
                {collabAreas.map((c) => (
                  <li
                    key={c.label}
                    className="card-lift bg-teal-50 p-6 ring-1 ring-teal-100"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-800">
                      {c.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-teal-900/80">
                      {c.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* HCP contact */}
        <section
          id="hcp-contact"
          className="relative overflow-hidden bg-teal-900 py-20 text-white md:py-28"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(600px 300px at 80% 10%, #78BFBF 0%, transparent 60%), radial-gradient(500px 300px at 10% 90%, #AEDBDB 0%, transparent 60%)",
            }}
          />
          <div className="container-x relative grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">
                Medical information
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Request clinical detail or discuss collaboration.
              </h2>
              <p className="mt-5 max-w-lg text-lg text-teal-100">
                Use the form for any clinical, formulation, supply or
                collaboration query. We typically reply within two working days.
              </p>

              <dl className="mt-10 space-y-5">
                <Row label="Medical info">
                  <a
                    href="mailto:medical@vancemedicalfoods.co.uk"
                    className="font-semibold text-white underline decoration-teal-300 underline-offset-4 hover:text-teal-100"
                  >
                    medical@vancemedicalfoods.co.uk
                  </a>
                </Row>
                <Row label="General">
                  <a
                    href="mailto:contact@vancemedicalfoods.co.uk"
                    className="font-semibold text-white underline decoration-teal-300 underline-offset-4 hover:text-teal-100"
                  >
                    contact@vancemedicalfoods.co.uk
                  </a>
                </Row>
                <Row label="Address">
                  <span className="text-teal-100">
                    Vance Medical Foods Ltd, United Kingdom
                  </span>
                </Row>
              </dl>
            </Reveal>

            <Reveal
              delay={140}
              className="card-lift bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur md:col-span-7"
            >
              <h3 className="mb-1 text-xl font-bold tracking-tight">
                Send us an enquiry
              </h3>
              <p className="mb-6 text-sm text-teal-100">
                Reaches our medical-information team. Two-working-day reply.
              </p>
              {/* Suspense boundary required for `useSearchParams()` inside
                  HCPContactForm — without it the whole route opts into
                  dynamic rendering and Next emits a build warning. */}
              <Suspense fallback={<FormSkeleton />}>
                <HCPContactForm />
              </Suspense>
            </Reveal>
          </div>
        </section>

        {/* Regulatory note */}
        <section id="regulatory" className="bg-white py-16 md:py-20">
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
            <p className="mt-4 text-sm text-teal-900/80">
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

function ProgrammeBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-teal-900/80">
      <span
        aria-hidden
        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-teal-700"
      />
      {children}
    </li>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-white/10 pb-4 last:border-0 last:pb-0 lg:grid-cols-[140px_minmax(0,1fr)] lg:items-baseline lg:gap-4">
      <dt className="text-xs font-semibold uppercase tracking-wider text-teal-300">
        {label}
      </dt>
      <dd className="break-words text-base">{children}</dd>
    </div>
  );
}

function FormSkeleton() {
  return (
    <div aria-hidden className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="h-[68px] bg-white/5" />
        <div className="h-[68px] bg-white/5" />
      </div>
      <div className="h-[68px] bg-white/5" />
      <div className="h-[68px] bg-white/5" />
      <div className="h-[140px] bg-white/5" />
    </div>
  );
}

const pillars = [
  {
    label: "Clinical work",
    body:
      "Clinical advisory boards, investigator-initiated studies, and real-world evidence collaboration on FSMP use in GI conditions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M9 3v6H3v6h6v6h6v-6h6V9h-6V3z" />
      </svg>
    ),
  },
  {
    label: "Product development",
    body:
      "Formulation feedback, advisory input on pipeline indications, and dosing rationale grounded in clinical experience.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" />
        <path d="M5 12h14" />
      </svg>
    ),
  },
  {
    label: "Education",
    body:
      "Co-author HCP education materials, or guest-author and peer-review patient-facing content on VanceHealthHub.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 4h11l3 3v13H5z" />
        <path d="M9 11h6M9 15h6M9 7h3" />
      </svg>
    ),
  },
  {
    label: "Patient & caregiver support",
    body:
      "Refer patients to VanceHealthHub resources, or contribute to the support-group and lived-experience content base.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 21s-7-4.5-7-10a4.5 4.5 0 0 1 8-2.7A4.5 4.5 0 0 1 19 11c0 5.5-7 10-7 10z" />
      </svg>
    ),
  },
];

const collabAreas = [
  {
    label: "Content authoring",
    body: "Write or co-write explainers, evidence summaries, or condition guides for HCPs and patients.",
  },
  {
    label: "Clinical review",
    body: "Peer-review existing articles for clinical accuracy, currency, and tone.",
  },
  {
    label: "Community Q&A",
    body: "Answer patient and HCP questions in the Hub's community spaces.",
  },
  {
    label: "Lived-experience referrals",
    body: "Connect patients and caregivers with relevant Hub resources during routine care.",
  },
];
