# Mega-prompt: Curso interactivo de Copilot Chat Básico
## Artifact tipo Coursera para acompañar sesión presencial de 120 minutos

---

## CÓMO USAR ESTE PROMPT

1. Abre una conversación nueva en **claude.ai**.
2. Copia todo el contenido entre las líneas `===== INICIO DEL PROMPT =====` y `===== FIN DEL PROMPT =====`.
3. Pégalo tal cual.
4. **Claude te hará 3 preguntas de intake primero** — respóndelas con tu contexto real (empresa/audiencia/caso).
5. Cuando respondas, Claude construye el artifact React al costado derecho.
6. Itera pidiéndole ajustes ("agrega un cuarto quiz", "cambia la paleta a verde", "el caso ancla está muy abstracto") y Claude edita sobre el mismo artifact.
7. Cuando esté listo: botón **Publicar** arriba del artifact para link compartible al equipo, o **Ver código** para descargar.

---

===== INICIO DEL PROMPT =====

Vas a construir un **Artifact React funcional tipo curso Coursera** que sirve como aplicación de acompañamiento durante una sesión presencial de 120 minutos donde se enseña Microsoft Copilot Chat Básico (la versión gratuita comercial con cuenta Entra ID). El artifact lo usará el instructor proyectado en pantalla de sala y cada alumno en paralelo en su propio notebook, avanzando en espejo.

Antes de construir nada, necesito que hagas tres preguntas de intake al usuario y esperes sus respuestas. Cuando responda, generas el artifact completo personalizado.

## FASE 1 — INTAKE (antes de construir, obligatorio)

Saluda brevemente y haz estas tres preguntas en un solo mensaje, numeradas y claras. No intentes construir el artifact todavía:

**1. Contexto de la audiencia del curso.** ¿Para quién es el curso? Ejemplos de respuesta útil: "empresa industrial chilena de 60 personas, mitad vendedores B2B mitad administrativos, sin formación técnica"; "alumnos MBA ejecutivos de un programa weekend"; "equipo de marketing digital de una PyME, promedio 35 años". Si el usuario no sabe o dice "genérico", usa default: profesional adulto de empresa chilena, no técnico, español chileno formal pero cercano.

**2. Caso o tarea hilo conductor.** ¿Qué tarea real del día a día de esa audiencia quieres usar como hilo conductor del curso? (ej. "redactar cotizaciones y correos de seguimiento a clientes", "preparar reportes ejecutivos mensuales", "atender consultas entrantes por email"). Si no tiene o dice "sugiere tú", usa default: redactar comunicaciones profesionales con clientes (correos, cotizaciones, seguimientos) — funciona para casi cualquier audiencia corporativa.

**3. Paleta visual.** ¿Tiene preferencia de colores corporativos (ej. azul #003EA6 + naranja #F2802A), o uso una paleta neutra pedagógica? Si no responde, usa default pedagógico: azul profundo #1E3A8A (primary), naranja cálido #EA580C (accent), grises neutros y verde escudo #16A34A para indicador EDP.

**No construyas el artifact hasta recibir respuestas.** Si el usuario dice "usa defaults en todo" o equivalente, avanza con los defaults ya definidos arriba.

## FASE 2 — CONSTRUCCIÓN DEL ARTIFACT

Una vez que tengas las respuestas del intake, construye un artifact React único (`application/vnd.ant.react`) con todo lo que sigue. Personaliza los ejemplos, prompts y caso ancla con los datos del intake. Si la audiencia es de minería, los ejemplos hablan de minería; si es marketing, de campañas; si es contabilidad, de balances. Mantén los principios pedagógicos idénticos; varía solo el caso.

### Objetivo del curso

Que en 120 minutos los participantes pasen de no usar Copilot a usarlo con seguridad, disciplina de anonimización, framework estructurado (CORE) y criterio para no alucinar cifras. No es un tour del producto: es un taller de adopción con ejercicios reales de su día a día.

### Estructura del curso: 4 bloques de 30 minutos

El artifact organiza el curso en **4 bloques** secuenciales, navegables desde una sidebar izquierda. Cada bloque tiene **4-6 lecciones cortas** con checkbox de completada, al menos 1 ejercicio práctico y un quiz de cierre de 2-3 preguntas con autocorrección. Al terminar el bloque 4 hay un resumen imprimible del progreso.

#### Bloque 1 — "Tu primer chat seguro" (30 min)
Fundamentos y seguridad. Prioridad absoluta: que el alumno salga entendiendo escudo verde, EDP y anonimización antes de escribir su primer prompt.

Lecciones sugeridas (ajusta exactos según audiencia del intake):
- **L1.1 Pregunta disparadora (3 min):** "¿Pegarías en Copilot [la tarea del intake] tal cual la harías en Word?" Micro-discusión o reflexión individual.
- **L1.2 Qué es Copilot Chat Básico (5 min):** versión gratuita comercial con Entra ID, diferencia con Copilot personal (Hotmail), ubicación en m365.cloud.microsoft/chat. Screenshot descriptivo con anotaciones del escudo verde arriba a la derecha.
- **L1.3 El escudo verde y EDP (7 min):** qué garantiza Enterprise Data Protection — tus prompts no entrenan modelos, datos procesados en tenant corporativo, auditables por TI vía Purview. Lista de "sí cubre" vs "no cubre" (búsquedas web de Bing NO están cubiertas por EDP).
- **L1.4 Ley 21.719 (Chile) en la práctica (5 min):** vigente desde 1-dic-2026, alinea con GDPR, sanciones hasta 20.000 UTM. La empresa es responsable de tratamiento. Implicancia directa: no pegues datos personales de clientes sin anonimizar, aunque sea a Copilot.
- **L1.5 Reglas de anonimización (5 min):** placeholders estándar — [CLIENTE_001], [RUT_X], [CONTACTO_1], [OC_X], [MONTO], [DATO_CONTACTO]. Regla de oro: *"Si lo que vas a pegar no lo pondrías en un correo a un tercero externo, no lo pongas en Copilot."*
- **L1.6 Ejercicio "trampa consciente" (5 min):** prompt de ejemplo con datos sensibles sin anonimizar (plausible para la audiencia del intake). El alumno debe identificar qué 5 elementos expondría. Luego se muestra la versión anonimizada correcta.
- **Quiz Bloque 1:** 3 preguntas de opción múltiple sobre escudo verde, Ley 21.719 y qué datos se pueden / no se pueden pegar.
- **Cliffhanger:** *"En el próximo bloque: por qué Copilot inventa cifras técnicas con total confianza, y cómo el framework CORE te protege de eso."*
- **Frase pegadora cierre bloque:** *"El escudo verde protege tus datos. Pero no protege tus decisiones."*

#### Bloque 2 — "CORE: prompts que no alucinan" (30 min)
El framework CORE es el corazón pedagógico del curso y distingue este taller de cualquier tutorial genérico de YouTube.

Lecciones:
- **L2.1 La Frontera Irregular (5 min):** Dell'Acqua et al. (2023, Harvard Business School, 758 consultores BCG). Dentro de la frontera: +40% productividad, +25% calidad. Fuera: -23% de rendimiento. Ejemplos para la audiencia del intake: 5 tareas dentro, 5 tareas fuera. Número grande visual: "+40% / −23%".
- **L2.2 Framework CORE explicado (10 min):** Los 4 componentes.
  - **C** — **Contexto:** quién eres, qué empresa, para quién redactas, qué sabes del destinatario.
  - **O** — **Objetivo:** qué quieres obtener (no qué quieres que diga Copilot; qué quieres tener al final).
  - **R** — **Restricciones:** largo, formato, lo que NO debe hacer, datos que no tiene, tono a evitar.
  - **E** — **Expectativas:** estructura, estilo, ejemplo de respuesta deseada, criterios de calidad.
  - Ejemplo completo aplicado al caso del intake, con los 4 componentes etiquetados visualmente con color por letra.
- **L2.3 Zero-shot vs CORE (5 min):** el mismo caso pedido dos veces — versión vaga ("ayúdame con un correo para X") vs versión CORE estructurada. Muestra las dos respuestas esperables de Copilot. El alumno percibe el salto de calidad.
- **L2.4 Role prompting sobre CORE (5 min):** técnica complementaria — añadir un rol experto ("Eres un especialista en [área del intake] con 15 años de experiencia en Chile...") al componente Contexto del CORE. Demuestra con el caso.
- **L2.5 Ejercicio guiado (5 min):** el alumno redacta, en un área de texto dentro del artifact, un prompt CORE para una variante del caso del intake. El artifact muestra una rúbrica de autoevaluación de 4 puntos (uno por cada letra de CORE: ¿tu prompt tiene Contexto claro? ¿Objetivo específico? etc.).
- **Quiz Bloque 2:** 3 preguntas — una identificando qué letra de CORE falta en un prompt dado, una sobre la Frontera Irregular, una sobre cuándo usar role prompting.
- **Cliffhanger:** *"Con CORE ya no alucinas el input. En el próximo bloque, cómo evitar que Copilot alucine el output — incluso en tareas con números."*
- **Frase pegadora:** *"Un prompt sin CORE es una pregunta sin coordenadas. Puede salir cualquier cosa — y probablemente saldrá."*

#### Bloque 3 — "Técnicas avanzadas y el chat completo" (30 min)
Ahora que dominan CORE, se agregan las otras 3 técnicas de prompt engineering y las features del chat que aún no han visto.

Lecciones:
- **L3.1 Few-shot prompting (4 min):** enseñar por ejemplos en lugar de reglas. Caso: clasificación de correos entrantes en urgente/normal/consulta. Ejemplo CORE + 3 ejemplos etiquetados.
- **L3.2 Chain-of-thought (4 min):** la frase "piensa paso a paso" sube la precisión en razonamiento lógico del 58% al 93% (referencia: Wei et al., 2022). Demo: cálculo compuesto aplicado al caso del intake con y sin CoT.
- **L3.3 Self-critique (4 min):** el modelo como su propio auditor. Flujo: **Generar → Criticar ("¿qué supuestos hiciste?") → Mejorar**. Demo con una redacción de comunicación profesional del caso.
- **L3.4 Selector de modos (5 min):** Automático (default diario), Respuesta rápida, Pensar más profundo (razonamiento extendido — usa esto para CoT complejo y análisis con números), Buscar (fuerza búsqueda web con citas). Regla de bolsillo: 90% Automático, Pensar más profundo cuando lo anterior salió pobre, Buscar para info que cambia.
- **L3.5 Subir archivos (7 min):** PDF/DOCX/XLSX/CSV hasta 512 MB, cupo diario ~3-10 archivos. Qué lee bien (texto estructurado) y qué lee mal (PDFs escaneados sin OCR, tablas con celdas fusionadas). Anonimizar **antes** de subir. Demo con un archivo ficticio del dominio del intake (ej. CSV de pipeline anonimizado).
- **L3.6 Generar imágenes (3 min):** cuándo tiene sentido (infografías internas, banners, mockups de comunicación). Cuándo NO (renders técnicos, planos, documentos oficiales, cualquier cosa que requiera precisión métrica). Cupo diario entre 1-15 imágenes.
- **L3.7 Ejercicio integrador (3 min):** el alumno debe decidir qué técnica (few-shot / CoT / self-critique) y qué modo (Automático / Pensar más profundo / Buscar) usaría para 3 tareas distintas. Respuesta con explicación.
- **Quiz Bloque 3:** 3 preguntas — cuál técnica para qué tarea, cuándo Pensar más profundo, qué NO hacer con imágenes.
- **Cliffhanger:** *"Sabes redactar prompts perfectos. Pero ¿qué pasa cuando el lunes necesitas el mismo contexto que ya cargaste hoy? El próximo bloque: memoria, colaboración y agentes."*
- **Frase pegadora:** *"Pensar más profundo no es más lento. Es más barato que corregir después."*

#### Bloque 4 — "Biblioteca, Páginas y Agentes: Copilot que trabaja contigo" (30 min)
Cierre con las features de equipo y persistencia. Lo diferenciador: construir un agente simple en vivo, que le quede al alumno al final de la sesión.

Lecciones:
- **L4.1 Biblioteca y Páginas (7 min):** lienzo colaborativo multiusuario. Flujo: prompt en chat → "Editar en Páginas" → iterar con chat a la izquierda, Página a la derecha → compartir link. Ejemplos de Páginas útiles para la audiencia del intake.
- **L4.2 Personalización ("Enseñar") (5 min):** dejar cargado tu perfil profesional para que Copilot no te pregunte quién eres cada vez. Ejemplo del perfil de la audiencia del intake. Qué NO poner nunca ahí (datos sensibles de terceros, precios confidenciales, comisiones).
- **L4.3 Agent Builder gratis (5 min):** sorpresa — Agent Builder funciona en Copilot Chat Básico. Límites: hasta 4 URLs públicas de conocimiento, instrucciones, prompts de inicio, capacidad de imagen e intérprete de código básico. No puede acceder a datos del tenant (SharePoint, correos).
- **L4.4 Construcción guiada de un agente (8 min):** paso a paso, construimos un agente genérico útil para el caso del intake — típicamente un "Asistente de [tarea hilo conductor]". El artifact muestra los 5 pasos de Agent Builder con textos ejemplo listos para copiar:
  1. Nombre e ícono del agente
  2. Descripción (≤ 1000 car.)
  3. Instrucciones completas en formato CORE (≤ 8000 car.)
  4. Hasta 4 URLs públicas de conocimiento (ej. sitio corporativo, regulaciones públicas)
  5. Prompts de inicio sugeridos (hasta 10)
- **L4.5 Upgrade path (3 min):** cuándo vale la pena pagar la licencia M365 Copilot (~USD 30/usuario/mes). Tabla breve: lo que cambia (Copilot dentro de Word/Excel/PowerPoint/Outlook, grounding en tenant, Researcher y Analyst, modo Agente en Excel). Regla MVP: primero 5-15 power users, luego escalar.
- **L4.6 Plan de 90 días (2 min):** timeline con 3 hitos — Semana 1 (aplicar en 3 tareas reales), Semana 4 (construir tu Playbook personal con 10 prompts ganadores), Semana 12 (retrospectiva y decisión de upgrade).
- **Quiz Bloque 4:** 3 preguntas — qué puede / no puede un agente gratis, qué va en Personalización, cuándo subir a pagado.
- **Frase pegadora final del curso:** *"Copilot no reemplaza al profesional que piensa. Reemplaza al profesional que no quiso aprender a pensar con él."*

### Framework CORE como sello transversal

CORE debe aparecer explícitamente etiquetado en **cada prompt de ejemplo** del curso (desde el Bloque 2 en adelante). Visualmente usa 4 chips de color distinto para cada letra (ej. Contexto azul, Objetivo verde, Restricciones naranja, Expectativas morado) que acompañan cada bloque de texto del prompt. Esto hace que el alumno internalice la estructura por repetición, no por memorización.

### Estilo pedagógico — obligatorio en todo el artifact

Imitar el estilo del instructor (MBA exigente con casos reales LATAM):

1. **Pregunta disparadora al inicio de cada bloque** (nunca empiezas con "Definición de..."). Ej.: *"¿Pegarías en Copilot la cotización que armaste ayer?"*
2. **Marcos académicos citados con autor y año** — Dell'Acqua et al. (2023, HBS) para Frontera Irregular; Wei et al. (2022) para Chain-of-Thought; Mollick (2024, *Co-Intelligence*) si se menciona el espectro Copiloto→Centauro.
3. **Evidencia cuantitativa con números grandes** visuales: "+40% / −23%", "58% → 93%", "3h → 25 min".
4. **"Para llevar" al cierre de cada bloque**: 3 puntos numerados, máximo 12 palabras cada uno.
5. **Cliffhanger entre bloques**: pregunta abierta que se resuelve en el siguiente.
6. **Frase pegadora tipo aforismo** al cierre de cada bloque, en itálica, destacada.
7. **Ejercicio con giro pedagógico** en al menos 2 bloques: ej. el de "trampa consciente" del Bloque 1 donde el alumno pega datos sensibles sin saber y luego se revela qué expuso.
8. **Sin emojis decorativos**. Usa íconos de lucide-react solo cuando aporten a comprensión.

## ESPECIFICACIONES TÉCNICAS DEL ARTIFACT

### Tecnología obligatoria
- **React funcional** con `useState` y `useMemo`. **NO uses `useEffect` para persistencia**.
- **Tailwind core utilities** exclusivamente (no JIT custom classes; para colores de marca usa arbitrary values `bg-[#1E3A8A]` / `text-[#EA580C]`).
- **lucide-react** para iconografía: Shield, ShieldCheck, Target, Sparkles, Bot, ChevronDown, ChevronUp, ChevronRight, Play, FileText, Users, Clock, Award, AlertTriangle, CheckCircle2, Zap, BookOpen, MessageSquare, Library, Code2, Copy, Check, Printer, Presentation, Menu, X, ArrowRight, Lightbulb, AlertCircle.
- **Sin dependencias externas**, sin `fetch`, sin imágenes externas, sin canvas complejo, sin animaciones con librerías. Todo autocontenido.
- Single-file, default export, sin props requeridos.

### Restricciones técnicas de Artifacts que debes respetar SÍ O SÍ
- **Prohibido `localStorage`, `sessionStorage` o cualquier storage del navegador.** Todo estado en memoria con `useState`. Al recargar la página el progreso se pierde — está bien, es comportamiento esperado del entorno.
- **Prohibido `fetch`, `XMLHttpRequest` o llamadas HTTP externas.**
- Para el **botón "Copiar prompt"** usa `navigator.clipboard.writeText()` con try/catch y fallback visual (cambiar icono a check verde por 2 segundos).
- Para el **botón "Imprimir mi progreso"** usa `window.print()` con una media query `@media print` en estilos inline que oculte la sidebar, quizzes no completados y elementos de navegación, mostrando solo título, datos del alumno, progreso y lecciones completadas.

### Features interactivas obligatorias

Implementa estas 5 features sin excepción:

**1. Checkbox de "lección completada" con barra de progreso**
Cada lección tiene un checkbox lateral. Al marcarlo, la lección se tiñe suavemente de verde y cuenta para el progreso del bloque. Barra de progreso en el top del artifact muestra el porcentaje total del curso (0-100%), con indicador por bloque abajo. El alumno puede marcar y desmarcar libremente.

**2. Quizzes con autocorrección al final de cada bloque**
Al final de cada bloque hay un componente Quiz con 2-3 preguntas de opción múltiple. Al responder cada pregunta, se revela inmediatamente si acertó (verde con check) o falló (rojo con X) más una **explicación breve** (2-3 líneas) de por qué esa era la respuesta correcta. Al completar todas las preguntas del quiz, se desbloquea visualmente el siguiente bloque (opcional: puedes permitir avanzar sin completarlo también, solo muestra badge de "no completado").

**3. Botón "Copiar prompt" en cada ejemplo**
Cada bloque de código con un prompt tiene arriba a la derecha un botón pequeño con icono Copy. Al hacer clic, copia el texto al portapapeles usando `navigator.clipboard.writeText()`. Feedback visual: icono cambia a Check verde por 2 segundos. Si la API falla por permisos del iframe, fallback a `document.execCommand('copy')` con un textarea temporal.

**4. Botón "Imprimir mi progreso" al final del curso**
En la pantalla del Bloque 4 o en un pie de artifact, botón "Imprimir mi progreso" que dispara `window.print()`. Con CSS `@media print` que:
- Muestra: título del curso, nombre de la audiencia (del intake), fecha actual, lista de lecciones completadas con checkmarks, resultados de quizzes, lista de prompts que marcó como "ganadores" (si existiera).
- Oculta: sidebar, botones interactivos, modo proyector toggle, quizzes vacíos.
- Formato apto A4 con tipografía legible (sans-serif 11-12pt).

**5. Modo proyector**
Toggle en el header (icono Presentation) que activa un modo con:
- Tipografía aumentada 1.5x (base text-xl en vez de text-base, títulos text-5xl en vez de text-3xl)
- Mayor contraste (texto más negro, bordes más marcados)
- Más padding entre bloques
- Oculta sidebar (o la colapsa a iconos solamente)
- Centra el contenido principal con `max-w-5xl mx-auto`

### Paleta visual

Si el usuario dio preferencia en el intake, úsala. Si no, usa esta paleta pedagógica default:
- **Primary (azul profundo):** `#1E3A8A` — títulos, headers de sección, botones primarios
- **Accent (naranja cálido):** `#EA580C` — callouts, frases pegadoras, CTAs
- **Success (verde EDP):** `#16A34A` — escudo de seguridad, lecciones completadas, respuestas correctas
- **Warning (rojo alerta):** `#DC2626` — regla de oro, "no pegues esto", respuestas incorrectas
- **Info (azul claro):** `#DBEAFE` — background de cards informativas
- **Neutral grays:** `#F9FAFB` (page bg), `#F3F4F6` (card bg), `#6B7280` (text muted), `#111827` (text primary)

Para los 4 chips del framework CORE usa colores distintivos estables a lo largo del curso:
- **C** Contexto: `#1E40AF` (azul)
- **O** Objetivo: `#047857` (verde esmeralda)
- **R** Restricciones: `#C2410C` (naranja quemado)
- **E** Expectativas: `#7C3AED` (morado)

### Tipografía
- Headlines: `font-serif` (system Georgia fallback) peso bold, `text-4xl` a `text-6xl` según jerarquía.
- Cuerpo: `font-sans` (system-ui), `text-base` a `text-lg`.
- Metadata: `text-xs` con `text-gray-500`.
- Código de prompts: `font-mono` con `bg-gray-900 text-gray-100 p-4 rounded-lg`.

### Layout general

Arquitectura de la aplicación:

**Header fijo arriba:**
- Logo texto "Copilot Chat Básico · Curso" + nombre de la audiencia (del intake) a la izquierda
- Barra de progreso total centrada
- Cluster de botones a la derecha: toggle Modo Proyector, botón Imprimir Progreso

**Sidebar izquierda (colapsable en mobile):**
- Lista de los 4 bloques con número grande en círculo (coloreado según progreso: gris vacío / naranja en curso / verde completado)
- Bajo cada bloque, sus lecciones con mini-checkbox y título abreviado
- Click en lección lleva al contenido y hace scroll

**Área principal (derecha):**
- Renderiza el bloque actualmente seleccionado
- Cada lección es una tarjeta con: título, duración estimada (ej. "5 min"), contenido (texto + ejemplos + ejercicios), checkbox "marcar completada"
- Al final del bloque: card destacada con el Quiz
- Después del Quiz: card con "Para llevar" (3 puntos numerados), cliffhanger (italic, en box destacada), y frase pegadora (enorme, en naranja, itálica)

**Responsive:**
- Desktop (≥1024px): sidebar fija izquierda 280px + main flex-1
- Tablet (768-1023px): sidebar colapsable con hamburger
- Mobile (<768px): sidebar oculta por default, header compacto

### Calidad visual que marca la diferencia

1. **Jerarquía tipográfica marcada**: títulos grandes (`text-5xl`/`text-6xl`), cuerpo cómodo (`text-base`/`text-lg`), metadata pequeña (`text-xs`).
2. **Whitespace generoso**: `py-12` mínimo entre secciones grandes, `p-6` o `p-8` en cards.
3. **Números grandes protagónicos**: "+40%", "120 min", "4 bloques", "93%", "CORE" — siempre `font-serif text-6xl` o similar, color accent.
4. **Bordes laterales gruesos en callouts**: borde izquierdo de 4-8px con color temático (naranja para "Tip", rojo para "Alerta", verde para "OK", azul para "Nota académica").
5. **Cards con `shadow-md hover:shadow-lg transition-shadow`** para dar feedback táctil.
6. **Un solo motivo visual repetido**: círculos numerados para lecciones y bloques. Mantén ese motivo.
7. **Sin líneas decorativas bajo títulos** (es hallmark de slop AI). Usa jerarquía tipográfica, no adornos.
8. **Sin gradientes cutres** ni sombras exageradas.
9. **Background blanco o `bg-gray-50`**; solo cards con bg-white o bg-[#color]-50 de tinte claro para callouts.
10. **Icono + título** en cada card (lucide icon en círculo coloreado de fondo suave).

### Lo que NO debes hacer

- No inventes casos corporativos, empresas ficticias con nombre, cifras específicas de compañías reales, ni bases legales sin citar. Si no estás 100% seguro de un dato (ej. cupo exacto de imágenes/día en Copilot Básico), **no lo pongas** o marca "aproximado, verificar en documentación oficial Microsoft".
- No uses `localStorage`/`sessionStorage` bajo ninguna circunstancia.
- No llames `fetch` ni APIs externas.
- No insertes imágenes por URL (no se cargan en el entorno del artifact).
- No uses `<form>` HTML tags en React artifacts.
- No repitas el mismo layout en cada lección — varía entre 2 columnas, 1 columna full, cards grid de 3, callouts destacados.
- No incluyas el emoji 🚀 🎉 🔥 ni similar en ningún lado.
- No uses líneas decorativas bajo títulos.
- No asumas que el artifact tiene storage — al recargar se resetea y está bien.

### Entregable final

Un único artifact React funcional de inmediato, con default export, que:
1. Al cargarse muestra el Bloque 1 como activo por default y sidebar visible.
2. Permite al alumno navegar libremente entre bloques, marcar lecciones, responder quizzes, copiar prompts.
3. Funciona igualmente bien en notebook personal (a ~1366×768) y proyectado en pantalla grande con el modo proyector activo.
4. En todo el contenido pedagógico usa español chileno (o español neutro si la audiencia del intake no es chilena) y el caso hilo conductor del intake en todos los ejemplos desde el Bloque 2 en adelante.

Empieza haciendo las tres preguntas de intake. No construyas nada hasta tener respuestas.

===== FIN DEL PROMPT =====

---

## NOTAS DE USO Y VARIANTES

### Iteración típica después de generar el artifact

Una vez que Claude construye el artifact, probablemente querrás iterar. Prompts útiles:

- *"Agrega una lección extra en el Bloque 3 sobre cómo anonimizar un Excel antes de subirlo."*
- *"Los quizzes están muy fáciles, sube la dificultad y que pregunten aplicación, no definición."*
- *"Cambia la paleta a verde oliva + dorado, mantén la estructura."*
- *"El caso hilo conductor quedó genérico, apégalo más al día a día de [cargo]."*
- *"El ejercicio del Bloque 1 necesita un giro más fuerte, hazlo más incómodo para que el aprendizaje se fije."*

### Variantes útiles

**Variante para instructores: versión bilingüe.** Añade al prompt después del intake: *"Genera todo el contenido pedagógico en español chileno, pero los nombres de las técnicas (zero-shot, role prompting, chain-of-thought, self-critique) y el framework CORE se mantienen con sus términos en inglés cuando correspondan originalmente."*

**Variante self-paced asíncrona.** Añade al prompt: *"Quita todas las referencias a sesión presencial, 120 min y cronograma fijo. Haz que funcione como curso on-demand que el alumno completa a su ritmo en 3-4 días. Añade a cada bloque una tarea opcional de aplicación al trabajo real del alumno."*

**Variante modo instructor.** Añade al prompt: *"En cada lección incluye una sección plegable 'Notas del instructor' con: tiempo estimado de exposición, pregunta para lanzar al grupo, anticipación de errores comunes de los alumnos, y 1 historia breve para ilustrar el punto. Esta sección solo aparece en modo proyector."*

**Variante bilingüe EN/ES.** Añade al prompt: *"Incluye un toggle EN/ES en el header que alterna todo el contenido del curso entre ambos idiomas (estado en useState)."*

### Checklist de calidad antes de usar el artifact en sala

- [ ] El artifact cargó sin errores de consola (F12 → Console en claude.ai preview).
- [ ] Los checkboxes de lecciones marcan/desmarcan correctamente.
- [ ] La barra de progreso sube cuando marcas lecciones.
- [ ] El botón "Copiar prompt" realmente copia al portapapeles (prueba pegando en un editor de texto).
- [ ] Los quizzes dan feedback correcto en las 4 secciones.
- [ ] El modo proyector agranda todo y oculta la sidebar.
- [ ] `window.print()` genera una vista imprimible decente.
- [ ] La paleta respeta la marca (si pediste marca).
- [ ] Los prompts ejemplo del Bloque 2 tienen las 4 letras CORE etiquetadas con colores.
- [ ] El caso hilo conductor se ve consistentemente desde el Bloque 2 hasta el 4.

Si algo falla: díselo a Claude en la misma conversación y lo arregla sobre el artifact existente.
