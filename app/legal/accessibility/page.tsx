import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Accessibility statement | Vance Medical Foods",
  description:
    "Vance Medical Foods accessibility statement. We aim to meet WCAG 2.1 AA across vancemedicalfoods.co.uk.",
  alternates: { canonical: "/legal/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalShell
      title="Accessibility statement"
      lastUpdated="5 May 2026"
      intro="Vance Medical Foods is committed to making vancemedicalfoods.co.uk usable for as many people as possible. This statement describes how we approach accessibility, known limitations, and how to report issues."
    >
      <h2>Standards we aim for</h2>
      <p>
        We aim to conform to the{" "}
        <a
          href="https://www.w3.org/TR/WCAG21/"
          target="_blank"
          rel="noreferrer"
        >
          Web Content Accessibility Guidelines (WCAG) 2.1, level AA
        </a>
        .
      </p>

      <h2>What we have done</h2>
      <ul>
        <li>
          The site is built with semantic HTML, with landmarks (
          <code>header</code>, <code>main</code>, <code>nav</code>,{" "}
          <code>footer</code>), heading hierarchy, descriptive labels and{" "}
          <code>alt</code> text on meaningful images.
        </li>
        <li>
          Scroll-triggered fade-in animations honour{" "}
          <code>prefers-reduced-motion: reduce</code> and degrade gracefully if
          JavaScript fails to load. Content is always available regardless of
          motion preferences.
        </li>
        <li>
          Colour combinations across the site target WCAG AA contrast ratios for
          body text and interactive elements.
        </li>
        <li>
          The mobile navigation drawer uses <code>role=&quot;dialog&quot;</code>{" "}
          /<code> aria-modal</code>, focuses the close button on open, supports{" "}
          <code>Esc</code>-to-close, and locks background scroll while open.
        </li>
        <li>
          Forms use real <code>label</code> elements,{" "}
          <code>autocomplete</code> hints, native validation and clear error
          messages.
        </li>
      </ul>

      <h2>Known limitations</h2>
      <p>
        We are aware of the following gaps and are working to address them:
      </p>
      <ul>
        <li>
          The mobile drawer uses simple focus management rather than a full
          tab-loop trap. We will be adding a more thorough trap.
        </li>
        <li>
          Long-form content (legal pages, healthcare-professionals page) uses
          system fonts and basic prose styles; we may revisit typography
          choices as content grows.
        </li>
      </ul>

      <h2>Reporting an issue</h2>
      <p>
        If you find any part of the site difficult to use, please contact us at{" "}
        <a href="mailto:contact@vancemedicalfoods.co.uk">contact@vancemedicalfoods.co.uk</a>.
        We aim to respond within five working days and to fix substantial
        issues within four weeks.
      </p>

      <h2>Enforcement</h2>
      <p>
        Public bodies are subject to the Public Sector Bodies (Websites and
        Mobile Applications) Accessibility Regulations 2018; Vance Medical
        Foods is a private organisation and these regulations do not apply
        directly, but we use the same WCAG 2.1 AA target as a guideline.
      </p>
    </LegalShell>
  );
}
