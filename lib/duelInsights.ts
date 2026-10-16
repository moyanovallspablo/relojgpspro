import type { ScreenType, Watch } from "@/lib/types/watch";
import { formatEuros } from "@/lib/format";

// Puntos fuertes de un reloj frente a otro, calculados solo con los
// datos de las fichas (lib/data/watches.ts). Sin dependencias de datos:
// lo usan las páginas de comparativa (servidor) y el selector de duelos
// (navegador), que recibe ya los DuelStats de cada reloj.

export interface DuelStats {
  price: number | null;
  weight: number | null;
  batteryHours: number | null;
  multiband: boolean;
  maps: boolean;
  navigation: boolean;
  baroAltimeter: boolean;
  screen: ScreenType | null;
  waterAtm: number | null;
}

export interface Highlight {
  // Insignia corta ("Mejor autonomía") y explicación con cifras.
  label: string;
  detail: string;
}

// "10 ATM" → 10; "50 m" → 5 (1 ATM ≈ 10 m de presión de prueba).
function parseWaterAtm(text: string | null) {
  if (!text) return null;
  const atm = text.match(/(\d+)\s*ATM/i);
  if (atm) return Number(atm[1]);
  const meters = text.match(/(\d+)\s*m\b/i);
  return meters ? Number(meters[1]) / 10 : null;
}

export function duelStats(w: Watch): DuelStats {
  return {
    price: w.observedPrice ?? w.officialPrice,
    weight: w.weightGrams,
    batteryHours: w.batteryLifeHours,
    // Las notas de GPS de las fichas dicen "GPS multibanda real" cuando
    // lo tienen y "sin doble frecuencia" cuando no.
    multiband: /multibanda real/i.test(w.gpsAccuracyNotes ?? ""),
    maps: w.maps === true,
    navigation: w.navigation === true,
    baroAltimeter: w.altimeter === "barométrico",
    screen: w.screen.type,
    waterAtm: parseWaterAtm(w.waterResistance),
  };
}

const days = (hours: number) => Math.round(hours / 24);

// En orden de importancia: las insignias muestran las primeras.
export function duelHighlights(s: DuelStats, o: DuelStats): Highlight[] {
  const out: Highlight[] = [];
  if (s.price && o.price && o.price - s.price > 5) {
    out.push({
      label: "Más económico",
      detail: `≈ ${formatEuros(s.price)} frente a ≈ ${formatEuros(o.price)} (unos ${formatEuros(Math.round(o.price - s.price))} menos).`,
    });
  }
  if (s.batteryHours && o.batteryHours && s.batteryHours - o.batteryHours > 12) {
    out.push({
      label: "Mejor autonomía",
      detail: `Hasta ${days(s.batteryHours)} días en modo reloj frente a ${days(o.batteryHours)}.`,
    });
  }
  if (s.multiband && !o.multiband) {
    out.push({
      label: "GPS multibanda",
      detail: "Más preciso entre edificios altos, en bosque o en montaña.",
    });
  }
  if (s.maps && !o.maps) {
    out.push({ label: "Con mapas", detail: "Mapas en el reloj para orientarte en rutas nuevas." });
  } else if (s.navigation && !o.navigation) {
    out.push({ label: "Navegación", detail: "Sigue rutas cargadas con migas de pan." });
  }
  if (s.screen === "AMOLED" && o.screen !== "AMOLED") {
    out.push({
      label: "Pantalla AMOLED",
      detail: "A color y con mucho contraste, más vistosa en interior y como reloj de diario.",
    });
  }
  if (s.screen === "MIP" && o.screen === "AMOLED") {
    out.push({
      label: "Pantalla MIP",
      detail: "Siempre encendida, se lee mejor a pleno sol y consume menos batería.",
    });
  }
  if (s.weight && o.weight && o.weight - s.weight > 1) {
    out.push({ label: "Más ligero", detail: `${s.weight} g frente a ${o.weight} g.` });
  }
  if (s.baroAltimeter && !o.baroAltimeter) {
    out.push({
      label: "Altímetro barométrico",
      detail: "Desnivel más fiable en trail y montaña.",
    });
  }
  if (s.waterAtm && o.waterAtm && s.waterAtm > o.waterAtm) {
    out.push({
      label: "Más resistente al agua",
      detail: `${s.waterAtm} ATM frente a ${o.waterAtm} ATM.`,
    });
  }
  return out;
}
