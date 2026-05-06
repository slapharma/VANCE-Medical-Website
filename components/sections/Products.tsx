import { Reveal } from "@/components/ui/Reveal";

type Programme = {
  number: 1 | 2;
  status: "Coming Soon" | "In Development";
  indication: string;
  body: string;
  bullets: string[];
};

const programmes: Programme[] = [
  {
    number: 1,
    status: "Coming Soon",
    indication: "Inflammatory Bowel Disease",
    body:
      "A medical food providing a clinically relevant dose of a highly purified active ingredient, formulated for the dietary management of inflammatory bowel disease (IBD) under medical supervision.",
    bullets: [
      "Highly purified formulation",
      "Designed for daily, long-term use",
      "For use under medical supervision",
    ],
  },
  {
    number: 2,
    status: "In Development",
    indication: "Irritable Bowel Syndrome",
    body:
      "A forthcoming medical food designed to deliver a key gut-health compound with a well-established role in gastrointestinal function, developed for the dietary management of irritable bowel syndrome (IBS).",
    bullets: [
      "Targeted at IBS dietary management",
      "Convenient oral capsule format",
      "For use under medical supervision",
    ],
  },
];

export function Products() {
  return (
    <section id="products" className="section-pad bg-teal-100">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-pretitle">Pipeline</p>
          <h2 className="section-title">
            Medical foods designed with the gut in mind.
          </h2>
          <p className="section-subhead">
            Two indication-focused programmes in active development, built on
            decades of gastrointestinal expertise and a pharma-grade quality
            standard.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {programmes.map((p, i) => {
            const statusClass =
              p.status === "Coming Soon"
                ? "programme-pretitle-status-soon"
                : "programme-pretitle-status-dev";
            return (
              <Reveal
                key={p.number}
                delay={i * 140}
                className="product-card"
              >
                <p className="programme-pretitle">
                  <span className="programme-pretitle-num">
                    Programme {p.number}
                  </span>
                  <span aria-hidden className="programme-pretitle-num">|</span>
                  <span className={statusClass}>{p.status}</span>
                </p>
                <h3 className="text-3xl font-bold tracking-tight text-teal-900">
                  {p.indication}
                </h3>
                <p className="mt-4 text-teal-900/80">{p.body}</p>
                <ul className="mt-6 space-y-2">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-teal-900/80"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-teal-700"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-teal-100 pt-6">
                  <a href="#contact" className="cta-link-arrow">
                    Request clinical information
                    <span aria-hidden className="ml-1">→</span>
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
