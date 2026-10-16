import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/motion/Reveal";

// Las cifras de autonomía salen de las fichas de lib/data/watches.ts;
// si cambian allí, hay que revisar este texto.
const BLOCKS = [
  {
    title: "¿Buscas AMOLED o MIP?",
    text: "AMOLED se ve nítida y a color, pero gasta más batería si la dejas siempre encendida. MIP es menos vistosa, se lee mejor a pleno sol y aguanta muchos más días. Si priorizas autonomía o sales a montaña varios días, MIP; si lo usas también a diario como smartwatch, AMOLED.",
    href: "/guias/amoled-vs-mip",
    linkLabel: "Guía AMOLED vs MIP",
  },
  {
    title: "GPS multibanda vs estándar",
    text: "El GPS estándar basta para correr en ciudad abierta o en pista. El multibanda (doble frecuencia) marca la diferencia entre edificios altos, bosque cerrado o cañones, donde el estándar se desvía. A cambio, activarlo reduce la autonomía: en el Forerunner 265 pasa de 20 h a 14 h.",
    href: "/guias/que-precision-gps-necesitas-realmente",
    linkLabel: "¿Qué precisión GPS necesitas?",
  },
  {
    title: "Autonomía real de batería",
    text: "Fíjate en las horas con GPS activo, no en los días en modo reloj: eso es lo que gastas entrenando. En el catálogo van de unas 20 h (Forerunner 55 y 265) a 30-38 h (Instinct 2 y COROS PACE 3). Para maratón bastan de sobra; para ultras o travesías, busca 30 h o más.",
    href: "/como-elegir",
    linkLabel: "Cómo elegir tu reloj",
  },
];

export default function QuickBuyingGuide() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Guía rápida de compra 2026"
            title="Tres decisiones antes de elegir modelo"
            description="Lo que más cambia la experiencia con un reloj GPS, resumido en un minuto."
          />
          <Link href="/guias" className="text-sm font-semibold text-accent hover:underline">
            Ver todas las guías
          </Link>
        </Reveal>
        <Reveal delay={0.08} className="mt-10 grid gap-5 md:grid-cols-3">
          {BLOCKS.map((block) => (
            <article key={block.title} className="card flex flex-col p-6">
              <h3 className="font-display text-lg font-bold text-ink">
                {block.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                {block.text}
              </p>
              <Link
                href={block.href}
                className="mt-5 text-sm font-semibold text-accent hover:underline"
              >
                {block.linkLabel} →
              </Link>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
