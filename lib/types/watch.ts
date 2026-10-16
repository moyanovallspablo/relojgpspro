export type PriceRange = "entrada" | "gama-media" | "gama-alta" | "premium";

export type ScreenType = "MIP" | "AMOLED" | "LCD";

export type UseCase =
  | "correr-basico"
  | "entrenamiento-estructurado"
  | "oposiciones"
  | "trail-montana"
  | "multideporte-triatlon"
  | "navegacion-mapas";

export interface Watch {
  slug: string;
  name: string;
  brand: string;

  // Precio: se diferencia siempre que es posible entre el PVPR oficial
  // del fabricante y el precio observado en tienda (que varía con el
  // tiempo). Si no se ha podido verificar ninguno de los dos, se deja
  // en null — nunca se rellena por intuición.
  officialPrice: number | null;
  observedPrice: number | null;
  priceNote: string | null;
  priceRange: PriceRange | null;

  // Trazabilidad del precio: dónde se comprobó y cuándo. Un precio
  // puede existir (arriba) sin que esto esté relleno — en ese caso
  // el precio se sigue mostrando, pero como pendiente de verificar
  // con fuente, no como confirmado. No se inventan URLs ni fechas.
  priceSource: {
    officialUrl: string | null;
    observedUrl: string | null;
    store: string | null; // tienda u origen del precio observado
    verifiedAt: string | null; // "YYYY-MM-DD"; null = sin fecha registrada
  };

  weightGrams: number | null;
  batteryLifeHours: number | null;

  gps: boolean | null;
  gpsAccuracyNotes: string | null;

  heartRate: {
    wrist: boolean | null;
    chestStrapCompatible: boolean | null;
  };

  screen: {
    type: ScreenType | null;
    alwaysOn: boolean | null;
  };

  maps: boolean | null;
  navigation: boolean | null;
  altimeter: "barométrico" | "GPS" | "no" | null;

  trainingMetrics: string[];

  waterResistance: string | null;

  // Trazabilidad del bloque de especificaciones técnicas (peso,
  // batería, GPS, altímetro, etc.) como conjunto. Como mínimo, un
  // reloj sin urls registradas se trata como specs pendientes de
  // verificar con fuente, aunque los valores en sí se conserven.
  specsSource: {
    urls: string[];
    verifiedAt: string | null;
  };

  // Resumen comprensible para alguien que no sabe mucho de relojes
  // deportivos, y explicación de qué implican las specs en uso real.
  // Se mantienen separados de pros/cons y specs para diferenciar
  // claramente dato objetivo de interpretación editorial.
  summary: string | null;
  practicalExplanation: string | null;

  pros: string[];
  cons: string[];
  idealFor: UseCase[];
  notIdealFor: UseCase[];

  alternatives: string[];

  // Imágenes: portada y galería. src null / array vacío mientras no
  // haya una imagen real y con procedencia clara — los componentes
  // deben caer al marcador genérico existente en ese caso. Nunca se
  // rellenan con imágenes de stock ni descargas no verificadas.
  coverImage: {
    src: string;
    alt: string;
    source: string | null;
  } | null;
  gallery: {
    src: string;
    alt: string;
    source: string | null;
  }[];

  // Compra. amazonAsin es el ASIN de Amazon.es: el enlace con el tag de
  // afiliado se genera en lib/affiliates.ts. affiliateUrl, si existe,
  // tiene prioridad (enlace ya formado de otro programa). Sin ninguno
  // de los dos no se muestra el botón de compra — nunca se inventan.
  amazonAsin?: string;
  affiliateUrl?: string;

  // Productos ficticios de demostración (isDemoProduct: true) vs
  // relojes reales con specs verificadas (isDemoProduct: false).
  // Nunca deben mostrarse mezclados sin distinguirse claramente.
  isDemoProduct: boolean;
}

export const USE_CASE_LABELS: Record<UseCase, string> = {
  "correr-basico": "Correr / entrenar de forma básica",
  "entrenamiento-estructurado": "Entrenamiento estructurado",
  oposiciones: "Oposiciones",
  "trail-montana": "Trail / montaña",
  "multideporte-triatlon": "Multideporte / triatlón",
  "navegacion-mapas": "Navegación y mapas",
};

export const PRICE_RANGE_LABELS: Record<PriceRange, string> = {
  entrada: "Gama de entrada",
  "gama-media": "Gama media",
  "gama-alta": "Gama alta",
  premium: "Premium",
};

// Un precio "verificado" es aquel con al menos una URL de fuente
// registrada. Un valor numérico sin fuente sigue siendo un dato real
// (no se borra), pero se presenta como pendiente de verificar.
export function isPriceSourceVerified(watch: Pick<Watch, "priceSource">) {
  return Boolean(
    watch.priceSource.officialUrl || watch.priceSource.observedUrl
  );
}

export function isSpecsSourceVerified(watch: Pick<Watch, "specsSource">) {
  return watch.specsSource.urls.length > 0;
}
