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
import NumText from "@/components/ui/NumText";
import { DEFAULT_OG_IMAGE, DEFAULT_OPEN_GRAPH, SITE_NAME, SITE_URL } from "@/lib/site";

// Guía con página propia (ver hasCustomPage en lib/data/guides.ts).
// Precios, pesos, pros y contras salen de lib/data/watches.ts; aquí
// solo vive la parte editorial.

const SLUG = "mejores-relojes-gps-menos-200-euros";
const URL_PATH = `/guias/${SLUG}`;
const PUBLISHED_AT = "2026-10-01";

const SEO_TITLE = "Mejores Relojes GPS por Menos de 200€ (2026): Comparativa Real";
const H1 = "Mejores relojes GPS por menos de 200€ en 2026";
const DESCRIPTION =
  "¿Buscas un reloj GPS bueno y barato? Comparamos Garmin Forerunner 55, COROS PACE 3 y Polar Pacer: precisión GPS, batería y funciones reales por menos de 200 €. Elige sin gastar de más.";

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
  tagline: string;
  gpsLabel: string;
  gpsHours: string;
  weight: string;
  altimeter: string;
  paragraphs: string[];
  forWho: string;
  priceNote?: string;
}

const PICKS: WatchPick[] = [
  {
    slug: "garmin-forerunner-55",
    tagline: "El rey del entrenamiento sencillo",
    gpsLabel: "Simple (GPS, GLONASS, Galileo)",
    gpsHours: "Hasta 20 h",
    weight: "37 g",
    altimeter: "No figura en el manual oficial",
    paragraphs: [
      "El Forerunner 55 es la puerta de entrada al ecosistema Garmin y probablemente el reloj más fácil de recomendar a quien empieza: cinco botones físicos, pantalla MIP siempre encendida que se lee perfecta al sol y entrenamientos diarios sugeridos que te dicen qué hacer cada día según tu forma y tu recuperación.",
      "No tiene mapas, navegación, pagos ni música, y su GPS no es multibanda. Pero en lo que importa para correr — ritmo, distancia, frecuencia cardíaca y autonomía de hasta 2 semanas — cumple de sobra, con la app Garmin Connect, que es de las más completas del mercado.",
    ],
    forWho:
      "Para quien empieza a correr o prepara una prueba concreta (una carrera popular, unas oposiciones) y quiere un reloj fiable y sencillo, sin pagar por funciones que no va a usar.",
  },
  {
    slug: "coros-pace-3",
    tagline: "El más completo en batería y GPS multibanda",
    gpsLabel: "Multibanda (doble frecuencia)",
    gpsHours: "Hasta 38 h (15 h multibanda)",
    weight: "39 g (30 g con nylon)",
    altimeter: "Barométrico",
    paragraphs: [
      "El PACE 3 ofrece, sobre el papel, lo que normalmente cuesta bastante más: GPS multibanda de doble frecuencia, altímetro barométrico, música offline de serie y una autonomía de hasta 38 h con GPS. Es el único de los tres que mide con precisión en ciudad con edificios altos o en bosque cerrado.",
      "La pega es el precio: su PVPR de 249 € lo deja por encima del presupuesto, así que solo entra en esta lista cuando lo encuentras en oferta. Si lo ves por debajo de 200 €, es la compra con más valor por euro de esta guía.",
    ],
    forWho:
      "Para quien entrena en ciudad, montaña o trail y quiere el GPS más preciso y la mayor autonomía, y está dispuesto a esperar una oferta (o estirar un poco el presupuesto).",
    priceNote: "Por encima de 200 € a PVPR: busca oferta.",
  },
  {
    slug: "polar-pacer",
    tagline: "El enfocado en métricas de descanso y carga",
    gpsLabel: "Simple (GPS, GLONASS, Galileo, QZSS)",
    gpsHours: "Hasta 35 h (con GPS y FC)",
    weight: "40 g",
    altimeter: "No",
    paragraphs: [
      "El Polar Pacer es el más barato de los tres y el que más se centra en entender cómo te afecta el entrenamiento. Training Load Pro mide la carga y la recuperación, Sleep Plus Stages analiza el sueño y el test de forma física te da una referencia periódica de tu estado — herramientas poco habituales a este precio.",
      "A cambio, no tiene altímetro, mapas ni navegación, la pantalla es MIP con colores básicos y su ecosistema es más reducido que el de Garmin. Como reloj para correr y controlar la carga en terreno conocido, es difícil pedirle más por lo que cuesta.",
    ],
    forWho:
      "Para quien entrena con estructura, quiere evitar el sobreentrenamiento y valora el análisis de carga, descanso y sueño por encima de la navegación o el ecosistema.",
  },
];

const BUYING_CRITERIA = [
  {
    title: "Pantalla: MIP o AMOLED de entrada",
    text: "La MIP (Forerunner 55, PACE 3, Pacer) está siempre encendida, se lee mejor cuanto más sol le da y apenas gasta batería. La AMOLED se ve mucho mejor en interior y luce más como reloj del día a día, pero penaliza la autonomía. Por menos de 200 € casi todo es MIP; la AMOLED más barata de Garmin, el Forerunner 165, roza ese límite solo en oferta.",
  },
  {
    title: "Precisión GPS",
    text: "En parques, carreteras y pista, un GPS simple es suficiente. El multibanda (doble frecuencia) solo marca diferencias en ciudad con edificios altos, bosque cerrado o montaña. En este rango, únicamente el PACE 3 lo tiene.",
  },
  {
    title: "Autonomía",
    text: "Los tres superan la semana de uso normal y las 20 h con GPS: de sobra para entrenar a diario e incluso para un maratón. Fíjate en la autonomía con GPS si haces salidas muy largas.",
  },
  {
    title: "Sin mapas completos",
    text: "Ningún reloj por debajo de 200 € trae mapas con calles y caminos. Como mucho, navegación por migas de pan (seguir el trazado de una ruta cargada). Si necesitas mapas de verdad, tendrás que subir de gama.",
  },
];

const FAQS = [
  {
    q: "¿Merece la pena comprar un modelo antiguo o reacondicionado?",
    a: "Puede merecer la pena si el ahorro es grande, pero con condiciones. Compra en una tienda que dé garantía (en España, un vendedor profesional debe ofrecer al menos un año en productos de segunda mano), revisa la política de devolución y ten en cuenta que la batería es lo primero que se degrada. Comprueba también que el modelo siga recibiendo actualizaciones: un reloj de hace varias generaciones puede quedarse sin nuevas funciones. Frente a un modelo antiguo de gama alta, un reloj actual de entrada como los de esta guía suele ser una apuesta más segura.",
  },
  {
    q: "¿Tienen altímetro barométrico los relojes de menos de 200 €?",
    a: "No todos. De los tres de esta guía, solo el COROS PACE 3 tiene altímetro barométrico. El Polar Pacer no lo tiene (está reservado al Pacer Pro), y en el Forerunner 55 no aparece entre los sensores del manual oficial. Sin barómetro, el reloj calcula la altitud con el GPS, que es menos preciso con el desnivel acumulado. Para correr en llano no importa; si haces trail o montaña, sí.",
  },
  {
    q: "¿Puedo tener pantalla AMOLED por menos de 200 €?",
    a: "Solo en oferta. El Garmin Forerunner 165, el AMOLED más asequible de Garmin, se ha visto por debajo de 200 € en algunas tiendas, pero su precio habitual suele estar por encima. Si te importa la pantalla a color, vigila sus ofertas.",
  },
  {
    q: "¿Cuál es el más preciso de los tres?",
    a: "El COROS PACE 3, por su GPS multibanda de doble frecuencia. En terreno abierto la diferencia con el Forerunner 55 y el Polar Pacer es pequeña; en ciudad o bosque se nota más.",
  },
];

// --- Utilidades ---------------------------------------------------------

function displayPrice(watch: Watch) {
  return watch.observedPrice ?? watch.officialPrice;
}

function formatEuros(watch: Watch) {
  return formatApproxEuros(displayPrice(watch));
}

// --- Página -------------------------------------------------------------

export default function MenosDe200GuidePage() {
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
          Por menos de 200 € ya se puede comprar un reloj GPS con el que
          entrenar en serio durante años. La clave es saber qué vas a
          tener, qué no y en qué merece la pena gastar.
        </p>
      </Reveal>

      <Reveal delay={0.05} className="article-content mt-8 max-w-prose">
        <h2>Qué esperar (y qué no) de un reloj GPS de menos de 200 €</h2>
        <p>
          <strong>Lo que sí tendrás:</strong> GPS fiable para medir ritmo y
          distancia, frecuencia cardíaca en la muñeca (y compatibilidad con
          banda de pecho), entrenamientos por intervalos, más de una semana
          de batería y una app con el historial de todos tus entrenamientos.
          Para correr, entrenar series o preparar un maratón, es todo lo
          necesario.
        </p>
        <p>
          <strong>Lo que normalmente no tendrás:</strong> mapas completos,
          pantalla AMOLED (salvo ofertas puntuales), pagos sin contacto,
          materiales premium ni, en la mayoría de modelos, GPS multibanda o
          altímetro barométrico. Son funciones útiles en montaña o como
          reloj inteligente, pero no te harán correr mejor.
        </p>
      </Reveal>

      {/* Qué buscar */}
      <Reveal className="mt-14">
        <h2 className="font-display text-2xl font-bold">
          Qué buscar en este rango de precio
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {BUYING_CRITERIA.map((c, i) => (
            <div key={c.title} className="glass-panel p-6">
              <p className="font-mono text-xs font-semibold text-accent">
                [{String(i + 1).padStart(2, "0")}]
              </p>
              <h3 className="mt-2 font-display text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Tabla comparativa */}
      <Reveal className="mt-14">
        <h2 className="font-display text-2xl font-bold">
          Comparativa rápida: los 3 mejores por menos de 200 €
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
              <Row label="Destaca por" values={picks.map((p) => p.tagline)} />
              <Row
                label="Precio aproximado"
                values={picks.map((p) =>
                  p.priceNote ? `${formatEuros(p.watch)} · ${p.priceNote}` : formatEuros(p.watch),
                )}
              />
              <Row
                label="Pantalla"
                values={picks.map((p) =>
                  p.watch.screen.type === "AMOLED" ? "AMOLED a color" : "MIP, siempre encendida",
                )}
              />
              <Row label="GPS" values={picks.map((p) => p.gpsLabel)} />
              <Row label="Autonomía con GPS" values={picks.map((p) => p.gpsHours)} />
              <Row label="Altímetro" values={picks.map((p) => p.altimeter)} />
              <Row
                label="Navegación"
                values={picks.map((p) => (p.watch.navigation ? "Migas de pan" : "No"))}
              />
              <Row label="Mapas" values={picks.map(() => "No")} />
              <Row label="Peso" values={picks.map((p) => p.weight)} />
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
          Precios de referencia de cada ficha (tienda y fecha en la ficha);
          cambian con frecuencia, comprueba el precio actual en la tienda.
        </p>
      </Reveal>

      {/* Análisis individual */}
      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold">Análisis de cada modelo</h2>
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
                  {p.tagline}
                </Badge>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">
                  {p.watch.brand} {p.watch.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-ink">{formatEuros(p.watch)}</p>
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
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <AffiliateButton watch={p.watch} />
                  <Link
                    href={`/relojes/${p.slug}`}
                    className="text-sm font-semibold text-accent hover:underline"
                  >
                    Análisis completo
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="article-content mt-14 max-w-prose">
        <p>
          ¿Dudas solo entre los dos más baratos de la lista? Los enfrentamos
          cara a cara en{" "}
          <a href="/comparativas/garmin-forerunner-55-vs-polar-pacer">
            Forerunner 55 vs Polar Pacer
          </a>
          .
        </p>
        <h2>¿Y si puedo estirar un poco el presupuesto?</h2>
        <p>
          El <a href="/relojes/garmin-forerunner-165">Garmin Forerunner 165</a>{" "}
          añade pantalla AMOLED, altímetro barométrico, navegación por migas de
          pan y Garmin Pay, y en oferta se ha visto rozando los 200 €. Lo
          comparamos frente a sus dos rivales directos en{" "}
          <a href="/comparativas/garmin-forerunner-165-vs-garmin-forerunner-55">
            Forerunner 165 vs Forerunner 55
          </a>{" "}
          y en{" "}
          <a href="/comparativas/garmin-forerunner-165-vs-coros-pace-3">
            Forerunner 165 vs COROS PACE 3
          </a>
          . Y si quieres ver también las opciones con mapas o ultrarresistentes,
          repasa los{" "}
          <a href="/guias/mejores-relojes-gps-calidad-precio">
            mejores relojes GPS calidad-precio de 2026
          </a>
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

function Row({ label, values }: { label: string; values: string[] }) {
  return (
    <tr className="border-t border-line">
      <th className="px-4 py-3 font-semibold text-ink">
        <GlossaryLabel label={label} />
      </th>
      {values.map((v, i) => (
        <td key={i} className="px-4 py-3 text-ink-500">
          <NumText>{v}</NumText>
        </td>
      ))}
    </tr>
  );
}
