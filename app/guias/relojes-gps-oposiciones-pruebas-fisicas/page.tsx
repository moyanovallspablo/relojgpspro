import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getWatchBySlug } from "@/lib/data/watches";
import { getGuideBySlug } from "@/lib/data/guides";
import { GUIDE_CATEGORY_LABELS } from "@/lib/types/guide";
import type { Watch } from "@/lib/types/watch";
import { formatApproxEuros } from "@/lib/format";
import Container from "@/components/layout/Container";
import ReadingProgress from "@/components/layout/ReadingProgress";
import Badge from "@/components/ui/Badge";
import { GlossaryLabel } from "@/components/ui/Tooltip";
import Reveal from "@/components/motion/Reveal";
import AffiliateButton from "@/components/watches/AffiliateButton";
import GuideCard from "@/components/guides/GuideCard";
import { DEFAULT_OG_IMAGE, DEFAULT_OPEN_GRAPH, SITE_NAME, SITE_URL } from "@/lib/site";

// Guía con página propia (ver hasCustomPage en lib/data/guides.ts).
// Los datos técnicos y precios de la tabla salen de lib/data/watches.ts;
// aquí solo vive la parte editorial.

const SLUG = "relojes-gps-oposiciones-pruebas-fisicas";
const URL_PATH = `/guias/${SLUG}`;
const PUBLISHED_AT = "2026-10-01";

const SEO_TITLE =
  "Relojes GPS para Oposiciones 2026: Policía, Guardia Civil y Bomberos";
const H1 = "Relojes GPS para oposiciones y pruebas físicas (2026)";
const DESCRIPTION =
  "¿Opositas a Policía Nacional, Guardia Civil, Bomberos o Ejército? Los 3 relojes GPS que mejor funcionan en pista para clavar el ritmo en el 1000 m y el 2000 m: modo pista, laps con botón y peso pluma.";

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL_PATH },
  openGraph: {
    ...DEFAULT_OPEN_GRAPH,
    type: "article",
    url: URL_PATH,
    title: SEO_TITLE,
    description: DESCRIPTION,
    publishedTime: PUBLISHED_AT,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

// --- Datos editoriales por reloj -----------------------------------------

interface WatchPick {
  slug: string;
  profile: string;
  buttons: string;
  verdict: string;
  paragraphs: string[];
  forYou: string[];
  notForYou: string[];
  comparison?: { href: string; label: string };
}

const PICKS: WatchPick[] = [
  {
    slug: "garmin-forerunner-55",
    profile: "Primera oposición y presupuesto ajustado",
    buttons: "5 botones físicos",
    verdict: "El más barato que cumple con todo lo imprescindible.",
    paragraphs: [
      "Si es tu primera oposición y lo que necesitas es controlar el ritmo de las series y de la prueba de resistencia, el Forerunner 55 hace exactamente eso sin pagar por nada más. Tiene perfil de carrera en pista, temporizador de intervalos y cinco botones físicos: marcar una vuelta es un clic, sin tocar la pantalla con la mano sudada.",
      "Su pantalla MIP está siempre encendida y se lee perfectamente a pleno sol en la pista, y con 37 g apenas se nota en la muñeca durante un 1000 m a tope. La autonomía (hasta 2 semanas en modo reloj y 20 h con GPS) te permite olvidarte del cargador durante toda la semana de entrenamientos.",
    ],
    forYou: [
      "Entrenas sobre todo en pista o en circuitos conocidos.",
      "Quieres gastar lo mínimo y dedicar el resto a zapatillas o a un preparador.",
      "Te basta con ritmo, vueltas, frecuencia cardíaca y entrenamientos sugeridos.",
    ],
    notForYou: [
      "Entrenas mucho en ciudad con edificios altos: su GPS no es multibanda.",
      "Quieres pantalla a color o pagar con el reloj.",
    ],
    comparison: {
      href: "/comparativas/garmin-forerunner-165-vs-garmin-forerunner-55",
      label: "Garmin Forerunner 165 vs Forerunner 55",
    },
  },
  {
    slug: "coros-pace-3",
    profile: "Máxima precisión y el reloj más ligero",
    buttons: "Corona digital + 2 botones",
    verdict: "El más preciso y el más ligero de los tres.",
    paragraphs: [
      "El PACE 3 es el único de los tres con GPS multibanda (doble frecuencia). En la pista eso ayuda a que el ritmo instantáneo sea más estable en las curvas, y fuera de ella — rodajes por ciudad, parques con arbolado — marca la diferencia en distancia y ritmo. Si haces el volumen de rodaje fuera de la pista, es el que menos te va a engañar.",
      "Con correa de nylon pesa solo 30 g, la batería llega a 38 h de GPS y hasta 15 días de uso diario, e incluye de serie la plataforma EvoLab (carga, fatiga, predicción de marcas) y planes de entrenamiento. La corona digital se maneja bien con las manos sudadas para moverse entre pantallas, y el lap se marca con botón físico.",
    ],
    forYou: [
      "Quieres que el ritmo y la distancia sean lo más fiables posible, dentro y fuera de la pista.",
      "Buscas el reloj más ligero: 30 g con correa de nylon.",
      "Valoras el análisis de carga y fatiga para no llegar sobreentrenado al examen.",
    ],
    notForYou: [
      "Quieres pantalla a color o pagos sin contacto.",
      "Ya tienes otros dispositivos Garmin y prefieres no cambiar de ecosistema.",
    ],
    comparison: {
      href: "/comparativas/garmin-forerunner-165-vs-coros-pace-3",
      label: "Garmin Forerunner 165 vs COROS PACE 3",
    },
  },
  {
    slug: "garmin-forerunner-165",
    profile: "El reloj para la oposición y para el día a día",
    buttons: "5 botones físicos + pantalla táctil",
    verdict: "El más completo para llevar también fuera del entrenamiento.",
    paragraphs: [
      "El Forerunner 165 mantiene los cinco botones físicos del 55 — imprescindibles para marcar vueltas sin mirar — y añade una pantalla AMOLED a color, altímetro barométrico, potencia de carrera en la muñeca, Body Battery y Garmin Pay. Es el que tiene más sentido si vas a llevarlo puesto todo el día durante los meses de preparación.",
      "Su GPS no es multibanda: en pista y terreno abierto es suficiente, pero en ciudad densa el PACE 3 es más fiable. Con 39 g y hasta 19 h de GPS, va sobrado para cualquier prueba de resistencia y para la semana de entrenamientos.",
    ],
    forYou: [
      "Quieres un único reloj para entrenar y para el día a día, con buena pantalla y pagos.",
      "Te gustan los planes guiados de Garmin Coach y el ecosistema Garmin Connect.",
      "Preparas también pruebas de fuerza o circuito y quieres registrarlas.",
    ],
    notForYou: [
      "La precisión GPS en ciudad es tu prioridad: el PACE 3 va mejor.",
      "Tu presupuesto es ajustado: el Forerunner 55 cubre lo esencial por menos.",
    ],
    comparison: {
      href: "/comparativas/garmin-forerunner-165-vs-coros-pace-3",
      label: "Garmin Forerunner 165 vs COROS PACE 3",
    },
  },
];

const MUST_HAVES = [
  {
    title: "Modo pista (Track Run)",
    text: "El GPS por sí solo mide mal las curvas de una pista de 400 m. El perfil de carrera en pista ajusta el trazado a la geometría de la pista y te deja indicar la calle, así que las vueltas salen de 400 m de verdad y el ritmo deja de bailar en cada curva.",
  },
  {
    title: "Precisión GPS en curvas",
    text: "Fuera del modo pista, cuanto mejor sea el GPS, menos se \"corta\" la curva. El GPS multibanda (doble frecuencia) es el que mejor aguanta curvas cerradas, calles estrechas y arbolado; el GPS simple basta en terreno abierto.",
  },
  {
    title: "Botones físicos para marcar vueltas",
    text: "En una serie a tope no puedes deslizar el dedo por una pantalla táctil sudada. Un botón de vuelta (lap) físico se pulsa a ciegas en un segundo y te da el parcial exacto de cada 200 o 400 m.",
  },
  {
    title: "Peso ligero",
    text: "Por debajo de 40 g el reloj desaparece de la muñeca, también en dominadas, circuito de agilidad o natación. Los tres modelos de esta guía pesan entre 30 y 39 g.",
  },
];

const SETUP_STEPS = [
  {
    name: "Elige el perfil de carrera en pista",
    text: "Antes de cada sesión en pista, selecciona el perfil de carrera en pista (Track Run) e indica la calle por la que vas a correr.",
  },
  {
    name: "Configura los datos de la pantalla",
    text: "Deja solo tiempo total, ritmo medio de la vuelta y tiempo de la vuelta. En la prueba no hay tiempo para leer más datos.",
  },
  {
    name: "Desactiva la vuelta automática y marca a mano",
    text: "Desactiva el lap automático por kilómetro y pulsa el botón de vuelta en cada paso por la línea: así comparas cada parcial con tu objetivo.",
  },
  {
    name: "Calcula tus parciales objetivo",
    text: "Divide tu tiempo objetivo entre las vueltas de la prueba: 2,5 vueltas de 400 m en un 1000 m y 5 vueltas en un 2000 m. Ensaya esos parciales en las series hasta tenerlos automatizados.",
  },
];

// Parciales por vuelta de 400 m para algunos tiempos objetivo
// habituales. Se calculan, no se escriben a mano.
const SPLIT_TARGETS = [
  { distance: 1000, times: [180, 200, 220, 240] },
  { distance: 2000, times: [420, 480, 540, 600] },
];

const FAQS = [
  {
    q: "¿Se puede llevar reloj en el examen físico de la oposición?",
    a: "Depende de la convocatoria y del tribunal. En muchas pruebas de carrera se permite llevar reloj, pero las bases pueden prohibir dispositivos electrónicos o el tribunal puede pedirte que te lo quites. Lee las bases de tu convocatoria y, si no lo aclaran, pregunta al tribunal antes de la prueba: no te arriesgues a una descalificación.",
  },
  {
    q: "¿El tiempo de mi reloj cuenta como tiempo oficial?",
    a: "No. El único tiempo válido es el que toma el tribunal (manual o con célula fotoeléctrica). El reloj sirve para controlar tu ritmo durante la prueba, no para reclamar una marca.",
  },
  {
    q: "¿Me fío de la distancia del GPS durante el 1000 m o el 2000 m?",
    a: "Mejor no. En una pista, incluso con buen GPS, unos metros de error en la distancia se traducen en segundos de error en el ritmo. Lo fiable es el tiempo por vuelta: marca el lap en cada paso por la línea y compáralo con tus parciales objetivo.",
  },
  {
    q: "¿Qué hago si el examen no es en una pista de 400 m?",
    a: "Si la prueba es en un circuito de otra longitud o en asfalto, no uses el modo pista. Usa el perfil de carrera normal y marca la vuelta manualmente en las referencias del recorrido; calcula los parciales sobre esa distancia.",
  },
  {
    q: "¿Necesito GPS multibanda para aprobar?",
    a: "No. En pista, con el modo pista activado, cualquiera de los tres relojes de esta guía es suficiente. El multibanda se nota sobre todo en los rodajes por ciudad o zonas arboladas, donde el GPS simple puede desviarse.",
  },
  {
    q: "¿Sirve el reloj para el resto de pruebas (dominadas, agilidad, natación)?",
    a: "Para entrenarlas, sí: los tres registran sesiones de fuerza y natación y son sumergibles a 5 ATM. En el examen, esas pruebas las cronometra y cuenta el tribunal, así que el reloj aporta poco.",
  },
];

// --- Utilidades ---------------------------------------------------------

function formatEuros(watch: Watch) {
  return formatApproxEuros(watch.observedPrice ?? watch.officialPrice);
}

function formatClock(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function gpsHours(watch: Watch) {
  // Datos de autonomía GPS verificados en cada ficha.
  const bySlug: Record<string, string> = {
    "garmin-forerunner-55": "20 h",
    "coros-pace-3": "38 h (15 h multibanda)",
    "garmin-forerunner-165": "19 h",
  };
  return bySlug[watch.slug] ?? "—";
}

// --- Página -------------------------------------------------------------

export default function OposicionesGuidePage() {
  const guide = getGuideBySlug(SLUG);
  const picks = PICKS.map((p) => ({ ...p, watch: getWatchBySlug(p.slug) })).filter(
    (p): p is WatchPick & { watch: Watch } => Boolean(p.watch),
  );
  const relatedGuides = (guide?.relatedGuideSlugs ?? [])
    .map((s) => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const pageUrl = `${SITE_URL}${URL_PATH}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: H1,
      description: DESCRIPTION,
      inLanguage: "es-ES",
      datePublished: PUBLISHED_AT,
      dateModified: PUBLISHED_AT,
      mainEntityOfPage: pageUrl,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      about: picks.map((p) => ({
        "@type": "Product",
        name: `${p.watch.brand} ${p.watch.name}`,
        brand: { "@type": "Brand", name: p.watch.brand },
        url: `${SITE_URL}/relojes/${p.watch.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Cómo configurar tu reloj GPS para la prueba de 1000 m o 2000 m",
      inLanguage: "es-ES",
      step: SETUP_STEPS.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
        url: `${pageUrl}#configurar-reloj`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Guías", item: `${SITE_URL}/guias` },
        { "@type": "ListItem", position: 2, name: H1, item: pageUrl },
      ],
    },
  ];

  return (
    <Container className="py-14 sm:py-16">
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <nav className="text-sm text-ink-500">
        <Link href="/guias" className="hover:text-ink">Guías</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{H1}</span>
      </nav>

      {/* Introducción */}
      <Reveal className="mt-6 max-w-prose">
        <span className="tag w-fit">{GUIDE_CATEGORY_LABELS.compra}</span>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{H1}</h1>
        <p className="mt-4 text-base leading-relaxed text-ink-500">
          Policía Nacional, Guardia Civil, Bomberos, Ejército, Policía Local…
          Casi todas las oposiciones con pruebas físicas tienen una prueba de
          resistencia en pista — un 1000 m en Policía Nacional, un 2000 m en
          Guardia Civil — donde unos pocos segundos separan el apto del no
          apto.
        </p>
      </Reveal>

      <Reveal delay={0.05} className="article-content mt-8 max-w-prose">
        <h2>Lo que de verdad necesitas en la pista</h2>
        <p>
          En un 1000 m o un 2000 m el error más habitual no es la falta de
          forma, sino el ritmo: salir demasiado rápido en la primera vuelta y
          pagarlo en la última. Por eso el reloj de un opositor tiene un
          trabajo muy concreto: decirte, vuelta a vuelta, si vas por delante
          o por detrás de tu tiempo objetivo — y hacerlo en una pista de 400
          m, donde el GPS lo tiene más difícil que en una recta.
        </p>
        <p>
          No necesitas mapas, ni navegación, ni el reloj más caro del
          catálogo. Necesitas un modo pista que mida bien las vueltas, un
          botón físico para marcarlas sin pensar y un reloj que no estorbe en
          el resto de pruebas. Las distancias y marcas cambian según la
          convocatoria: confirma siempre las de tus bases.
        </p>
      </Reveal>

      {/* Imprescindibles */}
      <Reveal className="mt-14">
        <h2 className="font-display text-2xl font-bold">
          Qué debe tener sí o sí un reloj para oposiciones
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {MUST_HAVES.map((m, i) => (
            <div key={m.title} className="glass-panel p-6">
              <p className="font-mono text-xs font-semibold text-accent">
                [{String(i + 1).padStart(2, "0")}]
              </p>
              <h3 className="mt-2 font-display text-lg font-bold text-ink">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{m.text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Tabla comparativa */}
      <Reveal className="mt-14">
        <h2 className="font-display text-2xl font-bold">
          Comparativa: los 3 relojes clave para opositores
        </h2>
        <div className="mt-5 overflow-x-auto rounded-card border border-line">
          <table className="spec-table w-full min-w-[44rem] text-left text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="px-4 py-3 font-semibold text-ink-500"></th>
                {picks.map((p) => (
                  <th key={p.slug} className="px-4 py-3 font-display font-bold text-ink">
                    <Link href={`/relojes/${p.slug}`} className="hover:text-accent">
                      {p.watch.brand} {p.watch.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <Row label="Perfil de opositor" values={picks.map((p) => p.profile)} />
              <Row label="Precio aproximado" values={picks.map((p) => formatEuros(p.watch))} />
              <Row
                label="Peso"
                values={picks.map((p) =>
                  p.slug === "coros-pace-3" ? "39 g (30 g con nylon)" : `${p.watch.weightGrams} g`,
                )}
              />
              <Row label="Modo pista" values={picks.map(() => "Sí")} />
              <Row
                label="GPS"
                values={picks.map((p) =>
                  p.slug === "coros-pace-3" ? "Multibanda (doble frecuencia)" : "Simple (sin multibanda)",
                )}
              />
              <Row label="Botones" values={picks.map((p) => p.buttons)} />
              <Row
                label="Pantalla"
                values={picks.map((p) =>
                  p.watch.screen.type === "AMOLED" ? "AMOLED a color" : "MIP, siempre encendida",
                )}
              />
              <Row label="Autonomía con GPS" values={picks.map((p) => gpsHours(p.watch))} />
              <tr className="border-t border-line">
                <th className="px-4 py-3 font-semibold text-ink">Comprar / leer más</th>
                {picks.map((p) => (
                  <td key={p.slug} className="px-4 py-3 align-top">
                    <div className="flex flex-col items-start gap-2">
                      <AffiliateButton watch={p.watch} />
                      <Link
                        href={`/relojes/${p.slug}`}
                        className="text-xs font-semibold text-accent hover:underline"
                      >
                        Ver ficha completa
                      </Link>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-500">
          Precios de referencia de cada ficha; cambian con frecuencia, comprueba
          el precio actual en la tienda. ¿Dudas entre los dos de gama media?
          Lee la comparativa{" "}
          <Link
            href="/comparativas/garmin-forerunner-165-vs-coros-pace-3"
            className="font-semibold text-accent hover:underline"
          >
            Garmin Forerunner 165 vs COROS PACE 3
          </Link>
          .
        </p>
      </Reveal>

      {/* Análisis por perfil */}
      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold">
          Análisis: qué reloj elegir según tu perfil
        </h2>
        <div className="mt-6 space-y-8">
          {picks.map((p, i) => (
            <Reveal
              key={p.slug}
              className="grid gap-6 glass-panel p-6 md:grid-cols-[180px_1fr]"
            >
              <div className="relative isolate mx-auto aspect-square w-40 md:w-full">
                <div aria-hidden="true" className="product-halo" />
                {p.watch.coverImage ? (
                  <Image
                    src={p.watch.coverImage.src}
                    alt={p.watch.coverImage.alt}
                    fill
                    sizes="180px"
                    className="z-10 object-contain mix-blend-multiply"
                  />
                ) : (
                  <span className="relative z-10 flex h-full items-center justify-center font-display text-sm font-semibold text-ink-500">
                    {p.watch.brand}
                  </span>
                )}
              </div>
              <div>
                <Badge tone="glass">
                  <span className="text-accent-dark">N.º {i + 1}</span>
                  {p.profile}
                </Badge>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">
                  {p.watch.brand} {p.watch.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-ink">{p.verdict}</p>
                {p.paragraphs.map((t) => (
                  <p key={t} className="mt-3 text-sm leading-relaxed text-ink-500">
                    {t}
                  </p>
                ))}
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-ink">Elígelo si…</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-500 marker:text-accent">
                      {p.forYou.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Mejor otro si…</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-500">
                      {p.notForYou.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <AffiliateButton watch={p.watch} />
                  <Link
                    href={`/relojes/${p.slug}`}
                    className="text-sm font-semibold text-accent hover:underline"
                  >
                    Análisis completo
                  </Link>
                  {p.comparison && (
                    <Link
                      href={p.comparison.href}
                      className="text-sm font-semibold text-accent hover:underline"
                    >
                      {p.comparison.label}
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cómo configurarlo (HowTo) */}
      <Reveal className="mt-14 max-w-prose">
        <h2 id="configurar-reloj" className="scroll-mt-24 font-display text-2xl font-bold">
          Cómo configurar el reloj para la prueba de 1000 m o 2000 m
        </h2>
        <ol className="mt-5 space-y-4">
          {SETUP_STEPS.map((s, i) => (
            <li key={s.name} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-xs font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-ink">{s.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="mt-8 font-display text-lg font-bold">
          Parciales por vuelta de 400 m (ritmo constante)
        </h3>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {SPLIT_TARGETS.map((t) => (
            <div key={t.distance} className="overflow-hidden rounded-card border border-line">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="px-4 py-2 font-semibold text-ink">Objetivo {t.distance} m</th>
                    <th className="px-4 py-2 font-semibold text-ink">Cada 400 m</th>
                  </tr>
                </thead>
                <tbody>
                  {t.times.map((sec) => (
                    <tr key={sec} className="border-t border-line">
                      <td className="px-4 py-2 font-mono text-ink">{formatClock(sec)}</td>
                      <td className="px-4 py-2 font-mono text-ink-500">
                        {formatClock((sec / t.distance) * 400)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </Reveal>

      {/* FAQ */}
      <Reveal className="mt-14 max-w-prose">
        <h2 className="font-display text-2xl font-bold">
          Preguntas frecuentes sobre el reloj en el examen
        </h2>
        <div className="mt-5 divide-y divide-line rounded-card border border-line">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold text-ink marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  {f.q}
                  <span className="font-mono text-accent group-open:rotate-45 transition-transform">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{f.a}</p>
            </details>
          ))}
        </div>
      </Reveal>

      {relatedGuides.length > 0 && (
        <Reveal className="mt-14">
          <h2 className="font-display text-xl font-bold">Sigue leyendo</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </Reveal>
      )}

      <p className="mt-10 max-w-prose text-xs text-ink-500">
        Como afiliado de Amazon, {SITE_NAME} obtiene ingresos por las compras
        adscritas que cumplen los requisitos aplicables.
      </p>
    </Container>
  );
}

function Row({ label, values }: { label: string; values: string[] }) {
  return (
    <tr className="border-t border-line">
      <th className="px-4 py-3 font-semibold text-ink">
        <GlossaryLabel label={label} />
      </th>
      {values.map((v, i) => (
        <td key={i} className="px-4 py-3 text-ink-500">
          {v}
        </td>
      ))}
    </tr>
  );
}
