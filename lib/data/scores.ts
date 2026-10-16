import type { ScoreAxis, WatchScores } from "@/lib/types/scores";

// Ejes del gráfico de radar de /comparativas/[slug], en el orden en que
// se dibujan (en el sentido de las agujas del reloj desde arriba).
// `lines` parte la etiqueta para que quepa alrededor del gráfico.
export const SCORE_AXES: { key: ScoreAxis; label: string; lines: string[] }[] = [
  { key: "bateria", label: "Batería", lines: ["Batería"] },
  { key: "pantalla", label: "Pantalla", lines: ["Pantalla"] },
  { key: "gps", label: "GPS y navegación", lines: ["GPS y", "navegación"] },
  { key: "rendimiento", label: "Rendimiento deportivo", lines: ["Rendimiento", "deportivo"] },
  { key: "salud", label: "Salud y smart", lines: ["Salud y", "smart"] },
  { key: "calidadPrecio", label: "Calidad / precio", lines: ["Calidad /", "precio"] },
];

// Valoración editorial por reloj, no por comparativa: así un mismo reloj
// puntúa igual en todas las comparativas en las que aparece. Se basa en
// los datos de lib/data/watches.ts y en las tablas de las comparativas:
//
// - Batería: días en modo reloj y horas con GPS.
// - Pantalla: tecnología (AMOLED > MIP a color > MIP monocroma), tamaño
//   y resolución.
// - GPS y navegación: multibanda, mapas, migas de pan y altímetro.
// - Rendimiento deportivo: métricas de carga y recuperación, multideporte
//   y manejo con botones en entreno.
// - Salud y smart: llamadas, ECG, sueño, música offline y pagos.
// - Calidad / precio: lo que ofrece para su precio observado en la ficha.
//   Si cambian mucho los precios, conviene revisar este eje.
const watchScores: Record<string, WatchScores> = {
  // 14 días / 20 h, MIP de colores básicos, GPS simple sin navegación ni altímetro.
  "garmin-forerunner-55": {
    bateria: 7, pantalla: 4, gps: 3, rendimiento: 4, salud: 4, calidadPrecio: 6,
  },
  // 7 días / 35 h, MIP de colores básicos, GPS simple sin navegación ni altímetro,
  // Training Load Pro.
  "polar-pacer": {
    bateria: 5, pantalla: 4, gps: 3, rendimiento: 6, salud: 3, calidadPrecio: 7,
  },
  // 11 días / 19 h, AMOLED de 1,2", GPS simple con migas de pan,
  // potencia de carrera, Garmin Pay.
  "garmin-forerunner-165": {
    bateria: 6, pantalla: 7, gps: 5, rendimiento: 6, salud: 6, calidadPrecio: 8,
  },
  // 15 días / 38 h, MIP a color, multibanda con migas de pan, EvoLab,
  // música offline sin pagos.
  "coros-pace-3": {
    bateria: 8, pantalla: 5, gps: 7, rendimiento: 8, salud: 4, calidadPrecio: 9,
  },
  // 28 días / 30 h, MIP monocroma de 0,9", GPS simple con TracBack,
  // estado de VFC y carga, sin música ni pagos (versión no Solar).
  "garmin-instinct-2": {
    bateria: 10, pantalla: 3, gps: 5, rendimiento: 6, salud: 4, calidadPrecio: 8,
  },
  // 13 días / 20 h, AMOLED de 1,3", multibanda con migas de pan,
  // Training Readiness y triatlón, música y Garmin Pay.
  "garmin-forerunner-265": {
    bateria: 6, pantalla: 8, gps: 7, rendimiento: 9, salud: 7, calidadPrecio: 6,
  },
  // 14 días / 26 h, AMOLED de 1,4", GPS simple sin navegación, llamadas,
  // ECG, temperatura de la piel, Sleep Coach, música y Garmin Pay.
  "garmin-venu-3": {
    bateria: 7, pantalla: 9, gps: 4, rendimiento: 4, salud: 10, calidadPrecio: 7,
  },
  // 9 días / 30-40 h, AMOLED de 1,32" y 2000 nits, multibanda con mapas
  // gratuitos, Suunto Coach y triatlón, sin música ni pagos.
  "suunto-race-s": {
    bateria: 6, pantalla: 9, gps: 9, rendimiento: 7, salud: 4, calidadPrecio: 8,
  },
  // 23 días / 31 h, AMOLED de 1,4", multibanda con mapas y giro a giro,
  // todas las métricas de la gama, música y Garmin Pay.
  "garmin-forerunner-965": {
    bateria: 9, pantalla: 9, gps: 10, rendimiento: 10, salud: 7, calidadPrecio: 5,
  },
};

export function getWatchScores(watchSlug: string): WatchScores | undefined {
  return watchScores[watchSlug];
}
