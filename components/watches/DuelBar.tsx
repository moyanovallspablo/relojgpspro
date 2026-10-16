import { Fragment } from "react";
import Image from "next/image";
import type { Watch } from "@/lib/types/watch";

// Mini-barra del duelo en /comparativas/[slug]: miniaturas y nombres de
// los relojes enfrentados y un acceso al veredicto. Va fuera del
// Container, como hija directa de <main>, para ocupar todo el ancho y
// quedarse pegada arriba (sticky top-0: la cabecera del sitio no es fija)
// durante toda la página. En móvil mide 48px y los nombres van sin
// marca y en hasta dos líneas para que quepan en 360px.
export default function DuelBar({
  watches,
  targetId,
}: {
  watches: Watch[];
  targetId: string;
}) {
  return (
    <div className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      {/* Espacios medidos para 360px: dos "Forerunner" (~59px cada uno a
          11px) caben con miniaturas de 28px. min-w-min impide que un
          nombre se encoja por debajo de su palabra más larga (line-clamp
          lleva overflow: hidden y, sin él, "Pacer" se cortaba). */}
      <div className="container-page flex h-12 items-center gap-2 sm:h-14 sm:gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-3">
          {watches.map((w, i) => (
            <Fragment key={w.slug}>
              {i > 0 && (
                <span className="shrink-0 font-mono text-[10px] font-semibold text-ink-500 sm:text-xs">
                  VS
                </span>
              )}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-white sm:h-9 sm:w-9">
                  {w.coverImage ? (
                    <Image
                      src={w.coverImage.src}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-contain p-0.5"
                    />
                  ) : (
                    <span className="font-display text-[10px] font-bold text-ink-500">
                      {w.brand.slice(0, 1)}
                    </span>
                  )}
                </span>
                <span className="line-clamp-2 min-w-min text-[11px] font-semibold leading-tight text-ink sm:line-clamp-1 sm:text-sm">
                  <span className="hidden sm:inline">{w.brand} </span>
                  {w.name}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
        <a
          href={`#${targetId}`}
          className="btn-fx btn-fx-neutral inline-flex shrink-0 items-center gap-1 rounded-card bg-ink px-2.5 py-1.5 font-mono text-[11px] font-medium text-white hover:bg-ink-700 sm:px-4 sm:py-2 sm:text-xs"
        >
          <span className="sm:hidden">Veredicto</span>
          <span className="hidden sm:inline">Ver veredicto</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3v10M4 9l4 4 4-4" />
          </svg>
        </a>
      </div>
    </div>
  );
}
