import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import EditorialImage from "@/components/motion/EditorialImage";
import { watches } from "@/lib/data/watches";
import { LEGAL_OWNER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Sobre el proyecto",
  description:
    "Quién está detrás de RelojGPSPro, cómo se elaboran los análisis de relojes GPS y cómo se financia la web.",
  alternates: { canonical: "/sobre-el-proyecto" },
};

const linkClass = "font-semibold text-accent-dark hover:underline";

export default function SobreElProyectoPage() {
  return (
    <Container className="py-14 sm:py-16">
      <Reveal className="max-w-2xl">
        <p className="section-label">El proyecto</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Sobre el proyecto
        </h1>
      </Reveal>

      <Reveal delay={0.05} className="mt-8 max-w-prose space-y-6 text-base leading-relaxed text-ink-500">
        <p>
          Me llamo {LEGAL_OWNER.holder} y estoy detrás de RelojGPSPro. Soy
          un apasionado del deporte, del running y de la tecnología
          multideporte, y creé esta web por algo que me pasaba a mí mismo:
          elegir un reloj GPS es más difícil de lo que debería. Las fichas
          de las tiendas están llenas de siglas, cada marca llama de una
          forma distinta a la misma función y es fácil acabar pagando por
          cosas que nunca vas a usar.
        </p>
        <p>
          RelojGPSPro no es una tienda: no vendo ni envío relojes. Mi
          objetivo es ayudarte a entender qué necesitas realmente antes de
          gastar en un reloj deportivo.
        </p>
      </Reveal>

      <EditorialImage
        illustration={
          <Image
            src="/images/photos/about-trail-runner-bw.jpg"
            alt="Corredor de trail en blanco y negro, en plena prueba de montaña"
            fill
            sizes="(min-width: 768px) 672px, 100vw"
            className="object-cover"
          />
        }
        caption="Contenido pensado para quien entrena, no para quien vende."
        aspect="aspect-[21/9]"
        className="my-10 max-w-prose"
        parallax
      />

      <Reveal delay={0.05} className="max-w-prose space-y-10 text-base leading-relaxed text-ink-500">
        <section className="space-y-4">
          <h2 className="font-display text-xl font-bold text-ink">
            La misión
          </h2>
          <p>
            Ofrecer comparativas objetivas, análisis técnicos rigurosos y
            datos verificados. Cada ficha parte de las fuentes oficiales de
            los fabricantes (webs de producto y manuales de usuario) y se
            contrasta con pruebas independientes publicadas por medios
            especializados, no con notas de prensa ni con descripciones de
            tienda.
          </p>
          <p>
            El catálogo reúne ahora {watches.length} relojes reales, desde
            modelos de entrada hasta gama alta, y voy ampliándolo con
            fichas, comparativas y guías.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl font-bold text-ink">
            Cómo trabajo
          </h2>
          <ul className="list-disc space-y-2 pl-5 marker:text-accent">
            <li>
              <strong className="text-ink">Fuentes registradas.</strong>{" "}
              Guardo de dónde sale cada dato y en qué fecha lo comprobé. Si
              un precio no tiene una fuente verificable registrada, la ficha
              lo indica.
            </li>
            <li>
              <strong className="text-ink">Nada por intuición.</strong>{" "}
              Cuando no he podido confirmar un dato, lo dejo como pendiente
              en vez de rellenarlo con una suposición.
            </li>
            <li>
              <strong className="text-ink">Funciones explicadas en la práctica.</strong>{" "}
              No me limito a enumerar especificaciones: explico qué aporta
              cada función al entrenar y digo cuándo no merece la pena,
              aunque figure en la ficha del reloj más caro.
            </li>
            <li>
              <strong className="text-ink">Limitaciones a la vista.</strong>{" "}
              Cada análisis incluye puntos en contra y para quién no es la
              mejor opción.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl font-bold text-ink">
            Transparencia y financiación
          </h2>
          <p>
            RelojGPSPro se financia de dos formas. La primera son los{" "}
            <strong className="text-ink">enlaces de afiliado</strong> (por
            ejemplo, del Programa de Afiliados de Amazon): si compras a
            través de ellos, recibo una pequeña comisión{" "}
            <strong className="text-ink">sin ningún coste adicional para ti</strong>
            ; pagas lo mismo que si entraras directamente en la tienda. La
            web también muestra publicidad de Google AdSense.
          </p>
          <p>
            Ninguna de las dos cambia el análisis: señalo las limitaciones
            de un reloj aunque tenga enlace de compra, y recomiendo modelos
            más baratos cuando cubren lo que necesitas. Puedes leer los
            detalles en el{" "}
            <Link href="/aviso-legal" className={linkClass}>
              aviso legal
            </Link>{" "}
            y en la{" "}
            <Link href="/politica-de-privacidad" className={linkClass}>
              política de privacidad
            </Link>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl font-bold text-ink">
            Para quién escribo
          </h2>
          <p>
            Sobre todo para corredores principiantes, personas que entrenan
            de forma regular, quienes preparan pruebas físicas u
            oposiciones, y cualquiera que quiera comprar su primer reloj
            deportivo sin perderse entre gamas y funciones.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl font-bold text-ink">
            ¿Has visto un error?
          </h2>
          <p>
            Si un dato no cuadra, una especificación ha cambiado o tienes
            una duda, escríbeme desde la{" "}
            <Link href="/contacto" className={linkClass}>
              página de contacto
            </Link>{" "}
            o a {LEGAL_OWNER.email}. Corregir errores rápido es parte del
            compromiso de la web.
          </p>
        </section>
      </Reveal>
    </Container>
  );
}
