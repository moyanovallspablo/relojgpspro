import Image from "next/image";
import Link from "next/link";
import { Watch, PRICE_RANGE_LABELS } from "@/lib/types/watch";
import { getAffiliateUrl } from "@/lib/affiliates";
import AffiliateButton from "@/components/watches/AffiliateButton";
import NumText from "@/components/ui/NumText";
import { formatEuros } from "@/lib/format";

export default function WatchCard({ watch }: { watch: Watch }) {
  // Precio: se muestra solo si hay un dato verificado. Se prioriza el
  // precio observado en tienda (más útil para decidir hoy) y se cae al
  // oficial si es lo único disponible.
  const displayPrice = watch.observedPrice ?? watch.officialPrice;

  return (
    <div className="card card-spotlight group flex flex-col overflow-hidden">
      <Link href={`/relojes/${watch.slug}`} className="flex flex-1 flex-col">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-ink-700/[0.03]">
          {watch.coverImage ? (
            <Image
              src={watch.coverImage.src}
              alt={watch.coverImage.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="card-spotlight-media object-contain p-6"
            />
          ) : (
            <div className="card-spotlight-media flex h-24 w-24 items-center justify-center rounded-full border border-line bg-surface">
              <span className="font-display text-xs font-semibold text-ink-500">
                {watch.brand}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-500">
              {watch.brand}
            </p>
            <h3 className="mt-0.5 font-display text-lg font-bold text-ink group-hover:text-accent-dark">
              {watch.name}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {watch.priceRange && (
              <span className="tag">{PRICE_RANGE_LABELS[watch.priceRange]}</span>
            )}
            {watch.screen.type && <span className="tag">{watch.screen.type}</span>}
            {watch.maps && <span className="tag">Mapas</span>}
          </div>
          <div className="mt-auto flex items-center justify-between pt-2">
            <p className="font-display text-xl font-bold text-ink">
              <NumText>{displayPrice ? `desde ${formatEuros(displayPrice)}` : "Precio sin verificar"}</NumText>
            </p>
            <span className="text-sm font-semibold text-accent-dark">
              Ver ficha
            </span>
          </div>
        </div>
      </Link>

      {/* Enlace de afiliado secundario: solo si el reloj tiene ASIN o affiliateUrl */}
      {getAffiliateUrl(watch) && (
        <div className="border-t border-line px-5 py-3">
          <AffiliateButton
            watch={watch}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
}

