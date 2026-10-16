import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { publishedComparisons } from "@/lib/data/comparisons";
import { getWatchesBySlugs } from "@/lib/data/watches";
import { getMatcherData } from "@/lib/data/duels";
import VersusMatcher from "@/components/comparisons/VersusMatcher";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import { DEFAULT_OPEN_GRAPH, SITE_NAME } from "@/lib/site";

const title = "Comparativas de relojes GPS";
const description =
  "Comparativas cara a cara entre relojes GPS reales: pantalla, autonomía, precisión GPS, peso y precio, con datos verificados y un veredicto claro para cada perfil.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/comparativas" },
  openGraph: {
    ...DEFAULT_OPEN_GRAPH,
    url: "/comparativas",
    title: `${title} | ${SITE_NAME}`,
    description,
  },
};

// Arriba, el selector de duelos (cualquier par del catálogo); debajo,
// solo las comparativas redactadas (con contenido).
export default function ComparativasPage() {
  return (
    <Container className="py-14 sm:py-16">
      <Reveal className="max-w-2xl">
        <p className="section-label">Cara a cara</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Comparativas
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-500">
          Elige dos relojes y míralos cara a cara al instante: qué pantalla,
          cuánta batería, qué precisión GPS y cuánto cuestan, con datos
          verificados de cada ficha. En los duelos con análisis, además, una
          recomendación según tu perfil.
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mt-8">
        <h2 className="sr-only">Compara dos relojes</h2>
        <VersusMatcher {...getMatcherData()} className="shadow-sm" />
      </Reveal>

      <Reveal className="mt-14">
        <h2 className="font-display text-2xl font-bold">Comparativas con análisis</h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-6 grid gap-5 md:grid-cols-2">
        {publishedComparisons.map((c) => {
          const watches = getWatchesBySlugs(c.watchSlugs);
          return (
            <Link
              key={c.slug}
              href={`/comparativas/${c.slug}`}
              className="card card-spotlight group flex flex-col gap-4 p-6"
            >
              <div className="flex items-center justify-center gap-4">
                {watches.map((w, i) => (
                  <div key={w.slug} className="flex items-center gap-4">
                    {i > 0 && (
                      <span className="font-mono text-xs font-semibold text-ink-500">
                        VS
                      </span>
                    )}
                    <div className="relative h-24 w-24 overflow-hidden">
                      {w.coverImage ? (
                        <Image
                          src={w.coverImage.src}
                          alt={w.coverImage.alt}
                          fill
                          sizes="96px"
                          className="card-spotlight-media object-contain"
                        />
                      ) : (
                        <span className="flex h-full items-center justify-center font-display text-sm font-semibold text-ink-500">
                          {w.brand}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <span className="tag w-fit">Comparativa</span>
              <h3 className="font-display text-lg font-bold text-ink group-hover:text-accent-dark">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-500">{c.summary}</p>
              <span className="mt-auto text-sm font-semibold text-accent-dark">
                Ver comparativa
              </span>
            </Link>
          );
        })}
      </Reveal>
    </Container>
  );
}
