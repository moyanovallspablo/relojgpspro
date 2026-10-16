// Consultas de entorno para las animaciones, separadas de lib/motion/gsap
// para que importarlas no arrastre GSAP al bundle inicial.

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}
