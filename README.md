# Trabajando con IAG | Copilot

Curso autoguiado sobre el uso responsable de IA generativa en el trabajo, preparado por Miguel Ángel Fernández, Ph.D. El caso que recorre el curso es la preparación de reportes ejecutivos mensuales. Se recorre de tres maneras:

- **Mira**: cápsulas de un minuto en video vertical, con la voz de MAF, subtítulos y transcripción.
- **Aprende**: nueve bloques, tres por parte. **I. IA generativa**, que vale para cualquier herramienta: 1 Entender, 2 Proteger tus datos y 3 Pedir bien (CORE y técnicas). **II. Copilot**: 4 Empezar, 5 Trabajo diario (archivos, Outlook, Word, Excel, PowerPoint y Páginas) y 6 Memoria y agentes. **III. Claude**: 7 Empezar, 8 Investigar, crear y organizar, y 9 Conectar y delegar.
- **Aplica en 10 minutos**: ocho ejercicios con cronómetro, prompts listos para copiar y una lista de control, la mayoría para gestionar el correo.

Sitio publicado: https://mafp-edu.github.io/curso-ia/

© 2026 Miguel Ángel Fernández. Todos los derechos reservados (ver `LICENSE`).

## Cómo verlo localmente

El sitio es estático. Basta con servir la carpeta con cualquier servidor web, por ejemplo:

```bash
python3 -m http.server 8000
```

y abrir http://localhost:8000 en el navegador. Si se abre `index.html` directamente desde el disco, algunos navegadores bloquean los scripts locales.

React se sirve desde la carpeta `vendor/`, así que el sitio no depende de un CDN. Solo las fuentes tipográficas se cargan desde Google Fonts y, sin conexión, se usan las del sistema.

## Cómo editar

- **Textos del curso**: se editan directo en `content.js` (`window.COURSE_DATA`) y no requieren compilar. Las cifras y hechos verificables llevan su fuente con fecha en partes `{ t: "src", x: "..." }`.
- **Cápsulas**: `capsulas.js`. Una cápsula con `estado: "lista"` aparece en la galería y al inicio de la lección indicada en `leccion`; los videos (MP4 720×1280), portadas y subtítulos `.vtt` van en `media/capsulas/`. Se producen en el estudio de animación de MAF (proyecto `curso-ia-capsulas`).
- **Aplica en 10 minutos**: `aplica.js`. Cada ejercicio tiene pasos con su tramo de minutos (el cronómetro resalta el paso en curso), prompts con etiquetas CORE, lista de control y fuentes con fecha.
- **Interfaz** (`app.jsx`, `components.jsx`, `extras.jsx`): después de editarlos hay que compilar con un solo comando.

```bash
npm install      # solo la primera vez
npm run build    # genera dist/app.min.js y copia React a vendor/
```

Hay que hacer commit de `dist/` y `vendor/`, porque GitHub Pages publica los archivos tal como están en `main`, sin paso de compilación.

## Archivos

- `index.html`: carga React, el contenido y la app compilada.
- `content.js`: contenido de los bloques (lecciones, quizzes y fuentes).
- `capsulas.js` y `aplica.js`: cápsulas de un minuto y ejercicios de diez minutos.
- `extras.jsx`: vistas de Inicio, Cápsulas y Aplica (se compila junto con el resto).
- `media/capsulas/`: videos, portadas y subtítulos de las cápsulas.
- `components.jsx`, `extras.jsx` y `app.jsx`: código fuente de la interfaz (progreso, quiz, modo proyector, impresión, ajustes y avance guardado en el navegador).
- `dist/app.min.js`: la interfaz compilada; no se edita a mano.
- `vendor/`: React y ReactDOM 18.3.1 de producción (licencia MIT).
- `styles.css`: estilos.
- `build.mjs` y `package.json`: script de compilación con esbuild.

El avance de cada persona (lecciones, respuestas, ejercicios hechos, cápsulas vistas y ajustes) se guarda en su navegador con la clave `curso-ia:v3`. Si se cambia mucho la estructura del curso, conviene subir la versión de la clave en `app.jsx` (`STORAGE_KEY`); está en `curso-ia:v3` desde la reorganización en tres partes (20-nov-2026).
