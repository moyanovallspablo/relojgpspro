import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guides, getGuideBySlug } from "@/lib/data/guides";
import { getWatchesBySlugs } from "@/lib/data/watches";
import { GUIDE_CATEGORY_LABELS } from "@/lib/types/guide";
import Container from "@/components/layout/Container";
import ReadingProgress from "@/components/layout/ReadingProgress";
import WatchCard from "@/components/watches/WatchCard";
import GuideCard from "@/components/guides/GuideCard";
import Reveal from "@/components/motion/Reveal";
import ArticleWithAd from "@/components/ads/ArticleWithAd";

export function generateStaticParams() {
  return guides
    .filter((g) => !g.hasCustomPage)
    .map((g) => ({ slug: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: guide.seoTitle ?? guide.title,
    description: guide.metaDescription ?? guide.excerpt,
    alternates: { canonical: `/guias/${guide.slug}` },
  };
}

export default function GuideDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const relatedWatches = getWatchesBySlugs(guide.relatedWatchSlugs);
  const relatedGuides = guide.relatedGuideSlugs
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <Container className="py-14 sm:py-16">
      <ReadingProgress />
      <nav className="text-sm text-ink-500">
        <Link href="/guias" className="hover:text-ink">Guías</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{guide.title}</span>
      </nav>

      <Reveal className="mt-6 max-w-prose">
        <span className="tag w-fit">{GUIDE_CATEGORY_LABELS[guide.category]}</span>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-500">
          {guide.excerpt}
        </p>
      </Reveal>

      {guide.content ? (
        <ArticleWithAd html={guide.content} className="mt-8" />
      ) : (
        <div className="mt-8 max-w-prose rounded-card border border-dashed border-line bg-surface p-6">
          <p className="text-sm text-ink-500">
            Este artículo está en preparación. La estructura de la página ya
            está lista para publicarse en cuanto el contenido esté escrito.
          </p>
        </div>
      )}

      {relatedWatches.length > 0 && (
        <Reveal className="mt-14">
          <h2 className="font-display text-xl font-bold">Relojes relacionados</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedWatches.map((w) => (
              <WatchCard key={w.slug} watch={w} />
            ))}
          </div>
        </Reveal>
      )}

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
    </Container>
  );
}
