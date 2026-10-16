// Tipografía de precisión para datos técnicos: envuelve cada cifra con
// su unidad ("35 h", "52 g", "10 ATM", "≈ 143,94 €", "1,32\"") en un
// <span class="num"> (mono, cifras tabulares, tracking ajustado) y deja
// el resto del texto tal cual. Sin hooks: sirve en servidor y cliente.
//
// Una cifra pegada a una letra o guion ("L1", "v5", "MIL-STD-810") no
// se marca: el prefijo opcional perezoso (grupo 1) la detecta sin
// lookbehind, que Safari no soporta hasta la 16.4. La unidad no puede
// seguir con letras ("35 horas" no se parte en "35 h"). Se construye
// con new RegExp porque \p{L} necesita un target ES2018 en tsconfig.
const NUMERIC = new RegExp(
  '([\\p{L}\\d-])??((?:≈\\s?)?\\d+(?:[.,]\\d+)*(?:\\s?(?:€|h|g|ATM|m|mm|días|nits|px|%|")(?!\\p{L}))?)',
  "gu",
);

export default function NumText({ children }: { children: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let found = false;
  for (const match of children.matchAll(NUMERIC)) {
    if (match[1]) continue;
    found = true;
    const start = match.index ?? 0;
    if (start > last) parts.push(children.slice(last, start));
    parts.push(
      <span key={start} className="num">
        {match[2]}
      </span>,
    );
    last = start + match[2].length;
  }
  if (!found) return <>{children}</>;
  if (last < children.length) parts.push(children.slice(last));
  return <>{parts}</>;
}
