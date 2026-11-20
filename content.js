// Contenido pedagógico del curso
// Caso ancla: preparar reportes ejecutivos mensuales
// Audiencia: profesional adulto chileno genérico, no técnico
// Estructura (20-nov-2026): 9 bloques, 3 por parte. Parte I, IA generativa (Bloques 1 a 3, sirven para
// cualquier herramienta); Parte II, Copilot (Bloques 4 a 6); Parte III, Claude (Bloques 7 a 9).

window.COURSE_DATA = {
  meta: {
    audiencia: "Profesionales | Chile",
    caso: "Reportes ejecutivos mensuales",
    duracionMin: 170, // referencial; la app suma los minutos indicados en el rótulo de cada bloque
    totalBloques: 9,
  },
  partes: [
    { k: "general", titulo: "IA generativa", bajada: "Lo que vale para cualquier herramienta" },
    { k: "copilot", titulo: "Copilot", bajada: "Microsoft Copilot Chat en el trabajo" },
    { k: "claude", titulo: "Claude", bajada: "Claude de principio a fin" },
  ],
  blocks: [

    // =========================================================
    // PARTE I · IA GENERATIVA · Bloque 0 | Fundamentos

    // =========================================================
    // PARTE I · IA GENERATIVA · Bloque 1 | Entender
    // =========================================================
    {
      id: "b1",
      num: 1,
      parte: "general",
      title: "Entender la IA generativa",
      eyebrow: "Bloque 1 | 25 min",
      lede: "Qué es un LLM, por qué puede inventar con total seguridad, dónde rinde y dónde se equivoca, y por qué el juicio humano gana valor. Vale para cualquier herramienta.",
      badge: "5 lecciones | Quiz",
      lessons: [
        {
          id: "L1.1",
          code: "L1.1",
          dur: "4 min",
          eyebrow: "Mapa",
          title: "Zoológico de la IA | tres familias",
          body: [
            { t: "p", x: "Antes de usar cualquier asistente, ubica dónde estás parado. No toda la IA es lo mismo. Te sirven tres categorías simples." },
            { t: "grid3", items: [
              { title: "IA predictiva clásica", body: "Scoring crediticio, detección de fraude, recomendadores. Predice categorías o números a partir de datos estructurados." },
              { title: "IA generativa (LLMs)", body: "Copilot, ChatGPT, Claude. Predice el siguiente token de texto. Produce lenguaje plausible, no verdad verificada." },
              { title: "IA agéntica", body: "LLM + herramientas + memoria. Ejecuta acciones, no solo responde. Los agentes de Copilot y de Claude apuntan hacia acá." },
            ]},
            { t: "callout", kind: "nota", head: "Dónde viven Copilot y Claude", x: "Copilot Chat y Claude son IA generativa. Sus agentes, proyectos y conectores (Partes II y III) son un primer paso hacia la IA agéntica. Tener clara esa distinción permite ajustar lo que cabe esperar de cada herramienta." },
          ],
        },
        {
          id: "L1.2",
          code: "L1.2",
          dur: "6 min",
          eyebrow: "Mecánica",
          title: "Qué hace un LLM | el ejemplo de la capital",
          body: [
            { t: "p", x: "En términos operativos, un LLM es un **autocompletador a escala industrial** entrenado con billones de tokens de texto (un token es un trozo de palabra). A partir de todo lo escrito hasta ese momento predice el **siguiente token más probable**, y repite el proceso hasta completar la respuesta." },
            { t: "bignums", items: [
              { n: "1", l: "Token predicho en cada paso", c: "burgundy" },
              { n: "15 billones", l: "Tokens de entrenamiento de Llama 3", c: "marine", fs: 52 },
              { n: "0", l: "Fuentes que consulta el modelo por sí solo, sin búsqueda ni archivos", c: "olive" },
            ]},
            { t: "src", x: "Fuente de la cifra: Meta, [«Introducing Meta Llama 3»](https://ai.meta.com/blog/meta-llama-3/), 18 de abril de 2024 («pretrained on over 15T tokens»). En inglés se dice *15 trillion*; en español son 15 billones (15 × 10¹²). Los modelos más recientes publican poco sobre este dato; tómalo como orden de magnitud." },
            { t: "p", x: "**Experimento mental.** Supón que le preguntas a un LLM *¿cuál es el capital de Chile?* El juego es intencional. «La capital» es la ciudad sede del gobierno; «el capital» son los recursos económicos de un país, como el dinero, las materias primas o la gente preparada. Aprieta el botón para ver qué responde el modelo y, luego, por qué lo hace." },
            { t: "llm-sim",
              user: "¿Cuál es el capital de Chile?",
              answer: "Santiago.",
              reveals: [
                { head: "Lo que acaba de pasar",
                  x: "En esta simulación, el modelo leyó *«capital de Chile»* y completó con la continuación más frecuente en los textos con que se entrenó, es decir, **Santiago**, sin consultar ninguna fuente ni detenerse en el artículo «el»." },
                { head: "Lo que habría respondido una persona atenta",
                  x: "Alguien que lee con cuidado nota el «el» y puede responder **cobre** (el principal recurso exportador del país) o **capital humano** (la fuerza de trabajo y su formación). Ante una palabra con varias acepciones, la persona elige según el contexto y la intención de quien pregunta." },
                { head: "La lección",
                  x: "Un LLM predice la **continuación más probable**. Si la pregunta es ambigua y no trae contexto, se inclina por la interpretación más común. Los modelos actuales a veces piden una aclaración, pero no conviene contar con ello. Por eso la **C de CORE** (Bloque 3) es Contexto, el marco que evita la respuesta genérica." },
                { head: "Por qué importa para tu reporte",
                  x: "Cuando un asistente inventa una cifra actúa el mismo mecanismo que produjo «Santiago», esto es, elige un número que *suena correcto*. Que algo sea plausible no lo hace verdadero, y el filtro sigue siendo el juicio de quien firma el reporte." },
              ],
            },
          ],
        },
        {
          id: "L1.3",
          code: "L1.3",
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
            { t: "callout", kind: "nota", head: "El desenlace (marzo de 2021)", x: "El NYDFS concluyó que **no hubo discriminación ilegal**, ni intencional ni por impacto dispar. Las diferencias se explicaban por historiales de crédito individuales (por ejemplo, un cónyuge figuraba en la hipoteca y el otro no, o uno era solo usuario adicional de las tarjetas del otro). Aun así, el informe advirtió que la puntuación de crédito, aun siendo legal, puede reflejar y perpetuar desigualdades históricas (*legacy bias*)." },
            { t: "src", x: "Fuentes: MacRumors, [«Regulators Looking Into Claims of Gender Discrimination in Apple Card Credit Decisions»](https://www.macrumors.com/2019/11/10/apple-card-gender-discrimination/), 10-nov-2019; NYDFS, [*Report on Apple Card Investigation*](https://s3.documentcloud.org/documents/20521283/rpt_202103_apple_card_investigation.pdf), marzo de 2021." },
            { t: "p", x: "Que un modelo no use una variable (aquí, el género) no basta para descartar diferencias, porque los datos históricos pueden traerlas por otras vías. La única forma de saberlo es revisar los resultados con datos. Además, la acusación viral circuló mucho más rápido que la evidencia, y la investigación no la confirmó. El caso sirve de advertencia para quien usa un LLM: el modelo hereda patrones, sesgos y errores de los textos con que fue entrenado, y sus conclusiones, por convincentes que suenen, también requieren verificación." },
            { t: "callout", kind: "nota", head: "Puente a tu trabajo", x: "Cuando un asistente sugiere una redacción que suena a consultor genérico, o un hallazgo que parece obvio, es porque está promediando miles de textos parecidos, y el aporte profesional está, precisamente, en lo que ese promedio no produce." },
          ],
        },
        {
          id: "L1.4",
          code: "L1.4",
          dur: "5 min",
          eyebrow: "Economía",
          title: "Prediction Machines | por qué tu juicio vale más",
          body: [
            { t: "p", x: "Siguiendo a **Agrawal, Gans y Goldfarb** (*Prediction Machines*, Harvard Business Review Press, 2018), el avance de la IA puede leerse como **una caída en el costo de la predicción**, de la cual se desprenden tres consecuencias económicas." },
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
            { t: "p", x: "En el reporte mensual, antes solo se delegaba el formato, y hoy es posible delegar el primer borrador, la clasificación masiva y el resumen de correos. Sin embargo, el **juicio sobre qué significa cada hallazgo para la empresa sigue siendo tuyo**, y es ahí donde está el ahorro real de horas." },
            { t: "aforismo-mini", x: "La predicción se abarató; el juicio sigue siendo caro." },
          ],
        },
        {
          id: "L1.5",
          code: "L1.5",
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
      ],
      quiz: {
        title: "Quiz Bloque 1 | Entender",
        questions: [
          {
            stem: "¿Qué hace, en esencia, un LLM como Copilot o Claude?",
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
        ],
      },
      paraLlevar: [
        "Un LLM es un autocompletador que predice la respuesta sin verificarla.",
        "La IA suma dentro de su frontera y resta fuera de ella, y esa frontera no se ve a simple vista.",
        "Cuando la predicción se abarata, el juicio humano gana valor.",
      ],
      cliffhanger: "Si se va a delegar predicción, conviene hacerlo sin exponer datos por accidente, que es justamente el tema del próximo bloque.",
      aforismo: "La IA predice «Santiago». Tú decides si hablamos de geografía o de cobre.",
    },

    // =========================================================
    // PARTE I · Bloque 2 | Proteger
    // =========================================================
    {
      id: "b2",
      num: 2,
      parte: "general",
      title: "Proteger tus datos",
      eyebrow: "Bloque 2 | 12 min",
      lede: "Antes de escribir el primer prompt, en cualquier herramienta: qué exige la ley chilena, cómo anonimizar con marcadores estándar y cuántos datos se exponen sin darse cuenta.",
      badge: "4 lecciones | Quiz",
      lessons: [
        {
          id: "L2.1",
          code: "L2.1",
          dur: "2 min",
          eyebrow: "Pregunta",
          title: "¿Pegarías en un chat de IA el reporte que armaste ayer?",
          kind: "opener",
          body: [
            { t: "p", x: "Tómate treinta segundos. Piensa en el último **reporte ejecutivo mensual** que preparaste: cifras de ventas, nombres de clientes, KPIs internos, comentarios del gerente sobre una unidad que no va bien." },
            { t: "p", x: "¿Lo pegarías tal cual en una caja de chat de IA?" },
            { t: "callout", kind: "nota", head: "Reflexión", x: "Todavía no hay respuesta correcta, aunque vale la pena retener la primera reacción, porque las próximas lecciones separan qué parte de ella es prudencia y qué parte es mito." },
          ],
        },
        {
          id: "L2.2",
          code: "L2.2",
          dur: "3 min",
          eyebrow: "Marco legal",
          title: "Ley 21.719 en la práctica",
          body: [
            { t: "bignums", items: [
              { n: "2027", l: "Vigencia aprobada por el Congreso (15 de octubre), pendiente de publicación", c: "burgundy" },
              { n: "20.000", l: "UTM, multa máxima por infracción gravísima", c: "marine" },
              { n: "4 %", l: "De los ingresos anuales, tope para grandes empresas que reinciden en infracciones gravísimas", c: "olive" },
            ]},
            { t: "p", x: "La Ley 21.719, publicada en el Diario Oficial el 13 de diciembre de 2024, modifica la Ley 19.628 y fija su entrada en vigencia el primer día del mes vigésimo cuarto posterior a su publicación, esto es, el 1 de diciembre de 2026. Sin embargo, el 17 de noviembre de 2026 el Congreso despachó el proyecto que posterga esa fecha al **15 de octubre de 2027** (boletín 18.623-07), que a esa fecha quedaba pendiente de promulgación y publicación. Mientras la postergación no se publique, la fecha legal sigue siendo el 1 de diciembre de 2026, por lo que hay que confirmar su estado antes de citarla." },
            { t: "p", x: "En cuanto a sanciones, la ley distingue infracciones leves (amonestación escrita o multa de hasta 5.000 UTM), graves (hasta 10.000 UTM) y gravísimas (hasta 20.000 UTM). En caso de reincidencia la multa puede llegar al triple y, para las empresas que no son de menor tamaño y reinciden en infracciones graves o gravísimas, hasta el 2 % o el 4 % de sus ingresos anuales, respectivamente. Durante los primeros doce meses de vigencia, a las empresas de menor tamaño se les puede aplicar una amonestación escrita como sanción." },
            { t: "p", x: "La ley define como **responsable de datos** a quien decide los fines y medios del tratamiento. Cuando una empresa trata datos de sus clientes, la responsable es ella, y pegar información identificable sin anonimizar en cualquier herramienta, Copilot y Claude incluidos, la compromete. La postergación da más plazo, pero el hábito de anonimizar conviene adquirirlo desde hoy." },
            { t: "src", x: "Fuentes: Ley 21.719, [Diario Oficial N° 44.023, 13-dic-2024](https://www.diariooficial.interior.gob.cl/publicaciones/2024/12/13/44023/01/2583630.pdf) (arts. 2 letra n y 35 de la Ley 19.628 modificada, y artículo primero transitorio); Garrigues, [«El Senado chileno aprueba proyecto de ley que busca postergar al 15 de octubre de 2027 la entrada en vigencia...»](https://www.garrigues.com/es_ES/noticia/senado-chileno-aprueba-proyecto-ley-busca-postergar-15-octubre-2027-entrada-vigencia-nueva), 28-oct-2026 (primer trámite y boletín); Aninat Abogados, [«Congreso aprueba postergar la entrada en vigencia de la Ley N°21.719...»](https://aninat.cl/noticias-insights/alerta-legal-congreso-aprueba-postergar-la-entrada-en-vigencia-de-la-ley-n21-719-de-datos-personales-hasta-el-15-de-octubre-de-2027/), 17-nov-2026 (despacho a ley). Revisado el 20-nov-2026." },
            { t: "callout", kind: "alert", head: "Implicancia directa", x: "Las protecciones contractuales de una cuenta corporativa, como el escudo verde de Copilot (Bloque 4) o los planes de empresa de Claude (Bloque 7), protegen el canal, pero no eximen del deber de anonimizar: son capas distintas, una técnica y otra legal." },
          ],
        },
        {
          id: "L2.3",
          code: "L2.3",
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
              { mono: "[DATO_CONTACTO]", body: "Correos, teléfonos y direcciones." },
            ]},
            { t: "aforismo-mini", x: "Si lo que vas a pegar no lo pondrías en un correo a un tercero externo, no lo pongas en el chat." },
          ],
        },
        {
          id: "L2.4",
          code: "L2.4",
          dur: "5 min",
          eyebrow: "Ejercicio | trampa consciente",
          title: "¿Cuántas cosas acabas de exponer?",
          kind: "trap",
          body: [
            { t: "p", x: "Abajo tienes un prompt realista que alguien escribió para que un asistente de IA le ayude con el reporte mensual. **Identifica los 5 elementos sensibles** antes de ver la revelación." },
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
        title: "Quiz Bloque 2 | Datos y anonimización",
        questions: [
          {
            stem: "La Ley 21.719 ya fue publicada y el Congreso aprobó postergar su entrada en vigencia. Respecto de las herramientas de IA:",
            options: [
              "Mientras uses una cuenta corporativa no necesitas anonimizar.",
              "Solo aplica a empresas con más de 200 empleados.",
              "La empresa sigue siendo responsable del tratamiento de datos, aunque use IA.",
              "Los datos de clientes chilenos no aplican si el servidor está fuera de Chile.",
            ],
            correct: 2,
            explain: "La ley llama responsable a quien decide los fines y medios del tratamiento, y esa responsabilidad sigue en la empresa aunque use un proveedor de IA. Por eso hay que anonimizar siempre antes de pegar.",
          },
          {
            stem: "¿Cuál de los siguientes puedes pegar tal cual en un chat de IA?",
            options: [
              "El nombre y RUT de tu mayor cliente.",
              "La lista de comisiones internas del equipo comercial.",
              "Un texto público del sitio web corporativo de tu empresa.",
              "La base de contactos con mails y teléfonos.",
            ],
            correct: 2,
            explain: "Información públicamente disponible (sitio web, regulaciones, notas de prensa) no requiere anonimización. Todo lo interno o de terceros, sí.",
          },
          {
            stem: "Vas a pegar en el chat un correo que menciona a «Pedro Ramírez (p.ramirez@cordilleranorte.cl)». ¿Cómo lo dejas?",
            options: [
              "Igual, porque el chat es privado.",
              "Solo borras el correo electrónico.",
              "[CONTACTO_1] ([DATO_CONTACTO])",
              "Cambias el nombre por otro nombre inventado.",
            ],
            correct: 2,
            explain: "Los marcadores estándar mantienen el sentido del texto (hay un contacto y su dato) sin exponer a nadie, y te permiten reponer los datos reales fuera del chat.",
          },
        ],
      },
      paraLlevar: [
        "La empresa sigue siendo responsable de los datos que pega en cualquier herramienta.",
        "Anonimiza con los marcadores estándar antes de pegar.",
        "Si no lo pondrías en un correo a alguien externo, no va al chat.",
      ],
      cliffhanger: "Con los datos protegidos, el próximo bloque enseña a pedir bien: el marco CORE y tres técnicas que reducen las respuestas inventadas.",
      aforismo: "Primero los datos; después, el prompt.",
    },

    // =========================================================
    // PARTE I · Bloque 3 | Pedir bien
    // =========================================================
    {
      id: "b3",
      num: 3,
      parte: "general",
      title: "Pedir bien: CORE y técnicas",
      eyebrow: "Bloque 3 | 40 min",
      lede: "El marco CORE, que convierte una pregunta vaga en un encargo claro, y tres técnicas para patrones, cálculos y entregables que importan.",
      badge: "8 lecciones | Quiz",
      lessons: [
        {
          id: "L3.1",
          code: "L3.1",
          dur: "10 min",
          eyebrow: "Marco central",
          title: "CORE | los 4 componentes",
          body: [
            { t: "core-chips" },
            { t: "grid2", items: [
              { chip: "c", letter: "C", title: "Contexto", body: "Quién eres, qué empresa, para quién redactas, qué sabes del destinatario y de la situación." },
              { chip: "o", letter: "O", title: "Objetivo", body: "El entregable concreto que quieres **tener al final**, más allá de lo que diga el asistente." },
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
          id: "L3.2",
          code: "L3.2",
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
            { t: "callout", kind: "tip", head: "Lo que acabas de hacer", x: "Con este ejercicio baja el costo de corrección, ya que CORE agrega algo de trabajo al escribir el prompt y ahorra rondas de corrección después." },
          ],
        },
        {
          id: "L3.3",
          code: "L3.3",
          dur: "5 min",
          eyebrow: "Técnica complementaria",
          title: "Role prompting sobre CORE",
          body: [
            { t: "p", x: "Antes del Contexto se agrega un **rol experto**, cuyo aporte principal está en el tono, el vocabulario y el nivel de detalle de la respuesta, aun cuando por sí solo no hace más exactas las cifras." },
            { t: "prompt-core", title: "Role + CORE",
              lines: [
                { tag: "Rol", x: "Eres un analista senior de control de gestión con 15 años de experiencia en empresas chilenas medianas. Tu escritura es seca y directiva, al estilo de un informe a directorio." },
                { tag: "C", x: "Soy el analista que prepara el reporte mensual..." },
                { tag: "O", x: "Resumen ejecutivo de 5 bullets..." },
                { tag: "R", x: "Sin cifras inventadas, 120 palabras máx..." },
                { tag: "E", x: "Formato tabla | tono de directorio..." },
              ],
            },
            { t: "callout", kind: "nota", head: "Cuándo aplicarlo", x: "Sirve en tareas donde el tono profesional es lo que más cuesta; para tareas mecánicas de resumen, CORE basta por sí solo." },
          ],
        },
        {
          id: "L3.4",
          code: "L3.4",
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
        {
          id: "L3.5",
          code: "L3.5",
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
          id: "L3.6",
          code: "L3.6",
          dur: "4 min",
          eyebrow: "Técnica | Chain-of-thought",
          title: "Piensa paso a paso",
          body: [
            { t: "bignums", items: [
              { n: "10%", l: "Aciertos sin la instrucción (GSM8K, 2022)", c: "burgundy" },
              { n: "41%", l: "Aciertos con «pensemos paso a paso»", c: "olive" },
            ]},
            { t: "p", x: "**Wei et al. (2022)** mostraron que pedir al modelo que razone por pasos, con ejemplos resueltos, mejora sus resultados en problemas de varios pasos. **Kojima et al. (2022)** probaron la versión más simple, agregar «pensemos paso a paso»: en problemas de matemática escolar (GSM8K), un modelo de ese año pasó de 10,4 % a 40,7 % de aciertos." },
            { t: "p", x: "Hoy el efecto es menor. Los modelos de razonamiento (como el modo «Pensar más profundo») ya trabajan por pasos sin que se lo pidan, y un estudio de Wharton de 2025 encontró que en ellos la instrucción agrega poco o nada de exactitud y alarga las respuestas. Aun así, sirve para que el modelo **muestre** los pasos y se pueda revisar cada cálculo, como variaciones porcentuales, razones y descomposiciones." },
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
          id: "L3.7",
          code: "L3.7",
          dur: "4 min",
          eyebrow: "Técnica | Self-critique",
          title: "El modelo como su propio auditor",
          body: [
            { t: "p", x: "Se trata de un flujo de tres pasos que ayuda a encontrar supuestos débiles y cifras dudosas, porque obliga al modelo a explicitarlos. Aun así, no reemplaza la verificación propia, ya que el mismo modelo que se equivocó puede pasar por alto su error." },
            { t: "grid3", items: [
              { title: "1 | Generar", body: "Prompt CORE normal. Recibes la primera respuesta." },
              { title: "2 | Criticar", body: "«¿Qué supuestos hiciste? ¿Qué cifra podría ser inventada? ¿Dónde hay riesgo de error?»" },
              { title: "3 | Mejorar", body: "«Reescribe corrigiendo esos supuestos y marcando los datos que yo debería verificar.»" },
            ]},
            { t: "callout", kind: "ok", head: "Cuándo usar", x: "Siempre que el entregable salga de tus manos hacia arriba: comités, directorio, cliente externo." },
          ],
        },
        {
          id: "L3.8",
          code: "L3.8",
          dur: "3 min",
          eyebrow: "Ejercicio integrador",
          title: "¿Qué técnica? ¿Qué modo?",
          kind: "matcher",
          body: [
            { t: "matcher", items: [
              {
                task: "Clasificar 40 tickets del mes en 4 categorías para el reporte.",
                options: ["Few-shot (tres ejemplos)", "Paso a paso, con un modo de razonamiento", "Autocrítica (generar, criticar, mejorar)"],
                correct: 0,
                explain: "Patrón repetitivo: con tres ejemplos basta y no hace falta un modo de razonamiento.",
              },
              {
                task: "Calcular la variación de margen y descomponerla por línea de negocio.",
                options: ["Few-shot (tres ejemplos)", "Paso a paso, con un modo de razonamiento", "Autocrítica (generar, criticar, mejorar)"],
                correct: 1,
                explain: "Cálculo compuesto con varios pasos. Pedir los pasos, idealmente con un modo de razonamiento, te deja revisar cada operación.",
              },
              {
                task: "Redactar la carta de introducción del reporte que verá el directorio.",
                options: ["Few-shot (tres ejemplos)", "Paso a paso, con un modo de razonamiento", "Autocrítica (generar, criticar, mejorar)"],
                correct: 2,
                explain: "Mucho en juego y destino directorio. La autocrítica ayuda a detectar supuestos débiles antes de enviar; la revisión final es tuya.",
              },
            ]},
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 3 | CORE y técnicas",
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
            stem: "¿Cuándo agregar role prompting encima de CORE?",
            options: [
              "Siempre, cuanto más detalle mejor.",
              "Cuando el tono profesional es lo difícil de la tarea.",
              "Solo para tareas de traducción.",
              "Cuando el asistente se niegue a responder.",
            ],
            correct: 1,
            explain: "El role prompting aporta cuando la dificultad está en el estilo (comité ejecutivo, memo al directorio). Para resumir o estructurar, CORE basta.",
          },
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
            stem: "Necesitas calcular la variación del margen y cuánto explica cada línea de negocio. ¿Qué técnica conviene?",
            options: [
              "Few-shot con tres ejemplos.",
              "Pedir que razone paso a paso y muestre cada cálculo.",
              "Generar una imagen con los datos.",
              "Ninguna: el modelo calcula bien por defecto.",
            ],
            correct: 1,
            explain: "En un cálculo de varios pasos lo importante es poder revisar cada operación. Pedir los pasos (y usar un modo de razonamiento si la herramienta lo tiene) lo hace posible.",
          },
          {
            stem: "¿Cuál es el límite principal de la autocrítica?",
            options: [
              "Solo funciona en inglés.",
              "Alarga demasiado las respuestas.",
              "El mismo modelo que se equivocó puede pasar por alto su error, así que la revisión final sigue siendo tuya.",
              "No sirve para textos que van al directorio.",
            ],
            correct: 2,
            explain: "La autocrítica ayuda a explicitar supuestos y cifras dudosas, pero no reemplaza la verificación de quien firma.",
          },
        ],
      },
      paraLlevar: [
        "CORE = Contexto, Objetivo, Restricciones, Expectativas.",
        "Few-shot para patrones, paso a paso para cálculos, autocrítica cuando hay mucho en juego.",
        "La autocrítica ayuda, pero la revisión final es tuya.",
      ],
      cliffhanger: "Con esto termina la parte general. Las dos secciones que siguen aplican lo mismo a Copilot Chat y a Claude.",
      aforismo: "Un prompt sin CORE es una pregunta sin coordenadas.",
    },

    // =========================================================
    // PARTE II · COPILOT · Bloque 4 | Empezar
    // =========================================================
    {
      id: "b4",
      num: 4,
      parte: "copilot",
      title: "Empezar con Copilot Chat",
      eyebrow: "Bloque 4 | Copilot | 15 min",
      lede: "Qué es Copilot Chat Básico, qué protege el escudo verde y cómo elegir el modo de respuesta.",
      badge: "3 lecciones | Quiz",
      lessons: [
        {
          id: "L4.1",
          code: "L4.1",
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
          id: "L4.2",
          code: "L4.2",
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
            { t: "callout", kind: "tip", head: "Regla simple", x: "El escudo verde indica que la conversación está bajo EDP. Pero Copilot Chat (Basic) se apoya sobre todo en la web y puede enviar consultas a Bing por su cuenta, sin que actives nada, y esas consultas quedan fuera de EDP. Por eso se anonimiza siempre." },
            { t: "src", x: "Fuente: Microsoft Learn, [«Enterprise data protection in Microsoft 365 Copilot and Microsoft 365 Copilot Chat»](https://learn.microsoft.com/en-us/copilot/privacy-and-protections), actualizado el 3-nov-2026." },
          ],
        },
        {
          id: "L4.3",
          code: "L4.3",
          dur: "5 min",
          eyebrow: "UI del chat",
          title: "Selector de modos",
          body: [
            { t: "grid3", items: [
              { title: "Automático", body: "La opción por defecto: Copilot decide qué modelo usar según la pregunta." },
              { title: "Respuesta rápida", body: "Para preguntas simples o de rutina: resúmenes cortos, reformulaciones." },
              { title: "Pensar más profundo", body: "Para preguntas complejas o abiertas: cálculos compuestos, análisis con varios pasos." },
            ]},
            { t: "callout", kind: "tip", head: "Regla de bolsillo", x: "Conviene partir en Automático y cambiar a Pensar más profundo si la respuesta sale pobre o el problema tiene varios pasos. Además, Copilot Chat (Basic) puede buscar en la web por su cuenta. Si la información cambia rápido, pide las fuentes y revísalas." },
            { t: "src", x: "Fuente: Microsoft Learn, [«Features in Copilot»](https://learn.microsoft.com/en-us/copilot/features), actualizado el 17-nov-2026. Microsoft advierte que estas opciones cambian a medida que llegan modelos nuevos." },
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 4 | Empezar con Copilot",
        questions: [
          {
            stem: "Entras a Copilot Chat con tu cuenta personal de Outlook.com en vez de la del trabajo. ¿Qué cambia?",
            options: [
              "Nada, es el mismo servicio.",
              "Pierdes la protección de datos empresarial: lo que escribas no queda bajo el contrato de tu empresa.",
              "Copilot deja de buscar en la web.",
              "Solo cambia el idioma de las respuestas.",
            ],
            correct: 1,
            explain: "La protección de datos empresarial (el escudo verde) aplica solo con la cuenta del trabajo. Con una cuenta personal rigen otros términos.",
          },
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
        ],
      },
      paraLlevar: [
        "Copilot Chat Básico viene con tu Microsoft 365 del trabajo, sin licencia extra.",
        "El escudo verde protege el canal, pero no te exime de anonimizar.",
        "Parte en Automático; usa Pensar más profundo cuando la respuesta salga pobre.",
      ],
      cliffhanger: "El próximo bloque lleva Copilot a tu trabajo diario: archivos, imágenes, Outlook, Word, Excel y PowerPoint.",
      aforismo: "Pensar más profundo toma más tiempo y sale más barato que corregir después.",
    },

    // =========================================================
    // PARTE II · Bloque 5 | Trabajo diario
    // =========================================================
    {
      id: "b5",
      num: 5,
      parte: "copilot",
      title: "Copilot en tu trabajo diario",
      eyebrow: "Bloque 5 | Copilot | 28 min",
      lede: "Archivos e imágenes en el chat, Copilot dentro de Outlook, Word, Excel y PowerPoint, y Páginas para trabajar en equipo.",
      badge: "5 lecciones | Quiz",
      lessons: [
        {
          id: "L5.1",
          code: "L5.1",
          dur: "7 min",
          eyebrow: "UI del chat",
          title: "Subir archivos",
          body: [
            { t: "p", x: "Copilot permite adjuntar archivos junto con el prompt y, si bien Microsoft no publica límites numéricos fijos para Copilot Chat (Basic), aplica límites de uso razonable que varían y avisa dentro del producto cuando una función deja de estar disponible por haber llegado al tope." },
            { t: "src", x: "Fuente: Microsoft Support, [«Limits for features in Copilot Chat»](https://support.microsoft.com/microsoft-365-copilot/limits-for-features-copilot-chat), actualizado el 18-nov-2026." },
            { t: "compare", bad: {
              head: "Suele leer mal",
              items: ["PDFs escaneados sin OCR", "Tablas con celdas fusionadas", "Hojas con macros pesadas", "Imágenes dentro del PDF"],
            }, good: {
              head: "Suele leer bien",
              items: ["XLSX con tabla plana", "CSV anonimizado", "DOCX con encabezados claros", "Archivos Markdown (MD)"],
            }},
            { t: "callout", kind: "alert", head: "Antes de subir", x: "El archivo se anonimiza primero, con marcadores como [CLIENTE_001] en la columna de clientes o [MONTO] en la de cifras sensibles, si corresponde." },
          ],
        },
        {
          id: "L5.2",
          code: "L5.2",
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
            { t: "callout", kind: "nota", head: "Cupo de imágenes", x: "La generación de imágenes está sujeta a límites de uso razonable. Microsoft no publica un número fijo por día, y Copilot avisa cuando se llega al tope." },
          ],
        },
        {
          id: "L5.3",
          code: "L5.3",
          dur: "6 min",
          eyebrow: "Correo",
          title: "Copilot en Outlook: tu correo",
          body: [
            { t: "p", x: "Copilot Chat también está dentro de Outlook (Outlook en la web, el nuevo Outlook para Windows y Outlook para Mac). Con la cuenta del trabajo **lee el correo que tienes abierto**, sin que lo copies, y responde preguntas sobre tu bandeja, tu calendario y tus reuniones. También hace acciones simples, como agendar, marcar correos como no leídos o activar la respuesta automática." },
            { t: "compare", good: {
              head: "Incluido en Copilot Chat Básico",
              items: ["Resumir o preguntar por el correo abierto", "Preguntar por los correos recientes de un proyecto y pedir un borrador de actualización", "Agendar, marcar como no leído o dejar una respuesta automática"],
            }, bad: {
              head: "Requiere la licencia pagada",
              items: ["Usar documentos, chats y datos de toda la organización", "Ordenar los correos no leídos por importancia con esos datos"],
            }},
            { t: "callout", kind: "nota", head: "Depende de tu cuenta", x: "En julio de 2026 Microsoft amplió lo que Copilot Chat puede ver en Outlook, de un solo hilo a la bandeja, el calendario y las reuniones, para las cuentas alcanzadas por ese cambio. Lo que veas depende de tu licencia y de cómo tu institución configuró Copilot: pruébalo con tu cuenta." },
            { t: "callout", kind: "tip", head: "Practícalo", x: "Los ejercicios 01, 02 y 03 de **Aplica en 10 minutos** (ordenar la bandeja, responder un correo difícil y convertir un hilo en acciones) funcionan con Copilot en Outlook o pegando el texto anonimizado en Copilot Chat." },
            { t: "src", x: "Fuentes: Microsoft Learn, [«What is Microsoft Copilot?»](https://learn.microsoft.com/en-us/copilot/plan/copilot-overview), actualizado el 17-nov-2026; Microsoft Support, [«Chat with Copilot in Outlook»](https://support.microsoft.com/en-us/outlook/copilot-outlook/chat-with-copilot-in-outlook), consultado el 20-nov-2026; Microsoft Learn, [«Release Notes for Microsoft 365 Copilot»](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes), entrada del 1-jul-2026." },
          ],
        },
        {
          id: "L5.4",
          code: "L5.4",
          dur: "5 min",
          eyebrow: "Documentos",
          title: "Word, Excel y PowerPoint: qué incluye tu licencia",
          body: [
            { t: "p", x: "Aquí conviene saber qué tienes. Microsoft distingue tres niveles y cada persona ve el suyo bajo su nombre en **microsoft365.com**: **Copilot Chat (Basic)**, **Microsoft 365 Copilot (Basic)** y **Microsoft 365 Copilot (Premium)**, este último con licencia pagada." },
            { t: "grid3", items: [
              { title: "Copilot Chat (Basic)", body: "No trae Copilot dentro de Word, Excel, PowerPoint ni OneNote. Para trabajar un documento, lo subes al chat o pegas su contenido (anonimizado), como en la lección L5.1." },
              { title: "Microsoft 365 Copilot (Basic)", body: "Sin licencia pagada, pero con funciones dentro de las apps: en Word, redactar, reescribir y resumir; en Excel, analizar datos, fórmulas y gráficos; en PowerPoint, crear desde una instrucción o un archivo." },
              { title: "Microsoft 365 Copilot (Premium)", body: "Con la licencia pagada se suma editar directamente el documento («Edit with Copilot»), los agentes de Word, Excel y PowerPoint y el uso de los datos de la organización." },
            ]},
            { t: "callout", kind: "tip", head: "El flujo que siempre funciona", x: "Aunque no tengas Copilot dentro de Word: sube el archivo a Copilot Chat, pide con CORE lo que necesitas (resumen, hallazgos, una versión más clara) y copia el resultado a tu documento. Revisa las cifras contra el original." },
            { t: "callout", kind: "nota", head: "Si algo no aparece", x: "Microsoft retiró en 2026 Copilot de las apps de escritorio para quienes solo tienen Copilot Chat (Basic), y cambia estas funciones con frecuencia. Si un botón del curso no aparece en tu cuenta, revisa tu nivel en microsoft365.com antes de buscar un error." },
            { t: "src", x: "Fuentes: Microsoft Learn, [«What is Microsoft Copilot?»](https://learn.microsoft.com/en-us/copilot/plan/copilot-overview), actualizado el 17-nov-2026; Microsoft Support, [«What Copilot license do I have»](https://support.microsoft.com/en-us/microsoft-365-copilot/what-copilot-license-do-i-have) y [«How Copilot Chat works in Microsoft 365 apps»](https://support.microsoft.com/en-us/microsoft-365-copilot/how-copilot-chat-works-in-microsoft-365-apps), abril de 2026; Microsoft Learn, [«Microsoft Copilot – Service Descriptions»](https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot), 5-ago-2026." },
          ],
        },
        {
          id: "L5.5",
          code: "L5.5",
          dur: "7 min",
          eyebrow: "Colaboración",
          title: "Páginas y Biblioteca",
          body: [
            { t: "p", x: "**Páginas** es un lienzo editable y colaborativo que nace desde el chat. Para usarlo se abre el menú de tres puntos bajo una respuesta de Copilot y se elige **Editar en Páginas**, con lo cual la respuesta pasa a una página nueva o a una existente, que luego puede compartirse con el equipo para editarla en conjunto y seguir pidiéndole cambios a Copilot dentro de ella." },
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
      ],
      quiz: {
        title: "Quiz Bloque 5 | Copilot en el trabajo diario",
        questions: [
          {
            stem: "Con Copilot Chat Básico (sin la licencia pagada), ¿qué puedes hacer en Outlook?",
            options: [
              "Ordenar todos los no leídos por importancia usando datos de toda la organización.",
              "Preguntarle por el correo abierto y, según tu cuenta, por tu bandeja y tu calendario.",
              "Leer los correos de tus colegas.",
              "Nada: Copilot no está en Outlook.",
            ],
            correct: 1,
            explain: "Copilot Chat lee el contenido abierto y, desde 2026 y según la cuenta, puede razonar sobre tu bandeja, calendario y reuniones. Usar los datos de toda la organización requiere la licencia pagada.",
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
        "Antes de subir un archivo, anonimízalo y prefiere tablas planas.",
        "En Outlook y en las apps, Copilot Chat lee lo que tienes abierto; lo que ve depende de tu licencia.",
        "Páginas convierte una respuesta en un documento que tu equipo puede editar.",
      ],
      cliffhanger: "¿Qué pasa cuando el lunes se necesita el mismo contexto que se cargó hoy? A eso responden la memoria y los agentes, temas del próximo bloque.",
      aforismo: "Copilot rinde más donde ya trabajas: en tu correo y tus documentos.",
    },

    // =========================================================
    // PARTE II · Bloque 6 | Memoria y agentes
    // =========================================================
    {
      id: "b6",
      num: 6,
      parte: "copilot",
      title: "Memoria y agentes en Copilot",
      eyebrow: "Bloque 6 | Copilot | 26 min",
      lede: "Instrucciones personalizadas para que Copilot te conozca, un agente propio con Agent Builder y un caso que junta todo lo de Copilot.",
      badge: "4 lecciones | Quiz",
      lessons: [
        {
          id: "L6.1",
          code: "L6.1",
          dur: "5 min",
          eyebrow: "Memoria",
          title: "Personalización | instrucciones personalizadas y memoria",
          body: [
            { t: "p", x: "En la configuración del chat, sección **Personalización**, se pueden escribir **instrucciones personalizadas** que indiquen quién eres, qué haces y cómo quieres que Copilot responda, de modo que las aplique en cada conversación sin repetirlas. Copilot también tiene una **memoria** (en vista previa) que guarda datos de las conversaciones, aunque la organización puede tenerla desactivada." },
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
          id: "L6.2",
          code: "L6.2",
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
          id: "L6.3",
          code: "L6.3",
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
        {
          id: "L6.4",
          code: "L6.4",
          dur: "8 min",
          eyebrow: "Ejercicio integrador",
          title: "Caso: del hilo de correos al reporte mensual",
          kind: "exercise",
          body: [
            { t: "p", x: "Este ejercicio junta todo lo de la parte de Copilot con lo de la parte general. Parte de un hilo real de tu trabajo y termina en una sección del reporte mensual, revisada y compartida con tu equipo." },
            { t: "agent-steps", steps: [
              { n: "1", title: "Extrae los acuerdos", body: "Abre el hilo en Outlook y pídele a Copilot los acuerdos en una tabla (acción, responsable, fecha), o pega el hilo anonimizado en Copilot Chat. Es el ejercicio 03 de Aplica en 10 minutos." },
              { n: "2", title: "Redacta con CORE", body: "Con esa tabla, pide los hallazgos del mes con un prompt CORE (Bloque 3): contexto del comité, cinco hallazgos como máximo, sin cifras inventadas y en formato de comité." },
              { n: "3", title: "Revisa con autocrítica", body: "Pide que señale sus supuestos débiles y las cifras que debes verificar. Verifica tú esas cifras contra la fuente." },
              { n: "4", title: "Comparte en Páginas", body: "Usa «Editar en Páginas» para llevar el resultado a una página y compártela con tu equipo para que la completen." },
              { n: "5", title: "Guárdalo para el próximo mes", body: "Agrega el prompt que funcionó a las instrucciones de tu agente del reporte mensual (L6.3), para no partir de cero la próxima vez." },
            ]},
            { t: "exercise-textarea" },
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 6 | Memoria y agentes",
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
            stem: "Al crear tu agente en Copilot, ¿qué pones como fuentes de conocimiento sin costo?",
            options: [
              "La carpeta compartida del equipo en SharePoint.",
              "Hasta cuatro sitios web públicos.",
              "La base de clientes en Excel.",
              "Tu bandeja de entrada.",
            ],
            correct: 1,
            explain: "Sin costo adicional, el agente usa instrucciones y hasta cuatro URL públicas. Los datos de la empresa (SharePoint, conectores) se cobran por consumo y vienen desactivados.",
          },
        ],
      },
      paraLlevar: [
        "Las instrucciones personalizadas guardan tu perfil, nunca datos de la empresa.",
        "Agent Builder incluido: hasta 4 URL públicas; los datos de la empresa se cobran por consumo.",
        "Construye tu primer agente con CORE en las instrucciones.",
      ],
      cliffhanger: "La última parte aplica todo lo anterior a Claude, desde crear la cuenta hasta dejarlo trabajar por ti.",
      aforismo: "Copilot rinde más en manos de quien piensa con criterio.",
    },

    // =========================================================
    // PARTE III · CLAUDE · Bloque 7 | Empezar
    // =========================================================
    {
      id: "b7",
      num: 7,
      parte: "claude",
      title: "Empezar con Claude",
      eyebrow: "Bloque 7 | Claude | 21 min",
      lede: "Cuenta y planes, la primera conversación, qué modelo usar y cómo subir archivos, con las reglas de la parte general.",
      badge: "5 lecciones | Quiz",
      lessons: [
        {
          id: "L7.1",
          code: "L7.1",
          dur: "4 min",
          eyebrow: "Acceso",
          title: "Crear la cuenta e iniciar sesión",
          body: [
            { t: "p", x: "Claude funciona en el navegador (**claude.ai**), en una app de escritorio para Mac y Windows y en apps para iOS y Android, con una misma cuenta para todas ellas." },
            { t: "grid3", items: [
              { title: "1 | Entra a claude.ai", body: "Elige continuar con tu cuenta de Google o con tu correo. En el segundo caso, Claude envía un enlace seguro (o un código, si se abre en otro dispositivo)." },
              { title: "2 | Verifica lo que pida", body: "Al crear la cuenta puede pedir confirmar un número de teléfono. Se exige tener 18 años o más y estar en un país donde Claude esté disponible, lista que incluye a Chile." },
              { title: "3 | Instala las apps si te sirven", body: "Las apps de escritorio y móvil son opcionales y sirven para tener Claude a mano fuera del navegador." },
            ]},
            { t: "callout", kind: "nota", head: "Si tu empresa ya tiene Claude", x: "Si la organización contrató un plan Team o Enterprise, conviene entrar con la cuenta corporativa (a veces con inicio de sesión único), de modo que las conversaciones queden bajo el contrato de la empresa y no bajo los términos de una cuenta personal." },
            { t: "src", x: "Fuentes: Claude Help Center, [«Get started with Claude»](https://support.claude.com/en/articles/8114491-get-started-with-claude) y [«Log in to your Claude account»](https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account), consultados el 20-nov-2026; Anthropic, [«Supported countries and regions»](https://www.anthropic.com/supported-countries), consultado el 20-nov-2026 (incluye Chile)." },
          ],
        },
        {
          id: "L7.2",
          code: "L7.2",
          dur: "4 min",
          eyebrow: "Planes",
          title: "Qué distingue los planes",
          body: [
            { t: "grid3", items: [
              { title: "Gratuito", body: "Sirve para partir, con un límite de uso por sesión que se reinicia cada cinco horas y hasta cinco proyectos." },
              { title: "Pro, Max y Ultra", body: "Planes individuales de pago con más uso que el gratuito y acceso a funciones que el gratuito no tiene, como Investigación, Cowork y Claude Code. Max y Ultra apuntan a un uso intensivo." },
              { title: "Team y Enterprise", body: "Son los planes para organizaciones. Team va de 2 a 150 personas e incluye administración y facturación centralizadas, inicio de sesión único y proyectos compartidos." },
            ]},
            { t: "callout", kind: "tip", head: "Precios", x: "Este anexo no incluye precios, ya que cambian con frecuencia y dependen del país, por lo que deben revisarse en la página de precios de Claude antes de decidir." },
            { t: "src", x: "Fuentes: Claude Help Center, [«What is the Pro plan?»](https://support.claude.com/en/articles/8325606-what-is-the-pro-plan), [«What is the Team plan?»](https://support.claude.com/en/articles/9266767-what-is-the-team-plan) y [«What are projects?»](https://support.claude.com/en/articles/9517075-what-are-projects), consultados el 20-nov-2026." },
          ],
        },
        {
          id: "L7.3",
          code: "L7.3",
          dur: "4 min",
          eyebrow: "Primera conversación",
          title: "Tu primera conversación",
          body: [
            { t: "p", x: "A Claude se le escribe como a un colega. No hay un formato especial: lo que aprendiste en la parte general (CORE, anonimizar y verificar) se aplica tal cual. Lo propio de Claude está en la interfaz." },
            { t: "grid3", items: [
              { title: "El botón +", body: "En el cuadro de chat, el botón **+** (o escribir «/») muestra las demás opciones: adjuntar archivos, activar la búsqueda web, conectores y otras herramientas." },
              { title: "Itera en la misma conversación", body: "Si la primera respuesta no sirve, corrige con un pedido concreto (por ejemplo, «la columna 3 es muy genérica, dame ejemplos para Concepción») en vez de partir de cero." },
              { title: "Un chat por tema", body: "Cuando cambias de tarea, abre un chat nuevo o trabaja dentro de un proyecto (L8.3), para que el contexto anterior no se mezcle con el nuevo." },
            ]},
            { t: "callout", kind: "tip", head: "Pídele que marque lo que no sabe", x: "Termina tus pedidos con «marca lo que no sepas con certeza». Es una restricción de CORE (Bloque 3) que en Claude conviene usar siempre." },
            { t: "src", x: "Fuente: Claude Help Center, [«Get started with Claude»](https://support.claude.com/en/articles/8114491-get-started-with-claude), consultado el 20-nov-2026." },
          ],
        },
        {
          id: "L7.4",
          code: "L7.4",
          dur: "4 min",
          eyebrow: "Modelos",
          title: "Elegir modelo, esfuerzo y pensamiento",
          body: [
            { t: "p", x: "Junto al botón de enviar está el menú del **modelo**. Claude tiene varios modelos: los más grandes razonan mejor y gastan más del límite de uso; los más livianos responden rápido. En el mismo menú se ajusta el **esfuerzo** (de bajo a máximo), es decir, cuánto trabaja el modelo antes de responder." },
            { t: "grid3", items: [
              { title: "Para el día a día", body: "Redactar, resumir, ordenar ideas. Según Anthropic, los valores por defecto funcionan bien y conviene no tocarlos." },
              { title: "Para tareas difíciles", body: "Análisis con varios pasos o documentos largos: un modelo más grande o más esfuerzo. Tarda más y consume más del límite." },
              { title: "En el plan gratuito", body: "Hay menos modelos disponibles que en los planes de pago. Lo que enseña este curso funciona con cualquiera." },
            ]},
            { t: "callout", kind: "nota", head: "Los nombres cambian seguido", x: "Al 20 de noviembre de 2026 la familia actual incluía Haiku, Sonnet, Opus y Fable en versiones 5.x. No memorices nombres: aprende el criterio (rápido y liviano para lo simple, más grande y con más esfuerzo para lo difícil) y revisa el menú." },
            { t: "src", x: "Fuente: Claude Help Center, [«Change the model, effort, and thinking settings»](https://support.claude.com/en/articles/8664678), consultado el 20-nov-2026." },
          ],
        },
        {
          id: "L7.5",
          code: "L7.5",
          dur: "5 min",
          eyebrow: "Archivos",
          title: "Subir archivos y pedir análisis",
          body: [
            { t: "p", x: "Los archivos se adjuntan con el botón **+**, arrastrándolos al chat o pegando imágenes. Claude lee PDF, Word, CSV, texto, HTML, JSON y Excel, además de imágenes en JPEG, PNG, GIF y WebP." },
            { t: "bignums", items: [
              { n: "20", l: "Archivos por conversación", c: "marine" },
              { n: "500 MB", l: "Tamaño máximo por archivo en el chat", c: "burgundy", fs: 64 },
              { n: "30 MB", l: "Tamaño máximo por archivo en un proyecto", c: "olive", fs: 64 },
            ]},
            { t: "callout", kind: "alert", head: "Antes de subir", x: "Anonimiza con los marcadores del Bloque 2. Para analizar planillas Excel, a su vez, Claude necesita tener activada en la configuración la capacidad de crear y editar archivos (ejecución de código)." },
            { t: "p", x: "En el análisis numérico conviene pedir que muestre el cálculo y la fórmula que usó, de modo que se pueda rehacer en Excel y comparar." },
            { t: "src", x: "Fuente: Claude Help Center, [«Upload files to Claude»](https://support.claude.com/en/articles/8241126-upload-files-to-claude), 23-jul-2026." },
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 7 | Empezar con Claude",
        questions: [
          {
            stem: "Tu empresa contrató Claude Team. ¿Con qué cuenta trabajas los temas de la empresa?",
            options: [
              "Con tu cuenta personal gratuita, porque es la misma herramienta.",
              "Con la cuenta corporativa, para que las conversaciones queden bajo el contrato de la empresa.",
              "Da lo mismo mientras uses incógnito.",
              "Con cualquiera, si anonimizas no importa.",
            ],
            correct: 1,
            explain: "Con la cuenta corporativa rigen los términos comerciales de la empresa. Igual conviene anonimizar: la responsabilidad legal sobre los datos sigue siendo de la empresa.",
          },
          {
            stem: "Tienes que resumir un correo largo y redactar una respuesta simple en Claude. ¿Qué haces con el modelo y el esfuerzo?",
            options: [
              "Siempre el modelo más grande con esfuerzo máximo.",
              "Dejar los valores por defecto: para el día a día funcionan bien.",
              "Cambiar al modelo más pequeño con esfuerzo máximo.",
              "Desactivar el pensamiento.",
            ],
            correct: 1,
            explain: "Anthropic recomienda los valores por defecto para tareas cotidianas. Un modelo más grande o más esfuerzo conviene en tareas difíciles y consume más del límite de uso.",
          },
          {
            stem: "Quieres que Claude analice una planilla Excel con datos de ventas. ¿Qué haces antes?",
            options: [
              "La subo tal cual: Claude no guarda nada.",
              "La anonimizo y verifico que esté activada la capacidad de crear y editar archivos (ejecución de código).",
              "La convierto a imagen.",
              "Le pido a Claude que la busque en la web.",
            ],
            correct: 1,
            explain: "Para analizar Excel, Claude necesita esa capacidad activada. Y los datos de la empresa se anonimizan antes de subirlos, como en cualquier herramienta.",
          },
        ],
      },
      paraLlevar: [
        "Para temas de la empresa, usa la cuenta corporativa si existe.",
        "Para el día a día, los valores por defecto del modelo funcionan bien.",
        "Antes de subir un archivo, anonimízalo.",
      ],
      cliffhanger: "El próximo bloque muestra cómo Claude investiga, crea archivos y recuerda tu contexto.",
      aforismo: "Las reglas no cambian cuando cambia la herramienta.",
    },

    // =========================================================
    // PARTE III · Bloque 8 | Investigar, crear y organizar
    // =========================================================
    {
      id: "b8",
      num: 8,
      parte: "claude",
      title: "Investigar, crear y organizar con Claude",
      eyebrow: "Bloque 8 | Claude | 24 min",
      lede: "Búsqueda web e Investigación, archivos de Excel, Word y PowerPoint, proyectos, memoria y las apps de escritorio y teléfono.",
      badge: "5 lecciones | Quiz",
      lessons: [
        {
          id: "L8.1",
          code: "L8.1",
          dur: "5 min",
          eyebrow: "Información actual",
          title: "Búsqueda web e Investigación",
          body: [
            { t: "p", x: "Un modelo de lenguaje no sabe lo que pasó después de su entrenamiento. Para información actual, Claude puede **buscar en la web** y citar las fuentes en cada respuesta. Según la versión, se activa con el botón **+** o Claude decide solo cuándo buscar." },
            { t: "p", x: "**Investigación** (Research) va más allá: hace muchas búsquedas, lee y entrega un informe con fuentes. Se activa desde el botón **+**, necesita la búsqueda web activada y está en los planes de pago, no en el gratuito." },
            { t: "compare", good: {
              head: "Úsala para",
              items: ["Normativa o noticias recientes", "Comparar productos o proveedores", "Contexto antes de una reunión con un cliente"],
            }, bad: {
              head: "No te fíes sin revisar",
              items: ["Cifras que irán a un informe", "Citas textuales", "Fuentes que no abriste"],
            }},
            { t: "callout", kind: "alert", head: "La regla de siempre", x: "Que una respuesta traiga enlaces no la hace verdadera. Abre las fuentes que sostienen lo importante y comprueba que digan lo que Claude dice que dicen. La búsqueda usa tu ubicación aproximada y la Investigación consume más del límite de uso." },
            { t: "src", x: "Fuentes (consultadas el 20-nov-2026): Claude Help Center, [«Enable and use web search»](https://support.claude.com/en/articles/10684626); Claude Help Center, [«Use research on Claude»](https://support.claude.com/en/articles/11088861)." },
          ],
        },
        {
          id: "L8.2",
          code: "L8.2",
          dur: "6 min",
          eyebrow: "Crear",
          title: "Crear archivos: Excel, Word, PowerPoint, PDF y artefactos",
          body: [
            { t: "p", x: "Con la capacidad **Crear y editar archivos** activada (en la configuración, sección de capacidades), Claude entrega archivos listos para descargar: planillas Excel con fórmulas, documentos Word, presentaciones PowerPoint y PDF. También analiza CSV y genera gráficos. Está en todos los planes; en Team y Enterprise la habilita la organización." },
            { t: "p", x: "Los **artefactos** son otra forma de crear: contenido que Claude abre al lado del chat, como un documento, un diagrama, un tablero o una pequeña herramienta, que puedes ajustar conversando." },
            { t: "prompt-core", title: "Ejemplo: de datos a planilla", lines: [
              { tag: "C", x: "Te adjunto el CSV anonimizado con las ventas mensuales de [EMPRESA] por línea de negocio." },
              { tag: "O", x: "Una planilla Excel con la variación mes a mes y un gráfico de barras por línea." },
              { tag: "R", x: "Usa fórmulas, no valores pegados, para que yo pueda revisar cada cálculo. No agregues datos." },
              { tag: "E", x: "Una hoja con los datos, otra con el resumen y el gráfico, y una nota con los supuestos." },
            ]},
            { t: "callout", kind: "alert", head: "Lo que advierte Anthropic", x: "Para crear archivos, Claude ejecuta código en un entorno aislado que, según la configuración, puede tener salida a internet. Anthropic advierte que alguien podría engañar a Claude para que envíe información de la conversación hacia afuera, por lo que recomienda vigilar lo que hace y detenerlo si accede a datos de forma inesperada. Con datos de empresa: anonimiza y revisa las fórmulas." },
            { t: "src", x: "Fuentes (consultadas el 20-nov-2026): Claude Help Center, [«Create and edit files with Claude»](https://support.claude.com/en/articles/12111783); Claude Help Center, [«What are artifacts and how do I use them?»](https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them)." },
          ],
        },
        {
          id: "L8.3",
          code: "L8.3",
          dur: "5 min",
          eyebrow: "Proyectos",
          title: "Proyectos con instrucciones y archivos",
          body: [
            { t: "p", x: "Un **proyecto** es un espacio de trabajo con sus propias conversaciones, **instrucciones** (por ejemplo, tono formal o un rol profesional) y **archivos de referencia**, de modo que todo chat que se abra dentro de él parte con ese contexto sin repetirlo." },
            { t: "grid2", items: [
              { title: "Qué ofrece", body: "Está disponible en todos los planes, y el gratuito permite hasta cinco proyectos. En los planes de pago, si los archivos superan el contexto, Claude pasa a un modo de búsqueda que amplía la capacidad hasta diez veces." },
              { title: "En equipo", body: "En Team y Enterprise puedes compartir un proyecto con permiso para ver (usar y conversar) o para editar (cambiar instrucciones y archivos)." },
            ]},
            { t: "callout", kind: "nota", head: "Lo que ya conoces", x: "Un proyecto cumple la función del agente que armaste en Agent Builder (Bloque 6) y del agente con instrucciones y archivos del Taller 4 del MBA, esto es, instrucciones fijas más documentos de referencia, y admite las mismas instrucciones CORE." },
            { t: "src", x: "Fuente: Claude Help Center, [«What are projects?»](https://support.claude.com/en/articles/9517075-what-are-projects), consultado el 20-nov-2026." },
          ],
        },
        {
          id: "L8.4",
          code: "L8.4",
          dur: "5 min",
          eyebrow: "Que te conozca",
          title: "Memoria e instrucciones personales",
          body: [
            { t: "grid3", items: [
              { title: "Instrucciones", body: "En la configuración, sección de personalización, escribes quién eres y cómo quieres las respuestas. Se aplican a todos los chats. Usa CORE, sin datos de la empresa." },
              { title: "Memoria", body: "Claude va guardando lo que aprende de tus conversaciones, por temas, y cada proyecto tiene su propia memoria. Puedes verla, editarla, pausarla o borrarla." },
              { title: "Chat de incógnito", body: "El ícono de fantasma abre un chat que no queda en el historial ni en la memoria. Útil para consultas puntuales." },
            ]},
            { t: "p", x: "La memoria viene activada por defecto en los planes individuales y, en Team y Enterprise, la decide la organización. La búsqueda en chats anteriores es de los planes de pago. Claude también permite **importar** la memoria que tenías en otro asistente, una función que Anthropic presenta como experimental." },
            { t: "callout", kind: "alert", head: "Revisa qué recuerda", x: "Abre de vez en cuando la memoria y borra lo que no debería estar ahí. Borrar un chat no borra lo que la memoria aprendió de él. Si vas a importar memoria de otro asistente, quita antes lo sensible. En Team y Enterprise, los chats de incógnito igual quedan en los registros de la organización por al menos 30 días." },
            { t: "src", x: "Fuentes (consultadas el 20-nov-2026): Claude Help Center, [«Use Claude's chat search and memory to build on previous context»](https://support.claude.com/en/articles/11817273); Claude Help Center, [«Import and export your memory from Claude»](https://support.claude.com/en/articles/12123587); Claude Help Center, [«Understanding Claude's personalization features»](https://support.claude.com/en/articles/10185728)." },
          ],
        },
        {
          id: "L8.5",
          code: "L8.5",
          dur: "3 min",
          eyebrow: "Dónde usarlo",
          title: "Claude en el escritorio, el teléfono y por voz",
          body: [
            { t: "grid3", items: [
              { title: "Escritorio", body: "App para Windows y Mac (Linux en beta). Suma funciones que el navegador no tiene, como las extensiones que conectan Claude con archivos y apps de tu computador, y Cowork." },
              { title: "Teléfono", body: "App para iOS y Android con las mismas conversaciones, memoria y preferencias. Sirve para revisar, dictar o retomar algo en movimiento." },
              { title: "Voz", body: "Modo de conversación hablada en móvil, escritorio y web, en todos los planes. Está en beta, y el español también." },
            ]},
            { t: "callout", kind: "tip", head: "Una cuenta, varios lugares", x: "Lo que empiezas en el computador sigue en el teléfono. Las mismas reglas valen en todos: lo que no pegarías en el navegador tampoco lo dictas por voz." },
            { t: "src", x: "Fuentes (consultadas el 20-nov-2026): Anthropic, [«Download Claude»](https://claude.com/download); Claude Help Center, [«Use voice mode»](https://support.claude.com/en/articles/11101966)." },
          ],
        },
      ],
      quiz: {
        title: "Quiz Bloque 8 | Investigar, crear y organizar",
        questions: [
          {
            stem: "Necesitas un informe con fuentes sobre una norma que cambió este mes. ¿Qué función de Claude conviene?",
            options: [
              "Un chat de incógnito.",
              "Investigación, con la búsqueda web activada, y luego abrir las fuentes clave.",
              "La memoria.",
              "Un artefacto sin búsqueda web.",
            ],
            correct: 1,
            explain: "El modelo no sabe lo ocurrido después de su entrenamiento. Investigación busca, lee y cita fuentes (en los planes de pago), pero las fuentes que sostienen lo importante igual hay que abrirlas.",
          },
          {
            stem: "Quieres que Claude use siempre las mismas instrucciones y los mismos documentos de referencia en varias conversaciones. ¿Qué usas?",
            options: [
              "Un artefacto.",
              "Un proyecto con instrucciones y archivos.",
              "La búsqueda web.",
              "Un chat de incógnito.",
            ],
            correct: 1,
            explain: "El proyecto guarda instrucciones y archivos y los aplica a cada conversación que abras dentro de él. Cumple la función del agente de Copilot del Bloque 6.",
          },
          {
            stem: "Borraste un chat donde mencionaste un dato interno. ¿Qué pasa con la memoria de Claude?",
            options: [
              "Se borra sola junto con el chat.",
              "Lo que la memoria aprendió de ese chat puede seguir ahí: hay que revisarla y borrarlo.",
              "La memoria nunca guarda nada de los chats.",
              "Solo se borra si cambias de plan.",
            ],
            correct: 1,
            explain: "Borrar un chat no borra lo que la memoria aprendió de él. La memoria se puede ver, editar, pausar o borrar en la configuración.",
          },
        ],
      },
      paraLlevar: [
        "Investigación cita fuentes, pero las fuentes clave hay que abrirlas.",
        "Pide fórmulas y no valores pegados, para poder revisar cada cálculo.",
        "Proyectos, memoria e instrucciones evitan repetir el contexto; revisa qué recuerda.",
      ],
      cliffhanger: "El último bloque conecta Claude con tus aplicaciones y le da más autonomía, con los cuidados que eso exige.",
      aforismo: "Claude hace el trabajo pesado; la firma sigue siendo tuya.",
    },

    // =========================================================
    // PARTE III · Bloque 9 | Conectar y delegar
    // =========================================================
    {
      id: "b9",
      num: 9,
      parte: "claude",
      title: "Conectar y delegar con Claude",
      eyebrow: "Bloque 9 | Claude | 26 min",
      lede: "Conectores y skills, Cowork, tareas programadas y Claude in Chrome, lo que viene después del chat y un caso de empresa para cerrar.",
      badge: "5 lecciones | Quiz",
      lessons: [
        {
          id: "L9.1",
          code: "L9.1",
          dur: "6 min",
          eyebrow: "Conectar",
          title: "Conectores y skills",
          body: [
            { t: "p", x: "Los **conectores** unen Claude con tus aplicaciones usando tus mismos permisos. Dos ejemplos útiles para el trabajo:" },
            { t: "grid2", items: [
              { title: "Google Workspace", body: "Gmail (buscar, leer, redactar y, con tu aprobación, enviar), Calendar, Drive y edición de Docs, Sheets y Slides. Claude pide aprobación antes de cada acción, salvo que actives el modo automático." },
              { title: "Microsoft 365", body: "Con cuenta de trabajo: SharePoint, OneDrive, Outlook y Teams. Claude ve lo mismo que tú puedes ver, y las acciones de escritura (enviar correos, crear eventos) las tiene que habilitar el administrador." },
            ]},
            { t: "p", x: "Las **skills** son carpetas de instrucciones, scripts y recursos que Claude carga cuando son pertinentes. Anthropic ofrece skills para Excel, Word, PowerPoint y PDF, y cada persona u organización puede crear las suyas." },
            { t: "callout", kind: "alert", head: "Conecta solo lo necesario", x: "Al conectar un servicio autorizas a Claude a leer y, según el caso, modificar datos en él. En Team y Enterprise, los conectores los habilita la organización. Anthropic dice que no entrena con los datos que Claude lee mediante los conectores de Gmail, Drive o Calendar, pero lo que copies al chat sigue las reglas de tu plan." },
            { t: "src", x: "Fuentes (consultadas el 20-nov-2026): Claude Help Center, [«Use connectors to extend Claude's capabilities»](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities); Claude Help Center, [«Use Google Workspace connectors»](https://support.claude.com/en/articles/10166901); Claude Help Center, [«Connect to Microsoft 365»](https://support.claude.com/en/articles/15183774); Claude Help Center, [«What are skills?»](https://support.claude.com/en/articles/12512176-what-are-skills)." },
          ],
        },
        {
          id: "L9.2",
          code: "L9.2",
          dur: "7 min",
          eyebrow: "Delegar",
          title: "Que Claude trabaje por ti: Cowork, tareas programadas y Chrome",
          body: [
            { t: "p", x: "El último escalón es dejar que Claude haga tareas de varios pasos con menos supervisión. Son funciones de los planes de pago, varias todavía en beta." },
            { t: "grid3", items: [
              { title: "Cowork", body: "Un agente que trabaja con las carpetas que tú conectas y produce planillas, presentaciones o informes. Pide permiso antes de borrar archivos." },
              { title: "Tareas programadas", body: "Describes una tarea una vez (por ejemplo, un resumen semanal) y Claude la ejecuta según un calendario, incluso con el computador apagado si no usa archivos locales." },
              { title: "Claude in Chrome", body: "Una extensión con la que Claude navega y actúa en sitios web. Toma capturas de las pestañas, así que todo lo visible entra a la conversación." },
            ]},
            { t: "callout", kind: "alert", head: "Más autonomía, más cuidado", x: "Anthropic advierte que estas funciones tienen riesgos propios: una página o un documento puede traer instrucciones escondidas que intenten desviar a Claude (inyección de instrucciones), y reconoce que ese riesgo no es cero. Recomienda conectar solo las carpetas necesarias, usar el modo manual cuando hay consecuencias reales y no usar la extensión de Chrome con cuentas que tengan datos sensibles, finanzas, salud o datos personales de terceros." },
            { t: "compare", good: {
              head: "Buen primer uso",
              items: ["Ordenar una carpeta de documentos públicos o propios", "Un resumen semanal de noticias del sector", "Armar una presentación desde tus notas anonimizadas"],
            }, bad: {
              head: "Todavía no",
              items: ["Enviar correos a clientes sin revisar", "Operar en sistemas con datos personales", "Cualquier tarea que no podrías deshacer"],
            }},
            { t: "src", x: "Fuentes (consultadas el 20-nov-2026): Claude Help Center, [«Get started with Claude Cowork»](https://support.claude.com/en/articles/13345190); Claude Help Center, [«Schedule recurring tasks in Claude Cowork»](https://support.claude.com/en/articles/13854387); Claude Help Center, [«Use Claude in Chrome safely»](https://support.claude.com/en/articles/12902428)." },
          ],
        },
        {
          id: "L9.3",
          code: "L9.3",
          dur: "3 min",
          eyebrow: "Para seguir",
          title: "Más allá del chat: Claude Design y Claude Code",
          body: [
            { t: "grid2", items: [
              { title: "Claude Design", body: "Crea diseños, prototipos interactivos y páginas de una hoja conversando, con un lienzo al lado del chat. Anthropic aclara que no hace falta ser diseñador. Está en todos los planes." },
              { title: "Claude Code", body: "La herramienta de Claude para programar, en la terminal, en editores de código y en la app de escritorio. Está pensada para quienes escriben código y está en los planes de pago." },
            ]},
            { t: "callout", kind: "nota", head: "Para ver en video", x: "Si quieres un recorrido visual completo, el tutorial «The Ultimate Beginner's Guide to Claude AI» (Metics Media, agosto de 2026, en inglés, 61 min) muestra estas funciones en pantalla. Es material externo: los nombres de menús y planes pueden haber cambiado, así que contrástalo con la ayuda oficial. [Ver en YouTube](https://www.youtube.com/watch?v=9oJySubZRSA)" },
            { t: "src", x: "Fuentes (consultadas el 20-nov-2026): Claude Help Center, [«Get started with Claude Design»](https://support.claude.com/en/articles/14604416); Claude Help Center, [«Use Claude Code with your Pro, Max, or Ultra plan»](https://support.claude.com/en/articles/11145838)." },
          ],
        },
        {
          id: "L9.4",
          code: "L9.4",
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
            { t: "callout", kind: "alert", head: "Tus datos y el entrenamiento", x: "En los planes individuales (gratuito, Pro y Max), Anthropic puede usar las conversaciones para entrenar modelos si el usuario lo permite en la opción de mejora del modelo de su configuración de privacidad, con excepción de los chats de incógnito. En los planes comerciales (Team, Enterprise y la API), en cambio, no se usan por defecto. Por lo mismo, para información de la empresa conviene usar la cuenta corporativa si existe y anonimizar de todos modos, ya que la Ley 21.719 aplicará a cualquier herramienta. Con entrenamiento aceptado, Anthropic conserva esas conversaciones hasta 5 años; sin él, 30 días." },
            { t: "src", x: "Fuentes: Claude Privacy Center, [«Is my data used for model training?»](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training), 16-mar-2026 (planes individuales); Anthropic, [«Updates to Consumer Terms and Privacy Policy»](https://www.anthropic.com/news/updates-to-our-consumer-terms), 28-ago-2025 (plazos de retención); y [mismo título para productos comerciales](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training), 18-ago-2026." },
          ],
        },
        {
          id: "L9.5",
          code: "L9.5",
          dur: "6 min",
          eyebrow: "Ejercicio",
          title: "Caso de empresa | leer los resultados de una puerta falsa",
          kind: "exercise",
          body: [
            { t: "p", x: "Tu equipo terminó un experimento de puerta falsa con una página publicada en Netlify, un formulario en Tally y el conteo de visitas en GoatCounter, del cual quedan dos exportaciones en CSV (visitas por día y respuestas del formulario), con las que el comité quiere saber si vale la pena seguir." },
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
        title: "Quiz Bloque 9 | Conectar y delegar",
        questions: [
          {
            stem: "Al conectar Google Drive o Microsoft 365 a Claude mediante un conector:",
            options: [
              "Claude ve todos los archivos de la empresa, incluso los que tú no puedes abrir.",
              "Claude accede con tus mismos permisos y, según el conector, podría también modificar datos.",
              "Claude solo puede leer archivos públicos.",
              "Los archivos se copian para siempre en tu cuenta de Claude.",
            ],
            correct: 1,
            explain: "Los conectores heredan tus permisos en el servicio conectado. Al conectar autorizas a Claude a leer y, según el caso, modificar datos; conecta solo lo que necesitas.",
          },
          {
            stem: "Antes de dejar que Claude trabaje con más autonomía (Cowork, tareas programadas o la extensión de Chrome), ¿qué recomienda Anthropic?",
            options: [
              "Darle acceso a todo para que trabaje más rápido.",
              "Usar el modo automático siempre.",
              "Conectar solo lo necesario, usar el modo manual cuando hay consecuencias reales y no usarlo con datos sensibles de trabajo.",
              "Nada especial: el riesgo es cero.",
            ],
            correct: 2,
            explain: "Una página o documento puede traer instrucciones escondidas que desvíen a Claude. Anthropic reconoce que ese riesgo no es cero, por eso pide acotar permisos y supervisar.",
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
        ],
      },
      paraLlevar: [
        "Conecta solo lo necesario: Claude actúa con tus mismos permisos.",
        "Mientras más autonomía le das, más importa acotar permisos y revisar.",
        "Para datos de la empresa, cuenta corporativa y anonimizar siempre.",
      ],
      cliffhanger: "",
      aforismo: "Claude redacta y calcula rápido, pero la firma del informe sigue siendo tuya.",
    },
  ],
};
