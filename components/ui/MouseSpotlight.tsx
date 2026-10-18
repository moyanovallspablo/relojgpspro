"use client";

import { useEffect, useRef } from "react";

// Foco de luz ambiental que sigue al cursor: un degradado radial azul cielo
// muy tenue, fijo sobre la pantalla y sin capturar clics. La posición se
// escribe en las variables CSS --x / --y del propio div, sin estado de
// React (ningún re-render por movimiento), y como mucho una vez por frame.
//
// Solo con ratón o trackpad: con puntero táctil (pointer: coarse) o con
// movimiento reducido no se escucha el puntero y el div queda oculto
// también por CSS, así que no aparece ni antes de hidratar.
export default function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let x = 0;
    let y = 0;
    const paint = () => {
      frame = 0;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden md:block motion-reduce:!hidden [@media(pointer:coarse)]:!hidden"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50vw) var(--y, 50vh), rgba(2, 132, 199, 0.07), transparent 80%)",
      }}
    />
  );
}
