// Componentes principales de la app

const { useState: useStateA, useMemo: useMemoA, useEffect: useEffectA } = React;

// Avance guardado en el navegador (localStorage). Si el navegador no lo
// permite (modo privado estricto, almacenamiento lleno), el sitio sigue
// funcionando y simplemente no guarda.
const STORAGE_KEY = "curso-ia:v3"; // v3 (20-nov-2026): 9 bloques en tres partes; el avance de versiones anteriores no se traspasa

function loadSaved() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : null;
    return data && typeof data === "object" ? data : {};
  } catch (_) {
    return {};
  }
}

function saveState(state) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_) { /* sin guardado */ }
}

function clearSaved() {
  try { window.localStorage.removeItem(STORAGE_KEY); } catch (_) { /* nada que borrar */ }
}

function Quiz({ quiz, answers, setAnswers, onComplete }) {
  const pickAnswer = (qi, oi) => {
    if (answers[qi] != null) return;
    const next = { ...answers, [qi]: oi };
    setAnswers(next);
    if (Object.keys(next).length === quiz.questions.length) {
      const correct = quiz.questions.reduce((acc, q, i) => acc + (next[i] === q.correct ? 1 : 0), 0);
      onComplete && onComplete(correct, quiz.questions.length);
    }
  };

  const resetQuiz = () => setAnswers({});

  const allAnswered = Object.keys(answers).length === quiz.questions.length;
  const correctCount = quiz.questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0);

  return (
    <div className="quiz">
      <div className="quiz-head">
        <div className="quiz-mark">?</div>
        <div>
          <div className="quiz-title">{quiz.title}</div>
          <div className="quiz-sub">Corrección inmediata</div>
        </div>
        {allAnswered && (
          <div className="quiz-score">
            <div style={{ textAlign: "right" }}>
              <div className="quiz-score-n">{correctCount}/{quiz.questions.length}</div>
              <div className="quiz-score-l">Puntaje</div>
            </div>
            <button className="quiz-retry" onClick={resetQuiz} title="Borrar respuestas y volver a intentarlo">
              ↺ Reintentar
            </button>
          </div>
        )}
      </div>
      {quiz.questions.map((q, qi) => {
        const chosen = answers[qi];
        return (
          <div key={qi} className="question">
            <div className="q-stem"><span className="q-stem-num">{qi + 1}.</span>{q.stem}</div>
            <div className="q-options">
              {q.options.map((op, oi) => {
                let cls = "q-option";
                if (chosen != null) {
                  if (oi === q.correct) cls += " correct";
                  else if (oi === chosen) cls += " incorrect";
                  else cls += " muted";
                }
                return (
                  <button
                    key={oi}
                    className={cls}
                    onClick={() => pickAnswer(qi, oi)}
                    disabled={chosen != null}
                  >
                    <span className="q-letter">{String.fromCharCode(65 + oi)}</span>
                    <span>{op}</span>
                  </button>
                );
              })}
            </div>
            {chosen != null && (
              <div className={`q-feedback ${chosen === q.correct ? "ok" : "bad"}`}>
                <b>{chosen === q.correct ? "Correcto." : "Revisemos."}</b> {q.explain}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Lesson({ lesson, idx, isDone, onToggle, nav, onSeen }) {
  const isExercise = lesson.kind === "exercise";
  const cap = capsulaDeLeccion(lesson.id);
  return (
    <div className={`lesson ${isDone ? "done" : ""} ${isExercise ? "exercise-wrap" : ""}`} id={`lesson-${lesson.id}`}>
      <div className="lesson-head">
        <div className="lesson-index">{String(idx + 1).padStart(2, "0")}</div>
        <div className="lesson-titles">
          <div className="lesson-eyebrow">
            <span>{lesson.code}</span>
            <span className="sep">|</span>
            <span className="dur">{lesson.dur}</span>
            <span className="sep">|</span>
            <span>{lesson.eyebrow}</span>
          </div>
          <h3 className="lesson-title">{lesson.title}</h3>
        </div>
        <button className={`done-check ${isDone ? "checked" : ""}`} onClick={onToggle}>
          {isDone ? "✓ Completada" : "Marcar completada"}
        </button>
      </div>
      <div className="lesson-body">
        {cap && <CapsulePlayer cap={cap} nav={nav} onSeen={onSeen} compact />}
        {lesson.body.map((part, i) => renderPart(part, i))}
      </div>
    </div>
  );
}

function WrapUp({ block }) {
  return (
    <div className="wrap-up">
      <div className="para-llevar">
        <div className="wrap-eyebrow">Para llevar</div>
        <ol>
          {block.paraLlevar.map((p, i) => <li key={i}>{p}</li>)}
        </ol>
      </div>
      {block.cliffhanger ? (
        <div className="cliffhanger">
          <div className="wrap-eyebrow">Lo que viene</div>
          <p>{block.cliffhanger}</p>
        </div>
      ) : (
        <div className="cliffhanger" style={{ background: "var(--olive)" }}>
          <div className="wrap-eyebrow" style={{ color: "#E4EAD6" }}>Fin del curso</div>
          <p>Llegaste al cierre. Ahora toca aplicarlo en tu trabajo.</p>
        </div>
      )}
      <div className="aforismo">
        {block.aforismo}
        <span className="aforismo-attr">Cierre del bloque {block.num}</span>
      </div>
    </div>
  );
}

function Celebration({ onPrint, onReset, stats }) {
  return (
    <div className="celebration">
      <div className="celebration-eyebrow">Curso completado</div>
      <h2>Felicitaciones.</h2>
      <p>Terminaste los {stats.blocks} bloques del curso. Ya tienes la base para usar la IA generativa con criterio en tu trabajo.</p>
      <div className="celebration-stats">
        <div className="celebration-stat">
          <div className="n">{stats.lessons}</div>
          <div className="l">Lecciones</div>
        </div>
        <div className="celebration-stat">
          <div className="n">{stats.quizzes}/{stats.blocks}</div>
          <div className="l">Quizzes</div>
        </div>
        <div className="celebration-stat">
          <div className="n">{stats.min}</div>
          <div className="l">Minutos</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        <button className="icon-btn" onClick={onPrint} style={{ background: "var(--cream)", color: "var(--burgundy)", borderColor: "var(--cream)", height: 42, padding: "0 20px", fontSize: 13.5, fontWeight: 600 }} title="Imprime el bloque que estás viendo">
          ⎙ Imprimir este bloque
        </button>
        <button className="icon-btn" onClick={onReset} style={{ background: "transparent", color: "var(--cream)", borderColor: "var(--gold)", height: 42, padding: "0 20px", fontSize: 13.5 }}>
          ↻ Reiniciar curso
        </button>
      </div>
      <div className="celebration-quote">«La IA rinde más en manos de quien piensa con criterio.»</div>
    </div>
  );
}

function BlockView({ block, completed, toggleLesson, quizAnswers, setQuizAnswers, onQuizDone, showCelebration, celebrationProps, nav, go, onSeen }) {
  return (
    <div className="main">
      <div className={`block-header part-${block.parte || "general"}`}>
        <div>
          <div className="block-part">{({ general: "Parte I · IA generativa", copilot: "Parte II · Copilot", claude: "Parte III · Claude" })[block.parte] || ""}</div>
          <div className="block-eyebrow">{block.eyebrow}</div>
          <h2 className="block-title">{block.title}</h2>
          <p className="block-lede">{block.lede}</p>
        </div>
        <div className="block-badge">{block.badge}</div>
      </div>
      {block.lessons.map((lesson, i) => (
        <Lesson
          key={lesson.id}
          lesson={lesson}
          idx={i}
          isDone={!!completed[lesson.id]}
          onToggle={() => toggleLesson(lesson.id)}
          nav={go}
          onSeen={onSeen}
        />
      ))}
      <Quiz key={block.id} quiz={block.quiz} answers={quizAnswers} setAnswers={setQuizAnswers} onComplete={onQuizDone} />
      <WrapUp block={block} />
      {showCelebration && <Celebration {...celebrationProps} />}
      {nav}
    </div>
  );
}

function Sidebar({ blocks, activeBlock, setActiveBlock, activeLesson, setActiveLesson, completed, quizCompleted, totalMin, view, go, sprintsDone, activeSprint }) {
  const sprints = (window.COURSE_DATA.aplica || { sprints: [] }).sprints;
  const nCaps = (window.COURSE_DATA.capsulas || []).filter(c => c.estado === "lista").length;
  return (
    <aside className="sidebar" aria-label="Programa del curso">
      <div className="side-nav">
        <button className={`side-link ${view === "inicio" ? "active" : ""}`} onClick={go.goHome}><span className="side-ico">⌂</span><span>Inicio</span></button>
        <button className={`side-link ${view === "capsulas" ? "active" : ""}`} onClick={go.goCapsulas}><span className="side-ico">▶</span><span>Cápsulas de 1 minuto</span><span className="side-count">{nCaps}</span></button>
        <button className={`side-link ${view === "aplica" ? "active" : ""}`} onClick={go.goAplica}><span className="side-ico">⏱</span><span>Aplica en 10 minutos</span><span className="side-count">{sprints.filter(s => sprintsDone[s.id]).length}/{sprints.length}</span></button>
        {view === "aplica" && (
          <div className="lesson-list">
            {sprints.map(s => (
              <button key={s.id} className={`lesson-item ${sprintsDone[s.id] ? "done" : ""} ${activeSprint === s.id ? "active" : ""}`} onClick={() => go.goSprint(s.id)}>
                <span className="lesson-dot" />
                <span className="lesson-code">{s.num}</span>
                <span className="lesson-label">{s.titulo}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="sidebar-title">Programa | {totalMin} min</div>
      {blocks.map((b, bi) => {
        const partes = window.COURSE_DATA.partes || [];
        const parte = partes.find(p => p.k === b.parte);
        const newPart = parte && (bi === 0 || blocks[bi - 1].parte !== b.parte);
        const doneCount = b.lessons.filter(l => completed[l.id]).length;
        const total = b.lessons.length;
        const allLessons = doneCount === total;
        const allDone = allLessons && quizCompleted[b.id];
        const inProgress = doneCount > 0 && !allDone;
        const isActive = view === "bloque" && activeBlock === b.id;
        let numClass = "block-num";
        if (allDone) numClass += " complete";
        else if (inProgress) numClass += " in-progress";
        return (
          <React.Fragment key={b.id}>
          {newPart && (
            <div className={`part-head part-${b.parte}`}>
              <span className="part-n">Parte {["I", "II", "III", "IV"][partes.indexOf(parte)]}</span>
              <span className="part-t">{parte.titulo}</span>
            </div>
          )}
          <div className="block-item">
            <button className={`block-head ${isActive ? "active" : ""}`} onClick={() => go.goBlock(b.id)}>
              <div className={numClass}>{allDone ? "✓" : b.num}</div>
              <div className="block-head-text">
                <div className="block-head-title">{b.title}</div>
                <div className="block-head-meta">{doneCount}/{total} lecciones{quizCompleted[b.id] ? " | quiz ✓" : ""}</div>
              </div>
            </button>
            {isActive && (
              <div className="lesson-list">
                {b.lessons.map(l => (
                  <button
                    key={l.id}
                    className={`lesson-item ${completed[l.id] ? "done" : ""} ${activeLesson === l.id ? "active" : ""}`}
                    onClick={() => {
                      setActiveLesson(l.id);
                      setTimeout(() => {
                        const el = document.getElementById(`lesson-${l.id}`);
                        if (el) el.scrollIntoView ? el.scrollIntoView({ behavior: "smooth", block: "start" }) : window.scrollTo(0, el.offsetTop - 80);
                      }, 10);
                    }}
                  >
                    <span className="lesson-dot" />
                    <span className="lesson-code">{l.code}</span>
                    <span className="lesson-label">{l.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          </React.Fragment>
        );
      })}
    </aside>
  );
}

function Header({ pct, projector, setProjector, onPrint, onTweaks, tweaksOpen, meta, view, go }) {
  return (
    <header className="header">
      <div className="brand">
        <button className="brand-mark" onClick={go.goHome} title="Inicio del curso">IAG</button>
        <div className="brand-text">
          <div className="brand-title">Trabajando con IAG | Copilot y Claude</div>
          <div className="brand-sub">Miguel Ángel Fernández, Ph.D.</div>
        </div>
      </div>
      <nav className="top-nav" aria-label="Secciones del curso">
        {[["inicio", "Inicio", go.goHome], ["capsulas", "Cápsulas", go.goCapsulas], ["bloque", "Bloques", () => go.goBlock()], ["aplica", "Aplica en 10 min", go.goAplica]].map(([k, l, fn]) => (
          <button key={k} className={`top-link ${view === k ? "active" : ""}`} onClick={fn} aria-current={view === k ? "page" : undefined}>{l}</button>
        ))}
      </nav>
      <div className="header-progress">
        <span className="header-progress-label">Progreso</span>
        <div className="progressbar-wrap">
          <div className="progressbar-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="progress-pct">{pct}%</span>
      </div>
      <div className="header-actions">
        <button className={`icon-btn btn-projector ${projector ? "active" : ""}`} onClick={() => setProjector(!projector)}>
          ▣ Proyector
        </button>
        <button className="icon-btn" onClick={onPrint}>⎙ Imprimir</button>
        <button className={`icon-btn ${tweaksOpen ? "active" : ""}`} onClick={onTweaks}>⚙ Ajustes</button>
      </div>
    </header>
  );
}

function TweaksPanel({ config, setConfig, onClose }) {
  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <div className="tweaks-title">Ajustes de visualización</div>
        <button className="tweaks-close" onClick={onClose} aria-label="Cerrar">✕</button>
      </div>
      <div className="tweak-row">
        <label className="tweak-label">Paleta</label>
        <div className="tweak-pills">
          {[
            { k: "default", l: "Burdeo" },
            { k: "marine", l: "Marino" },
            { k: "olive", l: "Olivo" },
          ].map(p => (
            <button
              key={p.k}
              className={`tweak-pill ${config.palette === p.k ? "active" : ""}`}
              onClick={() => setConfig({ ...config, palette: p.k })}
            >{p.l}</button>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <label className="tweak-label">Densidad</label>
        <div className="tweak-pills">
          {[
            { k: "compact", l: "Compacta" },
            { k: "normal", l: "Normal" },
            { k: "spacious", l: "Espaciosa" },
          ].map(p => (
            <button
              key={p.k}
              className={`tweak-pill ${config.density === p.k ? "active" : ""}`}
              onClick={() => setConfig({ ...config, density: p.k })}
            >{p.l}</button>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <label className="tweak-label">Números grandes</label>
        <div className="tweak-pills">
          {[
            { k: "on", l: "Visibles" },
            { k: "off", l: "Sobrios" },
          ].map(p => (
            <button
              key={p.k}
              className={`tweak-pill ${config.bignums === p.k ? "active" : ""}`}
              onClick={() => setConfig({ ...config, bignums: p.k })}
            >{p.l}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const data = window.COURSE_DATA;
  const saved = useMemoA(loadSaved, []);
  const validBlock = (id) => data.blocks.some(b => b.id === id);

  const [activeBlockId, setActiveBlockId] = useStateA(() => validBlock(saved.activeBlockId) ? saved.activeBlockId : data.blocks[0].id);
  const [activeLessonId, setActiveLessonId] = useStateA(null);
  const [completed, setCompleted] = useStateA(() => saved.completed || {});
  const [quizCompleted, setQuizCompleted] = useStateA(() => saved.quizCompleted || {});
  const [quizAnswers, setQuizAnswers] = useStateA(() => saved.quizAnswers || {});
  const [view, setView] = useStateA(() => ["inicio", "capsulas", "aplica", "bloque"].includes(saved.view) ? saved.view : "inicio");
  const [activeSprintId, setActiveSprintId] = useStateA(() => saved.activeSprintId || null);
  const [sprintsDone, setSprintsDone] = useStateA(() => saved.sprintsDone || {});
  const [sprintChecks, setSprintChecks] = useStateA(() => saved.sprintChecks || {});
  const [capsSeen, setCapsSeen] = useStateA(() => saved.capsSeen || {});
  const [scrollTarget, setScrollTarget] = useStateA(null);
  const [projector, setProjector] = useStateA(false);
  const [tweaksOpen, setTweaksOpen] = useStateA(false);

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "palette": "default",
    "density": "normal",
    "bignums": "on"
  }/*EDITMODE-END*/;
  const [config, setConfig] = useStateA(() => ({ ...TWEAK_DEFAULTS, ...(saved.config || {}) }));

  // Guarda el avance y los ajustes en el navegador en cada cambio.
  useEffectA(() => {
    saveState({ activeBlockId, completed, quizCompleted, quizAnswers, config, view, activeSprintId, sprintsDone, sprintChecks, capsSeen });
  }, [activeBlockId, completed, quizCompleted, quizAnswers, config, view, activeSprintId, sprintsDone, sprintChecks, capsSeen]);

  // Navegación entre vistas (Inicio, Cápsulas, Bloques, Aplica).
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const go = {
    goHome: () => { setView("inicio"); toTop(); },
    goCapsulas: () => { setView("capsulas"); toTop(); },
    goAplica: () => { setView("aplica"); setActiveSprintId(null); toTop(); },
    goSprint: (id) => { setView("aplica"); setActiveSprintId(id); toTop(); },
    goBlock: (bid, lid) => {
      setView("bloque");
      if (bid) setActiveBlockId(bid);
      setActiveLessonId(lid || null);
      if (lid) setScrollTarget(`lesson-${lid}`);
      else toTop();
    },
  };
  // Desplaza hasta la lección pedida una vez que la vista del bloque ya se dibujó.
  useEffectA(() => {
    if (!scrollTarget) return;
    const id = setTimeout(() => {
      const el = document.getElementById(scrollTarget);
      if (el && el.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setScrollTarget(null);
    }, 120);
    return () => clearTimeout(id);
  }, [scrollTarget, view, activeBlockId]);
  const markSeen = (id) => { if (!capsSeen[id]) setCapsSeen(c => ({ ...c, [id]: true })); };
  const activeSprint = view === "aplica" && activeSprintId ? sprintPorId(activeSprintId) : null;

  // Tweaks edit-mode protocol
  useEffectA(() => {
    const handler = (e) => {
      const msg = e.data;
      if (!msg || !msg.type) return;
      if (msg.type === "__activate_edit_mode") setTweaksOpen(true);
      if (msg.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", handler);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (_) {}
    return () => window.removeEventListener("message", handler);
  }, []);

  const activeBlock = useMemoA(() => data.blocks.find(b => b.id === activeBlockId), [activeBlockId]);
  const allLessons = useMemoA(() => data.blocks.flatMap(b => b.lessons), []);
  const totalUnits = allLessons.length + data.blocks.length; // lessons + quizzes
  const doneUnits = Object.values(completed).filter(Boolean).length + Object.values(quizCompleted).filter(Boolean).length;
  const pct = Math.round((doneUnits / totalUnits) * 100);

  const toggleLesson = (lid) => {
    setCompleted(c => ({ ...c, [lid]: !c[lid] }));
  };

  const onQuizDone = (correct, total) => {
    setQuizCompleted(q => ({ ...q, [activeBlockId]: true }));
    // Al completar el quiz, marcar todas las lecciones del bloque como completadas.
    // Evita que la barra de progreso se quede debajo del 100% si el usuario no
    // cliqueo manualmente cada lección.
    const block = data.blocks.find(b => b.id === activeBlockId);
    if (block) {
      setCompleted(c => {
        const next = { ...c };
        block.lessons.forEach(l => { next[l.id] = true; });
        return next;
      });
    }
  };

  const onPrint = () => window.print();
  const onReset = () => {
    clearSaved();
    setCompleted({});
    setQuizCompleted({});
    setQuizAnswers({});
    setSprintsDone({});
    setSprintChecks({});
    setCapsSeen({});
    setActiveBlockId(data.blocks[0].id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const onResetAsk = () => {
    if (window.confirm("¿Borrar el avance guardado en este navegador? Se desmarcarán las lecciones, los ejercicios y las cápsulas vistas, y se borrarán las respuestas de los quizzes.")) onReset();
  };
  const setBlockAnswers = (ans) => setQuizAnswers(q => ({ ...q, [activeBlockId]: ans }));

  const appClass = [
    "app",
    `view-${view}`,
    projector ? "projector" : "",
    config.palette === "marine" ? "palette-marine" : "",
    config.palette === "olive" ? "palette-olive" : "",
    config.density === "compact" ? "density-compact" : "",
    config.density === "spacious" ? "density-spacious" : "",
    config.bignums === "off" ? "bignums-off" : "",
  ].filter(Boolean).join(" ");

  const isLastBlock = activeBlock.id === data.blocks[data.blocks.length - 1].id;
  const allDone = pct === 100;

  const totalMin = data.blocks.reduce((acc, b) => acc + blockMinutes(b), 0);
  const celebrationStats = {
    lessons: Object.values(completed).filter(Boolean).length,
    quizzes: Object.values(quizCompleted).filter(Boolean).length,
    blocks: data.blocks.length,
    min: totalMin,
  };

  return (
    <div className={appClass} data-screen-label={view === "bloque" ? `Bloque ${activeBlock.num} | ${activeBlock.title}` : view}>
      <Header
        pct={pct}
        projector={projector}
        setProjector={setProjector}
        onPrint={onPrint}
        onTweaks={() => setTweaksOpen(v => !v)}
        tweaksOpen={tweaksOpen}
        meta={data.meta}
        view={view}
        go={go}
      />
      <Sidebar
        blocks={data.blocks}
        activeBlock={activeBlockId}
        setActiveBlock={setActiveBlockId}
        activeLesson={activeLessonId}
        setActiveLesson={setActiveLessonId}
        completed={completed}
        quizCompleted={quizCompleted}
        totalMin={totalMin}
        view={view}
        go={go}
        sprintsDone={sprintsDone}
        activeSprint={activeSprintId}
      />
      {view === "inicio" && (
        <HomeView footer={<SiteFooter onResetAsk={onResetAsk} />} completed={completed} nav={go} seen={capsSeen} onSeen={markSeen}
          stats={{ pct, totalMin, sprintsDone: Object.values(sprintsDone).filter(Boolean).length }} />
      )}
      {view === "capsulas" && <CapsulasView footer={<SiteFooter onResetAsk={onResetAsk} />} nav={go} seen={capsSeen} onSeen={markSeen} />}
      {view === "aplica" && !activeSprint && <AplicaView footer={<SiteFooter onResetAsk={onResetAsk} />} nav={go} sprintsDone={sprintsDone} />}
      {view === "aplica" && activeSprint && (
        <SprintView
          key={activeSprint.id}
          sprint={activeSprint}
          footer={<SiteFooter onResetAsk={onResetAsk} />}
          nav={go}
          done={!!sprintsDone[activeSprint.id]}
          toggleDone={() => setSprintsDone(d => ({ ...d, [activeSprint.id]: !d[activeSprint.id] }))}
          checks={sprintChecks[activeSprint.id]}
          setCheck={(i) => setSprintChecks(c => ({ ...c, [activeSprint.id]: { ...(c[activeSprint.id] || {}), [i]: !((c[activeSprint.id] || {})[i]) } }))}
        />
      )}
      {view === "bloque" && <BlockView
        block={activeBlock}
        completed={completed}
        toggleLesson={toggleLesson}
        quizAnswers={quizAnswers[activeBlockId] || {}}
        setQuizAnswers={setBlockAnswers}
        onQuizDone={onQuizDone}
        showCelebration={isLastBlock && allDone}
        celebrationProps={{ onPrint, onReset: onResetAsk, stats: celebrationStats }}
        go={go}
        onSeen={markSeen}
        nav={<>
          <BlockNav data={data} activeBlockId={activeBlockId} setActiveBlockId={setActiveBlockId} />
          <SiteFooter onResetAsk={onResetAsk} />
        </>}
      />}
      {tweaksOpen && <TweaksPanel config={config} setConfig={setConfig} onClose={() => setTweaksOpen(false)} />}
    </div>
  );
}

function BlockNav({ data, activeBlockId, setActiveBlockId }) {
  const idx = data.blocks.findIndex(b => b.id === activeBlockId);
  const prev = data.blocks[idx - 1];
  const next = data.blocks[idx + 1];
  if (!prev && !next) return null;
  const go = (id) => { setActiveBlockId(id); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <nav className="block-nav" aria-label="Navegación entre bloques">
      {prev && (
        <button className="block-nav-btn prev" onClick={() => go(prev.id)}>
          <div className="block-nav-label">← Anterior</div>
          <div className="block-nav-title">{prev.num}. {prev.title}</div>
        </button>
      )}
      {next && (
        <button className="block-nav-btn next" onClick={() => go(next.id)}>
          <div className="block-nav-label">Siguiente →</div>
          <div className="block-nav-title">{next.num}. {next.title}</div>
        </button>
      )}
    </nav>
  );
}

function SiteFooter({ onResetAsk }) {
  return (
    <footer className="site-footer">
      <span>© 2026 Miguel Ángel Fernández. Todos los derechos reservados.</span>
      <button className="link-btn" onClick={onResetAsk} title="Borra el avance guardado en este navegador">Reiniciar avance</button>
    </footer>
  );
}

// Minutos del bloque, leídos del rótulo («Bloque 02 | 30 min»).
function blockMinutes(b) {
  const m = String(b.eyebrow || "").match(/(\d+)\s*min/);
  return m ? parseInt(m[1], 10) : 0;
}

Object.assign(window, { App });
