import { watches, getWatchBySlug } from "@/lib/data/watches";
import { publishedComparisons } from "@/lib/data/comparisons";
import type { Comparison } from "@/lib/types/comparison";
import type { Watch } from "@/lib/types/watch";
import { duelStats, type DuelStats } from "@/lib/duelInsights";

// Duelos entre dos relojes cualesquiera del catálogo. Un par puede tener
// comparativa redactada (lib/data/comparisons.ts, en cualquier orden) o
// no: en ese caso /comparativas/[slug] genera una comparativa técnica a
// partir de las fichas de lib/data/watches.ts.
//
// Los slugs son "<relojA>-vs-<relojB>"; ningún slug de reloj contiene
// "-vs-", así que se pueden partir sin ambigüedad.

const SEPARATOR = "-vs-";

export function duelSlug(a: string, b: string) {
  return `${a}${SEPARATOR}${b}`;
}

export function parseDuelSlug(slug: string): [Watch, Watch] | null {
  const parts = slug.split(SEPARATOR);
  if (parts.length !== 2 || parts[0] === parts[1]) return null;
  const a = getWatchBySlug(parts[0]);
  const b = getWatchBySlug(parts[1]);
  return a && b ? [a, b] : null;
}

// Comparativa redactada para el par, en cualquiera de los dos órdenes.
export function findPublishedDuel(a: string, b: string): Comparison | undefined {
  return publishedComparisons.find(
    (c) => c.watchSlugs.length === 2 && c.watchSlugs.includes(a) && c.watchSlugs.includes(b),
  );
}

// Orden canónico de un duelo generado (el del catálogo): A-vs-B y B-vs-A
// se generan los dos para respetar el orden elegido en el selector, pero
// comparten URL canónica.
export function canonicalDuelSlug(a: string, b: string) {
  const ia = watches.findIndex((w) => w.slug === a);
  const ib = watches.findIndex((w) => w.slug === b);
  return ia <= ib ? duelSlug(a, b) : duelSlug(b, a);
}

// Todos los pares sin comparativa redactada, en los dos órdenes.
export function getGeneratedDuelSlugs(): string[] {
  const slugs: string[] = [];
  for (const a of watches) {
    for (const b of watches) {
      if (a.slug !== b.slug && !findPublishedDuel(a.slug, b.slug)) {
        slugs.push(duelSlug(a.slug, b.slug));
      }
    }
  }
  return slugs;
}

// --- Datos del selector (components/comparisons/VersusMatcher.tsx) ------
// Solo lo que necesita el navegador: nada de textos de fichas ni HTML de
// comparativas.

export interface MatcherWatch {
  slug: string;
  brand: string;
  name: string;
  image: { src: string; alt: string } | null;
  price: number | null;
  amazonAsin?: string;
  affiliateUrl?: string;
  // Para las insignias de puntos fuertes de la vista previa.
  stats: DuelStats;
}

export interface MatcherData {
  watches: MatcherWatch[];
  publishedSlugs: string[];
  popular: { slug: string; label: string }[];
}

// "Duelos más buscados": accesos directos bajo el selector.
const POPULAR_DUELS = [
  "garmin-forerunner-55-vs-polar-pacer",
  "garmin-forerunner-165-vs-coros-pace-3",
  "garmin-forerunner-265-vs-suunto-race-s",
  "garmin-forerunner-965-vs-garmin-forerunner-265",
  "garmin-instinct-2-vs-suunto-race-s",
  "garmin-venu-3-vs-garmin-forerunner-265",
];

export function getMatcherData(): MatcherData {
  return {
    watches: watches.map((w) => ({
      slug: w.slug,
      brand: w.brand,
      name: w.name,
      image: w.coverImage ? { src: w.coverImage.src, alt: w.coverImage.alt } : null,
      price: w.observedPrice ?? w.officialPrice,
      amazonAsin: w.amazonAsin,
      affiliateUrl: w.affiliateUrl,
      stats: duelStats(w),
    })),
    publishedSlugs: publishedComparisons.map((c) => c.slug),
    popular: POPULAR_DUELS.flatMap((slug) => {
      const pair = parseDuelSlug(slug);
      if (!pair || !publishedComparisons.some((c) => c.slug === slug)) return [];
      return [{ slug, label: `${pair[0].name} vs ${pair[1].name}` }];
    }),
  };
}
