import { useId } from "react";
import { glossaryForLabel, type GlossaryEntry } from "@/lib/glossary";

// Tooltip de cristal sin JS (.tip en globals.css). El término es
// enfocable para que el globo también se abra con teclado o con un
// toque en móvil, y aria-describedby enlaza la explicación para los
// lectores de pantalla (el globo oculto lleva visibility: hidden).
export default function Tooltip({
  entry,
  placement = "top-end",
  children,
}: {
  entry: GlossaryEntry;
  placement?: "top-end" | "right";
  children: React.ReactNode;
}) {
  const id = useId();
  return (
    <span tabIndex={0} aria-describedby={id} className={`tip tip-${placement}`}>
      {children}
      <span role="tooltip" id={id} className="tip-bubble">
        <span className="tip-title">{entry.title}</span>
        {entry.text}
      </span>
    </span>
  );
}

// Etiqueta de fila de tabla comparativa: con tooltip si el término está
// en el glosario, tal cual si no. El globo se abre a la derecha, sobre
// las celdas de valores.
export function GlossaryLabel({ label }: { label: string }) {
  const entry = glossaryForLabel(label);
  if (!entry) return <>{label}</>;
  return (
    <Tooltip entry={entry} placement="right">
      {label}
    </Tooltip>
  );
}
