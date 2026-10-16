import type { Highlight } from "@/lib/duelInsights";
import WinBadge from "@/components/ui/WinBadge";

// Puntos fuertes de un reloj en un duelo (lib/duelInsights.ts) como
// insignias de victoria; la cifra va en el title de cada una. Sin
// hooks: lo usan las páginas de comparativa y el selector de duelos.
export default function HighlightBadges({
  highlights,
  max = 3,
  size = "md",
  className = "justify-center",
}: {
  highlights: Highlight[];
  max?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  if (highlights.length === 0) return null;
  return (
    <ul aria-label="Puntos fuertes" className={`flex flex-wrap gap-1.5 ${className}`}>
      {highlights.slice(0, max).map((h) => (
        <li key={h.label} className="max-w-full">
          <WinBadge detail={h.detail} size={size}>
            {h.label}
          </WinBadge>
        </li>
      ))}
    </ul>
  );
}
