import { Watch } from "@/lib/types/watch";

export default function WatchProsCons({ watch }: { watch: Watch }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="card p-6">
        <h3 className="font-display text-base font-bold text-signal-green">
          A favor
        </h3>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-500">
          {watch.pros.map((pro) => (
            <li key={pro} className="flex gap-2">
              <span className="text-signal-green">+</span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card p-6">
        <h3 className="font-display text-base font-bold text-ink-500">
          A tener en cuenta
        </h3>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-500">
          {watch.cons.map((con) => (
            <li key={con} className="flex gap-2">
              <span className="text-ink-500">–</span>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
