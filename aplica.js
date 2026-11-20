// «Aplica en 10 minutos»: ejercicios cortos para usar lo aprendido en el trabajo real,
// sobre todo en el correo. Se edita sin compilar. Cada paso lleva su tramo de minutos;
// el cronómetro de la página resalta el paso que corresponde.
// Datos de Microsoft y Anthropic revisados el 20-nov-2026 (fuentes al pie de cada ejercicio).

const FUENTE_OUTLOOK = "Fuentes: Microsoft Learn, [«What is Microsoft Copilot?»](https://learn.microsoft.com/en-us/copilot/plan/copilot-overview), actualizado el 17-nov-2026 (Copilot Chat «is aware of your open content»); Microsoft Support, [«Chat with Copilot in Outlook»](https://support.microsoft.com/en-us/outlook/copilot-outlook/chat-with-copilot-in-outlook), consultado el 20-nov-2026. Lo que Copilot puede hacer en Outlook depende de tu licencia y de cómo tu institución lo configuró.";

window.COURSE_DATA.aplica = {
  intro: "Ocho ejercicios de diez minutos para usar la IA generativa en tu trabajo desde hoy, seis de ellos en el correo. Cada uno parte de algo real tuyo, sigue el marco CORE y termina con un resultado concreto. Haz uno al día: en dos semanas tendrás el hábito.",
  reglas: [
    { k: "Anonimiza", x: "Antes de pegar, cambia nombres, RUT, montos y correos por marcadores como [CONTACTO_1] o [MONTO]." },
    { k: "Usa CORE", x: "Contexto, Objetivo, Restricciones y Expectativas. Los prompts de abajo ya vienen armados." },
    { k: "Verifica", x: "Lo que sale del chat es un borrador. Revisa cifras, fechas y tono antes de enviar." },
  ],
  sprints: [
    // -----------------------------------------------------------------
    {
      id: "a1", num: "01", tema: "Correo",
      titulo: "Ordena tu bandeja",
      bajada: "De 15 correos pendientes a una lista de qué hacer hoy.",
      resultado: "Una tabla con la categoría y la primera acción de cada correo.",
      herramienta: "Copilot Chat o Claude",
      tecnica: "Few-shot (Bloque 3)",
      leccion: "L3.5",
      pasos: [
        { min: [0, 2], titulo: "Junta y anonimiza", x: "Elige 15 correos sin responder. De cada uno copia solo el cargo del remitente, el asunto y la primera línea. Cambia nombres, empresas y montos por marcadores." },
        { min: [2, 5], titulo: "Pega y clasifica", x: "Pega la lista en el chat junto con este prompt. Los tres ejemplos le enseñan al modelo tu criterio.",
          prompt: { titulo: "Clasificar la bandeja (few-shot)", lineas: [
            { tag: "C", x: "Soy [TU CARGO]. Tengo 15 correos pendientes y necesito decidir qué hago con cada uno hoy." },
            { tag: "O", x: "Clasifica cada correo en una de cuatro categorías: Responder hoy, Delegar, Leer después o Archivar. Agrega la primera acción concreta, en 10 palabras como máximo." },
            { tag: "Ej 1", x: "«Jefatura pide las cifras del cierre para mañana» → Responder hoy | Enviar cifras antes de las 12" },
            { tag: "Ej 2", x: "«Proveedor invita a un webinar» → Archivar | Sin acción" },
            { tag: "Ej 3", x: "«[CLIENTE_001] reclama por un despacho atrasado» → Delegar | Reenviar a operaciones con plazo" },
            { tag: "R", x: "No inventes plazos ni datos que no estén en el texto. Si un correo es ambiguo, márcalo con «¿?»." },
            { tag: "E", x: "Tabla de tres columnas: asunto | categoría | primera acción. Ordénala por categoría." },
          ]}},
        { min: [5, 8], titulo: "Corrige con tu criterio", x: "El modelo no conoce tus prioridades. Cambia las categorías que no calcen y fíjate en los «¿?»: suelen ser los correos que conviene leer completos." },
        { min: [8, 10], titulo: "Actúa", x: "Responde ya los dos más urgentes. Si un remitente siempre termina en «Archivar», crea una regla de Outlook para que no vuelva a tu bandeja principal." },
      ],
      check: ["Sabes qué dos o tres correos respondes hoy.", "Ningún nombre, monto ni correo electrónico real salió de tu bandeja.", "Creaste al menos una regla o un paso rápido para lo repetitivo."],
      extra: { titulo: "Sin IA también se puede", x: "Las reglas y los pasos rápidos de Outlook automatizan lo que se repite (mover, marcar, reenviar) y no requieren licencia de Copilot." },
      fuente: "Fuentes: Microsoft Support, [«Manage email messages by using rules in Outlook»](https://support.microsoft.com/en-us/outlook/mail/manage-email-messages-by-using-rules-in-outlook) y [«Automatizar tareas comunes o repetitivas con pasos rápidos en Outlook»](https://support.microsoft.com/es-es/outlook/mail/automate-common-or-repetitive-tasks-with-quick-steps-in-outlook), consultados el 20-nov-2026.",
    },
    // -----------------------------------------------------------------
    {
      id: "a2", num: "02", tema: "Correo",
      titulo: "Responde un correo difícil",
      bajada: "Ese correo que llevas días postergando, resuelto en dos versiones.",
      resultado: "Un borrador listo para enviar, con el tono que necesitas y un próximo paso claro.",
      herramienta: "Copilot Chat o Claude",
      tecnica: "CORE + autocrítica (Bloque 3)",
      leccion: "L3.1", capsula: "c06",
      pasos: [
        { min: [0, 2], titulo: "Elige y anonimiza", x: "Un reclamo, un «no» que hay que dar o una negociación. Copia el correo y cambia nombres, empresas y montos por marcadores." },
        { min: [2, 5], titulo: "Pide dos versiones con CORE", x: "Pega el correo anonimizado dentro del prompt.",
          prompt: { titulo: "Responder un correo difícil", lineas: [
            { tag: "C", x: "Soy [TU CARGO] en [TIPO DE EMPRESA]. Recibí este correo de [CONTACTO_1], que es [cliente / jefatura / colega]: [PEGA AQUÍ EL CORREO ANONIMIZADO]" },
            { tag: "O", x: "Necesito una respuesta que [diga que no / proponga una alternativa / pida más plazo] sin dañar la relación." },
            { tag: "R", x: "Máximo 120 palabras. Sin disculpas excesivas ni frases de relleno como «cabe destacar». No prometas plazos ni montos que yo no haya escrito." },
            { tag: "E", x: "Dos versiones, una cordial y otra más directa. Ambas cierran con un próximo paso concreto." },
          ]}},
        { min: [5, 8], titulo: "Que se critique a sí mismo", x: "Elige la versión que más te acomode y pídele una revisión antes de pulirla.",
          prompt: { titulo: "Autocrítica", lineas: [
            { tag: "1", x: "¿Qué frase de esta versión podría molestar o malinterpretarse?" },
            { tag: "2", x: "¿Qué le falta para que [CONTACTO_1] sepa exactamente qué hacer?" },
            { tag: "3", x: "Reescríbela corrigiendo eso, sin pasar de 120 palabras." },
          ]}},
        { min: [8, 10], titulo: "Pon los datos y envía", x: "Copia el texto a tu correo y reemplaza ahí los marcadores por los datos reales (nunca en el chat). Ajústalo a tu forma de escribir y envíalo." },
      ],
      check: ["El correo termina con un pedido o un próximo paso claro.", "Los datos reales los pusiste tú, fuera del chat.", "Al leerlo en voz alta, suena a ti."],
    },
    // -----------------------------------------------------------------
    {
      id: "a3", num: "03", tema: "Correo",
      titulo: "Del hilo eterno a la lista de acciones",
      bajada: "Veinte correos de ida y vuelta convertidos en acuerdos con responsable y fecha.",
      resultado: "Una tabla de acuerdos y un correo al equipo para confirmarlos.",
      herramienta: "Copilot en Outlook o Copilot Chat",
      tecnica: "Copilot en Outlook (Bloque 5) + CORE (Bloque 3)",
      leccion: "L5.3",
      pasos: [
        { min: [0, 2], titulo: "Elige el hilo", x: "Un hilo largo de un proyecto. **Opción A:** cópialo y anonimízalo. **Opción B:** si en tu Outlook aparece Copilot con tu cuenta del trabajo, abre el hilo y pregúntale ahí; Copilot Chat lee el correo abierto sin que lo copies." },
        { min: [2, 5], titulo: "Extrae los acuerdos", x: "Las restricciones evitan que el modelo complete con suposiciones.",
          prompt: { titulo: "Hilo → acciones", lineas: [
            { tag: "C", x: "Este es un hilo de correos de un proyecto de mi equipo. [PEGA EL HILO ANONIMIZADO o usa el correo abierto]" },
            { tag: "O", x: "Extrae los acuerdos y las tareas pendientes." },
            { tag: "R", x: "Usa solo lo que dice el hilo. Si no hay responsable o fecha, escribe «sin definir». No resumas opiniones." },
            { tag: "E", x: "Tabla: acción | responsable | fecha | estado (acordado o por confirmar). Al final, una lista de preguntas abiertas." },
          ]}},
        { min: [5, 8], titulo: "Verifica contra el hilo", x: "Cada fila tiene que poder rastrearse hasta un correo. Tacha lo que no encuentres: es justo el tipo de dato que un LLM completa con algo plausible." },
        { min: [8, 10], titulo: "Cierra el circuito", x: "Pide: «Redacta un correo breve al equipo con esta tabla y las preguntas abiertas, para confirmar responsables y fechas». Revísalo y envíalo." },
      ],
      check: ["Cada acción tiene responsable o dice «sin definir».", "No hay nada en la tabla que no esté en el hilo.", "El equipo recibió la tabla para confirmarla."],
      fuente: FUENTE_OUTLOOK,
    },
    // -----------------------------------------------------------------
    {
      id: "a4", num: "04", tema: "Correo",
      titulo: "Seguimiento de reunión el mismo día",
      bajada: "Tus notas desordenadas convertidas en un correo de acuerdos.",
      resultado: "Un correo de seguimiento enviado hoy, con qué, quién y cuándo.",
      herramienta: "Copilot Chat o Claude",
      tecnica: "CORE (Bloque 3)",
      leccion: "L3.1",
      pasos: [
        { min: [0, 2], titulo: "Junta tus notas", x: "Las que tomaste en papel, en el teléfono o en el chat de la reunión. No hace falta ordenarlas. Anonimiza nombres de clientes y montos." },
        { min: [2, 5], titulo: "Redacta el seguimiento", x: "Pega las notas dentro del prompt.",
          prompt: { titulo: "Notas → correo de seguimiento", lineas: [
            { tag: "C", x: "Acabo de salir de una reunión con [ÁREA o CLIENTE_001] sobre [TEMA]. Estas son mis notas: [PEGA LAS NOTAS ANONIMIZADAS]" },
            { tag: "O", x: "Un correo de seguimiento para quienes asistieron." },
            { tag: "R", x: "Máximo 150 palabras. Incluye solo acuerdos que estén en mis notas; no agregues compromisos." },
            { tag: "E", x: "Asunto, saludo breve, acuerdos en viñetas (qué, quién, cuándo), próximo paso y cierre." },
          ]}},
        { min: [5, 8], titulo: "Busca lo que se «mejoró»", x: "Compara con tus notas. ¿Algún acuerdo quedó más firme o más suave de lo que fue? Corrígelo y pon nombres y fechas reales en tu correo." },
        { min: [8, 10], titulo: "Envía y agenda", x: "Envíalo y deja el próximo paso en tu calendario." },
      ],
      check: ["Enviado el mismo día de la reunión.", "Cada acuerdo tiene responsable y fecha.", "Ningún compromiso que no se haya acordado."],
    },
    // -----------------------------------------------------------------
    {
      id: "a5", num: "05", tema: "Configuración",
      titulo: "Tu perfil en Copilot",
      bajada: "Configura una vez quién eres y cómo escribes, y deja de repetirlo.",
      resultado: "Instrucciones personalizadas que Copilot aplica en cada conversación.",
      herramienta: "Copilot Chat",
      tecnica: "Personalización de Copilot (Bloque 6)",
      leccion: "L6.1",
      pasos: [
        { min: [0, 2], titulo: "Abre la personalización", x: "En la configuración de Copilot Chat busca la sección **Personalización** y las instrucciones personalizadas. El nombre del menú puede variar según idioma y versión." },
        { min: [2, 7], titulo: "Escribe tu perfil con CORE", x: "Usa esta plantilla y cambia lo que está entre corchetes. Describe tu rol y tus preferencias, nunca datos de la empresa.",
          prompt: { titulo: "Plantilla de instrucciones personalizadas", lineas: [
            { tag: "C", x: "Soy [CARGO] en el área de [ÁREA], en una empresa de [INDUSTRIA] en Chile." },
            { tag: "O", x: "Me ayudas a redactar correos, informes y resúmenes para [DESTINATARIOS HABITUALES]." },
            { tag: "R", x: "Español de Chile, formal pero directo. Sin frases de relleno. Nunca inventes cifras: si falta un dato, pregúntamelo." },
            { tag: "E", x: "Respuestas breves, con viñetas cuando ayuden, y un próximo paso al final." },
          ]}},
        { min: [7, 10], titulo: "Pruébalo", x: "Abre un chat nuevo y pide un correo simple, por ejemplo, confirmar una reunión. Compáralo con lo que obtenías antes." },
      ],
      check: ["Las instrucciones no tienen nombres, márgenes ni datos de clientes.", "Un chat nuevo ya responde en tu tono sin que lo pidas."],
      fuente: "Fuente: Microsoft Support, [«Customize how Microsoft 365 Copilot responds to you»](https://support.microsoft.com/en-us/microsoft-365-copilot/customize-how-microsoft-365-copilot-responds-to-you), consultado el 20-nov-2026.",
    },
    // -----------------------------------------------------------------
    {
      id: "a6", num: "06", tema: "Correo",
      titulo: "Tu kit de cinco prompts de correo",
      bajada: "Los cinco correos que más escribes, con su prompt listo para copiar.",
      resultado: "Una página guardada con cinco prompts reutilizables.",
      herramienta: "Copilot Chat (Páginas) o tus notas",
      tecnica: "CORE + Páginas de Copilot (Bloques 3 y 5)",
      leccion: "L5.5",
      pasos: [
        { min: [0, 2], titulo: "Piensa en tu semana", x: "¿Qué correos escribes una y otra vez? Los cinco de abajo son los más comunes; cambia los que no te sirvan." },
        { min: [2, 8], titulo: "Ajusta los cinco", x: "Copia el bloque, completa los corchetes con tu contexto y pruébalo una vez con un caso real anonimizado.",
          prompt: { titulo: "Kit de correo (cinco prompts)", lineas: [
            { tag: "1", x: "Responder: «Soy [CARGO]. Responde este correo de [CONTACTO_1] confirmando [X], en máximo 80 palabras, con un próximo paso. Correo: [...]»" },
            { tag: "2", x: "Decir que no: «Necesito rechazar [PEDIDO] de [CONTACTO_1] sin cerrar la puerta. Máximo 100 palabras, tono cordial, ofrece [ALTERNATIVA].»" },
            { tag: "3", x: "Pedir información: «Redacta un correo a [ÁREA] pidiendo [DATOS] para el [FECHA]. Explica para qué los necesito en una frase. Viñetas.»" },
            { tag: "4", x: "Resumir: «Resume este hilo en tres viñetas: qué se decidió, qué falta y quién debe hacer qué. Usa solo lo escrito. Hilo: [...]»" },
            { tag: "5", x: "Seguimiento: «Han pasado [N] días sin respuesta de [CONTACTO_1] sobre [TEMA]. Redacta un recordatorio breve y amable con una fecha límite.»" },
          ]}},
        { min: [8, 10], titulo: "Guárdalos donde los veas", x: "Desde una respuesta de Copilot usa **Editar en Páginas** para guardarlos en una página (queda en la Biblioteca) o pégalos en tus notas." },
      ],
      check: ["Tienes los cinco prompts guardados en un lugar al que llegas en dos clics.", "Probaste al menos uno con un caso real anonimizado."],
      fuente: "Fuente: Microsoft Support, [«Get started with Microsoft Copilot Pages»](https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-microsoft-365-copilot-pages), consultado el 20-nov-2026.",
    },
    // -----------------------------------------------------------------
    {
      id: "a7", num: "07", tema: "Reuniones",
      titulo: "Prepara tu próxima reunión",
      bajada: "Objetivo, agenda y preguntas antes de entrar, no después.",
      resultado: "Una agenda de tres puntos con las preguntas que tienes que hacer.",
      herramienta: "Copilot Chat o Claude",
      tecnica: "CORE + autocrítica (Bloque 3)",
      leccion: "L3.7",
      pasos: [
        { min: [0, 2], titulo: "Reúne el contexto", x: "La invitación, el último correo sobre el tema o tus notas previas. Anonimiza lo que corresponda." },
        { min: [2, 6], titulo: "Arma la agenda", x: "Pega el contexto dentro del prompt.",
          prompt: { titulo: "Preparar una reunión", lineas: [
            { tag: "C", x: "Mañana tengo una reunión de 30 minutos con [ROL] sobre [TEMA]. Esto es lo que sé: [CONTEXTO ANONIMIZADO]" },
            { tag: "O", x: "Una agenda con objetivo y decisiones por tomar." },
            { tag: "R", x: "Máximo tres puntos. No supongas datos que no te di." },
            { tag: "E", x: "Objetivo en una frase | tres puntos con minutos | tres preguntas que debo hacer | qué debo llevar." },
          ]}},
        { min: [6, 9], titulo: "Anticipa objeciones", x: "Pregunta: «¿Qué objeción podría plantear [ROL] a cada punto y cómo la respondo en una frase?»." },
        { min: [9, 10], titulo: "Comparte", x: "Envía la agenda a los asistentes o pégala en la invitación." },
      ],
      check: ["La reunión tiene un objetivo escrito en una frase.", "Sabes qué decisión quieres obtener."],
    },
    // -----------------------------------------------------------------
    {
      id: "a8", num: "08", tema: "Correo",
      titulo: "Revisa antes de enviar",
      bajada: "Un segundo par de ojos para el correo o el informe que importa.",
      resultado: "Un texto más claro, sin ambigüedades y sin datos expuestos.",
      herramienta: "Copilot Chat o Claude",
      tecnica: "Autocrítica (Bloque 3)",
      leccion: "L3.7",
      pasos: [
        { min: [0, 2], titulo: "Elige el borrador", x: "Un correo a tu jefatura, a un cliente o al comité. Anonimízalo." },
        { min: [2, 6], titulo: "Pide una revisión, no una reescritura", x: "Así mantienes tu voz y decides qué cambiar.",
          prompt: { titulo: "Revisión antes de enviar", lineas: [
            { tag: "C", x: "Voy a enviar este borrador a [DESTINATARIO]: [PEGA EL BORRADOR ANONIMIZADO]" },
            { tag: "O", x: "Revísalo antes de que lo envíe." },
            { tag: "R", x: "No lo reescribas entero. Señala los problemas y cita la frase exacta." },
            { tag: "E", x: "Lista: (1) si el pedido se entiende en la primera línea, (2) frases ambiguas o de tono riesgoso, (3) datos o cifras que debería verificar, (4) una primera línea más directa." },
          ]}},
        { min: [6, 10], titulo: "Decide y corrige tú", x: "Aplica solo los cambios con los que estés de acuerdo. Verifica las cifras que marcó contra la fuente original y envía." },
      ],
      check: ["El pedido está en la primera línea.", "Verificaste cada cifra marcada.", "La versión final la escribiste tú."],
    },
  ],
  claude: {
    titulo: "Si usas Gmail con Claude",
    x: "Claude tiene un conector de Google Workspace que puede leer y buscar correos, crear borradores y, con tu aprobación, responder o enviar. En los planes Team y Enterprise, primero debe habilitarlo quien administra la organización. Conéctalo solo si lo necesitas y con la cuenta que corresponda: los ejercicios funcionan igual pegando el texto anonimizado.",
    fuente: "Fuente: Claude Help Center, [«Use Google Workspace connectors»](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors), consultado el 20-nov-2026.",
  },
};
