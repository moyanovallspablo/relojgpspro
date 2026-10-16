import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/motion/ImageReveal";

export default function Hero() {
  return (
    // overflow-hidden recorta el resplandor de la foto al borde de la
    // sección: sin él, el halo ensancharía la página en móvil.
    <section className="overflow-hidden border-b border-line bg-surface">
      <div className="container-page grid items-center gap-10 py-12 sm:py-14 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <Reveal>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">
            <span className="text-ink">Reloj</span>
            <span className="text-accent">GPS</span>
            <span className="text-ink">Pro</span>
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-500">
            Encuentra el reloj GPS perfecto para tu entrenamiento con datos
            reales, especificaciones verificadas y sin rodeos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/como-elegir" className="btn-primary">
              [ Aprende qué funciones necesitas ]
            </Link>
            <Link href="/relojes" className="btn-secondary">
              [ Ver catálogo de relojes ]
            </Link>
          </div>
        </Reveal>

        <div className="relative w-full max-w-sm justify-self-center md:max-w-none md:justify-self-end">
          {/* Resplandor ambiental detrás de la foto (.ambient-glow). */}
          <div aria-hidden="true" className="ambient-glow -inset-6 blur-3xl sm:-inset-10" />
          <ImageReveal className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-[16px] border border-line">
            <Image
              src="/images/photos/hero-trail-watch.jpg"
              alt="Corredor consultando la ruta GPS de su reloj deportivo en un sendero de montaña"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 384px"
              className="object-cover object-center"
            />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
