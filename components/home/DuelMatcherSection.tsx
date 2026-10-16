import Link from "next/link";
import { getMatcherData } from "@/lib/data/duels";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/motion/Reveal";
import VersusMatcher from "@/components/comparisons/VersusMatcher";

// Acceso al selector de duelos desde la portada (el mismo de
// /comparativas).
export default function DuelMatcherSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Cara a cara"
            title="Compara dos relojes en un clic"
            description="Elige dos modelos del catálogo y ve al instante precio, pantalla, autonomía y GPS enfrentados."
          />
          <Link href="/comparativas" className="text-sm font-semibold text-accent hover:underline">
            Ver todas las comparativas
          </Link>
        </Reveal>
        <Reveal delay={0.08} className="mt-10">
          <VersusMatcher {...getMatcherData()} />
        </Reveal>
      </div>
    </section>
  );
}
