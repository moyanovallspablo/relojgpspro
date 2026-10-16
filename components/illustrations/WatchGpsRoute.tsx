export default function WatchGpsRoute({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 720"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wgrSky" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="55%" stopColor="#F4F4F5" />
          <stop offset="100%" stopColor="#E4E4E7" />
        </linearGradient>
        <radialGradient id="wgrLight" cx="35%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wgrCase" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3F3F46" />
          <stop offset="55%" stopColor="#18181B" />
          <stop offset="100%" stopColor="#09090B" />
        </linearGradient>
        <linearGradient id="wgrStrap" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#27272A" />
          <stop offset="100%" stopColor="#09090B" />
        </linearGradient>
        <filter id="wgrBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
        <filter id="wgrShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#09090B" floodOpacity="0.28" />
        </filter>
      </defs>

      {/* Fondo: luz difusa de exterior, sensación fotográfica */}
      <rect width="600" height="720" fill="url(#wgrSky)" />
      <circle cx="90" cy="620" r="220" fill="#0284C7" opacity="0.12" filter="url(#wgrBlur)" />
      <circle cx="520" cy="120" r="180" fill="#FFFFFF" opacity="0.5" filter="url(#wgrBlur)" />

      {/* Correa saliendo de encuadre, estilo macro editorial */}
      <path
        d="M60 720 C 140 560, 190 480, 250 420 L 340 490 C 280 560, 230 640, 190 720 Z"
        fill="url(#wgrStrap)"
      />
      <path
        d="M60 720 C 140 560, 190 480, 250 420"
        stroke="#3F3F46"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      {/* Caja del reloj */}
      <g filter="url(#wgrShadow)">
        <rect x="150" y="230" width="300" height="300" rx="64" fill="url(#wgrCase)" />
        <rect x="150" y="230" width="300" height="300" rx="64" fill="url(#wgrLight)" opacity="0.5" />
      </g>

      {/* Pantalla */}
      <rect x="182" y="262" width="236" height="236" rx="40" fill="#09090B" />
      <rect x="182" y="262" width="236" height="236" rx="40" fill="none" stroke="#27272A" strokeWidth="2" />

      {/* Ruta GPS activa en pantalla */}
      <path
        d="M212 430 C 235 400, 220 370, 250 360 S 300 330, 290 300 S 330 290, 360 315 S 392 350, 388 380"
        fill="none"
        stroke="#0284C7"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="212" cy="430" r="6" fill="#FFFFFF" />
      <circle cx="388" cy="380" r="6" fill="#0284C7" />

      {/* Lectura de datos, sensación de sesión de entrenamiento real */}
      <text x="200" y="300" fontFamily="ui-monospace, monospace" fontSize="15" fill="#FFFFFF" opacity="0.55">
        RUTA ACTIVA
      </text>
      <text x="200" y="470" fontFamily="ui-monospace, monospace" fontSize="30" fill="#FFFFFF" fontWeight="600">
        8.4 KM
      </text>

      {/* Corona / botón lateral */}
      <rect x="446" y="330" width="16" height="46" rx="6" fill="#3F3F46" />
    </svg>
  );
}
