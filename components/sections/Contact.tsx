import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden bg-teal-900 text-white"
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
          <p className="section-pretitle-on-dark">Get in touch</p>
          <h2 className="section-title-on-dark">
            For healthcare professionals and partners.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-teal-100">
            Clinicians, pharmacists and partners can contact us for clinical
            information, supply enquiries and partnership opportunities.
          </p>

          <dl className="mt-10 space-y-5">
            <Row label="General enquiries">
              <a
                href="mailto:contact@vancemedicalfoods.co.uk"
                className="font-semibold text-white underline decoration-teal-300 underline-offset-4 hover:text-teal-100"
              >
                contact@vancemedicalfoods.co.uk
              </a>
            </Row>
            <Row label="Medical information">
              <a
                href="mailto:medical@vancemedicalfoods.co.uk"
                className="font-semibold text-white underline decoration-teal-300 underline-offset-4 hover:text-teal-100"
              >
                medical@vancemedicalfoods.co.uk
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
            Send us a message
          </h3>
          <p className="mb-6 text-sm text-teal-100">
            We typically respond within two working days.
          </p>
          <ContactForm />
        </Reveal>
      </div>
    </section>
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
