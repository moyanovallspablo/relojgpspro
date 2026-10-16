import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection, legalLinkClass } from "@/components/layout/LegalPage";
import { LEGAL_OWNER, legalValue } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo trata RelojGPSPro los datos personales conforme al RGPD y a la LOPDGDD: responsable, finalidades, encargados, transferencias, publicidad y derechos.",
  alternates: { canonical: "/politica-de-privacidad" },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <LegalPage label="Información legal" title="Política de privacidad">
      <LegalSection title="1. Responsable del tratamiento">
        <p>
          De acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la Ley
          Orgánica 3/2018 de Protección de Datos Personales y garantía de los
          derechos digitales (LOPDGDD), el responsable del tratamiento de los
          datos recogidos en este sitio web es:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Titular: {LEGAL_OWNER.holder} ({LEGAL_OWNER.holderType.toLowerCase()})</li>
          <li>NIF: {legalValue(LEGAL_OWNER.taxId)}</li>
          <li>Domicilio postal: {legalValue(LEGAL_OWNER.postalAddress)}</li>
          <li>Email de contacto: {LEGAL_OWNER.email}</li>
        </ul>
        <p>
          {LEGAL_OWNER.siteName} es la denominación comercial del sitio. No
          hay delegado de protección de datos designado, ya que no es
          obligatorio para la actividad de esta web.
        </p>
      </LegalSection>

      <LegalSection title="2. Qué datos tratamos">
        <p>
          {LEGAL_OWNER.siteName} no tiene registro de usuarios, comentarios
          ni newsletter, no procesa pagos (las compras se hacen siempre en
          tiendas de terceros) y no trata categorías especiales de datos
          (salud, biometría, etc.). Los tratamientos que sí existen son:
        </p>
        <h3 className="font-display text-base font-bold text-ink">
          a) Datos de conexión
        </h3>
        <p>
          Como en cualquier web, la infraestructura de alojamiento registra
          de forma automática datos técnicos de cada petición (dirección
          IP, fecha y hora, página solicitada y navegador) para servir las
          páginas y mantener la seguridad del sitio.
        </p>
        <h3 className="font-display text-base font-bold text-ink">
          b) Formulario y email de contacto
        </h3>
        <p>
          La{" "}
          <Link href="/contacto" className={legalLinkClass}>
            página de contacto
          </Link>{" "}
          incluye un formulario (nombre, email, asunto y mensaje) que no
          envía los datos a ningún servidor de esta web ni los guarda en
          ninguna base de datos: al pulsar el botón, prepara un mensaje en
          el programa de correo del propio usuario dirigido a{" "}
          {LEGAL_OWNER.email} (enlace <em>mailto:</em>). Solo si el usuario
          decide enviar ese email, recibimos los datos que contenga, igual
          que si escribiera directamente a esa dirección.
        </p>
        <h3 className="font-display text-base font-bold text-ink">
          c) Estadísticas de uso (Vercel Analytics)
        </h3>
        <p>
          Para medir de forma anónima y agregada las visitas y el
          rendimiento del sitio usamos Vercel Analytics. Este servicio no
          instala cookies, no rastrea a los usuarios entre diferentes webs
          ni nos permite identificar a ninguna persona.
        </p>
        <h3 className="font-display text-base font-bold text-ink">
          d) Publicidad (Google AdSense)
        </h3>
        <p>
          Los datos asociados a la publicidad se explican en el apartado
          siguiente.
        </p>
      </LegalSection>

      <LegalSection title="3. Publicidad (Google AdSense) y elaboración de perfiles">
        <p>
          {LEGAL_OWNER.siteName} se financia en parte con publicidad.
          Utilizamos Google AdSense, servicio de Google Ireland Limited, para
          gestionar y mostrar anuncios. Según lo que el usuario elija en el
          mensaje de consentimiento, los anuncios pueden ser:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-ink">Personalizados:</strong> basados
            en intereses deducidos de la actividad del usuario en esta y en
            otras webs. Solo se muestran con su consentimiento.
          </li>
          <li>
            <strong className="text-ink">No personalizados:</strong>{" "}
            basados en el contexto (contenido de la página, ubicación
            aproximada), no en el historial del usuario. Aun así usan
            cookies para limitar la frecuencia de los anuncios, elaborar
            informes agregados y prevenir el fraude, por lo que también
            requieren consentimiento para almacenar información en el
            dispositivo.
          </li>
          <li>
            <strong className="text-ink">Limitados:</strong> se muestran
            cuando no hay consentimiento para usar cookies ni otros
            identificadores, y no los utilizan.
          </li>
        </ul>
        <p>
          <strong className="text-ink">Elaboración de perfiles.</strong>{" "}
          Si el usuario consiente la publicidad personalizada, Google y sus
          socios publicitarios pueden elaborar perfiles con fines
          publicitarios a partir de su actividad de navegación (páginas
          visitadas, interacciones con anuncios, identificadores del
          dispositivo, IP y navegador). Ese perfilado lo realizan Google y
          sus socios como responsables de sus propios tratamientos; el
          titular de esta web no elabora perfiles ni toma decisiones
          automatizadas con efectos jurídicos sobre los usuarios.
        </p>
        <p>
          El usuario puede cambiar o retirar su consentimiento en cualquier
          momento con el botón «Configurar cookies» del pie de página, y
          desactivar la personalización en la{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={legalLinkClass}
          >
            configuración de anuncios de Google
          </a>
          . Más información sobre{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
            className={legalLinkClass}
          >
            cómo usa Google la información de los sitios que utilizan sus
            servicios
          </a>{" "}
          y, sobre las cookies concretas, en la{" "}
          <Link href="/politica-de-cookies" className={legalLinkClass}>
            política de cookies
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="4. Finalidades">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Datos de conexión: prestar el servicio (mostrar las páginas),
            garantizar la seguridad del sitio y detectar abusos o ataques.
          </li>
          <li>Estadísticas: conocer el uso y el rendimiento de la web para mejorarla.</li>
          <li>
            Publicidad: mostrar anuncios, medir su rendimiento y, con
            consentimiento, personalizarlos.
          </li>
          <li>Emails recibidos: responder a la consulta del usuario.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Legitimación">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Datos de conexión y estadísticas anónimas: interés legítimo del
            responsable en prestar el servicio y mantener la seguridad del
            sitio (art. 6.1.f RGPD).
          </li>
          <li>
            Cookies publicitarias, anuncios personalizados y elaboración de
            perfiles: consentimiento del usuario (art. 6.1.a RGPD y art.
            22.2 LSSI-CE), que puede retirar en cualquier momento sin que
            ello afecte a la licitud del tratamiento previo.
          </li>
          <li>
            Consultas por email: consentimiento del usuario al escribirnos
            (art. 6.1.a RGPD).
          </li>
        </ul>
        <p>
          Facilitar datos por email es voluntario; si no se facilitan, no
          podremos responder a la consulta.
        </p>
      </LegalSection>

      <LegalSection title="6. Conservación">
        <p>
          Los registros técnicos de conexión se conservan durante el plazo
          que aplica el proveedor de alojamiento para fines de seguridad y
          diagnóstico, y después se eliminan. Los emails se conservan
          mientras se atiende la consulta y, después, solo durante los
          plazos en los que pudieran derivarse responsabilidades legales.
          Las cookies publicitarias se conservan durante los plazos
          indicados en la política de cookies.
        </p>
      </LegalSection>

      <LegalSection title="7. Destinatarios, encargados y transferencias internacionales">
        <p>
          No vendemos ni cedemos datos a terceros, salvo obligación legal.
          Para prestar el servicio intervienen los siguientes proveedores:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink">Vercel Inc.</strong> (Estados
            Unidos): proveedor de infraestructura y alojamiento web y de
            Vercel Analytics. Actúa como encargado del tratamiento de los
            datos de conexión y estadísticas.
          </li>
          <li>
            <strong className="text-ink">Cloudflare, Inc.</strong> (Estados
            Unidos): gestiona la recepción y el reenvío del correo dirigido
            a {LEGAL_OWNER.email}. Actúa como encargado del tratamiento de
            los emails recibidos.
          </li>
          <li>
            <strong className="text-ink">Google Ireland Limited</strong>:
            proveedor de publicidad (apartado 3). Algunos datos pueden
            tratarse fuera del Espacio Económico Europeo por Google LLC
            (Estados Unidos).
          </li>
        </ul>
        <p>
          Las transferencias internacionales de datos a estos proveedores
          se amparan en las Cláusulas Contractuales Tipo aprobadas por la
          Comisión Europea y, en su caso, en el Marco de Privacidad de Datos
          UE-EE. UU.
        </p>
        <p>
          Al pulsar un enlace a una tienda externa (Amazon, Decathlon o la
          tienda oficial de una marca) el usuario abandona este sitio, y los
          datos que facilite allí se rigen por la política de privacidad de
          esa tienda.
        </p>
      </LegalSection>

      <LegalSection title="8. Derechos del usuario">
        <p>
          El usuario puede ejercer en cualquier momento los siguientes
          derechos reconocidos por el RGPD y la LOPDGDD:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong className="text-ink">Acceso</strong> a sus datos personales.</li>
          <li><strong className="text-ink">Rectificación</strong> de los datos inexactos.</li>
          <li><strong className="text-ink">Supresión</strong> de sus datos.</li>
          <li>
            <strong className="text-ink">Oposición</strong> al tratamiento,
            incluida la elaboración de perfiles con fines publicitarios.
          </li>
          <li><strong className="text-ink">Limitación</strong> del tratamiento.</li>
          <li><strong className="text-ink">Portabilidad</strong> de sus datos.</li>
          <li>Retirar el consentimiento prestado, en cualquier momento.</li>
        </ul>
        <p>
          Para ejercerlos, basta con escribir a {LEGAL_OWNER.email}{" "}
          indicando el derecho que se ejerce. Si hay dudas razonables sobre
          la identidad de quien lo solicita, podremos pedir información
          adicional para confirmarla. Respecto a los datos que trata Google
          como responsable, el usuario también puede dirigirse directamente
          a Google.
        </p>
        <p>
          Si el usuario considera que el tratamiento no se ajusta a la
          normativa, puede presentar una reclamación ante la Agencia
          Española de Protección de Datos (
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
            className={legalLinkClass}
          >
            www.aepd.es
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="9. Cookies">
        <p>
          El uso de cookies se explica en la{" "}
          <Link href="/politica-de-cookies" className={legalLinkClass}>
            política de cookies
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
