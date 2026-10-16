import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getWatchBySlug } from "@/lib/data/watches";
import { getGuideBySlug } from "@/lib/data/guides";
import { TRAIL_GUIDE_AWARDS, TRAIL_GUIDE_SLUG } from "@/lib/data/valueGuide";
import { getComparisonBySlug } from "@/lib/data/comparisons";
import { GUIDE_CATEGORY_LABELS } from "@/lib/types/guide";
import type { Watch } from "@/lib/types/watch";
import Container from "@/components/layout/Container";
import ReadingProgress from "@/components/layout/ReadingProgress";
import Badge from "@/components/ui/Badge";
import { GlossaryLabel } from "@/components/ui/Tooltip";
import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/motion/ImageReveal";
import AffiliateButton from "@/components/watches/AffiliateButton";
import GuideCard from "@/components/guides/GuideCard";
import NumText from "@/components/ui/NumText";
import { formatApproxEuros, formatEuros } from "@/lib/format";
import { DEFAULT_OG_IMAGE, DEFAULT_OPEN_GRAPH, SITE_NAME, SITE_URL } from "@/lib/site";

// Guía pilar con página propia (ver hasCustomPage en lib/data/guides.ts).
// Precios, pesos, pros y contras salen de lib/data/watches.ts y la
// categoría de cada reloj de TRAIL_GUIDE_AWARDS; aquí solo vive la parte
// editorial.

const SLUG = TRAIL_GUIDE_SLUG;
const URL_PATH = `/guias/${SLUG}`;
const PUBLISHED_AT = "2026-10-14";

const SEO_TITLE = "Los Mejores Relojes GPS para Trail y Montaña de 2026: Guía Outdoor";
const H1 = "Los mejores relojes GPS para trail y montaña de 2026";
const DESCRIPTION =
  "Para trail, senderismo y ultradistancia: comparamos mapas topográficos, altímetro barométrico, batería con GPS y resistencia de los mejores relojes de montaña.";

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
  angle: string;
  verdict: string;
  topoMap: string;
  gps: string;
  gpsHours: string;
  toughness: string;
  weight: string;
  // Análisis por bloques: en ruta, tracks GPX, visibilidad al sol y balance.
  sections: { title: string; text: string }[];
  forWho: string;
  duelSlugs: string[];
}

const PICKS: WatchPick[] = [
  {
    slug: "garmin-instinct-2",
    angle: "A prueba de todo",
    verdict: "Estándar MIL-STD-810, 10 ATM y hasta 70 h de GPS en ahorro máximo.",
    topoMap: "No (migas de pan + TracBack)",
    gps: "Simple",
    gpsHours: "Hasta 30 h (70 h ahorro máx.)",
    toughness: "10 ATM · MIL-STD-810",
    weight: "52 g",
    sections: [
      {
        title: "En ruta",
        text: "El Garmin Instinct 2 es el reloj que menos te preocupa cuando la salida se complica. Su caja de polímero reforzado está probada bajo el estándar militar MIL-STD-810 frente a golpes, temperatura y agua, resiste hasta 10 ATM y se maneja con cinco botones físicos: no hay pantalla táctil que se vuelva loca con lluvia, sudor o guantes. Donde más luce es en las salidas largas: hasta 30 horas con GPS activo, hasta 70 horas en el modo de máxima duración de batería y 28 días en modo reloj. Un ultra de 100 km o una travesía de varios días caben sin buscar un enchufe.",
      },
      {
        title: "Tracks GPX y navegación",
        text: "No tiene mapas, pero navega bien si sabes lo que hace. Importas el GPX en Garmin Connect (o creas allí la ruta), lo envías al reloj como trayecto y el Instinct 2 dibuja la línea —las migas de pan— con tu posición encima y un aviso si te sales del recorrido. El altímetro barométrico y la brújula de 3 ejes te dicen cuánto desnivel llevas y hacia dónde miras, y TracBack te devuelve por el mismo camino por el que has venido si la niebla o la noche te obligan a dar la vuelta. Lo que no puede es enseñarte qué senderos hay alrededor: si te desvías, solo ves la línea sobre un fondo vacío.",
      },
      {
        title: "Visibilidad al sol",
        text: "Su pantalla MIP monocroma de 0,9\" es la más pequeña de la selección, pero también la más fácil de leer con sol directo: cuanta más luz le da, más contraste tiene. La pega es el espacio. La línea del track y los datos se apiñan en una pantalla reducida y sin color, así que consultar detalles en marcha pide más atención que en una AMOLED.",
      },
      {
        title: "Balance",
        text: "A favor juega también su precio real: PVPR de 299,99 €, pero se encuentra habitualmente en torno a 179-189 €, lo que lo convierte en el reloj de montaña con barómetro, brújula y certificación militar más barato de esta guía. En contra, el GPS no es multibanda: en canales estrechas o bajo bosque cerrado el trazado se desvía más que en el PACE 3 o el Race S, y con 52 g se nota más en la muñeca que un reloj de running.",
      },
    ],
    forWho:
      "Para senderistas, ultrafondistas y quien sale por rutas con track conocido y prioriza batería y robustez por encima de una pantalla vistosa o de un mapa de fondo.",
    duelSlugs: ["garmin-instinct-2-vs-suunto-race-s", "garmin-instinct-2-vs-coros-pace-3"],
  },
  {
    slug: "suunto-race-s",
    angle: "Mapas por 349 €",
    verdict: "Mapas topográficos offline gratis, multibanda y AMOLED de 2000 nits.",
    topoMap: "Sí, offline gratis",
    gps: "Multibanda",
    gpsHours: "Hasta 30 h (40 h Endurance)",
    toughness: "50 m",
    weight: "60 g",
    sections: [
      {
        title: "En ruta",
        text: "El Suunto Race S es el reloj que hace asequible la navegación con mapa. Por 349 € (PVPR oficial en Suunto España, un precio muy estable) trae mapas topográficos offline sin coste adicional, GPS multibanda real con cinco sistemas de satélites y altímetro barométrico, con bisel de acero inoxidable y 60 g que se llevan bien durante horas. En las subidas largas, la guía de ascensos (Climb Guidance) te enseña el perfil de cada repecho de la ruta cargada para que dosifiques el esfuerzo, y el GPS de doble frecuencia mantiene limpio el trazado en barrancos o bajo bosque cerrado, donde un GPS simple dibuja zigzags.",
      },
      {
        title: "Tracks GPX y navegación",
        text: "Planificas la ruta en la app de Suunto o importas un GPX, la sincronizas y el reloj la dibuja sobre el mapa topográfico: ves la línea, pero también los senderos, las pistas y las curvas de nivel que la rodean. Esa diferencia es la que cuenta cuando te desvías. En un cruce sin balizar sabes qué camino es cuál y puedes improvisar una variante —acortar, bajar al pueblo más cercano— en lugar de deshacer lo andado. Los mapas se descargan por zonas desde la app y funcionan sin cobertura. Eso sí, el reloj sigue rutas, no las calcula por ti: si quieres que el propio reloj trace el camino sobre el mapa, eso es terreno del Forerunner 965.",
      },
      {
        title: "Visibilidad al sol",
        text: "Su AMOLED de 1,32\" con 2000 nits es muy brillante: se lee bien a pleno sol y, sobre todo, distingue en color senderos, agua y curvas de nivel que en una MIP serían grises. A cambio, la autonomía depende de cómo uses la pantalla: 30 horas en el modo de mejor precisión y hasta 40 en modo Endurance, menos margen que el Instinct 2 en salidas de varios días.",
      },
      {
        title: "Balance",
        text: "Sus contras son conocidos: un ecosistema de aplicaciones de terceros más limitado que el de Garmin, sin música offline, y algunas pruebas independientes han cuestionado la fiabilidad de su pulsómetro de muñeca, así que para entrenar por zonas en cuesta conviene una banda de pecho. Para montaña, ninguno pesa tanto como llevar un mapa de verdad en la muñeca por 349 €.",
      },
    ],
    forWho:
      "Para quien hace trail o rutas de montaña por terreno que no conoce y quiere ver el mapa en la muñeca sin pagar precio de gama alta.",
    duelSlugs: ["garmin-instinct-2-vs-suunto-race-s", "coros-pace-3-vs-suunto-race-s"],
  },
  {
    slug: "coros-pace-3",
    angle: "Ligero y multibanda",
    verdict: "30-39 g, altímetro barométrico y hasta 38 h de GPS por 249 €.",
    topoMap: "No (migas de pan)",
    gps: "Multibanda",
    gpsHours: "Hasta 38 h (15 h multibanda)",
    toughness: "5 ATM",
    weight: "39 g (30 g con nylon)",
    sections: [
      {
        title: "En ruta",
        text: "El COROS PACE 3 es la entrada a la montaña más ligera del catálogo: 39 g con correa de silicona y solo 30 g con la de nylon. En una tirada de seis horas eso se nota: no rebota, no roza y se olvida en la muñeca, también por la noche si quieres que mida el sueño antes de una carrera. Por 249 € (PVPR de referencia en España) trae lo esencial para trail: altímetro barométrico, GPS multibanda de doble frecuencia y métricas específicas de trail. La autonomía es su otro argumento: hasta 38 horas en GPS estándar —15 horas en doble frecuencia— y hasta 15 días de uso diario.",
      },
      {
        title: "Tracks GPX y navegación",
        text: "Navega por migas de pan: importas el GPX en la app de COROS (o creas allí la ruta), lo sincronizas y el reloj muestra la línea del recorrido con tu posición y un aviso si te sales del track. Para carreras balizadas, rutas conocidas o senderos evidentes es todo lo que necesitas: el track confirma que vas bien en los cruces dudosos. El límite aparece en terreno desconocido o con niebla. No hay mapa de fondo, así que ves hacia dónde va la línea, pero no qué hay alrededor ni qué alternativas tienes si toca acortar.",
      },
      {
        title: "Visibilidad al sol",
        text: "Su pantalla MIP siempre encendida se lee perfectamente a pleno sol, justo cuando más la necesitas en montaña, y apenas gasta batería. Es menos vistosa que una AMOLED y sus colores son básicos, pero para ver ritmo, desnivel acumulado o la línea del track en marcha cumple de sobra.",
      },
      {
        title: "Balance",
        text: "En contra: no hay mapas completos ni pagos sin contacto, y sus materiales son más sencillos que los de los COROS de gama alta. Con la llegada del PACE 4, su disponibilidad en la web oficial oscila, aunque sigue en distribuidores como Decathlon o Amazon. Si empiezas en trail o corres carreras marcadas, es difícil encontrar tanto reloj de montaña por menos dinero, y su GPS multibanda supera en precisión al del Instinct 2 bajo árboles o entre paredes.",
      },
    ],
    forWho:
      "Para quien se inicia en trail o compite en carreras balizadas, valora la ligereza por encima de todo y quiere barómetro y GPS preciso sin pasar de los 250 €.",
    duelSlugs: ["garmin-instinct-2-vs-coros-pace-3", "coros-pace-3-vs-suunto-race-s"],
  },
  {
    slug: "garmin-forerunner-965",
    angle: "Pantalla grande y mapas",
    verdict: "Mapas ruteables a color, AMOLED de 1,4\", ClimbPro y bisel de titanio.",
    topoMap: "Sí, ruteables a color",
    gps: "Multibanda (SatIQ)",
    gpsHours: "Hasta 31 h (19 h multibanda)",
    toughness: "5 ATM",
    weight: "53 g",
    sections: [
      {
        title: "En ruta",
        text: "El Garmin Forerunner 965 es el reloj más completo de esta selección para montaña, y también el más caro: PVPR de 649,99 €, habitualmente en torno a 580-600 € en distribuidores autorizados. Reúne mapas topográficos a color, GPS multibanda con tecnología SatIQ —que elige automáticamente el modo de satélites para no gastar batería de más cuando el cielo está despejado—, altímetro barométrico y bisel de titanio, en 53 g. En las subidas, ClimbPro te enseña cada repecho que tienes delante, con desnivel, pendiente y distancia, y gracias a los mapas funciona incluso sin una ruta cargada. La autonomía da para ultras: hasta 31 horas con GPS y 19 con todos los sistemas y multibanda activos.",
      },
      {
        title: "Tracks GPX y navegación",
        text: "Es el único de los cuatro con mapas ruteables. Además de seguir un GPX importado en Garmin Connect, el propio reloj puede calcular rutas sobre el mapa y devolverte al inicio por senderos y caminos reales, no en línea recta. Te avisa de los giros y de si te sales del trayecto, y como la ruta se apoya en el mapa, en un cruce dudoso ves todas las opciones. Con 32 GB de almacenamiento hay sitio de sobra para mapas de varias regiones y para tu música.",
      },
      {
        title: "Visibilidad al sol",
        text: "Su AMOLED de 1,4\" es la más grande de la selección y la mejor para leer el mapa: más superficie para ver cruces y curvas de nivel, con colores que separan senderos de pistas. Al sol se lee bien, aunque con luz directa muy intensa una MIP sigue siendo más cómoda, y con uso intensivo de pantalla y mapas la batería cae antes que en los MIP.",
      },
      {
        title: "Balance",
        text: "En contra, el precio: si no vas a usar la navegación avanzada, pagas bastante más que por el Race S por un reloj que en montaña hace lo esencial de forma parecida. Tampoco tiene la robustez certificada del Instinct 2, y su resistencia al agua es de 5 ATM. Para ultras, travesías por terreno desconocido o quien quiere un solo reloj para entrenar en serio y navegar, es la referencia.",
      },
    ],
    forWho:
      "Para ultrafondistas y montañeros que se mueven por terreno desconocido, quieren la mejor experiencia de mapa y además entrenan con estructura durante la semana.",
    duelSlugs: ["garmin-forerunner-965-vs-suunto-race-s"],
  },
];

const USE_SHORTCUTS = [
  { use: "Travesías de varios días o ultras por rutas con track", slugs: ["garmin-instinct-2"] },
  { use: "Rutas por terreno que no conoces, sin pasar de 350 €", slugs: ["suunto-race-s"] },
  { use: "Empiezas en trail o corres carreras balizadas", slugs: ["coros-pace-3"] },
  {
    use: "Navegación completa y un reloj para entrenar en serio",
    slugs: ["garmin-forerunner-965"],
  },
];

const FAQS = [
  {
    q: "¿Cuál es el mejor reloj GPS para trail y montaña en 2026?",
    a: "Depende de cómo salgas al monte. Si quieres mapas sin pagar precio de gama alta, el Suunto Race S (mapas topográficos offline gratis, multibanda y AMOLED por 349 €). Si priorizas batería y robustez, el Garmin Instinct 2 (MIL-STD-810, 10 ATM y hasta 70 h de GPS en ahorro máximo). Para empezar con poco peso y poco presupuesto, el COROS PACE 3; y para la navegación más completa, el Garmin Forerunner 965.",
  },
  {
    q: "¿Necesito mapas topográficos para hacer trail?",
    a: "No siempre. Para carreras balizadas y rutas conocidas basta con la navegación por migas de pan, que muestra la línea del track y avisa si te sales. Los mapas marcan la diferencia en terreno desconocido, con niebla o cuando necesitas improvisar una variante, porque ves los senderos reales alrededor. De esta guía los tienen el Suunto Race S y el Garmin Forerunner 965.",
  },
  {
    q: "¿Cuánta batería con GPS necesito para un ultra?",
    a: "La autonomía en el modo que vas a usar debe superar con margen tu tiempo previsto. Para un maratón de montaña casi cualquier reloj llega; para un ultra de 15-20 horas, busca 30 h o más. En esta guía: Instinct 2 hasta 30 h (70 h en ahorro máximo), PACE 3 hasta 38 h (15 h multibanda), Forerunner 965 hasta 31 h (19 h multibanda) y Race S hasta 30 h (40 h en Endurance).",
  },
  {
    q: "¿El altímetro por GPS no es suficiente?",
    a: "Para montaña, no. La altitud calculada solo con GPS puede variar decenas de metros y suma desnivel fantasma en tramos llanos. El altímetro barométrico mide la presión del aire y registra el desnivel acumulado con mucha más fiabilidad. Los cuatro relojes de esta guía lo llevan.",
  },
];

// --- Utilidades ---------------------------------------------------------

function formatWatchPrice(watch: Watch) {
  return formatApproxEuros(watch.observedPrice ?? watch.officialPrice);
}

// PVPR solo cuando difiere del precio mostrado (si no, es redundante).
function pvprNote(watch: Watch) {
  const { officialPrice, observedPrice } = watch;
  if (!officialPrice || !observedPrice || officialPrice === observedPrice) return null;
  return `PVPR ${formatEuros(officialPrice)}`;
}

function altimeterLabel(watch: Watch) {
  if (watch.altimeter === "barométrico") return "Barométrico";
  if (watch.altimeter === "GPS") return "Por GPS";
  if (watch.altimeter === "no") return "No";
  return "Sin verificar";
}

// --- Página -------------------------------------------------------------

export default function TrailMontanaGuidePage() {
  const guide = getGuideBySlug(SLUG);
  const picks = PICKS.map((p) => ({
    ...p,
    watch: getWatchBySlug(p.slug),
    award: TRAIL_GUIDE_AWARDS[p.slug],
    duels: p.duelSlugs
      .map((s) => getComparisonBySlug(s))
      .filter((c): c is NonNullable<typeof c> => Boolean(c?.content)),
  })).filter((p): p is typeof p & { watch: Watch } => Boolean(p.watch));
  const watchName = (slug: string) => {
    const w = getWatchBySlug(slug);
    return w ? `${w.brand} ${w.name}` : slug;
  };
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
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: H1,
      itemListOrder: "https://schema.org/ItemListUnordered",
      numberOfItems: picks.length,
      itemListElement: picks.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${p.watch.brand} ${p.watch.name}`,
        url: `${SITE_URL}/relojes/${p.watch.slug}`,
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
      <div className="mt-6 grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
        <Reveal className="max-w-prose">
          <span className="tag w-fit">{GUIDE_CATEGORY_LABELS.compra}</span>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{H1}</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            En montaña, un reloj GPS no solo mide: te dice dónde estás, cuánto
            desnivel te queda y si llegarás con batería. Hemos elegido el
            mejor en cuatro perfiles —resistencia, mapas, ligereza y gama
            alta— para corredores de montaña, senderistas y ultrafondistas, a
            partir de las especificaciones y los precios verificados de
            nuestras fichas.
          </p>
        </Reveal>
        <ImageReveal className="relative hidden aspect-[4/3] w-full overflow-hidden rounded-xl border border-line md:block">
          <Image
            src="/images/photos/guide-watch-map.jpg"
            alt="Reloj GPS mostrando un mapa de ruta en la muñeca durante una salida de trail"
            fill
            priority
            sizes="45vw"
            className="object-cover"
          />
        </ImageReveal>
      </div>

      {/* Podio */}
      <section className="mt-12">
        <Reveal>
          <h2 className="font-display text-2xl font-bold">Los cuatro mejores para la montaña</h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {picks.map((p) => (
            <article key={p.slug} className="card flex min-w-0 flex-col p-5 sm:p-6">
              <Badge tone="glass">{p.award}</Badge>
              {/* isolate + overflow-hidden: el resplandor queda detrás del
                  reloj y recortado al círculo, sin ensanchar la tarjeta;
                  mix-blend-multiply funde el fondo blanco de la foto. */}
              <div className="relative isolate mx-auto mt-4 aspect-square w-36 overflow-hidden rounded-full">
                <div aria-hidden="true" className="ambient-glow inset-[10%] blur-2xl" />
                {p.watch.coverImage ? (
                  <Image
                    src={p.watch.coverImage.src}
                    alt={p.watch.coverImage.alt}
                    fill
                    sizes="144px"
                    className="z-10 object-contain p-3 mix-blend-multiply"
                  />
                ) : (
                  <span className="relative z-10 flex h-full items-center justify-center font-display text-sm font-semibold text-ink-500">
                    {p.watch.brand}
                  </span>
                )}
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-500">
                {p.watch.brand} · {p.angle}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-ink">
                <Link href={`/relojes/${p.slug}`} className="hover:text-accent">
                  {p.watch.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm font-semibold text-ink">
                {formatWatchPrice(p.watch)}
                {pvprNote(p.watch) && (
                  <span className="ml-2 text-xs font-normal text-ink-500">
                    {pvprNote(p.watch)}
                  </span>
                )}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{p.verdict}</p>
              <dl className="mt-4 flex-1 space-y-1.5 border-t border-line pt-4 text-xs">
                {[
                  ["Mapa", p.topoMap],
                  ["GPS", p.gpsHours],
                  ["Peso", p.weight],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3">
                    <dt className="shrink-0 text-ink-500">{k}</dt>
                    <dd className="min-w-0 text-right font-medium text-ink">
                      <NumText>{v}</NumText>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex flex-col gap-3">
                <AffiliateButton watch={p.watch} className="w-full" />
                <a
                  href={`#${p.slug}`}
                  className="text-center text-sm font-semibold text-accent hover:underline"
                >
                  Análisis en ruta ↓
                </a>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      {/* Tabla comparativa */}
      <Reveal className="mt-14">
        <h2 className="font-display text-2xl font-bold">
          Comparativa de montaña: mapas, altímetro, batería y resistencia
        </h2>
        {/* relative: el texto sr-only de los botones (absolute) queda
            recortado por el scroll de la tabla y no ensancha la página. */}
        <div className="relative mt-5 overflow-x-auto rounded-card border border-line">
          <table className="spec-table w-full min-w-[60rem] text-left text-sm">
            <thead className="bg-surface">
              <tr>
                {[
                  "Reloj",
                  "Mapa topográfico",
                  "Altímetro",
                  "GPS",
                  "Batería con GPS",
                  "Resistencia",
                  "Peso",
                  "Precio",
                  "",
                ].map((h, i) => (
                  <th key={i} className="px-4 py-3 font-semibold text-ink">
                    {h && <GlossaryLabel label={h} />}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {picks.map((p) => (
                <tr key={p.slug} className="border-t border-line align-top">
                  <th className="px-4 py-3 font-display font-bold text-ink">
                    <Link href={`/relojes/${p.slug}`} className="hover:text-accent">
                      {p.watch.brand} {p.watch.name}
                    </Link>
                    <span className="mt-1 block font-body text-xs font-medium text-accent-dark">
                      {p.award}
                    </span>
                  </th>
                  <td className="px-4 py-3 text-ink-500">{p.topoMap}</td>
                  <td className="px-4 py-3 text-ink-500">{altimeterLabel(p.watch)}</td>
                  <td className="px-4 py-3 text-ink-500">{p.gps}</td>
                  <td className="px-4 py-3 text-ink-500"><NumText>{p.gpsHours}</NumText></td>
                  <td className="px-4 py-3 text-ink-500"><NumText>{p.toughness}</NumText></td>
                  <td className="px-4 py-3 text-ink-500"><NumText>{p.weight}</NumText></td>
                  <td className="px-4 py-3 text-ink-500">
                    <NumText>{formatWatchPrice(p.watch)}</NumText>
                    {pvprNote(p.watch) && (
                      <span className="block text-xs"><NumText>{pvprNote(p.watch)!}</NumText></span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <AffiliateButton watch={p.watch} variant="compact" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-500">
          Precios de referencia de cada ficha (tienda y fecha en la ficha);
          cambian con frecuencia, comprueba el precio actual en la tienda.
          MIL-STD-810 es un estándar militar de pruebas de robustez (golpes,
          temperatura y agua).
        </p>
      </Reveal>

      {/* Análisis individual */}
      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold">
          Análisis en ruta: cómo se comporta cada uno en la montaña
        </h2>
        <div className="mt-6 space-y-8">
          {picks.map((p) => (
            <Reveal
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-20 gap-6 glass-panel p-5 sm:p-6 md:grid-cols-[180px_1fr]"
            >
              <div className="relative mx-auto aspect-square w-40 md:w-full">
                {p.watch.coverImage ? (
                  <Image
                    src={p.watch.coverImage.src}
                    alt={p.watch.coverImage.alt}
                    fill
                    sizes="180px"
                    className="object-contain"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center font-display text-sm font-semibold text-ink-500">
                    {p.watch.brand}
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <Badge tone="glass">{p.award}</Badge>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">
                  {p.watch.brand} {p.watch.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-ink">
                  {formatWatchPrice(p.watch)}
                  {pvprNote(p.watch) && (
                    <span className="ml-2 text-xs font-normal text-ink-500">
                      {pvprNote(p.watch)}
                    </span>
                  )}
                </p>
                {p.sections.map((s) => (
                  <div key={s.title} className="mt-4">
                    <h4 className="text-sm font-semibold text-ink">{s.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{s.text}</p>
                  </div>
                ))}
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-ink">A favor</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-500 marker:text-accent">
                      {p.watch.pros.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">En contra</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-500">
                      {p.watch.cons.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">
                  <strong className="text-ink">¿Para quién?</strong> {p.forWho}
                </p>
                {p.duels.length > 0 && (
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    <strong className="text-ink">Cara a cara:</strong>{" "}
                    {p.duels.map((c, i) => (
                      <span key={c.slug}>
                        {i > 0 && " · "}
                        <Link
                          href={`/comparativas/${c.slug}`}
                          className="font-semibold text-accent hover:underline"
                        >
                          {c.title}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <AffiliateButton watch={p.watch} />
                  <Link
                    href={`/relojes/${p.slug}`}
                    className="text-sm font-semibold text-accent hover:underline"
                  >
                    Ficha completa
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Guía de compra */}
      <Reveal className="article-content mt-14 max-w-prose">
        <h2>Claves para elegir tu reloj de montaña</h2>
        <p>
          Cuatro decisiones separan a estos relojes en el monte: cómo navegan,
          cómo miden la altitud, cuánto aguantan y de qué están hechos.
          Ninguna es mejor en abstracto; depende de por dónde y cuánto tiempo
          salgas.
        </p>

        <h3>Mapas topográficos vs navegación por migas de pan</h3>
        <p>
          Con <strong>migas de pan</strong> cargas un track GPX y el reloj lo
          dibuja como una línea sobre fondo vacío, con tu posición encima y un
          aviso si te sales. Es lo que hacen el Instinct 2 y el PACE 3, y basta
          para carreras balizadas, rutas conocidas y senderos evidentes. Con{" "}
          <strong>mapas topográficos</strong> ves además senderos, pistas,
          curvas de nivel y ríos alrededor: entiendes el terreno, no solo la
          línea. Es lo que cambia todo con niebla, en un cruce sin balizar o
          cuando toca improvisar una variante. Los traen el Race S (offline y
          gratis) y el Forerunner 965, que además es <strong>ruteable</strong>:
          el propio reloj calcula el camino sobre el mapa. Si dudas, lee{" "}
          <Link href="/guias/necesitas-mapas-en-tu-reloj">
            ¿necesitas mapas en tu reloj?
          </Link>
          .
        </p>

        <h3>Altímetro barométrico vs altitud por GPS</h3>
        <p>
          La altitud calculada solo con GPS es la parte menos precisa de su
          señal: puede variar decenas de metros y sumar desnivel fantasma en
          tramos llanos. El <strong>altímetro barométrico</strong> mide la
          presión del aire y registra cambios de altura mucho más finos, así
          que el desnivel acumulado y el perfil de la subida que tienes delante
          son fiables. Como el barómetro también reacciona a los cambios de
          tiempo, los relojes lo recalibran con el GPS o con altitudes
          conocidas. Los cuatro de esta guía lo llevan; para montaña, no
          compres un reloj sin él.
        </p>

        <h3>Batería: cuenta las horas con GPS, no los días</h3>
        <p>
          Compara la autonomía <strong>en el modo que vas a usar</strong>. El
          multibanda gasta más (el PACE 3 pasa de 38 h a 15 h), y los modos de
          ahorro alargan la batería a cambio de precisión. Para un maratón de
          montaña casi cualquier reloj llega; para un ultra de 15-20 horas, la
          autonomía con GPS debe superar con margen tu tiempo previsto. Si
          entrenas bajo bosque o en canales, mira también{" "}
          <Link href="/guias/que-precision-gps-necesitas-realmente">
            qué precisión GPS necesitas realmente
          </Link>
          .
        </p>

        <h3>Cristal de zafiro, titanio y robustez</h3>
        <p>
          El <strong>cristal de zafiro</strong> resiste los arañazos mucho
          mejor que el cristal reforzado: útil si trepas, haces trastadas entre
          rocas o llevas el reloj a diario en el monte. Suele reservarse a
          ediciones específicas con sobreprecio, así que si es un requisito,
          comprueba la versión concreta antes de comprar. El{" "}
          <strong>titanio</strong> aligera y endurece el bisel: en esta
          selección lo lleva el Forerunner 965, mientras que el Race S apuesta
          por el acero inoxidable. El Instinct 2 va por otro camino: una caja
          de polímero reforzado probada bajo el estándar militar MIL-STD-810 y
          10 ATM de resistencia al agua. Ojo con las cifras: ATM es una presión
          de prueba, no una profundidad, y ninguno de estos relojes sirve para
          bucear.
        </p>

        <h3>Perfiles de altitud y ayudas en las subidas</h3>
        <p>
          Con una ruta cargada, los relojes de montaña dividen el recorrido en
          subidas y te muestran cuánto desnivel y distancia te quedan en cada
          una, para que no te vacíes en la primera rampa. En el Forerunner 965
          se llama <strong>ClimbPro</strong> y, gracias a los mapas, funciona
          incluso sin ruta cargada; en el Race S, <strong>Climb Guidance</strong>.
          Con el Instinct 2 y el PACE 3 tienes el desnivel acumulado y la
          altitud en tiempo real gracias al barómetro, pero el perfil completo
          de la ruta lo preparas mejor en la app antes de salir.
        </p>

        <h3>Atajo: qué reloj elegir según tu salida</h3>
        <ul>
          {USE_SHORTCUTS.map((s) => (
            <li key={s.use}>
              <strong>{s.use}:</strong>{" "}
              {s.slugs.map((slug, i) => (
                <span key={slug}>
                  {i > 0 && " o "}
                  <a href={`#${slug}`}>{watchName(slug)}</a>
                </span>
              ))}
            </li>
          ))}
        </ul>
        <p>
          ¿Buscas el mejor reloj de cada gama sin pensar solo en montaña? Lo
          tienes en los{" "}
          <Link href="/guias/mejores-relojes-gps-calidad-precio">
            mejores relojes GPS calidad-precio de 2026
          </Link>
          .
        </p>
      </Reveal>

      {/* FAQ */}
      <Reveal className="mt-14 max-w-prose">
        <h2 className="font-display text-2xl font-bold">Preguntas frecuentes</h2>
        <div className="mt-5 divide-y divide-line rounded-card border border-line">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold text-ink marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  {f.q}
                  <span className="font-mono text-accent transition-transform group-open:rotate-45">
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
