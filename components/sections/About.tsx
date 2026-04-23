import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            About Vance Medical Foods
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 md:text-4xl">
            Two decades of gastroenterology expertise, applied to medical foods.
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-7">
          <p className="text-lg leading-relaxed text-teal-900/80">
            Vance Medical Foods is the medical foods company of the{" "}
            <a
              href="https://www.slapharma.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-900"
            >
              SLA Pharma group
            </a>{" "}
            — drawing on more than 20 years of specialist gastrointestinal
            treatment development alongside leading clinicians and academic
            centres.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-teal-900/80">
            We apply that same clinical rigour to a different therapeutic
            lever: nutrition. Our products are{" "}
            <strong className="text-teal-900">medical foods</strong> (FSMP),
            formulated for the dietary management of specific GI conditions and
            used under medical supervision. Previously known as SLA Health, the
            business is now{" "}
            <strong className="text-teal-900">Vance Medical Foods Ltd</strong>.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <Fact title="20+ years" body="Gastroenterology heritage" />
            <Fact title="UK based" body="SLA Pharma group" />
            <Fact title="FSMP" body="Regulated medical foods" />
            <Fact title="Clinician-led" body="Under medical supervision" />
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Fact({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <dt className="text-sm font-semibold text-teal-700">{title}</dt>
      <dd className="mt-1 text-sm text-teal-900/70">{body}</dd>
    </div>
  );
}
