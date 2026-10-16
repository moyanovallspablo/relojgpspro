import { Comparison } from "@/lib/types/comparison";

// Comparativas entre relojes REALES del catálogo. Los resúmenes solo
// recogen diferencias verificadas en lib/data/watches.ts — no se
// declara un "ganador" en ningún caso, y no se han creado más
// comparativas que las que se pueden respaldar con datos verificados.

export const comparisons: Comparison[] = [
  {
    slug: "garmin-forerunner-55-vs-polar-pacer",
    title: "Garmin Forerunner 55 vs Polar Pacer",
    watchSlugs: ["garmin-forerunner-55", "polar-pacer"],
    seoTitle: "Garmin Forerunner 55 vs Polar Pacer: ¿Cuál comprar en 2026?",
    metaDescription:
      "¿Empiezas a correr con poco presupuesto? Forerunner 55 o Polar Pacer: autonomía y sencillez de Garmin frente a las métricas de carga y recuperación de Polar.",
    summary:
      "Dos relojes de iniciación con pantalla MIP siempre encendida, cinco botones y GPS de una frecuencia, sin mapas ni navegación. El Forerunner 55 dura el doble como reloj (2 semanas frente a 7 días), es algo más ligero y suma PacePro y entrenamientos diarios sugeridos con Garmin Connect; el Polar Pacer tiene una pantalla mayor con Gorilla Glass 3, aguanta más con GPS (35 h frente a 20 h) y analiza carga y recuperación con Training Load Pro y Nightly Recharge, por unos 40 € menos.",
    winnerNotes:
      "Si quieres un reloj sencillo que se cargue poco y te diga qué entrenar cada día, el Forerunner 55 es la opción más cómoda. Si te interesa entender cómo te afecta cada entrenamiento y cuánto te recuperas, y haces salidas largas, el Pacer ofrece más por menos dinero.",
    // Datos de las fichas y de las comparativas de cada reloj. Pantalla
    // (tamaño, resolución, Gorilla Glass 3), tamaño de caja y PacePro: fichas
    // técnicas de Garmin y Polar recogidas por tiendas y reviews, ya que no
    // estaban en lib/data/watches.ts.
    specs: [
      {
        label: "Pantalla",
        values: [
          "MIP transflectiva de 1,04\" (208 × 208 px), siempre encendida",
          "MIP transflectiva de 1,2\" (240 × 240 px) con Gorilla Glass 3, siempre encendida",
        ],
      },
      { label: "Tamaño de caja", values: ["42 mm", "45 mm"] },
      { label: "Peso", values: ["37 g", "40 g"] },
      { label: "Controles", values: ["5 botones", "5 botones"] },
      {
        label: "GPS",
        values: [
          "GPS, GLONASS y Galileo — sin doble frecuencia",
          "GPS, GLONASS, Galileo y QZSS — sin doble frecuencia",
        ],
      },
      { label: "Batería (modo reloj)", values: ["Hasta 2 semanas", "Hasta 7 días"] },
      { label: "Batería (GPS)", values: ["Hasta 20 h", "Hasta 35 h (GPS y FC)"] },
      {
        label: "Altímetro",
        values: [
          "No figura en el manual oficial (pendiente de confirmar)",
          "No (altitud calculada por GPS)",
        ],
      },
      { label: "Navegación", values: ["No", "No"] },
      { label: "Mapas", values: ["No", "No"] },
      {
        label: "Métricas de entreno",
        values: [
          "Entrenamientos diarios sugeridos, PacePro (estrategia de ritmo), predicción de tiempos",
          "Training Load Pro, Nightly Recharge, Sleep Plus Stages, FitSpark, Running Index, FuelWise, test de forma física",
        ],
      },
      { label: "Plataforma", values: ["Garmin Connect", "Polar Flow"] },
      { label: "Música offline", values: ["No", "No"] },
      { label: "Pagos sin contacto", values: ["No", "No"] },
      { label: "Resistencia al agua", values: ["5 ATM", "5 ATM"] },
    ],
    content: `
      <h2>Pantalla y diseño: dos MIP, pero no iguales</h2>
      <p>Los dos usan pantallas <strong>MIP transflectivas siempre encendidas</strong>, que se leen mejor cuanto más sol les da y apenas gastan batería. La del <strong>Polar Pacer</strong> es más grande y más definida: <strong>1,2" y 240 × 240 px</strong>, protegida con <strong>Gorilla Glass 3</strong>, frente a <strong>1,04" y 208 × 208 px</strong> en el <strong>Forerunner 55</strong>. En la muñeca se nota: los datos del Pacer se leen con más holgura en plena carrera.</p>
      <p>A cambio, el Garmin es más compacto: caja de <strong>42 mm</strong> y <strong>37 g</strong>, frente a <strong>45 mm</strong> y <strong>40 g</strong> del Polar. Los dos se manejan con <strong>cinco botones</strong>, sin pantalla táctil: todo se controla a ciegas, algo que se agradece al empezar a hacer series. Si dudas entre tecnologías de pantalla, lo explicamos en <a href="/guias/amoled-vs-mip">AMOLED vs MIP</a>.</p>

      <h2>Batería: depende de cómo lo uses</h2>
      <p>Como <strong>reloj del día a día</strong>, gana con claridad el Forerunner 55: <strong>hasta 2 semanas</strong> frente a los <strong>7 días</strong> del Pacer. Si lo llevas siempre puesto y no quieres pensar en el cargador, es una diferencia que se agradece.</p>
      <p>Con el <strong>GPS activo</strong> la situación se invierte: el Pacer llega a <strong>35 horas</strong> con GPS y frecuencia cardíaca, frente a las <strong>20 horas</strong> del Garmin. Para entrenar a diario e incluso para un maratón, los dos van sobrados; si haces tiradas muy largas o te lo llevas de fin de semana, el Polar da más margen.</p>

      <h2>GPS y sensores: igualados en lo básico</h2>
      <p>Ninguno tiene <strong>GPS multibanda</strong>: los dos usan una sola frecuencia, con GPS, GLONASS y Galileo (el Pacer suma QZSS). En parques, carreteras y pista es suficiente; entre edificios altos o en bosque cerrado pierden algo de precisión. Tampoco tienen <strong>mapas ni navegación</strong>, y ninguno incluye altímetro barométrico confirmado: el Pacer calcula la altitud con el GPS y en el Forerunner 55 no figura entre los sensores del manual oficial. Para correr en llano no importa; si haces trail, conviene mirar más arriba. Más contexto en <a href="/guias/que-precision-gps-necesitas-realmente">¿Qué precisión GPS necesitas realmente?</a></p>

      <h2>Métricas de entrenamiento y ecosistema</h2>
      <h3>Garmin: sencillez, PacePro y Garmin Connect</h3>
      <p>El Forerunner 55 está pensado para que no tengas que pensar: te propone <strong>entrenamientos diarios sugeridos</strong> según tu forma y tu recuperación, calcula una <strong>predicción de tiempos</strong> para tus carreras y ofrece <strong>PacePro</strong>, que te marca el ritmo objetivo en cada tramo de un recorrido o distancia. Todo se sincroniza con <strong>Garmin Connect</strong>, una de las apps más completas del mercado, con planes de Garmin Coach e integración con casi cualquier plataforma.</p>
      <h3>Polar: carga, recuperación y Polar Flow</h3>
      <p>El Pacer se centra en entender cómo te afecta el entrenamiento. <strong>Training Load Pro</strong> mide la carga de cada sesión y la acumulada; <strong>Nightly Recharge</strong> valora cada mañana cómo te has recuperado durante la noche; <strong>Sleep Plus Stages</strong> analiza el sueño; <strong>FitSpark</strong> te sugiere entrenamientos diarios; y el <strong>test de forma física</strong> y el <strong>Running Index</strong> te dan una referencia de cómo evoluciona tu forma. Suma <strong>FuelWise</strong> para recordarte cuándo comer en sesiones largas. Todo vive en <strong>Polar Flow</strong>, especialmente fuerte en el análisis de carga. Si quieres saber qué métricas merecen tu atención, lo explicamos en <a href="/guias/que-metricas-de-entrenamiento-importan">¿Qué métricas de entrenamiento importan?</a></p>
      <p>Ninguno de los dos tiene <strong>música offline</strong> ni <strong>pagos sin contacto</strong>.</p>

      <h2>Precio: el Pacer sale más barato</h2>
      <p>Con los precios de referencia de nuestras fichas, el <strong>Polar Pacer</strong> se encuentra por unos <strong>144 €</strong> (PVPR de 199,90 €) y el <strong>Forerunner 55</strong> por unos <strong>184 €</strong>: unos <strong>40 € de diferencia</strong> a favor del Polar. Los precios de esta gama cambian mucho con las ofertas: comprueba la fila de precio de la tabla, con tienda y fecha.</p>
      <ul>
        <li><strong>Por qué pagar algo más por el Forerunner 55:</strong> el doble de autonomía como reloj, un formato más compacto y ligero, PacePro, entrenamientos diarios sugeridos y el ecosistema Garmin Connect.</li>
        <li><strong>Por qué ahorrar con el Polar Pacer:</strong> una pantalla más grande y definida con Gorilla Glass 3, más autonomía con GPS (35 h) y las herramientas de carga y recuperación más completas de esta gama, por unos 40 € menos.</li>
      </ul>
      <p>Si empiezas a correr y quieres un reloj que funcione sin complicaciones, el Forerunner 55 es la apuesta segura. Si te interesa entrenar con estructura y evitar el sobreentrenamiento, el Pacer te da más herramientas por menos dinero. ¿Quieres más detalle? Lee el <a href="/relojes/garmin-forerunner-55">análisis del Forerunner 55</a> y el <a href="/relojes/polar-pacer">del Polar Pacer</a>, mira si compensa subir al <a href="/comparativas/garmin-forerunner-165-vs-polar-pacer">Forerunner 165 frente al Pacer</a> o compara el Garmin con una opción multibanda en <a href="/comparativas/garmin-forerunner-55-vs-coros-pace-3">Forerunner 55 vs COROS PACE 3</a>. Si estás empezando, lee también <a href="/guias/que-reloj-gps-comprar-para-empezar-a-correr">qué reloj GPS comprar para empezar a correr</a> y los <a href="/guias/mejores-relojes-gps-menos-200-euros">mejores relojes GPS por menos de 200 €</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-forerunner-55",
        heading: "Elige el Garmin Forerunner 55 si…",
        points: [
          "Quieres el reloj que menos se carga: hasta 2 semanas como reloj del día a día.",
          "Prefieres que el reloj te diga qué entrenar cada día y te marque el ritmo con PacePro.",
          "Buscas el formato más compacto y ligero (42 mm y 37 g).",
          "Valoras el ecosistema Garmin Connect y sus planes de entrenamiento.",
        ],
      },
      {
        watchSlug: "polar-pacer",
        heading: "Elige el Polar Pacer si…",
        points: [
          "Te interesa controlar la carga y la recuperación con Training Load Pro y Nightly Recharge.",
          "Haces tiradas largas y quieres más autonomía con GPS (hasta 35 h).",
          "Prefieres una pantalla más grande y definida, con Gorilla Glass 3.",
          "Quieres el reloj más barato de los dos (unos 40 € menos).",
        ],
      },
    ],
  },
  {
    slug: "garmin-forerunner-165-vs-polar-pacer",
    title: "Garmin Forerunner 165 vs Polar Pacer",
    watchSlugs: ["garmin-forerunner-165", "polar-pacer"],
    seoTitle: "Garmin Forerunner 165 vs Polar Pacer: ¿Cuál comprar en 2026?",
    metaDescription:
      "Comparativa entre Garmin Forerunner 165 y Polar Pacer. Analizamos la pantalla AMOLED vs MIP, métricas de recuperación, funciones smart y relación calidad-precio.",
    summary:
      "El Forerunner 165 suma pantalla AMOLED táctil, altímetro barométrico, navegación por migas de pan, Garmin Pay y más autonomía en el día a día (11 días frente a 7). El Polar Pacer responde con una pantalla MIP siempre encendida, más batería entrenando con GPS (35 h frente a 19 h) y herramientas de recuperación muy completas — por unos 50 € menos.",
    winnerNotes:
      "El Forerunner 165 es el reloj más completo y el que mejor funciona también como smartwatch del día a día. El Pacer es la compra inteligente si solo quieres entrenar y recuperarte bien: renuncias a la pantalla a color, al altímetro y a los pagos, no a la analítica seria.",
    specs: [
      {
        label: "Pantalla",
        values: ["AMOLED a color, táctil", "MIP transflectiva, siempre encendida"],
      },
      {
        label: "Controles",
        values: ["5 botones + pantalla táctil", "5 botones"],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 11 días", "Hasta 7 días"],
      },
      {
        label: "Batería (entrenamiento con GPS)",
        values: ["Hasta 19 h (solo GPS)", "Hasta 35 h (GPS y FC)"],
      },
      {
        label: "GPS",
        values: [
          "GPS, GLONASS y Galileo — sin doble frecuencia",
          "GPS, GLONASS, Galileo y QZSS — sin doble frecuencia",
        ],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "No (altitud calculada por GPS)"],
      },
      {
        label: "Navegación",
        values: ["Sí (ruta de migas de pan)", "No"],
      },
      {
        label: "Métricas clave",
        values: [
          "VO2 máx., potencia de carrera en la muñeca, tiempo de recuperación, Body Battery, estado de VFC (HRV)",
          "Training Load Pro, Nightly Recharge, Sleep Plus Stages, FitSpark, Running Index, FuelWise",
        ],
      },
      {
        label: "Peso",
        values: ["39 g", "40 g"],
      },
      {
        label: "Pagos sin contacto",
        values: ["Sí (Garmin Pay)", "No"],
      },
      {
        label: "Música offline",
        values: ["Solo en la versión Music", "No"],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "5 ATM"],
      },
    ],
    content: `
      <h2>Pantalla y diseño: AMOLED táctil frente a MIP siempre encendida</h2>
      <p>Es la diferencia que se nota nada más ponértelos. El <strong>Forerunner 165</strong> monta una pantalla <strong>AMOLED a color y táctil</strong>: negros profundos, colores vivos y gráficos de ritmo o frecuencia cardíaca muy fáciles de leer. Puedes deslizar por los widgets con el dedo o manejarlo con sus cinco botones físicos, que siguen siendo lo más cómodo en carrera.</p>
      <p>El <strong>Polar Pacer</strong> usa una pantalla <strong>MIP transflectiva</strong>: menos color y menos contraste en interiores, pero <strong>siempre encendida</strong> sin coste de batería y perfectamente legible a pleno sol — cuanta más luz, mejor se ve. Se maneja solo con botones, con una interfaz sencilla y directa. La AMOLED del 165 también se lee bien en exterior por su brillo, pero si activas el modo "siempre encendida" su autonomía cae de forma notable.</p>
      <ul>
        <li><strong>Gana el Forerunner 165</strong> si vas a llevarlo todo el día y quieres que también luzca como reloj.</li>
        <li><strong>Gana el Polar Pacer</strong> si solo quieres ver tus datos en carrera, a cualquier hora, sin pensar en la batería.</li>
      </ul>

      <h2>Métricas de salud y recuperación</h2>
      <h3>Garmin: Body Battery y estado de la VFC</h3>
      <p>El 165 mide durante la noche tu <strong>variabilidad de la frecuencia cardíaca (VFC o HRV)</strong> y te muestra su tendencia como <strong>estado de VFC</strong>: si cae varios días seguidos, es señal de que no estás asimilando bien la carga. A eso suma <strong>Body Battery</strong>, una "batería" de energía de 0 a 100 que sube al descansar y baja con el estrés y el ejercicio, además de VO2 máx., <strong>potencia de carrera en la muñeca</strong> y tiempo de recuperación. Le falta, eso sí, la puntuación de <em>Training Readiness</em> de los Forerunner superiores.</p>
      <h3>Polar: Nightly Recharge, Sleep Plus Stages y FitSpark</h3>
      <p>La recuperación es justo donde Polar es fuerte, y el Pacer hereda esas herramientas a un precio muy bajo:</p>
      <ul>
        <li><strong>Nightly Recharge:</strong> cada mañana valora cómo te has recuperado durante la noche, combinando la calidad del sueño con la respuesta de tu sistema nervioso.</li>
        <li><strong>Sleep Plus Stages:</strong> análisis detallado del sueño por fases.</li>
        <li><strong>FitSpark:</strong> te propone cada día entrenamientos adaptados a tu recuperación y tu forma.</li>
        <li><strong>Training Load Pro</strong> y <strong>Running Index:</strong> carga de entrenamiento y estimación de tu rendimiento en cada salida.</li>
      </ul>
      <p>En resumen: los dos te dicen cuándo apretar y cuándo descansar. Polar lo hace con un enfoque más orientado al entrenamiento del día (FitSpark); Garmin, con indicadores de energía y VFC que encajan en su ecosistema Garmin Connect.</p>

      <h2>Extras y funciones smart</h2>
      <p>Aquí el Garmin va claramente por delante. El Forerunner 165 incluye <strong>Garmin Pay</strong> para pagar con el reloj, notificaciones más cómodas de leer en color y acceso a la tienda de esferas y aplicaciones de Garmin. En la <strong>versión Music</strong> (más cara) puedes guardar música y salir a correr sin el móvil.</p>
      <p>También tiene ventajas deportivas objetivas: <strong>altímetro barométrico</strong>, que mide el desnivel con mucha más fiabilidad que la altitud por GPS, y <strong>navegación por migas de pan</strong> para seguir una ruta cargada y volver al punto de inicio.</p>
      <p>El Pacer apuesta por un enfoque <strong>100 % deportivo y sin distracciones</strong>: recibe notificaciones del móvil, pero no tiene pagos, ni música, ni altímetro, ni navegación. Para quien entrena en recorridos conocidos y no quiere un smartwatch, eso no es un defecto sino una forma de simplificar.</p>

      <h2>Autonomía y GPS</h2>
      <p>La batería se reparte de forma curiosa. En <strong>uso diario</strong> gana el Garmin: hasta <strong>11 días</strong> frente a <strong>7</strong> del Pacer, algo notable para una pantalla AMOLED. <strong>Entrenando con GPS</strong> gana el Polar: hasta <strong>35 h</strong> con GPS y frecuencia cardíaca frente a <strong>19 h</strong> del 165 en modo solo GPS (menos si activas todos los sistemas de satélites).</p>
      <p>En la práctica, con 4-5 entrenamientos de una hora a la semana, ambos aguantan alrededor de una semana entre cargas, y los dos van sobrados para un maratón. Si haces tiradas muy largas o te planteas un ultra, el margen del Pacer se agradece.</p>
      <p>En precisión están igualados: <strong>ninguno tiene GPS multibanda</strong>. Los dos funcionan bien en parques, carreteras y pista; entre edificios altos o en bosque cerrado pueden recortar curvas o dar ritmos más irregulares.</p>

      <h2>Veredicto: ¿cuál comprar?</h2>
      <p>Con los precios observados en nuestras fichas, el <strong>Forerunner 165 ronda los 194 €</strong> y el <strong>Polar Pacer los 143 €</strong> (PVPR de 199,90 €): unos <strong>50 € de diferencia</strong>. Son precios de tiendas concretas y cambian con frecuencia, así que revisa la fila de precio de la tabla.</p>
      <p><strong>Merece la pena dar el salto al Forerunner 165</strong> si vas a llevar el reloj todo el día y quieres que sea también tu smartwatch: pantalla AMOLED, Garmin Pay, altímetro y navegación justifican de sobra esos 50 €. <strong>El Polar Pacer es la opción inteligente</strong> si lo que buscas es entrenar y recuperarte bien gastando lo mínimo: conservas una analítica de carga, sueño y recuperación de primer nivel y más batería con GPS, renunciando solo a extras que no mejoran tus entrenamientos.</p>
      <p>¿Quieres más detalle? Lee el <a href="/relojes/garmin-forerunner-165">análisis del Garmin Forerunner 165</a> y el <a href="/relojes/polar-pacer">del Polar Pacer</a>, compara el Pacer con el Garmin más económico en <a href="/comparativas/garmin-forerunner-55-vs-polar-pacer">Forerunner 55 vs Polar Pacer</a> o consulta nuestra guía de <a href="/guias/mejores-relojes-gps-menos-200-euros">mejores relojes GPS por menos de 200 €</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-forerunner-165",
        heading: "Elige el Garmin Forerunner 165 si…",
        points: [
          "Quieres una pantalla AMOLED táctil y a color que luzca también fuera de los entrenamientos.",
          "Vas a usarlo como smartwatch: Garmin Pay, notificaciones a color y música en la versión Music.",
          "Corres con desnivel o por rutas nuevas y te sirven el altímetro barométrico y la navegación.",
          "Ya usas Garmin Connect o te interesan Body Battery y el estado de VFC.",
        ],
      },
      {
        watchSlug: "polar-pacer",
        heading: "Elige el Polar Pacer si…",
        points: [
          "Quieres ahorrar unos 50 € sin renunciar a analítica seria de carga y recuperación.",
          "Te interesan Nightly Recharge, Sleep Plus Stages y los entrenamientos diarios de FitSpark.",
          "Prefieres un reloj 100 % deportivo, con botones, pantalla siempre visible y sin distracciones.",
          "Haces sesiones largas y valoras sus 35 h de batería entrenando con GPS.",
        ],
      },
    ],
  },
  {
    // Sustituye a "coros-pace-3-vs-garmin-forerunner-165" (redirección
    // 301 en next.config.js) para no duplicar la misma comparativa.
    slug: "garmin-forerunner-165-vs-coros-pace-3",
    title: "Garmin Forerunner 165 vs COROS PACE 3",
    watchSlugs: ["garmin-forerunner-165", "coros-pace-3"],
    seoTitle: "Garmin Forerunner 165 vs COROS Pace 3: ¿Cuál Comprar en 2026?",
    metaDescription:
      "Forerunner 165 o COROS PACE 3: AMOLED táctil frente a MIP de 30 g, GPS monobanda frente a multibanda, 19 h frente a 38 h de GPS y Garmin Connect frente a COROS.",
    summary:
      "El Forerunner 165 apuesta por una pantalla AMOLED táctil y a color, Garmin Pay y las métricas de salud diaria de Garmin Connect. El PACE 3 responde con GPS multibanda de doble frecuencia, solo 30 g con correa de nylon y el doble de batería con GPS: hasta 38 h frente a las 19 h del 165.",
    winnerNotes:
      "Para rendimiento puro por menos de 250 € —precisión GPS, ligereza y autonomía— el PACE 3 tiene ventaja objetiva. Para quien quiere un reloj moderno para todo el día, con pantalla táctil AMOLED, pagos y seguimiento de salud, el Forerunner 165 encaja mejor. Ninguno tiene mapas completos.",
    specs: [
      {
        label: "Pantalla",
        values: [
          "AMOLED táctil a color, 1,2\" (390 x 390 px)",
          "MIP transflectiva siempre encendida, 1,2\" (240 x 240 px)",
        ],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 11 días", "Hasta 15 días"],
      },
      {
        label: "Batería (GPS continuo)",
        values: ["Hasta 19 h (17 h con todos los GNSS)", "Hasta 38 h (15 h en doble frecuencia)"],
      },
      {
        label: "Sensores GPS",
        values: [
          "GPS, GLONASS y Galileo — una frecuencia",
          "GPS, GLONASS, Galileo, Beidou y QZSS — doble frecuencia",
        ],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "Barométrico"],
      },
      {
        label: "Peso",
        values: ["39 g", "39 g (silicona) / 30 g (nylon)"],
      },
      {
        label: "Pagos sin contacto",
        values: ["Sí (Garmin Pay)", "No"],
      },
      {
        label: "Música offline",
        values: ["Solo en la versión Music", "Sí, de serie"],
      },
      {
        label: "Mapas",
        values: ["No (ruta de migas de pan)", "No (ruta de migas de pan)"],
      },
    ],
    content: `
      <h2>Pantalla, visibilidad y peso: AMOLED táctil frente a MIP de 30 g</h2>
      <p>Es la diferencia que se ve nada más sacarlos de la caja, y la que más condiciona el uso diario. El <strong>Forerunner 165</strong> monta una pantalla <strong>AMOLED táctil</strong> de 1,2" y 390 x 390 píxeles: negros profundos, colores vivos y un brillo que hace que esferas, gráficos de ritmo o de frecuencia cardíaca y notificaciones se lean con una nitidez de smartwatch moderno. Hasta hace poco Garmin reservaba este tipo de pantalla a modelos bastante más caros. Además, combina el táctil con cinco botones físicos: deslizas para moverte por los widgets en el sofá y usas los botones en carrera, con sudor o con lluvia.</p>
      <p>El <strong>PACE 3</strong> usa una pantalla <strong>MIP transflectiva</strong> de 1,2" y 240 x 240 píxeles, siempre encendida. Tiene menos resolución, menos colores y menos contraste en interiores, pero funciona al revés que una AMOLED: refleja la luz ambiente, así que <strong>cuanto más sol le da, mejor se lee</strong>. A mediodía en verano, en la pista o en una subida a pleno sol, basta con girar un poco la muñeca para ver ritmo y pulso sin sombras ni reflejos. Y como está siempre encendida sin coste apreciable de batería, nunca tienes que levantar la muñeca para despertarla. Se maneja con una corona digital y dos botones, cómodos también con guantes.</p>
      <p>La AMOLED del 165 también se lee bien al sol gracias a su brillo, pero por defecto se apaga hasta que levantas la muñeca. Puedes activar el modo "siempre encendida", aunque entonces la autonomía cae de forma notable: es el peaje de una pantalla que emite luz en lugar de reflejarla.</p>
      <p>El otro factor es el peso. Los dos pesan <strong>39 g</strong> con correa de silicona, ya muy poco para un reloj GPS, pero el PACE 3 con la correa de nylon baja a <strong>30 g</strong>. Es una ligereza extrema que se nota en series rápidas, donde el reloj no rebota, en tiradas largas y, sobre todo, para dormir con él, algo necesario si quieres que mida el sueño y la recuperación. Ambos son sumergibles a 5 ATM.</p>
      <ul>
        <li><strong>Gana el Forerunner 165</strong> si quieres una pantalla vistosa y táctil que luzca también fuera del entrenamiento.</li>
        <li><strong>Gana el PACE 3</strong> si priorizas leer tus datos al sol, a cualquier hora y sin pensar en la batería, con el reloj más ligero posible.</li>
      </ul>

      <h2>GPS y precisión: monobanda frente a multibanda de doble frecuencia</h2>
      <p>Aquí está la diferencia técnica más importante del duelo. El <strong>Forerunner 165</strong> usa un GPS <strong>monobanda</strong> compatible con GPS, GLONASS y Galileo: recibe una sola frecuencia de cada satélite (la clásica L1). El <strong>PACE 3</strong> tiene <strong>GPS multibanda nativo de doble frecuencia</strong> (L1 + L5) y es compatible con los cinco grandes sistemas: GPS, GLONASS, Galileo, Beidou y QZSS.</p>
      <p>¿Qué cambia en la práctica? La señal de los satélites rebota en fachadas, paredes de roca o copas de árboles antes de llegar al reloj. Con una sola frecuencia, el reloj no siempre sabe distinguir la señal directa del rebote, y el trazado "corta" curvas, dibuja zigzags o se sale de la calle. Con dos frecuencias, el PACE 3 compara ambas y filtra mucho mejor esos errores: el ritmo instantáneo es más estable y la distancia final se ajusta más a la real.</p>
      <p>Dónde se nota:</p>
      <ul>
        <li><strong>Ciudad con edificios altos:</strong> el entorno más difícil para cualquier GPS. Aquí el multibanda marca la diferencia más clara, sobre todo en el ritmo kilómetro a kilómetro.</li>
        <li><strong>Bosque cerrado y montaña:</strong> bajo árboles o en barrancos, el PACE 3 mantiene trazados limpios donde el 165 puede sumar o restar distancia.</li>
        <li><strong>Parques, carreteras y caminos abiertos:</strong> con cielo despejado, el GPS del 165 es bueno y suficiente para la mayoría de corredores. La diferencia existe, pero es pequeña.</li>
      </ul>
      <p>Para series en pista, más que el tipo de GPS importa usar el perfil de pista y no el de carrera normal. Y si entrenas por ritmo en series cortas, ten en cuenta que ningún GPS de muñeca es perfecto en los primeros segundos de cada repetición.</p>
      <p>La doble frecuencia tiene un coste: gasta más batería. En el PACE 3, la autonomía con GPS pasa de 38 h en modo estándar a 15 h en doble frecuencia, así que lo lógico es activarla solo donde la necesitas. En el 165 no hay elección: todos sus modos son de una frecuencia, y activar todos los sistemas GNSS reduce su autonomía de 19 a 17 horas.</p>
      <p>Ambos tienen <strong>altímetro barométrico</strong>, así que el desnivel acumulado es fiable en los dos: la ventaja del PACE 3 está en la posición, no en la altitud. Si quieres entender cuándo compensa pagar por multibanda, lo explicamos en <a href="/guias/que-precision-gps-necesitas-realmente">¿Qué precisión GPS necesitas realmente?</a></p>

      <h2>Autonomía: 38 h de GPS frente a 19 h</h2>
      <p>El PACE 3 es claramente superior, y por mucho. Con el GPS activo llega a <strong>hasta 38 horas</strong> en modo estándar, frente a las <strong>hasta 19 horas</strong> del Forerunner 165 en modo solo GPS: exactamente el doble. Incluso en doble frecuencia, el modo más exigente, el COROS aguanta 15 horas, casi lo mismo que el Garmin en su modo más ahorrador. En uso diario como reloj inteligente, el PACE 3 llega a <strong>15 días</strong> frente a los <strong>11 días</strong> del 165.</p>
      <p>Las cifras de folleto se miden en condiciones ideales, así que conviene traducirlas a semanas reales. Con 4-5 entrenamientos de una hora a la semana, notificaciones activas y seguimiento del sueño, el PACE 3 suele aguantar en torno a dos semanas entre cargas y el 165 alrededor de una. Si en el Garmin activas la pantalla siempre encendida, el margen se reduce bastante más. No es un problema grave —cargar una vez a la semana es asumible—, pero sí una diferencia que se nota en el día a día y en los viajes.</p>
      <p>Dónde la autonomía deja de ser comodidad y pasa a ser decisiva:</p>
      <ul>
        <li><strong>Maratón:</strong> los dos van sobrados, incluso con margen para el calentamiento y el regreso a casa.</li>
        <li><strong>Trail y ultras:</strong> una carrera de montaña de 50 km puede llevar 7-10 horas; un 100 km, 15-20 o más. Con 19 h, el 165 llega justo o no llega a las distancias largas; el PACE 3, con 38 h, termina con batería de sobra.</li>
        <li><strong>Vacaciones y viajes:</strong> con el PACE 3 puedes salir una semana sin cargador y seguir registrando entrenamientos y sueño.</li>
        <li><strong>Precisión máxima:</strong> si quieres la doble frecuencia en todas las salidas, el PACE 3 sigue dando 15 horas.</li>
      </ul>
      <p>Hay un matiz importante: la diferencia de batería está muy ligada a la de pantalla. La MIP del PACE 3 apenas consume; la AMOLED del 165 es la que más energía gasta del reloj. Garmin ha conseguido una autonomía buena para una pantalla AMOLED, pero no puede competir con una MIP en este terreno.</p>
      <p>Si la batería es tu prioridad, el veredicto es claro: el <strong>PACE 3</strong> es uno de los relojes con más autonomía por euro del mercado. Si cargas el reloj cada fin de semana sin problema y no corres ultras, las 19 horas del 165 cubren de sobra el entrenamiento habitual de un corredor popular.</p>

      <h2>Software y ecosistema: salud diaria en Garmin Connect frente a análisis puro en COROS</h2>
      <p>Los dos relojes cubren lo básico del entrenamiento —frecuencia cardíaca en la muñeca, compatibilidad con bandas de pecho, VO2 máx. estimado, tiempo de recuperación, entrenamientos estructurados y sincronización con Strava—, pero sus plataformas tienen filosofías distintas.</p>
      <p><strong>Garmin Connect</strong> pone el foco en la <strong>salud diaria y la vida cotidiana</strong>. Con el Forerunner 165 tienes <strong>Body Battery</strong>, que estima tu energía disponible a lo largo del día combinando sueño, estrés y actividad; <strong>Sleep Score</strong> con análisis de las fases del sueño; seguimiento del estrés y entrenamientos sugeridos cada día según tu recuperación. En carrera suma <strong>potencia de carrera en la muñeca</strong> y los planes adaptativos de Garmin Coach. Fuera del deporte, ganas <strong>Garmin Pay</strong>, notificaciones cómodas de leer en la AMOLED y una tienda de esferas y aplicaciones muy amplia. Le falta la puntuación de <em>Training Readiness</em> de los Forerunner superiores, y la música offline exige la versión Music, más cara.</p>
      <p><strong>COROS</strong> apuesta por un <strong>enfoque analítico puro de atletismo</strong>. Su plataforma EvoLab y la web gratuita <strong>COROS Training Hub</strong> están pensadas para quien entrena con objetivos: <strong>carga de entrenamiento</strong> por sesión y acumulada, <strong>impacto de la carga</strong> en tu forma física, nivel de fatiga, forma de base, índice de rendimiento en carrera y predicción de marcas. El Training Hub permite analizar cada sesión en una pantalla grande, comparar semanas, construir entrenamientos y planes y enviarlos al reloj. Es un nivel de análisis que en Garmin exige subir a modelos más caros. A cambio, COROS ofrece menos en el día a día: no hay pagos sin contacto, su ecosistema de aplicaciones es mucho más limitado y las funciones de salud son más sobrias. Eso sí, la <strong>música offline viene de serie</strong>.</p>
      <p>La elección depende de para qué quieres el reloj. Si buscas un compañero para todo el día que te diga cómo has dormido, cuánta energía te queda y te deje pagar el café después de correr, Garmin Connect es más completo y más amable. Si lo que quieres es entender tu entrenamiento —cuánto has cargado, cuánto te ha afectado, cuándo estás listo para apretar—, el enfoque de COROS es más directo y más profundo por menos dinero.</p>
      <p>Ninguno de los dos ofrece <strong>mapas completos</strong>: ambos se limitan a seguir el trazado de una ruta cargada. Si necesitas mapas en el reloj, tendrás que subir de gama.</p>

      <p>¿Quieres más detalle de cada uno? Lee nuestra <a href="/relojes/garmin-forerunner-165">reseña completa del Garmin Forerunner 165</a> o la <a href="/relojes/coros-pace-3">ficha del COROS PACE 3</a>. Si estás dispuesto a subir de gama en Garmin, comparamos el PACE 3 con el Forerunner 265 en <a href="/comparativas/coros-pace-3-vs-garmin-forerunner-265">COROS PACE 3 vs Forerunner 265</a>, y tienes los dos en nuestra guía de los <a href="/guias/mejores-relojes-gps-calidad-precio">mejores relojes GPS calidad-precio</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-forerunner-165",
        heading: "Elige el Garmin Forerunner 165 si…",
        points: [
          "Quieres una pantalla AMOLED táctil, brillante y a color, con la estética de un smartwatch moderno.",
          "Te interesan las métricas de salud y vida cotidiana: Body Battery, Sleep Score, estrés y entrenamientos sugeridos según tu recuperación.",
          "Vas a llevarlo todo el día: Garmin Pay, notificaciones cómodas de leer y una gran tienda de esferas y aplicaciones.",
          "Entrenas sobre todo en terreno abierto, donde el GPS monobanda es suficiente, y cargar una vez a la semana no te supone un problema.",
        ],
      },
      {
        watchSlug: "coros-pace-3",
        heading: "Elige el COROS PACE 3 si…",
        points: [
          "Buscas el mejor reloj de rendimiento puro por menos de 250 €.",
          "Quieres ligereza extrema: 30 g con correa de nylon, cómodo en series y para dormir.",
          "La batería con GPS es tu prioridad: hasta 38 h, el doble que el 165, y 15 h incluso en doble frecuencia.",
          "Corres en ciudad, bosque o montaña y quieres la precisión del GPS multibanda y el análisis de carga de COROS Training Hub.",
        ],
      },
    ],
  },
  {
    slug: "garmin-forerunner-165-vs-garmin-forerunner-55",
    title: "Garmin Forerunner 165 vs Garmin Forerunner 55",
    watchSlugs: ["garmin-forerunner-165", "garmin-forerunner-55"],
    seoTitle:
      "Garmin Forerunner 165 vs Forerunner 55: ¿Merece la pena la diferencia en 2026?",
    metaDescription:
      "Comparativa entre Garmin Forerunner 165 y Forerunner 55. Pantalla AMOLED vs MIP, altímetro barométrico, navegación por migas de pan y diferencia de precio real.",
    summary:
      "El Forerunner 165 añade sobre el 55 una pantalla AMOLED a color, altímetro barométrico, navegación por migas de pan, potencia de carrera en la muñeca y Garmin Pay. El 55 responde con más autonomía en modo reloj (hasta 2 semanas frente a 11 días), una pantalla MIP siempre encendida y 2 g menos en la muñeca.",
    winnerNotes:
      "Con los precios observados en tienda la diferencia es pequeña, y entonces el Forerunner 165 da bastante más por poco dinero extra. El Forerunner 55 sigue teniendo sentido si lo encuentras claramente más barato, si priorizas autonomía o si solo vas a correr en llano y en pista.",
    specs: [
      {
        label: "Pantalla",
        values: ["AMOLED a color", "MIP, siempre encendida"],
      },
      {
        label: "Controles",
        values: ["5 botones + pantalla táctil", "5 botones"],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 11 días", "Hasta 2 semanas"],
      },
      {
        label: "Batería (GPS continuo)",
        values: ["Hasta 19 h (solo GPS)", "Hasta 20 h"],
      },
      {
        label: "Sensores GPS",
        values: [
          "GPS, GLONASS y Galileo — sin doble frecuencia",
          "GPS, GLONASS y Galileo — sin doble frecuencia",
        ],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "No figura en el manual oficial (pendiente de confirmar)"],
      },
      {
        label: "Métricas destacadas",
        values: [
          "VO2 máx., potencia de carrera en la muñeca, tiempo de recuperación, Body Battery, estado de VFC (HRV)",
          "Frecuencia cardíaca, ritmo, distancia y entrenamientos diarios sugeridos",
        ],
      },
      {
        label: "Navegación",
        values: ["Sí (ruta de migas de pan)", "No"],
      },
      {
        label: "Mapas",
        values: ["No", "No"],
      },
      {
        label: "Peso",
        values: ["39 g", "37 g"],
      },
      {
        label: "Pagos sin contacto",
        values: ["Sí (Garmin Pay)", "No"],
      },
      {
        label: "Música offline",
        values: ["Solo en la versión Music", "No"],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "5 ATM"],
      },
    ],
    content: `
      <h2>Pantalla: AMOLED a color frente a MIP siempre encendida</h2>
      <p>Es el gran salto entre generaciones. El <strong>Forerunner 165</strong> estrena en la gama de entrada de Garmin una pantalla <strong>AMOLED</strong>: colores vivos, negros profundos y gráficos de ritmo y frecuencia cardíaca muy fáciles de leer. Además es táctil, aunque mantiene los cinco botones físicos para manejarlo sin mirar.</p>
      <p>El <strong>Forerunner 55</strong> usa una pantalla <strong>MIP</strong> transflectiva: menos colores y menos contraste en interiores, pero siempre encendida sin coste de batería y perfectamente legible a pleno sol — cuanta más luz, mejor se ve. La AMOLED del 165 también se lee bien en exterior gracias a su brillo, pero si activas el modo "siempre encendida" la autonomía baja de forma notable.</p>
      <ul>
        <li><strong>Gana el Forerunner 165</strong> si vas a llevarlo todo el día y quieres que también funcione como reloj inteligente agradable de usar.</li>
        <li><strong>Gana el Forerunner 55</strong> si solo te importa ver tus datos en carrera y olvidarte del cargador.</li>
      </ul>

      <h2>Sensores y métricas</h2>
      <h3>Altímetro barométrico</h3>
      <p>El 165 incluye <strong>altímetro barométrico</strong>, que mide el desnivel con mucha más fiabilidad que la altitud calculada por GPS. Si corres por zonas con cuestas o haces alguna salida por montaña, el desnivel acumulado que verás en Garmin Connect será bastante más realista. En el manual oficial del 55 el altímetro barométrico no aparece entre los sensores; para correr en llano o en pista no lo vas a echar de menos.</p>
      <h3>Variabilidad de la frecuencia cardíaca y recuperación</h3>
      <p>El 165 suma métricas que el 55 no tiene: <strong>estado de la variabilidad de la frecuencia cardíaca (VFC o HRV)</strong> medida durante la noche, <strong>Body Battery</strong>, VO2 máx. y <strong>potencia de carrera en la muñeca</strong>. La VFC es un buen indicador de cómo estás asimilando el entrenamiento: si baja varios días seguidos, conviene levantar el pie.</p>
      <p>El 55 se queda en lo esencial — frecuencia cardíaca, ritmo, distancia y <strong>entrenamientos diarios sugeridos</strong> — que para empezar o para preparar una prueba concreta ya es mucho. Ninguno de los dos tiene GPS multibanda: ambos usan GPS, GLONASS y Galileo, con precisión similar y suficiente en terreno abierto y en pista.</p>

      <h2>Navegación y mapas</h2>
      <p>El Forerunner 165 permite cargar un <strong>trayecto</strong> desde Garmin Connect y seguirlo en el reloj como una <strong>ruta de migas de pan</strong>: una línea con tu posición y avisos si te sales del recorrido. Además puede guiarte de vuelta al punto de inicio. No son mapas completos — no verás calles ni caminos alrededor — pero basta para seguir una ruta nueva sin perderte.</p>
      <p>El Forerunner 55 <strong>no tiene navegación</strong>. Si siempre corres por recorridos que conoces, en pista o en tu circuito habitual, no es un problema; si te gusta descubrir rutas nuevas, el 165 te da esa tranquilidad.</p>

      <h2>Autonomía, peso y uso diario</h2>
      <p>Aquí el 55 mantiene ventaja: hasta <strong>2 semanas</strong> en modo reloj frente a <strong>11 días</strong> del 165, y algo más de autonomía con GPS (20 h frente a 19 h). Con 37 g frente a 39 g, la diferencia de peso es inapreciable en la muñeca.</p>
      <p>En el día a día, el 165 es más completo: <strong>Garmin Pay</strong> para pagar con el reloj, notificaciones más cómodas de leer en color y, en la versión Music, música offline. El 55 no tiene pagos ni música.</p>

      <h2>Precio: ¿merece la pena la diferencia?</h2>
      <p>Sobre el papel el 165 es un modelo de gama superior, pero los precios observados en tienda los han acercado mucho (consulta la fila de precio de la tabla: son precios de tiendas y fechas distintas, y cambian con frecuencia). Con una diferencia pequeña, el 165 compensa claramente: pantalla AMOLED, altímetro, navegación, VFC y pagos por muy poco más. Si encuentras el 55 en oferta con una diferencia grande, sigue siendo una compra muy sensata para quien solo quiere correr.</p>
      <p>¿Quieres más detalle? Lee el <a href="/relojes/garmin-forerunner-165">análisis del Garmin Forerunner 165</a> y el <a href="/relojes/garmin-forerunner-55">del Forerunner 55</a>, o compara el 55 con su rival de Polar en <a href="/comparativas/garmin-forerunner-55-vs-polar-pacer">Forerunner 55 vs Polar Pacer</a>. Si preparas unas pruebas físicas, consulta también nuestra <a href="/guias/relojes-gps-oposiciones-pruebas-fisicas">guía de relojes GPS para oposiciones</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-forerunner-165",
        heading: "Elige el Garmin Forerunner 165 si…",
        points: [
          "La diferencia de precio es pequeña: por poco más tienes AMOLED, altímetro, navegación y pagos.",
          "Corres por zonas con desnivel o quieres seguir rutas nuevas con migas de pan.",
          "Quieres controlar la recuperación con la VFC (HRV) y Body Battery durante una preparación larga.",
          "Vas a llevarlo también como reloj del día a día, con Garmin Pay y notificaciones a color.",
        ],
      },
      {
        watchSlug: "garmin-forerunner-55",
        heading: "Elige el Garmin Forerunner 55 si…",
        points: [
          "Buscas el Garmin más barato con lo imprescindible para correr y lo encuentras bien de precio.",
          "Eres opositor y entrenas en pista o en circuitos conocidos: no necesitas altímetro ni navegación.",
          "Priorizas la autonomía (hasta 2 semanas) y una pantalla siempre visible al sol.",
          "Quieres un reloj sencillo, con botones físicos y sin distracciones.",
        ],
      },
    ],
  },
  {
    slug: "garmin-forerunner-165-vs-garmin-forerunner-265",
    title: "Garmin Forerunner 165 vs Garmin Forerunner 265",
    watchSlugs: ["garmin-forerunner-165", "garmin-forerunner-265"],
    seoTitle:
      "Garmin Forerunner 165 vs Forerunner 265: ¿Merece la pena pagar más en 2026?",
    metaDescription:
      "Comparativa entre Garmin Forerunner 165 y Forerunner 265. Pantalla AMOLED, GPS de doble frecuencia (multibanda), métricas avanzadas (Training Readiness) y diferencia de precio.",
    summary:
      "Los dos comparten pantalla AMOLED táctil, altímetro barométrico, navegación por migas de pan y Garmin Pay. El Forerunner 265 añade GPS multibanda con SatIQ, Training Readiness, modo triatlón y multideporte, música de serie y dos tamaños (46 y 42 mm), a cambio de un precio bastante más alto.",
    winnerNotes:
      "Para correr y entrenar con estructura en terreno abierto, el Forerunner 165 cubre casi todo por menos de la mitad de precio. El 265 se justifica si corres mucho en ciudad o bosque (multibanda), haces triatlón o quieres que el reloj te diga cada mañana si estás listo para entrenar fuerte.",
    specs: [
      {
        label: "Pantalla",
        values: ["AMOLED táctil + 5 botones", "AMOLED táctil + 5 botones"],
      },
      {
        label: "Tamaños",
        values: ["Único (43 mm)", "265 (46 mm) y 265S (42 mm)"],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 11 días", "Hasta 13 días (265, 46 mm)"],
      },
      {
        label: "Batería (GPS continuo)",
        values: ["Hasta 19 h (solo GPS)", "Hasta 20 h (14 h en multibanda con todos los sistemas)"],
      },
      {
        label: "GPS multibanda",
        values: [
          "No — GPS, GLONASS y Galileo en una frecuencia",
          "Sí — doble frecuencia con SatIQ",
        ],
      },
      {
        label: "Métricas de entreno",
        values: [
          "VO2 máx., potencia de carrera en la muñeca, tiempo de recuperación, Body Battery, estado de VFC (HRV)",
          "Todo lo del 165 + Training Readiness y estado de entrenamiento (Training Status)",
        ],
      },
      {
        label: "Multideporte / triatlón",
        values: ["No", "Sí"],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "Barométrico"],
      },
      {
        label: "Navegación",
        values: ["Ruta de migas de pan", "Ruta de migas de pan"],
      },
      {
        label: "Mapas",
        values: ["No", "No"],
      },
      {
        label: "Peso",
        values: ["39 g", "47 g (265) / 39 g (265S)"],
      },
      {
        label: "Música offline",
        values: ["Solo en la versión Music", "Sí, de serie"],
      },
      {
        label: "Pagos sin contacto",
        values: ["Sí (Garmin Pay)", "Sí (Garmin Pay)"],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "5 ATM"],
      },
    ],
    content: `
      <h2>GPS y precisión: multibanda frente a GPS estándar</h2>
      <p>Es la diferencia técnica más importante. El <strong>Forerunner 265</strong> tiene <strong>GPS multibanda (doble frecuencia)</strong> con <strong>SatIQ</strong>, que elige automáticamente el modo más preciso o el que menos batería gasta según dónde estés. En calles estrechas con edificios altos, bosque cerrado o recorridos con muchas curvas, el ritmo instantáneo es más estable y la distancia final se acerca más a la real.</p>
      <p>El <strong>Forerunner 165</strong> usa GPS, GLONASS y Galileo en una sola frecuencia. En parques, carreteras y pista funciona bien y es suficiente para la mayoría de corredores; donde el GPS lo tiene difícil, puede "cortar" curvas o dar ritmos más irregulares.</p>
      <ul>
        <li><strong>Te basta el 165</strong> si corres sobre todo en terreno abierto.</li>
        <li><strong>Notarás el 265</strong> si entrenas en centros urbanos densos, bosque o montaña.</li>
      </ul>

      <h2>Métricas avanzadas: Training Readiness y Training Status</h2>
      <p>Los dos miden VO2 máx., potencia de carrera en la muñeca, tiempo de recuperación, Body Battery y el estado de la variabilidad de la frecuencia cardíaca (VFC o HRV) durante la noche. La diferencia está en cómo el 265 junta todos esos datos:</p>
      <ul>
        <li><strong>Training Readiness (disposición para entrenar):</strong> una puntuación diaria que combina sueño, recuperación, VFC y carga reciente para decirte si hoy toca apretar o levantar el pie. Es una de las funciones más útiles del 265 y el 165 no la tiene.</li>
        <li><strong>Training Status (estado de entrenamiento):</strong> analiza tu carga aguda y la evolución del VO2 máx. para indicarte si estás progresando, manteniendo, en pico de forma o sobreentrenando.</li>
        <li><strong>Dinámicas de carrera avanzadas:</strong> con un accesorio compatible (banda HRM-Pro o Running Dynamics Pod), el 265 registra tiempo de contacto con el suelo, oscilación vertical o longitud de zancada, útiles para trabajar la técnica.</li>
      </ul>
      <p>Si entrenas con un plan exigente, preparas un maratón o encadenas semanas de mucho volumen, estas métricas ayudan a dosificar el esfuerzo. Si sales a correr tres o cuatro días por semana sin un objetivo concreto, el 165 ya te da información de sobra.</p>

      <h2>Multideporte y triatlón</h2>
      <p>El 265 incluye <strong>modo triatlón y perfiles multideporte</strong>: registra natación, transición, ciclismo y carrera en una sola actividad, cambiando de disciplina con un botón. También es compatible con medidores de potencia de ciclismo.</p>
      <p>El 165 está pensado principalmente para correr. Tiene perfiles de natación, ciclismo y gimnasio por separado, pero <strong>no tiene modo triatlón</strong> ni compatibilidad con medidores de potencia de ciclismo. Si haces o quieres hacer triatlón o duatlón, la decisión está tomada: 265.</p>

      <h2>Música y tamaños</h2>
      <p>Todos los Forerunner 265 incluyen <strong>almacenamiento de música de serie</strong>, para correr con auriculares Bluetooth sin llevar el móvil. En el 165 la música solo está en la <strong>versión Music</strong>, que cuesta algo más que la estándar.</p>
      <p>En tamaño, el 165 tiene una sola caja de <strong>43 mm</strong> y 39 g. El 265 se vende en dos: <strong>265 de 46 mm</strong> (47 g, más pantalla y batería) y <strong>265S de 42 mm</strong> (39 g), pensado para muñecas finas. Si te parece grande la caja de 46 mm, el 265S iguala el peso del 165.</p>

      <h2>Precio: ¿merece la pena pagar más?</h2>
      <p>Con los precios de referencia de nuestras fichas, la diferencia supera los 200 € (consulta la fila de precio de la tabla: el 265 tiene un PVPR de 499,99 € y se ve habitualmente en torno a 429 €, mientras que el 165 se ha visto por debajo de 200 €). Con ofertas puntuales del 265 la distancia se reduce, pero sigue siendo grande.</p>
      <p>Por ese dinero, el 265 da multibanda, Training Readiness, triatlón, música y la opción de dos tamaños. Si no vas a usar al menos dos de esas cosas, el 165 es la compra más sensata. ¿Quieres más detalle? Lee el <a href="/relojes/garmin-forerunner-165">análisis del Forerunner 165</a> y el <a href="/relojes/garmin-forerunner-265">del Forerunner 265</a>, o compara el 165 con su rival directo en <a href="/comparativas/garmin-forerunner-165-vs-coros-pace-3">Forerunner 165 vs COROS PACE 3</a>, que ofrece multibanda a un precio intermedio. Y si dudas entre ese COROS y el 265, los enfrentamos en <a href="/comparativas/coros-pace-3-vs-garmin-forerunner-265">COROS PACE 3 vs Forerunner 265</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-forerunner-165",
        heading: "Te basta con el Garmin Forerunner 165 si…",
        points: [
          "Corres sobre todo en parques, carreteras o pista, donde el GPS estándar es suficiente.",
          "Solo corres (y como mucho vas al gimnasio): no necesitas modo triatlón.",
          "Quieres AMOLED, Garmin Pay y altímetro gastando menos de la mitad.",
          "Te valen VO2 máx., VFC y Body Battery sin la puntuación diaria de Training Readiness.",
        ],
      },
      {
        watchSlug: "garmin-forerunner-265",
        heading: "Ve a por el Garmin Forerunner 265 si…",
        points: [
          "Entrenas en ciudad densa, bosque o montaña y quieres la precisión del GPS multibanda.",
          "Haces o vas a hacer triatlón o duatlón.",
          "Sigues un plan exigente y quieres Training Readiness y Training Status para dosificar la carga.",
          "Quieres música de serie o una caja más pequeña (265S de 42 mm).",
        ],
      },
    ],
  },
  {
    slug: "garmin-forerunner-265-vs-suunto-race-s",
    title: "Garmin Forerunner 265 vs Suunto Race S",
    watchSlugs: ["garmin-forerunner-265", "suunto-race-s"],
    seoTitle:
      "Garmin Forerunner 265 vs Suunto Race S: ¿Pantalla AMOLED con o sin mapas?",
    metaDescription:
      "Comparativa entre Garmin Forerunner 265 y Suunto Race S. Analizamos pantallas AMOLED, mapas topográficos offline, GPS multibanda, métricas de entrenamiento y precio.",
    summary:
      "Los dos tienen pantalla AMOLED, GPS multibanda y altímetro barométrico. El Suunto Race S suma mapas topográficos offline gratuitos, una pantalla de hasta 2000 nits, bisel de acero y más autonomía con GPS (hasta 30 h en máxima precisión) por unos 80 € menos; el Forerunner 265 responde con Training Readiness, estado de VFC, Body Battery, Garmin Pay, música de serie, menos peso y el ecosistema Garmin Connect.",
    winnerNotes:
      "Si corres sobre todo en asfalto y te importan las métricas de recuperación y el ecosistema, el Forerunner 265 es más completo como reloj de entrenamiento. Si haces trail o montaña y necesitas mapas, el Race S ofrece algo que el 265 no tiene, y además más barato.",
    specs: [
      {
        label: "Pantalla / brillo",
        values: ["AMOLED táctil", "AMOLED táctil, hasta 2000 nits"],
      },
      {
        label: "Controles",
        values: ["5 botones + pantalla táctil", "Corona digital + botones + pantalla táctil"],
      },
      {
        label: "Mapas",
        values: ["No", "Sí, topográficos offline gratuitos"],
      },
      {
        label: "Navegación",
        values: [
          "Ruta de migas de pan (sin mapa de fondo)",
          "Rutas sobre mapa + guía de ascensos (Climb Guidance)",
        ],
      },
      {
        label: "GPS multibanda",
        values: [
          "Sí — doble frecuencia con SatIQ (selección automática)",
          "Sí — doble frecuencia, 5 sistemas de satélites",
        ],
      },
      {
        label: "Batería (uso diario)",
        values: ["Hasta 13 días", "Hasta 9 días"],
      },
      {
        label: "Batería (GPS)",
        values: [
          "Hasta 20 h (14 h en multibanda con todos los sistemas)",
          "Hasta 30 h en máxima precisión (40 h en modo Endurance)",
        ],
      },
      {
        label: "Sensores / altímetro",
        values: [
          "Altímetro barométrico, pulsómetro de muñeca (compatible con banda de pecho)",
          "Altímetro barométrico, pulsómetro de muñeca (compatible con banda de pecho)",
        ],
      },
      {
        label: "Métricas clave",
        values: [
          "Training Readiness, Training Status, VO2 máx., estado de VFC (HRV), Body Battery, potencia de carrera en la muñeca",
          "VO2 máx., VFC (HRV), carga y recuperación (Suunto Coach), guía de ascensos",
        ],
      },
      {
        label: "Peso",
        values: ["47 g (265) / 39 g (265S)", "60 g"],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "50 m"],
      },
      {
        label: "Pagos sin contacto",
        values: ["Sí (Garmin Pay)", "No"],
      },
      {
        label: "Música offline",
        values: ["Sí, de serie", "No (controla la música del móvil)"],
      },
    ],
    content: `
      <h2>Pantalla y visibilidad: AMOLED frente a AMOLED</h2>
      <p>Por una vez, los dos rivales usan la misma tecnología: pantallas <strong>AMOLED táctiles</strong> con colores vivos y negros profundos. La diferencia está en los matices.</p>
      <p>La del <strong>Suunto Race S</strong> alcanza <strong>hasta 2000 nits</strong> de brillo, una cifra muy alta que la mantiene perfectamente legible a pleno sol — justo cuando más se necesita, al consultar un mapa a mediodía en la montaña. Se maneja con una <strong>corona digital</strong>, muy cómoda para hacer zoom en el mapa con guantes o con los dedos sudados.</p>
      <p>El <strong>Forerunner 265</strong> responde con una <strong>interfaz táctil pulida y fluida</strong>, combinada con los <strong>cinco botones</strong> de siempre de Garmin: cada función tiene su botón y todo se maneja a ciegas en carrera, algo que se agradece al marcar vueltas en series. También se lee bien en exterior, aunque el Race S brilla más.</p>
      <p>En peso gana el Garmin: <strong>47 g</strong> el 265 (y 39 g el 265S de 42 mm) frente a <strong>60 g</strong> del Race S, que tiene bisel de acero y es sumergible a 50 m.</p>

      <h2>Navegación y mapas: la gran diferencia técnica</h2>
      <p>El <strong>Suunto Race S</strong> incluye <strong>mapas topográficos offline gratuitos</strong>: descargas la zona desde la app de Suunto y en el reloj ves curvas de nivel, senderos y caminos alrededor de tu posición, sin depender del móvil ni pagar suscripciones. Suma la <strong>guía de ascensos (Climb Guidance)</strong>, que muestra el perfil de las subidas que te quedan: muy útil para dosificar el esfuerzo en trail.</p>
      <p>El <strong>Forerunner 265 no tiene mapas</strong>. Puedes cargar un trayecto y seguirlo como una <strong>ruta de migas de pan</strong>: una línea sobre fondo negro, con tu posición y avisos si te sales, más la función de vuelta al inicio. En asfalto o rutas conocidas es suficiente; en un cruce de senderos en mitad del monte, no ver qué camino es cuál marca la diferencia.</p>
      <p>Para tener mapas en Garmin hay que subir al <a href="/relojes/garmin-forerunner-965">Forerunner 965</a>, bastante más caro que los dos (lo comparamos en <a href="/comparativas/garmin-forerunner-965-vs-garmin-forerunner-265">Forerunner 965 vs Forerunner 265</a> y, frente al propio Race S, en <a href="/comparativas/garmin-forerunner-965-vs-suunto-race-s">Forerunner 965 vs Suunto Race S</a>). Si dudas de si los necesitas, lee <a href="/guias/necesitas-mapas-en-tu-reloj">¿Necesitas mapas en tu reloj?</a></p>

      <h2>Precisión de GPS y sensores</h2>
      <p>Los dos tienen <strong>GPS multibanda real (doble frecuencia)</strong>, la tecnología que filtra los rebotes de señal entre edificios altos, bajo bosque cerrado o en barrancos. En la práctica, ambos registran trazados y ritmos muy fiables en los entornos donde un GPS simple se pierde.</p>
      <p>La diferencia está en cómo se gestiona. El Garmin usa <strong>SatIQ</strong>, que <strong>elige automáticamente</strong> el modo de satélites según el entorno: activa la multibanda cuando la señal lo necesita y la desactiva en terreno abierto para ahorrar batería, sin que tengas que tocar nada. El Suunto usa <strong>doble frecuencia con cinco sistemas de satélites</strong> en su modo de máxima precisión, y deja en tus manos elegir entre precisión y autonomía con sus modos de batería.</p>
      <p>En sensores están igualados: ambos incluyen <strong>altímetro barométrico</strong> para un desnivel fiable y pulsómetro de muñeca compatible con banda de pecho. Algunas pruebas independientes han cuestionado la fiabilidad del pulsómetro de muñeca del Race S: si entrenas por zonas de frecuencia cardíaca, conviene usarlo con banda. Más contexto en <a href="/guias/que-precision-gps-necesitas-realmente">¿Qué precisión GPS necesitas realmente?</a></p>

      <h2>Métricas de entrenamiento y ecosistema</h2>
      <h3>Garmin: métricas de recuperación líderes y Garmin Connect</h3>
      <p>El Forerunner 265 tiene el paquete más completo: <strong>Training Readiness</strong> (una puntuación diaria que te dice si estás listo para entrenar fuerte), <strong>Training Status</strong>, VO2 máx., <strong>estado de VFC (HRV Status)</strong> medido durante la noche, <strong>Body Battery</strong> y potencia de carrera en la muñeca. Todo vive en <strong>Garmin Connect</strong>, con los planes de Garmin Coach, la tienda Connect IQ y la integración con casi cualquier plataforma (Strava, TrainingPeaks…). Además, <strong>Garmin Pay</strong> y <strong>música offline</strong> de serie.</p>
      <h3>Suunto: Suunto Coach, VFC y la app Suunto</h3>
      <p>El Race S mide VO2 máx. y <strong>VFC</strong>, y analiza la <strong>carga y recuperación</strong> con <strong>Suunto Coach</strong> desde la <strong>app Suunto</strong>, con más de 95 modos deportivos. Cubre bien lo esencial para entrenar con estructura, pero no tiene una puntuación diaria equivalente a Training Readiness, su ecosistema de aplicaciones de terceros es más limitado y no ofrece pagos sin contacto ni música offline. Si lo que echas de menos son las funciones de smartwatch (llamadas, sueño, temperatura de la piel), compáralo con el <a href="/comparativas/garmin-venu-3-vs-suunto-race-s">Garmin Venu 3</a>, que cuesta prácticamente lo mismo. Si quieres saber qué métricas merecen tu atención, lo explicamos en <a href="/guias/que-metricas-de-entrenamiento-importan">¿Qué métricas de entrenamiento importan?</a></p>

      <h2>Autonomía y uso diario</h2>
      <p>Depende de cómo lo uses. Como <strong>reloj inteligente del día a día</strong> dura más el Garmin: <strong>13 días</strong> frente a <strong>9</strong> del Suunto. Con el <strong>GPS activo</strong> la situación se invierte: el Race S llega a <strong>30 horas en máxima precisión</strong> (40 h en modo Endurance), mientras que el 265 se queda en <strong>20 h</strong>, que bajan a <strong>14 h</strong> con multibanda y todos los sistemas.</p>
      <p>Para maratones y tiradas largas, los dos van sobrados. Para un ultra de montaña o un fin de semana de travesía, el Suunto da mucho más margen.</p>

      <h2>Precio y veredicto</h2>
      <p>Con los precios de referencia de nuestras fichas, el <strong>Forerunner 265</strong> se encuentra por unos <strong>429 €</strong> (PVPR de 499,99 €) y el <strong>Suunto Race S</strong> cuesta <strong>349 €</strong>: unos <strong>80 € de diferencia</strong>.</p>
      <ul>
        <li><strong>Por qué pagar más por el Forerunner 265:</strong> un ecosistema maduro como Garmin Connect, métricas de recuperación líderes (Training Readiness, estado de VFC, Body Battery), pagos con Garmin Pay, música offline y menos peso en la muñeca.</li>
        <li><strong>Por qué ahorrar con el Suunto Race S:</strong> mapas topográficos offline gratis, bisel de acero, una pantalla ultra brillante de 2000 nits y más autonomía con GPS de máxima precisión — por 80 € menos.</li>
      </ul>
      <p>Si corres en asfalto y no vas a mirar mapas, las ventajas del 265 pesan más que el ahorro. Si sales a la montaña, el Race S ofrece justo lo que al Garmin le falta. ¿Quieres más detalle? Lee el <a href="/relojes/garmin-forerunner-265">análisis del Forerunner 265</a> y el <a href="/relojes/suunto-race-s">del Suunto Race S</a>, compara el Suunto con una opción más ligera en <a href="/comparativas/coros-pace-3-vs-suunto-race-s">COROS PACE 3 vs Suunto Race S</a>, enfrenta el 265 a ese mismo COROS en <a href="/comparativas/coros-pace-3-vs-garmin-forerunner-265">COROS PACE 3 vs Forerunner 265</a>, compara el Race S con un Garmin rudo y de gran autonomía en <a href="/comparativas/garmin-instinct-2-vs-suunto-race-s">Instinct 2 vs Suunto Race S</a> o mira si te basta con un Garmin más económico en <a href="/comparativas/garmin-forerunner-165-vs-garmin-forerunner-265">Forerunner 165 vs Forerunner 265</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-forerunner-265",
        heading: "Elige el Garmin Forerunner 265 si…",
        points: [
          "Priorizas el ecosistema Garmin Connect, con sus planes, apps e integraciones.",
          "Quieres métricas de predisposición al entreno: Training Readiness, estado de VFC y Body Battery.",
          "Valoras pagar con Garmin Pay y llevar música offline de serie.",
          "Corres sin necesidad de ver mapas en pantalla: asfalto, pista o rutas conocidas.",
        ],
      },
      {
        watchSlug: "suunto-race-s",
        heading: "Elige el Suunto Race S si…",
        points: [
          "Buscas mapas topográficos offline en pantalla AMOLED al mejor precio.",
          "Quieres un acabado en acero y una pantalla de hasta 2000 nits, muy legible al sol.",
          "Necesitas GPS multibanda con más autonomía en máxima precisión (hasta 30 h) para la montaña.",
          "Prefieres ahorrarte unos 80 € frente al Forerunner 265.",
        ],
      },
    ],
  },
  {
    slug: "garmin-forerunner-965-vs-garmin-forerunner-265",
    title: "Garmin Forerunner 965 vs Garmin Forerunner 265",
    watchSlugs: ["garmin-forerunner-965", "garmin-forerunner-265"],
    seoTitle:
      "Garmin Forerunner 965 vs Forerunner 265: ¿Merecen la pena los mapas en 2026?",
    metaDescription:
      "Comparativa entre Garmin Forerunner 965 y Forerunner 265. Pantalla AMOLED de 1,4\" frente a 1,3\", mapas topográficos offline, bisel de titanio, autonomía, almacenamiento y precio.",
    summary:
      "Los dos comparten pantalla AMOLED táctil, GPS multibanda con SatIQ, Training Readiness y modo triatlón. El Forerunner 965 suma una pantalla más grande (1,4\"), mapas topográficos offline con campos de golf y pistas de esquí, bisel de titanio, 32 GB de memoria, Stamina en tiempo real y mucha más autonomía (23 días / 31 h de GPS), a cambio de unos 150 € más de PVPR que el Forerunner 265.",
    winnerNotes:
      "Si corres sobre todo en asfalto y rutas conocidas, el Forerunner 265 ofrece prácticamente las mismas métricas de entrenamiento por bastante menos. El 965 se justifica si necesitas mapas de verdad en montaña, haces ultras o triatlones de larga distancia y valoras su autonomía, o quieres la pantalla más grande y el acabado en titanio.",
    specs: [
      {
        label: "Pantalla",
        values: [
          "AMOLED táctil de 1,4\" (454 × 454 px)",
          "AMOLED táctil de 1,3\" (416 × 416 px); 1,1\" en el 265S",
        ],
      },
      {
        label: "Bisel",
        values: ["Titanio", "Polímero reforzado con fibra"],
      },
      {
        label: "Mapas",
        values: [
          "Sí — topográficos offline, campos de golf y pistas de esquí",
          "No",
        ],
      },
      {
        label: "Navegación",
        values: [
          "Rutas sobre mapa, ClimbPro también sin trayecto cargado",
          "Ruta de migas de pan (sin mapa de fondo)",
        ],
      },
      {
        label: "GPS multibanda",
        values: ["Sí — doble frecuencia con SatIQ", "Sí — doble frecuencia con SatIQ"],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 23 días", "Hasta 13 días (265, 46 mm)"],
      },
      {
        label: "Batería (GPS)",
        values: [
          "Hasta 31 h (19 h en multibanda con todos los sistemas)",
          "Hasta 20 h (14 h en multibanda con todos los sistemas)",
        ],
      },
      {
        label: "Almacenamiento",
        values: ["32 GB", "8 GB"],
      },
      {
        label: "Métricas clave",
        values: [
          "Todo lo del 265 + Stamina en tiempo real y ClimbPro sin trayecto previo",
          "Training Readiness, Training Status, VO2 máx., estado de VFC (HRV), Body Battery, potencia de carrera en la muñeca",
        ],
      },
      {
        label: "Multideporte / triatlón",
        values: ["Sí", "Sí"],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "Barométrico"],
      },
      {
        label: "Peso",
        values: ["53 g", "47 g (265) / 39 g (265S)"],
      },
      {
        label: "Música offline",
        values: ["Sí, de serie", "Sí, de serie"],
      },
      {
        label: "Pagos sin contacto",
        values: ["Sí (Garmin Pay)", "Sí (Garmin Pay)"],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "5 ATM"],
      },
    ],
    content: `
      <h2>Pantalla y diseño: más grande y en titanio</h2>
      <p>Los dos usan pantallas <strong>AMOLED táctiles</strong> combinadas con los <strong>cinco botones</strong> de siempre de Garmin, así que la experiencia de uso es casi idéntica. La diferencia está en el tamaño: el <strong>Forerunner 965</strong> sube a <strong>1,4" (454 × 454 px)</strong>, frente a las <strong>1,3" (416 × 416 px)</strong> del <strong>Forerunner 265</strong> de 46 mm y las <strong>1,1"</strong> del 265S de 42 mm. Esa pulgada extra se nota al mostrar más campos de datos a la vez o, sobre todo, al leer un mapa.</p>
      <p>En materiales, el 965 lleva <strong>bisel de titanio</strong>, más resistente a los golpes y con un acabado más premium; el 265 usa un <strong>bisel de polímero</strong>. A cambio, el 265 es algo más ligero: <strong>47 g</strong> (39 g el 265S) frente a <strong>53 g</strong> del 965.</p>
      <ul>
        <li><strong>Gana el Forerunner 965</strong> si quieres la pantalla más grande y un acabado más robusto.</li>
        <li><strong>Gana el Forerunner 265</strong> si prefieres un reloj más ligero o una caja pequeña (265S) para muñecas finas.</li>
      </ul>

      <h2>Mapas y navegación: la gran diferencia</h2>
      <p>Es lo que de verdad separa a estos dos relojes. El <strong>Forerunner 965</strong> incluye <strong>mapas topográficos offline</strong> integrados: ves curvas de nivel, senderos y calles alrededor de tu posición sin depender del móvil, puedes crear rutas desde el propio reloj y recalcular si te desvías. Además trae <strong>mapas de campos de golf</strong> y de <strong>pistas de esquí</strong>, útiles si practicas esos deportes.</p>
      <p>El <strong>Forerunner 265 no tiene mapas</strong>: puedes cargar un trayecto y seguirlo como una <strong>ruta de migas de pan</strong>, una línea sobre fondo negro con avisos si te sales y la función de vuelta al inicio. En asfalto o rutas conocidas es suficiente; en un cruce de senderos en mitad del monte, no ver qué camino es cuál marca la diferencia.</p>
      <p>Si dudas de si los necesitas, lee <a href="/guias/necesitas-mapas-en-tu-reloj">¿Necesitas mapas en tu reloj?</a> y, si buscas mapas gastando menos, compara el 265 con el <a href="/comparativas/garmin-forerunner-265-vs-suunto-race-s">Suunto Race S</a>, que los incluye por bastante menos dinero.</p>

      <h2>Autonomía y almacenamiento</h2>
      <p>El 965 tiene una batería claramente mayor. Como reloj del día a día llega a <strong>23 días</strong> frente a los <strong>13 días</strong> del 265. Con el <strong>GPS activo</strong>, el 965 alcanza <strong>31 h</strong> (19 h en multibanda con todos los sistemas) frente a <strong>20 h</strong> (14 h) del 265.</p>
      <p>Para un maratón los dos van sobrados. Para un ultra de montaña, un Ironman o un fin de semana de travesía, el margen del 965 es una ventaja real, sobre todo si vas a usar la multibanda y los mapas a la vez.</p>
      <p>En almacenamiento, el 965 ofrece <strong>32 GB</strong> frente a <strong>8 GB</strong> del 265: espacio para los mapas, más música y un historial de actividades y recorridos más amplio en el propio reloj.</p>

      <h2>Métricas de entrenamiento</h2>
      <p>Aquí están mucho más igualados de lo que sugiere la diferencia de precio. Los dos comparten <strong>GPS multibanda con SatIQ</strong>, <strong>Training Readiness</strong>, <strong>Training Status</strong>, VO2 máx., <strong>estado de VFC (HRV)</strong>, Body Battery, potencia de carrera en la muñeca, modo triatlón y multideporte, Garmin Pay y música de serie.</p>
      <p>El 965 añade algunas funciones pensadas para esfuerzos largos y montaña:</p>
      <ul>
        <li><strong>Stamina en tiempo real:</strong> estima cuánta energía te queda durante la actividad y cuánto podrás aguantar al ritmo actual, muy útil para dosificar en ultras o triatlones de larga distancia.</li>
        <li><strong>ClimbPro sin trayecto previo:</strong> gracias a los mapas, muestra el perfil de las subidas que tienes por delante incluso aunque no hayas cargado una ruta.</li>
        <li><strong>Métricas adicionales de ciclismo y carrera</strong>, orientadas a quien entrena con mucho volumen o prepara pruebas de larga distancia.</li>
      </ul>
      <p>Si entrenas sobre todo en asfalto con un plan estructurado, el 265 ya te da todo lo esencial. Más contexto en <a href="/guias/que-metricas-de-entrenamiento-importan">¿Qué métricas de entrenamiento importan?</a></p>

      <h2>Precio: ¿merece la pena el salto?</h2>
      <p>Con los precios de referencia de nuestras fichas, el <strong>Forerunner 965</strong> tiene un PVPR de <strong>649,99 €</strong> (se ve habitualmente en torno a 599 €) y el <strong>Forerunner 265</strong> de <strong>499,99 €</strong> (en torno a 429 €): unos <strong>150 € de diferencia</strong> de PVPR, que en tienda puede llegar a 170 €. Son precios que cambian con frecuencia, así que revisa la fila de precio de la tabla.</p>
      <ul>
        <li><strong>Por qué pagar más por el Forerunner 965:</strong> mapas topográficos offline, pantalla de 1,4", bisel de titanio, casi el doble de autonomía, 32 GB de memoria y Stamina en tiempo real.</li>
        <li><strong>Por qué ahorrar con el Forerunner 265:</strong> las mismas métricas de entrenamiento clave, GPS multibanda, modo triatlón y música, en un reloj más ligero y con opción de caja pequeña.</li>
      </ul>
      <p>¿Quieres más detalle? Lee el <a href="/relojes/garmin-forerunner-965">análisis del Forerunner 965</a> y el <a href="/relojes/garmin-forerunner-265">del Forerunner 265</a>, o mira si te basta con un Garmin más económico en <a href="/comparativas/garmin-forerunner-165-vs-garmin-forerunner-265">Forerunner 165 vs Forerunner 265</a>. Si dudas entre el 965 y un smartwatch de salud con llamadas y ECG, lo comparamos en <a href="/comparativas/garmin-venu-3-vs-garmin-forerunner-965">Venu 3 vs Forerunner 965</a>, y si buscas mapas por menos dinero, en <a href="/comparativas/garmin-forerunner-965-vs-suunto-race-s">Forerunner 965 vs Suunto Race S</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-forerunner-965",
        heading: "Elige el Garmin Forerunner 965 si…",
        points: [
          "Haces trail o montaña y necesitas mapas topográficos offline en el reloj.",
          "Preparas ultras o triatlones de larga distancia y valoras sus 31 h de GPS y la Stamina en tiempo real.",
          "Quieres la pantalla más grande (1,4\") y un bisel de titanio más resistente.",
          "Juegas al golf o esquías y te interesan sus mapas de campos y pistas.",
        ],
      },
      {
        watchSlug: "garmin-forerunner-265",
        heading: "Elige el Garmin Forerunner 265 si…",
        points: [
          "Corres sobre todo en asfalto, pista o rutas conocidas y te basta con migas de pan.",
          "Quieres Training Readiness, VFC, GPS multibanda y modo triatlón pagando unos 150 € menos.",
          "Prefieres un reloj más ligero o la caja pequeña del 265S (42 mm).",
          "Con 13 días de autonomía y 20 h de GPS cubres de sobra tus entrenamientos.",
        ],
      },
    ],
  },
  {
    slug: "coros-pace-3-vs-suunto-race-s",
    title: "Coros Pace 3 vs Suunto Race S",
    watchSlugs: ["coros-pace-3", "suunto-race-s"],
    seoTitle:
      "Coros Pace 3 vs Suunto Race S: ¿Ligereza con pantalla MIP o AMOLED con mapas?",
    metaDescription:
      "Comparativa entre Coros Pace 3 y Suunto Race S. Pantalla MIP transflectiva vs AMOLED, mapas topográficos, GPS multibanda, batería y diferencia de precio.",
    summary:
      "Los dos tienen GPS multibanda, altímetro barométrico y corona digital. El COROS PACE 3 apuesta por la ligereza (30 g con nylon), la pantalla MIP siempre encendida, la autonomía en uso diario y la música offline por unos 249 €. El Suunto Race S añade mapas topográficos offline, una AMOLED de 2000 nits y el doble de autonomía en máxima precisión GPS, por unos 100 € más y 60 g de peso.",
    winnerNotes:
      "Para asfalto, series y quien quiere el reloj más ligero sin gastar de más, el PACE 3 es difícil de mejorar. Si corres por montaña y necesitas mapas, el Race S ofrece lo que el PACE 3 no tiene y justifica la diferencia de precio.",
    specs: [
      {
        label: "Pantalla",
        values: ["MIP transflectiva, siempre encendida", "AMOLED táctil, hasta 2000 nits"],
      },
      {
        label: "Controles",
        values: ["Corona digital + botones", "Corona digital + botones"],
      },
      {
        label: "Mapas",
        values: ["No", "Sí, topográficos offline gratuitos"],
      },
      {
        label: "Navegación",
        values: ["Ruta de migas de pan", "Rutas sobre mapa + guía de ascensos (Climb Guidance)"],
      },
      {
        label: "GPS multibanda",
        values: [
          "Sí — doble frecuencia, 5 sistemas de satélites",
          "Sí — doble frecuencia, 5 sistemas de satélites",
        ],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 15 días", "Hasta 9 días"],
      },
      {
        label: "Batería (GPS de máxima precisión)",
        values: ["Hasta 15 h (doble frecuencia)", "Hasta 30 h"],
      },
      {
        label: "Batería (GPS de mayor autonomía)",
        values: ["Hasta 38 h (GPS estándar)", "Hasta 40 h (modo Endurance)"],
      },
      {
        label: "Métricas y plataforma",
        values: [
          "EvoLab (carga, fatiga, predicción de marcas), planes COROS, COROS Training Hub",
          "VO2 máx., VFC (HRV), carga y recuperación (Suunto Coach), Suunto App",
        ],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "Barométrico"],
      },
      {
        label: "Peso",
        values: ["39 g (silicona) / 30 g (nylon)", "60 g"],
      },
      {
        label: "Música offline",
        values: ["Sí, de serie", "No (controla la música del móvil)"],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "50 m"],
      },
    ],
    content: `
      <h2>Pantalla y visibilidad: MIP frente a AMOLED</h2>
      <p>El <strong>COROS PACE 3</strong> usa una pantalla <strong>MIP (Memory-in-Pixel) transflectiva</strong>: refleja la luz ambiente, así que cuanto más sol le da, mejor se lee — también a pleno mediodía en verano — y está siempre encendida sin gastar apenas batería. A cambio, en interiores o con poca luz los colores son apagados y el contraste, bajo.</p>
      <p>El <strong>Suunto Race S</strong> monta una <strong>AMOLED</strong> que llega a <strong>2000 nits</strong> de brillo, una cifra muy alta que la mantiene legible al sol, con colores vivos y mucha más nitidez. Se nota sobre todo al consultar un mapa, donde la MIP se quedaría corta. El precio es la batería: una AMOLED siempre consume más que una MIP.</p>
      <ul>
        <li><strong>Gana el PACE 3</strong> si solo quieres ver tus datos en carrera, siempre, sin pensar en la batería.</li>
        <li><strong>Gana el Race S</strong> si vas a mirar mapas o quieres una pantalla que luzca también fuera del entrenamiento.</li>
      </ul>

      <h2>Mapas frente a migas de pan</h2>
      <p>Es la diferencia que decide la compra para muchos corredores de montaña. El <strong>Race S</strong> incluye <strong>mapas topográficos offline gratuitos</strong>: curvas de nivel, senderos y caminos en el reloj, sin móvil ni suscripciones, más la <strong>guía de ascensos (Climb Guidance)</strong> con el perfil de las subidas que te quedan.</p>
      <p>El <strong>PACE 3 no tiene mapas</strong>: sigue un trayecto cargado como una <strong>ruta de migas de pan</strong> (una línea sobre fondo vacío, con aviso si te sales) y te puede devolver al inicio. En asfalto, pista o rutas conocidas es todo lo que necesitas; en un cruce de senderos sin señalizar, no ver los caminos alrededor es una limitación real.</p>

      <h2>Peso y ergonomía</h2>
      <p>El PACE 3 es de los relojes GPS más ligeros del mercado: <strong>39 g con correa de silicona y solo 30 g con la de nylon</strong>, con una caja de polímero sin pretensiones estéticas. Apenas se nota en series rápidas ni para dormir, algo que agradecen quienes miden el sueño o la VFC por la noche.</p>
      <p>El Race S pesa <strong>60 g</strong>, el doble que un PACE 3 con nylon. Tiene un acabado más cuidado, con bisel de acero inoxidable, y es sumergible a 50 m: se siente más reloj y menos herramienta, pero también se nota más en la muñeca.</p>
      <p>Ambos usan <strong>corona digital</strong> además de botones, cómoda con guantes o manos sudadas. En el Race S la corona brilla especialmente al hacer zoom en el mapa; en el PACE 3 sirve para moverse rápido entre pantallas de datos.</p>

      <h2>Ecosistema y analítica</h2>
      <h3>COROS: Training Hub y EvoLab</h3>
      <p>COROS incluye en el PACE 3 su plataforma <strong>EvoLab</strong> (carga de entrenamiento, fatiga, nivel de forma y predicción de marcas) y los <strong>planes de entrenamiento COROS</strong>. Su gran baza es el <strong>COROS Training Hub</strong>, una plataforma web gratuita para analizar entrenamientos en una pantalla grande y diseñar sesiones y planes que se envían al reloj — algo especialmente valorado por entrenadores y por quien planifica sus series con detalle.</p>
      <h3>Suunto: Suunto App y Suunto Coach</h3>
      <p>El Race S mide VO2 máx., VFC y la <strong>carga y recuperación</strong> con Suunto Coach, y gestiona todo desde la <strong>Suunto App</strong> del móvil, con más de 95 modos deportivos y buena integración con plataformas de terceros. Es un ecosistema correcto, pero más centrado en el móvil que el de COROS. Ten en cuenta también que algunas pruebas independientes han cuestionado la fiabilidad de su pulsómetro de muñeca: si entrenas por zonas, mejor con banda de pecho.</p>

      <h2>Autonomía y precio</h2>
      <p>La autonomía depende mucho del modo. En <strong>uso diario</strong> gana el PACE 3 con holgura: <strong>15 días</strong> frente a <strong>9</strong>. En <strong>GPS multibanda de máxima precisión</strong>, en cambio, el Race S dura el doble: <strong>hasta 30 h</strong> frente a <strong>15 h</strong> del PACE 3 en doble frecuencia. En los modos de mayor ahorro se igualan (38 h del PACE 3 en GPS estándar frente a 40 h del Race S en modo Endurance). Para un ultra de montaña con máxima precisión, el Suunto da más margen.</p>
      <p>En precio, el PACE 3 cuesta unos <strong>249 €</strong> y el Race S unos <strong>349 €</strong>: <strong>100 € de diferencia</strong>. Por ese dinero, el Race S da mapas topográficos, pantalla AMOLED y más autonomía en máxima precisión; el PACE 3 se queda con la ligereza, la música offline y la mejor autonomía en el día a día.</p>
      <p>¿Quieres más detalle? Lee el <a href="/relojes/coros-pace-3">análisis del COROS PACE 3</a> y el <a href="/relojes/suunto-race-s">del Suunto Race S</a>, o compáralos con sus rivales de Garmin en <a href="/comparativas/garmin-forerunner-165-vs-coros-pace-3">Forerunner 165 vs COROS PACE 3</a>, <a href="/comparativas/coros-pace-3-vs-garmin-forerunner-265">COROS PACE 3 vs Forerunner 265</a> y <a href="/comparativas/garmin-forerunner-265-vs-suunto-race-s">Forerunner 265 vs Suunto Race S</a>. Si te atrae más la robustez y la autonomía que los mapas, enfrentamos el Race S al Garmin Instinct 2 en <a href="/comparativas/garmin-instinct-2-vs-suunto-race-s">Instinct 2 vs Suunto Race S</a>. Y si por el precio del Race S también te tienta un smartwatch de salud con llamadas, lo enfrentamos en <a href="/comparativas/garmin-venu-3-vs-suunto-race-s">Garmin Venu 3 vs Suunto Race S</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "coros-pace-3",
        heading: "Elige el COROS PACE 3 si…",
        points: [
          "Corres sobre todo en asfalto o pista y haces series: no necesitas mapas.",
          "Quieres el reloj más ligero posible: 30 g con correa de nylon.",
          "Valoras la autonomía en el día a día (15 días), la pantalla siempre visible y la música offline.",
          "Tu presupuesto es contenido y quieres GPS multibanda por unos 249 €.",
        ],
      },
      {
        watchSlug: "suunto-race-s",
        heading: "Paga los 100 € extra por el Suunto Race S si…",
        points: [
          "Haces trail running o montaña y necesitas mapas topográficos offline.",
          "Quieres una pantalla AMOLED muy brillante, cómoda para leer mapas.",
          "Necesitas autonomía con GPS de máxima precisión: hasta 30 h, el doble que el PACE 3.",
          "Prefieres un acabado más premium y no te importa llevar 60 g en la muñeca.",
        ],
      },
    ],
  },
  {
    slug: "coros-pace-3-vs-polar-pacer",
    title: "Coros Pace 3 vs Polar Pacer",
    watchSlugs: ["coros-pace-3", "polar-pacer"],
    seoTitle: "Coros Pace 3 vs Polar Pacer: ¿Cuál comprar para correr en 2026?",
    metaDescription:
      "Comparativa entre Coros Pace 3 y Polar Pacer. Analizamos pantalla MIP, precisión GPS multibanda vs GPS estándar, métricas de recuperación y precio.",
    summary:
      "Dos relojes ligeros con pantalla MIP para corredores. El COROS PACE 3 añade GPS multibanda, altímetro barométrico, navegación por migas de pan, música offline y más autonomía. El Polar Pacer es más barato y destaca en recuperación y sueño (Nightly Recharge, Sleep Plus Stages) y en entrenamientos sugeridos (FitSpark).",
    winnerNotes:
      "El PACE 3 es objetivamente más completo y preciso, y por eso cuesta más. El Pacer tiene sentido si lo encuentras en oferta, si corres en terreno abierto y si lo que más te interesa es controlar tu recuperación y tu sueño con una interfaz sencilla.",
    specs: [
      {
        label: "Pantalla",
        values: ["MIP transflectiva, siempre encendida", "MIP transflectiva, siempre encendida"],
      },
      {
        label: "Controles",
        values: ["Corona digital + botones", "5 botones"],
      },
      {
        label: "GPS",
        values: [
          "Multibanda (doble frecuencia) — GPS, GLONASS, Galileo, Beidou y QZSS",
          "Estándar (una frecuencia) — GPS, GLONASS, Galileo y QZSS",
        ],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 15 días", "Hasta 7 días"],
      },
      {
        label: "Batería (entrenamiento con GPS)",
        values: ["Hasta 38 h (15 h en doble frecuencia)", "Hasta 35 h (GPS y FC)"],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "No (altitud calculada por GPS)"],
      },
      {
        label: "Navegación",
        values: ["Ruta de migas de pan", "No"],
      },
      {
        label: "Mapas",
        values: ["No", "No"],
      },
      {
        label: "Métricas y plataforma",
        values: [
          "EvoLab (carga, fatiga, predicción de marcas), planes COROS, COROS Training Hub",
          "Training Load Pro, Nightly Recharge, FitSpark, Running Index, Sleep Plus Stages, FuelWise",
        ],
      },
      {
        label: "Peso",
        values: ["39 g (silicona) / 30 g (nylon)", "40 g"],
      },
      {
        label: "Música offline",
        values: ["Sí, de serie", "No"],
      },
      {
        label: "Pagos sin contacto",
        values: ["No", "No"],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "5 ATM"],
      },
    ],
    content: `
      <h2>GPS y precisión: multibanda frente a GPS estándar</h2>
      <p>El <strong>COROS PACE 3</strong> tiene <strong>GPS multibanda de doble frecuencia</strong> y es compatible con los cinco sistemas de satélites principales. Donde el GPS lo tiene difícil — calles estrechas entre edificios altos, bosque cerrado, recorridos con muchas curvas — el ritmo instantáneo es más estable y la distancia final se ajusta mejor a la real.</p>
      <p>El <strong>Polar Pacer</strong> usa GPS, GLONASS, Galileo y QZSS en <strong>una sola frecuencia</strong>. En parques, carreteras y pista funciona bien y es suficiente para entrenar; en entornos complicados puede recortar curvas o dar ritmos más irregulares.</p>
      <p>El PACE 3 suma además <strong>altímetro barométrico</strong> (el Pacer calcula la altitud con el GPS, menos preciso con el desnivel acumulado) y <strong>navegación por migas de pan</strong> para seguir una ruta cargada, que el Pacer no tiene.</p>

      <h2>Métricas y software</h2>
      <h3>Polar: recuperación y sueño de referencia</h3>
      <p>Polar lleva años siendo una referencia en análisis de recuperación, y el Pacer hereda esas herramientas a un precio muy bajo:</p>
      <ul>
        <li><strong>Nightly Recharge:</strong> cada mañana te dice cómo te has recuperado durante la noche, combinando la calidad del sueño con la respuesta de tu sistema nervioso.</li>
        <li><strong>Sleep Plus Stages:</strong> análisis detallado del sueño por fases.</li>
        <li><strong>FitSpark:</strong> te propone entrenamientos diarios adaptados a tu recuperación y tu forma.</li>
        <li><strong>Training Load Pro</strong> y <strong>Running Index:</strong> carga de entrenamiento y una estimación de tu rendimiento en carrera en cada salida.</li>
      </ul>
      <h3>COROS: EvoLab y Training Hub</h3>
      <p>COROS incluye <strong>EvoLab</strong> (carga de entrenamiento, fatiga, nivel de forma y predicción de marcas) y sus <strong>planes de entrenamiento</strong>. Su punto fuerte es el <strong>COROS Training Hub</strong>, una plataforma web gratuita para analizar entrenamientos en pantalla grande y diseñar sesiones y planes que se envían al reloj, muy útil si planificas tus series con detalle o trabajas con un entrenador.</p>
      <p>En resumen: Polar te cuida más el descanso; COROS te da más herramientas para planificar y analizar el entrenamiento.</p>

      <h2>Pantalla, peso y diseño</h2>
      <p>Los dos usan <strong>pantallas MIP transflectivas</strong> siempre encendidas, que se leen mejor cuanto más sol les da y apenas gastan batería. Ninguno tiene la viveza de una AMOLED, pero para ver tus datos en carrera son perfectas.</p>
      <p>También los dos son muy ligeros: <strong>40 g</strong> el Pacer y <strong>39 g</strong> el PACE 3 con correa de silicona, que baja a solo <strong>30 g con la de nylon</strong>. En la muñeca, ninguno molesta ni para dormir.</p>
      <p>Donde cambian es en el manejo. El Pacer se controla con <strong>cinco botones</strong> y una interfaz sencilla y directa, sin curva de aprendizaje. El PACE 3 añade una <strong>corona digital</strong> para moverse rápido entre pantallas, cómoda con guantes o con las manos sudadas.</p>

      <h2>Autonomía y extras</h2>
      <p>En <strong>uso diario</strong>, el PACE 3 dura más del doble: <strong>hasta 15 días</strong> frente a <strong>7</strong> del Pacer. <strong>Entrenando con GPS</strong> están más igualados: hasta <strong>38 h</strong> el PACE 3 en GPS estándar (15 h en doble frecuencia) frente a <strong>35 h</strong> del Pacer con GPS y frecuencia cardíaca. Cualquiera de los dos aguanta una semana de entrenamientos y un maratón sin problema.</p>
      <p>Como extra, el PACE 3 trae <strong>música offline de serie</strong> para correr sin móvil; el Pacer no almacena música. Ninguno tiene pagos sin contacto.</p>

      <h2>Precio</h2>
      <p>Con los precios de nuestras fichas, el Pacer (PVPR de 199,90 €) se ha visto alrededor de 144 € en la tienda oficial de Polar, y el PACE 3 cuesta unos 249 €: unos 100 € de diferencia. Por ese dinero el PACE 3 da multibanda, barómetro, navegación, música y el doble de autonomía diaria. Si no vas a usar nada de eso, el Pacer es una compra excelente.</p>
      <p>¿Quieres más detalle? Lee el <a href="/relojes/coros-pace-3">análisis del COROS PACE 3</a> y el <a href="/relojes/polar-pacer">del Polar Pacer</a>, compara el Pacer con el Garmin de entrada en <a href="/comparativas/garmin-forerunner-55-vs-polar-pacer">Forerunner 55 vs Polar Pacer</a> o consulta nuestra guía de <a href="/guias/mejores-relojes-gps-menos-200-euros">mejores relojes GPS por menos de 200 €</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "coros-pace-3",
        heading: "Elige el COROS PACE 3 si…",
        points: [
          "Quieres el GPS más preciso: multibanda de doble frecuencia, clave en ciudad o bosque.",
          "Te gusta manejar el reloj con corona digital y quieres altímetro barométrico y navegación.",
          "Valoras la autonomía en el día a día (15 días) y llevar música sin el móvil.",
          "Planificas tus entrenamientos y quieres el COROS Training Hub y EvoLab.",
        ],
      },
      {
        watchSlug: "polar-pacer",
        heading: "Elige el Polar Pacer si…",
        points: [
          "Te interesan sobre todo la recuperación y el sueño: Nightly Recharge y Sleep Plus Stages.",
          "Quieres una interfaz sencilla con botones y entrenamientos sugeridos (FitSpark).",
          "Corres en terreno abierto, donde el GPS estándar es suficiente.",
          "Lo encuentras en oferta y quieres gastar lo mínimo.",
        ],
      },
    ],
  },
  {
    slug: "garmin-forerunner-55-vs-coros-pace-3",
    title: "Garmin Forerunner 55 vs Coros Pace 3",
    watchSlugs: ["garmin-forerunner-55", "coros-pace-3"],
    seoTitle: "Garmin Forerunner 55 vs Coros Pace 3: ¿Merece la pena pagar más?",
    metaDescription:
      "Comparativa entre Garmin Forerunner 55 y Coros Pace 3. Analizamos diferencia de precio, GPS multibanda vs estándar, altímetro barométrico, batería y métricas.",
    summary:
      "Dos relojes ligeros con pantalla MIP siempre encendida. El Forerunner 55 es la puerta de entrada a Garmin: lo esencial para correr, 5 botones y hasta 2 semanas de batería. El COROS PACE 3 añade GPS multibanda, altímetro barométrico, navegación por migas de pan, música offline y más autonomía con GPS (38 h frente a 20 h), por unos 65 € más según los precios observados.",
    winnerNotes:
      "Si corres en terreno abierto y solo quieres ritmo, distancia y pulso, el Forerunner 55 cumple y te ahorras dinero. Si vas a correr en ciudad, bosque o montaña, o quieres seguir rutas, el PACE 3 da bastante más por una diferencia moderada.",
    specs: [
      {
        label: "Pantalla",
        values: ["MIP transflectiva, siempre encendida", "MIP transflectiva, siempre encendida"],
      },
      {
        label: "Controles",
        values: ["5 botones", "Corona digital + botones"],
      },
      {
        label: "Tipo de GPS",
        values: [
          "GPS, GLONASS y Galileo — sin doble frecuencia",
          "Multibanda (doble frecuencia), 5 sistemas de satélites",
        ],
      },
      {
        label: "Altímetro",
        values: ["No figura en el manual oficial (pendiente de confirmar)", "Barométrico"],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 2 semanas", "Hasta 15 días"],
      },
      {
        label: "Batería (GPS)",
        values: ["Hasta 20 h", "Hasta 38 h (GPS estándar) / 15 h (doble frecuencia)"],
      },
      {
        label: "Navegación",
        values: ["No", "Ruta de migas de pan"],
      },
      {
        label: "Mapas",
        values: ["No", "No"],
      },
      {
        label: "Métricas y plataforma",
        values: [
          "Frecuencia cardíaca, ritmo, distancia y entrenamientos diarios sugeridos — Garmin Connect",
          "EvoLab (carga, fatiga, predicción de marcas), planes COROS, COROS Training Hub",
        ],
      },
      {
        label: "Peso",
        values: ["37 g", "39 g (silicona) / 30 g (nylon)"],
      },
      {
        label: "Música offline",
        values: ["No", "Sí, de serie"],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "5 ATM"],
      },
    ],
    content: `
      <h2>Precio y posicionamiento</h2>
      <p>El <strong>Garmin Forerunner 55</strong> es el reloj de entrada de Garmin: lo justo para entrenar con estructura, sin extras. Lo hemos visto en tienda por unos <strong>184 €</strong>. El <strong>COROS PACE 3</strong> juega en la gama media — PVPR de referencia de <strong>249 €</strong> — con funciones propias de relojes más caros: GPS multibanda, altímetro barométrico y música offline.</p>
      <p>Con esos precios, la diferencia ronda los <strong>65 €</strong>. Es un salto moderado para lo que añade el PACE 3, pero los precios de tienda cambian a menudo: si encuentras el Forerunner 55 en una oferta fuerte, la ecuación cambia. Consulta la fila de precio de la tabla para ver el valor actualizado de cada ficha.</p>

      <h2>Precisión de GPS y sensores</h2>
      <h3>GPS estándar frente a multibanda</h3>
      <p>El Forerunner 55 usa <strong>GPS, GLONASS y Galileo en una sola frecuencia</strong>. En pista, en parques o en carretera despejada su precisión es más que suficiente para entrenar por ritmo.</p>
      <p>El PACE 3 tiene <strong>GPS multibanda real (doble frecuencia)</strong> con cinco sistemas de satélites. Filtra mucho mejor los rebotes de señal entre edificios altos, bajo bosque cerrado o en barrancos, así que el ritmo instantáneo es más estable y la distancia, más fiable. Si corres por ciudad o por montaña, es la mejora que más se nota. Lo explicamos en <a href="/guias/que-precision-gps-necesitas-realmente">¿Qué precisión GPS necesitas realmente?</a></p>
      <h3>Altímetro barométrico</h3>
      <p>El PACE 3 incluye <strong>altímetro barométrico</strong>, que mide el desnivel con mucha más fiabilidad que la altitud calculada por GPS. En el manual oficial del Forerunner 55 el altímetro barométrico no aparece entre los sensores. Para correr en llano o en pista no lo echarás de menos; si sumas cuestas o trail, el desnivel acumulado del PACE 3 será mucho más realista.</p>
      <h3>Navegación</h3>
      <p>El PACE 3 sigue rutas cargadas como <strong>migas de pan</strong> (una línea con tu posición y avisos si te sales). No son mapas completos, pero bastan para seguir un recorrido nuevo. El Forerunner 55 <strong>no tiene navegación</strong>.</p>

      <h2>Pantalla y controles</h2>
      <p>Aquí están muy igualados: los dos usan una pantalla <strong>MIP transflectiva siempre encendida</strong>, que refleja la luz ambiente y se lee mejor cuanto más sol le da, sin apenas gastar batería. En interiores, ninguna de las dos destaca por color ni contraste. Si dudas entre esta tecnología y una AMOLED, lo tienes en <a href="/guias/amoled-vs-mip">AMOLED vs MIP</a>.</p>
      <p>La diferencia está en el manejo. El Forerunner 55 se controla con <strong>5 botones físicos</strong>, el esquema clásico de Garmin: fácil de usar sin mirar y con guantes. El PACE 3 combina botones con una <strong>corona digital</strong> giratoria para moverse rápido entre pantallas y menús, cómoda incluso con las manos sudadas.</p>

      <h2>Métricas y software</h2>
      <h3>Garmin Connect: lo esencial, bien resuelto</h3>
      <p>El Forerunner 55 se centra en <strong>frecuencia cardíaca, ritmo, distancia y entrenamientos diarios sugeridos</strong> según tu forma y recuperación. Todo se sincroniza con <strong>Garmin Connect</strong>, una de las apps más maduras del sector, con un historial y un ecosistema que conservas si en el futuro subes a otro Garmin.</p>
      <h3>COROS: EvoLab y Training Hub</h3>
      <p>El PACE 3 añade <strong>EvoLab</strong> — carga de entrenamiento, fatiga, nivel de forma y predicción de marcas —, planes de entrenamiento COROS y métricas específicas de trail. Su gran baza es el <strong>COROS Training Hub</strong>, una plataforma web gratuita para analizar sesiones en pantalla grande y diseñar entrenamientos que se envían al reloj. Si planificas tus series con detalle, es un paso por encima de lo que ofrece el 55.</p>

      <h2>Autonomía</h2>
      <p>En <strong>uso diario</strong> están prácticamente empatados: hasta <strong>2 semanas</strong> el Forerunner 55 y hasta <strong>15 días</strong> el PACE 3. La diferencia aparece al <strong>entrenar con GPS</strong>: el 55 llega a <strong>20 h</strong>, mientras que el PACE 3 alcanza <strong>38 h en GPS estándar</strong> (unas 15 h en doble frecuencia). Para tiradas largas, maratones o salidas de montaña, el COROS da mucho más margen.</p>
      <p>¿Quieres más detalle? Lee el <a href="/relojes/garmin-forerunner-55">análisis del Garmin Forerunner 55</a> y el <a href="/relojes/coros-pace-3">del COROS PACE 3</a>, o compáralos con otros rivales en <a href="/comparativas/garmin-forerunner-165-vs-garmin-forerunner-55">Forerunner 165 vs Forerunner 55</a>, <a href="/comparativas/garmin-forerunner-55-vs-polar-pacer">Forerunner 55 vs Polar Pacer</a> y <a href="/comparativas/coros-pace-3-vs-polar-pacer">COROS PACE 3 vs Polar Pacer</a>. Si buscas presupuesto ajustado, consulta también los <a href="/guias/mejores-relojes-gps-menos-200-euros">mejores relojes GPS por menos de 200 €</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-forerunner-55",
        heading: "Elige el Garmin Forerunner 55 si…",
        points: [
          "Quieres gastar lo mínimo y te basta con ritmo, distancia, pulso y entrenamientos sugeridos.",
          "Corres en pista, parque o carretera despejada, donde el GPS estándar es suficiente.",
          "No necesitas altímetro ni seguir rutas: siempre corres por recorridos conocidos.",
          "Prefieres el ecosistema Garmin Connect y un manejo sencillo con 5 botones.",
        ],
      },
      {
        watchSlug: "coros-pace-3",
        heading: "Da el salto al COROS PACE 3 si…",
        points: [
          "Corres por ciudad, bosque o montaña y quieres la precisión del GPS multibanda.",
          "Quieres un desnivel fiable gracias al altímetro barométrico.",
          "Necesitas más autonomía con GPS (38 h frente a 20 h) para tiradas largas o trail.",
          "Valoras la navegación por migas de pan, la música offline y el análisis de EvoLab y Training Hub.",
        ],
      },
    ],
  },
  {
    slug: "garmin-instinct-2-vs-coros-pace-3",
    title: "Garmin Instinct 2 vs COROS Pace 3",
    watchSlugs: ["garmin-instinct-2", "coros-pace-3"],
    seoTitle:
      "Garmin Instinct 2 vs COROS Pace 3: ¿Resistencia militar u optimización de carrera?",
    metaDescription:
      "Comparativa entre Garmin Instinct 2 y COROS Pace 3. Analizamos pantalla monocroma vs color, resistencia 10 ATM vs 5 ATM, GPS multibanda, batería y precio.",
    summary:
      "El Garmin Instinct 2 destaca por su estética táctica y resistencia extrema (certificación militar MIL-STD-810G y 10 ATM), ideal para montaña y deportes de impacto. El COROS PACE 3 es un especialista en ligereza (30 g) con pantalla a color, GPS multibanda de doble frecuencia, música offline y altímetro barométrico a un precio muy ajustado.",
    winnerNotes:
      "Elige el Instinct 2 si buscas un reloj indestructible con gran autonomía en modo diario y la solidez de Garmin para montaña. Elige el PACE 3 si priorizas la ligereza para correr en asfalto o trail, la precisión del GPS multibanda y la música sin móvil.",
    specs: [
      {
        label: "Pantalla",
        values: [
          "MIP transflectiva monocroma (dos ventanas, alto contraste)",
          "MIP transflectiva a color, siempre encendida",
        ],
      },
      {
        label: "Controles",
        values: ["5 botones físicos", "Corona digital + botones"],
      },
      {
        label: "Resistencia y caja",
        values: [
          "10 ATM (100 m) / Polímero reforzado con fibra (MIL-STD-810G)",
          "5 ATM (50 m) / Polímero ligero",
        ],
      },
      {
        label: "Tipo de GPS",
        values: [
          "GPS, GLONASS y Galileo (frecuencia única)",
          "Multibanda (doble frecuencia), 5 sistemas de satélites",
        ],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "Barométrico"],
      },
      {
        label: "Navegación",
        values: ["Ruta de migas de pan y TracBack", "Ruta de migas de pan"],
      },
      {
        label: "Mapas",
        values: ["No", "No"],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 28 días", "Hasta 15 días"],
      },
      {
        label: "Batería (GPS)",
        values: [
          "Hasta 30 h",
          "Hasta 38 h (GPS estándar) / 15 h (doble frecuencia)",
        ],
      },
      {
        label: "Peso",
        values: ["52 g", "39 g (silicona) / 30 g (nylon)"],
      },
      {
        label: "Música offline",
        values: ["No (control de música del móvil)", "Sí, almacenamiento MP3 de serie"],
      },
      {
        label: "Plataforma y métricas",
        values: [
          "Garmin Connect, Body Battery, estrés, edad según la forma física",
          "EvoLab, planes de entrenamiento COROS, COROS Training Hub",
        ],
      },
    ],
    content: `
      <h2>Concepto y diseño: Indestructible frente a ultraligero</h2>
      <p>El <strong>Garmin Instinct 2</strong> y el <strong>COROS PACE 3</strong> responden a filosofías totalmente opuestas dentro del reloj deportivo:</p>
      <p>El Instinct 2 está diseñado para aguantarlo todo. Su carcasa de polímero reforzado cumple el estándar militar estadounidense <strong>MIL-STD-810G</strong> contra impactos, temperatura y corrosión, con una resistencia al agua de <strong>10 ATM (100 metros)</strong>. Es un reloj robusto (52 g), pensado para senderismo, escalada, OCR, deportes acuáticos o entornos exigentes.</p>
      <p>El COROS PACE 3 busca justo lo contrario: ser lo más ligero posible en la muñeca. Con <strong>39 g (silicona) o solo 30 g (nylon)</strong> y <strong>5 ATM de resistencia</strong>, está pensado para corredores de asfalto, pista y trail que no quieren sentir peso al entrenar o competir.</p>

      <h2>Pantalla y manejo: Monocroma táctica vs. Color y corona digital</h2>
      <p>La pantalla del <strong>Instinct 2</strong> utiliza un panel <strong>MIP monocromo con diseño de dos ventanas</strong>. Aunque no muestra colores ni gráficos complejos, ofrece un contraste imbatible a pleno sol y un consumo energético mínimo. Se controla íntegramente mediante <strong>5 botones físicos</strong> de tacto rugoso, perfectos para usar con guantes o bajo la lluvia.</p>
      <p>El <strong>PACE 3</strong> incluye una pantalla <strong>MIP transflectiva a color de 1,2 pulgadas</strong>, más idónea para seguir trazados de rutas o ver gráficos de zonas de pulso. Su control combina botones con una <strong>corona digital giratoria</strong>, que permite desplazarse rápidamente por los menús y métricas de carrera.</p>

      <h2>Precisión GPS y navegación</h2>
      <h3>GPS estándar vs. GPS multibanda</h3>
      <p>En el apartado de satélites, el PACE 3 toma ventaja con su chip de <strong>GPS multibanda (doble frecuencia)</strong>. Filtra mejor los rebotes de señal en zonas urbanas encajonadas, bosques densos o desfiladeros, manteniendo un ritmo instantáneo estable.</p>
      <p>El Instinct 2 utiliza un receptor <strong>GNSS estándar (GPS, GLONASS, Galileo)</strong>. Cumple con solvencia en espacios abiertos o montaña despejada, pero puede mostrar pequeñas imprecisiones en cañones o entre edificios altos.</p>
      <h3>Navegación y altímetro</h3>
      <p>Ambos relojes cuentan con <strong>altímetro barométrico</strong> para medir el desnivel acumulado con precisión y permiten seguir tracks mediante <strong>líneas de migas de pan</strong> sin mapas de fondo. En el Instinct 2 destaca la función <strong>TracBack</strong> para deshacer el camino de vuelta al punto de origen de forma segura.</p>

      <h2>Autonomía y extras</h2>
      <p>En modo smartwatch diario, el <strong>Instinct 2</strong> destaca con hasta <strong>28 días de autonomía</strong> por carga gracias a su pantalla monocroma. En grabación GPS continua alcanza las <strong>30 horas</strong>.</p>
      <p>El <strong>PACE 3</strong> ofrece hasta <strong>15 días en uso diario</strong> y llega a <strong>38 horas en GPS estándar</strong> (15 horas en modo multibanda de máxima precisión). Además, añade almacenamiento para <strong>música offline en formato MP3</strong>, una función de la que carece el Instinct 2.</p>

      <h2>Ecosistema y software</h2>
      <p>El Instinct 2 se integra con la plataforma <strong>Garmin Connect</strong> para centralizar tus datos de salud y rendimiento, destacando funciones propias del ecosistema como <i>Body Battery</i>, seguimiento del nivel de estrés y estimación de edad según tu forma física.</p>
      <p>El PACE 3 integra el ecosistema <strong>EvoLab</strong> para analizar la carga de entrenamiento, fatiga y predicciones de marcas, con acceso gratuito a la plataforma web <strong>COROS Training Hub</strong>.</p>

      <p>Para profundizar en cada modelo, consulta la <a href="/relojes/garmin-instinct-2">ficha del Garmin Instinct 2</a> y la <a href="/relojes/coros-pace-3">ficha del COROS PACE 3</a>. Si buscas otras alternativas, echa un vistazo a <a href="/comparativas/garmin-forerunner-165-vs-coros-pace-3">Forerunner 165 vs COROS Pace 3</a> o explora las <a href="/guias/mejores-relojes-gps-menos-200-euros">opciones por menos de 200 €</a>. Y si dudas entre la robustez del Instinct 2 y un smartwatch AMOLED con llamadas, lo comparamos en <a href="/comparativas/garmin-venu-3-vs-garmin-instinct-2">Venu 3 vs Instinct 2</a>; si lo que te falta son mapas, en <a href="/comparativas/garmin-instinct-2-vs-suunto-race-s">Instinct 2 vs Suunto Race S</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-instinct-2",
        heading: "Elige el Garmin Instinct 2 si…",
        points: [
          "Buscas la máxima durabilidad: resistencia militar (MIL-STD-810G) y 10 ATM de sumergibilidad.",
          "Valoras una autonomía extendida en modo reloj (hasta 28 días sin recargar).",
          "Te gusta la estética táctica/G-Shock y la lectura limpia de su pantalla monocroma.",
          "Prefieres un control clásico de 5 botones y el ecosistema Garmin Connect.",
        ],
      },
      {
        watchSlug: "coros-pace-3",
        heading: "Elige el COROS PACE 3 si…",
        points: [
          "Buscas ligereza extrema (30-39 g) para entrenar cómodo en asfalto, pista o trail.",
          "Quieres GPS multibanda de doble frecuencia para la mejor precisión entre edificios o árboles.",
          "Prefieres pantalla a color, manejo con corona digital y música MP3 sin llevar el móvil.",
          "Quieres la mejor relación entre peso, funciones y precio (PVPR 249 €).",
        ],
      },
    ],
  },
  {
    slug: "garmin-venu-3-vs-garmin-forerunner-265",
    title: "Garmin Venu 3 vs Garmin Forerunner 265",
    watchSlugs: ["garmin-venu-3", "garmin-forerunner-265"],
    seoTitle:
      "Garmin Venu 3 vs Garmin Forerunner 265: ¿Smartwatch o Reloj de Running?",
    metaDescription:
      "Comparativa entre Garmin Venu 3 y Forerunner 265: dos relojes AMOLED de precio parecido con propósitos distintos. Llamadas y salud frente a GPS multibanda y Training Readiness.",
    summary:
      "Los dos tienen pantalla AMOLED táctil, altímetro barométrico, música, Garmin Pay y autonomía de casi dos semanas. El Venu 3 apuesta por la salud y el día a día: micrófono y altavoz para llamadas, sensor Elevate v5, Sleep Coach y bisel de acero. El Forerunner 265 apuesta por el rendimiento: GPS multibanda, Training Readiness, estado y carga de entrenamiento, modo triatlón y 5 botones físicos.",
    winnerNotes:
      "Si entrenas con un plan, preparas carreras o compites, el Forerunner 265 es el reloj correcto. Si haces deporte para estar en forma y quieres un smartwatch completo con el que contestar llamadas y cuidar el descanso, el Venu 3 encaja mejor y, con los precios actuales de nuestras fichas, además cuesta menos.",
    specs: [
      {
        label: "Enfoque",
        values: ["Smartwatch de salud y estilo de vida", "Reloj de running y entrenamiento"],
      },
      {
        label: "Pantalla",
        values: [
          "AMOLED táctil de 1,4\" (454 x 454 px), manejo principalmente táctil",
          "AMOLED táctil + 5 botones físicos",
        ],
      },
      {
        label: "Tamaños",
        values: ["Venu 3 (45 mm) y Venu 3S (41 mm)", "265 (46 mm) y 265S (42 mm)"],
      },
      {
        label: "Bisel",
        values: ["Acero inoxidable", "Polímero reforzado con fibra"],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 14 días", "Hasta 13 días (265, 46 mm)"],
      },
      {
        label: "Batería (GPS continuo)",
        values: ["Hasta 26 h", "Hasta 20 h (14 h en multibanda con todos los sistemas)"],
      },
      {
        label: "GPS multibanda",
        values: [
          "No — GPS, GLONASS y Galileo en una frecuencia",
          "Sí — doble frecuencia con SatIQ",
        ],
      },
      {
        label: "Sensor de pulso",
        values: ["Elevate v5", "Elevate v4"],
      },
      {
        label: "Llamadas y asistente de voz",
        values: ["Sí — micrófono y altavoz integrados", "No"],
      },
      {
        label: "Sueño",
        values: [
          "Puntuación de sueño, Sleep Coach y detección de siestas",
          "Puntuación de sueño y estado de VFC (HRV) nocturno",
        ],
      },
      {
        label: "Métricas de entreno",
        values: [
          "VO2 máx., Body Battery, VFC (HRV), beneficio del entrenamiento",
          "VO2 máx., Body Battery, VFC (HRV) + Training Readiness, estado y carga de entrenamiento, potencia de carrera",
        ],
      },
      {
        label: "Multideporte / triatlón",
        values: ["No", "Sí"],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "Barométrico"],
      },
      {
        label: "Navegación",
        values: ["No", "Ruta de migas de pan"],
      },
      {
        label: "Mapas",
        values: ["No", "No"],
      },
      {
        label: "Peso",
        values: ["46 g", "47 g (265) / 39 g (265S)"],
      },
      {
        label: "Música offline",
        values: ["Sí", "Sí"],
      },
      {
        label: "Pagos sin contacto",
        values: ["Sí (Garmin Pay)", "Sí (Garmin Pay)"],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "5 ATM"],
      },
    ],
    content: `
      <h2>Dos relojes AMOLED, dos propósitos distintos</h2>
      <p>A primera vista se parecen: los dos son Garmin, tienen pantalla <strong>AMOLED táctil</strong>, rondan el mismo peso y aguantan casi dos semanas sin cargar. Pero responden a preguntas diferentes. El <strong>Venu 3</strong> es un smartwatch que mide muy bien tu salud y tu actividad diaria; el <strong>Forerunner 265</strong> es un reloj de entrenamiento que te dice cómo rendir mejor.</p>
      <p>La forma más rápida de decidir es preguntarte qué haces con el reloj puesto: si lo que más te importa es el día a día (llamadas, notificaciones, sueño, estrés), Venu 3; si lo que más te importa son tus sesiones de entrenamiento y tus marcas, Forerunner 265.</p>

      <h2>Dónde destaca el Venu 3</h2>
      <ul>
        <li><strong>Micrófono y altavoz integrados:</strong> puedes contestar llamadas desde la muñeca (con el móvil conectado por Bluetooth) y usar el asistente de voz del teléfono sin sacarlo del bolsillo.</li>
        <li><strong>Sensor Elevate v5:</strong> la generación más reciente del sensor óptico de Garmin, frente al Elevate v4 del 265. Se nota sobre todo en el seguimiento continuo del pulso y la VFC (HRV) a lo largo del día.</li>
        <li><strong>Sleep Coach y detección de siestas:</strong> además de puntuar tu sueño, te recomienda cuánto dormir según tu actividad y registra las siestas, que también cuentan para recargar el Body Battery.</li>
        <li><strong>Bisel de acero inoxidable:</strong> un acabado más de reloj que de pulsera deportiva, fácil de llevar en la oficina o con ropa de vestir.</li>
        <li><strong>Algo más de autonomía:</strong> hasta 14 días en modo reloj y 26 h con GPS, frente a 13 días y 20 h del 265.</li>
      </ul>

      <h2>Dónde destaca el Forerunner 265</h2>
      <ul>
        <li><strong>GPS multibanda (doble frecuencia) con SatIQ:</strong> en ciudad con edificios altos, bosque cerrado o recorridos con muchas curvas, el ritmo y la distancia son más fiables. El Venu 3 usa GPS en una sola frecuencia, suficiente en terreno abierto.</li>
        <li><strong>Training Readiness (disposición para entrenar):</strong> una puntuación diaria que combina sueño, recuperación, VFC y carga reciente para decirte si hoy toca apretar o recuperar.</li>
        <li><strong>Estado y carga de entrenamiento:</strong> indica si estás progresando, manteniendo o sobrecargándote, y cuánto has acumulado en las últimas semanas. El Venu 3 no tiene estas métricas.</li>
        <li><strong>Modo triatlón y multideporte</strong>, y compatibilidad con medidores de potencia de ciclismo.</li>
        <li><strong>5 botones físicos:</strong> se maneja entero sin tocar la pantalla, algo que se agradece con guantes, con las manos sudadas o bajo la lluvia, y en series donde marcas vueltas sin mirar.</li>
        <li><strong>Navegación por migas de pan:</strong> puedes seguir una ruta cargada; el Venu 3 no tiene navegación.</li>
      </ul>

      <h2>Salud y día a día</h2>
      <p>Los dos miden Body Battery, estrés, VO2 máx. y VFC nocturna, así que en lo básico el 265 no se queda atrás. La diferencia está en la experiencia: el Venu 3 pone la salud en primer plano (Sleep Coach, siestas, sensor más reciente) y añade llamadas y asistente de voz, que hacen que se use como un smartwatch completo. El 265 trata esos mismos datos como herramientas para dosificar el entrenamiento.</p>

      <h2>Entrenamiento y rendimiento</h2>
      <p>Si sigues un plan para un 10K, un medio maratón o un maratón, el Forerunner 265 aporta mucho más: Training Readiness, estado y carga de entrenamiento, potencia de carrera en la muñeca y un GPS más preciso donde el estándar falla. El Venu 3 registra perfectamente tus carreras, sesiones de gimnasio o natación en piscina, pero no te ayuda a decidir cuánto y cuándo apretar.</p>

      <h2>Precio</h2>
      <p>Tienen un precio de referencia parecido, pero con las ofertas actuales el Venu 3 suele salir más barato (consulta la fila de precio de la tabla, con fecha y tienda). Si dudas entre los dos, lo que debería decidir es el uso, no la diferencia de precio. Si quieres pantalla AMOLED y el ecosistema Garmin a un precio más ajustado, el Forerunner 165 cuesta unos 150 € menos que el Venu 3: lo comparamos en <a href="/comparativas/garmin-venu-3-vs-garmin-forerunner-165">Venu 3 vs Forerunner 165</a>. Si el 265 te parece caro y no necesitas llamadas, mira también el <a href="/comparativas/garmin-forerunner-165-vs-garmin-forerunner-265">Forerunner 165 vs Forerunner 265</a>. Y si además de métricas quieres mapas, compara el Venu 3 con el buque insignia de la serie en <a href="/comparativas/garmin-venu-3-vs-garmin-forerunner-965">Venu 3 vs Forerunner 965</a>. Para más detalle, lee el <a href="/relojes/garmin-venu-3">análisis del Venu 3</a> y el <a href="/relojes/garmin-forerunner-265">del Forerunner 265</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-venu-3",
        heading: "Elige el Garmin Venu 3 si…",
        points: [
          "Quieres un smartwatch para todo el día que también sirva para hacer deporte.",
          "Te interesa contestar llamadas y usar el asistente de voz desde la muñeca.",
          "Das prioridad al sueño, el descanso y la salud general (Sleep Coach, siestas, Body Battery).",
          "Prefieres un acabado más elegante (bisel de acero) y manejarlo sobre todo con la pantalla táctil.",
        ],
      },
      {
        watchSlug: "garmin-forerunner-265",
        heading: "Elige el Garmin Forerunner 265 si…",
        points: [
          "Sigues un plan de entrenamiento o preparas carreras y quieres Training Readiness y estado de entrenamiento.",
          "Corres en ciudad densa, bosque o montaña y necesitas la precisión del GPS multibanda.",
          "Haces o vas a hacer triatlón o duatlón.",
          "Prefieres botones físicos para manejar el reloj mientras entrenas.",
        ],
      },
    ],
  },
  {
    slug: "garmin-venu-3-vs-garmin-forerunner-165",
    title: "Garmin Venu 3 vs Garmin Forerunner 165",
    watchSlugs: ["garmin-venu-3", "garmin-forerunner-165"],
    seoTitle:
      "Garmin Venu 3 vs Garmin Forerunner 165: ¿Smartwatch de Salud o Reloj de Running?",
    metaDescription:
      "Comparativa entre Garmin Venu 3 y Forerunner 165: los dos con pantalla AMOLED, pero uno es un smartwatch de salud con llamadas y el otro un reloj de running ligero unos 150 € más barato.",
    summary:
      "Los dos tienen pantalla AMOLED táctil a color, altímetro barométrico, Garmin Pay y resistencia al agua de 5 ATM. El Venu 3 es un smartwatch de salud y estilo de vida: micrófono y altavoz para llamadas, sensor óptico Elevate v5, Sleep Coach, bisel de acero y hasta 14 días de batería. El Forerunner 165 es un reloj de running ligero (39 g): 5 botones físicos, potencia de carrera en la muñeca, navegación por migas de pan y un precio unos 150 € más bajo con los precios actuales de nuestras fichas.",
    winnerNotes:
      "Si el reloj es sobre todo para correr, el Forerunner 165 te da todo lo necesario por bastante menos dinero. El Venu 3 solo compensa la diferencia si vas a aprovechar lo que lo convierte en un smartwatch completo: llamadas desde la muñeca, seguimiento de salud más detallado y un diseño para llevar a diario.",
    specs: [
      {
        label: "Enfoque",
        values: ["Smartwatch de salud y estilo de vida", "Reloj de running de entrada"],
      },
      {
        label: "Pantalla",
        values: [
          "AMOLED táctil de 1,4\" (454 x 454 px), manejo principalmente táctil",
          "AMOLED táctil de 1,2\" (390 x 390 px) + 5 botones físicos",
        ],
      },
      {
        label: "Tamaños",
        values: ["Venu 3 (45 mm) y Venu 3S (41 mm)", "Único (43 mm)"],
      },
      {
        label: "Bisel",
        values: ["Acero inoxidable", "Polímero reforzado con fibra"],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 14 días", "Hasta 11 días"],
      },
      {
        label: "Batería (GPS continuo)",
        values: ["Hasta 26 h", "Hasta 19 h (solo GPS)"],
      },
      {
        label: "GPS multibanda",
        values: [
          "No — GPS, GLONASS y Galileo en una frecuencia",
          "No — GPS, GLONASS y Galileo en una frecuencia",
        ],
      },
      {
        label: "Sensor de pulso",
        values: ["Elevate v5", "Elevate v4"],
      },
      {
        label: "Llamadas y asistente de voz",
        values: ["Sí — micrófono y altavoz integrados", "No"],
      },
      {
        label: "Métricas de entreno",
        values: [
          "VO2 máx., Body Battery, VFC (HRV), beneficio del entrenamiento",
          "VO2 máx., Body Battery, estado de VFC (HRV), potencia de carrera en la muñeca, tiempo de recuperación",
        ],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "Barométrico"],
      },
      {
        label: "Navegación",
        values: ["No", "Ruta de migas de pan"],
      },
      {
        label: "Mapas",
        values: ["No", "No"],
      },
      {
        label: "Peso",
        values: ["46 g", "39 g"],
      },
      {
        label: "Música offline",
        values: ["Sí, de serie", "Solo en la versión Music"],
      },
      {
        label: "Pagos sin contacto",
        values: ["Sí (Garmin Pay)", "Sí (Garmin Pay)"],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "5 ATM"],
      },
    ],
    content: `
      <h2>Misma pantalla AMOLED, compras muy distintas</h2>
      <p>Los dos son Garmin con pantalla <strong>AMOLED táctil a color</strong> de alta resolución, colores vivos y buena lectura en exterior. También comparten <strong>altímetro barométrico</strong>, Garmin Pay, Body Battery, VO2 máx. y medición de la VFC (HRV) durante la noche. Aun así, están pensados para personas distintas.</p>
      <p>El <strong>Venu 3</strong> es un smartwatch para llevar todo el día: llamadas, salud, sueño y un diseño que pasa por reloj de vestir. El <strong>Forerunner 165</strong> es un reloj para salir a correr: ligero, con botones físicos y métricas pensadas para corredores. La pregunta clave es qué esperas del reloj: <strong>salud y día a día</strong> o <strong>correr</strong>. Si eliges el Forerunner 165, además, te ahorras unos 150 €.</p>

      <h2>Dónde destaca el Venu 3</h2>
      <ul>
        <li><strong>Micrófono y altavoz integrados:</strong> contestas llamadas desde la muñeca (con el móvil conectado por Bluetooth) y usas el asistente de voz del teléfono sin sacarlo del bolsillo. El Forerunner 165 solo muestra la notificación de la llamada.</li>
        <li><strong>Sensor óptico Elevate v5:</strong> la generación más reciente de Garmin, frente al Elevate v4 del 165. Está pensado para el seguimiento continuo de pulso y VFC a lo largo del día, que es justo en lo que se apoya un reloj de salud.</li>
        <li><strong>Sueño y descanso en primer plano:</strong> Sleep Coach, que te recomienda cuánto dormir según tu actividad, y detección de siestas, que también cuentan para recargar el Body Battery.</li>
        <li><strong>Más pantalla y más batería:</strong> 1,4" frente a 1,2", hasta 14 días en modo reloj frente a 11, y 26 h con GPS frente a 19 h.</li>
        <li><strong>Acabado y tamaños:</strong> bisel de acero inoxidable, música de serie y dos tamaños (45 mm y Venu 3S de 41 mm).</li>
      </ul>

      <h2>Dónde destaca el Forerunner 165</h2>
      <ul>
        <li><strong>Precio:</strong> con los precios de nuestras fichas cuesta unos <strong>150 € menos</strong> que el Venu 3. Es la diferencia más grande entre los dos.</li>
        <li><strong>Pensado para correr:</strong> potencia de carrera en la muñeca, tiempo de recuperación y estado de la VFC para saber cómo asimilas los entrenamientos.</li>
        <li><strong>5 botones físicos:</strong> se maneja entero sin tocar la pantalla. En series, con las manos sudadas, con guantes o bajo la lluvia es mucho más cómodo que un reloj táctil.</li>
        <li><strong>Más ligero:</strong> 39 g frente a 46 g. Se nota en carreras largas y al dormir con él.</li>
        <li><strong>Navegación por migas de pan:</strong> puedes cargar un recorrido y seguirlo en el reloj, con avisos si te sales de la ruta. El Venu 3 no tiene navegación.</li>
      </ul>

      <h2>GPS y entrenamiento</h2>
      <p>En GPS están empatados: ninguno tiene <strong>multibanda</strong>. Los dos usan GPS, GLONASS y Galileo en una sola frecuencia, suficiente en parques, carreteras y pista. Tampoco tienen Training Readiness, Training Status ni modo triatlón, que en Garmin empiezan en la gama Forerunner 265.</p>
      <p>La diferencia está en la experiencia al correr. El Venu 3 registra bien tus carreras, el gimnasio o la natación en piscina, pero está pensado para usarse con la pantalla táctil. El Forerunner 165 pone la carrera en el centro, con botones físicos, potencia en la muñeca y navegación. Si sales a correr tres o más veces por semana, el 165 es más cómodo.</p>

      <h2>Salud y día a día</h2>
      <p>Para el día a día, el Venu 3 es claramente mejor. Las llamadas y el asistente de voz lo convierten en un smartwatch completo, el sensor Elevate v5 y el Sleep Coach dan más peso a la salud, y el bisel de acero queda bien con cualquier ropa. El Forerunner 165 también recibe notificaciones, mide el sueño y permite pagar con Garmin Pay, pero su aspecto y su manejo son los de un reloj deportivo.</p>

      <h2>Precio: ¿merecen la pena los 150 € de diferencia?</h2>
      <p>Con los precios observados de nuestras fichas, el Venu 3 ronda los 344 € y el Forerunner 165 los 194 € (consulta la fila de precio de la tabla: son precios de tiendas y fechas distintas, y cambian con frecuencia). Esos 150 € pagan llamadas desde la muñeca, el sensor de pulso más reciente, más autonomía, música de serie y un acabado más premium. No pagan un mejor reloj para correr.</p>
      <p>Si estás entre el Venu 3 y un Forerunner más avanzado, mira el <a href="/comparativas/garmin-venu-3-vs-garmin-forerunner-265">Venu 3 vs Forerunner 265</a>. Si te atrae el 165 pero quieres GPS multibanda, compáralo en <a href="/comparativas/garmin-forerunner-165-vs-garmin-forerunner-265">Forerunner 165 vs Forerunner 265</a>. Y si lo que buscas por menos de 200 € es un Garmin resistente para la montaña, mira el <a href="/comparativas/garmin-venu-3-vs-garmin-instinct-2">Venu 3 vs Instinct 2</a>. Para más detalle, lee el <a href="/relojes/garmin-venu-3">análisis del Venu 3</a> y el <a href="/relojes/garmin-forerunner-165">del Forerunner 165</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-venu-3",
        heading: "Elige el Garmin Venu 3 si…",
        points: [
          "Buscas sobre todo un smartwatch para todo el día y el deporte es una parte más de tu rutina.",
          "Quieres contestar llamadas y usar el asistente de voz desde la muñeca.",
          "Te importan el sueño, el descanso y la salud general (Sleep Coach, siestas, sensor Elevate v5).",
          "Te encaja un presupuesto de unos 350 € a cambio de un acabado más elegante, música de serie y más autonomía.",
        ],
      },
      {
        watchSlug: "garmin-forerunner-165",
        heading: "Elige el Garmin Forerunner 165 si…",
        points: [
          "Quieres un reloj para correr y no vas a usar las llamadas desde la muñeca.",
          "Tu presupuesto ronda los 200 € y prefieres ahorrarte unos 150 €.",
          "Prefieres botones físicos y un reloj ligero (39 g) para entrenar.",
          "Quieres seguir rutas con migas de pan y medir la potencia de carrera sin accesorios.",
        ],
      },
    ],
  },
  {
    slug: "garmin-venu-3-vs-suunto-race-s",
    title: "Garmin Venu 3 vs Suunto Race S",
    watchSlugs: ["garmin-venu-3", "suunto-race-s"],
    seoTitle:
      "Garmin Venu 3 vs Suunto Race S: ¿Smartwatch de Salud o Reloj de Entreno con Mapas?",
    metaDescription:
      "Comparativa entre Garmin Venu 3 y Suunto Race S: dos relojes AMOLED por unos 345-350 €. Llamadas, Sleep Coach y temperatura de la piel frente a mapas offline gratuitos, corona digital y Suunto Coach.",
    summary:
      "Cuestan prácticamente lo mismo (unos 344 € el Venu 3 y 349 € el Race S con los precios de nuestras fichas) y los dos tienen pantalla AMOLED de alta resolución, bisel de acero y altímetro barométrico. El Venu 3 es un smartwatch de salud: micrófono y altavoz para llamadas, sensor óptico Elevate v5, temperatura de la piel durante el sueño, Sleep Coach y hasta 14 días de batería en modo reloj. El Suunto Race S es un reloj de entrenamiento y montaña: mapas topográficos offline gratuitos, GPS multibanda, corona digital, carga y recuperación con Suunto Coach y la caja compacta de 45 mm de la familia Race.",
    winnerNotes:
      "Con el mismo presupuesto, la elección depende de para qué quieres el reloj. Si buscas un smartwatch diario centrado en la salud y en contestar llamadas desde la muñeca, el Venu 3. Si entrenas en exterior, sales al monte y quieres mapas en ruta y un análisis más profundo de la carga de entrenamiento, el Race S.",
    specs: [
      {
        label: "Enfoque",
        values: ["Smartwatch de salud y estilo de vida", "Reloj de entrenamiento, trail y navegación"],
      },
      {
        label: "Pantalla",
        values: [
          "AMOLED táctil de 1,4\" (454 x 454 px)",
          "AMOLED táctil de 1,32\" (466 x 466 px), hasta 2000 nits",
        ],
      },
      {
        label: "Controles",
        values: ["Pantalla táctil + 3 botones", "Corona digital + botones + pantalla táctil"],
      },
      {
        label: "Tamaños",
        values: ["Venu 3 (45 mm) y Venu 3S (41 mm)", "Único (45 mm)"],
      },
      {
        label: "Bisel",
        values: ["Acero inoxidable", "Acero inoxidable"],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 14 días", "Hasta 9 días"],
      },
      {
        label: "Batería (GPS)",
        values: ["Hasta 26 h", "Hasta 30 h en máxima precisión (40 h en modo Endurance)"],
      },
      {
        label: "GPS multibanda",
        values: [
          "No — GPS, GLONASS y Galileo en una frecuencia",
          "Sí — doble frecuencia, 5 sistemas de satélites",
        ],
      },
      {
        label: "Sensor de pulso",
        values: [
          "Elevate v5 (compatible con banda de pecho)",
          "Óptico de muñeca (compatible con banda de pecho)",
        ],
      },
      {
        label: "Llamadas y asistente de voz",
        values: ["Sí — micrófono y altavoz integrados", "No"],
      },
      {
        label: "Sueño y salud",
        values: [
          "Puntuación de sueño, Sleep Coach, siestas, temperatura de la piel nocturna, Body Battery",
          "Seguimiento del sueño y VFC (HRV) nocturna",
        ],
      },
      {
        label: "Métricas de entreno",
        values: [
          "VO2 máx., Body Battery, VFC (HRV), beneficio del entrenamiento",
          "VO2 máx., VFC (HRV), carga y recuperación (Suunto Coach), guía de ascensos, más de 95 modos deportivos",
        ],
      },
      {
        label: "Multideporte / triatlón",
        values: ["No", "Sí"],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "Barométrico"],
      },
      {
        label: "Navegación",
        values: ["No", "Rutas sobre mapa + guía de ascensos (Climb Guidance)"],
      },
      {
        label: "Mapas",
        values: ["No", "Sí, topográficos offline gratuitos"],
      },
      {
        label: "Peso",
        values: ["46 g", "60 g"],
      },
      {
        label: "Música offline",
        values: ["Sí, de serie", "No (controla la música del móvil)"],
      },
      {
        label: "Pagos sin contacto",
        values: ["Sí (Garmin Pay)", "No"],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "50 m"],
      },
    ],
    content: `
      <h2>Mismo precio, dos formas de entender el reloj</h2>
      <p>Pocas comparativas están tan igualadas en precio: con los precios de nuestras fichas, el <strong>Garmin Venu 3</strong> ronda los <strong>344 €</strong> y el <strong>Suunto Race S</strong> los <strong>349 €</strong>. Los dos montan una pantalla <strong>AMOLED táctil</strong> de alta resolución y mucho brillo, bisel de acero inoxidable y <strong>altímetro barométrico</strong>. Con el presupuesto fuera de la ecuación, lo único que decide es el uso.</p>
      <p>El <strong>Venu 3</strong> es un smartwatch que pone la salud y el día a día en primer plano: llamadas, sueño, estrés y recuperación. El <strong>Race S</strong> es un reloj de entrenamiento pensado para salir al exterior: mapas, navegación y análisis de la carga. La pregunta clave es si el reloj te acompaña sobre todo <strong>en tu día a día</strong> o sobre todo <strong>cuando entrenas fuera</strong>.</p>

      <h2>Pantalla: dos AMOLED de primer nivel</h2>
      <p>Aquí están muy igualados. El Venu 3 tiene una AMOLED de <strong>1,4" (454 x 454 px)</strong> y el Race S una de <strong>1,32" (466 x 466 px)</strong> que llega a <strong>2000 nits</strong>. Las dos se leen bien a pleno sol, tienen colores vivos y admiten modo siempre encendido. La diferencia está en cómo se manejan: el Venu 3 se usa sobre todo con la pantalla táctil, como un smartwatch; el Race S añade una <strong>corona digital</strong> para moverse por los menús y hacer zoom en el mapa, muy cómoda con guantes o con los dedos sudados.</p>

      <h2>Dónde destaca el Venu 3</h2>
      <ul>
        <li><strong>Micrófono y altavoz integrados:</strong> contestas llamadas desde la muñeca (con el móvil conectado por Bluetooth) y usas el asistente de voz del teléfono sin sacarlo del bolsillo. El Race S solo muestra la notificación.</li>
        <li><strong>Sensor óptico Elevate v5:</strong> la generación más reciente de Garmin, pensada para el seguimiento continuo de pulso y VFC (HRV) a lo largo del día y la noche.</li>
        <li><strong>Temperatura de la piel:</strong> mide sus variaciones mientras duermes, un dato útil para detectar cambios por enfermedad, entrenamiento o ciclo menstrual.</li>
        <li><strong>Sueño en primer plano:</strong> puntuación de sueño, <strong>Sleep Coach</strong> (te recomienda cuánto dormir según tu actividad) y detección de siestas, que también recargan el Body Battery.</li>
        <li><strong>Más autonomía en el día a día:</strong> hasta <strong>14 días</strong> en modo reloj frente a 9 del Race S. Suma <strong>Garmin Pay</strong> y música offline de serie, dos cosas que el Suunto no tiene.</li>
      </ul>

      <h2>Dónde destaca el Suunto Race S</h2>
      <ul>
        <li><strong>Mapas topográficos offline gratuitos:</strong> descargas la zona desde la app de Suunto y en el reloj ves curvas de nivel, senderos y caminos alrededor de tu posición, sin móvil ni suscripciones. El Venu 3 no tiene mapas ni navegación.</li>
        <li><strong>Navegación y guía de ascensos:</strong> sigues rutas sobre el mapa y la <strong>guía de ascensos (Climb Guidance)</strong> te muestra el perfil de las subidas que te quedan.</li>
        <li><strong>GPS multibanda:</strong> doble frecuencia con cinco sistemas de satélites, más fiable bajo bosque cerrado, en barrancos o entre edificios altos.</li>
        <li><strong>Carga y recuperación con Suunto Coach:</strong> analiza cuánto has acumulado y cuánto necesitas recuperar, con más de 95 modos deportivos y modo triatlón.</li>
        <li><strong>Más batería con GPS:</strong> hasta <strong>30 h</strong> en máxima precisión y 40 h en modo Endurance, frente a 26 h del Venu 3.</li>
        <li><strong>Diseño compacto:</strong> es la versión de 45 mm del Suunto Race (49 mm), pensada para muñecas más pequeñas dentro de los relojes con mapas.</li>
      </ul>

      <h2>GPS y sensores</h2>
      <p>Los dos comparten <strong>altímetro barométrico</strong> para medir el desnivel con fiabilidad y ofrecen un GPS preciso en la mayoría de situaciones. En parques, carreteras o pista, el GPS de una sola frecuencia del Venu 3 (GPS, GLONASS y Galileo) cumple de sobra. En terreno difícil, la <strong>multibanda</strong> del Race S marca la diferencia: los trazados y ritmos son más fiables donde la señal rebota.</p>
      <p>En pulso, el <strong>Elevate v5</strong> del Venu 3 es uno de sus puntos fuertes. Algunas pruebas independientes han cuestionado la fiabilidad del pulsómetro de muñeca del Race S: si entrenas por zonas de frecuencia cardíaca, conviene usarlo con banda de pecho (los dos son compatibles). Más contexto en <a href="/guias/que-precision-gps-necesitas-realmente">¿Qué precisión GPS necesitas realmente?</a></p>

      <h2>Salud frente a rendimiento</h2>
      <p>El Venu 3 mide VO2 máx., Body Battery, estrés y VFC, pero trata esos datos como información de salud: cómo duermes, cómo te recuperas y cómo te encuentras. No tiene métricas de carga de entrenamiento ni modo triatlón.</p>
      <p>El Race S se centra en el entrenamiento: <strong>Suunto Coach</strong> sigue tu carga y tu recuperación para que sepas cuándo apretar y cuándo descansar, y la app Suunto se integra con las principales plataformas. A cambio, su seguimiento de salud diaria es más básico, sin Sleep Coach ni temperatura de la piel. Si quieres saber qué métricas merecen tu atención, lo explicamos en <a href="/guias/que-metricas-de-entrenamiento-importan">¿Qué métricas de entrenamiento importan?</a></p>

      <h2>Tamaño y comodidad</h2>
      <p>El Race S pesa <strong>60 g</strong> en una caja de 45 mm; el Venu 3 pesa <strong>46 g</strong> con el mismo diámetro. Para quien busca un reloj con mapas que no sea enorme, el Race S es de lo más compacto de su categoría. Si lo que buscas es simplemente el reloj más pequeño y ligero, el <strong>Venu 3S de 41 mm</strong> lo es todavía más, aunque sin mapas.</p>

      <h2>Precio y veredicto</h2>
      <p>Con unos <strong>5 € de diferencia</strong> (consulta la fila de precio de la tabla: son precios de tiendas y fechas distintas, y cambian con frecuencia), el precio no debería decidir la compra. El <strong>Venu 3</strong> es la opción para quien quiere un smartwatch de salud para todo el día con llamadas, Garmin Pay y música. El <strong>Race S</strong> es la opción para quien entrena en exterior y quiere mapas en ruta y análisis de carga. Si dudas de si los mapas te hacen falta, lee <a href="/guias/necesitas-mapas-en-tu-reloj">¿Necesitas mapas en tu reloj?</a></p>
      <p>¿Quieres más detalle? Lee el <a href="/relojes/garmin-venu-3">análisis del Venu 3</a> y el <a href="/relojes/suunto-race-s">del Suunto Race S</a>. Si te atrae el Venu 3 pero entrenas con un plan, compáralo en <a href="/comparativas/garmin-venu-3-vs-garmin-forerunner-265">Venu 3 vs Forerunner 265</a>; si te interesa el Race S, mira cómo queda frente a sus rivales en <a href="/comparativas/garmin-forerunner-265-vs-suunto-race-s">Forerunner 265 vs Suunto Race S</a> y <a href="/comparativas/coros-pace-3-vs-suunto-race-s">COROS PACE 3 vs Suunto Race S</a>. Si quieres mapas sin salir de Garmin, mira el <a href="/comparativas/garmin-venu-3-vs-garmin-forerunner-965">Venu 3 vs Forerunner 965</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-venu-3",
        heading: "Elige el Garmin Venu 3 si…",
        points: [
          "Buscas un smartwatch para todo el día y el deporte es una parte más de tu rutina.",
          "Quieres contestar llamadas y usar el asistente de voz desde la muñeca.",
          "Te importan el sueño y la salud: Sleep Coach, temperatura de la piel, Body Battery y sensor Elevate v5.",
          "Valoras los 14 días de autonomía, Garmin Pay y la música offline de serie.",
        ],
      },
      {
        watchSlug: "suunto-race-s",
        heading: "Elige el Suunto Race S si…",
        points: [
          "Entrenas en exterior, haces trail o montaña y quieres mapas topográficos offline en ruta.",
          "Quieres analizar a fondo tu carga y tu recuperación con Suunto Coach.",
          "Prefieres manejar el reloj con corona digital y necesitas GPS multibanda con hasta 30 h de autonomía.",
          "Buscas un reloj con mapas en una caja compacta de 45 mm.",
        ],
      },
    ],
  },
  {
    slug: "garmin-venu-3-vs-garmin-forerunner-965",
    title: "Garmin Venu 3 vs Garmin Forerunner 965",
    watchSlugs: ["garmin-venu-3", "garmin-forerunner-965"],
    seoTitle:
      "Garmin Venu 3 vs Garmin Forerunner 965: ¿Smartwatch de Salud o Buque Insignia de Running?",
    metaDescription:
      "Comparativa entre Garmin Venu 3 y Forerunner 965: AMOLED de 1,4\" en ambos, pero llamadas, ECG y salud por unos 344 € frente a mapas, GPS multibanda y métricas avanzadas por unos 599 €.",
    summary:
      "Los dos tienen pantalla AMOLED táctil de 1,4\" (454 x 454 px), altímetro barométrico, Body Battery, VFC (HRV), música offline y Garmin Pay. El Venu 3 (unos 344 €) es un smartwatch de salud: micrófono y altavoz para llamadas, sensor Elevate v5 con app ECG, temperatura de la piel durante el sueño, Sleep Coach, detección de siestas y bisel de acero. El Forerunner 965 (unos 599 €) es el buque insignia de running y triatlón de Garmin: mapas topográficos offline con 32 GB, GPS multibanda con SatIQ, Training Readiness, estado de VFC, Stamina en tiempo real, ratio de carga, dinámica de carrera en la muñeca, 5 botones, bisel de titanio y hasta 23 días de batería.",
    winnerNotes:
      "Si lo que buscas es un smartwatch completo para el día a día, con llamadas y seguimiento integral de la salud, el Venu 3 cubre todo eso y te ahorras más de 250 € con los precios actuales de nuestras fichas. El Forerunner 965 solo compensa si vas a usar lo que lo define: mapas en ruta, GPS de máxima precisión para carrera, trail o triatlón y un análisis de rendimiento muy detallado.",
    specs: [
      {
        label: "Enfoque",
        values: ["Smartwatch de salud y estilo de vida", "Reloj de running, trail y triatlón de gama alta"],
      },
      {
        label: "Pantalla",
        values: ["AMOLED táctil de 1,4\" (454 x 454 px)", "AMOLED táctil de 1,4\" (454 x 454 px)"],
      },
      {
        label: "Controles",
        values: ["Pantalla táctil + 3 botones", "Pantalla táctil + 5 botones"],
      },
      {
        label: "Tamaños",
        values: ["Venu 3 (45 mm) y Venu 3S (41 mm)", "Único (47 mm)"],
      },
      {
        label: "Bisel",
        values: ["Acero inoxidable", "Titanio"],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 14 días", "Hasta 23 días"],
      },
      {
        label: "Batería (GPS)",
        values: ["Hasta 26 h", "Hasta 31 h (19 h en multibanda con todos los sistemas)"],
      },
      {
        label: "GPS multibanda",
        values: [
          "No — GPS, GLONASS y Galileo en una frecuencia",
          "Sí — doble frecuencia con SatIQ",
        ],
      },
      {
        label: "Sensor de pulso",
        values: ["Elevate v5 (compatible con banda de pecho)", "Elevate v4 (compatible con banda de pecho)"],
      },
      {
        label: "ECG",
        values: ["Sí (app Garmin ECG)", "No"],
      },
      {
        label: "Llamadas y asistente de voz",
        values: ["Sí — micrófono y altavoz integrados", "No"],
      },
      {
        label: "Sueño y salud",
        values: [
          "Puntuación de sueño, Sleep Coach, siestas, temperatura de la piel nocturna, Body Battery",
          "Puntuación de sueño, estado de VFC (HRV) nocturno, Body Battery",
        ],
      },
      {
        label: "Métricas de entreno",
        values: [
          "VO2 máx., Body Battery, VFC (HRV), beneficio del entrenamiento",
          "Training Readiness, estado y carga de entrenamiento, ratio de carga, Stamina en tiempo real, dinámica de carrera y potencia en la muñeca, predicción de tiempos",
        ],
      },
      {
        label: "Multideporte / triatlón",
        values: ["No", "Sí (triatlón, duatlón, brick)"],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "Barométrico"],
      },
      {
        label: "Navegación",
        values: ["No", "Rutas sobre mapa con indicaciones giro a giro + ClimbPro"],
      },
      {
        label: "Mapas",
        values: ["No", "Sí, topográficos offline a color"],
      },
      {
        label: "Almacenamiento",
        values: ["8 GB", "32 GB"],
      },
      {
        label: "Peso",
        values: ["46 g", "53 g"],
      },
      {
        label: "Música offline",
        values: ["Sí, de serie", "Sí, de serie"],
      },
      {
        label: "Pagos sin contacto",
        values: ["Sí (Garmin Pay)", "Sí (Garmin Pay)"],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "5 ATM"],
      },
    ],
    content: `
      <h2>Misma pantalla, más de 250 € de diferencia</h2>
      <p>Sobre el papel se parecen más de lo que sugiere el precio: los dos son Garmin con pantalla <strong>AMOLED táctil de 1,4" (454 x 454 px)</strong>, altímetro barométrico, Body Battery, VFC (HRV), música offline y Garmin Pay. Pero están en extremos opuestos del catálogo. El <strong>Venu 3</strong> (unos <strong>344 €</strong>) es un smartwatch centrado en la salud y el día a día; el <strong>Forerunner 965</strong> (unos <strong>599 €</strong>) es el buque insignia de Garmin para running y triatlón.</p>
      <p>La pregunta que decide la compra no es cuál es "mejor", sino si vas a usar lo que cuesta la diferencia: <strong>mapas, GPS multibanda y métricas de rendimiento</strong>. Si no, el Venu 3 te da más para tu día a día por bastante menos.</p>

      <h2>Pantalla y construcción</h2>
      <p>La pantalla es idéntica en tamaño y resolución, así que la diferencia está en el resto del reloj. El <strong>Venu 3</strong> lleva bisel de <strong>acero inoxidable</strong> y <strong>3 botones</strong>, con un manejo pensado sobre todo para la pantalla táctil; viene en dos tamaños (45 mm y Venu 3S de 41 mm) y pesa 46 g. El <strong>Forerunner 965</strong> lleva bisel de <strong>titanio</strong> y los <strong>5 botones</strong> clásicos de la serie Forerunner, con los que se maneja entero sin tocar la pantalla: más cómodo con guantes, con las manos sudadas o al marcar vueltas en series. Tiene una sola caja de 47 mm y pesa 53 g.</p>

      <h2>Dónde destaca el Venu 3</h2>
      <ul>
        <li><strong>Micrófono y altavoz integrados:</strong> contestas llamadas desde la muñeca (con el móvil conectado por Bluetooth) y usas el asistente de voz del teléfono. El Forerunner 965 solo muestra la notificación.</li>
        <li><strong>Sensor Elevate v5 con ECG:</strong> la app Garmin ECG registra un electrocardiograma de 30 segundos y busca signos de fibrilación auricular. El 965 no tiene ECG.</li>
        <li><strong>Temperatura de la piel durante el sueño:</strong> sigue sus variaciones noche a noche, útil para detectar cambios por enfermedad, carga de entrenamiento o ciclo menstrual.</li>
        <li><strong>Sueño en primer plano:</strong> Sleep Coach, que te recomienda cuánto dormir según tu actividad, y detección de siestas, que también recargan el Body Battery.</li>
        <li><strong>Precio:</strong> con los precios de nuestras fichas cuesta <strong>más de 250 € menos</strong> que el 965.</li>
      </ul>

      <h2>Dónde destaca el Forerunner 965</h2>
      <ul>
        <li><strong>Mapas topográficos offline a color:</strong> curvas de nivel, senderos y calles en el reloj sin depender del móvil, con rutas e <strong>indicaciones giro a giro</strong> y 32 GB de almacenamiento para mapas y música. El Venu 3 no tiene mapas ni navegación.</li>
        <li><strong>GPS multibanda con SatIQ:</strong> doble frecuencia que se activa automáticamente cuando la señal lo necesita. En ciudad con edificios altos, bosque cerrado o montaña, el ritmo y la distancia son más fiables que con el GPS de una frecuencia del Venu 3.</li>
        <li><strong>Métricas de rendimiento avanzadas:</strong> Training Readiness, estado de VFC (HRV Status), estado y carga de entrenamiento, <strong>ratio de carga</strong> (aguda frente a crónica), <strong>Stamina en tiempo real</strong>, predicción de tiempos y <strong>dinámica de carrera desde la muñeca</strong> sin banda ni pod.</li>
        <li><strong>Triatlón y multideporte:</strong> perfiles de triatlón, duatlón y brick con transiciones. El Venu 3 no tiene modo multideporte.</li>
        <li><strong>Autonomía:</strong> hasta <strong>23 días</strong> en modo reloj y <strong>31 h</strong> con GPS (19 h en multibanda con todos los sistemas), frente a 14 días y 26 h del Venu 3.</li>
      </ul>

      <h2>GPS y navegación</h2>
      <p>Para salir a correr por parques, carreteras o pista, el GPS del Venu 3 (GPS, GLONASS y Galileo en una frecuencia) es suficiente. La diferencia aparece en terreno difícil y lejos de casa: el <strong>GPS multibanda</strong> del 965 mantiene trazados y ritmos fiables donde la señal rebota, y sus <strong>mapas</strong> te dejan ver qué camino es cuál en un cruce de senderos, recalcular si te desvías y ver el perfil de las subidas con <strong>ClimbPro</strong> incluso sin ruta cargada. Si dudas de si los necesitas, lee <a href="/guias/necesitas-mapas-en-tu-reloj">¿Necesitas mapas en tu reloj?</a> y <a href="/guias/que-precision-gps-necesitas-realmente">¿Qué precisión GPS necesitas realmente?</a></p>

      <h2>Salud frente a rendimiento</h2>
      <p>Los dos miden Body Battery, estrés, VO2 máx. y VFC nocturna, así que en lo básico están igualados. El <strong>Venu 3</strong> va más allá en salud: ECG, temperatura de la piel, Sleep Coach y siestas, además de las llamadas que lo convierten en un smartwatch completo. El <strong>Forerunner 965</strong> usa esos mismos datos para dosificar el entrenamiento: te dice si hoy toca apretar o recuperar (Training Readiness), si estás acumulando carga demasiado rápido (ratio de carga) y cuánta energía te queda en plena carrera (Stamina). Más contexto en <a href="/guias/que-metricas-de-entrenamiento-importan">¿Qué métricas de entrenamiento importan?</a></p>

      <h2>Precio: ¿merece la pena el salto?</h2>
      <p>Con los precios de nuestras fichas, el Venu 3 ronda los <strong>344 €</strong> (PVPR de 429,99 €) y el Forerunner 965 los <strong>599 €</strong> (PVPR de 649,99 €): <strong>unos 255 € de diferencia</strong> en tienda (consulta la fila de precio de la tabla: son precios de tiendas y fechas distintas, y cambian con frecuencia). Esa diferencia paga mapas, GPS multibanda, triatlón, métricas avanzadas y más batería. No paga llamadas, ECG ni un mejor seguimiento de la salud: ahí gana el Venu 3. Si te lo planteas en general, lo analizamos en <a href="/guias/merece-la-pena-pagar-mas-por-un-reloj-deportivo">¿Merece la pena pagar más por un reloj deportivo?</a></p>
      <p>Hay términos medios: si quieres las métricas de entrenamiento de Garmin sin pagar los mapas, mira el <a href="/comparativas/garmin-venu-3-vs-garmin-forerunner-265">Venu 3 vs Forerunner 265</a>; si quieres mapas por mucho menos, el <a href="/comparativas/garmin-venu-3-vs-suunto-race-s">Venu 3 vs Suunto Race S</a>; y para ver qué añade el 965 frente al 265, el <a href="/comparativas/garmin-forerunner-965-vs-garmin-forerunner-265">Forerunner 965 vs Forerunner 265</a>. Si vas a hacer triatlón, revisa también <a href="/guias/mejores-relojes-gps-triatlon-multideporte">los mejores relojes GPS para triatlón</a>. Para más detalle, lee el <a href="/relojes/garmin-venu-3">análisis del Venu 3</a> y el <a href="/relojes/garmin-forerunner-965">del Forerunner 965</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-venu-3",
        heading: "Elige el Garmin Venu 3 si…",
        points: [
          "Buscas un smartwatch completo para todo el día y el deporte es una parte más de tu rutina.",
          "Quieres contestar llamadas y usar el asistente de voz desde la muñeca.",
          "Te importa la salud integral: ECG, temperatura de la piel, Sleep Coach y detección de siestas.",
          "Prefieres ahorrarte más de 250 € porque no vas a usar mapas, multibanda ni métricas avanzadas.",
        ],
      },
      {
        watchSlug: "garmin-forerunner-965",
        heading: "Elige el Garmin Forerunner 965 si…",
        points: [
          "Necesitas mapas topográficos en ruta para trail, montaña o recorridos que no conoces.",
          "Corres en ciudad densa, bosque o montaña y quieres la precisión del GPS multibanda con SatIQ.",
          "Haces triatlón o preparas carreras y quieres Training Readiness, ratio de carga, Stamina y dinámica de carrera.",
          "Valoras la máxima autonomía: hasta 23 días en modo reloj y 31 h con GPS.",
        ],
      },
    ],
  },
  {
    slug: "garmin-venu-3-vs-garmin-instinct-2",
    title: "Garmin Venu 3 vs Garmin Instinct 2",
    watchSlugs: ["garmin-venu-3", "garmin-instinct-2"],
    seoTitle:
      "Garmin Venu 3 vs Garmin Instinct 2: ¿Smartwatch AMOLED o Reloj Rudo de Montaña?",
    metaDescription:
      "Comparativa entre Garmin Venu 3 e Instinct 2: AMOLED táctil, llamadas y ECG por unos 344 € frente a pantalla MIP, resistencia militar, 10 ATM y 28 días de batería por unos 189 €.",
    summary:
      "Son dos Garmin con filosofías opuestas. El Venu 3 (unos 344 €) es un smartwatch de estilo de vida: pantalla AMOLED táctil a color de 1,4\", bisel de acero, micrófono y altavoz para llamadas, sensor Elevate v5 con app ECG, temperatura de la piel durante el sueño y Sleep Coach. El Instinct 2 (unos 189 €) es un reloj rudo para exterior: pantalla MIP monocroma de alto contraste sin táctil, 5 botones físicos, construcción MIL-STD-810, sumergible a 100 m (10 ATM), hasta 28 días de batería, migas de pan con TracBack y métricas como estado de VFC, tiempo de recuperación y carga de entrenamiento. Los dos comparten altímetro barométrico y GPS de una frecuencia.",
    winnerNotes:
      "Si buscas un reloj elegante para el día a día, con llamadas, pantalla a color y un seguimiento de salud completo, el Venu 3. Si vas a la montaña, quieres un reloj que aguante golpes y agua, que dure casi un mes sin cargar y que se maneje con botones, el Instinct 2 lo hace mejor y cuesta unos 155 € menos con los precios de nuestras fichas.",
    specs: [
      {
        label: "Enfoque",
        values: ["Smartwatch de salud y estilo de vida", "Reloj rudo de exterior y montaña"],
      },
      {
        label: "Pantalla",
        values: [
          "AMOLED táctil a color de 1,4\" (454 x 454 px)",
          "MIP transflectiva monocroma de 0,9\" (dos ventanas, alto contraste), no táctil",
        ],
      },
      {
        label: "Controles",
        values: ["Pantalla táctil + 3 botones", "5 botones físicos"],
      },
      {
        label: "Tamaños",
        values: ["Venu 3 (45 mm) y Venu 3S (41 mm)", "Instinct 2 (45 mm) e Instinct 2S (40 mm)"],
      },
      {
        label: "Construcción",
        values: [
          "Bisel de acero inoxidable",
          "Polímero reforzado con fibra, estándar militar MIL-STD-810",
        ],
      },
      {
        label: "Resistencia al agua",
        values: ["5 ATM", "10 ATM (100 m)"],
      },
      {
        label: "Batería (modo reloj)",
        values: ["Hasta 14 días", "Hasta 28 días"],
      },
      {
        label: "Batería (GPS)",
        values: ["Hasta 26 h", "Hasta 30 h (hasta 70 h en modo de máxima duración)"],
      },
      {
        label: "GPS multibanda",
        values: [
          "No — GPS, GLONASS y Galileo en una frecuencia",
          "No — GPS, GLONASS y Galileo en una frecuencia",
        ],
      },
      {
        label: "Sensor de pulso",
        values: [
          "Elevate v5 (compatible con banda de pecho)",
          "Óptico de muñeca (compatible con banda de pecho)",
        ],
      },
      {
        label: "ECG",
        values: ["Sí (app Garmin ECG)", "No"],
      },
      {
        label: "Llamadas y asistente de voz",
        values: ["Sí — micrófono y altavoz integrados", "No"],
      },
      {
        label: "Sueño y salud",
        values: [
          "Puntuación de sueño, Sleep Coach, siestas, temperatura de la piel nocturna, Body Battery",
          "Sueño, estrés, pulsioximetría (SpO2), Body Battery",
        ],
      },
      {
        label: "Métricas de entreno",
        values: [
          "VO2 máx., Body Battery, VFC (HRV), beneficio del entrenamiento",
          "Estado de VFC (HRV), tiempo de recuperación, carga de entrenamiento, perfiles multideporte",
        ],
      },
      {
        label: "Altímetro",
        values: ["Barométrico", "Barométrico"],
      },
      {
        label: "Navegación",
        values: ["No", "Ruta de migas de pan y TracBack"],
      },
      {
        label: "Mapas",
        values: ["No", "No"],
      },
      {
        label: "Peso",
        values: ["46 g", "52 g"],
      },
      {
        label: "Música offline",
        values: ["Sí, de serie", "No (controla la música del móvil)"],
      },
      {
        label: "Pagos sin contacto",
        values: ["Sí (Garmin Pay)", "Solo en las versiones Solar"],
      },
    ],
    content: `
      <h2>Dos Garmin en extremos opuestos</h2>
      <p>Es difícil encontrar dos relojes de la misma marca más distintos. El <strong>Venu 3</strong> (unos <strong>344 €</strong>) es un smartwatch pensado para la ciudad, la oficina y el día a día: pantalla a color, llamadas y un seguimiento de la salud muy completo. El <strong>Instinct 2</strong> (unos <strong>189 €</strong>) es un reloj rudo pensado para el exterior: aguanta golpes y agua, dura casi un mes sin cargar y se maneja entero con botones. Por debajo de 200 €, es de los relojes con más autonomía del catálogo.</p>
      <p>La pregunta clave es <strong>dónde vas a llevarlo</strong>: si el reloj vive sobre todo en tu muñeca de diario y quieres que haga de smartwatch, Venu 3; si lo vas a llevar al monte, al agua o a entornos exigentes y prefieres no pensar en la batería, Instinct 2.</p>

      <h2>Pantalla y diseño: AMOLED frente a MIP</h2>
      <p>El <strong>Venu 3</strong> tiene una pantalla <strong>AMOLED táctil a color de 1,4" (454 x 454 px)</strong>, con colores vivos y mucho detalle, rodeada por un bisel de acero inoxidable y con <strong>3 botones</strong>. Es un reloj que pasa por reloj de vestir. A cambio, una AMOLED consume más batería y, aunque se lee bien al sol, es más delicada ante los golpes.</p>
      <p>El <strong>Instinct 2</strong> usa una pantalla <strong>MIP monocroma transflectiva</strong> de 0,9" con diseño de dos ventanas: refleja la luz ambiente, así que cuanto más sol, mejor se lee, y apenas gasta batería. <strong>No es táctil</strong>: se maneja con <strong>5 botones físicos</strong>, que funcionan igual con guantes, con lluvia o con las manos mojadas. Su caja es de polímero reforzado, con una estética táctica que no busca pasar desapercibida. Si dudas entre las dos tecnologías, lo explicamos en <a href="/guias/amoled-vs-mip">AMOLED vs MIP</a>.</p>

      <h2>Dónde destaca el Venu 3</h2>
      <ul>
        <li><strong>Micrófono y altavoz integrados:</strong> contestas llamadas desde la muñeca (con el móvil conectado por Bluetooth) y usas el asistente de voz del teléfono. El Instinct 2 solo muestra la notificación.</li>
        <li><strong>Sensor Elevate v5 con ECG:</strong> la app Garmin ECG registra un electrocardiograma de 30 segundos y busca signos de fibrilación auricular. El Instinct 2 no tiene ECG.</li>
        <li><strong>Temperatura de la piel y Sleep Coach:</strong> sigue los cambios de temperatura mientras duermes, te recomienda cuánto dormir y detecta las siestas.</li>
        <li><strong>Smartwatch completo:</strong> pantalla a color táctil, música offline de serie y Garmin Pay. El Instinct 2 estándar no guarda música ni permite pagar (Garmin Pay solo está en las versiones Solar).</li>
        <li><strong>Estética urbana:</strong> bisel de acero y dos tamaños (45 mm y Venu 3S de 41 mm) para llevarlo con cualquier ropa.</li>
      </ul>

      <h2>Dónde destaca el Instinct 2</h2>
      <ul>
        <li><strong>Construcción MIL-STD-810:</strong> probado bajo el estándar militar estadounidense contra golpes, temperaturas extremas y agua, y <strong>sumergible a 100 m (10 ATM)</strong>, el doble que el Venu 3.</li>
        <li><strong>Autonomía de casi un mes:</strong> hasta <strong>28 días</strong> en modo reloj frente a 14 del Venu 3, y <strong>30 h</strong> con GPS (hasta 70 h en el modo de máxima duración) frente a 26 h.</li>
        <li><strong>Navegación básica con TracBack:</strong> sigue un trayecto cargado como ruta de migas de pan y te guía de vuelta al punto de partida por el mismo camino. El Venu 3 no tiene navegación.</li>
        <li><strong>Métricas de entrenamiento:</strong> estado de VFC (HRV Status), tiempo de recuperación y carga de entrenamiento, además de perfiles multideporte.</li>
        <li><strong>Precio:</strong> con los precios de nuestras fichas cuesta <strong>unos 155 € menos</strong> que el Venu 3.</li>
      </ul>

      <h2>GPS, navegación y montaña</h2>
      <p>En GPS están igualados: ninguno tiene <strong>multibanda</strong>. Los dos usan GPS, GLONASS y Galileo en una sola frecuencia, suficiente en terreno abierto y algo menos fiable en cañones, bosque cerrado o entre edificios altos. Los dos tienen <strong>altímetro barométrico</strong> para medir el desnivel con precisión.</p>
      <p>La diferencia en montaña está en todo lo demás. El Instinct 2 añade migas de pan y <strong>TracBack</strong>, una batería que aguanta travesías de varios días y una caja que no teme a las caídas. Ninguno tiene mapas: si los necesitas, mira el <a href="/comparativas/garmin-venu-3-vs-suunto-race-s">Venu 3 vs Suunto Race S</a> o el <a href="/comparativas/garmin-instinct-2-vs-suunto-race-s">Instinct 2 vs Suunto Race S</a>, o lee <a href="/guias/necesitas-mapas-en-tu-reloj">¿Necesitas mapas en tu reloj?</a> Para más opciones de montaña, consulta <a href="/guias/mejores-relojes-gps-trail-montana">los mejores relojes GPS para trail y montaña</a>.</p>

      <h2>Salud frente a resistencia</h2>
      <p>Los dos miden sueño, estrés y Body Battery dentro de Garmin Connect. El <strong>Venu 3</strong> va bastante más allá en la salud en reposo: ECG, temperatura de la piel, Sleep Coach y siestas, con un sensor de pulso más reciente. El <strong>Instinct 2</strong> se centra en lo útil para entrenar y salir al exterior: estado de VFC, tiempo de recuperación, carga de entrenamiento y pulsioximetría, que ayuda a vigilar la aclimatación en altura. Más contexto en <a href="/guias/que-metricas-de-entrenamiento-importan">¿Qué métricas de entrenamiento importan?</a></p>

      <h2>Precio: ¿qué pagas con los 155 € de diferencia?</h2>
      <p>Con los precios de nuestras fichas, el Venu 3 ronda los <strong>344 €</strong> (PVPR de 429,99 €) y el Instinct 2 los <strong>189 €</strong> (PVPR de 299,99 €), así que hay <strong>unos 155 € de diferencia</strong> (consulta la fila de precio de la tabla: son precios de tiendas y fechas distintas, y cambian con frecuencia). Esa diferencia paga la pantalla AMOLED, las llamadas, el ECG, la música y Garmin Pay. No paga más resistencia ni más autonomía: ahí gana el Instinct 2. Si tu presupuesto ronda los 200 €, revisa también <a href="/guias/mejores-relojes-gps-menos-200-euros">los mejores relojes GPS por menos de 200 €</a>.</p>
      <p>Si te atrae el Instinct 2 pero quieres pantalla a color y GPS multibanda, compáralo en <a href="/comparativas/garmin-instinct-2-vs-coros-pace-3">Instinct 2 vs COROS PACE 3</a>. Si buscas un Garmin AMOLED más barato que el Venu 3, mira el <a href="/comparativas/garmin-venu-3-vs-garmin-forerunner-165">Venu 3 vs Forerunner 165</a>. Para más detalle, lee el <a href="/relojes/garmin-venu-3">análisis del Venu 3</a> y el <a href="/relojes/garmin-instinct-2">del Instinct 2</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-venu-3",
        heading: "Elige el Garmin Venu 3 si…",
        points: [
          "Buscas un reloj elegante para el día a día que también sirva para hacer deporte.",
          "Quieres contestar llamadas y usar el asistente de voz desde la muñeca.",
          "Prefieres una pantalla AMOLED táctil a color, música offline y Garmin Pay.",
          "Te importa la salud en reposo: ECG, temperatura de la piel, Sleep Coach y siestas.",
        ],
      },
      {
        watchSlug: "garmin-instinct-2",
        heading: "Elige el Garmin Instinct 2 si…",
        points: [
          "Vas a la montaña o a entornos exigentes y quieres resistencia militar (MIL-STD-810) y 10 ATM.",
          "Quieres casi un mes de autonomía (hasta 28 días) y olvidarte del cargador en travesías.",
          "Prefieres manejar el reloj con 5 botones físicos, también con guantes o lluvia.",
          "Quieres ahorrarte unos 155 € y te basta con migas de pan y TracBack para orientarte.",
        ],
      },
    ],
  },
  {
    slug: "garmin-forerunner-965-vs-suunto-race-s",
    title: "Garmin Forerunner 965 vs Suunto Race S",
    watchSlugs: ["garmin-forerunner-965", "suunto-race-s"],
    seoTitle: "Garmin Forerunner 965 vs Suunto Race S: ¿Merece la pena pagar más?",
    metaDescription:
      "¿Forerunner 965 o Suunto Race S para trail o maratón? Comparamos mapas offline, GPS multibanda, autonomía, peso y precio para ver si compensa pagar más.",
    summary:
      "Los dos son relojes AMOLED con mapas topográficos offline, GPS multibanda, altímetro barométrico y 32 GB de almacenamiento. El Forerunner 965 añade navegación con indicaciones giro a giro, ClimbPro sin trayecto, las métricas de rendimiento de Garmin, 23 días de autonomía como reloj, música, Garmin Pay y bisel de titanio; el Suunto Race S ofrece lo esencial —mapas gratuitos, pantalla de hasta 2000 nits y hasta 40 h de GPS en modo Endurance— en una caja más compacta y por unos 250 € menos.",
    winnerNotes:
      "Si vas a exprimir las métricas de Garmin, la música y los mapas con indicaciones giro a giro, el Forerunner 965 justifica su precio. Si lo que buscas son mapas en la muñeca para trail y montaña al menor coste, el Race S cubre lo importante por unos 250 € menos.",
    // Datos de las fichas y de las comparativas del 965 y del Race S. El
    // almacenamiento del Race S (32 GB, unos 28 GB libres para mapas) y que
    // sus mapas no sean enrutables ni tengan nombres de calles salen del
    // análisis de DC Rainmaker que ya figura en su ficha (specsSource).
    specs: [
      {
        label: "Pantalla",
        values: [
          "AMOLED táctil de 1,4\" (454 × 454 px)",
          "AMOLED táctil de 1,32\" (466 × 466 px), hasta 2000 nits",
        ],
      },
      { label: "Tamaño de caja", values: ["47 mm (tamaño único)", "45 mm (tamaño único)"] },
      { label: "Bisel", values: ["Titanio", "Acero inoxidable"] },
      { label: "Peso", values: ["53 g", "60 g"] },
      {
        label: "Controles",
        values: ["Pantalla táctil + 5 botones", "Corona digital + botones + pantalla táctil"],
      },
      {
        label: "Mapas",
        values: [
          "Sí — topográficos offline a color, campos de golf y pistas de esquí",
          "Sí — topográficos offline gratuitos, sin nombres de calles ni puntos de interés",
        ],
      },
      {
        label: "Navegación",
        values: [
          "Rutas sobre mapa con indicaciones giro a giro + ClimbPro (también sin trayecto)",
          "Rutas sobre mapa (planificadas en la app) + guía de ascensos (Climb Guidance)",
        ],
      },
      {
        label: "Almacenamiento",
        values: ["32 GB (mapas y música)", "32 GB (unos 28 GB libres para mapas)"],
      },
      {
        label: "GPS multibanda",
        values: [
          "Sí — doble frecuencia con SatIQ",
          "Sí — doble frecuencia, 5 sistemas de satélites",
        ],
      },
      { label: "Batería (modo reloj)", values: ["Hasta 23 días", "Hasta 9 días"] },
      {
        label: "Batería (GPS)",
        values: [
          "Hasta 31 h (19 h en multibanda con todos los sistemas)",
          "Hasta 30 h en máxima precisión (40 h en modo Endurance)",
        ],
      },
      {
        label: "Sensor de pulso",
        values: [
          "Elevate v4 (compatible con banda de pecho)",
          "Óptico de muñeca (compatible con banda de pecho)",
        ],
      },
      { label: "Altímetro", values: ["Barométrico", "Barométrico"] },
      {
        label: "Métricas de entreno",
        values: [
          "Training Readiness, estado y carga de entrenamiento, Stamina en tiempo real, dinámica de carrera y potencia en la muñeca, predicción de tiempos",
          "VO2 máx., VFC (HRV), carga y recuperación (Suunto Coach), guía de ascensos, más de 95 modos deportivos",
        ],
      },
      {
        label: "Multideporte / triatlón",
        values: ["Sí (triatlón, duatlón, brick)", "Sí"],
      },
      { label: "Música offline", values: ["Sí, de serie", "No (controla la música del móvil)"] },
      { label: "Pagos sin contacto", values: ["Sí (Garmin Pay)", "No"] },
      { label: "Resistencia al agua", values: ["5 ATM", "50 m"] },
    ],
    content: `
      <h2>Mapas offline: los dos los tienen, pero no hacen lo mismo</h2>
      <p>Es la gran pregunta de este duelo y la respuesta sorprende: los dos llevan <strong>mapas topográficos offline</strong> y los dos tienen <strong>32 GB de almacenamiento</strong>. La diferencia no está en la capacidad, sino en lo que hace cada mapa.</p>
      <p>El <strong>Forerunner 965</strong> trae <strong>mapas topográficos a color</strong> con campos de golf y pistas de esquí, y los usa para navegar: sigue <strong>rutas sobre el mapa con indicaciones giro a giro</strong> y activa <strong>ClimbPro</strong> (el perfil de las subidas que te quedan) incluso sin haber cargado un trayecto. Sus 32 GB se reparten entre mapas y música.</p>
      <p>El <strong>Suunto Race S</strong> incluye <strong>mapas topográficos offline gratuitos</strong> que descargas por zonas, por Wi-Fi, desde la app de Suunto, con unos 28 GB libres para ellos. Son mapas más sencillos: muestran el terreno, los senderos y los caminos, pero <strong>no tienen nombres de calles ni puntos de interés</strong> y <strong>no son enrutables</strong>, así que sigues rutas que hayas planificado antes en la app. Suma la <strong>guía de ascensos (Climb Guidance)</strong> para dosificar las subidas.</p>
      <p>En la práctica, para seguir un track de trail o saber qué sendero tomar en un cruce, los dos cumplen. El 965 marca la diferencia si quieres indicaciones giro a giro y un mapa que también te sirva en ciudad. Si dudas de si necesitas mapas, lee <a href="/guias/necesitas-mapas-en-tu-reloj">¿Necesitas mapas en tu reloj?</a></p>

      <h2>Tamaño, peso y pantalla: 47 mm frente a 45 mm</h2>
      <p>El <strong>Forerunner 965</strong> es el grande: caja de <strong>47 mm</strong> con pantalla <strong>AMOLED de 1,4"</strong> (454 × 454 px), muy cómoda para leer un mapa en marcha. Aun así pesa menos, <strong>53 g</strong>, gracias a su <strong>bisel de titanio</strong>.</p>
      <p>El <strong>Suunto Race S</strong> tiene caja de <strong>45 mm</strong> y una AMOLED de <strong>1,32"</strong> (466 × 466 px) que llega a los <strong>2000 nits</strong>: algo más pequeña, pero con más densidad de píxeles y muy legible a pleno sol. Su bisel es de acero inoxidable y pesa <strong>60 g</strong>, así que, curiosamente, el reloj más pequeño es el más pesado.</p>
      <p>También se manejan distinto. El Garmin combina pantalla táctil con <strong>cinco botones</strong>: todo se controla a ciegas en carrera, algo que se agradece al marcar vueltas en series. El Suunto añade una <strong>corona digital</strong>, muy práctica para hacer zoom en el mapa con guantes o con los dedos sudados.</p>

      <h2>Para maratón: GPS, autonomía y métricas</h2>
      <p>Los dos tienen <strong>GPS multibanda real (doble frecuencia)</strong>. El Garmin usa <strong>SatIQ</strong>, que activa la multibanda solo cuando la señal lo necesita para ahorrar batería; el Suunto ofrece doble frecuencia con <strong>cinco sistemas de satélites</strong> y deja en tus manos elegir entre precisión y autonomía con sus modos de batería. En ritmo y distancia, los dos son muy fiables.</p>
      <p>En autonomía con GPS están casi empatados: hasta <strong>31 h</strong> el Forerunner 965 (19 h en multibanda con todos los sistemas) y hasta <strong>30 h</strong> el Race S en máxima precisión (<strong>40 h</strong> en modo Endurance). Para un maratón, cualquiera va sobrado. Como reloj del día a día, la diferencia es enorme: <strong>23 días</strong> frente a <strong>9</strong>.</p>
      <p>Donde el Garmin se separa es en las <strong>métricas de rendimiento</strong>: Training Readiness, estado y carga de entrenamiento, <strong>Stamina en tiempo real</strong> (cuánta energía te queda durante la carrera), dinámica de carrera, potencia en la muñeca y predicción de tiempos, además del estado de VFC nocturno y Body Battery. El Race S mide VO2 máx. y <strong>VFC</strong> y analiza la carga y la recuperación con <strong>Suunto Coach</strong>: cubre lo esencial, pero con menos detalle. Algunas pruebas independientes han cuestionado la fiabilidad de su pulsómetro de muñeca; si entrenas por zonas, úsalo con banda de pecho (los dos son compatibles). Más contexto en <a href="/guias/que-metricas-de-entrenamiento-importan">¿Qué métricas de entrenamiento importan?</a></p>

      <h2>Para trail y montaña</h2>
      <p>Aquí el duelo está más reñido. Los dos tienen <strong>altímetro barométrico</strong>, mapas y una ayuda para dosificar las subidas: <strong>ClimbPro</strong> en el Garmin (que funciona también sin trayecto cargado) y <strong>Climb Guidance</strong> en el Suunto. Para ultras largos, el modo Endurance del Race S, con hasta <strong>40 h</strong> de GPS, da más margen; el 965 responde con mapas más completos y 31 h de GPS. Si quieres ver más opciones, las comparamos en <a href="/guias/mejores-relojes-gps-trail-montana">los mejores relojes GPS para trail y montaña con mapas</a>.</p>

      <h2>Precio: ¿merece la pena pagar 250 € más?</h2>
      <p>Con los precios de referencia de nuestras fichas, el <strong>Forerunner 965</strong> se ve habitualmente en torno a <strong>599 €</strong> (PVPR de 649,99 €) y el <strong>Suunto Race S</strong> cuesta <strong>349 €</strong>: unos <strong>250 € de diferencia</strong>.</p>
      <ul>
        <li><strong>Por qué pagar más por el Forerunner 965:</strong> mapas con indicaciones giro a giro y ClimbPro sin trayecto, las métricas de rendimiento más completas de Garmin, 23 días de autonomía como reloj, música offline, Garmin Pay, bisel de titanio y menos peso.</li>
        <li><strong>Por qué ahorrar con el Suunto Race S:</strong> mapas topográficos offline gratuitos, GPS multibanda, una pantalla de 2000 nits, una caja más compacta y hasta 40 h de GPS en modo Endurance, por unos 250 € menos.</li>
      </ul>
      <p>Si vas a exprimir las métricas, preparas un maratón con un plan estructurado o quieres un único reloj para todo, el 965 justifica lo que cuesta. Si lo que buscas son mapas en la muñeca para el monte al menor precio, el Race S cubre lo importante. ¿Quieres más detalle? Lee el <a href="/relojes/garmin-forerunner-965">análisis del Forerunner 965</a> y el <a href="/relojes/suunto-race-s">del Suunto Race S</a>, mira si te basta con un Garmin sin mapas en <a href="/comparativas/garmin-forerunner-965-vs-garmin-forerunner-265">Forerunner 965 vs Forerunner 265</a> o compara el Suunto con el Forerunner 265 en <a href="/comparativas/garmin-forerunner-265-vs-suunto-race-s">Forerunner 265 vs Suunto Race S</a>. Y si dudas en general, lee <a href="/guias/merece-la-pena-pagar-mas-por-un-reloj-deportivo">¿Merece la pena pagar más por un reloj deportivo?</a></p>
    `,
    verdict: [
      {
        watchSlug: "garmin-forerunner-965",
        heading: "Elige el Garmin Forerunner 965 si…",
        points: [
          "Quieres mapas con indicaciones giro a giro y ClimbPro incluso sin trayecto cargado.",
          "Preparas maratones con un plan y vas a usar Training Readiness, Stamina en tiempo real y la predicción de tiempos.",
          "Valoras la autonomía en el día a día (hasta 23 días), la música offline y pagar con Garmin Pay.",
          "Prefieres una pantalla de 1,4\" y un reloj más ligero (53 g) con bisel de titanio.",
        ],
      },
      {
        watchSlug: "suunto-race-s",
        heading: "Elige el Suunto Race S si…",
        points: [
          "Buscas mapas topográficos offline gratuitos al menor precio para trail y montaña.",
          "Quieres hasta 40 h de GPS en modo Endurance para ultras y travesías largas.",
          "Prefieres una caja más compacta (45 mm) con pantalla de 2000 nits y corona digital.",
          "Te basta con VO2 máx., VFC y Suunto Coach y prefieres ahorrarte unos 250 €.",
        ],
      },
    ],
  },
  {
    slug: "coros-pace-3-vs-garmin-forerunner-265",
    title: "COROS PACE 3 vs Garmin Forerunner 265",
    watchSlugs: ["coros-pace-3", "garmin-forerunner-265"],
    seoTitle: "COROS Pace 3 vs Garmin Forerunner 265: ¿Cuál comprar en 2026?",
    metaDescription:
      "¿COROS PACE 3 o Forerunner 265? Para corredores y triatletas: ligereza y pantalla MIP frente a AMOLED y métricas de Garmin. Batería, GPS multibanda y precio.",
    summary:
      "Los dos tienen GPS multibanda, altímetro barométrico, modo triatlón y música offline de serie. El COROS PACE 3 es más ligero (30 g con correa de nylon), dura más (15 días como reloj y hasta 38 h con GPS estándar) y cuesta unos 180 € menos; el Forerunner 265 responde con pantalla AMOLED táctil, Training Readiness, estado de VFC, Body Battery, Garmin Pay y el ecosistema Garmin Connect.",
    winnerNotes:
      "Si buscas el reloj más ligero y con más autonomía para entrenar, y te basta con las métricas de EvoLab, el PACE 3 es difícil de superar por su precio. Si valoras la pantalla AMOLED, las métricas de recuperación de Garmin y pagar desde la muñeca, el Forerunner 265 justifica la diferencia.",
    // Datos de las fichas y de las comparativas del PACE 3 y del 265.
    specs: [
      {
        label: "Pantalla",
        values: [
          "MIP transflectiva, siempre encendida",
          "AMOLED táctil de 1,3\" (416 × 416 px); 1,1\" en el 265S",
        ],
      },
      { label: "Controles", values: ["Corona digital + botones", "5 botones + pantalla táctil"] },
      { label: "Peso", values: ["39 g (silicona) / 30 g (nylon)", "47 g (265) / 39 g (265S)"] },
      {
        label: "GPS multibanda",
        values: [
          "Sí — doble frecuencia, 5 sistemas de satélites",
          "Sí — doble frecuencia con SatIQ (selección automática)",
        ],
      },
      { label: "Batería (modo reloj)", values: ["Hasta 15 días", "Hasta 13 días (265, 46 mm)"] },
      {
        label: "Batería (GPS)",
        values: [
          "Hasta 38 h (GPS estándar) / 15 h (doble frecuencia)",
          "Hasta 20 h (14 h en multibanda con todos los sistemas)",
        ],
      },
      { label: "Altímetro", values: ["Barométrico", "Barométrico"] },
      {
        label: "Navegación",
        values: ["Ruta de migas de pan", "Ruta de migas de pan (sin mapa de fondo)"],
      },
      { label: "Mapas", values: ["No", "No"] },
      {
        label: "Métricas y plataforma",
        values: [
          "EvoLab (carga, fatiga, predicción de marcas), planes COROS, COROS Training Hub",
          "Training Readiness, Training Status, VO2 máx., estado de VFC (HRV), Body Battery, potencia de carrera en la muñeca; Garmin Connect",
        ],
      },
      { label: "Multideporte / triatlón", values: ["Sí", "Sí"] },
      { label: "Música offline", values: ["Sí, de serie", "Sí, de serie"] },
      { label: "Pagos sin contacto", values: ["No", "Sí (Garmin Pay)"] },
      { label: "Resistencia al agua", values: ["5 ATM", "5 ATM"] },
    ],
    content: `
      <h2>Pantalla: MIP siempre visible frente a AMOLED táctil</h2>
      <p>Es la diferencia que más se nota al ponértelos. El <strong>COROS PACE 3</strong> usa una pantalla <strong>MIP (Memory-in-Pixel) transflectiva</strong>: está siempre encendida, se lee mejor cuanto más sol le da y apenas gasta batería. A cambio, sus colores son apagados y en interior luce poco.</p>
      <p>El <strong>Forerunner 265</strong> monta una <strong>AMOLED táctil</strong> de 1,3" (416 × 416 px) en el modelo de 46 mm, o de 1,1" en el 265S de 42 mm: colores vivos, negros profundos y una interfaz que se ve mucho mejor como reloj de diario. Se maneja con <strong>cinco botones</strong> y pantalla táctil; el PACE 3, con una <strong>corona digital</strong> y botones. Si dudas entre tecnologías, lo explicamos en <a href="/guias/amoled-vs-mip">AMOLED vs MIP</a>.</p>

      <h2>Peso y batería: la gran baza del PACE 3</h2>
      <p>El PACE 3 es de los relojes GPS más ligeros del mercado: <strong>39 g</strong> con correa de silicona y solo <strong>30 g</strong> con la de nylon, frente a los <strong>47 g</strong> del 265 (39 g el 265S). En una tirada larga o durmiendo con él, se nota.</p>
      <p>En autonomía también gana el COROS: <strong>15 días</strong> como reloj frente a <strong>13</strong> del 265, y hasta <strong>38 h</strong> con GPS estándar frente a <strong>20 h</strong>. La ventaja se reduce con la máxima precisión: en doble frecuencia el PACE 3 se queda en <strong>15 h</strong> y el 265 en <strong>14 h</strong> con multibanda y todos los sistemas. Para un maratón, cualquiera va sobrado; para ultras o semanas sin cargar, el PACE 3 da más margen.</p>

      <h2>GPS y sensores: empate técnico</h2>
      <p>Los dos tienen <strong>GPS multibanda real (doble frecuencia)</strong> y <strong>altímetro barométrico</strong>, así que en precisión de ritmo, distancia y desnivel están muy igualados. La diferencia está en cómo se gestiona el GPS: el Garmin usa <strong>SatIQ</strong>, que activa la multibanda solo cuando la señal lo necesita para ahorrar batería; en el COROS eliges tú el modo. Ninguno tiene mapas: los dos navegan con <strong>ruta de migas de pan</strong>. Más contexto en <a href="/guias/que-precision-gps-necesitas-realmente">¿Qué precisión GPS necesitas realmente?</a></p>

      <h2>Software y extras: EvoLab frente a Garmin Connect</h2>
      <h3>COROS: EvoLab y COROS Training Hub</h3>
      <p>El PACE 3 analiza tu entrenamiento con <strong>EvoLab</strong> (carga, fatiga y predicción de marcas), incluye planes de entrenamiento COROS y se completa con <strong>COROS Training Hub</strong>, la plataforma web gratuita de COROS para analizar sesiones y planificar. Tiene <strong>música offline de serie</strong>, pero <strong>no permite pagos sin contacto</strong> y su ecosistema de aplicaciones es más limitado que el de Garmin.</p>
      <h3>Garmin: métricas de recuperación y ecosistema</h3>
      <p>El Forerunner 265 tiene el paquete de recuperación más completo de su gama: <strong>Training Readiness</strong> (una puntuación diaria que te dice si estás listo para entrenar fuerte), <strong>Training Status</strong>, VO2 máx., <strong>estado de VFC (HRV)</strong> medido durante la noche, <strong>Body Battery</strong> y potencia de carrera en la muñeca. Todo vive en <strong>Garmin Connect</strong>, con integración con casi cualquier plataforma, y suma <strong>Garmin Pay</strong> y <strong>música offline</strong> de serie. Si quieres saber qué métricas merecen tu atención, lo explicamos en <a href="/guias/que-metricas-de-entrenamiento-importan">¿Qué métricas de entrenamiento importan?</a></p>

      <h2>Para triatletas</h2>
      <p>Los dos tienen <strong>modo triatlón</strong>, GPS multibanda y resistencia al agua de <strong>5 ATM</strong>, suficientes para natación en piscina y aguas abiertas. El PACE 3 apenas se nota en la muñeca y aguanta más horas; el 265 aporta sus métricas de recuperación para gestionar la carga de tres deportes. Comparamos más opciones en <a href="/guias/mejores-relojes-gps-triatlon-multideporte">los mejores relojes GPS para triatlón y multideporte</a>.</p>

      <h2>Precio: ¿merecen la pena 180 € más?</h2>
      <p>Con los precios de referencia de nuestras fichas, el <strong>COROS PACE 3</strong> cuesta <strong>249 €</strong> y el <strong>Forerunner 265</strong> se encuentra por unos <strong>429 €</strong> (PVPR de 499,99 €): unos <strong>180 € de diferencia</strong>.</p>
      <ul>
        <li><strong>Por qué pagar más por el Forerunner 265:</strong> pantalla AMOLED táctil, Training Readiness, estado de VFC y Body Battery, Garmin Pay, el ecosistema Garmin Connect y la opción de un tamaño más pequeño (265S).</li>
        <li><strong>Por qué ahorrar con el COROS PACE 3:</strong> menos peso (30 g con nylon), más autonomía como reloj y con GPS estándar, pantalla siempre legible al sol y el mismo GPS multibanda y altímetro barométrico, por unos 180 € menos.</li>
      </ul>
      <p>Si entrenas sobre todo por sensaciones y datos de carga, y quieres el reloj más ligero y duradero, el PACE 3 es la compra más eficiente. Si te importan la pantalla, las métricas de recuperación y pagar desde la muñeca, el 265 lo vale. ¿Quieres más detalle? Lee el <a href="/relojes/coros-pace-3">análisis del COROS PACE 3</a> y el <a href="/relojes/garmin-forerunner-265">del Forerunner 265</a>, mira si te basta con un Garmin más económico en <a href="/comparativas/garmin-forerunner-165-vs-coros-pace-3">Forerunner 165 vs COROS PACE 3</a> o compara el 265 con una opción con mapas en <a href="/comparativas/garmin-forerunner-265-vs-suunto-race-s">Forerunner 265 vs Suunto Race S</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "coros-pace-3",
        heading: "Elige el COROS PACE 3 si…",
        points: [
          "Quieres el reloj más ligero posible: 30 g con correa de nylon.",
          "Buscas más autonomía: 15 días como reloj y hasta 38 h con GPS estándar.",
          "Prefieres una pantalla MIP siempre encendida y muy legible a pleno sol.",
          "Te bastan EvoLab y COROS Training Hub y prefieres ahorrarte unos 180 €.",
        ],
      },
      {
        watchSlug: "garmin-forerunner-265",
        heading: "Elige el Garmin Forerunner 265 si…",
        points: [
          "Quieres una pantalla AMOLED táctil a color, también como reloj de diario.",
          "Vas a usar Training Readiness, el estado de VFC y Body Battery para gestionar la recuperación.",
          "Valoras pagar con Garmin Pay y el ecosistema Garmin Connect.",
          "Prefieres elegir tamaño: 265 (46 mm) o 265S (42 mm).",
        ],
      },
    ],
  },
  {
    slug: "garmin-instinct-2-vs-suunto-race-s",
    title: "Garmin Instinct 2 vs Suunto Race S",
    watchSlugs: ["garmin-instinct-2", "suunto-race-s"],
    seoTitle: "Garmin Instinct 2 vs Suunto Race S: ¿Cuál comprar en 2026?",
    metaDescription:
      "Instinct 2 o Suunto Race S para montaña: robustez militar, pantalla MIP y 28 días de batería frente a AMOLED, mapas offline y GPS multibanda. ¿Cuál compensa?",
    summary:
      "Dos relojes de exterior con altímetro barométrico, 45 mm de caja y hasta 30 h con GPS, pero con filosofías opuestas. El Garmin Instinct 2 apuesta por la robustez (estándar militar MIL-STD-810, 10 ATM), una pantalla MIP monocroma de alto contraste y hasta 28 días de batería, por unos 160 € menos; el Suunto Race S responde con pantalla AMOLED táctil de hasta 2000 nits, mapas topográficos offline gratuitos, GPS multibanda y bisel de acero.",
    winnerNotes:
      "Si quieres un reloj que aguante golpes y semanas sin cargar, y te basta con migas de pan y TracBack para orientarte, el Instinct 2 es la opción más dura y barata. Si necesitas ver mapas en la muñeca y la máxima precisión GPS en montaña, el Race S ofrece lo que al Instinct le falta.",
    // Datos de las fichas y de las comparativas del Instinct 2 y del Race S
    // (incluido el almacenamiento y los mapas del Race S de la comparativa
    // Forerunner 965 vs Race S).
    specs: [
      {
        label: "Enfoque",
        values: ["Reloj rudo de exterior y montaña", "Reloj de entrenamiento, trail y navegación"],
      },
      {
        label: "Pantalla",
        values: [
          "MIP transflectiva monocroma de 0,9\" (dos ventanas, alto contraste), no táctil",
          "AMOLED táctil de 1,32\" (466 × 466 px), hasta 2000 nits",
        ],
      },
      { label: "Controles", values: ["5 botones físicos", "Corona digital + botones + pantalla táctil"] },
      {
        label: "Tamaño de caja",
        values: ["45 mm (Instinct 2) y 40 mm (Instinct 2S)", "45 mm (tamaño único)"],
      },
      {
        label: "Construcción",
        values: [
          "Polímero reforzado con fibra, estándar militar MIL-STD-810",
          "Bisel de acero inoxidable",
        ],
      },
      { label: "Peso", values: ["52 g", "60 g"] },
      { label: "Batería (modo reloj)", values: ["Hasta 28 días", "Hasta 9 días"] },
      {
        label: "Batería (GPS)",
        values: [
          "Hasta 30 h (hasta 70 h en modo de máxima duración)",
          "Hasta 30 h en máxima precisión (40 h en modo Endurance)",
        ],
      },
      {
        label: "GPS multibanda",
        values: [
          "No — GPS, GLONASS y Galileo en una frecuencia",
          "Sí — doble frecuencia, 5 sistemas de satélites",
        ],
      },
      { label: "Altímetro", values: ["Barométrico", "Barométrico"] },
      {
        label: "Navegación",
        values: [
          "Ruta de migas de pan y TracBack",
          "Rutas sobre mapa (planificadas en la app) + guía de ascensos (Climb Guidance)",
        ],
      },
      {
        label: "Mapas",
        values: [
          "No",
          "Sí — topográficos offline gratuitos, sin nombres de calles ni puntos de interés",
        ],
      },
      {
        label: "Sensor de pulso",
        values: [
          "Óptico de muñeca (compatible con banda de pecho)",
          "Óptico de muñeca (compatible con banda de pecho)",
        ],
      },
      {
        label: "Métricas de entreno",
        values: [
          "Estado de VFC (HRV), tiempo de recuperación, carga de entrenamiento, Body Battery, perfiles multideporte",
          "VO2 máx., VFC (HRV), carga y recuperación (Suunto Coach), guía de ascensos, más de 95 modos deportivos",
        ],
      },
      {
        label: "Música offline",
        values: ["No (controla la música del móvil)", "No (controla la música del móvil)"],
      },
      { label: "Pagos sin contacto", values: ["Solo en las versiones Solar", "No"] },
      { label: "Resistencia al agua", values: ["10 ATM (100 m)", "50 m"] },
    ],
    content: `
      <h2>Diseño y construcción: táctico frente a deportivo</h2>
      <p>El <strong>Garmin Instinct 2</strong> tiene una estética táctica, casi militar: caja de polímero reforzado con fibra probada bajo el estándar militar <strong>MIL-STD-810</strong> frente a golpes, temperaturas extremas y agua, resistencia al agua de <strong>10 ATM (100 m)</strong> y <strong>cinco botones físicos</strong>, sin pantalla táctil. Es el tipo de reloj que no te preocupa golpear contra una roca. Mide <strong>45 mm</strong> (o 40 mm en el Instinct 2S) y pesa <strong>52 g</strong>.</p>
      <p>El <strong>Suunto Race S</strong> es más deportivo y más refinado: caja de <strong>45 mm</strong> con <strong>bisel de acero inoxidable</strong>, sumergible a <strong>50 m</strong> y con <strong>corona digital</strong>, botones y pantalla táctil. Aunque tienen el mismo diámetro, el Suunto pesa algo más: <strong>60 g</strong>.</p>

      <h2>Pantalla: MIP monocroma frente a AMOLED</h2>
      <p>Es la diferencia más visible. El Instinct 2 usa una pantalla <strong>MIP transflectiva monocroma</strong> de 0,9" con dos ventanas: máximo contraste al sol, siempre encendida y con un consumo mínimo, pero pequeña y sin color. El Race S monta una <strong>AMOLED táctil de 1,32"</strong> (466 × 466 px) que alcanza los <strong>2000 nits</strong>: colores vivos, mucha resolución y, aun así, muy legible a pleno sol. Para leer un mapa o muchos datos a la vez, no hay comparación; para ver la hora y el ritmo de un vistazo durante semanas, la MIP del Garmin cumple de sobra. Lo explicamos en detalle en <a href="/guias/amoled-vs-mip">AMOLED vs MIP</a>.</p>

      <h2>Batería: el Instinct 2 juega en otra liga</h2>
      <p>Como reloj del día a día, el Instinct 2 aguanta <strong>hasta 28 días</strong>, frente a los <strong>9 días</strong> del Race S: el triple. Con el <strong>GPS activo</strong> están empatados en <strong>30 horas</strong>, pero cada uno tiene su modo de ahorro: el Race S llega a <strong>40 h</strong> en modo Endurance y el Instinct 2 a <strong>70 h</strong> en su modo de máxima duración. Para travesías de varios días sin enchufe, el Garmin da mucho más margen.</p>

      <h2>Navegación y GPS: la gran ventaja del Race S</h2>
      <p>El Race S incluye <strong>mapas topográficos offline gratuitos</strong> que descargas por zonas desde la app de Suunto: ves el terreno, los senderos y los caminos alrededor de tu posición, aunque sin nombres de calles ni puntos de interés, y sigues rutas planificadas en la app con la <strong>guía de ascensos (Climb Guidance)</strong>. Además tiene <strong>GPS multibanda (doble frecuencia)</strong>, el que mejor aguanta bajo bosque cerrado o en barrancos.</p>
      <p>El Instinct 2 <strong>no tiene mapas</strong>: navega con <strong>ruta de migas de pan</strong> (una línea sobre fondo vacío) y <strong>TracBack</strong>, que te devuelve por el mismo camino por el que viniste. Su GPS es de una sola frecuencia, suficiente en terreno abierto. Los dos tienen <strong>altímetro barométrico</strong> para medir bien el desnivel, y el Garmin suma brújula de 3 ejes. Si dudas de si necesitas mapas, lee <a href="/guias/necesitas-mapas-en-tu-reloj">¿Necesitas mapas en tu reloj?</a></p>

      <h2>Métricas y ecosistema</h2>
      <p>El Instinct 2 trae lo esencial de Garmin: <strong>estado de VFC (HRV)</strong>, tiempo de recuperación, carga de entrenamiento, <strong>Body Battery</strong>, sueño y perfiles multideporte, todo en <strong>Garmin Connect</strong>. El Race S mide VO2 máx. y <strong>VFC</strong>, analiza carga y recuperación con <strong>Suunto Coach</strong> y ofrece más de 95 modos deportivos en la app Suunto. Algunas pruebas independientes han cuestionado la fiabilidad del pulsómetro de muñeca del Race S; si entrenas por zonas, úsalo con banda de pecho (los dos son compatibles). Ninguno tiene música offline, y solo las versiones Solar del Instinct 2 permiten pagar con Garmin Pay.</p>

      <h2>Precio: unos 160 € de diferencia</h2>
      <p>Con los precios de referencia de nuestras fichas, el <strong>Instinct 2</strong> se encuentra por unos <strong>189 €</strong> (PVPR de 299,99 €) y el <strong>Suunto Race S</strong> cuesta <strong>349 €</strong>: unos <strong>160 € de diferencia</strong>.</p>
      <ul>
        <li><strong>Por qué ahorrar con el Instinct 2:</strong> una construcción a prueba de golpes con estándar militar, 10 ATM, hasta 28 días de batería y 70 h de GPS en modo de máxima duración, migas de pan con TracBack y menos peso.</li>
        <li><strong>Por qué pagar más por el Suunto Race S:</strong> mapas topográficos offline gratuitos, GPS multibanda, una pantalla AMOLED táctil de 2000 nits y un acabado en acero.</li>
      </ul>
      <p>Si sales a la montaña por rutas conocidas, haces travesías largas o necesitas un reloj irrompible, el Instinct 2 es difícil de superar por su precio. Si te mueves por terreno que no conoces y quieres ver el mapa en la muñeca, el Race S vale la diferencia. ¿Quieres más detalle? Lee el <a href="/relojes/garmin-instinct-2">análisis del Instinct 2</a> y el <a href="/relojes/suunto-race-s">del Suunto Race S</a>, compara el Instinct con una opción ligera y multibanda en <a href="/comparativas/garmin-instinct-2-vs-coros-pace-3">Instinct 2 vs COROS PACE 3</a> o el Race S con un Garmin AMOLED en <a href="/comparativas/garmin-forerunner-265-vs-suunto-race-s">Forerunner 265 vs Suunto Race S</a>. Para más opciones, consulta <a href="/guias/mejores-relojes-gps-trail-montana">los mejores relojes GPS para trail y montaña con mapas</a>.</p>
    `,
    verdict: [
      {
        watchSlug: "garmin-instinct-2",
        heading: "Elige el Garmin Instinct 2 si…",
        points: [
          "Quieres un reloj a prueba de golpes, con estándar militar MIL-STD-810 y 10 ATM.",
          "Buscas la máxima autonomía: hasta 28 días como reloj y 70 h de GPS en modo de máxima duración.",
          "Prefieres manejarlo solo con botones físicos, también con guantes o lluvia.",
          "Te bastan las migas de pan y TracBack y prefieres ahorrarte unos 160 €.",
        ],
      },
      {
        watchSlug: "suunto-race-s",
        heading: "Elige el Suunto Race S si…",
        points: [
          "Necesitas mapas topográficos offline en la muñeca, sin pagar suscripciones.",
          "Quieres GPS multibanda para bosque cerrado, barrancos o ciudad.",
          "Valoras una pantalla AMOLED táctil grande y muy brillante (2000 nits).",
          "Prefieres un acabado deportivo en acero con corona digital.",
        ],
      },
    ],
  },
];

// Comparativas con página propia en /comparativas/[slug].
export const publishedComparisons = comparisons.filter((c) => c.content);

// Comparativas publicadas en las que aparece un reloj, para enlazarlas
// desde su ficha.
export function getPublishedComparisonsForWatch(watchSlug: string): Comparison[] {
  return publishedComparisons.filter((c) => c.watchSlugs.includes(watchSlug));
}

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
