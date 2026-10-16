import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { LEGAL_OWNER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribe a RelojGPSPro para dudas sobre relojes GPS, correcciones de datos o propuestas de colaboración.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        <Reveal className="max-w-prose">
          <p className="section-label">Contacto</p>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Hablemos
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Si tienes una duda sobre qué reloj elegir, has encontrado un dato
            que no cuadra en alguna ficha o quieres proponer una
            colaboración, escríbeme. Leo todos los mensajes y respondo
            personalmente.
          </p>

          <div className="mt-8 glass-panel p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-500">
              Correo de contacto
            </p>
            <a
              href={`mailto:${LEGAL_OWNER.email}`}
              className="mt-2 block break-all font-display text-xl font-bold text-ink hover:text-accent-dark"
            >
              {LEGAL_OWNER.email}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Suelo responder en unos días laborables.
            </p>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-ink-500">
            ¿Quieres saber quién está detrás de la web y cómo se elaboran
            los análisis? Lo explico en{" "}
            <Link
              href="/sobre-el-proyecto"
              className="font-semibold text-accent-dark hover:underline"
            >
              Sobre el proyecto
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass-panel p-6 sm:p-8">
            <h2 className="font-display text-lg font-bold">
              Formulario de contacto
            </h2>
            <div className="mt-5">
              <ContactForm />
            </div>

            {/* Primera capa de información (art. 13 RGPD); el detalle
                completo está en la política de privacidad. */}
            <div className="mt-8 border-t border-line pt-5 text-xs leading-relaxed text-ink-500">
              <p className="font-semibold text-ink">
                Información básica sobre protección de datos
              </p>
              <dl className="mt-2 space-y-1">
                <div>
                  <dt className="inline font-semibold text-ink-700">Responsable: </dt>
                  <dd className="inline">{LEGAL_OWNER.holder}.</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-ink-700">Finalidad: </dt>
                  <dd className="inline">responder a tu consulta.</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-ink-700">Legitimación: </dt>
                  <dd className="inline">tu consentimiento al escribirme.</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-ink-700">Derechos: </dt>
                  <dd className="inline">
                    acceso, rectificación, supresión y demás derechos
                    explicados en la{" "}
                    <Link
                      href="/politica-de-privacidad"
                      className="font-semibold text-ink underline underline-offset-2 hover:text-accent"
                    >
                      Política de privacidad
                    </Link>
                    .
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
