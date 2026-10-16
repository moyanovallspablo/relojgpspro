import type { Metadata } from "next";
import Image from "next/image";
import { guides } from "@/lib/data/guides";
import GuideCard from "@/components/guides/GuideCard";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/motion/ImageReveal";

export const metadata: Metadata = {
  title: "Guías sobre relojes GPS y entrenamiento",
  description:
    "Guías para entender qué funciones necesita realmente tu entrenamiento antes de comprar un reloj deportivo.",
  alternates: { canonical: "/guias" },
};

export default function GuiasPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
        <Reveal className="max-w-2xl">
          <p className="section-label">Contenido</p>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Guías
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-500">
            Artículos pensados para responder dudas concretas antes de
            comprar: qué pantalla necesitas, qué métricas importan y cuánto
            tiene sentido gastar.
          </p>
        </Reveal>
        <ImageReveal className="relative hidden aspect-[4/3] w-full overflow-hidden rounded-xl border border-line md:block">
          <Image
            src="/images/photos/profiles-tying-shoes.jpg"
            alt="Corredor atándose las zapatillas con su reloj deportivo en la muñeca"
            fill
            sizes="45vw"
            className="object-cover object-left-top"
          />
        </ImageReveal>
      </div>
      <Reveal delay={0.1} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <GuideCard key={g.slug} guide={g} />
        ))}
      </Reveal>
    </Container>
  );
}
