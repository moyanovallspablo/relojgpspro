import { SCORE_AXES } from "@/lib/data/scores";
import type { WatchScores } from "@/lib/types/scores";

export interface RadarSeries {
  name: string;
  scores: WatchScores;
  // Color del polígono y de la leyenda (hex).
  color: string;
}

// Geometría en unidades del viewBox; el SVG escala al ancho del contenedor,
// así que las etiquetas usan más unidades en pantallas estrechas (ver
// AxisLabel) para no quedarse en 8 px en móvil.
const WIDTH = 400;
const HEIGHT = 322;
const CX = WIDTH / 2;
const CY = 152;
const RADIUS = 110;
const LABEL_RADIUS = RADIUS + 16;
const LINE_HEIGHT = 17;
const MAX_SCORE = 10;
const RINGS = [2, 4, 6, 8, 10];

// La segunda serie va con trazo discontinuo para que se distingan
// también sin depender del color.
const DASHES = [undefined, "6 4"];

// Escalonado entre la aparición de un reloj y el siguiente.
const SERIES_DELAY = 0.15;

// Estilos del gráfico, solo CSS (sin JS de cliente):
//
// - Entrada: la red gira de -15° a 0° y cada polígono crece desde el
//   centro del gráfico con un rebote elástico, escalonado por reloj.
//   transform-origin va en unidades del viewBox (transform-box: view-box).
// - Si el gráfico empieza fuera de pantalla, Reveal le pone .reveal-hidden
//   hasta que aparece; mientras tanto la animación queda anulada y, al
//   quitarse la clase, vuelve a empezar desde cero. Así en móvil se ve al
//   hacer scroll en vez de reproducirse fuera de la vista.
// - Hover: al pasar por la leyenda o por los vértices de un reloj, su
//   polígono gana grosor y opacidad y el otro se atenúa. Se resuelve con
//   :has() en la figura porque la leyenda está fuera del SVG; un <style>
//   dentro de un SVG en línea se aplica a todo el documento.
function radarCss(seriesCount: number) {
  const hover = Array.from({ length: seriesCount }, (_, i) => {
    const active = `.radar-chart:has([data-series="${i}"]:hover)`;
    return (
      `${active} .radar-series[data-series="${i}"] .radar-shape{stroke-width:4;fill-opacity:1}` +
      `${active} [data-series]:not([data-series="${i}"]){opacity:.3}`
    );
  }).join("");

  return (
    `@keyframes radar-spin{from{opacity:0;transform:rotate(-15deg) scale(.9)}to{opacity:1;transform:none}}` +
    `@keyframes radar-grow{from{transform:scale(0)}to{transform:scale(1)}}` +
    `@keyframes radar-fade{from{opacity:0}to{opacity:1}}` +
    `.radar-grid,.radar-grow{transform-box:view-box;transform-origin:${CX}px ${CY}px}` +
    `.radar-grid{animation:radar-spin .7s cubic-bezier(.22,1,.36,1) both}` +
    `.radar-grow{animation:radar-grow .9s cubic-bezier(.34,1.56,.64,1) both}` +
    `.radar-labels{animation:radar-fade .5s ease-out .25s both}` +
    `.reveal-hidden .radar-anim{animation:none}` +
    `.radar-series,.radar-legend-item{transition:opacity .25s ease}` +
    `.radar-shape{pointer-events:none;fill-opacity:.8;transition:stroke-width .25s ease,fill-opacity .25s ease}` +
    `.radar-dot{transform-box:fill-box;transform-origin:center;transition:transform .2s ease}` +
    `.radar-vertex:hover .radar-dot{transform:scale(1.6)}` +
    hover +
    `@media (prefers-reduced-motion:reduce){.radar-anim{animation:none}` +
    `.radar-series,.radar-legend-item,.radar-shape,.radar-dot{transition:none}}`
  );
}

function polar(axisIndex: number, radius: number): [number, number] {
  const angle = -Math.PI / 2 + (axisIndex * 2 * Math.PI) / SCORE_AXES.length;
  return [
    Math.round((CX + radius * Math.cos(angle)) * 100) / 100,
    Math.round((CY + radius * Math.sin(angle)) * 100) / 100,
  ];
}

function toPoints(coords: [number, number][]) {
  return coords.map(([x, y]) => `${x},${y}`).join(" ");
}

function clampScore(value: number) {
  return Math.min(MAX_SCORE, Math.max(0, value));
}

// Etiqueta de un eje, alineada según el lado del gráfico en el que cae.
function AxisLabel({ index, lines }: { index: number; lines: string[] }) {
  const [x, y] = polar(index, LABEL_RADIUS);
  const dx = x - CX;
  const anchor = Math.abs(dx) < 1 ? "middle" : dx > 0 ? "start" : "end";

  // Arriba, las líneas crecen hacia arriba; abajo, hacia abajo; en los
  // lados, se centran en vertical sobre el punto.
  const dy = y - CY;
  let firstY: number;
  if (Math.abs(dx) < 1 && dy < 0) firstY = y - (lines.length - 1) * LINE_HEIGHT;
  else if (Math.abs(dx) < 1) firstY = y + LINE_HEIGHT - 4;
  else firstY = y - ((lines.length - 1) * LINE_HEIGHT) / 2;

  return (
    <text
      x={x}
      y={firstY}
      textAnchor={anchor}
      dominantBaseline={Math.abs(dx) < 1 ? "auto" : "middle"}
      className="fill-ink-700 text-[16px] font-semibold sm:text-[14px] lg:text-[13px]"
    >
      {lines.map((line, i) => (
        <tspan key={line} x={x} dy={i === 0 ? 0 : LINE_HEIGHT}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

// Gráfico de radar en SVG sin dependencias ni JavaScript de cliente. El
// SVG es decorativo para los lectores de pantalla: los datos se exponen
// en una tabla oculta visualmente. Los ids de los degradados son fijos
// (radarGradient1, radarGradient2…): hay un solo gráfico por página.
export default function RadarChart({
  series,
  caption,
}: {
  series: RadarSeries[];
  caption: string;
}) {
  return (
    <figure className="radar-chart flex flex-col items-center">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full max-w-md font-body"
        aria-hidden="true"
        focusable="false"
      >
        <style dangerouslySetInnerHTML={{ __html: radarCss(series.length) }} />

        {/* Degradado radial por reloj: más color hacia las notas altas */}
        <defs>
          {series.map((s, si) => (
            <radialGradient
              key={s.name}
              id={`radarGradient${si + 1}`}
              gradientUnits="userSpaceOnUse"
              cx={CX}
              cy={CY}
              r={RADIUS}
            >
              <stop offset="0%" stopColor={s.color} stopOpacity={0.04} />
              <stop offset="100%" stopColor={s.color} stopOpacity={0.4} />
            </radialGradient>
          ))}
        </defs>

        {/* Red hexagonal de fondo y escala sobre el eje superior */}
        <g className="radar-anim radar-grid">
          <g className="fill-none stroke-line" strokeWidth={1}>
            {RINGS.map((ring) => (
              <polygon
                key={ring}
                points={toPoints(
                  SCORE_AXES.map((_, i) => polar(i, (RADIUS * ring) / MAX_SCORE)),
                )}
                className={ring === MAX_SCORE ? "stroke-ink-300" : undefined}
              />
            ))}
            {SCORE_AXES.map((axis, i) => {
              const [x, y] = polar(i, RADIUS);
              return <line key={axis.key} x1={CX} y1={CY} x2={x} y2={y} />;
            })}
          </g>
          <g className="fill-ink-500 text-[11px]">
            {RINGS.map((ring) => {
              const [, y] = polar(0, (RADIUS * ring) / MAX_SCORE);
              return (
                <text key={ring} x={CX + 5} y={y + 3}>
                  {ring}
                </text>
              );
            })}
          </g>
        </g>

        {/* Polígonos de cada reloj. El <g> exterior recibe el hover y la
            atenuación; el interior, la animación de entrada (si los dos
            usaran opacity, la animación taparía la atenuación). */}
        {series.map((s, si) => {
          const coords = SCORE_AXES.map((axis, i) =>
            polar(i, (RADIUS * clampScore(s.scores[axis.key])) / MAX_SCORE),
          );
          return (
            <g key={s.name} className="radar-series" data-series={si}>
              <g
                className="radar-anim radar-grow"
                style={{ animationDelay: `${0.2 + si * SERIES_DELAY}s` }}
              >
                <polygon
                  className="radar-shape"
                  points={toPoints(coords)}
                  fill={`url(#radarGradient${si + 1})`}
                  stroke={s.color}
                  strokeWidth={2.5}
                  strokeLinejoin="round"
                  strokeDasharray={DASHES[si]}
                />
                {coords.map(([x, y], i) => (
                  <g key={SCORE_AXES[i].key} className="radar-vertex">
                    <title>
                      {`${s.name} · ${SCORE_AXES[i].label}: ${s.scores[SCORE_AXES[i].key]}/10`}
                    </title>
                    {/* Área de hover más grande que el punto visible */}
                    <circle cx={x} cy={y} r={11} fill="transparent" />
                    <circle
                      className="radar-dot stroke-surface"
                      cx={x}
                      cy={y}
                      r={4}
                      fill={s.color}
                      strokeWidth={1.5}
                    />
                  </g>
                ))}
              </g>
            </g>
          );
        })}

        <g className="radar-anim radar-labels">
          {SCORE_AXES.map((axis, i) => (
            <AxisLabel key={axis.key} index={i} lines={axis.lines} />
          ))}
        </g>
      </svg>

      <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-700">
        {series.map((s, si) => (
          <li
            key={s.name}
            className="radar-legend-item flex items-center gap-2"
            data-series={si}
          >
            <svg width="28" height="10" aria-hidden="true" focusable="false">
              <line
                x1="2"
                y1="5"
                x2="26"
                y2="5"
                stroke={s.color}
                strokeWidth={3}
                strokeLinecap="round"
                strokeDasharray={DASHES[si]}
              />
            </svg>
            <span className="font-semibold">{s.name}</span>
          </li>
        ))}
      </ul>

      <figcaption className="mt-3 text-center text-xs text-ink-500">
        {caption}
      </figcaption>

      {/* sr-only va en un div: overflow no se aplica a las tablas, que
          desbordarían la página en móvil. */}
      <div className="sr-only">
        <table>
          <caption>Puntuación de 1 a 10 por categoría</caption>
          <thead>
            <tr>
              <th scope="col">Categoría</th>
              {series.map((s) => (
                <th key={s.name} scope="col">
                  {s.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SCORE_AXES.map((axis) => (
              <tr key={axis.key}>
                <th scope="row">{axis.label}</th>
                {series.map((s) => (
                  <td key={s.name}>{s.scores[axis.key]} de 10</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
