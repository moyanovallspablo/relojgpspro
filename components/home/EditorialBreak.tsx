import Reveal from "@/components/motion/Reveal";

export default function EditorialBreak() {
  return (
    <section className="py-14 sm:py-16">
      <div className="container-page">
        <Reveal
          as="div"
          className="flex items-center justify-center rounded-card bg-zinc-900 px-6 py-12 text-center"
        >
          <p className="max-w-2xl text-xl font-bold leading-snug text-white sm:text-2xl">
            Cada perfil de entrenamiento necesita datos distintos en la muñeca.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
