import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";
import GpsTrackScene from "@/components/illustrations/GpsTrackScene";

export default function NotAlwaysExpensiveSection() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink py-16 sm:py-20">
      <Parallax amount={6} wrapperClassName="absolute inset-0" className="opacity-40">
        <GpsTrackScene className="h-full w-full" />
      </Parallax>
      <div className="container-page relative grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
        <Reveal>
          <p className="section-label">Criterio editorial</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            El modelo más caro no siempre es el más adecuado
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-white/70">
            Muchos relojes de gama alta incluyen funciones que la mayoría de
            corredores nunca llega a usar. Nuestro trabajo es ayudarte a
            identificar qué necesitas de verdad, para que el precio que pagues
            tenga que ver con tu entrenamiento y no con el marketing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
