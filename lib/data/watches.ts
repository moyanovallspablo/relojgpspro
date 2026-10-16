import { Watch } from "@/lib/types/watch";

// Catálogo de relojes REALES. 8 de las 9 fichas cuentan con fuentes
// oficiales (web o manual del fabricante) y, salvo el Forerunner 55,
// también de análisis (DC Rainmaker), persistidas en priceSource y
// specsSource. Verificadas a fecha 29/09/2026, excepto el
// Forerunner 55 (22/09/2026). El Venu 3 (añadido el 06/10/2026) tiene
// ASIN, imagen y precios (06/10/2026) comprobados en Garmin España y
// Amazon.es, pero sus specs siguen pendientes de registrar con fuente
// (specsSource vacío).
//
// Precios: officialPrice/observedPrice son los valores a mostrar;
// priceSource guarda de dónde sale la verificación (URL, tienda,
// fecha). Si una ficha no tiene PVPR oficial confirmado,
// officialPrice/officialUrl quedan en null — no se inventan.
//
// Specs: specsSource.urls es un array de fuentes para el bloque
// técnico completo del reloj (mínimo viable pedido en la fase 1).
//
// Imágenes: coverImage apunta a la imagen principal oficial del
// producto en Amazon.es (m.media-amazon.com, obtenida de la ficha de
// su amazonAsin el 30/09/2026); source guarda esa ficha. gallery sigue
// en [] en las 9 fichas. Si se vacía coverImage, los componentes caen
// al marcador genérico existente.
//
// Compra: amazonAsin guarda el ASIN real de Amazon.es de cada modelo
// (localizado el 29/09/2026). El enlace con el tag de afiliado se
// genera en lib/affiliates.ts; sin ASIN ni affiliateUrl, el botón de
// compra no se muestra.

export const watches: Watch[] = [
  {
    slug: "garmin-forerunner-55",
    name: "Forerunner 55",
    brand: "Garmin",
    officialPrice: null,
    observedPrice: 184.22,
    priceNote:
      "Precio observado en PcComponentes España (color negro, con descuento) el 22/09/2026.",
    priceRange: "entrada",
    priceSource: {
      officialUrl: null,
      observedUrl: "https://www.pccomponentes.com/garmin-forerunner-55-smartwatch-negro",
      store: "PcComponentes España",
      verifiedAt: "2026-09-22",
    },
    weightGrams: 37,
    batteryLifeHours: 336, // hasta 2 semanas en modo reloj inteligente
    gps: true,
    gpsAccuracyNotes:
      "GPS, GLONASS y Galileo, sin doble frecuencia (multibanda). Autonomía en modo GPS: hasta 20 horas.",
    heartRate: { wrist: true, chestStrapCompatible: true },
    screen: { type: "MIP", alwaysOn: true },
    maps: false,
    navigation: false,
    altimeter: null,
    trainingMetrics: [
      "Frecuencia cardíaca",
      "Ritmo",
      "Distancia",
      "Calorías",
      "Entrenamientos diarios sugeridos",
    ],
    waterResistance: "5 ATM",
    specsSource: {
      urls: [
        "https://www8.garmin.com/manuals/webhelp/GUID-3A791586-B59F-4B37-B9C5-5A41F8C6BE0B/ES-XM/GUID-A47987A4-F350-44DB-95A0-67FCF153891B.html",
      ],
      verifiedAt: "2026-09-22",
    },
    summary:
      "El reloj de entrada de Garmin: ligero, con autonomía sobresaliente y las funciones justas para empezar a entrenar con estructura, sin mapas ni pantalla a color.",
    practicalExplanation:
      "La falta de altímetro y mapas no es un problema si corres por rutas conocidas y en llano; en montaña o trail sin señalizar sí se nota. El GPS, aunque sin multibanda, es más que suficiente para entrenar en ciudad o campo abierto.",
    pros: [
      "Muy ligero (37 g) y cómodo para llevar todo el día",
      "Autonomía sobresaliente para un reloj de entrada (hasta 2 semanas)",
      "Entrenamientos diarios sugeridos según tu forma física y recuperación",
      "El más accesible del catálogo Garmin",
    ],
    cons: [
      "Sin altímetro barométrico ni mapas",
      "GPS sin multibanda: pierde algo de precisión en ciudad o bosque denso",
      "Pantalla MIP con colores básicos frente a paneles AMOLED modernos",
      "Sin Garmin Pay ni almacenamiento de música",
    ],
    idealFor: ["correr-basico"],
    notIdealFor: ["trail-montana", "navegacion-mapas"],
    alternatives: ["polar-pacer", "garmin-forerunner-165"],
    coverImage: {
      src: "https://m.media-amazon.com/images/I/518z0My1ZlS._AC_SL1414_.jpg",
      alt: "Garmin Forerunner 55 en color negro",
      source: "https://www.amazon.es/dp/B092RCLKHN",
    },
    gallery: [],
    amazonAsin: "B092RCLKHN", // Amazon.es, negro (010-02562-00)
    isDemoProduct: false,
  },
  {
    slug: "polar-pacer",
    name: "Pacer",
    brand: "Polar",
    officialPrice: 199.9,
    observedPrice: 143.94,
    priceNote:
      "PVPR original de lanzamiento de 199,90 €. En la tienda oficial de Polar España se encuentra actualmente con descuento a 143,94 €, ofreciendo un precio muy accesible en distribuidores.",
    priceRange: "entrada",
    priceSource: {
      officialUrl: "https://www.polar.com/es/pacer",
      observedUrl: "https://www.polar.com/es/pacer",
      store: "Polar Official / Distribuidores ES",
      verifiedAt: "2026-09-29",
    },
    weightGrams: 40,
    batteryLifeHours: 168, // hasta 7 días en modo reloj
    gps: true,
    gpsAccuracyNotes:
      "GPS, GLONASS, Galileo y QZSS, sin doble frecuencia. Autonomía en modo entrenamiento con GPS y FC: hasta 35 horas.",
    heartRate: { wrist: true, chestStrapCompatible: true },
    screen: { type: "MIP", alwaysOn: true },
    maps: false,
    navigation: false,
    altimeter: "no", // confirmado sin barómetro ni altímetro (sí lo tiene el Pacer Pro)
    trainingMetrics: [
      "Frecuencia cardíaca (Precision Prime)",
      "Training Load Pro (carga de entrenamiento)",
      "Nightly Recharge (recuperación nocturna)",
      "FitSpark (entrenamientos diarios sugeridos)",
      "Running Index",
      "FuelWise (gestión de energía)",
      "Sleep Plus Stages",
      "Test de forma física",
    ],
    waterResistance: "5 ATM",
    specsSource: {
      urls: [
        "https://www.polar.com/es/pacer",
        "https://www.dcrainmaker.com/2022/04/polar-pacer-pro-gps-running-watch-in-depth-review.html",
      ],
      verifiedAt: "2026-09-29",
    },
    summary:
      "Un reloj ligero centrado en frecuencia cardíaca y herramientas de carga y recuperación, sin mapas ni altímetro — pensado para quien entrena con estructura en terreno conocido.",
    practicalExplanation:
      "Polar prioriza el análisis de carga y recuperación por encima de la navegación: si lo que buscas es entender cómo entrenas, no dónde vas, encaja bien. Para salir a terreno desconocido no aporta nada, ya que carece de mapas y de altímetro.",
    pros: [
      "Muy ligero (40 g) y cómodo para llevar todo el día",
      "Buena medición de frecuencia cardíaca en la muñeca (Precision Prime)",
      "Herramientas de carga y recuperación (Training Load Pro) poco habituales en esta gama de precio",
      "Autonomía sobrada para entrenar toda la semana sin cargar",
    ],
    cons: [
      "Sin altímetro ni mapas",
      "GPS sin doble frecuencia",
      "Pantalla MIP con colores básicos frente a paneles AMOLED modernos",
      "Ecosistema de navegación más limitado que el de Garmin o COROS",
    ],
    idealFor: ["correr-basico", "entrenamiento-estructurado"],
    notIdealFor: ["trail-montana", "navegacion-mapas"],
    alternatives: ["garmin-forerunner-55", "garmin-forerunner-165"],
    coverImage: {
      src: "https://m.media-amazon.com/images/I/71e1AtMFVwL._AC_SL1500_.jpg",
      alt: "Polar Pacer",
      source: "https://www.amazon.es/dp/B09V7V45XP",
    },
    gallery: [],
    amazonAsin: "B09V7V45XP", // Amazon.es, Pacer (no Pacer Pro)
    isDemoProduct: false,
  },
  {
    slug: "garmin-forerunner-165",
    name: "Forerunner 165",
    brand: "Garmin",
    officialPrice: null,
    observedPrice: 194.49,
    priceNote:
      "Precio observado en Decathlon España (color negro y gris oscuro, en oferta) el 29/09/2026. La web oficial de Garmin España no muestra un PVPR directo para este modelo, así que no se indica precio oficial hasta poder confirmarlo con una fuente concluyente.",
    priceRange: "gama-media",
    priceSource: {
      officialUrl: null,
      observedUrl:
        "https://www.decathlon.es/es/p/reloj-gps-garmin-forerunner-165-negro-y-gris-oscuro/359163/c1m8916517",
      store: "Decathlon España",
      verifiedAt: "2026-09-29",
    },
    weightGrams: 39,
    batteryLifeHours: 264, // hasta 11 días en modo reloj inteligente
    gps: true,
    gpsAccuracyNotes:
      "GPS, GLONASS y Galileo, sin doble frecuencia. Autonomía con todos los sistemas GNSS activados: hasta 17 horas (hasta 19 h en modo solo GPS).",
    heartRate: { wrist: true, chestStrapCompatible: true },
    screen: { type: "AMOLED", alwaysOn: true },
    maps: false,
    navigation: true,
    altimeter: "barométrico",
    trainingMetrics: [
      "Frecuencia cardíaca",
      "VO2 máx. estimado",
      "Potencia de carrera en la muñeca",
      "Tiempo de recuperación",
      "Body Battery",
    ],
    waterResistance: "5 ATM",
    specsSource: {
      urls: [
        "https://www.garmin.com/en-US/newsroom/press-release/sports-fitness/light-up-your-run-with-the-garmin-forerunner-165-series-easy-to-use-gps-running-smartwatches-with-vibrant-amoled-displays/",
        "https://www8.garmin.com/manuals/webhelp/GUID-607F08F6-33FC-40BF-9727-84E54043D82D/EN-US/GUID-DF260354-8DA9-4665-9147-BAD155A08C20.html",
        "https://www.dcrainmaker.com/2024/02/garmin-forerunner-165-depth-review.html",
      ],
      verifiedAt: "2026-09-29",
    },
    summary:
      "El primer Forerunner económico con pantalla AMOLED: añade altímetro barométrico y navegación básica sobre el Forerunner 55, sin llegar a los mapas completos de las gamas superiores.",
    practicalExplanation:
      "El altímetro barométrico y la navegación por 'migas de pan' lo hacen algo más versátil que el 55 para salidas con desnivel, aunque sigue sin mapas completos: para trail exigente o rutas nuevas sin referencias claras no es suficiente.",
    pros: [
      "Pantalla AMOLED nítida y a color, algo inédito en este rango de precio de Garmin",
      "Altímetro barométrico y navegación básica (ruta de migas de pan)",
      "Garmin Pay para pagos sin contacto",
      "Buena autonomía para llevar pantalla AMOLED (hasta 11 días)",
    ],
    cons: [
      "Sin GPS multibanda",
      "No incluye mapas completos, solo trazado de ruta",
      "Sin puntuación de Training Readiness ni compatibilidad con medidores de potencia de ciclismo",
      "La música offline solo está en la versión Music, con coste adicional",
    ],
    idealFor: ["entrenamiento-estructurado", "correr-basico"],
    notIdealFor: ["trail-montana", "navegacion-mapas"],
    alternatives: ["garmin-forerunner-55", "coros-pace-3"],
    coverImage: {
      src: "https://m.media-amazon.com/images/I/61QNFC611eL._AC_SL1500_.jpg",
      alt: "Garmin Forerunner 165 en color negro",
      source: "https://www.amazon.es/dp/B0CT3SGHXL",
    },
    gallery: [],
    amazonAsin: "B0CT3SGHXL", // Amazon.es, negro (sin Music)
    isDemoProduct: false,
  },
  {
    slug: "coros-pace-3",
    name: "PACE 3",
    brand: "COROS",
    officialPrice: 249,
    observedPrice: 249,
    priceNote:
      "PVPR de referencia en España de 249,00 € (versión correa de silicona/nylon). La disponibilidad en la web oficial oscila debido a la llegada del COROS Pace 4, manteniéndose disponible en distribuidores autorizados como Decathlon o Amazon.",
    priceRange: "gama-media",
    priceSource: {
      officialUrl: "https://coros.com/pace3",
      observedUrl: "https://coros.com/pace3",
      store: "COROS Official",
      verifiedAt: "2026-09-29",
    },
    weightGrams: 39, // 30 g con correa de nylon
    batteryLifeHours: 360, // hasta 15 días de uso diario
    gps: true,
    gpsAccuracyNotes:
      "GPS multibanda real (doble frecuencia) con GPS, GLONASS, Galileo, Beidou y QZSS. Autonomía en modo GPS estándar: hasta 38 horas (15 h en modo doble frecuencia).",
    heartRate: { wrist: true, chestStrapCompatible: true },
    screen: { type: "MIP", alwaysOn: true },
    maps: false,
    navigation: true,
    altimeter: "barométrico",
    trainingMetrics: [
      "Frecuencia cardíaca y SpO2",
      "Altímetro barométrico",
      "Fases del sueño",
      "Planes de entrenamiento COROS",
      "Métricas específicas de trail",
    ],
    waterResistance: "5 ATM",
    specsSource: {
      urls: [
        "https://coros.com/pace3",
        "https://www.dcrainmaker.com/2023/11/coros-depth-review.html",
      ],
      verifiedAt: "2026-09-29",
    },
    summary:
      "El reloj de entrada de COROS: GPS multibanda real, autonomía muy alta y música integrada, con una pantalla y unos materiales más sencillos que el resto del catálogo COROS.",
    practicalExplanation:
      "El GPS multibanda es un salto real de precisión frente al Forerunner 55/165 y el Polar Pacer en ciudad o bosque, y la autonomía es de las mejores de su categoría — pero, como los otros, no incluye mapas completos, solo el trazado de tu propia ruta.",
    pros: [
      "GPS multibanda real, con gran precisión de ritmo y distancia",
      "Autonomía muy alta para lo que ofrece (hasta 15 días; 38 h en GPS completo)",
      "Reproduce música propia sin depender del móvil",
      "Muy ligero (30-39 g según la correa)",
    ],
    cons: [
      "Sin mapas completos, solo navegación por ruta/migas de pan",
      "Ecosistema y tienda de aplicaciones más limitados que Garmin",
      "Sin pagos sin contacto",
      "Materiales más sencillos que otras gamas altas de COROS",
    ],
    idealFor: ["entrenamiento-estructurado", "trail-montana"],
    notIdealFor: ["navegacion-mapas"],
    alternatives: ["garmin-forerunner-165", "garmin-instinct-2", "suunto-race-s"],
    coverImage: {
      src: "https://m.media-amazon.com/images/I/81OX6InPf2L._AC_SL1500_.jpg",
      alt: "COROS PACE 3",
      source: "https://www.amazon.es/dp/B0CFQQ9FDL",
    },
    gallery: [],
    amazonAsin: "B0CFQQ9FDL", // Amazon.es, silicona negra
    isDemoProduct: false,
  },
  {
    slug: "garmin-instinct-2",
    name: "Instinct 2",
    brand: "Garmin",
    officialPrice: 299.99,
    observedPrice: 189,
    priceNote:
      "PVPR oficial de referencia de 299,99 € en la web de Garmin España. Se encuentra habitualmente en oferta en distribuidores autorizados en torno a los 179-189 €.",
    priceRange: "gama-media",
    priceSource: {
      officialUrl: "https://www.garmin.com/es-ES/p/775421",
      observedUrl: "https://www.garmin.com/es-ES/p/775421",
      store: "Garmin Official / Distribuidores ES",
      verifiedAt: "2026-09-29",
    },
    weightGrams: 52,
    batteryLifeHours: 672, // hasta 28 días en modo reloj inteligente
    gps: true,
    gpsAccuracyNotes:
      "GPS, GLONASS y Galileo, sin doble frecuencia. Autonomía en modo GPS: hasta 30 horas (hasta 70 h en modo de máxima duración de batería).",
    heartRate: { wrist: true, chestStrapCompatible: true },
    screen: { type: "MIP", alwaysOn: true },
    maps: false,
    navigation: true,
    altimeter: "barométrico",
    trainingMetrics: [
      "Frecuencia cardíaca",
      "Pulsioximetría (SpO2)",
      "Body Battery",
      "Estrés y sueño",
      "Estado de VFC (HRV Status)",
      "Tiempo de recuperación y carga de entrenamiento",
      "Perfiles multideporte",
    ],
    waterResistance: "10 ATM",
    specsSource: {
      urls: [
        "https://www.garmin.com/es-ES/p/775421",
        "https://www.dcrainmaker.com/2022/02/garmin-instinct2-review.html",
      ],
      verifiedAt: "2026-09-29",
    },
    summary:
      "El reloj más resistente del catálogo: pensado para aguantar condiciones duras y muchos días sin cargar, priorizando la robustez y la autonomía sobre la pantalla o la precisión GPS.",
    practicalExplanation:
      "Su punto fuerte no es la precisión GPS ni la pantalla, sino aguantar: 28 días de batería y una construcción probada bajo el estándar militar MIL-STD-810 lo hacen buena opción para salidas largas o entornos exigentes, no para quien prioriza una pantalla a color.",
    pros: [
      "Autonomía enorme: hasta 28 días en modo reloj y hasta 30 h con GPS activo",
      "Construcción robusta, probada bajo el estándar militar MIL-STD-810",
      "Resistencia al agua de 10 ATM, superior al resto del catálogo",
      "Altímetro barométrico y brújula de 3 ejes",
    ],
    cons: [
      "Pantalla monocroma pequeña (0,9\"), sin color ni AMOLED",
      "Sin mapas completos, solo navegación básica (TracBack)",
      "GPS sin multibanda",
      "Más pesado que el resto del catálogo (52 g)",
    ],
    idealFor: ["trail-montana", "oposiciones"],
    notIdealFor: ["navegacion-mapas"],
    alternatives: ["coros-pace-3", "suunto-race-s"],
    coverImage: {
      src: "https://m.media-amazon.com/images/I/61Z2H0MspJL._AC_SL1500_.jpg",
      alt: "Garmin Instinct 2 en color negro",
      source: "https://www.amazon.es/dp/B09MTP5QXS",
    },
    gallery: [],
    amazonAsin: "B09MTP5QXS", // Amazon.es, negro (no Solar)
    isDemoProduct: false,
  },
  {
    slug: "garmin-forerunner-265",
    name: "Forerunner 265",
    brand: "Garmin",
    officialPrice: 499.99,
    observedPrice: 429,
    priceNote:
      "PVPR oficial de 499,99 € en Garmin España. Se encuentra habitualmente rebajado a unos 429 € en tiendas y distribuidores especializados.",
    priceRange: "gama-alta",
    priceSource: {
      officialUrl: "https://www.garmin.com/es-ES/p/886785",
      observedUrl: "https://www.garmin.com/es-ES/p/886785",
      store: "Garmin Official / Distribuidores ES",
      verifiedAt: "2026-09-29",
    },
    weightGrams: 47,
    batteryLifeHours: 312, // hasta 13 días en modo reloj inteligente
    gps: true,
    gpsAccuracyNotes:
      "GPS multibanda real con tecnología SatIQ (selección automática del mejor sistema). Autonomía en modo GPS: hasta 20 horas (14 h con todos los sistemas y multibanda activados).",
    heartRate: { wrist: true, chestStrapCompatible: true },
    screen: { type: "AMOLED", alwaysOn: true },
    maps: false,
    navigation: true,
    altimeter: "barométrico",
    trainingMetrics: [
      "Frecuencia cardíaca",
      "Training Readiness",
      "VO2 máx. estimado",
      "Potencia de carrera en la muñeca",
      "Body Battery y variabilidad de la FC (HRV)",
    ],
    waterResistance: "5 ATM",
    specsSource: {
      urls: [
        "https://www.garmin.com/es-ES/p/886785",
        "https://www.dcrainmaker.com/2023/03/garmin-forerunner-review-amoled.html",
      ],
      verifiedAt: "2026-09-29",
    },
    summary:
      "El Forerunner de gama media-alta de Garmin: pantalla AMOLED táctil, GPS multibanda real y métricas de entrenamiento avanzadas (Training Readiness, HRV), sin llegar a los mapas completos de los modelos superiores.",
    practicalExplanation:
      "El GPS multibanda con SatIQ es un salto de precisión real frente al Forerunner 165 o el 55 en ciudad o bosque, y añade Training Readiness y HRV que esos modelos no tienen — pero sigue sin mapas topográficos completos, así que para navegación seria en montaña se queda corto frente al 965 o el Suunto Race S.",
    pros: [
      "GPS multibanda real con tecnología SatIQ",
      "Pantalla AMOLED táctil de alta resolución",
      "Training Readiness, VO2 máx. y HRV, poco habituales en esta gama de precio",
      "Buena autonomía para llevar pantalla AMOLED (hasta 13 días)",
    ],
    cons: [
      "Sin mapas topográficos completos",
      "Precio bastante más alto que el Forerunner 165",
      "La autonomía baja notablemente con GPS multibanda y música activados",
    ],
    idealFor: ["entrenamiento-estructurado", "multideporte-triatlon"],
    notIdealFor: ["navegacion-mapas"],
    alternatives: ["garmin-forerunner-165", "coros-pace-3", "suunto-race-s"],
    coverImage: {
      src: "https://m.media-amazon.com/images/I/71rp-pRCpRL._AC_SL1500_.jpg",
      alt: "Garmin Forerunner 265 en color negro",
      source: "https://www.amazon.es/dp/B0BS1T9J4Y",
    },
    gallery: [],
    amazonAsin: "B0BS1T9J4Y", // Amazon.es, negro (46 mm, no 265S)
    isDemoProduct: false,
  },
  {
    slug: "garmin-venu-3",
    name: "Venu 3",
    brand: "Garmin",
    officialPrice: 429.99,
    observedPrice: 344.34,
    priceNote:
      "PVPR oficial de 429,99 € en Garmin España (color negro). Precio observado en Amazon.es (color negro, con descuento) el 06/10/2026: 344,34 €.",
    priceRange: "gama-alta",
    priceSource: {
      officialUrl: "https://www.garmin.com/es-ES/p/873008",
      observedUrl: "https://www.amazon.es/dp/B0CDC6H66Y",
      store: "Amazon.es",
      verifiedAt: "2026-10-06",
    },
    weightGrams: 46,
    batteryLifeHours: 336, // hasta 14 días en modo reloj inteligente
    gps: true,
    gpsAccuracyNotes:
      "GPS, GLONASS y Galileo, sin doble frecuencia (multibanda). Autonomía en modo GPS: hasta 26 horas.",
    heartRate: { wrist: true, chestStrapCompatible: true },
    screen: { type: "AMOLED", alwaysOn: true },
    maps: false,
    navigation: false,
    altimeter: "barométrico",
    trainingMetrics: [
      "Frecuencia cardíaca",
      "Sueño y siestas",
      "Temperatura de la piel (durante el sueño)",
      "ECG (app Garmin ECG)",
      "Variabilidad de la frecuencia cardíaca (HRV)",
      "Body Battery",
      "Ritmo y distancia",
      "Calorías y Pasos",
      "VO2 Max estimado",
    ],
    waterResistance: "5 ATM",
    specsSource: {
      urls: [],
      verifiedAt: null,
    },
    summary:
      "El smartwatch deportivo definitivo con pantalla AMOLED, llamadas desde la muñeca y métricas de salud avanzadas.",
    practicalExplanation:
      "El Garmin Venu 3 cierra la brecha entre un smartwatch de estilo de vida premium y un reloj de entrenamiento riguroso. La adición de altavoz y micrófono permite responder llamadas y activar asistentes de voz sin sacar el teléfono, mientras que el nuevo sensor Elevate v5 garantiza mediciones de pulso y HRV de la máxima precisión. Aunque carece de navegación por mapas y métricas de entrenamiento orientadas a la alta competición (como el Training Readiness de la saga Forerunner), es la mejor opción para quien busca salud integral, seguimiento deportivo y conectividad diaria.",
    pros: [
      "Pantalla AMOLED táctil de 1,4\" ultrabrillante con bisel de acero inoxidable",
      "Micrófono y altavoz integrados para llamadas y asistente de voz desde la muñeca",
      "Sensor óptico Elevate v5 de última generación con precisión impecable y lectura de HRV",
      "Entrenador de sueño (Sleep Coach), detección de siestas, temperatura de la piel nocturna y Body Battery mejorado",
      "Excelente autonomía de hasta 14 días en uso smartwatch frente a otros relojes inteligentes",
    ],
    cons: [
      "Sin navegación por mapas ni rutas por migas de pan nativas",
      "Sin GPS multibanda de doble frecuencia",
      "Sin métricas avanzadas de rendimiento de carrera (Training Readiness, Estado de Forma)",
    ],
    idealFor: ["correr-basico"],
    notIdealFor: ["trail-montana", "navegacion-mapas", "entrenamiento-estructurado"],
    alternatives: ["garmin-forerunner-265", "garmin-forerunner-165"],
    coverImage: {
      src: "https://m.media-amazon.com/images/I/71Y53xvUAEL._AC_SL1500_.jpg",
      alt: "Garmin Venu 3 en color negro",
      source: "https://www.amazon.es/dp/B0CDC6H66Y",
    },
    gallery: [],
    amazonAsin: "B0CDC6H66Y", // Amazon.es, negro (010-02784-01)
    isDemoProduct: false,
  },
  {
    slug: "suunto-race-s",
    name: "Race S",
    brand: "Suunto",
    officialPrice: 349,
    observedPrice: 349,
    priceNote:
      "PVPR oficial de 349,00 € en Suunto España para la versión de acero inoxidable. Mantiene un precio muy competitivo e hiperestable.",
    priceRange: "gama-media",
    priceSource: {
      officialUrl: "https://www.suunto.com/es-es/Productos/Relojes-deportivos/suunto-race-s/",
      observedUrl: "https://www.suunto.com/es-es/Productos/Relojes-deportivos/suunto-race-s/",
      store: "Suunto Official / Distribuidores ES",
      verifiedAt: "2026-09-29",
    },
    weightGrams: 60,
    batteryLifeHours: 216, // hasta 9 días de uso diario
    gps: true,
    gpsAccuracyNotes:
      "GPS multibanda real (doble frecuencia) con 5 sistemas de satélites. Autonomía en el modo de mejor precisión: hasta 30 horas (hasta 40 h en modo Endurance).",
    heartRate: { wrist: true, chestStrapCompatible: true },
    screen: { type: "AMOLED", alwaysOn: true },
    maps: true,
    navigation: true,
    altimeter: "barométrico",
    trainingMetrics: [
      "Frecuencia cardíaca y HRV",
      "VO2 máx. estimado",
      "Carga y recuperación (Suunto Coach)",
      "Más de 95 modos deportivos",
      "Guía de ascensos (Climb Guidance)",
    ],
    waterResistance: "50 m",
    specsSource: {
      urls: [
        "https://www.suunto.com/es-es/Productos/Relojes-deportivos/suunto-race-s/",
        "https://www.dcrainmaker.com/2024/06/suunto-race-s-in-depth-review.html",
      ],
      verifiedAt: "2026-09-29",
    },
    summary:
      "La opción con mapas más asequible del catálogo: mapas topográficos offline gratuitos y GPS multibanda real en un cuerpo compacto y ligero, aunque con un ecosistema de aplicaciones más limitado que Garmin.",
    practicalExplanation:
      "Es el único reloj de esta gama de precio con mapas topográficos incluidos sin coste adicional, lo que lo hace especialmente interesante para trail y montaña. A cambio, su ecosistema de aplicaciones de terceros es más reducido que el de Garmin, y algunas pruebas independientes han cuestionado la fiabilidad de su pulsómetro de muñeca.",
    pros: [
      "Mapas topográficos offline gratuitos, algo inusual en este rango de precio",
      "GPS multibanda real con gran precisión",
      "Pantalla AMOLED de 1,32\" (466 x 466 px) muy brillante (2000 nits), muy legible al sol",
      "Diseño compacto y ligero (60 g)",
    ],
    cons: [
      "Ecosistema de aplicaciones de terceros más limitado que Garmin",
      "Fiabilidad del pulsómetro de muñeca cuestionada en algunas pruebas independientes",
      "Sin almacenamiento de música offline (necesita el móvil conectado)",
      "Menos funciones de pago sin contacto que la competencia Garmin",
    ],
    idealFor: ["trail-montana", "navegacion-mapas", "multideporte-triatlon"],
    notIdealFor: [],
    alternatives: ["garmin-instinct-2", "coros-pace-3", "garmin-forerunner-965"],
    coverImage: {
      src: "https://m.media-amazon.com/images/I/71jp3pQ5AqL._AC_SL1500_.jpg",
      alt: "Suunto Race S",
      source: "https://www.amazon.es/dp/B0CZ6KTTX1",
    },
    gallery: [],
    amazonAsin: "B0CZ6KTTX1", // Amazon.es, Race S
    isDemoProduct: false,
  },
  {
    slug: "garmin-forerunner-965",
    name: "Forerunner 965",
    brand: "Garmin",
    officialPrice: 649.99,
    observedPrice: 599,
    priceNote:
      "PVPR oficial de 649,99 € en Garmin España (bisel de titanio y pantalla AMOLED). Se encuentra habitualmente con ofertas en distribuidores autorizados en torno a los 580-600 €.",
    priceRange: "premium",
    priceSource: {
      officialUrl: "https://www.garmin.com/es-ES/p/886725",
      observedUrl: "https://www.garmin.com/es-ES/p/886725",
      store: "Garmin Official / Distribuidores ES",
      verifiedAt: "2026-09-29",
    },
    weightGrams: 53,
    batteryLifeHours: 552, // hasta 23 días en modo reloj inteligente
    gps: true,
    gpsAccuracyNotes:
      "GPS multibanda real con tecnología SatIQ. Autonomía en modo GPS: hasta 31 horas (19 h con todos los sistemas y multibanda activados).",
    heartRate: { wrist: true, chestStrapCompatible: true },
    screen: { type: "AMOLED", alwaysOn: true },
    maps: true,
    navigation: true,
    altimeter: "barométrico",
    trainingMetrics: [
      "Frecuencia cardíaca",
      "Training Readiness y carga de entrenamiento",
      "VO2 máx. estimado",
      "Predicción de tiempos de carrera",
      "Stamina en tiempo real",
      "ClimbPro (también sin trayecto cargado, gracias a los mapas)",
      "Perfiles multideporte (triatlón, duatlón, brick)",
    ],
    waterResistance: "5 ATM",
    specsSource: {
      urls: [
        "https://www.garmin.com/es-ES/p/886725",
        "https://www.dcrainmaker.com/2023/03/garmin-forerunner-965-depth-review.html",
      ],
      verifiedAt: "2026-09-29",
    },
    summary:
      "El buque insignia de la serie Forerunner: mapas topográficos a color integrados, bisel de titanio y la mayor autonomía de la gama, pensado para quien entrena en serio y no quiere renunciar a nada.",
    practicalExplanation:
      "Es el único Forerunner del catálogo con mapas topográficos completos integrados, lo que lo acerca a los relojes de aventura de gama alta. Para quien no necesita mapas ni perfiles multideporte, el salto de precio frente al 265 o al Suunto Race S es difícil de justificar.",
    pros: [
      "Mapas topográficos a color integrados, sin depender del móvil",
      "Bisel de titanio, más ligero y resistente que el polímero",
      "Autonomía líder de la gama: hasta 23 días en modo reloj",
      "32 GB de almacenamiento para música",
    ],
    cons: [
      "El más caro del catálogo con diferencia",
      "Peso ligeramente superior al resto de modelos AMOLED del catálogo",
      "La pantalla más grande también consume más batería con uso intensivo",
    ],
    idealFor: ["multideporte-triatlon", "navegacion-mapas", "trail-montana"],
    notIdealFor: [],
    alternatives: ["suunto-race-s", "garmin-forerunner-265", "garmin-instinct-2"],
    coverImage: {
      src: "https://m.media-amazon.com/images/I/716+0qoy3HL._AC_SL1500_.jpg",
      alt: "Garmin Forerunner 965 en color negro",
      source: "https://www.amazon.es/dp/B0BS1XZY7T",
    },
    gallery: [],
    amazonAsin: "B0BS1XZY7T", // Amazon.es, negro (010-02809-00)
    isDemoProduct: false,
  },
];

export function getWatchBySlug(slug: string): Watch | undefined {
  return watches.find((w) => w.slug === slug);
}

export function getWatchesBySlugs(slugs: string[]): Watch[] {
  return slugs
    .map((slug) => getWatchBySlug(slug))
    .filter((w): w is Watch => Boolean(w));
}
