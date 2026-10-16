export default function WatchMacro({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="watchBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4F4F5" />
          <stop offset="100%" stopColor="#E4E4E7" />
        </linearGradient>
      </defs>
      <rect width="500" height="500" fill="url(#watchBg)" />
      <rect x="150" y="60" width="200" height="90" rx="18" fill="#09090B" />
      <rect x="150" y="350" width="200" height="90" rx="18" fill="#09090B" />
      <circle cx="250" cy="250" r="150" fill="#09090B" />
      <circle cx="250" cy="250" r="128" fill="#FFFFFF" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x1 = 250 + Math.sin(angle) * 112;
        const y1 = 250 - Math.cos(angle) * 112;
        const x2 = 250 + Math.sin(angle) * 122;
        const y2 = 250 - Math.cos(angle) * 122;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#09090B" strokeWidth={i % 3 === 0 ? 4 : 2} />;
      })}
      <line x1="250" y1="250" x2="250" y2="160" stroke="#09090B" strokeWidth="6" strokeLinecap="round" />
      <line x1="250" y1="250" x2="310" y2="250" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
      <circle cx="250" cy="250" r="8" fill="#09090B" />
    </svg>
  );
}
