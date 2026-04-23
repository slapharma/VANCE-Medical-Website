export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            About Vance Medical
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 md:text-4xl">
            A specialist in medical foods for gastrointestinal health.
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed text-teal-900/80">
            Vance Medical is a UK-based medical foods company focused on
            gastrointestinal health. We develop and supply products for the
            dietary management of specific clinical conditions — formulated to
            be used under medical supervision and supported by a growing body of
            scientific rationale.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-teal-900/80">
            We are the sister company of{" "}
            <a
              href="https://www.slapharma.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-900"
            >
              SLA Pharma
            </a>
            , and continue the work previously carried out under the SLA Health
            name. Together, the group combines pharmaceutical expertise with a
            dedicated nutritional science programme.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <Fact title="UK based" body="Registered in the United Kingdom" />
            <Fact title="Medical foods" body="Formulated under Reg. 609/2013" />
            <Fact title="Clinician-led" body="For use under medical supervision" />
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
