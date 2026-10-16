import AdBanner from "@/components/ads/AdBanner";
import { splitAfterFirstSection } from "@/lib/html";

// Artículo HTML (guías y comparativas) con un bloque de anuncio al
// terminar la primera sección, antes del segundo <h2>.
export default function ArticleWithAd({
  html,
  className = "",
}: {
  html: string;
  className?: string;
}) {
  const [intro, rest] = splitAfterFirstSection(html);
  return (
    <article className={`article-content max-w-prose ${className}`}>
      <div dangerouslySetInnerHTML={{ __html: intro }} />
      {rest && (
        <>
          <AdBanner />
          {/* Sin anuncio, este <h2> deja de ser el primero del artículo:
              recupera el margen que first:mt-0 le quitaría. */}
          <div
            className="[&>h2:first-child]:mt-10"
            dangerouslySetInnerHTML={{ __html: rest }}
          />
        </>
      )}
    </article>
  );
}
