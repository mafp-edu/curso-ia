// Vistas nuevas del curso: Inicio, Cápsulas de un minuto y «Aplica en 10 minutos».
// Usa window.COURSE_DATA.capsulas (capsulas.js) y window.COURSE_DATA.aplica (aplica.js).

const capsulasData = () => (window.COURSE_DATA.capsulas || []);
const capsulasListas = () => capsulasData().filter(c => c.estado === "lista");
const capsulaDeLeccion = (lessonId) => capsulasData().find(c => c.leccion === lessonId && c.estado === "lista");
const aplicaData = () => (window.COURSE_DATA.aplica || { sprints: [], reglas: [] });
const sprintPorId = (id) => aplicaData().sprints.find(s => s.id === id);

function blockOfLesson(lessonId) {
  return window.COURSE_DATA.blocks.find(b => b.lessons.some(l => l.id === lessonId));
}

// ---------- Reproductor de cápsula ----------
function CapsulePlayer({ cap, nav, onSeen, compact }) {
  const [showText, setShowText] = React.useState(false);
  const sprint = cap.aplica ? sprintPorId(cap.aplica) : null;
  const block = cap.leccion ? blockOfLesson(cap.leccion) : null;
  const handleTime = (e) => {
    const v = e.currentTarget;
    if (onSeen && v.duration && v.currentTime / v.duration > 0.85) onSeen(cap.id);
  };
  return (
    <figure className={`capsule ${compact ? "compact" : ""}`}>
      <div className="capsule-frame">
        <video
          key={cap.id}
          controls
          playsInline
          preload="metadata"
          poster={cap.poster}
          onTimeUpdate={handleTime}
          aria-label={`Cápsula ${cap.num}: ${cap.titulo}`}
        >
          <source src={cap.src} type="video/mp4" />
          {cap.vtt && <track kind="captions" src={cap.vtt} srcLang="es" label="Español" />}
        </video>
      </div>
      <figcaption className="capsule-info">
        <div className="capsule-eyebrow">Cápsula {cap.num} · {cap.dur || "1 min"}</div>
        <div className="capsule-title">{cap.titulo}</div>
        <p className="capsule-idea">{cap.idea}</p>
        <div className="capsule-actions">
          {sprint && (
            <button className="pill-btn primary" onClick={() => nav.goSprint(sprint.id)}>
              Aplícalo en 10 min · {sprint.titulo} →
            </button>
          )}
          {!compact && block && (
            <button className="pill-btn" onClick={() => nav.goBlock(block.id, cap.leccion)}>
              Ir a la lección {cap.leccion}
            </button>
          )}
          {cap.youtube && (
            <a className="pill-btn" href={cap.youtube} target="_blank" rel="noopener noreferrer">Ver en YouTube ↗</a>
          )}
          {cap.guion && (
            <button className="pill-btn ghost" onClick={() => setShowText(v => !v)} aria-expanded={showText}>
              {showText ? "Ocultar transcripción" : "Leer transcripción"}
            </button>
          )}
        </div>
        {showText && <p className="capsule-transcript">{cap.guion}</p>}
        <div className="capsule-note">Locución con la voz de MAF generada con IA (clon autorizado).</div>
      </figcaption>
    </figure>
  );
}

// ---------- Galería de cápsulas ----------
function CapsulasView({ nav, seen, onSeen, footer }) {
  const all = capsulasData();
  const ready = all.filter(c => c.estado === "lista");
  const [openId, setOpenId] = React.useState(ready[0] ? ready[0].id : null);
  const open = all.find(c => c.id === openId);
  return (
    <div className="main">
      <div className="view-head">
        <div className="block-eyebrow">Mira · {ready.length} de {all.length} cápsulas disponibles</div>
        <h2 className="block-title">Cápsulas de un minuto</h2>
        <p className="block-lede">Una idea clave del curso en menos de sesenta segundos, explicada por Miguel Ángel Fernández. Sirven para partir un bloque, repasar antes de una reunión o compartir con tu equipo. Todas tienen subtítulos y transcripción.</p>
      </div>
      {open && open.estado === "lista" && <CapsulePlayer cap={open} nav={nav} onSeen={onSeen} />}
      <div className="capsule-grid">
        {all.map(c => {
          const isReady = c.estado === "lista";
          const block = c.leccion ? blockOfLesson(c.leccion) : null;
          return (
            <button
              key={c.id}
              className={`capsule-card ${isReady ? "ready" : "soon"} ${openId === c.id ? "active" : ""}`}
              onClick={() => { if (isReady) { setOpenId(c.id); window.scrollTo({ top: 0, behavior: "smooth" }); } }}
              disabled={!isReady}
            >
              {isReady && c.poster && (
                <div className="capsule-card-thumb">
                  <img src={c.poster} alt="" loading="lazy" />
                  <span className="capsule-card-play" aria-hidden="true">▶</span>
                </div>
              )}
              <div className="capsule-card-top">
                <span className="capsule-card-num">{c.num}</span>
                <span className={`capsule-card-tag ${isReady ? "" : "soon"}`}>
                  {isReady ? (seen[c.id] ? "✓ Vista" : "▶ " + (c.dur || "1 min")) : "Próximamente"}
                </span>
              </div>
              <div className="capsule-card-title">{c.titulo}</div>
              <div className="capsule-card-idea">{c.idea}</div>
              <div className="capsule-card-meta">{block ? `Bloque ${block.num} · ${c.leccion}` : "Aplica en 10 minutos"}</div>
            </button>
          );
        })}
      </div>
      {footer}
    </div>
  );
}

// ---------- Cronómetro de 10 minutos ----------
function useTimer(total) {
  const [elapsed, setElapsed] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  React.useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setElapsed(e => {
      if (e + 1 >= total) { setRunning(false); return total; }
      return e + 1;
    }), 1000);
    return () => clearInterval(id);
  }, [running, total]);
  return { elapsed, running, start: () => setRunning(true), pause: () => setRunning(false), reset: () => { setRunning(false); setElapsed(0); } };
}

function Timer({ timer, total }) {
  const left = total - timer.elapsed;
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  const finished = timer.elapsed >= total;
  return (
    <div className={`timer ${timer.running ? "running" : ""} ${finished ? "finished" : ""}`} role="timer" aria-live="off">
      <div className="timer-clock tnum">{finished ? "¡Tiempo!" : `${mm}:${ss}`}</div>
      <div className="timer-bar"><div className="timer-fill" style={{ width: `${(timer.elapsed / total) * 100}%` }} /></div>
      <div className="timer-btns">
        {!timer.running && !finished && (
          <button className="pill-btn primary" onClick={timer.start}>{timer.elapsed ? "▶ Seguir" : "▶ Partir los 10 minutos"}</button>
        )}
        {timer.running && <button className="pill-btn" onClick={timer.pause}>❚❚ Pausa</button>}
        {timer.elapsed > 0 && <button className="pill-btn ghost" onClick={timer.reset}>↺ Reiniciar</button>}
      </div>
    </div>
  );
}

// ---------- Un ejercicio de 10 minutos ----------
function SprintView({ sprint, nav, done, toggleDone, checks, setCheck, footer }) {
  const timer = useTimer(600);
  const all = aplicaData().sprints;
  const idx = all.findIndex(s => s.id === sprint.id);
  const prev = all[idx - 1], next = all[idx + 1];
  const cap = sprint.capsula ? capsulasData().find(c => c.id === sprint.capsula && c.estado === "lista") : null;
  const block = sprint.leccion ? blockOfLesson(sprint.leccion) : null;
  const curStep = timer.elapsed > 0 && timer.elapsed < 600
    ? sprint.pasos.findIndex(p => timer.elapsed >= p.min[0] * 60 && timer.elapsed < p.min[1] * 60)
    : -1;
  const myChecks = checks || {};
  return (
    <div className="main">
      <button className="back-link" onClick={nav.goAplica}>← Todos los ejercicios</button>
      <div className="sprint-head">
        <div>
          <div className="block-eyebrow">Aplica en 10 minutos · Ejercicio {sprint.num} · {sprint.tema}</div>
          <h2 className="block-title">{sprint.titulo}</h2>
          <p className="block-lede">{sprint.bajada}</p>
        </div>
        <button className={`done-check ${done ? "checked" : ""}`} onClick={toggleDone}>
          {done ? "✓ Hecho" : "Marcar como hecho"}
        </button>
      </div>

      <div className="sprint-meta">
        <div><span className="sprint-meta-k">Resultado</span>{sprint.resultado}</div>
        <div><span className="sprint-meta-k">Herramienta</span>{sprint.herramienta}</div>
        <div><span className="sprint-meta-k">Técnica</span>{sprint.tecnica}
          {block && <> · <button className="link-btn" onClick={() => nav.goBlock(block.id, sprint.leccion)}>repasar {sprint.leccion}</button></>}
        </div>
      </div>

      <Timer timer={timer} total={600} />

      <ol className="steps">
        {sprint.pasos.map((p, i) => (
          <li key={i} className={`step ${curStep === i ? "current" : ""} ${curStep > i ? "past" : ""}`}>
            <div className="step-min tnum">{p.min[0]}–{p.min[1]} min</div>
            <div className="step-body">
              <div className="step-title">{p.titulo}</div>
              <p dangerouslySetInnerHTML={{ __html: md(p.x) }} />
              {p.prompt && <PromptCore block={{ title: p.prompt.titulo, lines: p.prompt.lineas }} />}
            </div>
          </li>
        ))}
      </ol>

      <div className="sprint-check">
        <div className="wrap-eyebrow">Cómo saber que funcionó</div>
        {sprint.check.map((c, i) => (
          <label key={i} className={`check-row ${myChecks[i] ? "on" : ""}`}>
            <input type="checkbox" checked={!!myChecks[i]} onChange={() => setCheck(i)} />
            <span>{c}</span>
          </label>
        ))}
      </div>

      {sprint.extra && <Callout kind="tip" head={sprint.extra.titulo}>{sprint.extra.x}</Callout>}
      {cap && (
        <div className="sprint-cap">
          <div className="wrap-eyebrow">Antes de partir, un minuto</div>
          <CapsulePlayer cap={cap} nav={nav} compact />
        </div>
      )}
      {sprint.fuente && <p className="src sprint-src" dangerouslySetInnerHTML={{ __html: md(sprint.fuente) }} />}

      <nav className="block-nav" aria-label="Navegación entre ejercicios">
        {prev && (
          <button className="block-nav-btn prev" onClick={() => nav.goSprint(prev.id)}>
            <div className="block-nav-label">← Anterior</div>
            <div className="block-nav-title">{prev.num}. {prev.titulo}</div>
          </button>
        )}
        {next && (
          <button className="block-nav-btn next" onClick={() => nav.goSprint(next.id)}>
            <div className="block-nav-label">Siguiente →</div>
            <div className="block-nav-title">{next.num}. {next.titulo}</div>
          </button>
        )}
      </nav>
      {footer}
    </div>
  );
}

function Reglas() {
  return (
    <div className="reglas">
      {aplicaData().reglas.map((r, i) => (
        <div key={i} className="regla">
          <div className="regla-n">{i + 1}</div>
          <div><div className="regla-k">{r.k}</div><div className="regla-x">{r.x}</div></div>
        </div>
      ))}
    </div>
  );
}

// ---------- Lista de ejercicios ----------
function AplicaView({ nav, sprintsDone, footer }) {
  const data = aplicaData();
  const nDone = data.sprints.filter(s => sprintsDone[s.id]).length;
  return (
    <div className="main">
      <div className="view-head">
        <div className="block-eyebrow">Aplica · {nDone} de {data.sprints.length} hechos</div>
        <h2 className="block-title">Aplica en 10 minutos</h2>
        <p className="block-lede">{data.intro}</p>
      </div>
      <Reglas />
      <div className="sprint-grid">
        {data.sprints.map(s => (
          <button key={s.id} className={`sprint-card ${sprintsDone[s.id] ? "done" : ""}`} onClick={() => nav.goSprint(s.id)}>
            <div className="sprint-card-top">
              <span className="sprint-card-num">{s.num}</span>
              <span className={`tema tema-${s.tema.toLowerCase()}`}>{s.tema}</span>
              {sprintsDone[s.id] && <span className="sprint-card-done">✓ Hecho</span>}
            </div>
            <div className="sprint-card-title">{s.titulo}</div>
            <div className="sprint-card-bajada">{s.bajada}</div>
            <div className="sprint-card-res"><b>Te llevas:</b> {s.resultado}</div>
            <div className="sprint-card-go">10 min · Empezar →</div>
          </button>
        ))}
      </div>
      {data.claude && (
        <div className="aplica-claude">
          <Callout kind="nota" head={data.claude.titulo}>{data.claude.x}</Callout>
          <p className="src" dangerouslySetInnerHTML={{ __html: md(data.claude.fuente) }} />
        </div>
      )}
      {footer}
    </div>
  );
}

// ---------- Inicio ----------
function nextLesson(completed) {
  const data = window.COURSE_DATA;
  const any = Object.values(completed || {}).some(Boolean);
  if (!any) return null;
  for (const b of data.blocks) {
    const l = b.lessons.find(x => !completed[x.id]);
    if (l) return { block: b, lesson: l };
  }
  return null;
}

function HomeView({ nav, stats, seen, onSeen, footer, completed }) {
  const data = window.COURSE_DATA;
  const ready = capsulasListas();
  const featured = ready.find(c => c.id === "c06") || ready[0];
  const next = nextLesson(completed);
  const shelf = [featured, ...ready.filter(c => c !== featured)].filter(Boolean).slice(0, 3);
  const firstSprint = featured && featured.aplica ? sprintPorId(featured.aplica) : aplicaData().sprints[0];
  return (
    <div className="main home">
      <section className={`hero ${shelf.length ? "with-shelf" : ""}`}>
        <div className="hero-text">
        <div className="hero-eyebrow">Curso autoguiado · Miguel Ángel Fernández, Ph.D.</div>
        <h1 className="hero-title">Trabajando con <span>IA generativa</span></h1>
        <p className="hero-lede">Qué hace la IA generativa, cómo proteger tus datos y cómo pedirle bien, en cualquier herramienta. Después, lo mismo aplicado a Copilot Chat y a Claude, y ejercicios para llevarlo a tu correo desde hoy.</p>
        <div className="hero-ctas">
          <button className="pill-btn primary big" onClick={() => nav.goBlock(data.blocks[0].id)}>Empezar el curso →</button>
          <button className="pill-btn big" onClick={nav.goAplica}>Quiero aplicar algo hoy</button>
        </div>
        {next && (
          <button className="resume" onClick={() => nav.goBlock(next.block.id, next.lesson.id)}>
            <span className="resume-k">Continúa donde quedaste</span>
            <span className="resume-t">Bloque {next.block.num} · {next.lesson.code} · {next.lesson.title}</span>
            <span className="resume-go">→</span>
          </button>
        )}
        </div>
        {shelf.length > 0 && (
          <button className="hero-shelf" onClick={nav.goCapsulas} aria-label="Ver las cápsulas de un minuto">
            {shelf.map((c, i) => (
              <span key={c.id} className={`phone phone-${i}`}><img src={c.poster} alt="" /></span>
            ))}
            <span className="hero-shelf-label">▶ Cápsulas de 1 minuto</span>
          </button>
        )}
      </section>

      <section className="modes">
        <button className="mode mode-mira" onClick={nav.goCapsulas}>
          <div className="mode-k">Mira</div>
          <div className="mode-t">Cápsulas de 1 minuto</div>
          <div className="mode-x">Las ideas clave, explicadas en menos de sesenta segundos.</div>
          <div className="mode-n">{ready.length} {ready.length === 1 ? "disponible" : "disponibles"} · {Object.keys(seen).length} vistas</div>
        </button>
        <button className="mode mode-aprende" onClick={() => nav.goBlock(data.blocks[0].id)}>
          <div className="mode-k">Aprende</div>
          <div className="mode-t">{data.blocks.length} bloques en tres partes</div>
          <div className="mode-x">Primero la IA generativa en general; después, Copilot y Claude. {stats.totalMin} minutos en total.</div>
          <div className="mode-n">{stats.pct}% completado</div>
        </button>
        <button className="mode mode-aplica" onClick={nav.goAplica}>
          <div className="mode-k">Aplica</div>
          <div className="mode-t">Ejercicios de 10 minutos</div>
          <div className="mode-x">Correo, reuniones y configuración: un resultado concreto en cada uno.</div>
          <div className="mode-n">{stats.sprintsDone} de {aplicaData().sprints.length} hechos</div>
        </button>
      </section>

      <section className="parts-map">
        {(data.partes || []).map((p, i) => {
          const bs = data.blocks.filter(b => b.parte === p.k);
          return (
            <button key={p.k} className={`part-card part-${p.k}`} onClick={() => nav.goBlock(bs[0].id)}>
              <div className="part-card-n">Parte {["I", "II", "III"][i]}</div>
              <div className="part-card-t">{p.titulo}</div>
              <div className="part-card-x">{p.bajada}</div>
              <ul>{bs.map(b => <li key={b.id}><span>{String(b.num).padStart(2, "0")}</span>{b.title}</li>)}</ul>
            </button>
          );
        })}
      </section>

      <section className="start">
        <div className="start-text">
          <div className="wrap-eyebrow">Empieza aquí · 15 minutos</div>
          <h2 className="start-title">Tu primer resultado, hoy</h2>
          <ol className="start-steps">
            <li><b>Mira</b> la cápsula «{featured ? featured.titulo : "CORE en un minuto"}» (1 min).</li>
            <li><b>Aplica</b> el ejercicio «{firstSprint ? firstSprint.titulo : ""}» con un correo real (10 min).</li>
            <li><b>Lee</b> la lección 3.1 del Bloque 3 para entender por qué funciona (4 min).</li>
          </ol>
          {firstSprint && <button className="pill-btn primary" onClick={() => nav.goSprint(firstSprint.id)}>Ir al ejercicio →</button>}
        </div>
        {featured && <CapsulePlayer cap={featured} nav={nav} onSeen={onSeen} compact />}
      </section>

      <section>
        <div className="wrap-eyebrow" style={{ marginBottom: 12 }}>Tres reglas que atraviesan todo el curso</div>
        <Reglas />
      </section>
      {footer}
    </div>
  );
}

Object.assign(window, { CapsulePlayer, CapsulasView, AplicaView, SprintView, HomeView, capsulaDeLeccion, sprintPorId });
