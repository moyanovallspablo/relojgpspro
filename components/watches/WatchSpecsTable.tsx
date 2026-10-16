import { Watch, isPriceSourceVerified, isSpecsSourceVerified } from "@/lib/types/watch";
import AffiliateButton from "@/components/watches/AffiliateButton";
import Tooltip from "@/components/ui/Tooltip";
import { GLOSSARY, type GlossaryEntry } from "@/lib/glossary";
import NumText from "@/components/ui/NumText";
import { formatEuros } from "@/lib/format";

// Valor técnico con explicación del glosario: el globo se abre encima y
// alineado a la derecha, igual que el valor, para no salirse de la ficha.
function Term({ entry, children }: { entry: GlossaryEntry | null; children: string }) {
  return entry ? <Tooltip entry={entry}>{children}</Tooltip> : <>{children}</>;
}

const SCREEN_GLOSSARY = { AMOLED: GLOSSARY.amoled, MIP: GLOSSARY.mip, LCD: null };

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line py-3 text-sm last:border-0">
      <span className="text-ink-500">{label}</span>
      <span className="text-right font-medium text-ink">
        {typeof value === "string" ? <NumText>{value}</NumText> : value}
      </span>
    </div>
  );
}

function yesNo(value: boolean | null) {
  if (value === null) return "Sin verificar";
  return value ? "Sí" : "No";
}

function formatPrice(value: number | null) {
  return value ? formatEuros(value) : "Sin verificar";
}

export default function WatchSpecsTable({ watch }: { watch: Watch }) {
  return (
    <div className="card p-6">
      <h3 className="font-display text-lg font-bold">Ficha técnica</h3>
      <div className="mt-2">
        <Row label="Marca" value={watch.brand} />
        <Row label="Precio oficial (PVPR)" value={formatPrice(watch.officialPrice)} />
        <Row label="Precio observado en tienda" value={formatPrice(watch.observedPrice)} />
        <Row label="Peso" value={watch.weightGrams ? `${watch.weightGrams} g` : "Sin verificar"} />
        <Row
          label="Autonomía (modo reloj)"
          value={watch.batteryLifeHours ? `${watch.batteryLifeHours} h` : "Sin verificar"}
        />
        <Row label="GPS" value={yesNo(watch.gps)} />
        <Row label="Frecuencia cardíaca en muñeca" value={yesNo(watch.heartRate.wrist)} />
        <Row label="Compatible con banda FC" value={yesNo(watch.heartRate.chestStrapCompatible)} />
        <Row
          label="Pantalla"
          value={
            watch.screen.type ? (
              <Term entry={SCREEN_GLOSSARY[watch.screen.type]}>{watch.screen.type}</Term>
            ) : (
              "Sin verificar"
            )
          }
        />
        <Row label="Mapas" value={yesNo(watch.maps)} />
        <Row label="Navegación (ruta/migas de pan)" value={yesNo(watch.navigation)} />
        <Row
          label="Altímetro"
          value={
            watch.altimeter === "no" ? (
              "No"
            ) : watch.altimeter === "barométrico" ? (
              <Term entry={GLOSSARY.altimetro}>barométrico</Term>
            ) : (
              watch.altimeter ?? "Sin verificar"
            )
          }
        />
        <Row
          label="Resistencia al agua"
          value={
            watch.waterResistance ? (
              <Term entry={GLOSSARY.agua}>{watch.waterResistance}</Term>
            ) : (
              "Sin verificar"
            )
          }
        />
      </div>

      {watch.priceNote && (
        <p className="mt-3 text-xs text-ink-500">{watch.priceNote}</p>
      )}
      {(watch.officialPrice || watch.observedPrice) && !isPriceSourceVerified(watch) && (
        <p className="mt-1 text-xs text-warning">
          Precio sin fuente (URL) verificable registrada todavía.
        </p>
      )}
      {!isSpecsSourceVerified(watch) && (
        <p className="mt-1 text-xs text-warning">
          Especificaciones pendientes de confirmar con una fuente oficial registrada.
        </p>
      )}

      <AffiliateButton
        watch={watch}
        className="mt-5 w-full"
      />
    </div>
  );
}
