import type { Watch } from "@/lib/types/watch";
import { AMAZON_AFFILIATE_TAG } from "@/lib/site";

// Enlace canónico de producto en Amazon.es con el tag de afiliado.
export function amazonProductUrl(asin: string, tag = AMAZON_AFFILIATE_TAG) {
  const url = new URL(`https://www.amazon.es/dp/${encodeURIComponent(asin)}`);
  url.searchParams.set("tag", tag);
  return url.toString();
}

// URL de compra de un reloj: affiliateUrl explícita o, si no, la de
// Amazon a partir del ASIN. null = no se muestra botón de compra.
export function getAffiliateUrl(
  watch: Pick<Watch, "amazonAsin" | "affiliateUrl">,
): string | null {
  if (watch.affiliateUrl) return watch.affiliateUrl;
  if (watch.amazonAsin) return amazonProductUrl(watch.amazonAsin);
  return null;
}
