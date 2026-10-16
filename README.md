# RelojGPSPro

Portal de contenido sobre relojes GPS y tecnología de entrenamiento. Primera
versión centrada en contenido, guías, análisis y comparativas — sin tienda,
sin IA, sin cuestionarios ni cuentas de usuario.

## Poner en marcha

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura

- `app/` — rutas (App Router de Next.js)
- `components/` — componentes de UI, organizados por sección
- `lib/types/` — modelo de datos (Watch, Comparison, Guide)
- `lib/data/` — datos de DEMOSTRACIÓN (relojes, comparativas y guías ficticios)

## Notas importantes

- Todos los relojes en `lib/data/watches.ts` son productos ficticios
  (`isDemoProduct: true`). No representan relojes reales a la venta.
- Las guías en `lib/data/guides.ts` tienen la estructura y metadatos
  preparados, pero el campo `content` está en `null` hasta que se redacten
  los artículos.
- El modelo de datos está preparado para incorporar relojes reales sin
  cambiar la arquitectura: basta con sustituir los datos de demostración
  por datos reales y completar los campos que hoy están en `null`.
- No se ha implementado GSAP/ScrollTrigger ni animaciones avanzadas — se
  añadirán en una fase posterior, una vez aprobado el diseño visual.

## Próximos pasos sugeridos

1. Revisar visualmente la primera versión (colores, tipografía, spacing).
2. Redactar el contenido de las guías (`content` en `guides.ts`).
3. Sustituir productos de demostración por relojes reales.
4. Añadir imágenes reales de producto en `public/images/watches/`.
5. Decidir el nombre definitivo del proyecto.
