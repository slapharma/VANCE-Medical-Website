const pillars = [
  {
    title: "What are medical foods?",
    body:
      "Medical foods — known in the UK and EU as Foods for Special Medical Purposes (FSMP) — are a regulated category of products formulated to meet the nutritional requirements of patients with specific diseases, disorders or medical conditions. They are used under medical supervision and are distinct from food supplements and medicines.",
  },
  {
    title: "Why gastroenterology?",
    body:
      "The gastrointestinal tract is central to nutrient absorption, immune function and systemic health. In many GI conditions, targeted nutritional intervention can meaningfully support the management of symptoms and disease-related nutritional needs alongside conventional care.",
  },
  {
    title: "Our approach",
    body:
      "We select nutrients with a recognised physiological role, formulate them to a clinically relevant specification, and work closely with healthcare professionals to ensure our products are used appropriately and safely.",
  },
];

export function Science() {
  return (
    <section id="science" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            Science &amp; category
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 md:text-4xl">
            Targeted nutrition, used under medical supervision.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl bg-teal-50 p-8 ring-1 ring-teal-100"
            >
              <h3 className="text-lg font-semibold text-teal-900">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-teal-900/80">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
