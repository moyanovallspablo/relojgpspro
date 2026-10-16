import type { Metadata } from "next";
import { watches } from "@/lib/data/watches";
import WatchRowCard from "@/components/watches/WatchRowCard";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Relojes GPS deportivos",
  description:
    "Explora relojes GPS de entrada, gama media y gama alta, con ficha técnica clara y sin especificaciones infladas.",
  alternates: { canonical: "/relojes" },
};

export default function RelojesPage() {
  return (
    <Container className="py-14 sm:py-16">
      <Reveal className="max-w-2xl">
        <p className="section-label">Catálogo</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Relojes GPS
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-500">
          Los primeros modelos reales del catálogo, con especificaciones
          verificadas contra fuentes oficiales. Cada ficha incluye
          precio de referencia, puntos a favor y en contra, y para qué
          tipo de entrenamiento encaja mejor.
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-10 space-y-6">
        {watches.map((watch) => (
          <WatchRowCard key={watch.slug} watch={watch} />
        ))}
      </Reveal>
    </Container>
  );
}
