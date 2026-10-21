export interface ComparisonSpecRow {
  label: string;
  // Un valor por reloj, en el mismo orden que watchSlugs.
  values: string[];
}

export interface Comparison {
  slug: string;
  title: string;
  watchSlugs: string[];
  summary: string;
  winnerNotes?: string;

  // Página publicada. Solo las comparativas con content se renderizan
  // en /comparativas/[slug]; el resto redirige al catálogo.
  seoTitle?: string;
  metaDescription?: string;
  // Tabla de especificaciones: datos tomados de lib/data/watches.ts.
  // La fila de precio se genera en la página a partir de cada ficha.
  specs?: ComparisonSpecRow[];
  // HTML del análisis (H2/H3, párrafos, listas), contenido propio
  // redactado para este sitio, igual que en las guías.
  content?: string;
  // Veredicto: cuándo elegir cada reloj, en el orden de watchSlugs.
  verdict?: { watchSlug: string; heading: string; points: string[] }[];
  // Título del bloque de veredicto (por defecto, "Veredicto final").
  verdictTitle?: string;
}
