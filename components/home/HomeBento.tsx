import Link from "next/link";
import { watches, getWatchBySlug } from "@/lib/data/watches";
import { getMatcherData, parseDuelSlug } from "@/lib/data/duels";
import {
  TRAIL_GUIDE_AWARDS,
  TRAIL_GUIDE_PATH,
  VALUE_GUIDE_AWARDS,
  VALUE_GUIDE_PATH,
} from "@/lib/data/valueGuide";
import { formatApproxEuros, formatEuros } from "@/lib/format";
import Reveal from "@/components/motion/Reveal";

// Rejilla bento de la portada, bajo el Hero. Colocación (auto-placement):
//
//   lg (4 col.)  [ Top 2x2 ][ Duelos 1x2 ][ Rebajas 1x1 ]
//                [         ][            ][ Trail   1x1 ]
//   md (3 col.)  [ Top 2x2 ][ Duelos 1x2 ]
//                [ Rebajas ][ Trail  2x1 ]
//
// Todas las cifras salen de lib/data: nada se escribe a mano aquí.

const DATE = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatDay(isoDay: string) {
  return DATE.format(new Date(`${isoDay}T00:00:00Z`));
}

// Ganadores de una guía pilar agrupados por premio (dos relojes pueden
// compartir categoría).
function groupAwards(awards: Record<string, string>) {
  const groups = new Map<string, string[]>();
  for (const [slug, award] of Object.entries(awards)) {
    const watch = getWatchBySlug(slug);
    if (!watch) continue;
    groups.set(award, [...(groups.get(award) ?? []), `${watch.brand} ${watch.name}`]);
  }
  return Array.from(groups, ([award, names]) => ({ award, names }));
}

// Mayores rebajas: precio observado frente al PVPR oficial, solo con los
// dos precios registrados. No hay histórico de precios en los datos, así
// que no se habla de "mínimo histórico".
function topDiscounts(limit: number) {
  return watches
    .flatMap((w) => {
      if (w.isDemoProduct || !w.officialPrice || !w.observedPrice) return [];
      if (w.observedPrice >= w.officialPrice) return [];
      const percent = Math.round((1 - w.observedPrice / w.officialPrice) * 100);
      return [{ watch: w, percent, observed: w.observedPrice, official: w.officialPrice }];
    })
    .sort((a, b) => b.percent - a.percent)
    .slice(0, limit);
}

const TILE = "flex min-w-0 flex-col rounded-2xl border p-6 sm:p-7";
const EYEBROW = "font-mono text-[11px] font-semibold uppercase tracking-wider";

export default function HomeBento() {
  const valueAwards = groupAwards(VALUE_GUIDE_AWARDS);
  const trailAwards = groupAwards(TRAIL_GUIDE_AWARDS);
  const duels = getMatcherData()
    .popular.slice(0, 3)
    .flatMap(({ slug }) => {
      const pair = parseDuelSlug(slug);
      return pair ? [{ slug, pair }] : [];
    });
  const discounts = topDiscounts(3);
  const checkedDays = discounts
    .map((d) => d.watch.priceSource.verifiedAt)
    .filter((d): d is string => Boolean(d))
    .sort();
  const firstDay = checkedDays[0];
  const lastDay = checkedDays[checkedDays.length - 1];

  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className={`${EYEBROW} text-sky-800`}>Panel de decisión</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Lo esencial del catálogo, de un vistazo
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-700">
            Ganadores por categoría, los duelos más consultados y las rebajas
            reales sobre el precio oficial.
          </p>
        </Reveal>

        <Reveal
          delay={0.08}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
        >
          {/* Recomendación top: guía pilar calidad-precio (2x2). */}
          <article className={`${TILE} border-sky-200/70 bg-sky-50/60 transition-colors hover:border-sky-300 md:col-span-2 md:row-span-2`}>
            <p className={`${EYEBROW} text-sky-800`}>Recomendación top · Guía 2026</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Los mejores relojes GPS calidad-precio
            </h3>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-zinc-700">
              Un ganador por categoría para que pagues por lo que vas a usar:
              de la gama de entrada a los mapas y el outdoor.
            </p>
            <ul className="mt-6 divide-y divide-sky-200/70 border-y border-sky-200/70">
              {valueAwards.map(({ award, names }) => (
                <li
                  key={award}
                  className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 py-3"
                >
                  <span className="rounded-md bg-sky-100 px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide text-sky-900">
                    {award}
                  </span>
                  <span className="text-sm font-semibold text-zinc-900">{names.join(" / ")}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Link
                href={VALUE_GUIDE_PATH}
                className="btn-fx btn-shimmer inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-700 px-6 py-3 text-center font-mono text-sm font-medium text-white shadow-sm shadow-sky-600/20 hover:bg-sky-800 sm:w-auto"
              >
                [ Ver los ganadores ]
              </Link>
            </div>
          </article>

          {/* Duelos estrella (1x2). */}
          <article className={`${TILE} border-zinc-200/80 bg-zinc-100/70 md:row-span-2`}>
            <p className={`${EYEBROW} text-zinc-700`}>Duelos estrella</p>
            <h3 className="mt-3 text-lg font-bold tracking-tight text-zinc-900">
              Los cara a cara más buscados
            </h3>
            <ul className="mt-5 flex flex-1 flex-col gap-3">
              {duels.map(({ slug, pair: [a, b] }) => (
                <li key={slug}>
                  <Link
                    href={`/comparativas/${slug}`}
                    className="press group block rounded-xl border border-zinc-200/80 bg-white/80 p-4 hover:border-sky-300 hover:bg-white"
                  >
                    {[a, b].map((w, i) => (
                      <div key={w.slug}>
                        {i === 1 && (
                          <p className="my-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-700">
                            vs
                          </p>
                        )}
                        <div className="flex items-baseline justify-between gap-3 text-xs text-zinc-700">
                          <span className="min-w-0">{w.brand}</span>
                          <span className="num shrink-0">
                            {formatApproxEuros(w.observedPrice ?? w.officialPrice, "—")}
                          </span>
                        </div>
                        <p className="text-sm font-semibold leading-snug text-zinc-900">{w.name}</p>
                      </div>
                    ))}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/comparativas"
              className="mt-5 text-sm font-semibold text-sky-800 hover:underline"
            >
              Ver todas las comparativas →
            </Link>
          </article>

          {/* Mayores rebajas sobre PVPR (1x1). */}
          <article className={`${TILE} border-amber-200/70 bg-amber-50/70`}>
            <p className={`${EYEBROW} text-amber-900`}>Rebajas verificadas</p>
            <h3 className="mt-3 text-lg font-bold tracking-tight text-zinc-900">
              Mayor rebaja sobre PVPR
            </h3>
            <ul className="mt-4 divide-y divide-amber-200/70">
              {discounts.map(({ watch, percent, observed, official }) => (
                <li key={watch.slug} className="py-2.5">
                  <Link
                    href={`/relojes/${watch.slug}`}
                    className="flex items-baseline justify-between gap-3 hover:underline"
                  >
                    <span className="min-w-0 text-sm font-semibold text-zinc-900">
                      {watch.brand} {watch.name}
                    </span>
                    <span className="num shrink-0 text-sm font-semibold text-amber-900">
                      −{percent} %
                    </span>
                  </Link>
                  <p className="mt-0.5 flex flex-wrap gap-x-2 text-xs text-zinc-700">
                    <span className="num text-zinc-900">{formatEuros(observed)}</span>
                    <span>
                      PVPR <s className="num">{formatEuros(official)}</s>
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            {firstDay && lastDay && (
              <p className="mt-auto pt-4 text-xs leading-snug text-zinc-700">
                Precio observado en tienda frente al PVPR oficial, comprobado{" "}
                {firstDay === lastDay
                  ? `el ${formatDay(firstDay)}`
                  : `entre el ${formatDay(firstDay)} y el ${formatDay(lastDay)}`}
                . Puede variar.
              </p>
            )}
          </article>

          {/* Guía pilar de trail y montaña (1x1; 2x1 en md). */}
          <article className={`${TILE} border-zinc-200/80 bg-white/80 md:col-span-2 lg:col-span-1`}>
            <p className={`${EYEBROW} text-sky-800`}>Guía outdoor 2026</p>
            <h3 className="mt-3 text-lg font-bold tracking-tight text-zinc-900">
              Trail y montaña
            </h3>
            <ul className="mt-4 space-y-2.5">
              {trailAwards.map(({ award, names }) => (
                <li key={award} className="text-sm leading-snug">
                  <span className="block text-xs text-zinc-700">{award}</span>
                  <span className="font-semibold text-zinc-900">{names.join(" / ")}</span>
                </li>
              ))}
            </ul>
            <Link
              href={TRAIL_GUIDE_PATH}
              className="mt-auto pt-5 text-sm font-semibold text-sky-800 hover:underline"
            >
              Ver la guía de montaña →
            </Link>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
