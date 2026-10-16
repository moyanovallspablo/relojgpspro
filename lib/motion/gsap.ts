"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Solo se carga con import() dinámico (ver components/motion/Parallax):
// GSAP no forma parte del bundle inicial de ninguna página.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
