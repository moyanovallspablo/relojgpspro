// Insignia de victoria ("Mejor autonomía", "Pantalla AMOLED"): grafito
// titanio con punto de acento neón y micro-destello (.badge-win en
// globals.css). `detail`, si llega, va como title para dar la cifra.
export default function WinBadge({
  children,
  detail,
  size = "md",
}: {
  children: React.ReactNode;
  detail?: string;
  size?: "sm" | "md";
}) {
  return (
    <span className={`badge-win ${size === "sm" ? "badge-win-sm" : ""}`} title={detail}>
      <span aria-hidden="true" className="badge-win-dot" />
      {children}
    </span>
  );
}
