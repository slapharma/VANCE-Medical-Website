import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    label: "Evidence",
    body:
      "Every product and piece of content we produce meets the highest scientific and regulatory standards, rooted in peer-reviewed clinical research.",
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
    label: "Patient",
    body:
      "Every solution is designed around the real-world challenges patients face, not just clinical endpoints. Lived experience matters.",
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
  {
    label: "Pharma",
    body:
      "Our medical food products are developed with the same rigour applied to licensed medicines, setting a quality benchmark no ordinary supplement can match.",
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
    label: "Global",
    body:
      "With a regulatory footprint spanning multiple continents, Vance Medical delivers consistent, trusted solutions wherever patients and clinicians need them.",
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
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
];

export function Mission() {
  return (
    <section
      id="mission"
      className="section-pad relative overflow-hidden bg-teal-900 text-white"
    >
      {/* Decorative ring + gradient */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(900px 500px at 90% -10%, rgba(120,191,191,0.5), transparent 60%), radial-gradient(700px 400px at -10% 110%, rgba(174,219,219,0.35), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-[480px] w-[480px] border border-white/10"
        style={{ borderRadius: "9999px" }}
      />

      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <p className="section-pretitle-on-dark">Our mission</p>
          <h2 className="section-title-on-dark">
            Bridging science &amp; patient wellbeing.
          </h2>
          <p className="section-subhead-on-dark">
            At Vance Medical, our mission is to empower patients living with
            chronic gastrointestinal conditions by making world-class clinical
            nutrition science accessible, actionable and personal.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 100}
              className="group flex flex-col bg-teal-900 p-7 transition-colors hover:bg-teal-900/60"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-teal-300/40 bg-white/5 text-teal-300 transition-colors group-hover:border-teal-300 group-hover:text-white">
                <div className="h-6 w-6">{p.icon}</div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                {p.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-teal-100/85">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
