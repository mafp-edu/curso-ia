// Contenido pedagógico del curso
// Caso ancla: preparar reportes ejecutivos mensuales
// Audiencia: profesional adulto chileno genérico, no técnico

window.COURSE_DATA = {
  meta: {
    audiencia: "Profesionales | Chile",
    caso: "Reportes ejecutivos mensuales",
    duracionMin: 170, // referencial; la app suma los minutos indicados en el rótulo de cada bloque
    totalBloques: 6,
  },
  blocks: [
    // =========================================================
    // BLOQUE 0 | Fundamentos: qué hace (y qué no) un LLM
    // =========================================================
    {
      id: "b0",
      num: 0,
      title: "Antes de Copilot | qué predice y qué no",
      eyebrow: "Bloque 00 | 20 min",
      lede: "Fundamento conceptual y económico. Qué es un LLM, por qué inventa datos y por qué el juicio humano gana valor cuando la predicción se abarata.",
      badge: "4 lecciones | Quiz",
      lessons: [
        {
          id: "L0.1",
          code: "L0.1",
          dur: "4 min",
          eyebrow: "Mapa",
          title: "Zoológico de la IA | tres familias",
          body: [
            { t: "p", x: "Antes de usar Copilot, ubica dónde estás parado. No toda la IA es lo mismo. Te sirven tres categorías simples." },
            { t: "grid3", items: [
              { title: "IA predictiva clásica", body: "Scoring crediticio, detección de fraude, recomendadores. Predice categorías o números a partir de datos estructurados." },
              { title: "IA generativa (LLMs)", body: "Copilot, ChatGPT, Claude. Predice el siguiente token de texto. Produce lenguaje plausible, no verdad verificada." },
              { title: "IA agéntica", body: "LLM + herramientas + memoria. Ejecuta acciones, no solo responde. Agent Builder apunta hacia acá." },
            ]},
            { t: "callout", kind: "nota", head: "Dónde vive Copilot", x: "Copilot Chat Básico es IA generativa. El Agent Builder que verás en el Bloque 4 es un primer paso hacia la IA agéntica. Saberlo te ayuda a ajustar expectativas." },
          ],
        },
        {
          id: "L0.2",
          code: "L0.2",
          dur: "6 min",
          eyebrow: "Mecánica",
          title: "Qué hace un LLM | el ejemplo de la capital",
          body: [
            { t: "p", x: "Definición operativa, sin tecnicismos: un LLM es un **autocompletador a escala industrial**, entrenado con billones de tokens de texto (un token es un trozo de palabra). Con todo lo que tiene escrito hasta ese momento, predice el **siguiente token más probable**, y repite el proceso hasta completar la respuesta." },
            { t: "bignums", items: [
              { n: "1", l: "Token predicho en cada paso", c: "burgundy" },
              { n: "15 billones", l: "Tokens de entrenamiento de Llama 3", c: "marine", fs: 52 },
              { n: "0", l: "Fuentes que consulta el modelo por sí solo, sin búsqueda ni archivos", c: "olive" },
            ]},
            { t: "src", x: "Fuente de la cifra: Meta, [«Introducing Meta Llama 3»](https://ai.meta.com/blog/meta-llama-3/), 18 de abril de 2024 («pretrained on over 15T tokens»). En inglés se dice *15 trillion*; en español son 15 billones (15 × 10¹²). Los modelos más recientes publican poco sobre este dato; tómalo como orden de magnitud." },
            { t: "p", x: "**Experimento mental.** Imagina que le preguntas a un LLM: *¿cuál es el capital de Chile?* La pregunta tiene un juego intencional. «La capital» (femenino) es la ciudad sede del gobierno; «el capital» (masculino) son los recursos económicos de un país, como el dinero, las materias primas o la gente preparada. Aprieta el botón y observa qué responde. Después veremos por qué." },
            { t: "llm-sim",
              user: "¿Cuál es el capital de Chile?",
              answer: "Santiago.",
              reveals: [
                { head: "Lo que acaba de pasar",
                  x: "En esta simulación, el modelo leyó *«capital de Chile»* y completó con la continuación más frecuente en los textos con que se entrenó: **Santiago**. No consultó ninguna fuente ni se detuvo en el artículo «el». Eligió la respuesta más probable." },
                { head: "Lo que habría respondido una persona atenta",
                  x: "Alguien que lee con cuidado nota el «el» y puede responder **cobre** (el principal recurso exportador del país) o **capital humano** (la fuerza de trabajo y su formación). La palabra *capital* tiene varias acepciones y la persona **elige una según el contexto y la intención** de quien pregunta." },
                { head: "La lección",
                  x: "Un LLM predice la **continuación más probable**. Si la pregunta es ambigua y no trae contexto, se va a la interpretación más común. Los modelos actuales a veces piden una aclaración, pero no conviene contar con eso. Por eso la **C de CORE**, que verás en el Bloque 2, es Contexto: le entregas el marco que evita la respuesta genérica." },
                { head: "Por qué importa para tu reporte",
                  x: "Cuando Copilot inventa una cifra, actúa el mismo mecanismo que produjo «Santiago»: elige un número que *suena correcto*. Que algo sea plausible no lo hace verdadero, y tu juicio es el filtro." },
              ],
            },
          ],
        },
        {
          id: "L0.3",
          code: "L0.3",
          dur: "5 min",
          eyebrow: "Caso real",
          title: "Apple Card | la sospecha de sesgo y lo que mostró la investigación",
          body: [
            { t: "p", x: "**Noviembre de 2019.** David Heinemeier Hansson, creador de Ruby on Rails, denunció en Twitter que la Apple Card (emitida por Goldman Sachs) le había dado un cupo **20 veces mayor** que a su esposa, aunque declaraban impuestos en conjunto. Steve Wozniak contó que a él le habían dado 10 veces el cupo de su esposa. Goldman respondió que no tomaba decisiones según el género, y el regulador financiero de Nueva York (NYDFS) abrió una investigación." },
            { t: "bignums", items: [
              { n: "20×", l: "Diferencia de cupo que denunció Hansson", c: "burgundy" },
              { n: "~400.000", l: "Solicitudes analizadas por el NYDFS", c: "marine", fs: 56 },
              { n: "0", l: "Infracciones a la ley de crédito justo encontradas", c: "olive" },
            ]},
            { t: "callout", kind: "nota", head: "El desenlace (marzo de 2021)", x: "El NYDFS concluyó que **no hubo discriminación ilegal**, ni intencional ni por impacto dispar. Las diferencias se explicaban por historiales de crédito individuales: por ejemplo, un cónyuge figuraba en la hipoteca y el otro no, o uno era solo usuario adicional de las tarjetas del otro. El informe agregó una advertencia: la puntuación de crédito, aun siendo legal, puede reflejar y perpetuar desigualdades históricas (*legacy bias*)." },
            { t: "src", x: "Fuentes: MacRumors, [«Regulators Looking Into Claims of Gender Discrimination in Apple Card Credit Decisions»](https://www.macrumors.com/2019/11/10/apple-card-gender-discrimination/), 10-nov-2019; NYDFS, [*Report on Apple Card Investigation*](https://s3.documentcloud.org/documents/20521283/rpt_202103_apple_card_investigation.pdf), marzo de 2021." },
            { t: "p", x: "**Lección para el alumno.** El caso deja dos enseñanzas. La primera: que un modelo no use una variable (aquí, el género) no basta para descartar diferencias, porque los datos históricos pueden traerlas por otras vías; hay que revisar los resultados con datos. La segunda: la acusación viral circuló mucho más rápido que la evidencia, y la investigación no la confirmó. Los LLM heredan patrones, sesgos y errores comunes de los textos con que se entrenaron, y una conclusión que suena convincente también necesita verificación." },
            { t: "callout", kind: "nota", head: "Puente a Copilot", x: "Cuando Copilot te sugiera una redacción que suena a consultor genérico, o un hallazgo que parece obvio, recuerda que está promediando miles de textos parecidos. Tu aporte profesional está en lo que ese promedio **no** produce." },
          ],
        },
        {
          id: "L0.4",
          code: "L0.4",
          dur: "5 min",
          eyebrow: "Economía",
          title: "Prediction Machines | por qué tu juicio vale más",
          body: [
            { t: "p", x: "**Agrawal, Gans y Goldfarb** (*Prediction Machines*, Harvard Business Review Press, 2018) proponen leer el avance de la IA como **una caída en el costo de la predicción**. De ahí sacan tres consecuencias económicas." },
            { t: "bignums", items: [
              { n: "↓", l: "Costo de predecir", c: "olive" },
              { n: "↑", l: "Usos de la predicción", c: "marine" },
              { n: "↑↑", l: "Valor del juicio humano", c: "burgundy" },
            ]},
            { t: "grid3", items: [
              { title: "1 | Usas más predicción", body: "Tareas que antes no delegabas (clasificar 200 correos, resumir 50 páginas) ahora se pueden delegar, porque predecir cuesta poco." },
              { title: "2 | Aparecen usos nuevos", body: "Cosas que antes no compensaban (un borrador por escenario, diez variantes de un título) ahora valen la pena." },
              { title: "3 | Los complementos suben", body: "Lo que **no** es predicción, como el juicio o decidir qué decirle al directorio, pasa a ser el cuello de botella y gana valor." },
            ]},
            { t: "src", x: "Fuente: Agrawal, Gans y Goldfarb, *Prediction Machines: The Simple Economics of Artificial Intelligence*, Harvard Business Review Press, abril de 2018. La descripción oficial del libro habla de «a drop in the cost of prediction»." },
            { t: "p", x: "Aplicado al reporte mensual: antes solo delegabas el formato. Ahora puedes delegar el primer borrador, la clasificación masiva y el resumen de correos. El **juicio sobre qué significa cada hallazgo para la empresa sigue siendo tuyo**, y ahí está el ahorro real de horas." },
            { t: "aforismo-mini", x: "La predicción se abarató; el juicio sigue siendo caro." },
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 0 | Fundamentos",
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
            explain: "Un LLM predice token a token la continuación más probable. Por sí solo no consulta bases de datos ni verifica, y por eso puede inventar con total seguridad.",
          },
          {
            stem: "El caso Apple Card enseña que:",
            options: [
              "Un algoritmo que no usa la variable sensible es neutral por definición.",
              "Goldman Sachs programó deliberadamente un sesgo de género.",
              "Excluir la variable sensible no basta para descartar diferencias: hay que revisar datos y resultados, como hizo el regulador.",
              "El regulador confirmó la discriminación y multó al banco.",
            ],
            correct: 2,
            explain: "El NYDFS analizó cerca de 400.000 solicitudes y en 2021 no encontró discriminación ilegal: las diferencias venían de historiales de crédito distintos. Advirtió, eso sí, que los datos históricos pueden arrastrar sesgos. La conclusión salió de mirar datos, sin suponer neutralidad ni culpa de antemano.",
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
            explain: "Cuando un insumo baja de precio, su complemento sube de valor. La máquina predice; el juicio sobre qué hacer con esa predicción sigue siendo tuyo.",
          },
        ],
      },
      paraLlevar: [
        "Un LLM es un autocompletador: predice la respuesta y no la verifica.",
        "Sin contexto, se va a la interpretación más común.",
        "Predicción barata, juicio humano más valioso.",
      ],
      cliffhanger: "Si vas a delegar predicción, cuida no filtrar datos sensibles por accidente. El próximo bloque trata de tu primer chat seguro.",
      aforismo: "La IA predice «Santiago». Tú decides si hablamos de geografía o de cobre.",
    },

    // =========================================================
    // BLOQUE 1
    // =========================================================
    {
      id: "b1",
      num: 1,
      title: "Tu primer chat seguro",
      eyebrow: "Bloque 01 | 20 min",
      lede: "Seguridad antes de escribir tu primer prompt. El escudo verde, la protección de datos empresarial y la anonimización son la base.",
      badge: "6 lecciones | Quiz",
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
            { t: "callout", kind: "nota", head: "Reflexión", x: "Todavía no hay respuesta correcta. Retén tu primera reacción; en las próximas lecciones vamos a separar qué parte es prudencia y qué parte es mito." },
          ],
        },
        {
          id: "L1.2",
          code: "L1.2",
          dur: "4 min",
          eyebrow: "Qué es",
          title: "Copilot Chat Básico, en una página",
          body: [
            { t: "p", x: "Microsoft lo llama hoy **Copilot Chat (Basic)**; en este curso le decimos Copilot Chat Básico." },
            { t: "grid3", items: [
              { title: "Incluido, sin licencia extra", body: "Viene con las licencias Microsoft 365 elegibles de tu empresa. No requiere la licencia pagada Microsoft 365 Copilot." },
              { title: "Con tu cuenta del trabajo", body: "Se usa iniciando sesión con la cuenta corporativa (Microsoft Entra). Si entras con una cuenta personal (Hotmail, Outlook.com), no tienes la protección de datos empresarial." },
              { title: "Dónde vive", body: "En **copilot.cloud.microsoft** (antes m365.cloud.microsoft/chat), en la app Microsoft Copilot, en Edge y dentro de Outlook y Teams." },
            ]},
            { t: "src", x: "Fuente: Microsoft Learn, [«Microsoft Copilot Chat overview»](https://learn.microsoft.com/copilot/overview), actualizado el 17-nov-2026. Microsoft cambia nombres y direcciones con frecuencia; revisa la página si algo no calza." },
            { t: "schema", label: "Esquema ilustrativo del escudo verde", parts: [
              { kind: "topbar" },
              { kind: "row", items: [
                { box: "Nuevo chat" },
                { box: "Escudo verde ▲", highlight: true },
                { box: "Lienzo de chat", width: 2 },
              ]},
              { kind: "row", items: [
                { box: "Caja de prompt | «Escribe aquí...»" },
              ]},
              { arrow: "↑ Parte superior, junto al botón de nuevo chat: protección de datos empresarial activa" },
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
            { t: "p", x: "Enterprise Data Protection (EDP) es el conjunto de compromisos contractuales de Microsoft sobre los datos de tu empresa en Copilot Chat. Microsoft actúa como encargado del tratamiento, bajo el anexo de protección de datos (DPA) y los términos de producto, sin costo adicional." },
            { t: "bignums", items: [
              { n: "0", l: "Prompts y respuestas usados para entrenar los modelos", c: "olive" },
            ]},
            { t: "compare", bad: {
              head: "Queda fuera de EDP",
              items: [
                "Las consultas web que Copilot envía a Bing. Se rigen por el contrato de servicios de Microsoft y su declaración de privacidad; van sin identificadores de usuario ni de empresa.",
                "Lo que escribas usando una cuenta personal en vez de la del trabajo.",
              ],
            }, good: {
              head: "Cubre EDP",
              items: [
                "Tus prompts y las respuestas de Copilot.",
                "Su registro para auditoría, eDiscovery y políticas de retención de tu empresa.",
                "El compromiso de que no se usan para entrenar los modelos.",
              ],
            }},
            { t: "callout", kind: "tip", head: "Regla simple", x: "El escudo verde indica que tu conversación está bajo EDP. Copilot Chat (Basic) se apoya sobre todo en la web y puede enviar consultas a Bing por su cuenta, sin que actives nada; esas consultas quedan fuera de EDP. Por eso la anonimización se aplica siempre." },
            { t: "src", x: "Fuente: Microsoft Learn, [«Enterprise data protection in Microsoft 365 Copilot and Microsoft 365 Copilot Chat»](https://learn.microsoft.com/en-us/copilot/privacy-and-protections), actualizado el 3-nov-2026." },
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
              { n: "2027", l: "Vigencia prevista tras la postergación (15 de octubre)", c: "burgundy" },
              { n: "20.000", l: "UTM de multa máxima (más en caso de reincidencia)", c: "marine" },
              { n: "GDPR", l: "Estándar europeo de referencia", c: "olive" },
            ]},
            { t: "p", x: "La Ley 21.719 se publicó el 13 de diciembre de 2024 y debía entrar en vigencia el 1 de diciembre de 2026. El 17 de noviembre de 2026 el Congreso despachó un proyecto que la posterga al **15 de octubre de 2027**; al cierre de esta revisión (20-nov-2026) faltaba su publicación en el Diario Oficial. Confirma la fecha vigente antes de citarla." },
            { t: "src", x: "Fuentes: Aninat Abogados, [«Congreso aprueba postergar la entrada en vigencia de la Ley N°21.719...»](https://aninat.cl/noticias-insights/alerta-legal-congreso-aprueba-postergar-la-entrada-en-vigencia-de-la-ley-n21-719-de-datos-personales-hasta-el-15-de-octubre-de-2027/), 17-nov-2026; Usercentrics, [«Ley de protección de datos en Chile»](https://usercentrics.com/es/knowledge-hub/ley-proteccion-datos-chile/), consultado el 20-nov-2026 (fecha de publicación y multas)." },
            { t: "p", x: "La **empresa es responsable** del tratamiento de los datos personales. Pegar información identificable de un cliente sin anonimizar en cualquier herramienta, Copilot incluido, compromete a la organización. La postergación da más plazo, pero el buen hábito conviene desde hoy." },
            { t: "callout", kind: "alert", head: "Implicancia directa", x: "El escudo verde protege el canal y no te exime del deber de anonimizar. Son capas distintas, una técnica y otra legal." },
          ],
        },
        {
          id: "L1.5",
          code: "L1.5",
          dur: "2 min",
          eyebrow: "Disciplina operativa",
          title: "Marcadores estándar de anonimización",
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
          eyebrow: "Ejercicio | trampa consciente",
          title: "¿Cuántas cosas acabas de exponer?",
          kind: "trap",
          body: [
            { t: "p", x: "Abajo tienes un prompt realista que alguien escribió para que Copilot le ayude con el reporte mensual. **Identifica los 5 elementos sensibles** antes de ver la revelación." },
            { t: "prompt-raw", x: "Hola. Soy María González (RUT 11.111.111-1), jefa de finanzas de Constructora Andes SpA. Necesito un resumen ejecutivo del mes: ventas octubre fueron $ 482 MM (margen 18 %), el cliente más grande fue Minera Cordillera Norte con OC-2025-0411 por $ 120 MM. Nuestro principal contacto ahí es Pedro Ramírez (p.ramirez@cordilleranorte.cl). Comisión interna al vendedor: 2,5 %." },
            { t: "trap-reveal", items: [
              { tag: "RUT", text: "11.111.111-1 → dato personal, protegido por la Ley 21.719" },
              { tag: "Cliente", text: "Constructora Andes SpA y Minera Cordillera Norte → razones sociales propias y de terceros" },
              { tag: "OC", text: "OC-2025-0411 → referencia comercial interna" },
              { tag: "Monto", text: "$ 482 MM / $ 120 MM → cifras financieras no públicas" },
              { tag: "Contacto", text: "Pedro Ramírez + mail → dato personal de un tercero" },
            ]},
            { t: "callout", kind: "ok", head: "Versión anonimizada correcta", x: "Soy jefa de finanzas de [EMPRESA]. Resumen del mes: ventas [MONTO_VENTAS], margen [MARGEN %]. Cliente más grande [CLIENTE_001] con [OC_X] por [MONTO_OC]. Contacto principal [CONTACTO_1]. Comisión interna al vendedor: [%_COMISION]." },
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 1 | Fundamentos de seguridad",
        questions: [
          {
            stem: "El escudo verde en Copilot Chat Básico indica que:",
            options: [
              "Microsoft no puede leer nunca lo que escribes en el chat.",
              "Tus prompts y respuestas no se usan para entrenar los modelos y quedan bajo las protecciones contractuales de tu empresa.",
              "Puedes pegar datos personales de clientes sin riesgo legal.",
              "Las consultas que Copilot envía a Bing también quedan dentro de esa protección.",
            ],
            correct: 1,
            explain: "Con EDP, Microsoft trata tus prompts y respuestas como encargado, bajo el DPA, y no los usa para entrenar. No te exime de la ley y no cubre las consultas web enviadas a Bing.",
          },
          {
            stem: "La Ley 21.719 de protección de datos personales ya fue publicada, aunque su vigencia se está postergando. Respecto de Copilot:",
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
        "El escudo verde protege el canal; anonimizar es una obligación legal.",
        "Copilot Chat Básico vive en copilot.cloud.microsoft.",
        "Usa siempre los marcadores estándar.",
      ],
      cliffhanger: "El próximo bloque explica por qué Copilot inventa cifras con total seguridad y cómo el marco CORE reduce ese riesgo.",
      aforismo: "El escudo verde protege tus datos; tus decisiones siguen siendo responsabilidad tuya.",
    },

    // =========================================================
    // BLOQUE 2
    // =========================================================
    {
      id: "b2",
      num: 2,
      title: "CORE | prompts que inventan menos",
      eyebrow: "Bloque 02 | 30 min",
      lede: "El marco CORE es el centro del curso. Es la estructura que convierte una pregunta vaga en un prompt útil.",
      badge: "5 lecciones | Quiz",
      lessons: [
        {
          id: "L2.1",
          code: "L2.1",
          dur: "5 min",
          eyebrow: "Evidencia",
          title: "La Frontera Irregular",
          body: [
            { t: "p", x: "**Dell'Acqua et al. (2023, Harvard Business School)** hicieron un experimento con 758 consultores de BCG que usaron GPT-4. En tareas que la IA hace bien (dentro de la «frontera»), los consultores con IA completaron 12,2 % más tareas, 25,1 % más rápido y con más de 40 % más calidad. En una tarea que parecía igual de fácil, pero quedaba fuera de esa frontera, fueron 19 puntos porcentuales menos propensos a dar con la respuesta correcta." },
            { t: "bignums", items: [
              { n: "+40%", l: "Calidad dentro de la frontera", c: "olive" },
              { n: "25%", l: "Más rápido dentro de la frontera", c: "marine" },
              { n: "−19 pp", l: "Respuestas correctas fuera de la frontera", c: "burgundy", fs: 72 },
            ]},
            { t: "src", x: "Fuentes: Dell'Acqua et al., [«Navigating the Jagged Technological Frontier»](https://mitsloan.mit.edu/sites/default/files/2023-10/SSRN-id4573321.pdf), HBS Working Paper 24-013, septiembre de 2023; HBS Working Knowledge, [«Humans vs. Machines»](https://www.library.hbs.edu/working-knowledge/humans-vs-machines-untangling-the-tasks-ai-can-and-cant-handle), 22-nov-2023. Las listas de abajo son ejemplos aplicados al reporte mensual, no tareas del estudio." },
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
          eyebrow: "Marco central",
          title: "CORE | los 4 componentes",
          body: [
            { t: "core-chips" },
            { t: "grid2", items: [
              { chip: "c", letter: "C", title: "Contexto", body: "Quién eres, qué empresa, para quién redactas, qué sabes del destinatario y de la situación." },
              { chip: "o", letter: "O", title: "Objetivo", body: "El entregable concreto que quieres **tener al final**, más allá de lo que diga Copilot." },
              { chip: "r", letter: "R", title: "Restricciones", body: "Largo, formato, lo que no debe hacer, datos que no tiene, tono a evitar." },
              { chip: "e", letter: "E", title: "Expectativas", body: "Estructura esperada, estilo, ejemplo de respuesta deseada, criterios de calidad." },
            ]},
            { t: "prompt-core", title: "Ejemplo CORE aplicado al reporte mensual",
              lines: [
                { tag: "C", x: "Soy analista de control de gestión en una empresa mediana chilena. Preparo el reporte ejecutivo mensual que se presenta al comité el primer lunes." },
                { tag: "O", x: "Necesito un borrador de «hallazgos clave» del mes a partir de los datos que te voy a pegar (anonimizados). Entregable: 5 bullets máx., cada uno con una frase de contexto y una implicancia." },
                { tag: "R", x: "No inventes cifras: usa solo las que están abajo. Español chileno formal. Máximo 120 palabras totales. No uses viñetas con emojis. No hagas proyecciones." },
                { tag: "E", x: "Formato: [MÉTRICA] | [VARIACIÓN] | [IMPLICANCIA]. Tono de comité ejecutivo: seco, claro, sin relleno. Evita frases como «cabe destacar» o «es importante mencionar»." },
              ],
            },
          ],
        },
        {
          id: "L2.3",
          code: "L2.3",
          dur: "5 min",
          eyebrow: "Comparativa",
          title: "Zero-shot vs CORE | el mismo caso",
          body: [
            { t: "compare", bad: {
              head: "Zero-shot (vago)",
              items: [
                "**Prompt:** «Ayúdame con un resumen del mes para el comité.»",
                "**Respuesta típica:** párrafo genérico de 300 palabras, tono de blog, con la frase «es fundamental destacar» al menos dos veces. No sirve para el comité.",
              ],
            }, good: {
              head: "CORE (estructurado)",
              items: [
                "**Prompt:** el ejemplo de arriba con C-O-R-E etiquetados.",
                "**Respuesta típica:** 5 bullets en el formato pedido, sin cifras inventadas, listos para copiar a la plantilla del comité. Requiere ajuste menor.",
              ],
            }},
            { t: "callout", kind: "tip", head: "Lo que acabas de hacer", x: "Bajaste el costo de corrección. CORE agrega algo de trabajo al escribir el prompt y ahorra rondas de corrección después." },
          ],
        },
        {
          id: "L2.4",
          code: "L2.4",
          dur: "5 min",
          eyebrow: "Técnica complementaria",
          title: "Role prompting sobre CORE",
          body: [
            { t: "p", x: "Antes del Contexto, añades un **rol experto**. Su aporte principal está en el tono, el vocabulario y el nivel de detalle de la respuesta; no esperes que por sí solo haga más exactas las cifras." },
            { t: "prompt-core", title: "Role + CORE",
              lines: [
                { tag: "Rol", x: "Eres un analista senior de control de gestión con 15 años de experiencia en empresas chilenas medianas. Tu escritura es seca y directiva, al estilo de un informe a directorio." },
                { tag: "C", x: "Soy el analista que prepara el reporte mensual..." },
                { tag: "O", x: "Resumen ejecutivo de 5 bullets..." },
                { tag: "R", x: "Sin cifras inventadas, 120 palabras máx..." },
                { tag: "E", x: "Formato tabla | tono de directorio..." },
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
        title: "Quiz Bloque 2 | Marco CORE",
        questions: [
          {
            stem: "Lee este prompt: «Eres analista financiero. Resume el mes en 5 bullets. Sin inventar cifras.» ¿Qué letra de CORE falta más claramente?",
            options: [
              "C | Contexto",
              "O | Objetivo",
              "R | Restricciones",
              "E | Expectativas (formato, tono, estructura)",
            ],
            correct: 3,
            explain: "Hay rol (C parcial), objetivo (O) y una restricción (R). Falta la E, es decir, el formato, el tono y la estructura que esperas. Sin ella, el modelo elige el formato por su cuenta.",
          },
          {
            stem: "La Frontera Irregular de Dell'Acqua et al. (2023) muestra que:",
            options: [
              "La IA siempre aumenta la productividad en un 40%.",
              "Dentro de la frontera suben calidad y rapidez; fuera de ella, baja la probabilidad de acertar (19 puntos porcentuales).",
              "Los consultores con IA superan siempre a los que trabajan sin IA.",
              "La IA solo funciona para tareas creativas.",
            ],
            correct: 1,
            explain: "Usar IA fuera de lo que hace bien resta en vez de sumar, y la frontera no siempre se ve a simple vista. Saber dónde estás parado importa más que dominar trucos de prompts.",
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
            explain: "El role prompting aporta cuando la dificultad está en el estilo (comité ejecutivo, memo al directorio). Para resumir o estructurar, CORE basta.",
          },
        ],
      },
      paraLlevar: [
        "CORE = Contexto, Objetivo, Restricciones, Expectativas.",
        "Dentro de la frontera: +40 % de calidad. Fuera: −19 puntos de acierto.",
        "Role prompting solo cuando el tono sea el reto.",
      ],
      cliffhanger: "CORE ordena lo que le pides a Copilot. El próximo bloque trata de cómo revisar lo que te entrega, incluso en tareas con números.",
      aforismo: "Un prompt sin CORE es una pregunta sin coordenadas.",
    },

    // =========================================================
    // BLOQUE 3
    // =========================================================
    {
      id: "b3",
      num: 3,
      title: "Técnicas avanzadas y el chat completo",
      eyebrow: "Bloque 03 | 30 min",
      lede: "Con CORE como base, sumamos tres técnicas de prompts y las funciones del chat que faltan por ver.",
      badge: "7 lecciones | Quiz",
      lessons: [
        {
          id: "L3.1",
          code: "L3.1",
          dur: "4 min",
          eyebrow: "Técnica | Few-shot",
          title: "Enseñar por ejemplos, no por reglas",
          body: [
            { t: "p", x: "En vez de definir la regla, le das al modelo **3 ejemplos etiquetados** y deduce el patrón. Funciona muy bien para clasificaciones y formatos repetitivos." },
            { t: "prompt-core", title: "Few-shot: clasificar temas del reporte mensual",
              lines: [
                { tag: "C", x: "Soy analista; recibo correos del negocio que debo clasificar antes de armar el reporte." },
                { tag: "O", x: "Clasifica cada correo como Ventas, Operaciones, RRHH o Finanzas." },
                { tag: "Ej 1", x: "«Cliente pidió ampliar crédito a 60 días» → Ventas" },
                { tag: "Ej 2", x: "«Se rompió el equipo 3 de la planta norte» → Operaciones" },
                { tag: "Ej 3", x: "«Renuncia de Juan de contabilidad» → RRHH" },
                { tag: "E", x: "Devuelve solo la categoría, una por línea." },
              ],
            },
          ],
        },
        {
          id: "L3.2",
          code: "L3.2",
          dur: "4 min",
          eyebrow: "Técnica | Chain-of-thought",
          title: "Piensa paso a paso",
          body: [
            { t: "bignums", items: [
              { n: "10%", l: "Aciertos sin la instrucción (GSM8K, 2022)", c: "burgundy" },
              { n: "41%", l: "Aciertos con «pensemos paso a paso»", c: "olive" },
            ]},
            { t: "p", x: "**Wei et al. (2022)** mostraron que pedir al modelo que razone por pasos, con ejemplos resueltos, mejora sus resultados en problemas de varios pasos. **Kojima et al. (2022)** probaron la versión más simple, agregar «pensemos paso a paso»: en problemas de matemática escolar (GSM8K), un modelo de ese año pasó de 10,4 % a 40,7 % de aciertos." },
            { t: "p", x: "Hoy el efecto es menor. Los modelos de razonamiento, como el modo «Pensar más profundo», ya trabajan por pasos sin que se lo pidas, y un estudio de Wharton de 2025 encontró que en ellos la instrucción agrega poco o nada de exactitud y alarga las respuestas. Sigue siendo útil para que el modelo **muestre** los pasos y puedas revisar cada cálculo: variaciones porcentuales, razones y descomposiciones." },
            { t: "src", x: "Fuentes: Kojima et al., [«Large Language Models are Zero-Shot Reasoners»](https://arxiv.org/abs/2205.11916), NeurIPS 2022 (InstructGPT text-davinci-002); Meincke, Mollick et al., [«The Decreasing Value of Chain of Thought in Prompting»](https://arxiv.org/abs/2506.07142v1), Wharton Generative AI Labs, 8-jun-2025." },
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
          eyebrow: "Técnica | Self-critique",
          title: "El modelo como su propio auditor",
          body: [
            { t: "p", x: "Flujo de tres pasos. Ayuda a encontrar supuestos débiles y cifras dudosas porque obliga al modelo a explicitarlos. No reemplaza tu verificación: el mismo modelo que se equivocó puede pasar por alto su error." },
            { t: "grid3", items: [
              { title: "1 | Generar", body: "Prompt CORE normal. Recibes la primera respuesta." },
              { title: "2 | Criticar", body: "«¿Qué supuestos hiciste? ¿Qué cifra podría ser inventada? ¿Dónde hay riesgo de error?»" },
              { title: "3 | Mejorar", body: "«Reescribe corrigiendo esos supuestos y marcando los datos que yo debería verificar.»" },
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
            { t: "grid3", items: [
              { title: "Automático", body: "La opción por defecto: Copilot decide qué modelo usar según la pregunta." },
              { title: "Respuesta rápida", body: "Para preguntas simples o de rutina: resúmenes cortos, reformulaciones." },
              { title: "Pensar más profundo", body: "Para preguntas complejas o abiertas: cálculos compuestos, análisis con varios pasos." },
            ]},
            { t: "callout", kind: "tip", head: "Regla de bolsillo", x: "Parte en Automático. Si la respuesta sale pobre o el problema tiene varios pasos, cambia a Pensar más profundo. Recuerda que Copilot Chat (Basic) puede buscar en la web por su cuenta; si la información cambia rápido, pide las fuentes y revísalas." },
            { t: "src", x: "Fuente: Microsoft Learn, [«Features in Copilot»](https://learn.microsoft.com/en-us/copilot/features), actualizado el 17-nov-2026. Microsoft advierte que estas opciones cambian a medida que llegan modelos nuevos." },
          ],
        },
        {
          id: "L3.5",
          code: "L3.5",
          dur: "7 min",
          eyebrow: "UI del chat",
          title: "Subir archivos",
          body: [
            { t: "p", x: "Puedes adjuntar archivos junto con tu prompt. Microsoft no publica límites numéricos fijos para Copilot Chat (Basic): aplica límites de uso razonable que varían y avisa dentro del producto cuando una función deja de estar disponible por haber llegado al tope." },
            { t: "src", x: "Fuente: Microsoft Support, [«Limits for features in Copilot Chat»](https://support.microsoft.com/microsoft-365-copilot/limits-for-features-copilot-chat), actualizado el 18-nov-2026." },
            { t: "compare", bad: {
              head: "Suele leer mal",
              items: ["PDFs escaneados sin OCR", "Tablas con celdas fusionadas", "Hojas con macros pesadas", "Imágenes dentro del PDF"],
            }, good: {
              head: "Suele leer bien",
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
          title: "Generar imágenes | cuándo tiene sentido",
          body: [
            { t: "compare", good: {
              head: "Sí conviene",
              items: ["Infografías internas", "Banners para comunicación", "Mockups rápidos de una slide", "Ilustraciones abstractas para reportes"],
            }, bad: {
              head: "No conviene",
              items: ["Renders técnicos o planos", "Documentos oficiales", "Cualquier cosa con precisión métrica", "Gráficos con cifras reales (usa Excel/PBI)"],
            }},
            { t: "callout", kind: "nota", head: "Cupo de imágenes", x: "La generación de imágenes está sujeta a límites de uso razonable. Microsoft no publica un número fijo por día; Copilot te avisa cuando llegas al tope." },
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
                options: ["Few-shot + Automático", "Chain-of-thought + Pensar más profundo", "Self-critique (generar, criticar, mejorar)"],
                correct: 0,
                explain: "Patrón repetitivo: con tres ejemplos basta. Tarea simple, modo Automático.",
              },
              {
                task: "Calcular la variación de margen y descomponerla por línea de negocio.",
                options: ["Few-shot + Automático", "Chain-of-thought + Pensar más profundo", "Self-critique (generar, criticar, mejorar)"],
                correct: 1,
                explain: "Cálculo compuesto con varios pasos. Pedir los pasos y usar el modo profundo te deja revisar cada operación.",
              },
              {
                task: "Redactar la carta de introducción del reporte que verá el directorio.",
                options: ["Few-shot + Automático", "Chain-of-thought + Pensar más profundo", "Self-critique (generar, criticar, mejorar)"],
                correct: 2,
                explain: "Mucho en juego y destino directorio. La autocrítica ayuda a detectar supuestos débiles antes de enviar; la revisión final es tuya.",
              },
            ]},
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 3 | Técnicas avanzadas",
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
            explain: "Patrón repetitivo y formato claro. Con tres ejemplos, few-shot fija el patrón y lo aplica al resto.",
          },
          {
            stem: "¿Cuándo activar «Pensar más profundo»?",
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
            stem: "¿Qué no debes hacer con la generación de imágenes?",
            options: [
              "Crear infografías internas.",
              "Hacer mockups de un banner.",
              "Reemplazar un gráfico técnico con cifras reales del reporte.",
              "Ilustrar un concepto abstracto.",
            ],
            correct: 2,
            explain: "Una imagen generada no es una fuente confiable de cifras. Usa Excel o Power BI para gráficos con datos reales.",
          },
        ],
      },
      paraLlevar: [
        "Few-shot para patrones, paso a paso para cálculos, autocrítica cuando hay mucho en juego.",
        "Parte en Automático; usa Pensar más profundo cuando la respuesta salga pobre.",
        "Antes de subir un archivo, anonimízalo y prefiere tablas planas.",
      ],
      cliffhanger: "¿Qué pasa cuando el lunes necesitas el mismo contexto que cargaste hoy? El próximo bloque trata de memoria, colaboración y agentes.",
      aforismo: "Pensar más profundo toma más tiempo y sale más barato que corregir después.",
    },

    // =========================================================
    // BLOQUE 4
    // =========================================================
    {
      id: "b4",
      num: 4,
      title: "Biblioteca, Páginas y Agentes",
      eyebrow: "Bloque 04 | 30 min",
      lede: "Cierre con funciones de equipo y de memoria. Al final construyes un agente simple y te lo llevas listo.",
      badge: "4 lecciones | Quiz",
      lessons: [
        {
          id: "L4.1",
          code: "L4.1",
          dur: "7 min",
          eyebrow: "Colaboración",
          title: "Páginas y Biblioteca",
          body: [
            { t: "p", x: "**Páginas** es un lienzo editable y colaborativo que nace desde el chat. Bajo una respuesta de Copilot, abre el menú de tres puntos y elige **Editar en Páginas**; puedes enviar la respuesta a una página nueva o a una existente. Luego compartes la página con tu equipo, la editan juntos y pueden seguir pidiéndole cambios a Copilot dentro de ella." },
            { t: "p", x: "Las páginas que has creado quedan en la **Biblioteca** de Copilot hasta que las borres. Están disponibles sin licencia de Copilot para cuentas del trabajo que tengan almacenamiento en SharePoint u OneDrive." },
            { t: "schema", label: "Esquema ilustrativo (la interfaz puede variar)", parts: [
              { kind: "topbar" },
              { kind: "row", items: [
                { box: "Respuesta de Copilot | ⋯ → Editar en Páginas", width: 1 },
                { box: "Página editable y compartible", highlight: true, width: 2 },
              ]},
              { kind: "row", items: [
                { box: "Biblioteca | páginas anteriores" },
              ]},
            ]},
            { t: "src", x: "Fuente: Microsoft Support, [«Get started with Microsoft Copilot Pages»](https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-microsoft-365-copilot-pages), consultado el 20-nov-2026." },
            { t: "callout", kind: "tip", head: "Ejemplos útiles para reportes", x: "Plantilla reutilizable del reporte mensual | minuta del comité con acciones | lista de verificación del cierre contable compartida." },
          ],
        },
        {
          id: "L4.2",
          code: "L4.2",
          dur: "5 min",
          eyebrow: "Memoria",
          title: "Personalización | instrucciones personalizadas y memoria",
          body: [
            { t: "p", x: "En la configuración del chat, sección **Personalización**, puedes escribir **instrucciones personalizadas**: quién eres, qué haces y cómo quieres que te responda. Copilot las aplica en cada conversación y no tienes que repetirlas. Copilot también tiene una **memoria** (en vista previa) que guarda datos de tus conversaciones; tu organización puede tenerla desactivada." },
            { t: "src", x: "Fuentes: Microsoft Support, [«Customize how Microsoft 365 Copilot responds to you»](https://support.microsoft.com/en-us/microsoft-365-copilot/customize-how-microsoft-365-copilot-responds-to-you); Microsoft Learn, [«Copilot personalization and memory»](https://learn.microsoft.com/copilot/microsoft-365/copilot-personalization-memory), actualizado el 3-nov-2026. Los nombres de los menús pueden variar según idioma y versión." },
            { t: "compare", good: {
              head: "Sí poner",
              items: ["Cargo y área funcional", "Tipo de empresa e industria", "Tono preferido (formal chileno, memo de directorio)", "Idiomas de trabajo"],
            }, bad: {
              head: "Nunca poner",
              items: ["Datos sensibles de terceros", "Precios o márgenes confidenciales", "Comisiones internas", "Proyectos bajo acuerdo de confidencialidad"],
            }},
          ],
        },
        {
          id: "L4.3",
          code: "L4.3",
          dur: "5 min",
          eyebrow: "Agentes",
          title: "Agent Builder | incluido en Copilot Chat",
          body: [
            { t: "p", x: "Copilot Chat (Basic) incluye **agentes basados en instrucciones y sitios web públicos**, que puedes crear desde el mismo chat con **Agent Builder**, sin costo adicional." },
            { t: "grid2", items: [
              { title: "Incluido", body: "Nombre (hasta 30 caracteres), descripción (hasta 1.000), instrucciones (hasta 8.000), **hasta 4 URL públicas** como conocimiento y prompts de inicio. La documentación lista además un intérprete de código y un generador de imágenes." },
              { title: "Con costo o fuera de alcance", body: "Los agentes que usan datos compartidos de la empresa (SharePoint, conectores de Graph) se cobran por consumo y vienen **desactivados por defecto**. Agent Builder no permite crear acciones que se conecten con servicios externos." },
            ]},
            { t: "src", x: "Fuentes: Microsoft Learn, [«Agents in Copilot Chat»](https://learn.microsoft.com/en-us/copilot/agents), actualizado el 10-nov-2026; [«Build agents with Agent Builder»](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agent-builder-build-agents) y [«Add knowledge sources»](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-knowledge), ambas actualizadas el 16-nov-2026." },
          ],
        },
        {
          id: "L4.4",
          code: "L4.4",
          dur: "8 min",
          eyebrow: "En vivo",
          title: "Construcción guiada | asistente de reporte mensual",
          body: [
            { t: "agent-steps", steps: [
              { n: "1", title: "Nombre (hasta 30 caracteres)", body: "Asistente de reporte mensual." },
              { n: "2", title: "Descripción (hasta 1.000 caracteres)", body: "Asistente que ayuda a estructurar, redactar y revisar el reporte ejecutivo mensual siguiendo el marco CORE. Pide anonimizar antes de pegar datos. Responde en español de Chile, en registro formal." },
              { n: "3", title: "Instrucciones CORE (hasta 8.000 caracteres)", body: "Rol: analista senior de control de gestión. Objetivo: producir borradores de secciones del reporte (hallazgos, explicación de variaciones, recomendaciones). Restricciones: no inventar cifras; pedir al usuario la fuente; usar marcadores cuando detecte datos sensibles. Expectativas: formato de comité, máximo 120 palabras por sección, tono seco." },
              { n: "4", title: "URL de conocimiento (hasta 4)", body: "Sitio corporativo | glosario público de indicadores | normativa pública del SII | calendario tributario. Solo fuentes públicas. Cada URL puede tener como máximo dos niveles de ruta y no puede llevar parámetros (nada después de «?»)." },
              { n: "5", title: "Prompts de inicio", body: "«Ayúdame a armar la sección de hallazgos» | «Revisa este borrador con autocrítica» | «Clasifica estos pendientes por área» | «Genera preguntas para el comité»." },
            ]},
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 4 | Biblioteca, Páginas y Agentes",
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
            explain: "Sin costo adicional, el agente se apoya en instrucciones y hasta 4 sitios públicos. Usar SharePoint u otros datos de la empresa se cobra por consumo y viene desactivado por defecto.",
          },
          {
            stem: "En las instrucciones personalizadas de Copilot, ¿qué no debes cargar?",
            options: [
              "Tu cargo y área funcional.",
              "El tono formal chileno que prefieres.",
              "Los márgenes y comisiones internas del equipo.",
              "Los idiomas en los que trabajas.",
            ],
            correct: 2,
            explain: "Las instrucciones quedan guardadas y se aplican a todas tus conversaciones. Describe tu rol y tus preferencias, no los datos comerciales de tu empresa.",
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
            explain: "Páginas convierte una respuesta del chat en un documento editable que puedes compartir y trabajar con tu equipo. Las páginas creadas quedan en la Biblioteca.",
          },
        ],
      },
      paraLlevar: [
        "Páginas es el lienzo colaborativo; las instrucciones personalizadas guardan tu perfil.",
        "Agent Builder incluido: hasta 4 URL públicas; los datos de la empresa se cobran por consumo.",
        "Construye tu primer agente con CORE en las instrucciones.",
      ],
      cliffhanger: "Si además de Copilot usas Claude, el anexo práctico que sigue parte desde cero.",
      aforismo: "Copilot rinde más en manos de quien piensa con criterio.",
    },

    // =========================================================
    // BLOQUE 5 | Anexo práctico: Claude desde cero
    // Datos verificados en support.claude.com y privacy.claude.com el 20-nov-2026.
    // =========================================================
    {
      id: "b5",
      num: 5,
      title: "Claude desde cero",
      eyebrow: "Bloque 05 | Anexo práctico | 40 min",
      lede: "Para quienes han usado Claude poco o nada. Las reglas del curso (CORE, anonimizar, verificar) aplicadas a otra herramienta, paso a paso.",
      badge: "8 lecciones | Quiz",
      lessons: [
        {
          id: "L5.1",
          code: "L5.1",
          dur: "4 min",
          eyebrow: "Acceso",
          title: "Crear la cuenta e iniciar sesión",
          body: [
            { t: "p", x: "Claude funciona en el navegador (**claude.ai**), en una app de escritorio para Mac y Windows, y en apps para iOS y Android. La misma cuenta sirve en todos lados y tus conversaciones se sincronizan." },
            { t: "grid3", items: [
              { title: "1 | Entra a claude.ai", body: "Elige continuar con tu cuenta de Google o con tu correo. Con correo, Claude te envía un enlace seguro (o un código, si lo abres en otro dispositivo)." },
              { title: "2 | Verifica lo que pida", body: "Al crear la cuenta puede pedirte confirmar un número de teléfono. Debes tener 18 años o más y estar en un país donde Claude esté disponible; Chile lo está." },
              { title: "3 | Instala las apps si te sirven", body: "La app de escritorio y la móvil son opcionales. Sirven para tener Claude a mano fuera del navegador." },
            ]},
            { t: "callout", kind: "nota", head: "Si tu empresa ya tiene Claude", x: "Si tu organización contrató un plan Team o Enterprise, entra con la cuenta corporativa (a veces con inicio de sesión único). Así tus conversaciones quedan bajo el contrato de la empresa y no bajo los términos de una cuenta personal." },
            { t: "src", x: "Fuentes: Claude Help Center, [«Get started with Claude»](https://support.claude.com/en/articles/8114491-get-started-with-claude) y [«Log in to your Claude account»](https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account), consultados el 20-nov-2026; Anthropic, [«Supported countries and regions»](https://www.anthropic.com/supported-countries), consultado el 20-nov-2026 (incluye Chile)." },
          ],
        },
        {
          id: "L5.2",
          code: "L5.2",
          dur: "4 min",
          eyebrow: "Planes",
          title: "Qué distingue los planes",
          body: [
            { t: "grid3", items: [
              { title: "Gratuito", body: "Para partir. Tiene un límite de uso por sesión que se reinicia cada cinco horas y permite hasta cinco proyectos." },
              { title: "Pro, Max y Ultra", body: "Planes individuales de pago con más uso que el gratuito. Pro tiene además un límite semanal y prioridad en horas de alta demanda; Max y Ultra apuntan a uso intensivo." },
              { title: "Team y Enterprise", body: "Para organizaciones. Team va de 2 a 150 personas, con administración y facturación centralizadas, inicio de sesión único y proyectos compartidos." },
            ]},
            { t: "callout", kind: "tip", head: "Precios", x: "No los incluimos porque cambian y dependen del país. Revísalos en la página de precios de Claude antes de decidir." },
            { t: "src", x: "Fuentes: Claude Help Center, [«What is the Pro plan?»](https://support.claude.com/en/articles/8325606-what-is-the-pro-plan), [«What is the Team plan?»](https://support.claude.com/en/articles/9266767-what-is-the-team-plan) y [«What are projects?»](https://support.claude.com/en/articles/9517075-what-are-projects), consultados el 20-nov-2026." },
          ],
        },
        {
          id: "L5.3",
          code: "L5.3",
          dur: "5 min",
          eyebrow: "Primera conversación",
          title: "Tu primer pedido, con CORE",
          body: [
            { t: "p", x: "Escribe como le escribirías a un colega. El botón **+** del cuadro de chat (o escribir «/») muestra las demás opciones: adjuntar archivos, conectores y otras herramientas. El esquema CORE que ya conoces funciona igual que en Copilot." },
            { t: "prompt-core", title: "Ejemplo CORE en Claude",
              lines: [
                { tag: "C", x: "Soy gerente comercial de una pyme de servicios en Concepción. Estamos evaluando lanzar un servicio de mantención preventiva para clientes industriales." },
                { tag: "O", x: "Necesito una lista de las 5 preguntas que debería responder antes de invertir, ordenadas por riesgo." },
                { tag: "R", x: "No inventes cifras de mercado. Si una pregunta requiere un dato que no tienes, dilo. Máximo 150 palabras." },
                { tag: "E", x: "Una tabla con tres columnas: pregunta | por qué importa | cómo la respondería con poco presupuesto." },
              ],
            },
            { t: "callout", kind: "tip", head: "Itera en la misma conversación", x: "Si la primera respuesta no sirve, corrige ahí mismo: «la columna 3 es muy genérica, dame ejemplos para Concepción». Pídele también que marque lo que no sabe con certeza." },
            { t: "src", x: "Fuente: Claude Help Center, [«Get started with Claude»](https://support.claude.com/en/articles/8114491-get-started-with-claude), consultado el 20-nov-2026." },
          ],
        },
        {
          id: "L5.4",
          code: "L5.4",
          dur: "5 min",
          eyebrow: "Archivos",
          title: "Subir archivos y pedir análisis",
          body: [
            { t: "p", x: "Adjunta archivos con el botón **+**, arrastrándolos al chat o pegando imágenes. Claude lee PDF, Word, CSV, texto, HTML, JSON, Excel e imágenes (JPEG, PNG, GIF, WebP)." },
            { t: "bignums", items: [
              { n: "20", l: "Archivos por conversación", c: "marine" },
              { n: "500 MB", l: "Tamaño máximo por archivo en el chat", c: "burgundy", fs: 64 },
              { n: "30 MB", l: "Tamaño máximo por archivo en un proyecto", c: "olive", fs: 64 },
            ]},
            { t: "callout", kind: "alert", head: "Antes de subir", x: "Anonimiza igual que en Copilot: reemplaza nombres, RUT, correos y montos sensibles por marcadores. Para analizar planillas Excel, Claude necesita tener activada la capacidad de crear y editar archivos (ejecución de código) en la configuración." },
            { t: "p", x: "Para análisis numérico, pide que muestre el cálculo y la fórmula que usó. Así puedes rehacerlo en Excel y comparar." },
            { t: "src", x: "Fuente: Claude Help Center, [«Upload files to Claude»](https://support.claude.com/en/articles/8241126-upload-files-to-claude), 23-jul-2026." },
          ],
        },
        {
          id: "L5.5",
          code: "L5.5",
          dur: "5 min",
          eyebrow: "Proyectos",
          title: "Proyectos con instrucciones y archivos",
          body: [
            { t: "p", x: "Un **proyecto** es un espacio de trabajo con sus propias conversaciones, **instrucciones** (por ejemplo, tono formal o un rol profesional) y **archivos de referencia**. Todo chat que abras dentro del proyecto parte con ese contexto, sin que tengas que repetirlo." },
            { t: "grid2", items: [
              { title: "Qué ofrece", body: "Disponible en todos los planes; el gratuito permite hasta cinco proyectos. En los planes de pago, si los archivos superan el contexto, Claude pasa a un modo de búsqueda que amplía la capacidad hasta diez veces." },
              { title: "En equipo", body: "En Team y Enterprise puedes compartir un proyecto con permiso para ver (usar y conversar) o para editar (cambiar instrucciones y archivos)." },
            ]},
            { t: "callout", kind: "nota", head: "Lo que ya conoces", x: "Un proyecto cumple la función del agente que armaste en Agent Builder (Bloque 4) y del agente con instrucciones y archivos del Taller 4 del MBA: instrucciones fijas más documentos de referencia. Puedes reutilizar las mismas instrucciones CORE." },
            { t: "src", x: "Fuente: Claude Help Center, [«What are projects?»](https://support.claude.com/en/articles/9517075-what-are-projects), consultado el 20-nov-2026." },
          ],
        },
        {
          id: "L5.6",
          code: "L5.6",
          dur: "7 min",
          eyebrow: "Funciones",
          title: "Artefactos, búsqueda web, conectores y skills",
          body: [
            { t: "grid2", items: [
              { title: "Artefactos", body: "Contenido sustancial que Claude abre al lado de la conversación: documentos, código, sitios de una página, diagramas, tableros o herramientas pequeñas. Parten privados y quedan guardados en la sección de artefactos. Requieren activar la capacidad de crear y editar archivos." },
              { title: "Búsqueda web", body: "Claude puede buscar en la web y cita sus fuentes en cada respuesta. Según la versión que tengas, se activa desde el botón **+** o Claude decide solo cuándo buscar. En Team y Enterprise primero la habilita un administrador." },
              { title: "Conectores", body: "Conectan Claude con tus aplicaciones (Google Drive, Gmail, Slack, Microsoft 365, entre otras) usando tus mismos permisos. Al conectar un servicio autorizas a Claude a leer y, según el caso, modificar datos en él. El plan gratuito admite un conector personalizado." },
              { title: "Skills", body: "Carpetas de instrucciones, scripts y recursos que Claude carga cuando son pertinentes. Anthropic ofrece skills para Excel, Word, PowerPoint y PDF que se usan solas; tú o tu organización pueden crear otras. Requieren tener activada la ejecución de código." },
            ]},
            { t: "src", x: "Fuentes (Claude Help Center, consultados el 20-nov-2026): [«What are artifacts and how do I use them?»](https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them); [«Enable and use web search»](https://support.claude.com/en/articles/10684626-enable-and-use-web-search); [«Use connectors to extend Claude's capabilities»](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities); [«What are skills?»](https://support.claude.com/en/articles/12512176-what-are-skills). Los nombres de menús cambian seguido, por eso describimos la función sin la ruta exacta." },
          ],
        },
        {
          id: "L5.7",
          code: "L5.7",
          dur: "4 min",
          eyebrow: "Cuidados",
          title: "Qué verificar y qué no delegar",
          body: [
            { t: "compare", good: {
              head: "Delegar con revisión",
              items: ["Primeros borradores y estructura de un informe", "Resumir documentos que tú subiste", "Ordenar y clasificar datos anonimizados", "Proponer preguntas, escenarios y alternativas"],
            }, bad: {
              head: "No delegar",
              items: ["La decisión final y su firma", "Cifras que van al directorio sin recalcularlas", "Citas o fuentes sin abrir el enlace", "Datos personales o confidenciales sin anonimizar"],
            }},
            { t: "callout", kind: "alert", head: "Tus datos y el entrenamiento", x: "En los planes individuales (gratuito, Pro y Max), Anthropic puede usar tus chats para entrenar modelos si lo permites en la opción de mejora del modelo de tu configuración de privacidad; los chats de incógnito quedan fuera. En los planes comerciales (Team, Enterprise y la API) no se usan por defecto. Para información de la empresa, usa la cuenta corporativa si existe y anonimiza igual: la Ley 21.719 aplicará a cualquier herramienta." },
            { t: "src", x: "Fuentes: Claude Privacy Center, [«Is my data used for model training?»](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training), 16-mar-2026 (planes individuales), y [mismo título para productos comerciales](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training), 18-ago-2026." },
          ],
        },
        {
          id: "L5.8",
          code: "L5.8",
          dur: "6 min",
          eyebrow: "Ejercicio",
          title: "Caso de empresa | leer los resultados de una puerta falsa",
          kind: "exercise",
          body: [
            { t: "p", x: "Tu equipo terminó un experimento de puerta falsa: una página publicada en Netlify, un formulario en Tally y el conteo de visitas en GoatCounter. Tienes dos exportaciones en CSV, visitas por día y respuestas del formulario. El comité quiere saber si conviene seguir." },
            { t: "agent-steps", steps: [
              { n: "1", title: "Anonimiza", body: "En el CSV de Tally reemplaza nombres, correos y teléfonos por marcadores ([CONTACTO_1], [DATO_CONTACTO])." },
              { n: "2", title: "Crea un proyecto", body: "Llámalo «Validación de demanda» y escribe sus instrucciones con CORE (usa la caja de abajo)." },
              { n: "3", title: "Sube y pregunta", body: "Sube los dos CSV y pide la tasa de conversión de visitas a registros, por día y total, mostrando la fórmula." },
              { n: "4", title: "Pide un artefacto", body: "Un resumen de una página para el comité: resultado, supuestos, limitaciones y una recomendación (seguir, ajustar o descartar)." },
              { n: "5", title: "Verifica", body: "Recalcula la tasa en Excel y compárala con el panel de GoatCounter. Marca cualquier cifra que no cuadre antes de enviar." },
            ]},
            { t: "exercise-textarea" },
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 5 | Claude desde cero",
        questions: [
          {
            stem: "Quieres que Claude use siempre las mismas instrucciones y los mismos documentos de referencia en varias conversaciones. ¿Qué usas?",
            options: [
              "Un artefacto.",
              "Un proyecto con instrucciones y archivos.",
              "La búsqueda web.",
              "Un chat de incógnito.",
            ],
            correct: 1,
            explain: "El proyecto guarda instrucciones y archivos y los aplica a cada conversación que abras dentro de él. Cumple la función del agente que armaste en el Bloque 4.",
          },
          {
            stem: "Sobre el uso de tus conversaciones para entrenar modelos:",
            options: [
              "Claude nunca usa conversaciones, en ningún plan.",
              "Todos los planes las usan siempre, sin opción.",
              "En planes individuales depende de una opción de privacidad que tú controlas; en los planes comerciales no se usan por defecto.",
              "Solo se usan si subes archivos.",
            ],
            correct: 2,
            explain: "En los planes individuales decides con la opción de mejora del modelo (y los chats de incógnito quedan fuera). En Team, Enterprise y la API no se usan por defecto. En cualquier caso, anonimiza los datos de la empresa.",
          },
          {
            stem: "Al conectar Google Drive a Claude mediante un conector:",
            options: [
              "Claude ve todos los archivos de la empresa, incluso los que tú no puedes abrir.",
              "Claude accede con tus mismos permisos y, según el conector, podría también modificar datos.",
              "Claude solo puede leer archivos públicos.",
              "Los archivos se copian para siempre en tu cuenta de Claude.",
            ],
            correct: 1,
            explain: "Los conectores heredan tus permisos en el servicio conectado. Al conectar autorizas a Claude a leer y, según el caso, modificar datos; conecta solo lo que necesitas.",
          },
        ],
      },
      paraLlevar: [
        "Mismas reglas que en Copilot: CORE, anonimizar y verificar.",
        "Un proyecto con instrucciones y archivos evita repetir el contexto.",
        "Revisa la opción de privacidad de tu cuenta y prefiere la cuenta corporativa para datos de la empresa.",
      ],
      cliffhanger: "",
      aforismo: "Claude redacta y calcula rápido; la firma del informe sigue siendo tuya.",
    },
  ],
};
