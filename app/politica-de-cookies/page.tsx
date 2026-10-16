import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection, legalLinkClass } from "@/components/layout/LegalPage";
import { LEGAL_OWNER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Qué cookies usa RelojGPSPro, para qué sirven, cuánto duran y cómo cambiar o retirar el consentimiento.",
  alternates: { canonical: "/politica-de-cookies" },
};

// Cookies que puede instalar Google al mostrar anuncios y el mensaje de
// consentimiento. Nombres y duraciones según la documentación pública de
// Google a la fecha de actualización; Google puede cambiarlos.
const COOKIES = [
  {
    name: "FCCDCF",
    provider: "Google (mensaje de consentimiento) · dominio de esta web",
    type: "Técnica",
    purpose: "Guardar las preferencias de consentimiento que elige el usuario.",
    duration: "13 meses",
  },
  {
    name: "__gads",
    provider: "Google AdSense · dominio de esta web",
    type: "Publicidad",
    purpose: "Medir las interacciones con los anuncios y limitar cuántas veces se muestra cada uno.",
    duration: "13 meses",
  },
  {
    name: "__gpi",
    provider: "Google AdSense · dominio de esta web",
    type: "Publicidad",
    purpose: "Identificador para gestionar y medir los anuncios mostrados en este sitio.",
    duration: "13 meses",
  },
  {
    name: "__eoi",
    provider: "Google AdSense · dominio de esta web",
    type: "Publicidad (seguridad)",
    purpose: "Detectar y prevenir el fraude y los abusos en los anuncios.",
    duration: "6 meses",
  },
  {
    name: "IDE",
    provider: "Google DoubleClick · doubleclick.net",
    type: "Publicidad",
    purpose: "Mostrar anuncios personalizados y medir su eficacia.",
    duration: "13 meses (EEE, Suiza y Reino Unido)",
  },
  {
    name: "DSID",
    provider: "Google DoubleClick · doubleclick.net",
    type: "Publicidad",
    purpose: "Recordar si el usuario ha aceptado la personalización de anuncios e identificar a usuarios con sesión iniciada en Google.",
    duration: "2 semanas",
  },
  {
    name: "test_cookie",
    provider: "Google DoubleClick · doubleclick.net",
    type: "Publicidad (comprobación)",
    purpose: "Comprobar si el navegador acepta cookies.",
    duration: "15 minutos",
  },
];

const BROWSERS = [
  {
    name: "Google Chrome",
    steps: "Configuración → Privacidad y seguridad → Cookies de terceros / Datos de sitios.",
  },
  {
    name: "Mozilla Firefox",
    steps: "Ajustes → Privacidad & Seguridad → Cookies y datos del sitio.",
  },
  {
    name: "Safari (macOS)",
    steps: "Ajustes → Privacidad → Gestionar datos de sitios web / Bloquear todas las cookies.",
  },
  {
    name: "Safari (iPhone y iPad)",
    steps: "Ajustes del sistema → Safari → Bloquear todas las cookies.",
  },
  {
    name: "Microsoft Edge",
    steps: "Configuración → Cookies y permisos del sitio → Administrar y eliminar cookies y datos del sitio.",
  },
];

export default function PoliticaDeCookiesPage() {
  return (
    <LegalPage label="Información legal" title="Política de cookies">
      <LegalSection title="1. Qué son las cookies">
        <p>
          Las cookies son pequeños archivos que un sitio web guarda en el
          navegador del usuario para recordar información sobre su visita:
          por ejemplo, sus preferencias o cómo navega por las páginas. El
          artículo 22.2 de la LSSI-CE exige informar sobre ellas y, salvo en
          el caso de las cookies técnicas, obtener el consentimiento del
          usuario antes de instalarlas.
        </p>
      </LegalSection>

      <LegalSection title="2. Cookies que usa este sitio">
        <p>
          {LEGAL_OWNER.siteName} no instala cookies propias para su
          funcionamiento. Las cookies que pueden instalarse proceden de
          Google, por la publicidad de Google AdSense y por el mensaje de
          consentimiento con el que se gestionan:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink">Cookies técnicas:</strong> la que
            guarda la elección del usuario en el mensaje de consentimiento.
            Es necesaria para respetar esa elección y está exenta de
            consentimiento.
          </li>
          <li>
            <strong className="text-ink">Cookies publicitarias de terceros
            (Google AdSense / DoubleClick):</strong> sirven para mostrar y,
            en su caso, personalizar anuncios, limitar cuántas veces se ve
            cada uno, medir resultados y prevenir el fraude. Solo se
            instalan con el consentimiento del usuario. Más información
            sobre{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className={legalLinkClass}
            >
              cómo usa Google las cookies en publicidad
            </a>
            .
          </li>
        </ul>
        <p>
          <strong className="text-ink">Estadísticas sin cookies:</strong>{" "}
          para medir las visitas y el rendimiento usamos Vercel Analytics,
          una solución que no instala cookies ni rastrea al usuario entre
          diferentes webs, por lo que no requiere consentimiento.
        </p>
        <p>
          <strong className="text-ink">Enlaces de afiliado de Amazon:</strong>{" "}
          no instalan cookies en este sitio. Cuando el usuario pulsa uno y
          llega a Amazon, es Amazon quien, en su propio dominio, puede usar
          cookies para atribuir la compra al enlace, conforme a su propia
          política de cookies.
        </p>
      </LegalSection>

      <LegalSection title="3. Tabla de cookies">
        <div className="overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold text-ink">Nombre</th>
                <th scope="col" className="px-4 py-3 font-semibold text-ink">Proveedor</th>
                <th scope="col" className="px-4 py-3 font-semibold text-ink">Tipo</th>
                <th scope="col" className="px-4 py-3 font-semibold text-ink">Finalidad</th>
                <th scope="col" className="px-4 py-3 font-semibold text-ink">Duración</th>
              </tr>
            </thead>
            <tbody>
              {COOKIES.map((c) => (
                <tr key={c.name} className="border-t border-line align-top">
                  <th scope="row" className="px-4 py-3 font-mono text-xs font-medium text-ink">
                    {c.name}
                  </th>
                  <td className="px-4 py-3">{c.provider}</td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        c.type === "Técnica"
                          ? "font-semibold text-signal-green"
                          : "font-semibold text-ink"
                      }
                    >
                      {c.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">{c.purpose}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm">
          Nombres y duraciones según la documentación pública de Google en
          la fecha de actualización de esta política. Google puede
          modificarlos o usar cookies adicionales; la lista completa de
          proveedores y finalidades está disponible en el propio mensaje de
          consentimiento, en «Gestionar opciones».
        </p>
      </LegalSection>

      <LegalSection title="4. Mensaje de consentimiento">
        <p>
          A los usuarios del Espacio Económico Europeo, Reino Unido y Suiza
          se les muestra en su primera visita un mensaje de consentimiento
          gestionado por Google (plataforma de gestión del consentimiento
          certificada por Google, integrada con el Marco de Transparencia y
          Consentimiento de IAB Europe). Desde él se pueden aceptar todas
          las cookies, rechazarlas o elegir finalidades y proveedores
          concretos. Hasta que el usuario elige, no se instalan cookies que
          requieran consentimiento.
        </p>
        <p>
          El consentimiento puede{" "}
          <strong className="text-ink">modificarse o retirarse en cualquier
          momento</strong> con el botón «Configurar cookies» situado en el
          pie de todas las páginas, que vuelve a abrir el mensaje de
          consentimiento. Retirarlo es tan sencillo como darlo.
        </p>
      </LegalSection>

      <LegalSection title="5. Qué ocurre si rechazas las cookies">
        <p>La web funciona con normalidad en todos los casos. Lo que cambia son los anuncios:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink">Si rechazas todas las cookies</strong>{" "}
            (incluido el almacenamiento de información en el dispositivo),
            se muestran <strong className="text-ink">anuncios limitados</strong>,
            que no usan cookies ni otros identificadores, o puede que no se
            muestren anuncios.
          </li>
          <li>
            <strong className="text-ink">Si aceptas el almacenamiento pero
            no la personalización</strong>, se muestran{" "}
            <strong className="text-ink">anuncios no personalizados</strong>,
            basados en el contenido de la página. Estos anuncios siguen
            usando cookies, con tu consentimiento, para limitar la
            frecuencia con la que se ve cada anuncio, elaborar informes
            agregados y prevenir el fraude. No son cookies técnicas exentas:
            por eso se piden en el mensaje de consentimiento.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Cómo desactivar o eliminar las cookies">
        <p>
          Además del botón «Configurar cookies», el usuario puede
          desactivar la personalización de anuncios en la{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={legalLinkClass}
          >
            configuración de anuncios de Google
          </a>{" "}
          y bloquear o borrar las cookies en cualquier momento desde la
          configuración de su navegador. Las rutas habituales en los
          navegadores principales son:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          {BROWSERS.map((b) => (
            <li key={b.name}>
              <strong className="text-ink">{b.name}:</strong> {b.steps}
            </li>
          ))}
        </ul>
        <p>
          Los nombres de los menús pueden variar ligeramente según la
          versión del navegador. Si se borran las cookies, el mensaje de
          consentimiento volverá a mostrarse en la siguiente visita.
        </p>
      </LegalSection>

      <LegalSection title="7. Más información">
        <p>
          Para cualquier duda sobre esta política, el usuario puede escribir
          a {LEGAL_OWNER.email} o desde la{" "}
          <Link href="/contacto" className={legalLinkClass}>
            página de contacto
          </Link>
          . El tratamiento de datos personales se detalla en la{" "}
          <Link href="/politica-de-privacidad" className={legalLinkClass}>
            política de privacidad
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
