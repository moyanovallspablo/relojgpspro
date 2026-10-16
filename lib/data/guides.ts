import { Guide } from "@/lib/types/guide";

// Estructura de guías con contenido redactado y maquetado en HTML
// (H2/H3, párrafos y listas). El contenido es genérico y editorial —
// no está atado a ningún modelo del catálogo demo ni inventa datos de
// productos reales.

export const guides: Guide[] = [
  {
    slug: "que-reloj-gps-comprar-para-empezar-a-correr",
    title: "¿Qué reloj GPS comprar para empezar a correr?",
    excerpt:
      "Las funciones mínimas que de verdad necesitas para empezar, y las que puedes dejar para más adelante.",
    category: "principiantes",
    content: `
      <h2>Lo mínimo que necesitas para empezar</h2>
      <p>Si estás dando tus primeros pasos en el running, la lista de funciones imprescindibles es más corta de lo que parece al mirar un escaparate. Un reloj de entrada te sirve si registra:</p>
      <ul>
        <li>Ritmo y distancia mediante GPS</li>
        <li>Frecuencia cardíaca en la muñeca</li>
        <li>Duración de cada entrenamiento</li>
        <li>Autonomía suficiente para no cargarlo cada dos días</li>
      </ul>
      <p>Con eso puedes seguir cualquier plan de principiante durante meses sin echar nada en falta.</p>
      <h2>Funciones que puedes ignorar al principio</h2>
      <p>Es fácil dejarse llevar por la lista de características de un reloj de gama alta. La mayoría de esas funciones solo tienen sentido cuando ya llevas un tiempo entrenando con regularidad:</p>
      <ul>
        <li>Mapas y navegación: útiles en rutas nuevas o sin marcar, no en tu recorrido habitual</li>
        <li>GPS multibanda: se nota en entornos difíciles (ciudad con edificios altos, bosque cerrado), no en un parque o una pista</li>
        <li>Métricas avanzadas de carga de entrenamiento: solo aportan algo si ya sigues una planificación estructurada</li>
      </ul>
      <h2>Rango de precio razonable</h2>
      <p>Para empezar, un reloj de gama de entrada cubre de sobra las necesidades reales. Pagar más en esta fase suele comprar funciones que tardarás meses (o nunca) en usar.</p>
      <h2>Cuándo sí conviene gastar más</h2>
      <p>Si ya sabes que vas a preparar una carrera concreta, entrenar con series estructuradas o salir a rutas de montaña, puede compensar mirar un escalón por encima desde el principio. Si todavía no lo tienes claro, empieza por lo básico: siempre puedes cambiar de reloj más adelante con la experiencia de saber qué usas de verdad.</p>
    `,
    relatedGuideSlugs: ["cuanto-deberias-gastar-en-un-reloj-deportivo"],
    relatedWatchSlugs: ["garmin-forerunner-55", "polar-pacer"],
  },
  {
    slug: "cuanto-deberias-gastar-en-un-reloj-deportivo",
    title: "¿Cuánto deberías gastar en un reloj deportivo?",
    excerpt:
      "Cómo saber si te basta un modelo de entrada o si el gasto extra en gama alta tiene sentido para ti.",
    category: "compra",
    content: `
      <h2>Antes de mirar precios, define tu uso</h2>
      <p>El precio correcto no es un número fijo: depende de cuánto y cómo entrenas. La misma pregunta — "¿cuánto debería gastar?" — tiene respuestas distintas para quien corre tres veces por semana en el parque y para quien prepara un ultra de montaña.</p>
      <h2>Gama de entrada</h2>
      <p>Cubre ritmo, distancia, frecuencia cardíaca y autonomía razonable. Es la opción con mejor relación entre lo que pagas y lo que realmente vas a usar si entrenas de forma regular pero sin una planificación muy estructurada.</p>
      <h2>Gama media</h2>
      <p>Añade GPS más preciso, más métricas de entrenamiento (carga, recuperación, VO2 máx. estimado) y, en algunos modelos, navegación básica. Tiene sentido si ya sigues un plan de entrenamiento o preparas una prueba concreta.</p>
      <h2>Gama alta y premium</h2>
      <p>Aquí entran pantallas AMOLED, mapas completos, GPS multibanda y sensores adicionales. Es la gama adecuada para trail, multideporte o cuando la precisión y la navegación son parte central de tu entrenamiento — no un capricho.</p>
      <h2>La pregunta que de verdad importa</h2>
      <p>Antes de fijarte en el precio, pregúntate qué harías con las funciones extra de la gama superior. Si la respuesta es "nada distinto a lo que ya hago", ese dinero está mejor en tus bolsillos que en tu muñeca.</p>
    `,
    relatedGuideSlugs: ["que-reloj-gps-comprar-para-empezar-a-correr"],
    relatedWatchSlugs: ["garmin-forerunner-55", "garmin-instinct-2"],
  },
  {
    slug: "garmin-vs-polar-vs-coros",
    title: "Garmin vs Polar vs COROS: diferencias reales entre marcas",
    excerpt:
      "Qué distingue a cada marca más allá del diseño: software, precisión, autonomía y ecosistema.",
    category: "comparativas-marca",
    content: `
      <h2>Garmin</h2>
      <p>Es la marca con el catálogo más amplio: desde modelos de entrada muy sencillos hasta relojes multideporte con mapas topográficos completos. Su punto fuerte es la variedad — casi siempre hay un modelo pensado exactamente para tu caso de uso — y un ecosistema de aplicación muy maduro, con años de historial de entrenamiento si te quedas en la marca.</p>
      <h2>Polar</h2>
      <p>Tiene una tradición muy fuerte en la medición de frecuencia cardíaca y en el análisis de carga y recuperación. Su software tiende a explicar mejor "qué significa" cada dato — cuánto has entrenado esta semana, si necesitas descansar — en vez de limitarse a mostrarlo. Su catálogo es más reducido que el de Garmin.</p>
      <h2>COROS</h2>
      <p>Es la marca que más ha destacado por la autonomía de batería y una interfaz más sencilla, con menos menús que recorrer. Su catálogo está muy orientado a corredores y deportistas de resistencia, con buena relación entre precisión de GPS y precio.</p>
      <h2>Entonces, ¿cuál elegir?</h2>
      <p>Ninguna es objetivamente "la mejor": cada una prioriza cosas distintas.</p>
      <ul>
        <li>Si quieres el catálogo más amplio y no te importa un software con más opciones que explorar: Garmin</li>
        <li>Si valoras entender tu recuperación y carga de entrenamiento por encima de todo: Polar</li>
        <li>Si priorizas autonomía y simplicidad sin renunciar a precisión: COROS</li>
      </ul>
      <p>La diferencia entre marcas pesa menos de lo que parece frente a la diferencia entre gamas dentro de una misma marca. Define primero tu uso — con nuestra <a href="/como-elegir">guía para elegir</a> — y después compara modelos concretos entre marcas.</p>
    `,
    relatedGuideSlugs: [],
    relatedWatchSlugs: [],
  },
  {
    slug: "amoled-vs-mip",
    title: "AMOLED vs MIP: qué pantalla necesita tu reloj",
    excerpt:
      "La diferencia entre ambas tecnologías de pantalla y cómo afecta a la autonomía y la visibilidad al sol.",
    category: "tecnologia",
    content: `
      <h2>Qué es una pantalla MIP</h2>
      <p>MIP (Memory-In-Pixel) es una tecnología reflectiva: usa la luz ambiente para mostrar la imagen, de forma parecida a una pantalla de calculadora, pero mucho más nítida. Consume muy poca energía, lo que se traduce en semanas de autonomía, y se lee perfectamente bajo el sol directo — justo donde peor se comportan otras pantallas.</p>
      <h2>Qué es una pantalla AMOLED</h2>
      <p>AMOLED es la misma tecnología que llevan la mayoría de smartphones: colores vivos, buen contraste y una experiencia visual más parecida a un móvil. A cambio, consume bastante más energía, sobre todo si activas el modo "siempre encendida", lo que reduce la autonomía a días en vez de semanas.</p>
      <h2>Autonomía: la gran diferencia</h2>
      <p>Este es el punto que de verdad debería decidir tu elección. Un reloj con pantalla MIP puede durar dos o tres semanas con uso normal; uno con AMOLED, especialmente en modo GPS continuo, puede necesitar carga cada uno o dos días.</p>
      <h2>¿Cuál elegir según tu uso?</h2>
      <ul>
        <li><strong>MIP:</strong> ideal para trail, ultradistancia o cualquier entrenamiento donde no quieras pensar en la batería</li>
        <li><strong>AMOLED:</strong> ideal si valoras la estética, usas el reloj también como smartwatch a diario y no te importa cargarlo con frecuencia</li>
      </ul>
      <p>No hay una opción "mejor" en términos absolutos — es un intercambio consciente entre estética y autonomía.</p>
    `,
    relatedGuideSlugs: ["que-precision-gps-necesitas-realmente"],
    relatedWatchSlugs: ["garmin-forerunner-165", "garmin-forerunner-55"],
  },
  {
    slug: "necesitas-mapas-en-tu-reloj",
    title: "¿Necesitas mapas en tu reloj?",
    excerpt:
      "Cuándo los mapas y la navegación son realmente útiles, y cuándo son una función que no vas a usar.",
    category: "compra",
    content: `
      <h2>Qué aportan realmente los mapas</h2>
      <p>Un reloj con mapas topográficos te muestra el terreno alrededor de tu posición y puede guiarte por una ruta cargada previamente. Es especialmente útil en zonas sin señalizar, salidas largas de montaña o cuando te desvías del camino previsto y necesitas encontrar el de vuelta sin sacar el móvil.</p>
      <h2>Cuándo los mapas no sirven de nada</h2>
      <p>Si entrenas siempre por rutas que ya conoces — tu vuelta habitual por el barrio, la misma pista de atletismo, el mismo parque — un mapa completo es una función que pagas y nunca abres. En ese caso, el dinero extra que cuesta esa función está mejor invertido en otra cosa: batería, pantalla o, simplemente, ahorrado.</p>
      <h2>Alternativas más baratas a los mapas completos</h2>
      <p>Muchos relojes de gama media, sin mapas topográficos, sí incluyen funciones más sencillas y útiles para la mayoría:</p>
      <ul>
        <li>Vuelta al inicio (back-to-start): traza una línea recta o el camino de regreso a tu punto de partida</li>
        <li>Breadcrumb o "migas de pan": muestra el trazado ya recorrido, sin mapa de fondo</li>
      </ul>
      <p>Para salidas moderadas, esto suele ser suficiente sin pagar el salto de precio de los mapas completos.</p>
      <h2>La pregunta clave</h2>
      <p>¿Sales alguna vez a terreno que no conoces, sin cobertura y sin referencias claras? Si la respuesta es sí con cierta frecuencia, los mapas dejan de ser un capricho. Si es raro o nunca, no los necesitas.</p>
    `,
    relatedGuideSlugs: ["mejores-relojes-gps-trail-montana"],
    relatedWatchSlugs: ["garmin-instinct-2", "coros-pace-3"],
  },
  {
    slug: "que-precision-gps-necesitas-realmente",
    title: "¿Qué precisión GPS necesitas realmente?",
    excerpt:
      "GPS simple, multibanda, y por qué la precisión importa más en unos entornos que en otros.",
    category: "tecnologia",
    content: `
      <h2>GPS simple vs GPS multibanda</h2>
      <p>Todos los relojes deportivos actuales incluyen GPS, pero no todos captan la señal de la misma forma. El GPS "simple" usa una sola frecuencia de los satélites; el GPS multibanda (también llamado dual-frecuencia) usa dos, lo que le permite filtrar mejor las señales que rebotan en edificios, árboles o paredes rocosas antes de llegar al reloj.</p>
      <h2>Cuándo se nota la diferencia</h2>
      <p>La precisión extra del GPS multibanda se nota sobre todo en entornos donde la señal lo tiene difícil:</p>
      <ul>
        <li>Ciudades con calles estrechas y edificios altos</li>
        <li>Bosques densos o cañones de montaña</li>
        <li>Carreras con muchos giros y cambios de dirección</li>
      </ul>
      <p>En una pista de atletismo, un parque abierto o carretera despejada, un GPS simple ya ofrece una precisión más que suficiente — la diferencia con uno multibanda apenas se nota en el dato final de distancia o ritmo.</p>
      <h2>Factores que afectan más que el propio GPS</h2>
      <p>La precisión de tu registro depende también de dónde llevas el reloj (la muñeca dominante puede introducir pequeñas variaciones), la calibración inicial y la actualización del firmware. Un GPS multibanda no compensa un reloj mal ajustado o desactualizado.</p>
      <h2>Conclusión práctica</h2>
      <p>Si entrenas principalmente en ciudad, bosque o montaña con desniveles marcados, el GPS multibanda es una mejora real. Si tu terreno habitual es abierto y despejado, no es un motivo suficiente para pagar más.</p>
    `,
    relatedGuideSlugs: ["amoled-vs-mip"],
    relatedWatchSlugs: ["coros-pace-3", "garmin-forerunner-55"],
  },
  {
    slug: "que-metricas-de-entrenamiento-importan",
    title: "¿Qué métricas de entrenamiento importan?",
    excerpt:
      "De todas las métricas que anuncian los relojes, cuáles usan de verdad los corredores y cuáles son ruido.",
    category: "entrenamiento",
    content: `
      <h2>Las métricas que usa (casi) todo el mundo</h2>
      <p>Da igual tu nivel: estas son las que de verdad consultas semana tras semana.</p>
      <ul>
        <li>Ritmo y distancia</li>
        <li>Frecuencia cardíaca, en directo y media de la sesión</li>
        <li>Duración del entrenamiento</li>
        <li>Calorías, como referencia orientativa</li>
      </ul>
      <h2>Métricas útiles si entrenas con estructura</h2>
      <p>Cuando ya sigues un plan con series, tiradas largas y descansos programados, estas métricas empiezan a aportar valor real:</p>
      <ul>
        <li>Carga de entrenamiento: cuánto estrés acumulado llevas en los últimos días</li>
        <li>Tiempo de recuperación recomendado</li>
        <li>VO2 máx. estimado, como indicador de evolución a medio plazo</li>
        <li>Zonas de frecuencia cardíaca, para ajustar la intensidad de cada sesión</li>
      </ul>
      <h2>Métricas que suenan bien pero rara vez se consultan</h2>
      <p>Muchos relojes de gama alta presumen de métricas muy específicas — dinámica de carrera avanzada, puntuaciones de "forma" propietarias, análisis de sueño muy detallados — que en la práctica consulta un porcentaje pequeño de usuarios más allá de la primera semana de uso.</p>
      <h2>Cómo elegir según tu nivel</h2>
      <p>Si estás empezando, las métricas básicas cubren de sobra tus necesidades. Si entrenas con un plan estructurado, prioriza carga y recuperación por encima de cualquier métrica exótica del catálogo de marketing.</p>
    `,
    relatedGuideSlugs: [],
    relatedWatchSlugs: ["polar-pacer"],
  },
  {
    slug: "merece-la-pena-pagar-mas-por-un-reloj-deportivo",
    title: "¿Merece la pena pagar más por un reloj deportivo?",
    excerpt:
      "Qué obtienes realmente al subir de gama, y en qué casos ese salto de precio no se nota en tu entrenamiento.",
    category: "compra",
    content: `
      <h2>Qué compras al subir de gama</h2>
      <p>Al pasar de un reloj de entrada a uno de gama alta, lo que realmente cambia es: pantalla AMOLED, GPS multibanda, mapas y navegación, más sensores (altímetro barométrico, por ejemplo) y métricas de entrenamiento más avanzadas. Son mejoras reales, no humo — la pregunta es si las vas a usar.</p>
      <h2>Qué NO cambia solo por pagar más</h2>
      <p>Un reloj más caro no te hace correr más rápido, no sustituye a un buen plan de entrenamiento y no mide con más precisión el esfuerzo real que percibes. Tampoco todos los modelos caros son igual de cómodos o intuitivos: el precio no garantiza mejor experiencia de uso.</p>
      <h2>Cuándo el salto de precio se nota de verdad</h2>
      <ul>
        <li>Sales a terrenos sin cobertura ni referencias claras, donde los mapas marcan la diferencia</li>
        <li>Entrenas en entornos donde el GPS simple pierde precisión (ciudad, bosque denso)</li>
        <li>Sigues un plan estructurado y consultas cada semana carga, recuperación y zonas</li>
        <li>Haces salidas largas donde la autonomía extra evita quedarte sin batería a mitad de ruta</li>
      </ul>
      <h2>Cuándo no</h2>
      <p>Si corres por rutas conocidas, sin necesidad de mapas, y solo miras ritmo, distancia y frecuencia cardíaca al terminar, el salto de precio no se traduce en una mejora que notes en tu día a día. Ese dinero rinde más en otro sitio — zapatillas, por ejemplo.</p>
    `,
    relatedGuideSlugs: ["cuanto-deberias-gastar-en-un-reloj-deportivo"],
    relatedWatchSlugs: [],
  },
  {
    slug: "mejores-relojes-gps-menos-200-euros",
    title: "Mejores relojes GPS por menos de 200€ en 2026",
    excerpt:
      "Selección de los mejores relojes GPS de entrada y gama media ajustados de precio. Analizamos precisión, batería y funciones clave sin gastar de más.",
    category: "compra",
    // Contenido en app/guias/mejores-relojes-gps-menos-200-euros/page.tsx
    content: null,
    hasCustomPage: true,
    relatedGuideSlugs: [
      "cuanto-deberias-gastar-en-un-reloj-deportivo",
      "amoled-vs-mip",
      "que-precision-gps-necesitas-realmente",
    ],
    relatedWatchSlugs: ["garmin-forerunner-55", "coros-pace-3", "polar-pacer"],
  },
  {
    slug: "mejores-relojes-gps-calidad-precio",
    title: "Los mejores relojes GPS calidad-precio de 2026",
    excerpt:
      "El mejor reloj de cada categoría sin pagar de más: gama de entrada, gama media MIP y AMOLED, mapas con acabado premium y outdoor ultrarresistente.",
    seoTitle: "Los Mejores Relojes GPS en Calidad-Precio de 2026: Guía Definitiva",
    category: "compra",
    // Contenido en app/guias/mejores-relojes-gps-calidad-precio/page.tsx
    content: null,
    hasCustomPage: true,
    relatedGuideSlugs: [
      "mejores-relojes-gps-menos-200-euros",
      "amoled-vs-mip",
      "necesitas-mapas-en-tu-reloj",
    ],
    relatedWatchSlugs: [
      "polar-pacer",
      "garmin-forerunner-55",
      "coros-pace-3",
      "garmin-forerunner-165",
      "suunto-race-s",
      "garmin-instinct-2",
    ],
  },
  {
    slug: "mejores-relojes-gps-trail-montana",
    title: "Los mejores relojes GPS para trail y montaña de 2026",
    excerpt:
      "Mapas topográficos, altímetro barométrico y batería para ultras: el mejor reloj outdoor en resistencia, mapas, ligereza y gama alta, probado ruta a ruta.",
    seoTitle: "Los Mejores Relojes GPS para Trail y Montaña de 2026: Guía Outdoor",
    metaDescription:
      "Para trail, senderismo y ultradistancia: comparamos mapas topográficos, altímetro barométrico, batería con GPS y resistencia de los mejores relojes de montaña.",
    category: "compra",
    // Contenido en app/guias/mejores-relojes-gps-trail-montana/page.tsx
    content: null,
    hasCustomPage: true,
    relatedGuideSlugs: [
      "necesitas-mapas-en-tu-reloj",
      "que-precision-gps-necesitas-realmente",
      "mejores-relojes-gps-calidad-precio",
    ],
    relatedWatchSlugs: [
      "garmin-instinct-2",
      "suunto-race-s",
      "coros-pace-3",
      "garmin-forerunner-965",
    ],
  },
  {
    slug: "relojes-gps-oposiciones-pruebas-fisicas",
    title: "Relojes GPS para oposiciones y pruebas físicas (2026)",
    excerpt:
      "Policía Nacional, Guardia Civil, Bomberos o Ejército: qué reloj elegir para clavar el ritmo en la prueba de 1000 m o 2000 m en pista.",
    category: "compra",
    // Contenido en app/guias/relojes-gps-oposiciones-pruebas-fisicas/page.tsx
    content: null,
    hasCustomPage: true,
    relatedGuideSlugs: ["mejor-reloj-para-preparar-una-oposicion"],
    relatedWatchSlugs: ["garmin-forerunner-55", "coros-pace-3", "garmin-forerunner-165"],
  },
  {
    slug: "mejor-reloj-para-preparar-una-oposicion",
    title: "Mejor reloj para preparar una oposición física",
    excerpt:
      "Qué funciones ayudan realmente a preparar pruebas físicas: control de ritmos, series y recuperación.",
    category: "entrenamiento",
    content: `
      <h2>Qué necesita realmente un opositor</h2>
      <p>Preparar pruebas físicas de una oposición — carrera de resistencia, series de velocidad, circuitos de fuerza — no exige un reloj de gama alta. Exige uno que controle bien lo básico y sea fiable sesión tras sesión, durante meses de preparación.</p>
      <h2>Funciones imprescindibles</h2>
      <ul>
        <li>Cronómetro y temporizador de intervalos, para series y repeticiones cronometradas</li>
        <li>Ritmo en tiempo real, para ajustar la velocidad al objetivo de la prueba</li>
        <li>Frecuencia cardíaca, para no pasarte de intensidad en los entrenamientos de base</li>
        <li>Autonomía suficiente para entrenar a diario sin pendiente de la batería</li>
      </ul>
      <h2>Funciones prescindibles</h2>
      <p>Mapas, navegación y GPS multibanda casi nunca entran en juego cuando entrenas en una pista, un circuito conocido o un gimnasio. Son funciones pensadas para otro tipo de entrenamiento, no para preparar tiempos y marcas concretas.</p>
      <h2>Qué gama basta</h2>
      <p>Un reloj de entrada o gama media, con buen cronómetro por intervalos y frecuencia cardíaca fiable, cubre de sobra la preparación de una prueba física de oposición. El presupuesto ahorrado en funciones que no vas a usar puede ir a otras partidas de la preparación, como calzado o fisioterapia.</p>
    `,
    relatedGuideSlugs: ["relojes-gps-oposiciones-pruebas-fisicas"],
    relatedWatchSlugs: ["garmin-forerunner-55", "polar-pacer"],
  },
  {
    slug: "reloj-gps-para-running-y-gimnasio",
    title: "Reloj GPS para running y gimnasio: qué buscar",
    excerpt:
      "Cómo elegir un reloj que funcione bien tanto para correr al aire libre como para entrenar en el gimnasio.",
    category: "entrenamiento",
    content: `
      <h2>El reto de combinar ambos entrenos</h2>
      <p>Correr y entrenar en el gimnasio piden cosas distintas a un reloj: fuera necesitas GPS preciso y autonomía; dentro, el GPS no sirve de nada y lo que importa es el registro de series, repeticiones y frecuencia cardíaca en ejercicios de fuerza.</p>
      <h2>Qué mirar para el gimnasio</h2>
      <ul>
        <li>Modo de entrenamiento de fuerza, que registre series y repeticiones sin depender del GPS</li>
        <li>Frecuencia cardíaca fiable en movimientos de brazo (algunos sensores pierden precisión en ejercicios como remo o dominadas)</li>
        <li>Pantalla legible en interior, sin depender de luz solar directa</li>
      </ul>
      <h2>Qué mirar para correr</h2>
      <ul>
        <li>GPS preciso — simple si corres en espacios abiertos, multibanda si es en ciudad o bosque</li>
        <li>Autonomía suficiente para tus salidas más largas</li>
        <li>Métricas de ritmo y distancia claras en pantalla durante la carrera</li>
      </ul>
      <h2>Un único reloj que cubra los dos mundos</h2>
      <p>La mayoría de relojes de gama media en adelante incluyen ya perfiles específicos para fuerza y para carrera, así que no hace falta elegir entre uno u otro. Lo importante es comprobar, antes de comprar, que el modelo que miras tiene realmente un modo de entrenamiento de fuerza dedicado — no todos los relojes "para correr" lo incluyen.</p>
    `,
    relatedGuideSlugs: [],
    relatedWatchSlugs: ["garmin-forerunner-165"],
  },
  {
    slug: "mejores-relojes-gps-triatlon-multideporte",
    title: "Mejores Relojes GPS para Triatlón y Multideporte (2026)",
    excerpt:
      "Guía completa para elegir tu reloj de triatlón: modo multideporte con transiciones rápidas, precisión en aguas abiertas y acople de sensores de ciclismo.",
    category: "compra",
    content: `
      <h2>Requisitos imprescindibles para un reloj de triatlón</h2>
      <p>Cualquier reloj deportivo registra una sesión de natación, una de bici y otra de carrera. Un reloj de triatlón hace algo distinto: las registra <strong>como una sola actividad continua</strong>, sin que pierdas segundos parando y arrancando entrenamientos en mitad de la competición.</p>
      <h3>Perfil multideporte nativo</h3>
      <p>Es el requisito número uno. Con un perfil de triatlón, empiezas la actividad en la salida del agua y pasas a la siguiente disciplina <strong>pulsando un solo botón</strong>. El reloj cambia automáticamente de pantallas de datos (metros y brazadas en el agua, velocidad y potencia en la bici, ritmo en carrera) y guarda un único archivo con todos los segmentos. Los buenos relojes permiten además perfiles personalizados para duatlón, acuatlón o sesiones brick (bici + carrera) en los entrenamientos.</p>
      <h3>Registro de transiciones T1 y T2</h3>
      <p>Las transiciones también cuentan en el tiempo final, y en triatlones cortos pueden decidir un puesto. Un reloj multideporte registra <strong>T1</strong> (del agua a la bici) y <strong>T2</strong> (de la bici a la carrera) como segmentos propios, así que después puedes analizar cuánto tardas en quitarte el neopreno o en cambiarte de calzado — y entrenarlo.</p>
      <h3>Conectividad con sensores: ANT+ y Bluetooth</h3>
      <p>En el sector de ciclismo, el reloj deja de ser solo un GPS y pasa a ser la centralita de tus sensores:</p>
      <ul>
        <li><strong>Potenciómetro:</strong> la forma más precisa de dosificar el esfuerzo en la bici y llegar con piernas a la carrera</li>
        <li><strong>Sensores de cadencia y velocidad:</strong> útiles en rodillo o cuando el GPS pierde señal</li>
        <li><strong>Banda de pecho:</strong> más fiable que el pulsómetro de muñeca con vibraciones y en el agua</li>
      </ul>
      <p>Hay dos protocolos: <strong>ANT+</strong>, el estándar histórico del ciclismo, y <strong>Bluetooth</strong>, cada vez más extendido. No todos los relojes hablan los dos: antes de comprar, comprueba que el reloj es compatible con el protocolo de tus sensores, sobre todo si tu potenciómetro es antiguo y solo emite por ANT+.</p>

      <h2>Natación: aguas abiertas vs piscina cubierta</h2>
      <p>El mismo reloj funciona de forma muy distinta en cada caso, porque en piscina apenas usa el GPS y en aguas abiertas depende de él.</p>
      <h3>Aguas abiertas: un GPS que ve a ratos</h3>
      <p>La señal GPS no atraviesa el agua: cada vez que la muñeca se sumerge, el reloj pierde a los satélites. Por eso, en modo aguas abiertas, el algoritmo aprovecha <strong>el instante en que el brazo sale del agua</strong> en cada brazada para fijar posición, y luego filtra y une esos puntos para reconstruir el recorrido. El resultado depende mucho del reloj y del firmware: un buen algoritmo dibuja una trazada limpia; uno peor suma metros fantasma en zigzag.</p>
      <p>El GPS multibanda ayuda a fijar posición más rápido en esas ventanas cortas, aunque en natación sigue siendo normal un margen de error mayor que corriendo. Para el día de la carrera, la distancia del reloj es orientativa: la oficial es la del circuito.</p>
      <h3>Piscina: el acelerómetro manda</h3>
      <p>En piscina el reloj no usa el GPS. Le indicas la longitud del vaso (25 o 50 m) y el <strong>acelerómetro</strong> detecta cada brazada y cada viraje para contar largos y calcular distancia y ritmo. Las métricas habituales son:</p>
      <ul>
        <li><strong>SWOLF:</strong> suma del tiempo y las brazadas de un largo; cuanto más bajo, más eficiente es tu nado</li>
        <li><strong>Detección de estilo:</strong> crol, espalda, braza o mariposa, reconocidos por el movimiento del brazo</li>
        <li><strong>Ritmo por 100 m</strong> y conteo de brazadas por largo</li>
        <li><strong>Series y descansos</strong> detectados automáticamente al parar en la pared</li>
      </ul>
      <p>Un consejo práctico: si paras a mitad de largo o haces virajes sin impulso, el reloj puede contar mal. Revisa la sesión al terminar y corrige los largos si la app lo permite.</p>

      <h2>Modelos recomendados según perfil y presupuesto</h2>
      <h3>COROS PACE 3: la opción ultraligera de entrada</h3>
      <p>El <a href="/relojes/coros-pace-3">COROS PACE 3</a> cuesta unos <strong>249 €</strong> y ofrece un modo triatlón completo, GPS multibanda de doble frecuencia y sensores externos por ANT+ y Bluetooth. Con 30-39 g apenas se nota al nadar, y su pantalla MIP siempre encendida se lee perfecta al sol en la bici.</p>
      <ul>
        <li><strong>Autonomía:</strong> hasta 38 h en GPS estándar (unas 15 h en doble frecuencia), de sobra para cualquier distancia hasta el Ironman</li>
        <li><strong>Para quién:</strong> quien se inicia en el triatlón o compite en sprint y olímpico y quiere la mejor relación calidad-precio</li>
        <li><strong>A tener en cuenta:</strong> sin mapas y con un ecosistema más reducido que Garmin, aunque el COROS Training Hub es excelente para planificar</li>
      </ul>
      <h3>Suunto Race S: AMOLED, multibanda y mapas por ~349 €</h3>
      <p>El <a href="/relojes/suunto-race-s">Suunto Race S</a> combina <strong>pantalla AMOLED</strong> muy brillante, <strong>GPS multibanda</strong> y <strong>mapas topográficos offline</strong>, útiles para reconocer el circuito de bici o rodar por carreteras nuevas. Es sumergible a 50 m.</p>
      <ul>
        <li><strong>Autonomía:</strong> hasta 30 h en el modo de mejor precisión y hasta 40 h en modo Endurance</li>
        <li><strong>Para quién:</strong> triatletas que también entrenan en montaña o en rutas nuevas y quieren mapas sin pagar gama premium</li>
        <li><strong>A tener en cuenta:</strong> los sensores se conectan solo por <strong>Bluetooth</strong> (sin ANT+), así que comprueba la compatibilidad de tu potenciómetro; y algunas pruebas independientes han cuestionado su pulsómetro de muñeca — mejor con banda de pecho</li>
      </ul>
      <h3>Garmin Forerunner 265: el equilibrio con AMOLED y Garmin Connect</h3>
      <p>El <a href="/relojes/garmin-forerunner-265">Garmin Forerunner 265</a> suma pantalla AMOLED táctil, GPS multibanda con SatIQ, perfiles multideporte y las métricas avanzadas de Garmin: <strong>Training Readiness</strong>, VFC (HRV), VO2 máx. y potencia de carrera en la muñeca. Todo se integra en <strong>Garmin Connect</strong>, con el ecosistema de sensores, apps y plataformas de entrenamiento más amplio del mercado.</p>
      <ul>
        <li><strong>Autonomía:</strong> hasta 20 h en GPS (unas 14 h con multibanda y todos los sistemas)</li>
        <li><strong>Para quién:</strong> triatletas de sprint, olímpico y media distancia que entrenan con estructura y quieren gestionar carga y recuperación</li>
        <li><strong>A tener en cuenta:</strong> sin mapas; en un Ironman lento conviene usar el modo GPS estándar para no ir justo de batería</li>
      </ul>
      <h3>Garmin Forerunner 965: para media y larga distancia</h3>
      <p>El <a href="/relojes/garmin-forerunner-965">Garmin Forerunner 965</a> es el más completo del catálogo para triatlón: perfiles multideporte (triatlón, duatlón y brick), <strong>mapas topográficos integrados</strong>, bisel de titanio y una <strong>pantalla AMOLED de 1,4"</strong> que permite ver más datos a la vez en la bici.</p>
      <ul>
        <li><strong>Autonomía:</strong> hasta 31 h en GPS (unas 19 h con multibanda y todos los sistemas), con margen para un Ironman completo</li>
        <li><strong>Para quién:</strong> triatletas de media y larga distancia (Ironman) que quieren el máximo de métricas, navegación y autonomía</li>
        <li><strong>A tener en cuenta:</strong> es el más caro del catálogo; si no vas a usar los mapas, el 265 cubre casi todo lo demás por bastante menos</li>
      </ul>

      <h2>Comparativas y guías relacionadas</h2>
      <ul>
        <li><a href="/comparativas/coros-pace-3-vs-suunto-race-s">COROS PACE 3 vs Suunto Race S</a>: ligereza y MIP frente a AMOLED y mapas</li>
        <li><a href="/comparativas/garmin-forerunner-265-vs-suunto-race-s">Garmin Forerunner 265 vs Suunto Race S</a>: ecosistema Garmin frente a mapas de Suunto</li>
        <li><a href="/comparativas/garmin-forerunner-165-vs-garmin-forerunner-265">Garmin Forerunner 165 vs Forerunner 265</a>: qué aporta el salto a multibanda y Training Readiness</li>
        <li><a href="/guias/que-metricas-de-entrenamiento-importan">¿Qué métricas de entrenamiento importan?</a>: qué datos consultar de verdad en una preparación larga</li>
      </ul>

      <h2>En resumen</h2>
      <p>Para empezar en el triatlón sin gastar de más, el COROS PACE 3 lo tiene todo lo esencial. Si quieres AMOLED y mapas por poco más, el Suunto Race S — siempre que tus sensores sean Bluetooth. El Forerunner 265 es el equilibrio para quien entrena con estructura dentro del ecosistema Garmin, y el Forerunner 965 es la referencia para media y larga distancia.</p>
    `,
    relatedGuideSlugs: [
      "que-metricas-de-entrenamiento-importan",
      "que-precision-gps-necesitas-realmente",
      "amoled-vs-mip",
    ],
    relatedWatchSlugs: [
      "coros-pace-3",
      "suunto-race-s",
      "garmin-forerunner-265",
      "garmin-forerunner-965",
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
