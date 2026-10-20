import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdSenseLoader from "@/components/ads/AdSenseLoader";
import {
  ADSENSE_CLIENT_ID,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_OPEN_GRAPH,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

// Solo valores válidos para TODAS las páginas: canonical, og:url y
// og:title/description se heredarían tal cual en cada página que no
// los redefina, así que viven en app/page.tsx y en cada ficha.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  // Ficheros en app/: icon.png (512x512), apple-icon.png (180x180) y
  // favicon.ico (16/32/48 px), que Google usa en los resultados.
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  robots: { index: true, follow: true },
  openGraph: DEFAULT_OPEN_GRAPH,
  twitter: { card: "summary_large_image", images: [DEFAULT_OG_IMAGE.url] },
  // Verificación de AdSense en el HTML inicial: el script de anuncios se
  // carga tras la primera interacción y no está en el <head> servido.
  other: { "google-adsense-account": ADSENSE_CLIENT_ID },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        {/* Solo resuelve el DNS de AdSense: el script se pide tras la
            primera interacción, y un preconnect se cerraría sin usarse
            (Lighthouse lo marca como preconexión no utilizada). */}
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <GoogleTagManager gtmId="GTM-T9KP6NVH" />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <AdSenseLoader />
        <Analytics />
      </body>
    </html>
  );
}
