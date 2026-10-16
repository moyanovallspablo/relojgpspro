export default function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "signal" | "glass";
}) {
  // Insignia de veredicto: cristal translúcido con borde degradado y
  // micro-brillo en hover (.badge-glass en globals.css).
  if (tone === "glass") {
    return <span className="badge-glass">{children}</span>;
  }
  const tones = {
    neutral: "border-line text-ink-500",
    accent: "border-accent/30 bg-accent-tint text-accent-dark",
    signal: "border-signal-green/30 bg-signal-greenTint text-signal-green",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
