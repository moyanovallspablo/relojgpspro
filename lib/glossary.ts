// Glosario de términos técnicos para los tooltips (components/ui/Tooltip.tsx)
// de las tablas comparativas y la ficha técnica. Textos cortos (caben en
// un globo de 15rem sin tapar media tabla) y coherentes con lo que
// explican las guías.
export interface GlossaryEntry {
  title: string;
  text: string;
}

export const GLOSSARY = {
  pantalla: {
    title: "AMOLED vs MIP",
    text: "AMOLED: a color y con mucho contraste; luce más en interior, pero gasta más batería. MIP: siempre encendida, se lee mejor a pleno sol y apenas consume.",
  },
  amoled: {
    title: "AMOLED",
    text: "Pantalla a color y con mucho contraste: luce más en interior y como reloj de diario, pero gasta más batería que una MIP.",
  },
  mip: {
    title: "MIP · Memory-in-Pixel",
    text: "Pantalla transflectiva siempre encendida: se lee mejor cuanto más sol le da y apenas consume batería.",
  },
  gps: {
    title: "Multibanda · L1 + L5",
    text: "Recibe dos frecuencias de cada satélite en vez de una. Se nota entre edificios altos, en bosque cerrado o en montaña; en terreno abierto basta un GPS simple.",
  },
  altimetro: {
    title: "Altímetro barométrico",
    text: "Calcula la altitud con la presión del aire: mide el desnivel acumulado con más fiabilidad que la altitud estimada solo con el GPS.",
  },
  agua: {
    title: "ATM · resistencia al agua",
    text: "Es una presión de prueba, no una profundidad real. 5 ATM (50 m): lluvia, ducha y natación en superficie; 10 ATM (100 m): también snorkel. Ninguno sirve para bucear.",
  },
  pulso: {
    title: "Sensor óptico de pulso",
    text: "Mide el pulso con luz en la muñeca. Elevate es el sensor de Garmin y v4/v5, su generación. En series muy intensas, una banda de pecho es más fiable.",
  },
  navegacion: {
    title: "Migas de pan vs mapas",
    text: "Migas de pan: el reloj muestra la línea de la ruta cargada, sin mapa debajo. Rutas sobre mapa: además ves calles y caminos alrededor.",
  },
} satisfies Record<string, GlossaryEntry>;

// Etiquetas de fila de las tablas comparativas que llevan explicación.
const LABELS: [RegExp, GlossaryEntry][] = [
  [/^Pantalla/i, GLOSSARY.pantalla],
  [/^(GPS|GPS multibanda|Tipo de GPS|Sensores GPS)$/i, GLOSSARY.gps],
  [/^Altímetro$/i, GLOSSARY.altimetro],
  [/^Resistencia al agua$/i, GLOSSARY.agua],
  [/^Sensor de pulso$/i, GLOSSARY.pulso],
  [/^Navegación$/i, GLOSSARY.navegacion],
];

export function glossaryForLabel(label: string): GlossaryEntry | null {
  return LABELS.find(([re]) => re.test(label))?.[1] ?? null;
}
