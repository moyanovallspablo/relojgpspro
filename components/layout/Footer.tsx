import Link from "next/link";
import CookieSettingsButton from "@/components/layout/CookieSettingsButton";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="font-display text-base font-bold text-ink">
            Reloj<span className="text-accent">GPS</span>Pro
          </p>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-500">
            Guías, análisis y comparativas para elegir un reloj GPS sin pagar
            de más. No vendemos relojes: te ayudamos a entender cuál encaja
            contigo.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Explorar</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li><Link href="/relojes" className="hover:text-ink">Relojes</Link></li>
            <li><Link href="/guias" className="hover:text-ink">Guías</Link></li>
            <li><Link href="/como-elegir" className="hover:text-ink">Cómo elegir</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Proyecto</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li><Link href="/sobre-el-proyecto" className="hover:text-ink">Sobre el proyecto</Link></li>
            <li><Link href="/contacto" className="hover:text-ink">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li><Link href="/aviso-legal" className="hover:text-ink">Aviso legal</Link></li>
            <li><Link href="/politica-de-privacidad" className="hover:text-ink">Política de privacidad</Link></li>
            <li><Link href="/politica-de-cookies" className="hover:text-ink">Política de cookies</Link></li>
            <li>
              <CookieSettingsButton className="text-left hover:text-ink" />
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-6">
        <p className="container-page text-xs text-ink-500">
          RelojGPSPro es una plataforma independiente de análisis y
          comparación de relojes GPS deportivos. Especificaciones
          contrastadas con la documentación oficial de los fabricantes; cada
          ficha indica los datos pendientes de confirmar.
        </p>
        <p className="container-page mt-2 text-xs text-ink-500">
          Como Afiliado de Amazon, RelojGPSPro obtiene ingresos por las
          compras adscritas que cumplen los requisitos aplicables.
        </p>
      </div>
    </footer>
  );
}
