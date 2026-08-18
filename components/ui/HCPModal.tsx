"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

const STORAGE_KEY = "vance-hcp-acknowledged";

export function HCPModal({ open, onClose }: Props) {
  const declineRef = useRef<HTMLButtonElement | null>(null);
  const [mounted, setMounted] = useState(false);

  // Mark client-side so we can portal to document.body without SSR mismatch.
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    declineRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  const confirm = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore (private mode etc.)
    }
    window.location.href = "/healthcare-professionals";
  };

  // Render via portal to document.body. The Header has `backdrop-blur`, which
  // creates a containing block for `position: fixed` descendants — meaning a
  // modal nested inside the header would be clipped to the header's bounds
  // (~112px tall) instead of the viewport. Portalling to body sidesteps that.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="hcp-dialog-title"
      className="fixed inset-0 z-[100] overflow-y-auto bg-teal-900/70"
    >
      {/* Backdrop click to close — sits beneath the dialog panel via z-stacking. */}
      <button
        type="button"
        aria-label="Close"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 -z-10 cursor-default"
      />
      {/* min-h-full + flex centring: panel centres on tall viewports;
          on short ones the wrapper grows past viewport height and the
          outer overflow-y-auto provides natural scrolling so the top
          stays reachable. */}
      <div className="relative flex min-h-full items-center justify-center px-5 py-8 sm:py-12">
        <div className="relative w-full max-w-md bg-white p-8 shadow-card ring-1 ring-teal-300">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            Self-declaration
          </p>
          <h2
            id="hcp-dialog-title"
            className="text-2xl font-bold tracking-tight text-teal-900"
          >
            For healthcare professionals
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-teal-900/80">
            The healthcare-professionals area is intended for UK clinicians,
            pharmacists and other healthcare professionals. Are you a UK
            healthcare professional?
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={confirm}
              className="inline-flex w-full items-center justify-center bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-900"
            >
              Yes, continue
            </button>
            <button
              ref={declineRef}
              type="button"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center border border-teal-300 bg-white px-5 py-3 text-sm font-semibold text-teal-900 transition-colors hover:bg-teal-50"
            >
              No, take me back
            </button>
          </div>
          <p className="mt-5 text-xs text-teal-900/75">
            See our{" "}
            <a
              href="/legal/terms"
              className="underline decoration-teal-300 underline-offset-4 hover:text-teal-900"
            >
              terms of use
            </a>{" "}
            for further information.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}

/** Returns true if the user has previously acknowledged the HCP gate. */
export function hasHCPAck(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}
