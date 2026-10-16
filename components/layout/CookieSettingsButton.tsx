"use client";

import { useRouter } from "next/navigation";

declare global {
  interface Window {
    // API del mensaje de consentimiento de Google (Privacidad y
    // mensajes de AdSense). Solo existe si el mensaje RGPD está
    // publicado en AdSense y el script ya se ha cargado.
    googlefc?: {
      showRevocationMessage?: () => void;
    };
  }
}

// Acceso permanente para cambiar o retirar el consentimiento de
// cookies. Si el CMP de Google no está disponible (no configurado,
// aún sin cargar o bloqueado), lleva a la política de cookies, que
// explica cómo gestionarlas.
export default function CookieSettingsButton({
  className = "",
}: {
  className?: string;
}) {
  const router = useRouter();

  function handleClick() {
    const showRevocation = window.googlefc?.showRevocationMessage;
    if (typeof showRevocation === "function") {
      showRevocation.call(window.googlefc);
      return;
    }
    router.push("/politica-de-cookies");
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      Configurar cookies
    </button>
  );
}
