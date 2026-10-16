import { GlossaryLabel } from "@/components/ui/Tooltip";
import NumText from "@/components/ui/NumText";
import WinBadge from "@/components/ui/WinBadge";
import SpecDiffToggle from "@/components/comparisons/SpecDiffToggle";

// Tabla cara a cara de /comparativas/[slug], común a las comparativas
// redactadas y a las generadas. Cada fila con el mismo valor en todos
// los relojes lleva data-same, y SpecDiffToggle la pliega en el modo
// "Solo diferencias". El contenido de cada celda va dentro de
// .spec-cell (rejilla 1fr → 0fr) para que el plegado sea una transición
// de altura y no un salto.

export interface SpecTableRow {
  label: string;
  // Un valor por reloj, en el orden de headers.
  values: string[];
  // Índice del reloj que gana en esta fila (insignia "Mejor").
  best?: number | null;
  // Contenido extra bajo cada valor (tienda, botón de compra...).
  extra?: React.ReactNode[];
  // Fila que nunca se oculta ni cuenta para las diferencias.
  pinned?: boolean;
}

const normalize = (v: string) => v.trim().toLowerCase().replace(/\s+/g, " ");

function isSame(row: SpecTableRow) {
  return !row.pinned && row.values.every((v) => normalize(v) === normalize(row.values[0]));
}

function Cell({ children }: { children: React.ReactNode }) {
  return (
    <div className="spec-cell">
      <div>{children}</div>
    </div>
  );
}

export default function SpecTable({
  headers,
  rows,
  tableClassName = "min-w-[32rem]",
}: {
  headers: string[];
  rows: SpecTableRow[];
  tableClassName?: string;
}) {
  const comparable = rows.filter((r) => !r.pinned);
  const same = comparable.filter(isSame).length;

  return (
    <SpecDiffToggle total={comparable.length} same={same}>
      {/* relative: el texto sr-only de los botones (absolute) queda
          recortado por el scroll de la tabla y no ensancha la página. */}
      <div className="glass-panel relative mt-3 overflow-x-auto">
        <table className={`spec-table w-full text-left text-sm ${tableClassName}`}>
          <thead>
            <tr>
              <th className="w-44 px-4 py-3 font-semibold text-ink-500">
                <span className="sr-only">Especificación</span>
              </th>
              {headers.map((h) => (
                <th key={h} className="px-4 py-3 font-display font-bold text-ink">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                data-same={isSame(row) ? "" : undefined}
                className="border-t border-line align-top"
              >
                <th className="px-4 py-3 font-semibold text-ink">
                  <Cell>
                    <GlossaryLabel label={row.label} />
                  </Cell>
                </th>
                {row.values.map((v, i) => (
                  <td
                    key={i}
                    className={`px-4 py-3 ${row.best === i ? "font-semibold text-ink" : "text-ink-500"}`}
                  >
                    <Cell>
                      <NumText>{v}</NumText>
                      {row.best === i && (
                        <span className="ml-2 inline-block align-middle">
                          <WinBadge size="sm">Mejor</WinBadge>
                        </span>
                      )}
                      {row.extra?.[i]}
                    </Cell>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SpecDiffToggle>
  );
}
