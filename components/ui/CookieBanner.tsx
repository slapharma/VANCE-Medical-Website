"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "vance-cookie-acknowledged";

/**
 * CookieBanner — informational GDPR-aligned notice.
 *
 * The site currently sets only strictly-necessary cookies for service
 * operation (no analytics, no advertising), so this banner is informational
 * rather than a consent gate. It still:
 *   - persists dismissal to localStorage so it doesn't reappear every visit
 *   - links to the full cookies notice at /legal/cookies
 *   - supports keyboard dismissal (Escape on focus, Tab to "Got it")
 *
 * If we add non-essential cookies later, swap the single "Got it" button for
 * an Accept / Reject pair and gate the loading of those cookies on accept.
 *
 * Mounted from app/layout.tsx so it appears across every route.
 */
export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setShow(true);
    } catch {
      // localStorage may be blocked (private mode); fail silently — better to
      // skip the banner than crash the page.
    }
  }, []);

  // ESC dismiss when banner is visible.
  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-[55] mx-auto max-w-3xl bg-teal-900 p-5 text-white shadow-card ring-1 ring-teal-700 sm:inset-x-6 sm:bottom-6 md:p-6"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="text-sm leading-relaxed text-teal-100/95">
          <p className="font-semibold uppercase tracking-[0.18em] text-teal-300 text-xs mb-2">
            Cookies
          </p>
          <p>
            We use only essential cookies for site operation. We do not run
            analytics, advertising or cross-site tracking. See our{" "}
            <a
              href="/legal/cookies"
              className="font-semibold underline decoration-teal-300 underline-offset-4 hover:text-white"
            >
              cookie notice
            </a>{" "}
            and{" "}
            <a
              href="/legal/privacy"
              className="font-semibold underline decoration-teal-300 underline-offset-4 hover:text-white"
            >
              privacy notice
            </a>{" "}
            for details.
          </p>
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex shrink-0 items-center justify-center bg-white px-6 py-3 text-sm font-semibold text-teal-900 transition-colors hover:bg-teal-100"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
