import EditorialPanel, { EditorialEyebrow } from "@/components/ui/EditorialPanel";

export default function NotAlwaysExpensiveSection() {
  return (
    <EditorialPanel className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center md:gap-12">
      <div>
        <EditorialEyebrow>Criterio editorial</EditorialEyebrow>
        <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          El modelo más caro no siempre es el más adecuado
        </h2>
      </div>
      <div>
        <p className="text-base leading-relaxed text-zinc-300/80">
          Muchos relojes de gama alta incluyen funciones que la mayoría de
          corredores nunca llega a usar. Nuestro trabajo es ayudarte a
          identificar qué necesitas de verdad, para que el precio que pagues
          tenga que ver con tu entrenamiento y no con el marketing.
        </p>
        <p className="editorial-chip mt-6">Criterio independiente · Sin patrocinios</p>
      </div>
    </EditorialPanel>
  );
}
