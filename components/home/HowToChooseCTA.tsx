import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function HowToChooseCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="card flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              ¿No sabes por dónde empezar?
            </h2>
            <p className="mt-2 max-w-prose text-base text-ink-500">
              Una guía general para entender qué mirar antes de comprar un
              reloj GPS, sin depender de la marca o el modelo.
            </p>
          </div>
          <Link href="/como-elegir" className="btn-primary whitespace-nowrap">
            [ Aprende a elegir ]
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
