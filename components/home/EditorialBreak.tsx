import EditorialPanel, { EditorialEyebrow } from "@/components/ui/EditorialPanel";

export default function EditorialBreak() {
  return (
    <EditorialPanel className="flex flex-col items-center text-center">
      <EditorialEyebrow>Nuestro enfoque</EditorialEyebrow>
      <p className="mt-4 max-w-2xl font-display text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
        Cada perfil de entrenamiento necesita datos distintos en la muñeca.
      </p>
    </EditorialPanel>
  );
}
