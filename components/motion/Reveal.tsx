"use client";

import { useReveal } from "@/components/motion/useReveal";

// Aparición suave al entrar en pantalla (desplazamiento vertical de `y`
// px). Ver useReveal: sin GSAP, para no bloquear el hilo principal.
export default function Reveal({
  children,
  className = "",
  id,
  as: Tag = "div",
  y = 22,
  delay = 0,
  duration = 0.65,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
  y?: number;
  delay?: number;
  duration?: number;
}) {
  const ref = useReveal<HTMLElement>();

  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      id={id}
      className={className}
      style={
        {
          "--reveal-y": `${y}px`,
          "--reveal-delay": `${delay}s`,
          "--reveal-duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </Component>
  );
}
