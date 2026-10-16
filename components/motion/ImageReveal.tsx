"use client";

import { useReveal } from "@/components/motion/useReveal";

// Aparición con leve zoom al entrar en pantalla. Ver useReveal: si la
// imagen ya se ve al cargar (p. ej. la del Hero, que es el LCP), no se
// oculta ni se anima.
export default function ImageReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={
        {
          "--reveal-y": "0px",
          "--reveal-scale": "0.94",
          "--reveal-duration": "0.9s",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
