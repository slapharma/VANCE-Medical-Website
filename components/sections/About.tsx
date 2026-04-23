export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            About Vance Medical
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 md:text-4xl">
            Two decades of gastroenterology expertise, now applied to medical foods.
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed text-teal-900/80">
            Vance Medical is the medical foods company of the{" "}
            <a
              href="https://www.slapharma.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-900"
            >
              SLA Pharma group
            </a>
            . SLA Pharma has spent more than 20 years developing and
            commercialising specialist treatments for gastrointestinal conditions
            — from chronic anal fissure to ulcerative colitis — working
            alongside leading clinicians, researchers and academic centres
            across the UK, Europe and beyond.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-teal-900/80">
            That heritage is the foundation of Vance Medical. We carry forward
            the same clinical rigour, regulatory expertise and partnership
            model, but apply it to a different therapeutic lever: nutrition.
            Our products are <strong className="text-teal-900">medical foods</strong>{" "}
            (Foods for Special Medical Purposes), formulated for the dietary
            management of specific gastrointestinal conditions and intended for
            use under medical supervision.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-teal-900/80">
            Previously operating under the SLA Health name, the business has
            been renamed <strong className="text-teal-900">Vance Medical</strong>{" "}
            to reflect its focus on specialist medical foods and a growing
            pipeline dedicated to gut health.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <Fact title="20+ years" body="Gastroenterology heritage" />
            <Fact title="UK based" body="Part of the SLA Pharma group" />
            <Fact title="FSMP category" body="Regulated medical foods" />
            <Fact title="Clinician-led" body="Used under medical supervision" />
          </dl>
        </div>
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
