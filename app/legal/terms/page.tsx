import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Terms of use | Vance Medical Foods",
  description:
    "Terms of use for vancemedical.co.uk, the website of Vance Medical Foods Ltd.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of use"
      lastUpdated="5 May 2026"
      intro="These terms govern your use of vancemedical.co.uk. By accessing the site you agree to them. If you do not agree, please do not use the site."
    >
      <h2>About this site</h2>
      <p>
        vancemedical.co.uk is operated by Vance Medical Foods Ltd. The site is
        provided for informational purposes about our company and the medical
        foods (Foods for Special Medical Purposes) we develop.
      </p>

      <h2>Not medical advice</h2>
      <p>
        Information on this website is not a substitute for individual medical
        advice. Medical foods described on this site are intended for the
        dietary management of specific conditions and{" "}
        <strong>must be used under medical supervision</strong>. Always consult
        a qualified healthcare professional about your own situation.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on the site — including text, brand names (Vance Medical,
        EPAVANCE, BVANCE), logos and images — is the property of Vance Medical
        Foods Ltd or its licensors and is protected by UK and international
        copyright and trade mark laws. You may view and print pages for
        personal, non-commercial use; any other reuse requires written
        permission.
      </p>

      <h2>Links to external sites</h2>
      <p>
        The site links to third-party resources, including{" "}
        <a
          href="https://www.vancehealthhub.co.uk"
          target="_blank"
          rel="noreferrer"
        >
          VanceHealthHub.co.uk
        </a>
        . We are not responsible for the content of external sites and
        inclusion of a link does not imply endorsement.
      </p>

      <h2>No warranty</h2>
      <p>
        The site is provided on an &ldquo;as is&rdquo; basis. We do not
        guarantee that information is current, complete, or error-free. To the
        extent permitted by law, we exclude all implied warranties.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        Nothing in these terms limits liability for death or personal injury
        caused by negligence, fraud, or any other liability that cannot be
        limited under English law. Subject to that, we are not liable for any
        indirect or consequential loss arising from use of the site.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The &ldquo;Last
        updated&rdquo; date at the top of this page reflects the most recent
        revision.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales. The English
        courts have exclusive jurisdiction over any dispute arising from your
        use of the site.
      </p>
    </LegalShell>
  );
}
