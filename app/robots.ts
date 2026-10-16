import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Googlebot-Image solo lee su propio grupo si existe: se le da
      // acceso explícito a imágenes e iconos (favicon.ico, icon.png,
      // apple-icon.png, /images/ y /_next/image).
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
