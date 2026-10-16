export default function MountainTrail({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 450" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="mtnBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#F4F4F5" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#mtnBg)" />
      <path d="M0 320 L140 160 L230 260 L340 90 L470 320 L560 220 L680 320 L800 240 L800 450 L0 450 Z" fill="#09090B" opacity="0.9" />
      <path d="M0 360 L180 250 L320 340 L480 230 L620 350 L800 280 L800 450 L0 450 Z" fill="#27272A" opacity="0.55" />
      <path
        d="M20 400 C 140 380, 180 420, 260 390 S 400 340, 480 370 S 640 330, 760 360"
        fill="none"
        stroke="#0284C7"
        strokeWidth="3"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
      <circle cx="20" cy="400" r="6" fill="#0284C7" />
      <circle cx="760" cy="360" r="6" fill="#0284C7" />
    </svg>
  );
}
