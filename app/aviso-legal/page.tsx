import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection, legalLinkClass } from "@/components/layout/LegalPage";
import { LEGAL_OWNER, legalValue } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Aviso legal y condiciones de uso",
  description:
    "Titularidad, condiciones de uso, responsabilidad sobre precios de terceros y propiedad intelectual de RelojGPSPro.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage label="Información legal" title="Aviso legal y condiciones de uso">
      <LegalSection title="1. Titularidad del sitio web">
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
          de Servicios de la Sociedad de la Información y de Comercio
          Electrónico (LSSI-CE), se informa de los datos identificativos del
          titular de este sitio web:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Titular: {LEGAL_OWNER.holder} ({LEGAL_OWNER.holderType.toLowerCase()})</li>
          <li>NIF: {legalValue(LEGAL_OWNER.taxId)}</li>
          <li>Domicilio postal: {legalValue(LEGAL_OWNER.postalAddress)}</li>
          <li>
            Email de contacto:{" "}
            <a href={`mailto:${LEGAL_OWNER.email}`} className={legalLinkClass}>
              {LEGAL_OWNER.email}
            </a>
          </li>
          <li>Sitio web: {LEGAL_OWNER.siteUrl}</li>
          <li>Denominación comercial: {LEGAL_OWNER.siteName}</li>
        </ul>
        <p>
          {LEGAL_OWNER.siteName} es la denominación comercial con la que{" "}
          {LEGAL_OWNER.holder} explota este sitio web; no es una sociedad
          ni una persona jurídica distinta del titular. También puedes
          escribir desde la{" "}
          <Link href="/contacto" className={legalLinkClass}>
            página de contacto
          </Link>
          .
        </p>
        <p>
          {LEGAL_OWNER.siteName} es una web informativa y comparativa de
          relojes GPS deportivos. No es una tienda: no vende, envía ni
          factura productos, y no interviene en las compras que el usuario
          realice en tiendas de terceros.
        </p>
      </LegalSection>

      <LegalSection title="2. Condiciones de uso">
        <p>
          El acceso a este sitio web es gratuito y atribuye la condición de
          usuario, que acepta estas condiciones desde el momento en que
          navega por él. El usuario se compromete a hacer un uso adecuado de
          los contenidos, conforme a la ley, la buena fe y el orden público,
          y a no emplearlos para actividades ilícitas o que puedan dañar el
          sitio, sus sistemas o a terceros.
        </p>
        <p>
          El titular puede modificar en cualquier momento, sin previo aviso,
          los contenidos, el diseño y estas condiciones. La versión vigente
          es la publicada en esta página en cada momento.
        </p>
      </LegalSection>

      <LegalSection title="3. Carácter informativo de los contenidos">
        <p>
          Las guías, análisis, comparativas y fichas técnicas tienen una
          finalidad exclusivamente informativa y orientativa. La
          información procede del análisis de la documentación oficial de
          los fabricantes (webs de producto y manuales de usuario),
          contrastada cuando es posible con pruebas independientes
          publicadas por medios especializados.
        </p>
        <p>
          No todos los datos están confirmados en la misma medida: en
          algunas fichas concretas (por ejemplo, la del Garmin Venu 3)
          pueden existir precios o especificaciones pendientes de
          confirmar con una fuente registrada, y así se indica en la propia
          ficha del producto. Además, los fabricantes pueden cambiar sus
          productos o especificaciones sin aviso, por lo que recomendamos
          comprobar la información en la web oficial antes de comprar.
        </p>
      </LegalSection>

      <LegalSection title="4. Precios y enlaces a terceros">
        <p>
          Los precios mostrados (precio oficial y precio observado en
          tiendas como Amazon, Decathlon o las tiendas oficiales de Garmin,
          Polar, COROS o Suunto) se toman de fuentes públicas en la fecha
          indicada en cada ficha. Son orientativos: los precios, ofertas y
          disponibilidad los fija exclusivamente cada vendedor y pueden
          cambiar en cualquier momento. El precio válido es siempre el que
          aparece en la tienda en el momento de la compra.
        </p>
        <p>
          {LEGAL_OWNER.siteName} no se responsabiliza de las diferencias de
          precio, de la disponibilidad de stock, ni de las condiciones de
          venta, envío, garantía o devolución de las tiendas enlazadas, que
          se rigen por sus propios términos.
        </p>
        <p>
          Algunos enlaces pueden ser enlaces de afiliado (por ejemplo, del
          Programa de Afiliados de Amazon): si el usuario compra a través de
          ellos, el titular puede recibir una comisión sin coste adicional
          para el usuario. Estos enlaces no condicionan el contenido
          editorial de los análisis.
        </p>
      </LegalSection>

      <LegalSection title="5. Exención de responsabilidad">
        <p>
          El titular no garantiza la ausencia de errores en los contenidos
          ni la disponibilidad ininterrumpida del sitio, y no será
          responsable de los daños derivados de decisiones de compra o de
          uso tomadas a partir de la información publicada, ni del contenido
          de los sitios web de terceros a los que se enlaza. Si se detecta un
          contenido erróneo o ilícito, puede comunicarse a{" "}
          {LEGAL_OWNER.email} para su revisión y, en su caso, corrección o
          retirada.
        </p>
      </LegalSection>

      <LegalSection title="6. Propiedad intelectual e industrial">
        <p>
          Los derechos de propiedad intelectual sobre los textos, el diseño,
          la estructura y el código de este sitio web pertenecen a{" "}
          {LEGAL_OWNER.holder}, como persona física titular del sitio, o se
          utilizan con la debida autorización de sus titulares.{" "}
          {LEGAL_OWNER.siteName} es la denominación comercial del sitio.
          Queda prohibida su reproducción, distribución, comunicación
          pública o transformación sin autorización expresa, salvo para uso
          personal y privado.
        </p>
        <p>
          Las imágenes de producto proceden de las fichas oficiales de cada
          modelo en las tiendas enlazadas y se muestran con fines
          identificativos.
        </p>
        <p>
          Las marcas, logotipos y nombres comerciales citados (Garmin,
          Polar, COROS, Suunto, Amazon, entre otros) pertenecen a sus
          respectivos titulares. Su mención tiene un fin únicamente
          descriptivo e informativo y no implica ninguna relación,
          patrocinio ni respaldo por parte de dichos titulares.
        </p>
      </LegalSection>

      <LegalSection title="7. Protección de datos y cookies">
        <p>
          El tratamiento de datos personales se explica en la{" "}
          <Link href="/politica-de-privacidad" className={legalLinkClass}>
            política de privacidad
          </Link>{" "}
          y el uso de cookies en la{" "}
          <Link href="/politica-de-cookies" className={legalLinkClass}>
            política de cookies
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="8. Legislación aplicable y jurisdicción">
        <p>
          Estas condiciones se rigen por la legislación española. Para
          cualquier controversia, las partes se someten a los juzgados y
          tribunales que correspondan conforme a la normativa aplicable; si
          el usuario tiene la condición de consumidor, serán competentes los
          de su domicilio.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
