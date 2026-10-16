import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { USE_CASE_LABELS, UseCase } from "@/lib/types/watch";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/motion/ImageReveal";

export const metadata: Metadata = {
  title: "Cómo elegir un reloj GPS",
  description:
    "Guía general para entender qué necesitas de un reloj deportivo antes de mirar marcas o modelos concretos.",
  alternates: { canonical: "/como-elegir" },
};

const STEPS = [
  {
    title: "Define para qué lo vas a usar",
    text: "Correr por el barrio, preparar una oposición, salir a montaña o competir en triatlón exigen funciones muy distintas. Empieza por ahí, no por el modelo más popular.",
  },
  {
    title: "Decide si necesitas mapas y navegación",
    text: "Si entrenas siempre por rutas conocidas, probablemente no los uses nunca. Si sales a zonas nuevas o sin cobertura, cambian por completo qué reloj te conviene.",
  },
  {
    title: "Piensa en la pantalla, no solo en la tecnología",
    text: "AMOLED se ve mejor pero consume más batería. MIP dura más y se lee bien al sol. Ninguna es 'mejor': depende de cuánto valoras la autonomía frente a la nitidez.",
  },
  {
    title: "Mira las métricas que realmente vas a consultar",
    text: "Frecuencia cardíaca, ritmo y carga de entrenamiento cubren la mayoría de casos. El resto son funciones que suenan bien en la caja pero que muy pocos usuarios revisan cada semana.",
  },
  {
    title: "Pon un límite de precio antes de comparar",
    text: "Decide cuánto estás dispuesto a gastar antes de ver modelos concretos. Así evitas que las funciones extra del siguiente escalón de precio te parezcan imprescindibles.",
  },
];

export default function ComoElegirPage() {
  const cases = Object.keys(USE_CASE_LABELS) as UseCase[];
  return (
    <Container className="py-14 sm:py-16">
      <Reveal className="max-w-2xl">
        <p className="section-label">Guía general</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Cómo elegir un reloj GPS
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-500">
          Antes de comparar marcas o modelos, conviene tener claro qué
          necesitas realmente. Estos cinco pasos te ayudan a llegar a esa
          respuesta.
        </p>
      </Reveal>

      <Reveal delay={0.08} as="ol" className="mt-10 max-w-prose space-y-8">
        {STEPS.slice(0, 3).map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-white">
              {i + 1}
            </span>
            <div>
              <h2 className="font-display text-lg font-bold text-ink">
                {step.title}
              </h2>
              <p className="mt-1 text-base leading-relaxed text-ink-500">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </Reveal>

      <ImageReveal className="my-12 max-w-prose">
        <Image
          src="/images/photos/guide-watch-map.jpg"
          alt="Reloj GPS mostrando un mapa de ruta en la muñeca durante una salida de trail"
          width={1400}
          height={1866}
          sizes="(min-width: 768px) 672px, 100vw"
          className="h-auto max-h-[360px] w-full rounded-xl object-cover shadow-sm"
        />
        <p className="mt-3 text-xs text-ink-500">
          AMOLED frente a MIP: el mismo dilema visto de cerca.
        </p>
      </ImageReveal>

      <Reveal as="ol" className="max-w-prose space-y-8" delay={0.05}>
        {STEPS.slice(3).map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-white">
              {i + 4}
            </span>
            <div>
              <h2 className="font-display text-lg font-bold text-ink">
                {step.title}
              </h2>
              <p className="mt-1 text-base leading-relaxed text-ink-500">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </Reveal>

      <Reveal delay={0.05} className="mt-12 border-t border-line pt-10">
        <h2 className="font-display text-xl font-bold">
          Repasa tu caso de uso
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((useCase) => (
            <div key={useCase} className="tag block w-fit">
              {USE_CASE_LABELS[useCase]}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-500">
          Con esto claro, ya puedes{" "}
          <Link href="/relojes" className="font-semibold text-accent hover:underline">
            explorar el catálogo
          </Link>{" "}
          y comparar modelos concretos por su ficha técnica.
        </p>
      </Reveal>
    </Container>
  );
}
