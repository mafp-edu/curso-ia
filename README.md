# Trabajando con IAG | Copilot

Curso autoguiado sobre el uso responsable de IA generativa en el trabajo, preparado por Miguel Ángel Fernández, Ph.D. El caso que recorre el curso es la preparación de reportes ejecutivos mensuales. Tiene cinco bloques sobre Microsoft Copilot Chat (fundamentos, seguridad, el marco CORE, técnicas y agentes) y un anexo práctico sobre Claude.

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
- **Interfaz** (`app.jsx`, `components.jsx`): después de editarlos hay que compilar con un solo comando.

```bash
npm install      # solo la primera vez
npm run build    # genera dist/app.min.js y copia React a vendor/
```

Hay que hacer commit de `dist/` y `vendor/`, porque GitHub Pages publica los archivos tal como están en `main`, sin paso de compilación.

## Archivos

- `index.html`: carga React, el contenido y la app compilada.
- `content.js`: todo el contenido del curso (bloques, lecciones, quizzes y fuentes).
- `components.jsx` y `app.jsx`: código fuente de la interfaz (progreso, quiz, modo proyector, impresión, ajustes y avance guardado en el navegador).
- `dist/app.min.js`: la interfaz compilada; no se edita a mano.
- `vendor/`: React y ReactDOM 18.3.1 de producción (licencia MIT).
- `styles.css`: estilos.
- `build.mjs` y `package.json`: script de compilación con esbuild.

El avance de cada persona (lecciones, respuestas y ajustes) se guarda en su navegador con la clave `curso-ia:v1`. Si se cambia mucho la estructura del curso, conviene subir la versión de la clave en `app.jsx` (`STORAGE_KEY`).
