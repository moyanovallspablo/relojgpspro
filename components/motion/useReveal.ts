"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion/media";

// Animación de entrada con IntersectionObserver + transición CSS (clases
// .reveal / .reveal-hidden en globals.css), sin GSAP ni lecturas de
// layout durante la hidratación: así no suma Total Blocking Time.
//
// Solo se ocultan los elementos que están FUERA de pantalla al cargar.
// Lo que ya se ve (cabecera, Hero, imagen LCP) se queda tal cual, sin
// parpadeo ni retraso del LCP.
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    let initial = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (initial) {
          initial = false;
          if (entry.isIntersecting) {
            observer.disconnect();
            return;
          }
          el.classList.add("reveal", "reveal-hidden");
          return;
        }
        if (entry.isIntersecting) {
          el.classList.remove("reveal-hidden");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
