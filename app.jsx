// Main app components

const { useState: useStateA, useMemo: useMemoA, useEffect: useEffectA } = React;

function Quiz({ quiz, onComplete }) {
  const [answers, setAnswers] = useStateA({});

  const pickAnswer = (qi, oi) => {
    if (answers[qi] != null) return;
    const next = { ...answers, [qi]: oi };
    setAnswers(next);
    if (Object.keys(next).length === quiz.questions.length) {
      const correct = quiz.questions.reduce((acc, q, i) => acc + (next[i] === q.correct ? 1 : 0), 0);
      onComplete && onComplete(correct, quiz.questions.length);
    }
  };

  const allAnswered = Object.keys(answers).length === quiz.questions.length;
  const correctCount = quiz.questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0);

  return (
    <div className="quiz">
      <div className="quiz-head">
        <div className="quiz-mark">?</div>
        <div>
          <div className="quiz-title">{quiz.title}</div>
          <div className="quiz-sub">Feedback inmediato · autocorrección</div>
        </div>
        {allAnswered && (
          <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: "var(--marine)", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>
              {correctCount}/{quiz.questions.length}
            </div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-3)", fontWeight: 600 }}>
              Puntaje
            </div>
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

function Lesson({ lesson, idx, isDone, onToggle }) {
  const isExercise = lesson.kind === "exercise";
  return (
    <div className={`lesson ${isDone ? "done" : ""} ${isExercise ? "exercise-wrap" : ""}`} id={`lesson-${lesson.id}`}>
      <div className="lesson-head">
        <div className="lesson-index">{String(idx + 1).padStart(2, "0")}</div>
        <div className="lesson-titles">
          <div className="lesson-eyebrow">
            <span>{lesson.code}</span>
            <span className="dur">· {lesson.dur}</span>
            <span>· {lesson.eyebrow}</span>
          </div>
          <h3 className="lesson-title">{lesson.title}</h3>
        </div>
        <button className={`done-check ${isDone ? "checked" : ""}`} onClick={onToggle}>
          {isDone ? "✓ Completada" : "Marcar completada"}
        </button>
      </div>
      <div className="lesson-body">
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
          <div className="wrap-eyebrow">Lección</div>
          <p>{block.cliffhanger}</p>
        </div>
      ) : (
        <div className="cliffhanger" style={{ background: "var(--olive)" }}>
          <div className="wrap-eyebrow" style={{ color: "#E4EAD6" }}>Fin del curso</div>
          <p>Has llegado al cierre. Lo que sigue: poner en práctica lo aprendido.</p>
        </div>
      )}
      <div className="aforismo">
        {block.aforismo}
        <span className="aforismo-attr">Cierre Bloque {String(block.num).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

function Celebration({ onPrint, onReset, stats }) {
  return (
    <div className="celebration">
      <div className="celebration-eyebrow">Curso completado</div>
      <h2>Felicitaciones.</h2>
      <p>Terminaste los 4 bloques del curso Copilot Chat Básico. Ya tienes la base para empezar a usarlo con criterio el lunes por la mañana.</p>
      <div className="celebration-stats">
        <div className="celebration-stat">
          <div className="n">{stats.lessons}</div>
          <div className="l">Lecciones</div>
        </div>
        <div className="celebration-stat">
          <div className="n">{stats.quizzes}/4</div>
          <div className="l">Quizzes</div>
        </div>
        <div className="celebration-stat">
          <div className="n">{stats.min}</div>
          <div className="l">Minutos</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        <button className="icon-btn" onClick={onPrint} style={{ background: "var(--cream)", color: "var(--burgundy)", borderColor: "var(--cream)", height: 42, padding: "0 20px", fontSize: 13.5, fontWeight: 600 }}>
          ⎙ Imprimir mi progreso
        </button>
        <button className="icon-btn" onClick={onReset} style={{ background: "transparent", color: "var(--cream)", borderColor: "var(--gold)", height: 42, padding: "0 20px", fontSize: 13.5 }}>
          ↻ Reiniciar curso
        </button>
      </div>
      <div className="celebration-quote">“Copilot no reemplaza al profesional que piensa.”</div>
    </div>
  );
}

function BlockView({ block, completed, toggleLesson, quizCompleted, onQuizDone, showCelebration, celebrationProps }) {
  return (
    <div className="main">
      <div className="block-header">
        <div>
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
        />
      ))}
      <Quiz quiz={block.quiz} onComplete={onQuizDone} />
      <WrapUp block={block} />
      {showCelebration && <Celebration {...celebrationProps} />}
    </div>
  );
}

function Sidebar({ blocks, activeBlock, setActiveBlock, activeLesson, setActiveLesson, completed, quizCompleted }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Programa · 120 min</div>
      {blocks.map(b => {
        const doneCount = b.lessons.filter(l => completed[l.id]).length;
        const total = b.lessons.length;
        const allLessons = doneCount === total;
        const allDone = allLessons && quizCompleted[b.id];
        const inProgress = doneCount > 0 && !allDone;
        const isActive = activeBlock === b.id;
        let numClass = "block-num";
        if (allDone) numClass += " complete";
        else if (inProgress) numClass += " in-progress";
        return (
          <div key={b.id} className="block-item">
            <button className={`block-head ${isActive ? "active" : ""}`} onClick={() => { setActiveBlock(b.id); setActiveLesson(null); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <div className={numClass}>{allDone ? "✓" : b.num}</div>
              <div className="block-head-text">
                <div className="block-head-title">{b.title}</div>
                <div className="block-head-meta">{doneCount}/{total} lecciones{quizCompleted[b.id] ? " · quiz ✓" : ""}</div>
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
        );
      })}
    </aside>
  );
}

function Header({ pct, projector, setProjector, onPrint, onTweaks, tweaksOpen, meta }) {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-mark">C</div>
        <div className="brand-text">
          <div className="brand-title">Trabajando con IAG - Copilot</div>
          <div className="brand-sub">MIGUEL ÁNGEL FERNÁNDEZ, PHD.</div>
        </div>
      </div>
      <div className="header-progress">
        <span className="header-progress-label">Progreso</span>
        <div className="progressbar-wrap">
          <div className="progressbar-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="progress-pct">{pct}%</span>
      </div>
      <div className="header-actions">
        <button className={`icon-btn ${projector ? "active" : ""}`} onClick={() => setProjector(!projector)}>
          ▣ Proyector
        </button>
        <button className="icon-btn" onClick={onPrint}>⎙ Imprimir</button>
        <button className={`icon-btn ${tweaksOpen ? "active" : ""}`} onClick={onTweaks}>⚙ Tweaks</button>
      </div>
    </header>
  );
}

function TweaksPanel({ config, setConfig, onClose }) {
  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <div className="tweaks-title">Tweaks</div>
        <button className="tweaks-close" onClick={onClose} aria-label="Cerrar">✕</button>
      </div>
      <div className="tweak-row">
        <label className="tweak-label">Paleta</label>
        <div className="tweak-pills">
          {[
            { k: "default", l: "Burgundy" },
            { k: "marine", l: "Marine" },
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

  // load persisted state (not localStorage — per-tab memory is fine; prompt forbids storage)
  const [activeBlockId, setActiveBlockId] = useStateA(() => {
    try { return window.__curso_state?.activeBlockId || data.blocks[0].id; } catch (_) { return data.blocks[0].id; }
  });
  const [activeLessonId, setActiveLessonId] = useStateA(null);
  const [completed, setCompleted] = useStateA(() => {
    try { return window.__curso_state?.completed || {}; } catch (_) { return {}; }
  });
  const [quizCompleted, setQuizCompleted] = useStateA(() => {
    try { return window.__curso_state?.quizCompleted || {}; } catch (_) { return {}; }
  });
  const [projector, setProjector] = useStateA(false);
  const [tweaksOpen, setTweaksOpen] = useStateA(false);

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "palette": "default",
    "density": "normal",
    "bignums": "on"
  }/*EDITMODE-END*/;
  const [config, setConfig] = useStateA(TWEAK_DEFAULTS);

  // persist in window (survives re-render but not reload — that's acceptable)
  useEffectA(() => {
    window.__curso_state = { activeBlockId, completed, quizCompleted };
  }, [activeBlockId, completed, quizCompleted]);

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
  };

  const onPrint = () => window.print();
  const onReset = () => {
    setCompleted({});
    setQuizCompleted({});
    setActiveBlockId(data.blocks[0].id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const appClass = [
    "app",
    projector ? "projector" : "",
    config.palette === "marine" ? "palette-marine" : "",
    config.palette === "olive" ? "palette-olive" : "",
    config.density === "compact" ? "density-compact" : "",
    config.density === "spacious" ? "density-spacious" : "",
    config.bignums === "off" ? "bignums-off" : "",
  ].filter(Boolean).join(" ");

  const isLastBlock = activeBlock.id === data.blocks[data.blocks.length - 1].id;
  const allDone = pct === 100;

  const celebrationStats = {
    lessons: Object.values(completed).filter(Boolean).length,
    quizzes: Object.values(quizCompleted).filter(Boolean).length,
    min: data.meta.duracionMin,
  };

  return (
    <div className={appClass} data-screen-label={`Bloque ${activeBlock.num} · ${activeBlock.title}`}>
      <Header
        pct={pct}
        projector={projector}
        setProjector={setProjector}
        onPrint={onPrint}
        onTweaks={() => setTweaksOpen(v => !v)}
        tweaksOpen={tweaksOpen}
        meta={data.meta}
      />
      <Sidebar
        blocks={data.blocks}
        activeBlock={activeBlockId}
        setActiveBlock={setActiveBlockId}
        activeLesson={activeLessonId}
        setActiveLesson={setActiveLessonId}
        completed={completed}
        quizCompleted={quizCompleted}
      />
      <BlockView
        block={activeBlock}
        completed={completed}
        toggleLesson={toggleLesson}
        quizCompleted={quizCompleted[activeBlockId]}
        onQuizDone={onQuizDone}
        showCelebration={isLastBlock && allDone}
        celebrationProps={{ onPrint, onReset, stats: celebrationStats }}
      />
      {/* Block navigation at bottom — always visible, even without quiz */}
      <div className="main" style={{ paddingTop: 0, paddingBottom: 48 }}>
        <BlockNav data={data} activeBlockId={activeBlockId} setActiveBlockId={setActiveBlockId} />
      </div>
      {tweaksOpen && <TweaksPanel config={config} setConfig={setConfig} onClose={() => setTweaksOpen(false)} />}
    </div>
  );
}

function BlockNav({ data, activeBlockId, setActiveBlockId }) {
  const idx = data.blocks.findIndex(b => b.id === activeBlockId);
  const prev = data.blocks[idx - 1];
  const next = data.blocks[idx + 1];
  if (!prev && !next) return null;
  return (
    <div style={{
      display: "flex",
      gap: 14,
      marginTop: 32,
      paddingTop: 28,
      borderTop: "1px solid var(--line)",
    }}>
      {prev && (
        <button
          onClick={() => { setActiveBlockId(prev.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            flex: 1,
            textAlign: "left",
            background: "var(--paper)",
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: "18px 22px",
            cursor: "pointer",
            font: "inherit",
          }}
        >
          <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-3)", fontWeight: 600, marginBottom: 4 }}>← Anterior</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{prev.num}. {prev.title}</div>
        </button>
      )}
      {next && (
        <button
          onClick={() => { setActiveBlockId(next.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            flex: 1,
            textAlign: "right",
            background: "var(--burgundy)",
            border: "1px solid var(--burgundy)",
            color: "var(--cream)",
            borderRadius: 12,
            padding: "18px 22px",
            cursor: "pointer",
            font: "inherit",
          }}
        >
          <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-soft)", fontWeight: 600, marginBottom: 4 }}>Siguiente →</div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>{next.num}. {next.title}</div>
        </button>
      )}
    </div>
  );
}

Object.assign(window, { App });
