import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="home-hero-section">
      <Image
        src="/hero-gi.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-teal-900/40 to-teal-900/80" />
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_20%,rgba(120,191,191,0.35),transparent_60%)]" />

      <div className="relative flex h-full items-center">
        <div className="container-x">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="hero-pretitle">
              Medical foods · Gastrointestinal health
            </p>
            <h1 className="homepage-hero-title">
              <span className="block text-teal-300">Targeted nutrition</span>
              <span className="block text-white">for gastrointestinal health.</span>
            </h1>
            <p className="hero-subhead">
              Vance Medical Foods develops medical foods for the dietary management
              of gastrointestinal conditions, bridging the worlds of
              pharmaceutical science and medical nutrition.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="hero-cta-primary">
                Explore our pipeline
                <span aria-hidden className="ml-2">→</span>
              </a>
              <a href="#vancehealthhub" className="hero-cta-outline">
                See our Health Hub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
