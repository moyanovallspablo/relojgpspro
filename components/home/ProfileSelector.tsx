import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/motion/Reveal";
import { TRAIL_GUIDE_PATH } from "@/lib/data/valueGuide";

const PROFILES = [
  {
    title: "Principiante / Opositor",
    tag: "Gama de Entrada / Básico",
    bullets: ["Ritmo y distancia", "Pulsómetro en muñeca", "Autonomía sencilla, sin complicaciones"],
    href: "/guias/que-reloj-gps-comprar-para-empezar-a-correr",
  },
  {
    title: "Corredor Popular",
    tag: "Gama Intermedia / Entrenamiento",
    bullets: ["Series y ritmos estructurados", "Métricas de carga de entrenamiento", "GPS multibanda"],
    href: "/guias/que-metricas-de-entrenamiento-importan",
  },
  {
    title: "Trail y Montaña",
    tag: "Gama Avanzada / Excursión y Trail",
    bullets: ["Mapas offline", "Altímetro barométrico", "Carga de rutas GPX"],
    href: TRAIL_GUIDE_PATH,
  },
];

export default function ProfileSelector() {
  return (
    <section className="border-b border-line bg-subtle py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="Identifica tu perfil"
            title="El reloj adecuado depende de cómo entrenas"
            description="Tres perfiles habituales para orientarte antes de mirar modelos concretos."
          />
        </Reveal>
        <Reveal delay={0.08} className="mt-10 grid gap-5 sm:grid-cols-3">
          {PROFILES.map((profile) => (
            <div key={profile.title} className="card flex flex-col gap-4 p-6">
              <span className="tag w-fit font-mono text-[11px] normal-case">
                {profile.tag}
              </span>
              <h3 className="font-display text-lg font-bold text-ink">
                {profile.title}
              </h3>
              <ul className="space-y-1.5 text-sm leading-relaxed text-ink-500">
                {profile.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={profile.href}
                className="mt-auto text-sm font-semibold text-accent hover:underline"
              >
                Leer guía →
              </Link>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
