import Link from "next/link";
import { getWatchBySlug } from "@/lib/data/watches";
import { VALUE_GUIDE_AWARDS, VALUE_GUIDE_PATH } from "@/lib/data/valueGuide";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/motion/Reveal";

// Enlace destacado a la guía pilar calidad-precio: un ganador por
// categoría, agrupando los relojes que comparten premio.
export default function ValueGuideCTA() {
  const categories = new Map<string, string[]>();
  for (const [slug, award] of Object.entries(VALUE_GUIDE_AWARDS)) {
    const watch = getWatchBySlug(slug);
    if (!watch) continue;
    categories.set(award, [...(categories.get(award) ?? []), `${watch.brand} ${watch.name}`]);
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="grid gap-8 glass-panel p-6 sm:p-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <SectionTitle
              eyebrow="Guía de compra 2026"
              title="Los mejores relojes GPS calidad-precio"
              description="Un ganador por categoría para que pagues por lo que vas a usar: de la gama de entrada a los mapas y el outdoor."
            />
            <Link href={VALUE_GUIDE_PATH} className="btn-primary mt-6">
              [VER LOS GANADORES]
            </Link>
          </div>
          <ul className="divide-y divide-line">
            {Array.from(categories, ([award, names]) => (
              <li key={award} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3">
                <Badge tone="glass">{award}</Badge>
                <span className="text-sm font-semibold text-ink">{names.join(" / ")}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
