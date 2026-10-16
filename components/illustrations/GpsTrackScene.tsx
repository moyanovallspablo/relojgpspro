export default function GpsTrackScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 700 500" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="gpsBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#09090B" />
          <stop offset="100%" stopColor="#27272A" />
        </linearGradient>
      </defs>
      <rect width="700" height="500" fill="url(#gpsBg)" />
      <g stroke="#FFFFFF" strokeWidth="0.5" opacity="0.08">
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="700" y2={i * 50} />
        ))}
      </g>
      <circle cx="350" cy="250" r="90" stroke="#0284C7" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="350" cy="250" r="160" stroke="#0284C7" strokeWidth="1" fill="none" opacity="0.3" />
      <path
        d="M120 340 C 200 280, 240 380, 300 300 S 420 160, 470 220 S 580 150, 600 100"
        fill="none"
        stroke="#0284C7"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="120" cy="340" r="6" fill="#FFFFFF" />
      <circle cx="600" cy="100" r="6" fill="#0284C7" />
    </svg>
  );
}
