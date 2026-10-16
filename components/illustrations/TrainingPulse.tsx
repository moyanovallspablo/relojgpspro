export default function TrainingPulse({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 300" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pulseBg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FAFBFB" />
          <stop offset="100%" stopColor="#F4F4F5" />
        </linearGradient>
      </defs>
      <rect width="800" height="300" fill="url(#pulseBg)" />
      <path
        d="M0 150 L120 150 L150 90 L180 210 L210 60 L240 150 L340 150 L370 110 L400 190 L430 150 L800 150"
        fill="none"
        stroke="#0284C7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g stroke="#09090B" strokeWidth="0.5" opacity="0.1">
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="300" />
        ))}
      </g>
    </svg>
  );
}
