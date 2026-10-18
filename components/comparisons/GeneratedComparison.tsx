import Image from "next/image";
import Link from "next/link";
import type { Watch } from "@/lib/types/watch";
import { USE_CASE_LABELS } from "@/lib/types/watch";
import { getPublishedComparisonsForWatch } from "@/lib/data/comparisons";
import { getMatcherData } from "@/lib/data/duels";
import { getWatchScores } from "@/lib/data/scores";
import { duelHighlights, duelStats, type DuelStats } from "@/lib/duelInsights";
import { formatApproxEuros, formatEuros } from "@/lib/format";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import AffiliateButton from "@/components/watches/AffiliateButton";
import DuelBar from "@/components/watches/DuelBar";
import RadarChart, { type RadarSeries } from "@/components/watches/RadarChart";
import NumText from "@/components/ui/NumText";
import VersusMatcher from "@/components/comparisons/VersusMatcher";
import SpecTable, { type SpecTableRow } from "@/components/comparisons/SpecTable";
import HighlightBadges from "@/components/comparisons/HighlightBadges";
import { SITE_NAME } from "@/lib/site";

// Comparativa técnica de un par sin comparativa redactada: todo sale de
// las fichas de lib/data/watches.ts (specs, pros/contras, precio) y de
// lib/data/scores.ts (radar). Nada de texto inventado: las "diferencias
// clave" se calculan comparando los datos de las dos fichas
// (lib/duelInsights.ts).

const RADAR_COLORS = ["#0284C7", "#EA580C"];

function priceLabel(w: Watch) {
  return formatApproxEuros(w.observedPrice ?? w.officialPrice);
}

function yesNo(value: boolean | null) {
  if (value === null) return "Sin verificar";
  return value ? "Sí" : "No";
}

// Índice del reloj que gana en un valor numérico, o null si empatan
// (dentro del margen) o falta el dato en alguno.
function winner(
  values: (number | null)[],
  better: "lower" | "higher",
  margin = 0,
): number | null {
  const [x, y] = values;
  if (x === null || y === null || Math.abs(x - y) <= margin) return null;
  return (better === "lower" ? x < y : x > y) ? 0 : 1;
}

function buildSpecRows(pair: [Watch, Watch], stats: DuelStats[]): SpecTableRow[] {
  return [
    {
      label: "Precio aproximado",
      values: pair.map(priceLabel),
      best: winner(stats.map((s) => s.price), "lower", 5),
    },
    {
      label: "PVPR oficial",
      values: pair.map((w) => (w.officialPrice ? formatEuros(w.officialPrice) : "Sin dato oficial")),
    },
    {
      label: "Peso",
      values: pair.map((w) => (w.weightGrams ? `${w.weightGrams} g` : "Sin verificar")),
      best: winner(stats.map((s) => s.weight), "lower", 1),
    },
    {
      label: "Autonomía (modo reloj)",
      values: pair.map((w) =>
        w.batteryLifeHours ? `Hasta ${Math.round(w.batteryLifeHours / 24)} días` : "Sin verificar",
      ),
      best: winner(stats.map((s) => s.batteryHours), "higher", 12),
    },
    { label: "GPS", values: pair.map((w) => w.gpsAccuracyNotes ?? "Sin verificar") },
    {
      label: "Pantalla",
      values: pair.map((w) =>
        w.screen.type
          ? `${w.screen.type}${w.screen.alwaysOn ? ", siempre encendida" : ""}`
          : "Sin verificar",
      ),
    },
    { label: "Mapas", values: pair.map((w) => yesNo(w.maps)) },
    { label: "Navegación", values: pair.map((w) => yesNo(w.navigation)) },
    {
      label: "Altímetro",
      values: pair.map((w) => (w.altimeter === "no" ? "No" : w.altimeter ?? "Sin verificar")),
    },
    { label: "FC en muñeca", values: pair.map((w) => yesNo(w.heartRate.wrist)) },
    {
      label: "Compatible con banda FC",
      values: pair.map((w) => yesNo(w.heartRate.chestStrapCompatible)),
    },
    {
      label: "Resistencia al agua",
      values: pair.map((w) => w.waterResistance ?? "Sin verificar"),
      best: winner(stats.map((s) => s.waterAtm), "higher"),
    },
    {
      label: "Métricas de entrenamiento",
      values: pair.map((w) => (w.trainingMetrics.length ? w.trainingMetrics.join(", ") : "—")),
    },
    {
      label: "Ideal para",
      values: pair.map((w) =>
        w.idealFor.length ? w.idealFor.map((u) => USE_CASE_LABELS[u]).join(", ") : "—",
      ),
    },
    {
      label: "Comprar",
      values: pair.map(() => ""),
      pinned: true,
      extra: pair.map((w) => (
        <span key={w.slug} className="block">
          <AffiliateButton watch={w} variant="compact" />
          {w.priceSource.store && (
            <span className="mt-2 block text-xs text-ink-500">
              Precio de referencia: {w.priceSource.store}
              {w.priceSource.verifiedAt &&
                `, ${w.priceSource.verifiedAt.split("-").reverse().join("/")}`}
            </span>
          )}
        </span>
      )),
    },
  ];
}

function WatchFace({ watch, stats, other }: { watch: Watch; stats: DuelStats; other: DuelStats }) {
  return (
    <div className="glass-panel flex min-w-0 flex-col items-center gap-3 p-4 text-center sm:p-6">
      <div className="relative isolate aspect-square w-24 sm:w-40">
        <div aria-hidden="true" className="product-halo" />
        {watch.coverImage ? (
          <Image
            src={watch.coverImage.src}
            alt={watch.coverImage.alt}
            fill
            priority
            sizes="(min-width: 640px) 160px, 96px"
            className="z-10 object-contain mix-blend-multiply"
          />
        ) : (
          <span className="relative z-10 flex h-full items-center justify-center font-display text-sm font-semibold text-ink-500">
            {watch.brand}
          </span>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-500">{watch.brand}</p>
        <Link
          href={`/relojes/${watch.slug}`}
          className="font-display text-[1rem] font-bold text-ink hover:text-accent sm:text-xl"
        >
          {watch.name}
        </Link>
        <p className="mt-1 text-sm text-ink-500">
          <NumText>{priceLabel(watch)}</NumText>
        </p>
      </div>
      <HighlightBadges highlights={duelHighlights(stats, other)} max={2} size="sm" />
      <AffiliateButton watch={watch} variant="compact" label="Ver precio" />
    </div>
  );
}

export default function GeneratedComparison({ pair }: { pair: [Watch, Watch] }) {
  const [a, b] = pair;
  const title = `${a.brand} ${a.name} vs ${b.brand} ${b.name}`;
  const stats = pair.map(duelStats);
  const rows = buildSpecRows(pair, stats);
  const scores = pair.map((w) => getWatchScores(w.slug));
  const radarSeries: RadarSeries[] | null = scores.every(Boolean)
    ? pair.map((w, i) => ({
        name: `${w.brand} ${w.name}`,
        scores: scores[i]!,
        color: RADAR_COLORS[i],
      }))
    : null;
  const related = [
    ...getPublishedComparisonsForWatch(a.slug),
    ...getPublishedComparisonsForWatch(b.slug),
  ].filter((c, i, all) => all.findIndex((x) => x.slug === c.slug) === i);

  return (
    <>
      <DuelBar watches={pair} targetId="veredicto" />
      <Container className="py-14 sm:py-16">
        <nav className="text-sm text-ink-500">
          <Link href="/comparativas" className="hover:text-ink">Comparativas</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{a.name} vs {b.name}</span>
        </nav>

        <Reveal className="mt-6 max-w-prose">
          <span className="tag w-fit">Comparativa técnica</span>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h1>
          <p className="mt-3 text-base leading-relaxed text-ink-500">
            Especificaciones cara a cara con los datos verificados de cada
            ficha. Todavía no tenemos un análisis redactado de este duelo:
            las diferencias clave se calculan directamente a partir de las
            fichas.
          </p>
        </Reveal>

        {/* Cabecera enfrentada, con un resplandor ambiental detrás para que
            el cristal de las tarjetas tenga algo que desenfocar. */}
        <div className="relative isolate mt-8">
          <div aria-hidden="true" className="ambient-glow inset-x-[15%] inset-y-[10%] blur-3xl" />
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:gap-6">
            <WatchFace watch={a} stats={stats[0]} other={stats[1]} />
            <span className="font-mono text-xs font-semibold text-ink-500 sm:text-sm">VS</span>
            <WatchFace watch={b} stats={stats[1]} other={stats[0]} />
          </div>
        </div>

        {/* Diferencias clave */}
        <Reveal className="mt-12">
          <h2 id="veredicto" className="scroll-mt-20 font-display text-2xl font-bold">
            Diferencias clave
          </h2>
          <div className={`mt-5 grid gap-5 ${radarSeries ? "lg:grid-cols-[1fr_1fr_0.9fr]" : "md:grid-cols-2"}`}>
            {pair.map((w, i) => {
              const other = pair[1 - i];
              const list = duelHighlights(stats[i], stats[1 - i]);
              return (
                <div key={w.slug} className="glass-panel flex flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-ink">
                    Dónde gana el {w.brand} {w.name}
                  </h3>
                  {list.length > 0 ? (
                    <ul className="mt-4 flex-1 space-y-3 text-sm leading-relaxed text-ink-500">
                      {list.map((h) => (
                        <li key={h.label}>
                          <HighlightBadges highlights={[h]} size="sm" className="justify-start" />
                          <p className="mt-1.5">
                            <NumText>{h.detail}</NumText>
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">
                      En los datos de nuestras fichas no destaca frente al{" "}
                      {other.brand} {other.name} en precio, peso, autonomía ni
                      sensores. Revisa sus pros y contras más abajo.
                    </p>
                  )}
                  <div className="mt-5">
                    <AffiliateButton watch={w} />
                  </div>
                </div>
              );
            })}
            {radarSeries && (
              <div className="glass-panel flex min-w-0 flex-col p-6 md:col-span-2 lg:col-span-1">
                <h3 className="font-display text-base font-bold text-ink">De un vistazo</h3>
                <div className="mt-4 flex flex-1 items-center justify-center">
                  <RadarChart
                    series={radarSeries}
                    caption="Valoración orientativa de 1 a 10, basada en las especificaciones y el precio de nuestras fichas."
                  />
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Tabla completa */}
        <Reveal className="mt-12">
          <h2 className="font-display text-2xl font-bold">Especificaciones técnicas cara a cara</h2>
          <SpecTable
            headers={pair.map((w) => `${w.brand} ${w.name}`)}
            rows={rows}
            tableClassName="min-w-[36rem]"
          />
          <p className="mt-2 text-xs text-ink-500">
            Los precios cambian con frecuencia: comprueba el precio actual en la tienda.
          </p>
        </Reveal>

        {/* Pros y contras */}
        <Reveal className="mt-12">
          <h2 className="font-display text-2xl font-bold">Pros y contras</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {pair.map((w) => (
              <div key={w.slug} className="glass-panel flex flex-col p-6">
                <h3 className="font-display text-lg font-bold text-ink">
                  {w.brand} {w.name}
                </h3>
                {w.summary && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{w.summary}</p>
                )}
                <p className="mt-4 text-sm font-semibold text-signal-green">A favor</p>
                <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink-500">
                  {w.pros.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="text-signal-green">+</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-ink-500">A tener en cuenta</p>
                <ul className="mt-2 flex-1 space-y-2 text-sm leading-relaxed text-ink-500">
                  {w.cons.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span>–</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <AffiliateButton watch={w} />
                  <Link
                    href={`/relojes/${w.slug}`}
                    className="text-sm font-semibold text-accent hover:underline"
                  >
                    Ver análisis completo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {related.length > 0 && (
          <Reveal className="mt-14">
            <h2 className="font-display text-xl font-bold">Comparativas con análisis</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {related.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/comparativas/${c.slug}`}
                    className="press lift glass-panel inline-flex min-h-[36px] items-center rounded-full px-3 py-1.5 text-xs font-medium text-ink hover:border-accent hover:text-accent-dark"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal className="mt-14">
          <h2 className="font-display text-xl font-bold">Compara otro duelo</h2>
          <VersusMatcher {...getMatcherData()} initialA={a.slug} initialB={b.slug} className="mt-5" />
        </Reveal>

        <p className="mt-10 max-w-prose text-xs text-ink-500">
          Como afiliado de Amazon, {SITE_NAME} obtiene ingresos por las compras
          adscritas que cumplen los requisitos aplicables.
        </p>
      </Container>
    </>
  );
}
