import Link from "next/link";
import { guides } from "@/lib/data/guides";
import { getWatchBySlug } from "@/lib/data/watches";
import { TRAIL_GUIDE_AWARDS, TRAIL_GUIDE_PATH } from "@/lib/data/valueGuide";
import GuideCard from "@/components/guides/GuideCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/motion/Reveal";

export default function BeginnerGuides() {
  const beginnerGuides = guides
    .filter((g) => g.category === "principiantes" || g.category === "compra")
    .slice(0, 3);
  // Guía pilar de montaña: un ganador por perfil (la de calidad-precio
  // ya tiene su propio bloque en la portada, ValueGuideCTA).
  const trailAwards = Object.entries(TRAIL_GUIDE_AWARDS).flatMap(([slug, award]) => {
    const watch = getWatchBySlug(slug);
    return watch ? [{ slug, award, name: `${watch.brand} ${watch.name}` }] : [];
  });
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Para empezar"
            title="Guías para principiantes"
            description="Lo esencial antes de comprar, explicado sin tecnicismos innecesarios."
          />
          <Link href="/guias" className="text-sm font-semibold text-accent hover:underline">
            Ver todas las guías
          </Link>
        </Reveal>
        <Reveal delay={0.08} className="mt-10 grid gap-5 sm:grid-cols-3">
          {beginnerGuides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </Reveal>
        <Reveal delay={0.12} className="mt-5">
          <Link
            href={TRAIL_GUIDE_PATH}
            className="card group grid gap-5 p-6 md:grid-cols-[1fr_1.1fr] md:items-center"
          >
            <div className="min-w-0">
              <span className="tag w-fit">Guía outdoor 2026</span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-accent-dark">
                Los mejores relojes GPS para trail y montaña
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Mapas topográficos, altímetro barométrico y batería para
                ultras, comparados ruta a ruta.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent-dark">
                Ver la guía de montaña →
              </span>
            </div>
            <ul className="divide-y divide-line">
              {trailAwards.map((a) => (
                <li
                  key={a.slug}
                  className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2.5"
                >
                  <Badge tone="glass">{a.award}</Badge>
                  <span className="text-sm font-semibold text-ink">{a.name}</span>
                </li>
              ))}
            </ul>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
