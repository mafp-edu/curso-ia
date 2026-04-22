// Contenido pedagógico del curso
// Caso ancla: preparar reportes ejecutivos mensuales
// Audiencia: profesional adulto chileno genérico, no técnico

window.COURSE_DATA = {
  meta: {
    audiencia: "Profesionales · Chile",
    caso: "Reportes ejecutivos mensuales",
    duracionMin: 120,
    totalBloques: 5,
  },
  blocks: [
    // =========================================================
    // BLOQUE 0 — Fundamentos: qué hace (y qué no) un LLM
    // =========================================================
    {
      id: "b0",
      num: 0,
      title: "Antes de Copilot · qué predice y qué no",
      eyebrow: "Bloque 00 · 20 min",
      lede: "Fundamento conceptual y económico. Qué es un LLM, por qué alucina, y por qué el juicio humano vale más — no menos — cuando la predicción es barata.",
      badge: "4 lecciones · Quiz",
      lessons: [
        {
          id: "L0.1",
          code: "L0.1",
          dur: "4 min",
          eyebrow: "Mapa",
          title: "Zoológico de la IA · tres familias",
          body: [
            { t: "p", x: "Antes de usar Copilot, ubica dónde está parado. No toda la IA es lo mismo. Te sirven tres categorías simples." },
            { t: "grid3", items: [
              { title: "IA predictiva clásica", body: "Scoring crediticio, detección de fraude, recomendadores. Predice categorías o números a partir de datos estructurados." },
              { title: "IA generativa (LLMs)", body: "Copilot, ChatGPT, Claude. Predice el siguiente token de texto. Produce lenguaje plausible, no verdad verificada." },
              { title: "IA agéntica", body: "LLM + herramientas + memoria. Ejecuta acciones, no solo responde. Agent Builder apunta hacía acá." },
            ]},
            { t: "callout", kind: "nota", head: "Dónde vive Copilot", x: "Copilot Chat Básico es IA generativa. El Agent Builder que verás en el Bloque 4 es un primer paso hacia agéntica. Saber esto te dice qué esperar y qué no." },
          ],
        },
        {
          id: "L0.2",
          code: "L0.2",
          dur: "6 min",
          eyebrow: "Mecánica",
          title: "Qué hace un LLM · el ejemplo de la capital",
          body: [
            { t: "p", x: "Definición operativa, sin tecnicismos: un LLM es un **autocompletador industrial** entrenado con trillones de tokens de texto. Dado todo lo que lleva leído, predice la **siguiente palabra más probable**. Punto." },
            { t: "bignums", items: [
              { n: "1 token", l: "Lo único que predice a la vez", c: "burgundy" },
              { n: "∼15T", l: "Tokens de entrenamiento (orden de magnitud)", c: "marine" },
              { n: "0", l: "Consultas a bases de datos", c: "olive" },
            ]},
            { t: "p", x: "**Experimento mental.** Imagina que le preguntas a un LLM: *¿cuál es el capital de Chile?* Aprieta el botón abajo y observa qué responde — y después, por qué." },
            { t: "llm-sim",
              user: "¿Cuál es el capital de Chile?",
              answer: "Santiago.",
              reveals: [
                { head: "Lo que acaba de pasar",
                  x: "El LLM vio la frase *'el capital de Chile'* y predijo la continuación más frecuente en su corpus: **Santiago**. No consultó nada. No razonó. Solo eligió la palabra estadísticamente dominante." },
                { head: "Lo que un humano habría respondido (con criterio)",
                  x: "Un profesional chileno, leyendo con atención, podría responder **'cobre'** (el capital económico del país), **'capital humano'** (fuerza laboral, educación), o **'hub de negocios'** — porque la palabra *capital* tiene varias acepciones y el humano **las desambigua** con contexto e intención." },
                { head: "La lección",
                  x: "Un LLM predice la **siguiente palabra más probable**. Sin contexto, va a la media estadística. Por eso la **C de CORE** — que verás en el Bloque 2 — es Contexto: le entregas el marco que evita que vaya a la respuesta genérica." },
                { head: "Por qué importa para tu reporte",
                  x: "Si Copilot alucina una cifra, no es maldad ni bug: es la misma máquina de 'Santiago' pero con un número que *suena correcto*. **Plausible ≠ verdadero.** Tu juicio es el filtro." },
              ],
            },
          ],
        },
        {
          id: "L0.3",
          code: "L0.3",
          dur: "5 min",
          eyebrow: "Caso real",
          title: "Apple Card · sesgo sin variable protegida",
          body: [
            { t: "p", x: "**2019.** Apple y Goldman Sachs lanzan la Apple Card. David Heinemeier Hansson (creador de Ruby on Rails) denuncia públicamente que su esposa, con **mejor historial crediticio** que él, recibió un cupo **20 veces menor**. Steve Wozniak confirma el mismo patrón con su pareja. Goldman responde: 'el algoritmo no mira género'." },
            { t: "bignums", items: [
              { n: "20×", l: "Diferencia de cupo reportada", c: "burgundy" },
              { n: "0", l: "Variables de género en el modelo", c: "olive" },
              { n: "NYDFS", l: "Regulador que investigó", c: "marine" },
            ]},
            { t: "callout", kind: "alert", head: "El giro", x: "Técnicamente el algoritmo no veía género. Pero aprendió de décadas de datos históricos donde las mujeres pidieron menos crédito, tuvieron menos ingreso registrado a su nombre, usaron tarjetas de pareja. El sesgo se colaba por **proxies**: ingreso, antigüedad laboral, historial como titular principal." },
            { t: "p", x: "**Lección para el alumno:** la predicción estadística hereda los sesgos de los datos con los que se entrenó, incluso cuando parece neutral. Los LLMs heredan los sesgos, estilos, errores comunes y *groupthink* del corpus de internet. Por eso el juicio humano es el filtro, no un adorno." },
            { t: "callout", kind: "nota", head: "Puente a Copilot", x: "Cuando Copilot te sugiera una redacción que 'suena a consultor genérico', o un hallazgo que parece obvio, recuerda: está promediando miles de textos parecidos. Tu valor profesional está en las frases que el promedio **no** genera." },
          ],
        },
        {
          id: "L0.4",
          code: "L0.4",
          dur: "5 min",
          eyebrow: "Economía",
          title: "Prediction Machines · por qué tu juicio vale más",
          body: [
            { t: "p", x: "**Agrawal, Gans y Goldfarb (2018, Harvard Business School Press)** resumen la revolución de la IA en una frase: *la IA bajó el costo de la predicción a casi cero.* Punto." },
            { t: "bignums", items: [
              { n: "↓", l: "Costo de predecir", c: "olive" },
              { n: "↑", l: "Usos de la predicción", c: "marine" },
              { n: "↑↑", l: "Valor del juicio humano", c: "burgundy" },
            ]},
            { t: "grid3", items: [
              { title: "1 · Usas más", body: "Tareas que antes no delegabas (clasificar 200 correos, resumir 50 páginas) ahora sí — porque predecir es gratis." },
              { title: "2 · Aparecen usos nuevos", body: "Cosas que antes no compensaban hacer (un borrador por cada escenario, 10 variantes de un título) ahora valen la pena." },
              { title: "3 · Los complementos suben", body: "Lo que **no** es predicción — el juicio, el criterio, el 'qué decirle al directorio' — se vuelve el cuello de botella. Vale **más**, no menos." },
            ]},
            { t: "p", x: "Aplicado al reporte mensual: antes solo delegabas el formateo. Ahora puedes delegar el primer borrador, la clasificación masiva, el resumen de emails. El **juicio sobre qué significa cada hallazgo para la empresa sigue siendo tuyo** — y es donde ganas horas reales." },
            { t: "aforismo-mini", x: "La predicción se abarató. El juicio, nunca." },
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 0 · Fundamentos",
        questions: [
          {
            stem: "¿Qué hace, en esencia, un LLM como Copilot?",
            options: [
              "Consulta una base de datos y devuelve la respuesta más precisa.",
              "Predice el siguiente token más probable dado el contexto recibido.",
              "Razona formalmente sobre la pregunta antes de responder.",
              "Verifica cada cifra contra fuentes oficiales en tiempo real.",
            ],
            correct: 1,
            explain: "Un LLM predice token a token la continuación más probable. No consulta bases de datos ni razona formalmente — por eso alucina con confianza.",
          },
          {
            stem: "El caso Apple Card enseña que:",
            options: [
              "Los algoritmos son siempre neutrales si no usan la variable protegida.",
              "Goldman Sachs programó deliberadamente sesgo de género.",
              "Un modelo puede heredar sesgos históricos vía variables proxy, aunque 'no vea' la característica sensible.",
              "El problema se resuelve quitando más variables del modelo.",
            ],
            correct: 2,
            explain: "El sesgo se coló por proxies (ingreso, historial como titular, antigüedad). 'No mirar género' no bastó — los datos de entrenamiento ya lo tenían codificado indirectamente.",
          },
          {
            stem: "Según Prediction Machines (Agrawal et al., 2018), cuando la predicción se abarata:",
            options: [
              "El juicio humano se vuelve obsoleto.",
              "El juicio humano sube de valor, porque es el complemento escaso.",
              "Solo los trabajos técnicos sobreviven.",
              "Todo se automatiza por igual.",
            ],
            correct: 1,
            explain: "Cuando un input cae de precio, su complemento sube de valor. La predicción la hace la máquina; el juicio sobre qué hacer con esa predicción sigue siendo tuyo — y ahí está el valor.",
          },
        ],
      },
      paraLlevar: [
        "LLM = autocompletador; predice, no sabe.",
        "Sin contexto, va a la media estadística.",
        "Predicción barata → juicio humano vale más.",
      ],
      cliffhanger: "Si vas a delegar predicción, hazlo sin filtrar por accidente datos sensibles. El próximo bloque: tu primer chat seguro.",
      aforismo: "La IA predice 'Santiago'. Tú decides si hablamos de geografía o de cobre.",
    },

    // =========================================================
    // BLOQUE 1
    // =========================================================
    {
      id: "b1",
      num: 1,
      title: "Tu primer chat seguro",
      eyebrow: "Bloque 01 · 20 min",
      lede: "Fundamentos y seguridad antes de escribir tu primer prompt. Escudo verde, EDP y anonimización: la base no negociable.",
      badge: "6 lecciones · Quiz",
      lessons: [
        {
          id: "L1.1",
          code: "L1.1",
          dur: "2 min",
          eyebrow: "Pregunta",
          title: "¿Pegarías en Copilot el reporte que armaste ayer?",
          kind: "opener",
          body: [
            { t: "p", x: "Tómate treinta segundos. Piensa en el último **reporte ejecutivo mensual** que preparaste: cifras de ventas, nombres de clientes, KPIs internos, comentarios del gerente sobre una unidad que no va bien." },
            { t: "p", x: "¿Lo pegarías tal cual en una caja de chat de IA?" },
            { t: "callout", kind: "nota", head: "Reflexión", x: "No hay respuesta correcta todavía. Retén tu instinto. En 30 minutos vamos a separar qué parte de ese instinto es prudencia real y qué parte es mito." },
          ],
        },
        {
          id: "L1.2",
          code: "L1.2",
          dur: "4 min",
          eyebrow: "Qué es",
          title: "Copilot Chat Básico, en una página",
          body: [
            { t: "grid3", items: [
              { title: "Gratis, comercial", body: "Versión sin costo para empresas con cuenta corporativa Entra ID. No requiere licencia M365 Copilot." },
              { title: "No es Copilot personal", body: "Distinto del que viene con cuentas Hotmail / personal. Este vive en el tenant de tu empresa." },
              { title: "Dónde vive", body: "m365.cloud.microsoft/chat — accedes con tu cuenta corporativa." },
            ]},
            { t: "schema", label: "Ubicación del escudo verde", parts: [
              { kind: "topbar" },
              { kind: "row", items: [
                { box: "Lienzo de chat" },
                { box: "Escudo verde ▲", highlight: true },
              ]},
              { kind: "row", items: [
                { box: "Caja de prompt · 'Escribe aquí...'" },
              ]},
              { arrow: "↑ Indicador de Enterprise Data Protection activo" },
            ]},
          ],
        },
        {
          id: "L1.3",
          code: "L1.3",
          dur: "6 min",
          eyebrow: "Garantía corporativa",
          title: "El escudo verde y Enterprise Data Protection",
          body: [
            { t: "bignums", items: [
              { n: "3", l: "Garantías de EDP", c: "burgundy" },
              { n: "0", l: "Usos para entrenar modelos", c: "olive" },
            ]},
            { t: "compare", bad: {
              head: "NO cubre EDP",
              items: ["Búsquedas web de Bing", "Imágenes generadas externamente", "Respuestas con citas web abiertas"],
            }, good: {
              head: "SÍ cubre EDP",
              items: ["Tus prompts y respuestas", "Auditable vía Microsoft Purview", "Procesado en tenant corporativo"],
            }},
            { t: "callout", kind: "tip", head: "Regla simple", x: "Si ves el escudo verde y NO activaste Buscar, tu conversación está dentro del perímetro EDP." },
          ],
        },
        {
          id: "L1.4",
          code: "L1.4",
          dur: "3 min",
          eyebrow: "Marco legal",
          title: "Ley 21.719 en la práctica",
          body: [
            { t: "bignums", items: [
              { n: "12/26", l: "Entrada en vigencia", c: "burgundy" },
              { n: "20.000", l: "UTM de sanción máxima", c: "marine" },
              { n: "GDPR", l: "Estándar de referencia", c: "olive" },
            ]},
            { t: "p", x: "La **empresa es responsable** del tratamiento de datos personales. Pegar información identificable de un cliente en cualquier herramienta — incluida Copilot — sin anonimizar, compromete a la organización." },
            { t: "callout", kind: "alert", head: "Implicancia directa", x: "El escudo verde protege el canal, no te exime del deber de anonimizar. Son capas distintas: una es técnica, la otra es legal." },
          ],
        },
        {
          id: "L1.5",
          code: "L1.5",
          dur: "2 min",
          eyebrow: "Disciplina operativa",
          title: "Placeholders estándar de anonimización",
          body: [
            { t: "grid3", items: [
              { mono: "[CLIENTE_001]", body: "Reemplaza razones sociales y nombres de fantasía." },
              { mono: "[RUT_X]", body: "Cualquier identificador tributario o DNI." },
              { mono: "[CONTACTO_1]", body: "Nombres y cargos de personas naturales." },
              { mono: "[OC_X]", body: "Números de orden de compra, proyecto o factura." },
              { mono: "[MONTO]", body: "Cifras sensibles: precios, márgenes, comisiones." },
              { mono: "[DATO_CONTACTO]", body: "Mails, teléfonos, direcciones." },
            ]},
            { t: "aforismo-mini", x: "Si lo que vas a pegar no lo pondrías en un correo a un tercero externo, no lo pongas en Copilot." },
          ],
        },
        {
          id: "L1.6",
          code: "L1.6",
          dur: "5 min",
          eyebrow: "Ejercicio · trampa consciente",
          title: "¿Cuántas cosas acabas de exponer?",
          kind: "trap",
          body: [
            { t: "p", x: "Abajo tienes un prompt realista que alguien escribió para que Copilot le ayude con el reporte mensual. **Identifica los 5 elementos sensibles** antes de ver la revelación." },
            { t: "prompt-raw", x: "Hola. Soy María González (RUT 15.432.198-7), jefa de finanzas de Constructora Andes SpA. Necesito un resumen ejecutivo del mes: ventas octubre fueron $ 482 MM (margen 18 %), el cliente más grande fue Minera Collahuasi con OC-2025-0411 por $ 120 MM. Nuestro principal contacto ahí es Pedro Ramírez (pedro.ramirez@collahuasi.cl). Comisión interna al vendedor: 2,5 %." },
            { t: "trap-reveal", items: [
              { tag: "RUT", text: "15.432.198-7 → dato personal, protegido por Ley 21.719" },
              { tag: "Cliente", text: "Constructora Andes SpA / Minera Collahuasi → razones sociales de terceros" },
              { tag: "OC", text: "OC-2025-0411 → referencia comercial interna" },
              { tag: "Monto", text: "$ 482 MM / $ 120 MM → cifras financieras no públicas" },
              { tag: "Contacto", text: "Pedro Ramírez + mail → dato personal de un tercero" },
            ]},
            { t: "callout", kind: "ok", head: "Versión anonimizada correcta", x: "Soy jefa de finanzas de [EMPRESA]. Resumen del mes: ventas [MONTO_VENTAS], margen [MARGEN %]. Cliente más grande [CLIENTE_001] con [OC_X] por [MONTO_OC]. Contacto principal [CONTACTO_1]. Comisión interna al vendedor: [%_COMISION]." },
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 1 · Fundamentos de seguridad",
        questions: [
          {
            stem: "El escudo verde en Copilot Chat Básico garantiza que:",
            options: [
              "Microsoft no puede leer nunca lo que escribes en el chat.",
              "Tus prompts no entrenan modelos públicos y se procesan en el tenant corporativo.",
              "Puedes pegar datos personales de clientes sin riesgo legal.",
              "Las búsquedas en Bing también quedan dentro del perímetro corporativo.",
            ],
            correct: 1,
            explain: "EDP garantiza que tus datos no entrenan modelos y se procesan bajo control del tenant. No te exime de la ley, y no cubre búsquedas web de Bing.",
          },
          {
            stem: "La Ley 21.719 entra en vigencia en Chile en diciembre de 2026. Respecto de Copilot:",
            options: [
              "Mientras uses el escudo verde no necesitas anonimizar.",
              "Solo aplica a empresas con más de 200 empleados.",
              "La empresa sigue siendo responsable del tratamiento de datos, aunque use IA.",
              "Los datos de clientes chilenos no aplican si el servidor está fuera de Chile.",
            ],
            correct: 2,
            explain: "La responsabilidad de tratamiento recae en la empresa independientemente del proveedor de IA. Siempre debes anonimizar antes de pegar.",
          },
          {
            stem: "¿Cuál de los siguientes puedes pegar tal cual en Copilot?",
            options: [
              "El nombre y RUT de tu mayor cliente.",
              "La lista de comisiones internas del equipo comercial.",
              "Un texto público del sitio web corporativo de tu empresa.",
              "La base de contactos con mails y teléfonos.",
            ],
            correct: 2,
            explain: "Información públicamente disponible (sitio web, regulaciones, notas de prensa) no requiere anonimización. Todo lo interno o de terceros, sí.",
          },
        ],
      },
      paraLlevar: [
        "Escudo verde = canal. Anonimizar = ley.",
        "Copilot Básico vive en m365.cloud.microsoft/chat.",
        "Placeholders estándar: úsalos siempre.",
      ],
      cliffhanger: "En el próximo bloque: por qué Copilot inventa cifras con total confianza, y cómo el framework CORE te protege de eso.",
      aforismo: "El escudo verde protege tus datos. Pero no protege tus decisiones.",
    },

    // =========================================================
    // BLOQUE 2
    // =========================================================
    {
      id: "b2",
      num: 2,
      title: "CORE · prompts que no alucinan",
      eyebrow: "Bloque 02 · 30 min",
      lede: "El framework CORE es el corazón pedagógico del curso: la estructura que convierte una pregunta vaga en un prompt que rinde.",
      badge: "5 lecciones · Quiz",
      lessons: [
        {
          id: "L2.1",
          code: "L2.1",
          dur: "5 min",
          eyebrow: "Evidencia",
          title: "La Frontera Irregular",
          body: [
            { t: "p", x: "**Dell'Acqua et al. (2023, Harvard Business School)** estudiaron 758 consultores de BCG usando IA generativa. El hallazgo fue contraintuitivo." },
            { t: "bignums", items: [
              { n: "+40%", l: "Productividad dentro de la frontera", c: "olive" },
              { n: "+25%", l: "Calidad dentro de la frontera", c: "marine" },
              { n: "−23%", l: "Rendimiento fuera de la frontera", c: "burgundy" },
            ]},
            { t: "compare", bad: {
              head: "Fuera de la frontera",
              items: [
                "Cálculos con datos financieros específicos de tu empresa",
                "Citar cifras recientes de la industria sin verificar",
                "Proyecciones que requieren contexto no escrito",
                "Decisiones estratégicas con información incompleta",
                "Cualquier cosa donde un error de 10% importe",
              ],
            }, good: {
              head: "Dentro de la frontera",
              items: [
                "Estructurar un reporte ejecutivo mensual",
                "Redactar hallazgos a partir de datos que tú pegaste",
                "Resumir reuniones y emails largos",
                "Traducir y pulir tono profesional",
                "Ideación y brainstorming inicial",
              ],
            }},
          ],
        },
        {
          id: "L2.2",
          code: "L2.2",
          dur: "10 min",
          eyebrow: "Framework central",
          title: "CORE · los 4 componentes",
          body: [
            { t: "core-chips" },
            { t: "grid2", items: [
              { chip: "c", letter: "C", title: "Contexto", body: "Quién eres, qué empresa, para quién redactas, qué sabes del destinatario y de la situación." },
              { chip: "o", letter: "O", title: "Objetivo", body: "Qué quieres **obtener al final**. No 'qué quieres que diga Copilot'; el entregable concreto." },
              { chip: "r", letter: "R", title: "Restricciones", body: "Largo, formato, lo que NO debe hacer, datos que no tiene, tono a evitar." },
              { chip: "e", letter: "E", title: "Expectativas", body: "Estructura esperada, estilo, ejemplo de respuesta deseada, criterios de calidad." },
            ]},
            { t: "prompt-core", title: "Ejemplo CORE aplicado al reporte mensual",
              lines: [
                { tag: "C", x: "Soy analista de control de gestión en una empresa mediana chilena. Preparo el reporte ejecutivo mensual que se presenta al comité el primer lunes." },
                { tag: "O", x: "Necesito un borrador de 'hallazgos clave' del mes a partir de los datos que te voy a pegar (anonimizados). Entregable: 5 bullets máx., cada uno con una frase de contexto y una implicancia." },
                { tag: "R", x: "No inventes cifras: usa solo las que están abajo. Español chileno formal. Máximo 120 palabras totales. No uses viñetas con emojis. No hagas proyecciones." },
                { tag: "E", x: "Formato: [MÉTRICA] · [VARIACIÓN] · [IMPLICANCIA]. Tono de comité ejecutivo: seco, claro, sin relleno. Evita frases como 'cabe destacar' o 'es importante mencionar'." },
              ],
            },
          ],
        },
        {
          id: "L2.3",
          code: "L2.3",
          dur: "5 min",
          eyebrow: "Comparativa",
          title: "Zero-shot vs CORE · el mismo caso",
          body: [
            { t: "compare", bad: {
              head: "Zero-shot (vago)",
              items: [
                "**Prompt:** 'Ayúdame con un resumen del mes para el comité.'",
                "**Respuesta típica:** párrafo genérico de 300 palabras, tono de blog, con la frase 'es fundamental destacar' al menos dos veces. Sirve para nada.",
              ],
            }, good: {
              head: "CORE (estructurado)",
              items: [
                "**Prompt:** el ejemplo de arriba con C-O-R-E etiquetados.",
                "**Respuesta típica:** 5 bullets en el formato pedido, sin cifras inventadas, listos para copiar a la plantilla del comité. Requiere ajuste menor.",
              ],
            }},
            { t: "callout", kind: "tip", head: "Lo que acabas de hacer", x: "Bajaste el costo de corrección. CORE no te hace escribir más: te hace corregir menos después." },
          ],
        },
        {
          id: "L2.4",
          code: "L2.4",
          dur: "5 min",
          eyebrow: "Técnica complementaria",
          title: "Role prompting sobre CORE",
          body: [
            { t: "p", x: "Antes del Contexto, añades un **rol experto**. Funciona porque el modelo ajusta su estilo de razonamiento al rol." },
            { t: "prompt-core", title: "Role + CORE",
              lines: [
                { tag: "Rol", x: "Eres un analista senior de control de gestión con 15 años de experiencia en empresas chilenas medianas. Tu escritura es seca y directiva, al estilo de un informe a directorio." },
                { tag: "C", x: "Soy el analista que prepara el reporte mensual..." },
                { tag: "O", x: "Resumen ejecutivo de 5 bullets..." },
                { tag: "R", x: "Sin cifras inventadas, 120 palabras máx..." },
                { tag: "E", x: "Formato tabla · tono de directorio..." },
              ],
            },
            { t: "callout", kind: "nota", head: "Cuándo aplicarlo", x: "En tareas donde el **tono profesional** es lo que más cuesta. Para tareas mecánicas de resumen, CORE solo basta." },
          ],
        },
        {
          id: "L2.5",
          code: "L2.5",
          dur: "5 min",
          eyebrow: "Ejercicio guiado",
          title: "Escribe tu primer prompt CORE",
          kind: "exercise",
          body: [
            { t: "p", x: "Piensa en una variante real de tu reporte mensual (o el último que hiciste, anonimizado). Escribe un prompt CORE en la caja de abajo. Luego autoevalúa con la rúbrica." },
            { t: "exercise-textarea" },
            { t: "rubric", items: [
              { letter: "C", label: "Contexto claro", sub: "Rol, empresa, destinatario" },
              { letter: "O", label: "Objetivo específico", sub: "Entregable concreto" },
              { letter: "R", label: "Restricciones explícitas", sub: "Largo, formato, qué NO" },
              { letter: "E", label: "Expectativas de forma", sub: "Estructura, tono, ejemplo" },
            ]},
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 2 · Framework CORE",
        questions: [
          {
            stem: "Lee este prompt: 'Eres analista financiero. Resume el mes en 5 bullets. Sin inventar cifras.' ¿Qué letra de CORE falta más claramente?",
            options: [
              "C · Contexto",
              "O · Objetivo",
              "R · Restricciones",
              "E · Expectativas (formato, tono, estructura)",
            ],
            correct: 3,
            explain: "Hay rol (C parcial), objetivo (O) y restricción (R). Falta E: qué formato, qué tono, qué estructura deseas. Sin E, el modelo inventa el formato.",
          },
          {
            stem: "La Frontera Irregular de Dell'Acqua et al. (2023) muestra que:",
            options: [
              "La IA siempre aumenta la productividad en un 40%.",
              "Dentro de la frontera sube calidad y productividad; fuera, baja el rendimiento un 23%.",
              "Los consultores con IA superan siempre a los sin IA.",
              "La IA solo funciona para tareas creativas.",
            ],
            correct: 1,
            explain: "El hallazgo clave es que usar IA fuera de su dominio resta, no suma. Saber dónde estás parado es más importante que saber prompts.",
          },
          {
            stem: "¿Cuándo agregar role prompting encima de CORE?",
            options: [
              "Siempre, cuanto más detalle mejor.",
              "Cuando el tono profesional es lo difícil de la tarea.",
              "Solo para tareas de traducción.",
              "Cuando Copilot se niegue a responder.",
            ],
            correct: 1,
            explain: "El role prompting aporta cuando el reto es el estilo (comité ejecutivo, memo directorio). Para resumir o estructurar, CORE solo basta.",
          },
        ],
      },
      paraLlevar: [
        "CORE = Contexto, Objetivo, Restricciones, Expectativas.",
        "Dentro de la frontera: +40%. Fuera: −23%.",
        "Role prompting solo cuando el tono sea el reto.",
      ],
      cliffhanger: "Con CORE ya no alucinas el input. En el próximo bloque, cómo evitar que Copilot alucine el output — incluso en tareas con números.",
      aforismo: "Un prompt sin CORE es una pregunta sin coordenadas.",
    },

    // =========================================================
    // BLOQUE 3
    // =========================================================
    {
      id: "b3",
      num: 3,
      title: "Técnicas avanzadas y el chat completo",
      eyebrow: "Bloque 03 · 30 min",
      lede: "Ya dominas CORE. Agregamos las otras 3 técnicas de prompt engineering y todas las features del chat que aún no viste.",
      badge: "7 lecciones · Quiz",
      lessons: [
        {
          id: "L3.1",
          code: "L3.1",
          dur: "4 min",
          eyebrow: "Técnica · Few-shot",
          title: "Enseñar por ejemplos, no por reglas",
          body: [
            { t: "p", x: "En vez de definir la regla, le das al modelo **3 ejemplos etiquetados** y deduce el patrón. Funciona muy bien para clasificaciones y formatos repetitivos." },
            { t: "prompt-core", title: "Few-shot: clasificar temas del reporte mensual",
              lines: [
                { tag: "C", x: "Soy analista; recibo correos del negocio que debo clasificar antes de armar el reporte." },
                { tag: "O", x: "Clasifica cada correo en: VENTAS · OPERACIONES · RRHH · FINANZAS." },
                { tag: "Ej 1", x: "'Cliente pidió ampliar crédito a 60 días' → VENTAS" },
                { tag: "Ej 2", x: "'Se rompió el equipo 3 de la planta norte' → OPERACIONES" },
                { tag: "Ej 3", x: "'Renuncia de Juan de contabilidad' → RRHH" },
                { tag: "E", x: "Devuelve solo la categoría en mayúsculas, una por línea." },
              ],
            },
          ],
        },
        {
          id: "L3.2",
          code: "L3.2",
          dur: "4 min",
          eyebrow: "Técnica · Chain-of-thought",
          title: "Piensa paso a paso",
          body: [
            { t: "bignums", items: [
              { n: "58%", l: "Precisión sin CoT", c: "burgundy" },
              { n: "93%", l: "Precisión con CoT", c: "olive" },
            ]},
            { t: "p", x: "**Wei et al. (2022)** mostraron que añadir 'piensa paso a paso' sube drásticamente la precisión en razonamiento lógico. En el reporte mensual, úsalo para cálculos compuestos: variaciones %, ratios, descomposiciones." },
            { t: "prompt-core", title: "CoT aplicado a variación de ventas",
              lines: [
                { tag: "C", x: "Tengo ventas [MONTO_OCT] y [MONTO_SEP]. Mix por línea abajo." },
                { tag: "O", x: "Variación mes contra mes y cuánto explica cada línea." },
                { tag: "R", x: "No inventes datos. Usa solo lo pegado." },
                { tag: "CoT", x: "Piensa paso a paso: (1) calcula variación total, (2) variación por línea, (3) peso relativo, (4) resume en una frase." },
              ],
            },
          ],
        },
        {
          id: "L3.3",
          code: "L3.3",
          dur: "4 min",
          eyebrow: "Técnica · Self-critique",
          title: "El modelo como su propio auditor",
          body: [
            { t: "p", x: "Flujo de tres pasos. Baja fuerte las alucinaciones porque obliga al modelo a explicitar supuestos." },
            { t: "grid3", items: [
              { title: "1 · Generar", body: "Prompt CORE normal. Recibes la primera respuesta." },
              { title: "2 · Criticar", body: "'¿Qué supuestos hiciste? ¿Qué cifra podría ser inventada? ¿Dónde hay riesgo de error?'" },
              { title: "3 · Mejorar", body: "'Reescribe corrigiendo esos supuestos y marcando los datos que yo debería verificar.'" },
            ]},
            { t: "callout", kind: "ok", head: "Cuándo usar", x: "Siempre que el entregable salga de tus manos hacia arriba: comités, directorio, cliente externo." },
          ],
        },
        {
          id: "L3.4",
          code: "L3.4",
          dur: "5 min",
          eyebrow: "UI del chat",
          title: "Selector de modos",
          body: [
            { t: "grid4", items: [
              { title: "Automático", body: "Default diario. 90% de los casos." },
              { title: "Respuesta rápida", body: "Tareas simples. Resúmenes, reformulaciones." },
              { title: "Pensar más profundo", body: "Razonamiento extendido. CoT complejo, números, análisis." },
              { title: "Buscar", body: "Fuerza búsqueda web con citas. Fuera de EDP." },
            ]},
            { t: "callout", kind: "tip", head: "Regla de bolsillo", x: "90% Automático. Pensar más profundo cuando lo anterior salió pobre. Buscar para información que cambia rápido." },
          ],
        },
        {
          id: "L3.5",
          code: "L3.5",
          dur: "7 min",
          eyebrow: "UI del chat",
          title: "Subir archivos",
          body: [
            { t: "bignums", items: [
              { n: "512 MB", l: "Tamaño máx. por archivo", c: "marine" },
              { n: "3–10", l: "Archivos por día (aprox.)", c: "burgundy" },
            ]},
            { t: "compare", bad: {
              head: "Lee mal",
              items: ["PDFs escaneados sin OCR", "Tablas con celdas fusionadas", "Hojas con macros pesadas", "Imágenes dentro del PDF"],
            }, good: {
              head: "Lee bien",
              items: ["XLSX con tabla plana", "CSV anonimizado", "DOCX con encabezados claros", "Archivos Markdown (MD)"],
            }},
            { t: "callout", kind: "alert", head: "Antes de subir", x: "Anonimiza el archivo primero. Placeholders como [CLIENTE_001] en la columna de clientes, [MONTO] en la de cifras sensibles si corresponde." },
          ],
        },
        {
          id: "L3.6",
          code: "L3.6",
          dur: "3 min",
          eyebrow: "UI del chat",
          title: "Generar imágenes · cuándo tiene sentido",
          body: [
            { t: "compare", good: {
              head: "Sí conviene",
              items: ["Infografías internas", "Banners para comunicación", "Mockups rápidos de una slide", "Ilustraciones abstractas para reportes"],
            }, bad: {
              head: "NO usar",
              items: ["Renders técnicos o planos", "Documentos oficiales", "Cualquier cosa con precisión métrica", "Gráficos con cifras reales (usa Excel/PBI)"],
            }},
            { t: "callout", kind: "nota", head: "Cupo aproximado", x: "Entre 1 y 15 imágenes por día según cuenta. Verifica en la documentación oficial de Microsoft para tu tenant." },
          ],
        },
        {
          id: "L3.7",
          code: "L3.7",
          dur: "3 min",
          eyebrow: "Ejercicio integrador",
          title: "¿Qué técnica? ¿Qué modo?",
          kind: "matcher",
          body: [
            { t: "matcher", items: [
              {
                task: "Clasificar 40 tickets del mes en 4 categorías para el reporte.",
                options: ["Few-shot + Automático", "Chain-of-thought + Pensar más profundo", "Self-critique + Buscar"],
                correct: 0,
                explain: "Patrón repetitivo con 3 ejemplos basta. Tarea simple, modo automático.",
              },
              {
                task: "Calcular la variación de margen y descomponerla por línea de negocio.",
                options: ["Few-shot + Automático", "Chain-of-thought + Pensar más profundo", "Self-critique + Buscar"],
                correct: 1,
                explain: "Cálculo compuesto con razonamiento numérico. CoT + modo profundo reduce error aritmético.",
              },
              {
                task: "Redactar la carta de introducción del reporte que verá el directorio.",
                options: ["Few-shot + Automático", "Chain-of-thought + Pensar más profundo", "Self-critique + Buscar"],
                correct: 2,
                explain: "Alto stake, salida a directorio. Self-critique para cazar supuestos débiles antes de enviar.",
              },
            ]},
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 3 · Técnicas avanzadas",
        questions: [
          {
            stem: "Para una tarea de clasificar 50 correos en 4 categorías, la técnica más eficiente es:",
            options: [
              "Chain-of-thought paso a paso.",
              "Few-shot con 3 ejemplos etiquetados.",
              "Self-critique en cada correo.",
              "Generar una imagen con las categorías.",
            ],
            correct: 1,
            explain: "Patrón repetitivo y formato claro: few-shot aprende el patrón con 3 ejemplos y aplica al resto sin fricción.",
          },
          {
            stem: "¿Cuándo activar 'Pensar más profundo'?",
            options: [
              "Siempre, para mayor calidad.",
              "Nunca, gasta cuota diaria.",
              "Cuando necesites razonamiento numérico o el modo Automático salió pobre.",
              "Solo cuando subes archivos.",
            ],
            correct: 2,
            explain: "Es para cálculos compuestos, razonamiento estructurado, o rescatar una respuesta débil del modo Automático.",
          },
          {
            stem: "¿Qué NO debes hacer con generación de imágenes?",
            options: [
              "Crear infografías internas.",
              "Hacer mockups de un banner.",
              "Reemplazar un gráfico técnico con cifras reales del reporte.",
              "Ilustrar un concepto abstracto.",
            ],
            correct: 2,
            explain: "Imágenes generadas NO son fuente de verdad numérica. Usa Excel o Power BI para gráficos con datos reales.",
          },
        ],
      },
      paraLlevar: [
        "Few-shot para patrón, CoT para cálculo, Self-critique para alto stake.",
        "90% Automático. Profundo cuando Automático falle.",
        "Subir archivos: anonimiza antes, lee tablas planas.",
      ],
      cliffhanger: "Sabes redactar prompts perfectos. ¿Qué pasa cuando el lunes necesitas el mismo contexto que cargaste hoy? Siguiente: memoria, colaboración y agentes.",
      aforismo: "Pensar más profundo no es más lento. Es más barato que corregir después.",
    },

    // =========================================================
    // BLOQUE 4
    // =========================================================
    {
      id: "b4",
      num: 4,
      title: "Biblioteca, Páginas y Agentes",
      eyebrow: "Bloque 04 · 30 min",
      lede: "Cierre con features de equipo y persistencia. Lo diferenciador: construyes un agente simple en vivo y te lo llevas al final.",
      badge: "4 lecciones · Quiz",
      lessons: [
        {
          id: "L4.1",
          code: "L4.1",
          dur: "7 min",
          eyebrow: "Colaboración",
          title: "Biblioteca y Páginas",
          body: [
            { t: "p", x: "**Páginas** es un lienzo colaborativo multiusuario. El flujo canónico: prompt en chat → botón 'Editar en Páginas' → chat a la izquierda, Página a la derecha → compartir link con el equipo." },
            { t: "schema", label: "Layout de Páginas", parts: [
              { kind: "topbar" },
              { kind: "row", items: [
                { box: "Chat (izquierda)", width: 1 },
                { box: "Página editable (derecha)", highlight: true, width: 2 },
              ]},
              { kind: "row", items: [
                { box: "Compartir link · coautoría" },
              ]},
            ]},
            { t: "callout", kind: "tip", head: "Ejemplos útiles para reportes", x: "Plantilla reutilizable del reporte mensual · Minuta del comité con acciones · Checklist de cierre contable compartido." },
          ],
        },
        {
          id: "L4.2",
          code: "L4.2",
          dur: "5 min",
          eyebrow: "Memoria",
          title: "Personalización · 'Enseñar'",
          body: [
            { t: "p", x: "Dejas cargado tu perfil profesional una vez. Copilot no te vuelve a preguntar quién eres, qué haces, qué tono usas." },
            { t: "compare", good: {
              head: "Sí poner",
              items: ["Cargo y área funcional", "Tipo de empresa e industria", "Tono preferido (formal chileno, memo directorio)", "Idiomas de trabajo"],
            }, bad: {
              head: "NO poner nunca",
              items: ["Datos sensibles de terceros", "Precios o márgenes confidenciales", "Comisiones internas", "Proyectos bajo NDA"],
            }},
          ],
        },
        {
          id: "L4.3",
          code: "L4.3",
          dur: "5 min",
          eyebrow: "Feature sorpresa",
          title: "Agent Builder · gratis",
          body: [
            { t: "p", x: "**Sí, Agent Builder funciona en Copilot Chat Básico.** Los límites son razonables para empezar." },
            { t: "grid2", items: [
              { title: "Sí puede", body: "Instrucciones fijas · hasta 4 URLs públicas de conocimiento · prompts de inicio · imagen · intérprete de código básico." },
              { title: "No puede", body: "Leer SharePoint · leer tu correo · acceder a datos del tenant · usar fuentes privadas." },
            ]},
          ],
        },
        {
          id: "L4.4",
          code: "L4.4",
          dur: "8 min",
          eyebrow: "En vivo",
          title: "Construcción guiada · Asistente de reporte mensual",
          body: [
            { t: "agent-steps", steps: [
              { n: "1", title: "Nombre e ícono", body: "Asistente de Reporte Mensual · ícono de documento." },
              { n: "2", title: "Descripción (≤ 1000 car.)", body: "Asistente que ayuda a estructurar, redactar y revisar el reporte ejecutivo mensual siguiendo el framework CORE. Anonimiza antes de pegar datos. Responde en español chileno formal." },
              { n: "3", title: "Instrucciones CORE (≤ 8000 car.)", body: "Rol: analista senior de control de gestión. Objetivo: producir borradores de secciones del reporte (hallazgos, explicación de varianzas, recomendaciones). Restricciones: no inventar cifras; pedir al usuario la fuente; usar placeholders cuando detecte datos sensibles. Expectativas: formato de comité, máximo 120 palabras por sección, tono seco." },
              { n: "4", title: "URLs de conocimiento (hasta 4)", body: "Sitio corporativo · glosario público de KPIs · normativa SII pública · calendario tributario. Solo fuentes públicas." },
              { n: "5", title: "Prompts de inicio (hasta 10)", body: "'Ayúdame a armar la sección de hallazgos' · 'Revisa este borrador con self-critique' · 'Clasifica estos pendientes por área' · 'Genera preguntas para el comité' ..." },
            ]},
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 4 · Biblioteca, Páginas y Agentes",
        questions: [
          {
            stem: "Un agente construido con Agent Builder en Copilot Básico puede:",
            options: [
              "Leer tu bandeja de entrada de Outlook.",
              "Acceder a carpetas de SharePoint del equipo.",
              "Usar hasta 4 URLs públicas como conocimiento.",
              "Consultar directamente la base de datos del ERP.",
            ],
            correct: 2,
            explain: "Agent Builder en la versión gratuita NO accede al tenant. Solo URLs públicas, instrucciones e intérprete básico.",
          },
          {
            stem: "En Personalización ('Enseñar') de Copilot, ¿qué NO debes cargar?",
            options: [
              "Tu cargo y área funcional.",
              "El tono formal chileno que prefieres.",
              "Los márgenes y comisiones internas del equipo.",
              "Los idiomas en los que trabajas.",
            ],
            correct: 2,
            explain: "Personalización queda persistida en tu perfil. No cargues datos comerciales sensibles; cárgate a ti, no a tu empresa.",
          },
          {
            stem: "Páginas (en Copilot) sirve principalmente para:",
            options: [
              "Almacenar archivos subidos al chat.",
              "Colaborar multiusuario sobre un lienzo editable vinculado al chat.",
              "Reemplazar SharePoint dentro del tenant.",
              "Ejecutar agentes automáticamente.",
            ],
            correct: 1,
            explain: "Páginas es el lienzo colaborativo: chat a la izquierda, documento a la derecha, compartible por link.",
          },
        ],
      },
      paraLlevar: [
        "Páginas = lienzo colaborativo; Personalización = tu perfil.",
        "Agent Builder gratis: 4 URLs públicas, sin datos del tenant.",
        "Construye tu primer agente con CORE en las instrucciones.",
      ],
      cliffhanger: "",
      aforismo: "Copilot no reemplaza al profesional que piensa. Reemplaza al que no quiso aprender a pensar con él.",
    },
  ],
};
