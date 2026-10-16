import Image from "next/image";
import Link from "next/link";
import { Watch, PRICE_RANGE_LABELS } from "@/lib/types/watch";
import AffiliateButton from "@/components/watches/AffiliateButton";
import NumText from "@/components/ui/NumText";
import { formatEuros } from "@/lib/format";

function keySpecs(watch: Watch): string[] {
  const specs: string[] = [];

  if (watch.gpsAccuracyNotes?.toLowerCase().includes("multibanda real")) {
    specs.push("GPS multibanda real (doble frecuencia)");
  } else if (watch.gps) {
    specs.push("GPS integrado (GLONASS / Galileo)");
  }

  if (watch.screen.type === "AMOLED") {
    specs.push("Pantalla AMOLED a color");
  } else if (watch.screen.type) {
    specs.push(`Pantalla ${watch.screen.type}, siempre visible`);
  }

  if (watch.batteryLifeHours) {
    const days = Math.round(watch.batteryLifeHours / 24);
    specs.push(`Hasta ${days} días de autonomía`);
  }

  return specs.slice(0, 3);
}

export default function WatchRowCard({ watch }: { watch: Watch }) {
  const displayPrice = watch.observedPrice ?? watch.officialPrice;
  const specs = keySpecs(watch);

  return (
    <div className="card-spotlight flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm sm:flex-col md:flex-row">
      {/* Imagen — arriba en móvil, columna derecha (35%) en desktop */}
      <div className="order-1 flex items-center justify-center overflow-hidden bg-ink-700/[0.03] p-8 sm:aspect-[4/3] md:order-2 md:aspect-auto md:w-[35%]">
        {watch.coverImage ? (
          <div className="card-spotlight-media relative h-56 w-full">
            <Image
              src={watch.coverImage.src}
              alt={watch.coverImage.alt}
              fill
              sizes="(min-width: 768px) 35vw, 100vw"
              className="object-contain"
            />
          </div>
        ) : (
          <div className="card-spotlight-media flex h-28 w-28 items-center justify-center rounded-full border border-line bg-surface">
            <span className="font-display text-sm font-semibold text-ink-500">
              {watch.brand}
            </span>
          </div>
        )}
      </div>

      {/* Información y CTAs — columna izquierda (65%) en desktop */}
      <div className="order-2 flex flex-1 flex-col gap-4 p-6 sm:p-7 md:order-1 md:w-[65%]">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-500">
            {watch.brand}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2">
            <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
              {watch.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {watch.priceRange && (
                <span className="tag">{PRICE_RANGE_LABELS[watch.priceRange]}</span>
              )}
              {watch.screen.type && <span className="tag">{watch.screen.type}</span>}
            </div>
          </div>
        </div>

        {specs.length > 0 && (
          <ul className="space-y-1.5 text-sm text-ink-500">
            {specs.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-accent">·</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-2">
          <p className="font-display text-2xl font-bold text-ink">
            <NumText>{displayPrice ? `desde ${formatEuros(displayPrice)}` : "Precio sin verificar"}</NumText>
          </p>
          <div className="flex flex-wrap gap-3">
            <AffiliateButton watch={watch} />
            <Link
              href={`/relojes/${watch.slug}`}
              className="btn-fx btn-fx-neutral rounded-card border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink"
            >
              Ver ficha
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
