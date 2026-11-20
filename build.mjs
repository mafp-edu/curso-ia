// Compila app.jsx y components.jsx a dist/app.min.js y copia React de
// producción a vendor/. Uso: npm install (una vez) y luego npm run build.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { transform } from "esbuild";

const read = (f) => readFileSync(new URL(f, import.meta.url), "utf8");

// Los .jsx comparten el ámbito global (antes los cargaba Babel en el navegador).
// Se concatenan en una función autoejecutable para que el minificador pueda
// acortar los nombres internos.
const source = [
  "(() => {",
  read("./components.jsx"),
  read("./app.jsx"),
  'ReactDOM.createRoot(document.getElementById("root")).render(<App />);',
  "})();",
].join("\n");

const out = await transform(source, {
  loader: "jsx",
  jsx: "transform",
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  minify: true,
  target: "es2018",
  legalComments: "none",
});

mkdirSync(new URL("./dist/", import.meta.url), { recursive: true });
writeFileSync(new URL("./dist/app.min.js", import.meta.url), out.code);

mkdirSync(new URL("./vendor/", import.meta.url), { recursive: true });
for (const [from, to] of [
  ["./node_modules/react/umd/react.production.min.js", "./vendor/react.production.min.js"],
  ["./node_modules/react-dom/umd/react-dom.production.min.js", "./vendor/react-dom.production.min.js"],
]) {
  copyFileSync(new URL(from, import.meta.url), new URL(to, import.meta.url));
}

console.log(`dist/app.min.js: ${out.code.length.toLocaleString("es-CL")} bytes`);
