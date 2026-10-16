"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT_ID, ADSENSE_SLOTS } from "@/lib/site";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

// Bloque de anuncio de AdSense con el espacio reservado de antemano:
// el contenedor y el <ins> tienen la misma altura fija (250 px en
// móvil, 280 px desde sm), así que cuando el anuncio carga no empuja
// el contenido (CLS = 0). Es un anuncio de tamaño fijo, por eso no
// lleva data-ad-format: AdSense rellena el alto indicado.
//
// Sin ID de bloque (data-ad-slot) no hay anuncio que pedir: el
// componente no renderiza nada para no dejar huecos vacíos en la
// página. El script adsbygoogle.js se carga una sola vez, tras la
// primera interacción (components/ads/AdSenseLoader.tsx); push() encola
// el bloque aunque aún no haya cargado.
export default function AdBanner({
  slot = ADSENSE_SLOTS.inArticle,
  className = "",
}: {
  slot?: string | null;
  className?: string;
}) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!slot || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Bloqueadores de anuncios o doble push: el hueco queda reservado.
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <aside
      aria-label="Publicidad"
      className={`my-10 overflow-hidden rounded-card bg-subtle ${className}`}
    >
      <ins
        className="adsbygoogle block h-[250px] w-full sm:h-[280px]"
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
      />
    </aside>
  );
}
