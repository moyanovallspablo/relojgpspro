import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import { LEGAL_UPDATED_AT } from "@/lib/legal";

// Plantilla común de las páginas legales (aviso legal, privacidad y
// cookies): cabecera con fecha de actualización y secciones de texto.
export default function LegalPage({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="py-14 sm:py-16">
      <Reveal className="max-w-2xl">
        <p className="section-label">{label}</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-ink-500">
          Última actualización: {LEGAL_UPDATED_AT}
        </p>
      </Reveal>

      <div className="mt-10 max-w-prose space-y-10 text-base leading-relaxed text-ink-500">
        {children}
      </div>
    </Container>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
      {children}
    </section>
  );
}

export const legalLinkClass =
  "font-medium text-ink underline underline-offset-2 hover:text-accent";
