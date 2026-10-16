export type GuideCategory =
  | "principiantes"
  | "comparativas-marca"
  | "tecnologia"
  | "entrenamiento"
  | "compra";

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  // Opcionales: si existen, sustituyen a title/excerpt en <title> y
  // <meta name="description"> de /guias/[slug].
  seoTitle?: string;
  metaDescription?: string;
  category: GuideCategory;
  // HTML del artículo (H2/H3, párrafos, listas), renderizado con
  // dangerouslySetInnerHTML en /guias/[slug]. Es contenido propio,
  // redactado para este sitio — no HTML de terceros. null = pendiente
  // de redactar; la página muestra un aviso de "en preparación".
  content: string | null;
  // true = la guía tiene su propia página en app/guias/<slug>/page.tsx
  // (tablas, botones de compra, datos estructurados) y la ruta dinámica
  // /guias/[slug] no la genera. Sigue aquí para el listado y el sitemap.
  hasCustomPage?: boolean;
  relatedGuideSlugs: string[];
  relatedWatchSlugs: string[];
}

export const GUIDE_CATEGORY_LABELS: Record<GuideCategory, string> = {
  principiantes: "Para empezar",
  "comparativas-marca": "Marcas",
  tecnologia: "Tecnología",
  entrenamiento: "Entrenamiento",
  compra: "Guía de compra",
};
