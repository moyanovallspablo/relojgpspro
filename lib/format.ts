// Precios en formato español: coma decimal y símbolo detrás, con espacio
// irrompible ("184,22 €", "199,90 €", "249 €"). Es el único formateador
// de precios del sitio: nunca se interpola el número en bruto
// (`${price} €` daría "184.22 €").
const WHOLE = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
const CENTS = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatEuros(value: number): string {
  return (Number.isInteger(value) ? WHOLE : CENTS).format(value);
}

// Precio de referencia aproximado ("≈ 184,22 €"); sin precio, el texto
// alternativo.
export function formatApproxEuros(value: number | null, fallback = "Sin verificar"): string {
  return value ? `≈ ${formatEuros(value)}` : fallback;
}
