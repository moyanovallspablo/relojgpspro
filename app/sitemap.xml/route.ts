import { watches } from "@/lib/data/watches";
import { guides } from "@/lib/data/guides";
import { publishedComparisons } from "@/lib/data/comparisons";
import { SITE_URL as BASE_URL } from "@/lib/site";

// Sitemap servido como XML propio (en lugar de app/sitemap.ts) para que
// <urlset> declare los namespaces completos de la especificación oficial
// de sitemaps.org, incluido xmlns:xsi con su schemaLocation.
export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/relojes",
  "/comparativas",
  "/guias",
  "/como-elegir",
  "/sobre-el-proyecto",
  "/contacto",
  "/aviso-legal",
  "/politica-de-privacidad",
  "/politica-de-cookies",
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const lastModified = new Date().toISOString();

  const urls = [
    ...staticRoutes.map((route) => `${BASE_URL}${route}`),
    ...watches.map((w) => `${BASE_URL}/relojes/${w.slug}`),
    ...guides.map((g) => `${BASE_URL}/guias/${g.slug}`),
    ...publishedComparisons.map((c) => `${BASE_URL}/comparativas/${c.slug}`),
  ];

  const body = urls
    .map(
      (url) =>
        `  <url>\n    <loc>${escapeXml(url)}</loc>\n    <lastmod>${lastModified}</lastmod>\n  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${body}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
