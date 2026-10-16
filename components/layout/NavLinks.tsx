"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TRAIL_GUIDE_PATH, VALUE_GUIDE_PATH } from "@/lib/data/valueGuide";

const NAV_LINKS = [
  { href: "/relojes", label: "Relojes" },
  { href: VALUE_GUIDE_PATH, label: "Calidad-precio" },
  { href: TRAIL_GUIDE_PATH, label: "Montaña" },
  { href: "/como-elegir", label: "Cómo elegir" },
  { href: "/comparativas", label: "Comparativas" },
  { href: "/guias", label: "Guías" },
];

// Activo también en las subrutas: /relojes/garmin-forerunner-265
// marca "Relojes".
function matches(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

// Solo se marca el enlace más específico: en la guía calidad-precio,
// "Calidad-precio" y no también "Guías".
function activeHref(pathname: string) {
  return NAV_LINKS.filter((l) => matches(pathname, l.href)).sort(
    (a, b) => b.href.length - a.href.length,
  )[0]?.href;
}

export default function NavLinks({ className = "" }: { className?: string }) {
  const pathname = usePathname() ?? "";
  const current = activeHref(pathname);
  return (
    <nav aria-label="Navegación principal" className={className}>
      {NAV_LINKS.map((link) => {
        const active = link.href === current;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`whitespace-nowrap text-xs uppercase tracking-wide transition-colors ${
              active
                ? "font-semibold text-accent"
                : "font-medium text-ink-500 hover:text-ink"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
