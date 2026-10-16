"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { ADSENSE_CLIENT_ID } from "@/lib/site";

// Primeras señales de que hay una persona usando la página. Ninguna se
// dispara sola durante la carga, así que el script no compite con la
// hidratación ni con el renderizado inicial.
const INTERACTION_EVENTS = [
  "scroll",
  "pointerdown",
  "touchstart",
  "keydown",
  "mousemove",
] as const;

// AdSense (adsbygoogle.js, Anuncios automáticos y el mensaje de
// consentimiento de Funding Choices, que este mismo script inyecta) se
// carga con la primera interacción, no al cargar la página. Solo con
// lazyOnload se ejecutaba igualmente en los primeros segundos: sus
// tareas largas subían el TBT, sus iframes usan el evento obsoleto
// "unload" y sus fallos de red ensuciaban la consola. Los bloques de
// AdBanner que hagan push() antes quedan en la cola window.adsbygoogle
// hasta que el script carga.
export default function AdSenseLoader() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) return;
    const trigger = () => setLoad(true);
    for (const event of INTERACTION_EVENTS) {
      window.addEventListener(event, trigger, { once: true, passive: true });
    }
    return () => {
      for (const event of INTERACTION_EVENTS) {
        window.removeEventListener(event, trigger);
      }
    };
  }, [load]);

  if (!load) return null;

  // lazyOnload tras la interacción: si el primer toque llega antes de
  // que termine la carga (habitual en móvil), el script sigue esperando
  // al evento load y a un hueco libre del hilo principal.
  //
  // onError: con bloqueadores de anuncios o sin red el script no carga.
  // Es un caso esperado y se ignora a propósito: los anuncios no
  // aparecen, CookieSettingsButton lleva a la política de cookies y no
  // hay nada que reintentar. next/script ya captura el error (no lanza
  // excepciones); el aviso de red de la consola lo escribe el navegador
  // y ningún handler lo evita: por eso el script no se pide en la carga.
  return (
    <Script
      id="adsense"
      strategy="lazyOnload"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
      onError={() => {}}
    />
  );
}
