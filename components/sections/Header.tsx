"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { HCPModal, hasHCPAck } from "@/components/ui/HCPModal";

const nav = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#science", label: "Science" },
  { href: "#gastrohealthhub", label: "GastroHealthHub" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [hcpOpen, setHcpOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  /** Soft HCP gate: skip modal if already acknowledged this device. */
  const handleHcpClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false); // close mobile drawer if open
    if (hasHCPAck()) {
      window.location.href = "/healthcare-professionals";
      return;
    }
    setHcpOpen(true);
  };

  /** Logo click: from `/` we scroll-to-top; from any other page we navigate
   * home (Link handles the navigation). */
  const handleLogoClick = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      setOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Body-scroll lock + ESC-to-close + focus the close button on open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // We render <header> and the mobile drawer as SIBLINGS via a Fragment.
  // The header has `backdrop-blur` which creates a containing block for any
  // descendant `position: fixed` element — if the drawer were nested inside,
  // its `fixed inset-0` would be clipped to the header's bounding box (~80px
  // tall on mobile) instead of the viewport. Making the drawer a sibling lets
  // it cover the page properly.
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-teal-100 bg-teal-50/80 backdrop-blur">
        <div className="container-x flex h-20 items-center justify-between md:h-28">
          <Link
            href="/"
            aria-label="Vance Medical — home"
            onClick={handleLogoClick}
            className="-my-1 block"
          >
            <Logo />
          </Link>

          {/* Desktop nav (md and up) */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium text-teal-900">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="transition-colors hover:text-teal-700"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/healthcare-professionals"
                  onClick={handleHcpClick}
                  className="inline-flex items-center bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-900"
                >
                  Healthcare professionals
                </a>
              </li>
            </ul>
          </nav>

          {/* Hamburger (below md) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            className="-mr-2 inline-flex h-12 w-12 items-center justify-center text-teal-900 transition-colors hover:text-teal-700 md:hidden"
          >
            <HamburgerIcon />
          </button>
        </div>
      </header>

      {/* Mobile drawer — sibling of <header>, full-bleed white panel. */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-50 bg-white transition-[opacity,transform] duration-300 ease-out md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between border-b border-teal-100">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            Menu
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="-mr-2 inline-flex h-12 w-12 items-center justify-center text-teal-900 transition-colors hover:text-teal-700"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="container-x mt-10">
          <ul className="space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-teal-100 py-5 text-2xl font-semibold text-teal-900 transition-colors hover:text-teal-700"
                >
                  {n.label}
                  <span aria-hidden className="text-teal-700">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/healthcare-professionals"
            onClick={handleHcpClick}
            className="mt-12 inline-flex w-full items-center justify-center bg-teal-700 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-teal-900"
          >
            Healthcare professionals
          </a>
        </nav>
      </div>

      <HCPModal open={hcpOpen} onClose={() => setHcpOpen(false)} />
    </>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
