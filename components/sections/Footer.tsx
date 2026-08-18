import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const siteLinks = [
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#science", label: "Science" },
  { href: "/#vancehealthhub", label: "VanceHealthHub" },
  { href: "/#contact", label: "Contact" },
];

const legalLinks = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal/accessibility", label: "Accessibility" },
  { href: "/legal/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-teal-100 bg-teal-50 py-12">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              aria-label="Vance Medical Foods — home"
              className="-my-1 inline-block"
            >
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-teal-900/75">
              Vance Medical Foods Ltd develops medical foods (Foods for Special
              Medical Purposes) for the dietary management of gastrointestinal
              conditions, used under medical supervision.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              Site
            </h3>
            <ul className="space-y-3 text-sm text-teal-900/85">
              {siteLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition-colors hover:text-teal-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              Stay informed
            </h3>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-teal-100 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-teal-900/65">
            <p>
              © {new Date().getFullYear()} Vance Medical Foods Ltd. All rights
              reserved.
            </p>
            <p className="mt-1 max-w-2xl">
              Products described on this website are medical foods (Foods for
              Special Medical Purposes) for the dietary management of specific
              conditions and must be used under medical supervision. This
              website does not provide medical advice.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-xs">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-teal-900/75 underline-offset-4 transition-colors hover:text-teal-700 hover:underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
