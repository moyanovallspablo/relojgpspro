import type { Watch } from "@/lib/types/watch";
import { getAffiliateUrl } from "@/lib/affiliates";

// Botón de compra común a tarjetas, fichas, guías y comparativas.
// rel="sponsored nofollow" es el marcado que exige Google para enlaces
// de afiliación; no se renderiza nada si el reloj no tiene ASIN ni
// affiliateUrl.
//
// El estilo vive aquí para que todos los botones de compra sean
// iguales: fondo accent-dark (contraste AA con texto blanco), al menos
// 44 px de alto (objetivo táctil en móvil) y las microinteracciones
// .btn-fx / .btn-shimmer de globals.css (elevación, pulsación y
// destello, solo CSS). className solo añade maquetación (ancho,
// márgenes) desde fuera.
const VARIANT_CLASSES = {
  // Llamada a la acción principal: además del destello en hover, uno
  // periódico cada 4,5 s para que destaque también en móvil.
  primary:
    "btn-shimmer-loop min-h-[44px] bg-accent-dark px-5 py-2.5 text-sm text-white shadow-sm hover:bg-ink",
  // Enlace secundario compacto (p. ej. dentro de una tabla).
  compact:
    "min-h-[44px] whitespace-nowrap border border-accent-dark bg-surface px-3 py-1.5 text-xs text-accent-dark hover:bg-accent-dark hover:text-white sm:min-h-[36px]",
};

const DEFAULT_LABELS = {
  primary: "Ver oferta en Amazon",
  compact: "Ver precio en Amazon",
};

export default function AffiliateButton({
  watch,
  variant = "primary",
  label,
  className = "",
}: {
  watch: Pick<Watch, "amazonAsin" | "affiliateUrl">;
  variant?: keyof typeof VARIANT_CLASSES;
  label?: string;
  className?: string;
}) {
  const href = getAffiliateUrl(watch);
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={`btn-fx btn-shimmer inline-flex items-center justify-center gap-1.5 rounded-card text-center font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {label ?? DEFAULT_LABELS[variant]}
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3h7v7M13 3 4 12" />
      </svg>
      <span className="sr-only">(se abre en una pestaña nueva)</span>
    </a>
  );
}
