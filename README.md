# Trabajando con IAG | Copilot

Curso autoguiado sobre el uso responsable de IA generativa en el trabajo, preparado por Miguel Ángel Fernández, Ph.D. El caso que recorre el curso es la preparación de reportes ejecutivos mensuales. Tiene cinco bloques sobre Microsoft Copilot Chat (fundamentos, seguridad, el marco CORE, técnicas y agentes) y un anexo práctico sobre Claude.

Sitio publicado: https://mafp-edu.github.io/curso-ia/

## Cómo verlo localmente

El sitio es estático. Basta con servir la carpeta con cualquier servidor web, por ejemplo:

```bash
python3 -m http.server 8000
```

y abrir http://localhost:8000 en el navegador. Abrir `index.html` directamente desde el disco no funciona, porque el navegador bloquea la carga de los archivos `.jsx`.

Se necesita conexión a internet: React, Babel y las fuentes se cargan desde CDN.

## Archivos

- `index.html`: carga React 18 (build de producción) y Babel, que transforma los `.jsx` en el navegador.
- `content.js`: todo el contenido del curso en `window.COURSE_DATA` (bloques, lecciones, quizzes y fuentes).
- `components.jsx`: piezas de presentación de cada tipo de contenido.
- `app.jsx`: estructura de la página, progreso, quiz, modo proyector, impresión y ajustes.
- `styles.css`: estilos.
- `uploads/`: prompt original con que se generó la primera versión del curso.

Para cambiar textos basta con editar `content.js`. Las cifras y hechos verificables llevan su fuente con fecha en partes `{ t: "src", x: "..." }`.

## Publicación

GitHub Pages publica la rama `main` tal como está, sin paso de compilación.
