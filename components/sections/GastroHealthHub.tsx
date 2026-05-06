import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

// Source screenshot is 1688 x 4472 (aspect h/w = 2.65). Frame is rendered at
// aspect-[5/6] (1.2 tall:wide) so the image needs to scroll
//   (2.65 - 1.2) / 2.65 ≈ 54.7% of its own height
// to reveal the rest. The CSS keyframes in globals.css use -54% (rounded down
// so we don't overscroll past the screenshot's bottom edge) and dwell for 8%
// on each end so visitors get a moment to register the top and bottom states.
export function GastroHealthHub() {
  return (
    <section
      id="gastrohealthhub"
      className="relative overflow-hidden bg-teal-50 py-20 md:py-28"
    >
      <div className="container-x grid items-center gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            Community · Free to access
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 md:text-4xl">
            GastroHealthHub: knowledge for patients and practitioners.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-teal-900/80">
            Vance Medical proudly supports{" "}
            <a
              href="https://www.gastrohealthhub.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-900"
            >
              GastroHealthHub.com
            </a>
            , a free, open knowledge platform for people living with
            inflammatory bowel disease (IBD) and associated gastrointestinal
            conditions, and for the clinicians who care for them.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-teal-900/80">
            The Hub brings together patient-friendly explainers, the latest
            clinical evidence, practical guidance on diet and nutrition, and a
            growing community where lived experience and professional expertise
            meet.
          </p>

          <ul className="mt-8 space-y-3">
            <Item>Plain-language guides to IBD, IBS, SIBO and related conditions</Item>
            <Item>Curated clinical content for healthcare professionals</Item>
            <Item>Evidence-informed nutrition and lifestyle resources</Item>
            <Item>A space to share experience, questions and learning</Item>
          </ul>

          <div className="mt-8">
            <a
              href="https://www.gastrohealthhub.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-teal-900"
            >
              Visit GastroHealthHub.com
              <span aria-hidden className="ml-2">
                →
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="md:col-span-6">
          <div className="relative">
            {/* Browser-chrome frame holding the auto-scrolling site preview */}
            <div className="card-lift relative bg-gradient-to-br from-teal-100 to-teal-300 p-4 shadow-card ring-1 ring-teal-300 sm:p-5">
              <div className="overflow-hidden bg-white ring-1 ring-teal-100">
                {/* Faux browser bar */}
                <div className="flex items-center justify-between border-b border-teal-100 bg-teal-50/60 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span aria-hidden className="h-2.5 w-2.5 bg-teal-300" />
                    <span aria-hidden className="h-2.5 w-2.5 bg-teal-500" />
                    <span aria-hidden className="h-2.5 w-2.5 bg-teal-700" />
                  </div>
                  <span className="text-xs font-semibold text-teal-700">
                    gastrohealthhub.com
                  </span>
                </div>
                {/* Scrollable preview window */}
                <div className="relative w-full overflow-hidden bg-white aspect-[5/6]">
                  <div className="absolute inset-x-0 top-0 animate-ghh-scroll">
                    <Image
                      src="/gastrohealthhub-screenshot.png"
                      alt="Preview of the GastroHealthHub website, scrolling through hero, featured content, content discovery and articles sections."
                      width={1688}
                      height={4472}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="block h-auto w-full select-none"
                      priority={false}
                    />
                  </div>
                  {/* Subtle top + bottom fade so the scroll feels less abrupt */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent"
                  />
                </div>
              </div>
            </div>
            <div
              aria-hidden
              className="animate-float-slow absolute -right-6 -top-6 h-24 w-24 bg-teal-500/50 blur-2xl"
            />
            <div
              aria-hidden
              className="animate-float-slow absolute -bottom-8 -left-6 h-32 w-32 bg-teal-300 blur-3xl"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-base text-teal-900/85">
      <span
        aria-hidden
        className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-teal-700"
      />
      {children}
    </li>
  );
}
