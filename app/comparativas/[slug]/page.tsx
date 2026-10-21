import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  getComparisonBySlug,
  publishedComparisons,
} from "@/lib/data/comparisons";
import { getWatchesBySlugs } from "@/lib/data/watches";
import type { Watch } from "@/lib/types/watch";
import Container from "@/components/layout/Container";
import ReadingProgress from "@/components/layout/ReadingProgress";
import Reveal from "@/components/motion/Reveal";
import AffiliateButton from "@/components/watches/AffiliateButton";
import DuelBar from "@/components/watches/DuelBar";
import RadarChart, { type RadarSeries } from "@/components/watches/RadarChart";
import { getWatchScores } from "@/lib/data/scores";
import ArticleWithAd from "@/components/ads/ArticleWithAd";
import { getAffiliateUrl } from "@/lib/affiliates";
import Badge from "@/components/ui/Badge";
import { PILLAR_GUIDES } from "@/lib/data/valueGuide";
import { formatApproxEuros } from "@/lib/format";
import {
  canonicalDuelSlug,
  findPublishedDuel,
  getGeneratedDuelSlugs,
  parseDuelSlug,
} from "@/lib/data/duels";
import GeneratedComparison from "@/components/comparisons/GeneratedComparison";
import SpecTable from "@/components/comparisons/SpecTable";
import HighlightBadges from "@/components/comparisons/HighlightBadges";
import NumText from "@/components/ui/NumText";
import { duelHighlights, duelStats } from "@/lib/duelInsights";
import { DEFAULT_OPEN_GRAPH, SITE_NAME } from "@/lib/site";

// Comparativas redactadas (con contenido) y, para cualquier otro par de
// relojes del catálogo, la comparativa técnica generada a partir de las
// fichas (ver lib/data/duels.ts). Un par con comparativa redactada en el
// orden inverso redirige a ella; un slug que no es un par válido, al
// catálogo.
export function generateStaticParams() {
  return [
    ...publishedComparisons.map((c) => c.slug),
    ...getGeneratedDuelSlugs(),
  ].map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const comparison = getComparisonBySlug(params.slug);
  if (!comparison?.content) return generatedMetadata(params.slug);

  const title = comparison.seoTitle ?? comparison.title;
  const description = comparison.metaDescription ?? comparison.summary;
  const url = `/comparativas/${comparison.slug}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      ...DEFAULT_OPEN_GRAPH,
      type: "article",
      url,
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

// Comparativa generada: sin indexar (es solo la tabla de specs, sin
// análisis propio) y con canónica única para A-vs-B y B-vs-A.
function generatedMetadata(slug: string): Metadata {
  const pair = parseDuelSlug(slug);
  if (!pair || findPublishedDuel(pair[0].slug, pair[1].slug)) return {};
  const [a, b] = pair;
  const title = `${a.brand} ${a.name} vs ${b.brand} ${b.name}: comparativa técnica`;
  const description = `${a.brand} ${a.name} frente a ${b.brand} ${b.name}: precio, peso, autonomía, GPS, pantalla, mapas y sensores cara a cara, con datos verificados de cada ficha.`;
  const url = `/comparativas/${canonicalDuelSlug(a.slug, b.slug)}`;
  return {
    title: { absolute: `${title} | ${SITE_NAME}` },
    description,
    alternates: { canonical: url },
    robots: { index: false, follow: true },
    openGraph: {
      ...DEFAULT_OPEN_GRAPH,
      type: "article",
      url,
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

function formatPrice(watch: Watch) {
  return formatApproxEuros(watch.observedPrice ?? watch.officialPrice);
}

// Índice del reloj más barato (insignia "Mejor" de la fila de precio),
// o null si empatan a menos de 5 € o falta algún precio.
function cheapestIndex(watches: Watch[]): number | null {
  const prices = watches.map((w) => w.observedPrice ?? w.officialPrice);
  if (prices.length !== 2 || prices.some((p) => !p)) return null;
  const [a, b] = prices as number[];
  if (Math.abs(a - b) <= 5) return null;
  return a < b ? 0 : 1;
}

// Azul de acento del sitio y naranja, en el orden de watchSlugs.
const RADAR_COLORS = ["#0284C7", "#EA580C"];

// Series del gráfico de radar. Solo se dibuja si la comparativa es de
// dos relojes y los dos tienen puntuación en lib/data/scores.ts.
function getRadarSeries(watches: Watch[]): RadarSeries[] | null {
  if (watches.length !== 2) return null;
  const series = watches.map((watch, i) => {
    const scores = getWatchScores(watch.slug);
    return scores
      ? { name: `${watch.brand} ${watch.name}`, scores, color: RADAR_COLORS[i] }
      : null;
  });
  return series.every((s): s is RadarSeries => s !== null) ? series : null;
}

// Encabezado del veredicto con el nombre del reloj enlazado a Amazon
// ("Elige el COROS PACE 3 si…"). Si el nombre no aparece tal cual en el
// texto o no hay enlace de compra, el encabezado queda sin enlace.
function VerdictHeading({ heading, watch }: { heading: string; watch?: Watch }) {
  const href = watch ? getAffiliateUrl(watch) : null;
  const name = watch ? `${watch.brand} ${watch.name}` : "";
  const at = href ? heading.toLowerCase().indexOf(name.toLowerCase()) : -1;
  if (!href || at === -1) return <>{heading}</>;
  return (
    <>
      {heading.slice(0, at)}
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="text-accent-dark underline decoration-accent/40 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
      >
        {heading.slice(at, at + name.length)}
      </a>
      {heading.slice(at + name.length)}
    </>
  );
}

export default function ComparisonDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const comparison = getComparisonBySlug(params.slug);
  if (!comparison?.content) {
    const pair = parseDuelSlug(params.slug);
    if (!pair) redirect("/relojes");
    const published = findPublishedDuel(pair[0].slug, pair[1].slug);
    if (published) redirect(`/comparativas/${published.slug}`);
    return <GeneratedComparison pair={pair} />;
  }

  const watches = getWatchesBySlugs(comparison.watchSlugs);
  const specs = comparison.specs ?? [];
  const stats = watches.map(duelStats);
  const radarSeries = getRadarSeries(watches);

  return (
    <>
      <DuelBar watches={watches} targetId="veredicto" />
      <Container className="py-14 sm:py-16">
        <ReadingProgress />
        <nav className="text-sm text-ink-500">
          <Link href="/comparativas" className="hover:text-ink">Comparativas</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{comparison.title}</span>
        </nav>

        <Reveal className="mt-6 max-w-prose">
          <span className="tag w-fit">Comparativa</span>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            {comparison.seoTitle ?? comparison.title}
          </h1>
        </Reveal>

        <div
          className={`mt-6 grid gap-5 ${radarSeries ? "md:grid-cols-2" : "max-w-prose"}`}
        >
          <Reveal
            delay={0.05}
            className="glass-panel p-6"
          >
            <h2 className="font-display text-base font-bold text-ink">
              Resumen rápido
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-500">
              {comparison.summary}
            </p>
            {comparison.winnerNotes && (
              <p className="mt-3 text-base leading-relaxed text-ink-500">
                {comparison.winnerNotes}
              </p>
            )}
          </Reveal>
          {radarSeries && (
            // Reveal propio: en móvil el gráfico queda debajo del resumen y
            // su animación de entrada debe arrancar al aparecer en pantalla
            // (ver radarCss en RadarChart).
            <Reveal
              delay={0.1}
              className="flex min-w-0 flex-col glass-panel p-6"
            >
              <h2 className="font-display text-base font-bold text-ink">
                De un vistazo
              </h2>
              <div className="mt-4 flex flex-1 items-center justify-center">
                <RadarChart
                  series={radarSeries}
                  caption="Valoración orientativa de 1 a 10, basada en las especificaciones y el precio de nuestras fichas."
                />
              </div>
            </Reveal>
          )}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {watches.map((watch, i) => (
            <div
              key={watch.slug}
              className="glass-panel flex flex-col items-center gap-4 p-6 text-center"
            >
              <div className="relative flex aspect-square w-40 items-center justify-center">
                {watch.coverImage ? (
                  <Image
                    src={watch.coverImage.src}
                    alt={watch.coverImage.alt}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                ) : (
                  <span className="font-display text-sm font-semibold text-ink-500">
                    {watch.brand}
                  </span>
                )}
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-ink-500">
                  {watch.brand}
                </p>
                <Link
                  href={`/relojes/${watch.slug}`}
                  className="font-display text-xl font-bold hover:text-accent"
                >
                  {watch.name}
                </Link>
                <p className="mt-1 text-sm text-ink-500">
                  <NumText>{formatPrice(watch)}</NumText>
                </p>
              </div>
              {watches.length === 2 && (
                <HighlightBadges highlights={duelHighlights(stats[i], stats[1 - i])} />
              )}
              <AffiliateButton watch={watch} />
            </div>
          ))}
        </div>

        {specs.length > 0 && (
          <Reveal className="mt-12">
            <h2 className="font-display text-2xl font-bold">
              Especificaciones técnicas
            </h2>
            <SpecTable
              headers={watches.map((w) => `${w.brand} ${w.name}`)}
              rows={[
                ...specs,
                {
                  label: "Precio aproximado",
                  values: watches.map(formatPrice),
                  best: cheapestIndex(watches),
                  pinned: true,
                  extra: watches.map((w) => (
                    <span key={w.slug} className="block">
                      {w.priceSource.store && (
                        <span className="block text-xs font-normal text-ink-500">
                          {w.priceSource.store}
                          {w.priceSource.verifiedAt &&
                            `, ${w.priceSource.verifiedAt.split("-").reverse().join("/")}`}
                        </span>
                      )}
                      <AffiliateButton watch={w} variant="compact" className="mt-2" />
                    </span>
                  )),
                },
              ]}
            />
            <p className="mt-2 text-xs text-ink-500">
              Los precios cambian con frecuencia: comprueba el precio actual en la tienda.
            </p>
          </Reveal>
        )}

        <ArticleWithAd html={comparison.content} className="mt-12" />

        {comparison.verdict && comparison.verdict.length > 0 && (
          <Reveal className="mt-14">
            <h2 id="veredicto" className="scroll-mt-20 font-display text-2xl font-bold">
              {comparison.verdictTitle ?? "Veredicto final"}
            </h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {comparison.verdict.map((v) => {
                const watch = watches.find((w) => w.slug === v.watchSlug);
                return (
                  <div
                    key={v.watchSlug}
                    className="flex flex-col glass-panel p-6"
                  >
                    <h3 className="font-display text-lg font-bold text-ink">
                      <VerdictHeading heading={v.heading} watch={watch} />
                    </h3>
                    <ul className="mt-4 flex-1 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-500 marker:text-accent">
                      {v.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    {watch && (
                      <div className="mt-5 flex flex-wrap items-center gap-4">
                        <AffiliateButton watch={watch} />
                        <Link
                          href={`/relojes/${watch.slug}`}
                          className="text-sm font-semibold text-accent hover:underline"
                        >
                          Ver análisis completo
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        )}

        {PILLAR_GUIDES.filter((g) => g.duels.includes(comparison.slug)).map((g, i) => (
          <Reveal key={g.path} className={`${i === 0 ? "mt-14" : "mt-6"} max-w-prose glass-panel p-6`}>
            <h2 className="font-display text-lg font-bold text-ink">
              {i === 0 ? "¿Y frente al resto de opciones?" : "¿Y para la montaña?"}
            </h2>
            <ul className="mt-4 space-y-2">
              {watches
                .filter((w) => g.awards[w.slug])
                .map((w) => (
                  <li key={w.slug} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-500">
                    <Badge tone="glass">{g.awards[w.slug]}</Badge>
                    {w.brand} {w.name}
                  </li>
                ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              {g.duelIntro}{" "}
              <Link href={g.path} className="font-semibold text-accent hover:underline">
                {g.linkLabel}
              </Link>
              .
            </p>
          </Reveal>
        ))}

        <p className="mt-10 max-w-prose text-xs text-ink-500">
          Como afiliado de Amazon, {SITE_NAME} obtiene ingresos por las compras
          adscritas que cumplen los requisitos aplicables.
        </p>
      </Container>
    </>
  );
}
