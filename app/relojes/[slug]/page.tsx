import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { watches, getWatchBySlug, getWatchesBySlugs } from "@/lib/data/watches";
import {
  PRICE_RANGE_LABELS,
  USE_CASE_LABELS,
  isPriceSourceVerified,
} from "@/lib/types/watch";
import Container from "@/components/layout/Container";
import WatchSpecsTable from "@/components/watches/WatchSpecsTable";
import WatchProsCons from "@/components/watches/WatchProsCons";
import WatchCard from "@/components/watches/WatchCard";
import Reveal from "@/components/motion/Reveal";
import AffiliateButton from "@/components/watches/AffiliateButton";
import Badge from "@/components/ui/Badge";
import { getPublishedComparisonsForWatch } from "@/lib/data/comparisons";
import { PILLAR_GUIDES } from "@/lib/data/valueGuide";
import { formatEuros } from "@/lib/format";
import { DEFAULT_OPEN_GRAPH, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return watches.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const watch = getWatchBySlug(params.slug);
  if (!watch) return {};

  const fullName = `${watch.brand} ${watch.name}`;
  // El template del layout añade " | RelojGPSPro".
  const title = `${fullName}: Análisis y Precio`;
  const price = watch.observedPrice ?? watch.officialPrice;
  const description = `${fullName}${
    price ? ` desde ${formatEuros(price)}` : ""
  }: especificaciones verificadas, pros y contras, para quién encaja y mejores alternativas. Análisis independiente antes de comprar.`;
  const url = `/relojes/${watch.slug}`;
  const images = watch.coverImage
    ? [{ url: watch.coverImage.src, alt: watch.coverImage.alt }]
    : DEFAULT_OPEN_GRAPH.images;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...DEFAULT_OPEN_GRAPH,
      type: "article",
      url,
      title: `${title} | ${SITE_NAME}`,
      description,
      images,
    },
  };
}

export default function WatchDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const watch = getWatchBySlug(params.slug);
  if (!watch) notFound();

  const alternatives = getWatchesBySlugs(watch.alternatives);
  const comparisons = getPublishedComparisonsForWatch(watch.slug);
  const displayPrice = watch.observedPrice ?? watch.officialPrice;
  const pillarAwards = PILLAR_GUIDES.filter((g) => g.awards[watch.slug]);

  return (
    <Container className="py-14 sm:py-16">
      <nav className="text-sm text-ink-500">
        <Link href="/relojes" className="hover:text-ink">Relojes</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{watch.brand} {watch.name}</span>
      </nav>

      <div className="mt-6 grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-ink-500">
            {watch.brand}
          </p>
          <h1 className="mt-1 font-display text-3xl font-bold sm:text-4xl">
            {watch.name}
          </h1>
          {watch.summary && (
            <p className="mt-3 max-w-prose text-base text-ink-500">
              {watch.summary}
            </p>
          )}
          <div className="mt-5 inline-flex flex-col gap-3 glass-panel px-6 py-4">
            <div>
              <p className="text-xs text-ink-500">
                {watch.priceRange ? PRICE_RANGE_LABELS[watch.priceRange] : ""}
              </p>
              <p className="font-display text-2xl font-bold text-ink">
                {displayPrice ? `desde ${formatEuros(displayPrice)}` : "Precio sin verificar"}
              </p>
              {watch.officialPrice && watch.observedPrice && (
                <p className="mt-1 text-xs text-ink-500">
                  PVPR oficial: {formatEuros(watch.officialPrice)}
                </p>
              )}
              {displayPrice && !isPriceSourceVerified(watch) && (
                <p className="mt-1 text-xs text-warning">
                  Sin fuente verificable registrada — pendiente de confirmar
                </p>
              )}
            </div>
            <AffiliateButton watch={watch} />
          </div>
          {watch.idealFor.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {watch.idealFor.map((u) => (
                <span key={u} className="tag">
                  Ideal para {USE_CASE_LABELS[u].toLowerCase()}
                </span>
              ))}
            </div>
          )}
        </Reveal>

        {/* isolate + overflow-hidden: el resplandor queda detrás del
            reloj (z-10) y recortado al marco, sin ensanchar la página. */}
        <div className="relative isolate flex aspect-[4/3] items-center justify-center overflow-hidden rounded-card border border-line bg-ink-700/[0.03]">
          <div aria-hidden="true" className="ambient-glow inset-[12%] blur-2xl" />
          {watch.coverImage ? (
            <Image
              src={watch.coverImage.src}
              alt={watch.coverImage.alt}
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="z-10 object-contain p-8"
            />
          ) : (
            <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-line bg-surface">
              <span className="font-display text-sm font-semibold text-ink-500">
                {watch.brand}
              </span>
            </div>
          )}
        </div>
      </div>

      {pillarAwards.length > 0 && (
        <Reveal className="mt-8 grid gap-4">
          {pillarAwards.map((g) => (
            <Link
              key={g.path}
              href={g.path}
              className="card group flex flex-wrap items-center gap-x-4 gap-y-2 p-5"
            >
              <Badge tone="glass">{g.awards[watch.slug]} 2026</Badge>
              <span className="min-w-0 text-sm text-ink-500">
                Elegido en nuestra guía de los{" "}
                <span className="font-semibold text-accent-dark group-hover:underline">
                  {g.linkLabel}
                </span>{" "}
                →
              </span>
            </Link>
          ))}
        </Reveal>
      )}

      {watch.practicalExplanation && (
        <Reveal delay={0.05} className="mt-10 max-w-prose">
          <h2 className="font-display text-xl font-bold">En la práctica</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-500">
            {watch.practicalExplanation}
          </p>
        </Reveal>
      )}

      <Reveal delay={0.05} className="mt-10 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
        <WatchProsCons watch={watch} />
        <WatchSpecsTable watch={watch} />
      </Reveal>

      {watch.notIdealFor.length > 0 && (
        <Reveal className="mt-10 max-w-prose rounded-card border border-line bg-warning-tint p-6">
          <h2 className="font-display text-base font-bold text-warning">
            Para quién puede no ser la opción más adecuada
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {watch.notIdealFor.map((u) => (
              <span key={u} className="tag">
                {USE_CASE_LABELS[u]}
              </span>
            ))}
          </div>
        </Reveal>
      )}

      {watch.trainingMetrics.length > 0 && (
        <Reveal className="mt-10">
          <h2 className="font-display text-xl font-bold">Métricas de entrenamiento</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {watch.trainingMetrics.map((m) => (
              <span key={m} className="tag">{m}</span>
            ))}
          </div>
        </Reveal>
      )}

      {watch.gallery.length > 0 && (
        <Reveal className="mt-10">
          <h2 className="font-display text-xl font-bold">Galería</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {watch.gallery.map((img) => (
              <div
                key={img.src}
                className="relative flex aspect-square items-center justify-center rounded-card border border-line bg-ink-700/[0.03]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-contain p-3"
                />
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {comparisons.length > 0 && (
        <Reveal className="mt-14">
          <h2 className="font-display text-xl font-bold">Comparativas</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {comparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/comparativas/${c.slug}`}
                className="card group flex flex-col gap-3 p-6"
              >
                <span className="tag w-fit">Comparativa</span>
                <h3 className="font-display text-lg font-bold text-ink group-hover:text-accent-dark">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500">{c.summary}</p>
                <span className="mt-auto text-sm font-semibold text-accent-dark">
                  Ver comparativa
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      )}

      {alternatives.length > 0 && (
        <Reveal className="mt-14">
          <h2 className="font-display text-xl font-bold">Alternativas</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {alternatives.map((alt) => (
              <WatchCard key={alt.slug} watch={alt} />
            ))}
          </div>
        </Reveal>
      )}
    </Container>
  );
}
