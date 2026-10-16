export default function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="section-label">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-ink-500">
          {description}
        </p>
      )}
    </div>
  );
}
