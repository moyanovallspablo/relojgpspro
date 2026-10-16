import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24">
      <p className="section-label">Error 404</p>
      <h1 className="mt-2 font-display text-3xl font-bold">
        No encontramos esta página
      </h1>
      <p className="mt-3 max-w-prose text-base text-ink-500">
        Puede que el enlace esté roto o el contenido se haya movido. Prueba a
        volver al catálogo de relojes o a la portada.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="btn-primary">Ir a la portada</Link>
        <Link href="/relojes" className="btn-secondary">Ver relojes</Link>
      </div>
    </Container>
  );
}
