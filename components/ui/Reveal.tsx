"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Reveal — formerly a scroll-triggered fade-in wrapper.
 *
 * As of 2026-05-05 the on-scroll animation is **disabled by default** because
 * the IntersectionObserver-based reveal proved unreliable in production
 * (content stayed at opacity:0 even when the element was clearly in viewport,
 * likely a React-18 minified-state-update edge case). Trading the fade for
 * guaranteed visibility is a clear win for medical-content trust + SEO.
 *
 * The component still:
 *   - accepts `delay` (no-op now, kept so existing call sites compile)
 *   - applies `className` and `as`
 *   - opts in to the legacy fade-in IF reduced-motion is OFF and the env var
 *     `NEXT_PUBLIC_REVEAL_ANIMATE` is set at build time. This lets us re-enable
 *     once the underlying bug is properly diagnosed without another refactor.
 */
const ANIMATE_OPT_IN = process.env.NEXT_PUBLIC_REVEAL_ANIMATE === "1";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: Props) {
  // Default to true so content is always visible — even before useEffect runs,
  // even if JS fails, even for crawlers that don't fire IntersectionObserver.
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ANIMATE_OPT_IN) return; // animation disabled (default)

    // If we're animating, start hidden and reveal once intersection fires.
    const node = ref.current;
    if (!node) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return; // already visible

    setVisible(false);

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

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
      style={ANIMATE_OPT_IN ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${
        ANIMATE_OPT_IN
          ? `transition-all duration-700 ease-out will-change-transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } `
          : ""
      }${className}`}
    >
      {children}
    </Tag>
  );
}
