/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Cabeceras de seguridad para todas las rutas. COOP permite popups
  // (enlaces de afiliado en pestaña nueva, ventanas de AdSense).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Slug antiguo (orden inverso) de la misma comparativa.
      {
        source: "/comparativas/coros-pace-3-vs-garmin-forerunner-165",
        destination: "/comparativas/garmin-forerunner-165-vs-coros-pace-3",
        permanent: true,
      },
      // Guía de trail con mapas fusionada en la guía pilar de montaña.
      // statusCode 301 explícito: permanent: true respondería 308.
      {
        source: "/guias/mejores-relojes-gps-trail-running-y-montana-con-mapas",
        destination: "/guias/mejores-relojes-gps-trail-montana",
        statusCode: 301,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/I/**",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        pathname: "/images/I/**",
      },
    ],
  },
};
module.exports = nextConfig;
