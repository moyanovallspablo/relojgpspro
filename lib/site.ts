import type { Metadata } from "next";

// Dominio y nombre del sitio: única fuente para metadataBase, sitemap,
// robots y páginas legales.
export const SITE_URL = "https://www.relojgpspro.com";
export const SITE_NAME = "RelojGPSPro";

export const DEFAULT_TITLE =
  "RelojGPSPro | Guías y Análisis Fieles de Relojes GPS para Entrenar";
export const DEFAULT_DESCRIPTION =
  "Encuentra tu reloj GPS ideal sin complicaciones. Análisis objetivos, especificaciones reales verificadas y guías de compra para corredores, atletas y opositores.";

// Tag del Programa de Afiliados de Amazon.es. Cambiarlo aquí actualiza
// todos los enlaces de compra (ver lib/affiliates.ts).
export const AMAZON_AFFILIATE_TAG = "relojgpspro-21";

// ID de editor de Google AdSense. Debe coincidir con public/ads.txt
// (allí va sin el prefijo "ca-").
export const ADSENSE_CLIENT_ID = "ca-pub-3394958838993452";

// IDs de bloques de anuncios de AdSense (data-ad-slot), creados en
// AdSense > Anuncios > Por bloque de anuncios. Mientras un ID sea null,
// components/ads/AdBanner.tsx no renderiza nada en esa posición (los
// Anuncios automáticos siguen funcionando).
export const ADSENSE_SLOTS: { inArticle: string | null } = {
  inArticle: null,
};

// Imagen por defecto al compartir la web en redes sociales: recorte
// a 1200x630 (formato apaisado de OpenGraph) montada a partir de
// /images/photos/watch-dark-screen.jpg: esfera completa, laterales
// rellenos con el azul del fondo. Sin rostros ni texto en otro idioma.
export const DEFAULT_OG_IMAGE = {
  url: "/images/og/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Reloj GPS deportivo con la esfera iluminada sobre fondo azul oscuro",
};

// OpenGraph común. Next.js no fusiona openGraph en profundidad: una
// página que define el suyo reemplaza el del layout entero, así que
// debe partir de este objeto para no perder siteName/locale/imagen.
export const DEFAULT_OPEN_GRAPH: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "es_ES",
  siteName: SITE_NAME,
  images: [DEFAULT_OG_IMAGE],
};
