// Datos identificativos del titular exigidos por el art. 10 de la
// LSSI-CE y por el art. 13 del RGPD. Se muestran en las tres páginas
// legales (aviso legal, privacidad y cookies) y en /contacto.

import { SITE_NAME, SITE_URL } from "@/lib/site";

export const LEGAL_OWNER = {
  siteName: SITE_NAME, // denominación comercial del sitio, no una sociedad
  siteUrl: SITE_URL, // https://www.relojgpspro.com
  holder: "Pablo Moyano Valls",
  holderType: "Persona física",
  // Obligatorios (art. 10.1 LSSI-CE): NIF/DNI y domicilio postal. Si
  // alguno vuelve a ser null, el build de producción en Vercel falla
  // (ver abajo).
  taxId: "08371978R" as string | null,
  postalAddress: "06600, Cabeza del Buey, Badajoz, España" as string | null,
  city: "Badajoz, España",
  email: "contacto@relojgpspro.com",
};

export const LEGAL_UPDATED_AT = "6 de octubre de 2026";

// Texto provisional para builds locales y previews mientras falten
// datos: en producción no llega a mostrarse por la comprobación de abajo.
export function legalValue(value: string | null): string {
  return value ?? "[pendiente de completar en lib/legal.ts]";
}

// El aviso legal no puede publicarse sin NIF ni domicilio: el build de
// producción de Vercel (VERCEL_ENV=production) se detiene con un error
// claro. Los builds locales y las previews sí funcionan.
const missingLegalFields = [
  !LEGAL_OWNER.taxId && "taxId (NIF)",
  !LEGAL_OWNER.postalAddress && "postalAddress (domicilio postal)",
].filter(Boolean);

if (missingLegalFields.length > 0 && process.env.VERCEL_ENV === "production") {
  throw new Error(
    `lib/legal.ts: faltan datos obligatorios del titular (art. 10.1 LSSI-CE): ${missingLegalFields.join(", ")}. Complétalos antes de desplegar a producción.`
  );
}
