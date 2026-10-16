import Link from "next/link";
import NavLinks from "@/components/layout/NavLinks";

export default function Header() {
  return (
    <header className="border-b border-line bg-base">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="RelojGPSPro, inicio" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-7 items-center rounded-[4px] bg-ink px-2 font-mono text-xs font-medium tracking-wide text-white">
            [GPS]
          </span>
          <span className="hidden font-display text-sm font-bold text-ink sm:inline">
            Reloj<span className="text-accent">GPS</span>Pro
          </span>
        </Link>

        <NavLinks className="hidden items-center gap-6 lg:flex" />

        <Link href="/como-elegir" className="btn-dark hidden shrink-0 sm:inline-flex">
          [¿POR DÓNDE EMPIEZO?]
        </Link>
      </div>
      <NavLinks className="flex items-center gap-6 overflow-x-auto border-t border-line px-5 py-3 lg:hidden" />
    </header>
  );
}
