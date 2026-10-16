"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion, isMobileViewport } from "@/lib/motion/media";

/**
 * Self-contained parallax frame. `wrapperClassName` sets the visible,
 * static frame (size, position, border, rounding) — GSAP never touches
 * it. `className` styles the inner layer that actually moves; it must
 * stay free of transform utilities (scale-*, translate-*) since GSAP
 * drives that layer's transform directly. The inner layer is
 * oversized and offset by default so the scrub movement never reveals
 * an edge.
 *
 * GSAP is loaded with a dynamic import() once the browser is idle, so
 * it stays out of the initial bundle and off the main thread while the
 * page hydrates (Total Blocking Time).
 */
export default function Parallax({
  children,
  className = "",
  wrapperClassName = "",
  amount = 8,
}: {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || isMobileViewport()) return;

    let cancelled = false;
    let revert: (() => void) | undefined;

    const start = () => {
      import("@/lib/motion/gsap").then(({ gsap }) => {
        if (cancelled) return;
        const ctx = gsap.context(() => {
          gsap.to(el, {
            yPercent: amount,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        });
        revert = () => ctx.revert();
      });
    };

    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(start, { timeout: 3000 })
      : window.setTimeout(start, 1500);

    return () => {
      cancelled = true;
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      revert?.();
    };
  }, [amount]);

  // wrapperClassName may already set its own position (e.g. "absolute
  // inset-0" for a full-bleed background layer). Tailwind's position
  // utilities all set the same CSS property, so stacking "relative" and
  // "absolute" together is a real conflict, not just redundant — only
  // one wins, and it isn't reliably the last one written in the string.
  // Only fall back to "relative" when the caller hasn't specified a
  // position of their own.
  const hasPosition = /\b(absolute|fixed|sticky|static|relative)\b/.test(
    wrapperClassName
  );
  const positionClass = hasPosition ? "" : "relative";

  return (
    <div className={`${positionClass} overflow-hidden ${wrapperClassName}`}>
      <div
        ref={ref}
        className={`absolute inset-x-0 -top-[8%] h-[116%] ${className}`}
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
