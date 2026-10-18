import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/motion/ImageReveal";
import MouseSpotlight from "@/components/ui/MouseSpotlight";
import { watches } from "@/lib/data/watches";
import { isPriceSourceVerified } from "@/lib/types/watch";
import { TRAIL_GUIDE_PATH } from "@/lib/data/valueGuide";

// Cobertura real de la verificación de precios del catálogo: la tarjeta
// de la foto solo dice "100 %" si todos los relojes reales tienen una
// URL de fuente registrada (ver isPriceSourceVerified).
function priceCoverage() {
  const real = watches.filter((w) => !w.isDemoProduct);
  const verified = real.filter(isPriceSourceVerified).length;
  return {
    verified,
    total: real.length,
    percent: real.length ? Math.floor((verified / real.length) * 100) : 0,
  };
}

export default function Hero() {
  const coverage = priceCoverage();

  return (
    // overflow-hidden recorta el resplandor superior y el de la foto al
    // borde de la sección: sin él, los halos ensancharían la página en
    // móvil.
    <section className="relative isolate overflow-hidden border-b border-zinc-200/80 bg-zinc-50/90">
      <MouseSpotlight />
      {/* Malla de puntos, desvanecida hacia abajo. */}
      <div
        aria-hidden="true"
        className="bg-tech-dots absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_40%,transparent_100%)]"
      />
      {/* Resplandor radial superior. */}
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/2 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[130px]"
      />

      <div className="container-page grid items-center gap-12 py-14 sm:py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <Reveal className="min-w-0">
          {/* En pantallas estrechas el texto parte en dos líneas: de ahí
              rounded-2xl hasta sm, donde ya cabe en una y es una píldora. */}
          <p className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-emerald-200/80 bg-emerald-50 px-3 py-1 text-xs font-medium leading-snug text-emerald-900 shadow-sm sm:rounded-full">
            <span aria-hidden="true" className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            </span>
            <span className="min-w-0">Análisis Independiente &amp; Especificaciones Verificadas</span>
          </p>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            El criterio técnico para elegir tu{" "}
            <span className="whitespace-nowrap text-emerald-700">reloj GPS</span>
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-zinc-700">
            Encuentra el reloj GPS perfecto para tu entrenamiento con datos
            reales, especificaciones verificadas y sin rodeos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={TRAIL_GUIDE_PATH}
              className="btn-fx btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-center font-mono text-sm font-medium text-white shadow-sm [--btn-glow:4_120_87] hover:bg-emerald-800"
            >
              [ Guía de trail y montaña ]
            </Link>
            <Link
              href="/relojes"
              className="btn-fx btn-fx-neutral inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200/90 bg-white/90 px-6 py-3 text-center font-mono text-sm font-medium text-zinc-800 hover:bg-white"
            >
              [ Ver catálogo de relojes ]
            </Link>
          </div>
        </Reveal>

        <div className="relative w-full max-w-sm justify-self-center md:max-w-none md:justify-self-end">
          {/* Resplandor menta detrás del marco. */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] bg-emerald-400/20 blur-2xl sm:-inset-6"
          />
          <ImageReveal className="relative z-10 rounded-2xl border border-zinc-200/80 bg-white/70 p-2 shadow-[0_1px_2px_rgb(9_9_11/0.04),0_24px_48px_-24px_rgb(6_78_59/0.28)] backdrop-blur-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/photos/hero-trail-watch.jpg"
                alt="Corredor consultando la ruta GPS de su reloj deportivo en un sendero de montaña"
                fill
                priority
                sizes="(min-width: 768px) 45vw, 384px"
                className="object-cover object-center"
              />
              {/* Tarjeta flotante translúcida. */}
              <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-xl border border-white/60 bg-white/80 p-3 shadow-lg backdrop-blur-md sm:inset-x-4 sm:bottom-4">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-900">
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.25">
                    <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="num">{coverage.percent} %</span> Verificado
                </span>
                <p className="min-w-[9rem] flex-1 text-xs leading-snug text-zinc-700">
                  Precios con fuente enlazada en{" "}
                  <span className="num font-semibold text-zinc-900">
                    {coverage.verified}/{coverage.total}
                  </span>{" "}
                  modelos
                </p>
              </div>
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
