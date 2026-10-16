"use client";

import { useState } from "react";

// Conmutador flotante "Todas / Solo diferencias" de las tablas de
// comparativa (components/comparisons/SpecTable.tsx). Solo cambia un
// data-atributo en el contenedor: el CSS (.spec-cell en globals.css)
// pliega con una transición de altura las filas marcadas con data-same,
// así que no hay saltos de maquetación ni re-render de la tabla.
//
// La barra es sticky bajo la DuelBar (48px en móvil, 56px desde sm) y
// se queda flotando mientras la tabla está en pantalla.
export default function SpecDiffToggle({
  total,
  same,
  children,
}: {
  total: number;
  same: number;
  children: React.ReactNode;
}) {
  const [diffOnly, setDiffOnly] = useState(false);
  const diff = total - same;

  const option = (active: boolean) =>
    `press inline-flex min-h-[36px] items-center gap-1.5 rounded-full px-3 text-xs font-semibold ${
      active ? "bg-ink text-white shadow-sm" : "text-ink-500 hover:text-ink"
    } disabled:cursor-not-allowed disabled:opacity-50`;

  return (
    <div data-diff-only={diffOnly ? "" : undefined}>
      <div className="sticky top-[3.5rem] z-20 mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 sm:top-16">
        <p className="hidden text-xs text-ink-500 sm:block">
          <span className="num font-semibold text-ink">{diff}</span> diferencias en{" "}
          <span className="num">{total}</span> especificaciones
        </p>
        <div
          role="group"
          aria-label="Filtrar especificaciones"
          className="glass-panel ml-auto inline-flex gap-1 rounded-full p-1"
        >
          <button
            type="button"
            aria-pressed={!diffOnly}
            onClick={() => setDiffOnly(false)}
            className={option(!diffOnly)}
          >
            Todas <span className="num opacity-70">{total}</span>
          </button>
          <button
            type="button"
            aria-pressed={diffOnly}
            onClick={() => setDiffOnly(true)}
            disabled={same === 0}
            title={same === 0 ? "Todas las especificaciones son distintas" : undefined}
            className={option(diffOnly)}
          >
            Solo diferencias <span className="num opacity-70">{diff}</span>
          </button>
        </div>
      </div>
      <p aria-live="polite" className="sr-only">
        {diffOnly
          ? `Mostrando ${diff} de ${total} especificaciones: se ocultan las iguales en ambos relojes.`
          : `Mostrando las ${total} especificaciones.`}
      </p>
      {children}
    </div>
  );
}
