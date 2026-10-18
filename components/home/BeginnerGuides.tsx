import Link from "next/link";
import { guides } from "@/lib/data/guides";
import GuideCard from "@/components/guides/GuideCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/motion/Reveal";

// Las guías pilar (calidad-precio y montaña) tienen su bloque en la
// rejilla bento de la portada (HomeBento).
export default function BeginnerGuides() {
  const beginnerGuides = guides
    .filter((g) => g.category === "principiantes" || g.category === "compra")
    .slice(0, 3);
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
      </div>
    </section>
  );
}
