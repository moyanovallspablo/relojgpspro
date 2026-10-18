import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getWatchBySlug } from "@/lib/data/watches";
import { getGuideBySlug } from "@/lib/data/guides";
import { VALUE_GUIDE_AWARDS, VALUE_GUIDE_SLUG } from "@/lib/data/valueGuide";
import { getComparisonBySlug } from "@/lib/data/comparisons";
import { GUIDE_CATEGORY_LABELS } from "@/lib/types/guide";
import type { Watch } from "@/lib/types/watch";
import Container from "@/components/layout/Container";
import ReadingProgress from "@/components/layout/ReadingProgress";
import Badge from "@/components/ui/Badge";
import { GlossaryLabel } from "@/components/ui/Tooltip";
import Reveal from "@/components/motion/Reveal";
import AffiliateButton from "@/components/watches/AffiliateButton";
import GuideCard from "@/components/guides/GuideCard";
import NumText from "@/components/ui/NumText";
import { formatApproxEuros, formatEuros } from "@/lib/format";
import { DEFAULT_OG_IMAGE, DEFAULT_OPEN_GRAPH, SITE_NAME, SITE_URL } from "@/lib/site";

// Guía pilar con página propia (ver hasCustomPage en lib/data/guides.ts).
// Precios, pesos, pros y contras salen de lib/data/watches.ts y la
// categoría de cada reloj de VALUE_GUIDE_AWARDS; aquí solo vive la parte
// editorial.

const SLUG = VALUE_GUIDE_SLUG;
const URL_PATH = `/guias/${SLUG}`;
const PUBLISHED_AT = "2026-10-13";

const SEO_TITLE = "Los Mejores Relojes GPS en Calidad-Precio de 2026: Guía Definitiva";
const H1 = "Los mejores relojes GPS calidad-precio de 2026";
const DESCRIPTION =
  "¿Máximo rendimiento sin pagar de más? Elegimos el mejor reloj GPS calidad-precio de cada categoría: entrada, AMOLED, MIP, mapas y outdoor. Compara y acierta.";

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
  // Matiz dentro de la categoría (la gama de entrada tiene dos ganadores).
  angle: string;
  verdict: string;
  screen: string;
  gps: string;
  gpsHours: string;
  weight: string;
  mapsLabel: string;
  paragraphs: string[];
  forWho: string;
  duelSlugs: string[];
}

const PICKS: WatchPick[] = [
  {
    slug: "polar-pacer",
    angle: "Más análisis por euro",
    verdict: "El que más análisis de carga y recuperación ofrece por menos dinero.",
    screen: "MIP, colores básicos",
    gps: "Simple",
    gpsHours: "Hasta 35 h",
    weight: "40 g",
    mapsLabel: "No",
    paragraphs: [
      "El Polar Pacer es el reloj GPS con mejor relación calidad-precio para quien empieza y quiere entrenar con cabeza. Por menos de 150 € (su PVPR de lanzamiento era de 199,90 €) ofrece herramientas que otras marcas reservan a gamas superiores: Training Load Pro para medir la carga de cada sesión y la acumulada, Nightly Recharge para saber si te has recuperado durante la noche, Sleep Plus Stages para analizar el sueño por fases y un test de forma física que te da una referencia periódica de tu estado.",
      "En lo básico también cumple: GPS compatible con GLONASS, Galileo y QZSS, pulsómetro óptico Precision Prime, hasta 35 horas de entrenamiento con GPS y frecuencia cardíaca y unos 7 días en modo reloj. Pesa 40 g y su pantalla MIP está siempre encendida, así que se lee sin problema a pleno sol en mitad de una serie.",
      "¿Por qué gana en su categoría? Porque es el que más información útil da por euro invertido. A este precio, saber si estás asimilando el entrenamiento o acumulando fatiga vale más que una pantalla vistosa o un mapa que no vas a usar en tu circuito de siempre. FitSpark te propone entrenamientos diarios y Running Index estima tu rendimiento sin necesidad de hacer un test máximo.",
      "Sus límites están claros: no tiene altímetro (el barómetro está reservado al Pacer Pro), ni mapas, ni navegación por ruta, y el GPS no es multibanda. La pantalla tiene colores básicos y el ecosistema de Polar es más reducido que el de Garmin. Si corres en llano y por rutas conocidas, nada de eso te frenará.",
    ],
    forWho:
      "Para quien empieza a entrenar con estructura, quiere evitar el sobreentrenamiento y busca el máximo análisis de carga y recuperación gastando lo mínimo.",
    duelSlugs: ["garmin-forerunner-55-vs-polar-pacer", "coros-pace-3-vs-polar-pacer"],
  },
  {
    slug: "garmin-forerunner-55",
    angle: "El más sencillo",
    verdict: "El más ligero y fácil de usar, con entrenamientos diarios sugeridos.",
    screen: "MIP, colores básicos",
    gps: "Simple",
    gpsHours: "Hasta 20 h",
    weight: "37 g",
    mapsLabel: "No",
    paragraphs: [
      "El Garmin Forerunner 55 es la otra cara de la gama de entrada: menos análisis que el Polar Pacer, pero más sencillez y la app Garmin Connect, una de las más completas del mercado. Ronda los 185 € en tienda (Garmin no muestra un PVPR directo para este modelo en su web española) y es el reloj más fácil de recomendar a quien nunca ha tenido uno.",
      "Todo se maneja con cinco botones físicos, sin pantalla táctil que falle con sudor o lluvia. La pantalla MIP siempre encendida se lee perfecta al sol, pesa solo 37 g —el más ligero de esta guía— y la autonomía llega a unas 2 semanas en modo reloj inteligente y hasta 20 horas con GPS: suficiente para entrenar a diario sin pensar en el cargador y para terminar un maratón con margen.",
      "Su gran baza son los entrenamientos diarios sugeridos: cada día te propone una sesión adaptada a tu forma física y a tu recuperación, lo que convierte un reloj sencillo en una especie de entrenador de bolsillo. Mide la frecuencia cardíaca en la muñeca, es compatible con banda de pecho y resiste el agua hasta 5 ATM.",
      "A cambio, renuncia a casi todo lo que no es correr: no tiene mapas ni navegación, el GPS (GPS, GLONASS y Galileo) no es multibanda, el altímetro barométrico no figura en su manual oficial y no hay Garmin Pay ni música. Frente al Pacer, ganas ecosistema y sencillez; pierdes métricas de carga y autonomía con GPS (20 h frente a 35 h).",
    ],
    forWho:
      "Para quien empieza a correr o prepara una prueba concreta y quiere un reloj fiable que le diga qué entrenar cada día, sin complicaciones ni funciones que no va a usar.",
    duelSlugs: [
      "garmin-forerunner-55-vs-polar-pacer",
      "garmin-forerunner-165-vs-garmin-forerunner-55",
    ],
  },
  {
    slug: "coros-pace-3",
    angle: "Ligero y multibanda",
    verdict: "GPS multibanda, hasta 38 h con GPS y 30-39 g de peso.",
    screen: "MIP, siempre encendida",
    gps: "Multibanda",
    gpsHours: "Hasta 38 h (15 h multibanda)",
    weight: "39 g (30 g con nylon)",
    mapsLabel: "No (migas de pan)",
    paragraphs: [
      "El COROS PACE 3 es probablemente el reloj con más prestaciones por euro de todo el catálogo. Por 249 € (PVPR de referencia en España) reúne lo que normalmente se encuentra en relojes bastante más caros: GPS multibanda real de doble frecuencia, altímetro barométrico, música offline integrada y una autonomía de hasta 38 horas con GPS estándar, o 15 horas en doble frecuencia.",
      "Su peso es otro argumento: 39 g con correa de silicona y solo 30 g con la de nylon, hasta el punto de que se olvida en la muñeca durante una tirada larga o mientras duermes. La pantalla es MIP siempre encendida: menos vistosa que una AMOLED, pero perfectamente legible al sol y clave para que la batería dure hasta 15 días de uso diario.",
      "¿Por qué gana en la gama media MIP? Porque el GPS multibanda marca diferencias justo donde los relojes de entrada fallan: entre edificios altos, en bosque cerrado o en montaña. Si entrenas en ciudad, haces trail o te importa clavar el ritmo en cada kilómetro, la precisión del PACE 3 se nota en los datos. Además, COROS incluye planes de entrenamiento y métricas específicas de trail.",
      "Sus contras son razonables para el precio: no hay mapas completos (solo navegación por ruta o migas de pan), no tiene pagos sin contacto y su ecosistema de aplicaciones es más limitado que el de Garmin. Los materiales son más sencillos que los de los COROS de gama alta y, con la llegada del PACE 4, su disponibilidad en la web oficial oscila, aunque sigue en distribuidores como Decathlon o Amazon.",
    ],
    forWho:
      "Para quien quiere el GPS más preciso y la mayor autonomía sin pasar de los 250 €, entrena en ciudad, trail o montaña y no echa de menos una pantalla a color.",
    duelSlugs: ["garmin-forerunner-165-vs-coros-pace-3", "coros-pace-3-vs-suunto-race-s"],
  },
  {
    slug: "garmin-forerunner-165",
    angle: "Pantalla a color",
    verdict: "La AMOLED más asequible de Garmin, con altímetro y Garmin Pay.",
    screen: "AMOLED a color",
    gps: "Simple",
    gpsHours: "Hasta 19 h (17 h todos los GNSS)",
    weight: "39 g",
    mapsLabel: "No (migas de pan)",
    paragraphs: [
      "El Garmin Forerunner 165 es la forma más barata de tener una pantalla AMOLED en un reloj Garmin de running. En oferta se ha visto en torno a los 195 € (Garmin no publica un PVPR directo en su web española), y por ese dinero no solo ganas una pantalla nítida y a color: también subes de nivel en sensores y funciones respecto al Forerunner 55.",
      "Añade altímetro barométrico para medir el desnivel con fiabilidad, navegación por migas de pan para seguir una ruta cargada, Garmin Pay para pagar sin contacto y métricas como el VO2 máx. estimado, la potencia de carrera en la muñeca, el tiempo de recuperación o Body Battery. Pesa 39 g y su autonomía —hasta 11 días en modo reloj inteligente y unas 19 horas en modo solo GPS— es buena para una pantalla AMOLED.",
      "¿Por qué gana en la gama media AMOLED? Porque es el reloj que mejor equilibra entrenamiento y uso diario. Si vas a llevarlo puesto todo el día, también en la oficina o el fin de semana, la AMOLED cambia por completo la experiencia: notificaciones legibles, esferas a color y aspecto de smartwatch moderno, sin renunciar al ecosistema Garmin Connect.",
      "Lo que no tiene: GPS multibanda, mapas completos, Training Readiness ni compatibilidad con medidores de potencia de ciclismo; y la música offline exige la versión Music, que cuesta más. Frente al COROS PACE 3, pagas algo menos y ganas pantalla y pagos, pero pierdes precisión GPS y autonomía.",
    ],
    forWho:
      "Para quien quiere un único reloj para entrenar y para el día a día, valora la pantalla a color y Garmin Pay y corre sobre todo en ciudad o terreno abierto.",
    duelSlugs: [
      "garmin-forerunner-165-vs-coros-pace-3",
      "garmin-forerunner-165-vs-garmin-forerunner-55",
    ],
  },
  {
    slug: "suunto-race-s",
    angle: "Mapas sin precio premium",
    verdict: "Mapas topográficos gratis, multibanda y acero inoxidable por 349 €.",
    screen: "AMOLED 1,32\" (2000 nits)",
    gps: "Multibanda",
    gpsHours: "Hasta 30 h (40 h Endurance)",
    weight: "60 g",
    mapsLabel: "Sí, topográficos offline gratis",
    paragraphs: [
      "El Suunto Race S es el reloj con mapas más asequible del catálogo, y eso lo convierte en una rareza: por 349 € (PVPR oficial en Suunto España, un precio muy estable) incluye mapas topográficos offline gratuitos, algo que en otras marcas obliga a subir mucho de gama. Para hacerse una idea, el Garmin Forerunner 965, el modelo con mapas de Garmin en nuestro catálogo, tiene un PVPR de 649,99 €.",
      "Y no es solo mapas. Tiene GPS multibanda real con cinco sistemas de satélites, altímetro barométrico, pantalla AMOLED de 1,32\" con 2000 nits de brillo —muy legible a pleno sol— y guía de ascensos (Climb Guidance) para dosificar las subidas. Su versión de acero inoxidable le da una presencia más premium que la de cualquier otro reloj de esta guía. La autonomía llega a 30 horas en el modo de mejor precisión, a 40 horas en modo Endurance y a unos 9 días de uso diario.",
      "¿Por qué gana en su categoría? Porque es la única manera de tener navegación de verdad —ver caminos y relieve alrededor, no solo una línea— sin pagar precio premium. Si haces trail, rutas de montaña o sales a correr por sitios que no conoces, esa diferencia pesa más que cualquier métrica.",
      "Tiene peros: con 60 g es el más pesado de esta guía (aunque compacto para un reloj con mapas), su ecosistema de aplicaciones de terceros es más limitado que el de Garmin, no almacena música y algunas pruebas independientes han cuestionado la fiabilidad de su pulsómetro de muñeca, así que para series intensas conviene una banda de pecho.",
    ],
    forWho:
      "Para quien hace trail o montaña, necesita mapas de verdad y quiere un reloj de acabado premium sin pasar de los 350 €.",
    duelSlugs: ["coros-pace-3-vs-suunto-race-s", "garmin-instinct-2-vs-suunto-race-s"],
  },
  {
    slug: "garmin-instinct-2",
    angle: "A prueba de todo",
    verdict: "Estándar MIL-STD-810, 10 ATM y hasta 28 días de batería.",
    screen: "MIP monocroma 0,9\"",
    gps: "Simple",
    gpsHours: "Hasta 30 h (70 h ahorro máx.)",
    weight: "52 g",
    mapsLabel: "No (TracBack)",
    paragraphs: [
      "El Garmin Instinct 2 juega en otra liga: no compite por pantalla ni por precisión GPS, sino por aguantar. Su construcción está probada bajo el estándar militar MIL-STD-810, resiste el agua hasta 10 ATM —la mejor cifra de esta guía— y su autonomía es enorme: hasta 28 días en modo reloj inteligente, 30 horas con GPS activo y hasta 70 horas en el modo de máxima duración de batería.",
      "Lo mejor es su precio real. Aunque su PVPR es de 299,99 €, se encuentra a menudo en distribuidores autorizados en torno a 179-189 €, al nivel de un reloj de entrada pero con un equipamiento claramente superior: altímetro barométrico, brújula de 3 ejes, navegación básica con TracBack para volver por donde has venido, pulsioximetría, estado de la variabilidad de la frecuencia cardíaca (HRV Status), Body Battery, carga y tiempo de recuperación y perfiles multideporte.",
      "¿Por qué gana en la categoría outdoor? Porque es el reloj que puedes llevar a una travesía de varios días o a trabajar al aire libre sin preocuparte por golpes, agua ni cargador. Para senderistas, opositores o quien quiere un único reloj todoterreno, su combinación de robustez y precio es difícil de igualar.",
      "El precio de esa robustez es la pantalla: monocroma y pequeña (0,9\"), sin color, mucho menos agradable para leer notificaciones o consultar datos con detalle. Además, el GPS no es multibanda, no tiene mapas completos y con 52 g pesa más que los relojes de running de esta lista.",
    ],
    forWho:
      "Para quien prioriza resistencia y autonomía por encima de la pantalla: senderismo, trail de larga distancia, actividades exigentes al aire libre o, simplemente, un reloj que no se rompa.",
    duelSlugs: ["garmin-instinct-2-vs-coros-pace-3", "garmin-instinct-2-vs-suunto-race-s"],
  },
];

const USE_SHORTCUTS = [
  {
    use: "Empiezas a correr con presupuesto ajustado",
    slugs: ["polar-pacer", "garmin-forerunner-55"],
  },
  {
    use: "Entrenas en ciudad o trail y quieres precisión y autonomía",
    slugs: ["coros-pace-3"],
  },
  { use: "Quieres un solo reloj para entrenar y para el día a día", slugs: ["garmin-forerunner-165"] },
  { use: "Montaña y rutas que no conoces", slugs: ["suunto-race-s"] },
  { use: "Condiciones duras y muchos días sin cargar", slugs: ["garmin-instinct-2"] },
];

const FAQS = [
  {
    q: "¿Cuál es el reloj GPS con mejor relación calidad-precio en 2026?",
    a: "Depende de lo que necesites, por eso elegimos un ganador por categoría. Si buscas el máximo de prestaciones por euro y no te importa la pantalla MIP, el COROS PACE 3 (GPS multibanda, altímetro barométrico, música y hasta 38 h de GPS por 249 €) es el más completo. Por debajo de 200 €, el Polar Pacer y el Garmin Forerunner 55; con pantalla AMOLED, el Forerunner 165; con mapas, el Suunto Race S; y para condiciones duras, el Garmin Instinct 2.",
  },
  {
    q: "¿Merece la pena pagar más por GPS multibanda?",
    a: "Solo si entrenas donde el GPS simple falla: entre edificios altos, en bosque cerrado o en montaña. En parques, carreteras y pista, un GPS simple es suficiente. De esta guía, tienen multibanda el COROS PACE 3 y el Suunto Race S.",
  },
  {
    q: "¿Qué reloj calidad-precio tiene mapas?",
    a: "De los relojes de esta guía, solo el Suunto Race S, que incluye mapas topográficos offline gratuitos por 349 €. El resto ofrece, como mucho, navegación por migas de pan (seguir la línea de una ruta cargada) o TracBack para volver por el mismo camino.",
  },
  {
    q: "¿Por qué no aparecen el Garmin Forerunner 265 o el 965?",
    a: "Son muy buenos relojes, pero no son los de mejor relación calidad-precio. El Forerunner 265 (unos 429 € en tienda) añade GPS multibanda, Training Readiness y HRV sobre una pantalla AMOLED táctil; el 965 (unos 599 €) suma mapas topográficos y bisel de titanio. Si tu presupuesto llega, encajan en un entrenamiento serio; si no, los relojes de esta guía cubren casi todo por bastante menos.",
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

// --- Página -------------------------------------------------------------

export default function CalidadPrecioGuidePage() {
  const guide = getGuideBySlug(SLUG);
  const picks = PICKS.map((p) => ({
    ...p,
    watch: getWatchBySlug(p.slug),
    award: VALUE_GUIDE_AWARDS[p.slug],
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
      <Reveal className="mt-6 max-w-prose">
        <span className="tag w-fit">{GUIDE_CATEGORY_LABELS.compra}</span>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{H1}</h1>
        <p className="mt-4 text-base leading-relaxed text-ink-500">
          El mejor reloj no es el más caro, sino el que te da lo que necesitas
          sin cobrarte lo que no vas a usar. Hemos elegido un ganador por
          categoría —gama de entrada, gama media con pantalla MIP o AMOLED,
          mapas y outdoor— a partir de las especificaciones y los precios
          verificados de nuestras fichas.
        </p>
      </Reveal>

      {/* Podio */}
      <section className="mt-12">
        <Reveal>
          <h2 className="font-display text-2xl font-bold">Los ganadores de cada categoría</h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((p) => (
            <article
              key={p.slug}
              className="card flex min-w-0 flex-col p-5 sm:p-6"
            >
              <Badge tone="glass">{p.award}</Badge>
              {/* isolate: el halo queda detrás del reloj (z-10) y
                  mix-blend-multiply funde el fondo blanco de la foto. */}
              <div className="relative isolate mx-auto mt-4 aspect-square w-36">
                <div aria-hidden="true" className="product-halo" />
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
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{p.verdict}</p>
              <div className="mt-5 flex flex-col gap-3">
                <AffiliateButton watch={p.watch} className="w-full" />
                <a
                  href={`#${p.slug}`}
                  className="text-center text-sm font-semibold text-accent hover:underline"
                >
                  Por qué lo elegimos ↓
                </a>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      {/* Tabla comparativa */}
      <Reveal className="mt-14">
        <h2 className="font-display text-2xl font-bold">
          Comparativa global: los 6 ganadores de un vistazo
        </h2>
        {/* relative: el texto sr-only de los botones (absolute) queda
            recortado por el scroll de la tabla y no ensancha la página. */}
        <div className="relative mt-5 overflow-x-auto rounded-card border border-line">
          <table className="spec-table w-full min-w-[60rem] text-left text-sm">
            <thead className="bg-surface">
              <tr>
                {["Reloj", "Pantalla", "GPS", "Batería con GPS", "Peso", "Mapas", "Precio", ""].map(
                  (h, i) => (
                    <th key={i} className="px-4 py-3 font-semibold text-ink">
                      {h && <GlossaryLabel label={h} />}
                    </th>
                  ),
                )}
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
                  <td className="px-4 py-3 text-ink-500"><NumText>{p.screen}</NumText></td>
                  <td className="px-4 py-3 text-ink-500">{p.gps}</td>
                  <td className="px-4 py-3 text-ink-500"><NumText>{p.gpsHours}</NumText></td>
                  <td className="px-4 py-3 text-ink-500"><NumText>{p.weight}</NumText></td>
                  <td className="px-4 py-3 text-ink-500">{p.mapsLabel}</td>
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
        </p>
      </Reveal>

      {/* Análisis individual */}
      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold">
          Análisis: por qué es el mejor de su categoría
        </h2>
        <div className="mt-6 space-y-8">
          {picks.map((p) => (
            <Reveal
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-20 gap-6 glass-panel p-5 sm:p-6 md:grid-cols-[180px_1fr]"
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
                {p.paragraphs.map((t) => (
                  <p key={t} className="mt-3 text-sm leading-relaxed text-ink-500">
                    {t}
                  </p>
                ))}
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
        <h2>Cómo elegir según tu uso</h2>
        <p>
          Las cuatro decisiones que más separan a estos relojes son la
          pantalla, el tipo de GPS, el altímetro y los mapas. Ninguna es
          mejor en abstracto: depende de dónde y cómo entrenes.
        </p>

        <h3>Pantalla AMOLED o MIP</h3>
        <p>
          La <strong>AMOLED</strong> (Forerunner 165, Race S) se ve a color y
          con mucho contraste: luce más en interior y como reloj del día a
          día, pero gasta más batería si la dejas siempre encendida. La{" "}
          <strong>MIP</strong> (Pacer, Forerunner 55, PACE 3, Instinct 2) es
          menos vistosa, se lee mejor cuanto más sol le da y apenas consume:
          por eso los relojes MIP de esta guía duran más días. Si lo vas a
          llevar a todas horas y miras notificaciones, AMOLED; si priorizas
          autonomía y salidas largas, MIP. Lo explicamos a fondo en{" "}
          <Link href="/guias/amoled-vs-mip">AMOLED vs MIP</Link>.
        </p>

        <h3>La importancia del GPS multibanda</h3>
        <p>
          Un GPS <strong>multibanda</strong> (doble frecuencia) recibe dos
          señales de cada satélite y filtra mejor los rebotes. En parques,
          carreteras o pista, un GPS simple basta; entre edificios altos, en
          bosque cerrado o en montaña, el simple se desvía y el multibanda
          mantiene ritmo y distancia fiables. Aquí lo tienen el COROS PACE 3
          y el Suunto Race S. Ojo: activarlo reduce la autonomía (en el PACE
          3, de 38 h a 15 h). Más detalle en{" "}
          <Link href="/guias/que-precision-gps-necesitas-realmente">
            qué precisión GPS necesitas realmente
          </Link>
          .
        </p>

        <h3>Altímetro barométrico: imprescindible si hay desnivel</h3>
        <p>
          El <strong>altímetro barométrico</strong> calcula la altitud con la
          presión del aire y mide el desnivel acumulado con mucha más
          fiabilidad que la estimación por GPS. Para correr en llano no
          importa; para trail, montaña o ciclismo con puertos, sí. Lo
          incluyen el PACE 3, el Forerunner 165, el Race S y el Instinct 2;
          el Polar Pacer no lo tiene y en el Forerunner 55 no figura en el
          manual oficial.
        </p>

        <h3>Mapas: cuándo merecen la pena</h3>
        <p>
          Con <strong>migas de pan</strong> el reloj muestra la línea de una
          ruta cargada, sin nada alrededor: suficiente para seguir un
          recorrido marcado. Con <strong>mapas</strong> ves además caminos,
          calles y relieve, lo que cambia todo cuando te desvías o exploras
          rutas nuevas. De esta guía solo los trae el Suunto Race S. Si
          corres siempre por los mismos sitios, no los necesitas; si haces
          montaña, lee{" "}
          <Link href="/guias/necesitas-mapas-en-tu-reloj">
            ¿necesitas mapas en tu reloj?
          </Link>{" "}
          y nuestra guía de{" "}
          <Link href="/guias/mejores-relojes-gps-trail-montana">
            relojes para trail y montaña con mapas
          </Link>
          .
        </p>

        <h3>Atajo: qué reloj elegir según tu uso</h3>
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
          ¿Tu presupuesto no pasa de 200 €? Tienes una selección más
          detallada en los{" "}
          <Link href="/guias/mejores-relojes-gps-menos-200-euros">
            mejores relojes GPS por menos de 200 €
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
