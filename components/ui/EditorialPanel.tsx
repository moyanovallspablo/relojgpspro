import Reveal from "@/components/motion/Reveal";

// Tarjeta editorial flotante (grafito titanio, borde 1px blanco/10) con
// iluminación ambiental radial detrás (.editorial-panel / .editorial-aura
// en globals.css). overflow-x-clip en la sección recorta el aura, que
// sobresale del panel, para que no ensanche la página en móvil; a
// diferencia de overflow-hidden no corta en vertical, así que el
// desenfoque no deja un borde recto encima y debajo.
export default function EditorialPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className="overflow-x-clip">
      <div className="container-page">
        <div className="relative mx-auto my-12 max-w-6xl sm:my-16">
          <div aria-hidden="true" className="editorial-aura" />
          <Reveal className={`editorial-panel px-6 py-10 sm:px-10 sm:py-12 ${className}`}>
            {children}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Etiqueta de sección para el panel: punto neón indicador + texto mono.
export function EditorialEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="editorial-eyebrow">
      <span aria-hidden="true" className="badge-win-dot" />
      {children}
    </p>
  );
}
