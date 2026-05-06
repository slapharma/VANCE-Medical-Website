"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Pillar = {
  key: string;
  tab: string;
  title: string;
  body: string;
  highlights: { label: string; value: string }[];
};

const pillars: Pillar[] = [
  {
    key: "what",
    tab: "Medical foods",
    title: "Medical Food Standards",
    body:
      "Medical foods (known in the UK and EU as Foods for Special Medical Purposes, FSMP) are a regulated category formulated for patients with specific conditions. They are used under medical supervision, sitting distinct from supplements and from medicines.",
    highlights: [
      { label: "Category", value: "FSMP (UK / EU)" },
      { label: "Use", value: "Under medical supervision" },
      { label: "Distinct from", value: "Supplements & medicines" },
    ],
  },
  {
    key: "why",
    tab: "Gastro Focus",
    title: "Gastroenterology Health",
    body:
      "The gut is central to absorption, immunity and systemic health. In many gastrointestinal conditions, targeted nutrition can meaningfully support symptom management and disease-related nutritional needs alongside conventional care.",
    highlights: [
      { label: "Therapeutic lever", value: "Nutrition" },
      { label: "Indications", value: "IBD · IBS · related GI" },
      { label: "Used alongside", value: "Conventional care" },
    ],
  },
  {
    key: "approach",
    tab: "Our approach",
    title: "Pharmaceutical Approach",
    body:
      "We select nutrients with a recognised physiological role, formulate to a clinically relevant specification, and partner with healthcare professionals to ensure safe, appropriate use, held to the same rigour we apply to licensed medicines.",
    highlights: [
      { label: "Formulation", value: "Clinically relevant" },
      { label: "Quality", value: "Pharma-grade rigour" },
      { label: "Partnership", value: "Clinician-led" },
    ],
  },
];

export function Science() {
  const [active, setActive] = useState<string>(pillars[0].key);
  const current = pillars.find((p) => p.key === active) ?? pillars[0];

  return (
    <section id="science" className="section-pad bg-white">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="section-pretitle">Science</p>
          <h2 className="section-title">
            Targeted nutrition, used under medical supervision.
          </h2>
          <p className="section-subhead">
            The science behind our products, our focus on gastrointestinal
            health, and the quality standards we maintain.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          {/* Tab list */}
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="Science topics"
            className="md:col-span-4"
          >
            <div className="flex flex-col gap-0">
              {pillars.map((p) => {
                const isActive = p.key === active;
                return (
                  <button
                    key={p.key}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`science-panel-${p.key}`}
                    id={`science-tab-${p.key}`}
                    onClick={() => setActive(p.key)}
                    className={`group relative flex w-full shrink-0 items-center gap-4 border-l-2 px-5 py-5 text-left transition-colors md:w-auto ${
                      isActive
                        ? "border-l-teal-700 bg-teal-50 text-teal-900"
                        : "border-l-teal-100 text-teal-900/60 hover:border-l-teal-300 hover:bg-teal-50/50 hover:text-teal-900"
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                        isActive ? "text-teal-700" : "text-teal-700/50"
                      }`}
                    >
                      0{pillars.indexOf(p) + 1}
                    </span>
                    <span className="text-base font-semibold tracking-tight">
                      {p.tab}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panel */}
          <div
            id={`science-panel-${current.key}`}
            role="tabpanel"
            aria-labelledby={`science-tab-${current.key}`}
            className="md:col-span-8"
          >
            <article
              key={current.key}
              className="animate-fade-in-up bg-teal-50 p-8 ring-1 ring-teal-100 md:p-10"
            >
              <h3 className="text-2xl font-bold tracking-tight text-teal-900 md:text-3xl">
                {current.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-teal-900/85 md:text-lg">
                {current.body}
              </p>
              <dl className="mt-8 grid gap-px overflow-hidden bg-teal-200/40 sm:grid-cols-3">
                {current.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="bg-teal-50 p-5 transition-colors hover:bg-white"
                  >
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-700">
                      {h.label}
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-teal-900">
                      {h.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
