import Link from "next/link";
import { watches } from "@/lib/data/watches";
import WatchCard from "@/components/watches/WatchCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/motion/Reveal";

export default function FeaturedWatches() {
  const featured = watches.slice(0, 4);
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Modelos"
            title="Relojes destacados"
            description="Una selección de referencia para comparar gamas y funciones."
          />
          <Link href="/relojes" className="text-sm font-semibold text-accent hover:underline">
            Ver todos los relojes
          </Link>
        </Reveal>
        <Reveal delay={0.08} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((watch) => (
            <WatchCard key={watch.slug} watch={watch} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
