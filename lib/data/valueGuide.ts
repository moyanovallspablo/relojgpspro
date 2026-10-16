// Guías pilar: categoría que gana cada reloj y duelos afines. Lo usan
// las propias guías, las fichas (/relojes/[slug]), los duelos
// (/comparativas/[slug]), la portada y el menú para enlazarlas.
// Módulo aparte de guides.ts para que el menú (componente cliente) no
// arrastre el HTML de todas las guías al navegador.

// --- Calidad-precio ------------------------------------------------------

export const VALUE_GUIDE_SLUG = "mejores-relojes-gps-calidad-precio";
export const VALUE_GUIDE_PATH = `/guias/${VALUE_GUIDE_SLUG}`;

export const VALUE_GUIDE_AWARDS: Record<string, string> = {
  "polar-pacer": "Mejor gama de entrada",
  "garmin-forerunner-55": "Mejor gama de entrada",
  "coros-pace-3": "Mejor gama media MIP",
  "garmin-forerunner-165": "Mejor gama media AMOLED",
  "suunto-race-s": "Mejor con mapas · premium",
  "garmin-instinct-2": "Mejor outdoor resistente",
};

export const VALUE_GUIDE_DUELS = [
  "garmin-forerunner-55-vs-polar-pacer",
  "coros-pace-3-vs-polar-pacer",
  "garmin-forerunner-55-vs-coros-pace-3",
  "garmin-forerunner-165-vs-coros-pace-3",
  "garmin-forerunner-165-vs-garmin-forerunner-55",
  "coros-pace-3-vs-suunto-race-s",
  "garmin-instinct-2-vs-coros-pace-3",
  "garmin-instinct-2-vs-suunto-race-s",
];

// --- Trail y montaña -----------------------------------------------------

export const TRAIL_GUIDE_SLUG = "mejores-relojes-gps-trail-montana";
export const TRAIL_GUIDE_PATH = `/guias/${TRAIL_GUIDE_SLUG}`;

export const TRAIL_GUIDE_AWARDS: Record<string, string> = {
  "garmin-instinct-2": "Mejor en resistencia",
  "suunto-race-s": "Mejor con mapas topográficos",
  "coros-pace-3": "Mejor ligero y económico",
  "garmin-forerunner-965": "Mejor gama alta · mapas ruteables",
};

export const TRAIL_GUIDE_DUELS = [
  "garmin-instinct-2-vs-suunto-race-s",
  "garmin-instinct-2-vs-coros-pace-3",
  "coros-pace-3-vs-suunto-race-s",
  "garmin-forerunner-965-vs-suunto-race-s",
  "garmin-forerunner-265-vs-suunto-race-s",
];

// --- Registro común ------------------------------------------------------

export interface PillarGuide {
  path: string;
  // Texto del enlace ("mejores relojes GPS calidad-precio").
  linkLabel: string;
  awards: Record<string, string>;
  duels: string[];
  // Frase previa al enlace en el bloque de los duelos.
  duelIntro: string;
}

export const PILLAR_GUIDES: PillarGuide[] = [
  {
    path: VALUE_GUIDE_PATH,
    linkLabel: "mejores relojes GPS calidad-precio de 2026",
    awards: VALUE_GUIDE_AWARDS,
    duels: VALUE_GUIDE_DUELS,
    duelIntro:
      "Comparamos los ganadores de cada categoría —entrada, gama media MIP y AMOLED, mapas y outdoor— en nuestra guía de los",
  },
  {
    path: TRAIL_GUIDE_PATH,
    linkLabel: "mejores relojes GPS para trail y montaña de 2026",
    awards: TRAIL_GUIDE_AWARDS,
    duels: TRAIL_GUIDE_DUELS,
    duelIntro:
      "Enfrentamos mapas, altímetro, batería y resistencia de los cuatro mejores para montaña en nuestra guía de los",
  },
];
