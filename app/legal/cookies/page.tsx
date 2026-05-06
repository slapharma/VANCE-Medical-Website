import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Cookies | Vance Medical Foods",
  description:
    "How vancemedical.co.uk uses cookies. We do not currently use any analytics or advertising cookies.",
  alternates: { canonical: "/legal/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalShell
      title="Cookies notice"
      lastUpdated="5 May 2026"
      intro="vancemedical.co.uk does not currently set analytics, profiling or advertising cookies. This page explains the limited cookies that may be set as part of basic site operation."
    >
      <h2>Cookies we use today</h2>
      <p>
        At the time of writing, the only cookies that may be set are
        <strong> strictly necessary</strong> cookies controlled by our hosting
        platform (Vercel) for service security and load balancing. These do not
        track you across sites and do not require consent under the Privacy and
        Electronic Communications Regulations (PECR).
      </p>

      <h2>What we do not use</h2>
      <ul>
        <li>Analytics cookies (e.g. Google Analytics).</li>
        <li>Advertising or retargeting cookies.</li>
        <li>Social media tracking pixels.</li>
        <li>Cross-site session profiling.</li>
      </ul>
      <p>
        If we add any non-essential cookies in the future (for example,
        privacy-friendly product analytics), we will introduce a consent banner
        and update this notice before they are activated.
      </p>

      <h2>Browser controls</h2>
      <p>
        You can clear or block cookies from this domain at any time using your
        browser&apos;s settings. Doing so should not affect your ability to
        read information on the site or use the contact form.
      </p>

      <h2>Questions</h2>
      <p>
        Email{" "}
        <a href="mailto:info@vancemedical.co.uk">info@vancemedical.co.uk</a>{" "}
        with any questions about how the site uses cookies.
      </p>
    </LegalShell>
  );
}
