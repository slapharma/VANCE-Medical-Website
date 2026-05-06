import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Privacy notice | Vance Medical Foods",
  description:
    "How Vance Medical Foods Ltd collects, uses and protects personal data submitted via vancemedical.co.uk.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy notice"
      lastUpdated="5 May 2026"
      intro={`This notice explains how Vance Medical Foods Ltd (“Vance Medical”, “we”, “us”) collects and processes your personal data when you use vancemedical.co.uk or contact us through the site. We are the data controller for the data described below.`}
    >
      <h2>Who we are</h2>
      <p>
        Vance Medical Foods Ltd is a company registered in England and Wales,
        part of the SLA Pharma group. You can contact us at{" "}
        <a href="mailto:contact@vancemedical.co.uk">contact@vancemedical.co.uk</a> for
        general queries, or{" "}
        <a href="mailto:medical@vancemedical.co.uk">
          medical@vancemedical.co.uk
        </a>{" "}
        for medical information enquiries.
      </p>

      <h2>What data we collect</h2>
      <ul>
        <li>
          <strong>Information you give us</strong>: when you use the contact
          form or newsletter signup, we collect your name (contact form only),
          email address, role (HCP / patient / partner / press), and the
          contents of your message.
        </li>
        <li>
          <strong>Technical information</strong>: basic server logs (IP
          address, request timestamps) that our hosting provider, Vercel,
          retains for service-operation purposes.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to enquiries you send via the contact form.</li>
        <li>
          To send the occasional newsletter, where you have asked to receive it.
        </li>
        <li>
          To prevent abuse of our forms (e.g. honeypot fields, basic rate
          limiting at the platform level).
        </li>
      </ul>
      <p>
        We do not sell your data, do not use it for advertising profiling, and
        do not share it with third parties except as described below.
      </p>

      <h2>Lawful basis</h2>
      <ul>
        <li>
          <strong>Legitimate interests</strong> for replying to enquiries you
          have sent us (UK GDPR Article 6(1)(f)).
        </li>
        <li>
          <strong>Consent</strong> for newsletter subscriptions (UK GDPR Article
          6(1)(a)). You can withdraw at any time.
        </li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We use the following processors to operate the site and reply to you:
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong>: site hosting and form-action execution
          (USA, with adequacy or standard contractual clauses in place).
        </li>
        <li>
          <strong>Email service provider</strong>: for transactional and
          newsletter emails when integrated. We will update this notice with
          the named provider before any production traffic is processed.
        </li>
      </ul>

      <h2>Retention</h2>
      <p>
        Contact form submissions are retained for as long as is necessary to
        resolve the enquiry, then deleted within 12 months unless we have a
        specific reason (e.g. an ongoing partnership) to keep them longer.
        Newsletter subscribers remain on the list until they unsubscribe.
      </p>

      <h2>Your rights</h2>
      <p>Under UK GDPR you have the right to:</p>
      <ul>
        <li>Be informed about how we use your data (this notice).</li>
        <li>Access the data we hold about you.</li>
        <li>Request correction of inaccurate data.</li>
        <li>Request erasure (subject to limited exceptions).</li>
        <li>Restrict or object to certain processing.</li>
        <li>Data portability.</li>
        <li>Lodge a complaint with the Information Commissioner&apos;s Office.</li>
      </ul>
      <p>
        Email{" "}
        <a href="mailto:contact@vancemedical.co.uk">contact@vancemedical.co.uk</a> to
        exercise any of these rights.
      </p>

      <h2>Cookies</h2>
      <p>
        See our <a href="/legal/cookies">cookies notice</a> for details. The
        site does not currently use analytics or advertising cookies.
      </p>

      <h2>Changes</h2>
      <p>
        We will update the &ldquo;Last updated&rdquo; date above when this
        notice changes. Material changes will be communicated where we have a
        way to reach you.
      </p>
    </LegalShell>
  );
}
