export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-grad"
    >
      <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 md:py-28 lg:py-32">
        <div className="relative z-10 max-w-xl">
          <p className="mb-4 inline-block rounded-full border border-teal-300 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            Medical foods · Gastroenterology
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-teal-900 md:text-5xl lg:text-6xl">
            Nutrition with a <span className="text-teal-700">clinical purpose.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-teal-900/80 md:text-xl">
            Vance Medical develops medical foods for the dietary management of
            gastrointestinal conditions — bringing targeted, evidence-informed
            nutrition to patients and the clinicians who care for them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-card hover:bg-teal-900 transition-colors"
            >
              Our products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-teal-700 bg-white/70 px-6 py-3 text-sm font-semibold text-teal-900 hover:bg-white transition-colors"
            >
              Contact the team
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative ml-auto h-[360px] w-full max-w-md rounded-3xl bg-white/60 p-6 shadow-card ring-1 ring-teal-300 md:h-[420px]">
            <div className="grid h-full grid-rows-3 gap-4">
              <StatCard label="Therapeutic focus" value="Gastrointestinal" />
              <StatCard label="Product category" value="Medical foods (FSMP)" />
              <StatCard label="Pipeline" value="EPAVANCE · BVANCE" />
            </div>
          </div>
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal-300 blur-2xl" />
          <div className="absolute -bottom-8 -left-4 h-32 w-32 rounded-full bg-teal-500/40 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-teal-50 px-5 py-4 ring-1 ring-teal-100">
      <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">{label}</span>
      <span className="text-base font-semibold text-teal-900">{value}</span>
    </div>
  );
}
