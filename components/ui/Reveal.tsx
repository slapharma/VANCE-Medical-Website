"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Reveal — fades content in when scrolled into view.
 *
 * Resilient to:
 *   1. `prefers-reduced-motion: reduce` (accessibility) — instantly visible.
 *   2. Browsers without `IntersectionObserver` — instantly visible.
 *   3. Elements already in the viewport on mount (above-the-fold) — instantly
 *      visible without waiting for an observer microtask, eliminating the
 *      blank-flash that affects Lighthouse, full-page screenshots and slower
 *      hydration paths.
 *
 * The CSS `@media (prefers-reduced-motion: reduce)` override in globals.css
 * provides a belt-and-braces guarantee in case JS fails entirely.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // (1) Reduced-motion users get content immediately, no transition.
    const reducedMotion =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    // (2) Old browsers without IntersectionObserver: just show.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // (3) Already in (or just above) the viewport at mount time? Show now —
    // skips the observer delay for above-the-fold content.
    const rect = node.getBoundingClientRect();
    const viewportH =
      window.innerHeight || document.documentElement.clientHeight || 0;
    if (rect.top < viewportH) {
      setVisible(true);
      return;
    }

    // (4) Otherwise observe and reveal on enter.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
