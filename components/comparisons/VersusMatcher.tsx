"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { MatcherData, MatcherWatch } from "@/lib/data/duels";
import AffiliateButton from "@/components/watches/AffiliateButton";
import HighlightBadges from "@/components/comparisons/HighlightBadges";
import NumText from "@/components/ui/NumText";
import { duelHighlights } from "@/lib/duelInsights";
import { formatApproxEuros } from "@/lib/format";

// Selector de duelos: dos desplegables con buscador (reloj A y reloj B),
// botón VS para intercambiarlos, vista previa enfrentada y accesos a los
// duelos más buscados. Los datos llegan ya recortados desde el servidor
// (getMatcherData en lib/data/duels.ts).
//
// "Ver comparativa" apunta a la comparativa redactada si existe en
// cualquier orden; si no, a la comparativa técnica generada en
// /comparativas/<a>-vs-<b>.

function formatPrice(price: number | null) {
  return formatApproxEuros(price, "Precio sin verificar");
}

// Sin tildes ni mayúsculas: "polar pacer" encuentra "Polar Pacer".
function normalize(text: string) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function Thumb({ watch, size }: { watch: MatcherWatch; size: number }) {
  return (
    <span
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-white"
      style={{ width: size, height: size }}
    >
      {watch.image ? (
        <Image
          src={watch.image.src}
          alt=""
          fill
          sizes={`${size}px`}
          className="object-contain p-0.5"
        />
      ) : (
        <span className="font-display text-[10px] font-bold text-ink-500">
          {watch.brand.slice(0, 1)}
        </span>
      )}
    </span>
  );
}

function WatchPicker({
  label,
  options,
  value,
  takenSlug,
  onChange,
}: {
  label: string;
  options: MatcherWatch[];
  value: string;
  // Reloj elegido en el otro lado: se muestra, pero no se puede elegir.
  takenSlug: string;
  onChange: (slug: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const listId = `${id}-list`;
  const selected = options.find((w) => w.slug === value);

  const filtered = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    return options.filter((w) => {
      const haystack = normalize(`${w.brand} ${w.name}`);
      return terms.every((t) => haystack.includes(t));
    });
  }, [options, query]);

  // Al abrir: búsqueda vacía, foco en el buscador y el reloj actual activo.
  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(Math.max(0, options.findIndex((w) => w.slug === value)));
    inputRef.current?.focus();
  }, [open, options, value]);

  // Cierra al pulsar fuera.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.getElementById(`${id}-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [open, active, id]);

  function choose(watch: MatcherWatch | undefined) {
    if (!watch || watch.slug === takenSlug) return;
    onChange(watch.slug);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (filtered.length === 0) return;
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActive((i) => (i + step + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(filtered[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className="relative min-w-0">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-ink-500">
        {label}
      </p>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${selected ? `${selected.brand} ${selected.name}` : "sin elegir"}`}
        onClick={() => setOpen((o) => !o)}
        className="press mt-2 flex min-h-[64px] w-full items-center gap-3 rounded-card border border-zinc-200/80 bg-white/80 px-3 py-2 text-left shadow-sm hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark"
      >
        {selected ? (
          <>
            <Thumb watch={selected} size={44} />
            <span className="min-w-0 flex-1">
              <span className="block text-xs text-ink-500">{selected.brand}</span>
              <span className="block truncate font-display font-bold text-ink">
                {selected.name}
              </span>
            </span>
          </>
        ) : (
          <span className="flex-1 text-sm font-medium text-ink-500">Elige un reloj</span>
        )}
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className={`h-4 w-4 shrink-0 text-ink-500 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </button>

      {open && (
        <div className="glass-panel absolute inset-x-0 top-full z-40 mt-2 p-2 shadow-lg">
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={filtered.length > 0 ? `${id}-${active}` : undefined}
            aria-label={`Buscar reloj (${label})`}
            placeholder="Busca por marca o modelo"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            className="w-full rounded-md border border-line bg-surface px-3 py-2 text-[1rem] text-ink placeholder:text-ink-500 focus:border-accent focus:outline-none sm:text-sm"
          />
          <ul
            id={listId}
            role="listbox"
            aria-label={label}
            className="mt-2 max-h-72 overflow-y-auto overscroll-contain"
          >
            {filtered.map((w, i) => {
              const taken = w.slug === takenSlug;
              return (
                <li
                  key={w.slug}
                  id={`${id}-${i}`}
                  role="option"
                  aria-selected={w.slug === value}
                  aria-disabled={taken}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(w)}
                  className={`press flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 ${
                    i === active ? "bg-accent-tint" : ""
                  } ${taken ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  <Thumb watch={w} size={32} />
                  <span className="min-w-0 flex-1 text-sm">
                    <span className="text-ink-500">{w.brand} </span>
                    <span className="font-semibold text-ink">{w.name}</span>
                  </span>
                  {taken ? (
                    <span className="shrink-0 text-[11px] text-ink-500">En el otro lado</span>
                  ) : (
                    w.slug === value && (
                      <span aria-hidden="true" className="shrink-0 text-accent-dark">✓</span>
                    )
                  )}
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="px-2 py-4 text-sm text-ink-500">
                Ningún reloj coincide con «{query}».
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

function PreviewSide({ watch, other }: { watch: MatcherWatch; other: MatcherWatch }) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-2 text-center">
      <div className="relative aspect-square w-20 sm:w-28">
        {watch.image ? (
          <Image
            src={watch.image.src}
            alt={watch.image.alt}
            fill
            sizes="112px"
            className="object-contain"
          />
        ) : (
          <span className="flex h-full items-center justify-center font-display text-sm font-semibold text-ink-500">
            {watch.brand}
          </span>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-wide text-ink-500">
          {watch.brand}
        </p>
        <Link
          href={`/relojes/${watch.slug}`}
          className="font-display text-sm font-bold text-ink hover:text-accent sm:text-[1rem]"
        >
          {watch.name}
        </Link>
        <p className="mt-0.5 text-sm text-ink-500">
          <NumText>{formatPrice(watch.price)}</NumText>
        </p>
      </div>
      <HighlightBadges highlights={duelHighlights(watch.stats, other.stats)} max={2} size="sm" />
      <AffiliateButton watch={watch} variant="compact" label="Ver precio" />
    </div>
  );
}

export default function VersusMatcher({
  watches,
  publishedSlugs,
  popular,
  initialA = "",
  initialB = "",
  className = "",
}: MatcherData & { initialA?: string; initialB?: string; className?: string }) {
  const [a, setA] = useState(initialA);
  const [b, setB] = useState(initialB);
  const [swaps, setSwaps] = useState(0);
  const published = useMemo(() => new Set(publishedSlugs), [publishedSlugs]);

  const watchA = watches.find((w) => w.slug === a);
  const watchB = watches.find((w) => w.slug === b);

  // Comparativa redactada en cualquier orden; si no, la generada A-vs-B.
  let target: string | null = null;
  if (watchA && watchB) {
    const forward = `${a}-vs-${b}`;
    const reverse = `${b}-vs-${a}`;
    target = published.has(forward) ? forward : published.has(reverse) ? reverse : forward;
  }
  const hasArticle = target !== null && published.has(target);

  function swap() {
    setA(b);
    setB(a);
    setSwaps((n) => n + 1);
  }

  return (
    <div className={`glass-panel relative z-10 p-4 sm:p-6 ${className}`}>
      <div className="grid items-end gap-3 md:grid-cols-[1fr_auto_1fr] md:gap-5">
        <div key={`a-${swaps}`} className={swaps > 0 ? "matcher-swap-in" : ""}>
          <WatchPicker label="Reloj A" options={watches} value={a} takenSlug={b} onChange={setA} />
        </div>

        <button
          type="button"
          onClick={swap}
          disabled={!a && !b}
          aria-label="Intercambiar reloj A y reloj B"
          title="Intercambiar"
          className="btn-fx btn-fx-neutral relative mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-white hover:bg-ink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark disabled:cursor-not-allowed disabled:opacity-60 md:mb-1"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 48 48"
            className="matcher-ring absolute inset-0 h-full w-full text-white/70"
            style={{ "--matcher-turns": swaps } as React.CSSProperties}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7.1 30.2A18 18 0 0 1 39.6 15" />
            <path d="M35.1 12.9 39.6 15l.4-5" />
            <path d="M40.9 17.8A18 18 0 0 1 8.4 33" />
            <path d="M12.9 35.1 8.4 33l-.4 5" />
          </svg>
          <span className="relative font-mono text-xs font-semibold">VS</span>
        </button>

        <div key={`b-${swaps}`} className={swaps > 0 ? "matcher-swap-in" : ""}>
          <WatchPicker label="Reloj B" options={watches} value={b} takenSlug={a} onChange={setB} />
        </div>
      </div>

      {watchA && watchB && target ? (
        <div className="mt-6 rounded-card border border-zinc-200/80 bg-white/70 p-4 shadow-sm sm:p-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:gap-6">
            <PreviewSide watch={watchA} other={watchB} />
            <span className="font-mono text-xs font-semibold text-ink-500">VS</span>
            <PreviewSide watch={watchB} other={watchA} />
          </div>
          <div className="mt-6 flex flex-col items-center gap-3 border-t border-line pt-5 sm:flex-row sm:justify-between">
            <p className="text-center text-xs text-ink-500 sm:text-left">
              {hasArticle
                ? "Comparativa con análisis y veredicto de nuestra redacción."
                : "Comparativa técnica cara a cara con los datos verificados de cada ficha."}
            </p>
            <Link href={`/comparativas/${target}`} className="btn-primary w-full shrink-0 sm:w-auto">
              [VER COMPARATIVA]
            </Link>
          </div>
        </div>
      ) : (
        <p className="mt-5 text-center text-sm text-ink-500">
          Elige dos relojes para verlos cara a cara.
        </p>
      )}

      {popular.length > 0 && (
        <div className="mt-6 border-t border-line pt-5">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-ink-500">
            Duelos más buscados
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {popular.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/comparativas/${d.slug}`}
                  className="press lift inline-flex min-h-[36px] items-center rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-ink hover:border-accent hover:text-accent-dark"
                >
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
