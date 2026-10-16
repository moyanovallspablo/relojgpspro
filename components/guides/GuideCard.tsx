import Link from "next/link";
import { Guide, GUIDE_CATEGORY_LABELS } from "@/lib/types/guide";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guias/${guide.slug}`}
      className="card card-spotlight group flex flex-col gap-3 p-6"
    >
      <span className="tag w-fit">{GUIDE_CATEGORY_LABELS[guide.category]}</span>
      <h3 className="font-display text-lg font-bold text-ink group-hover:text-accent-dark">
        {guide.title}
      </h3>
      <p className="text-sm leading-relaxed text-ink-500">{guide.excerpt}</p>
      <span className="mt-auto text-sm font-semibold text-accent-dark">
        Leer guía
      </span>
    </Link>
  );
}
