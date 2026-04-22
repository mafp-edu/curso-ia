// Componentes de renderizado del contenido del curso
// Usa window.COURSE_DATA

const { useState, useMemo, useCallback } = React;

// Inline markdown: **bold** and *italic*. Returns HTML string for dangerouslySetInnerHTML.
function md(s) {
  if (s == null) return "";
  return String(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^\*])\*([^\*\n]+?)\*(?!\*)/g, "$1<em>$2</em>");
}

// ---------- Primitives ----------

function CoreChipRow() {
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "4px 0 14px" }}>
      <span className="chip chip-c"><span className="chip-dot" />Contexto</span>
      <span className="chip chip-o"><span className="chip-dot" />Objetivo</span>
      <span className="chip chip-r"><span className="chip-dot" />Restricciones</span>
      <span className="chip chip-e"><span className="chip-dot" />Expectativas</span>
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (_) {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={handle}>
      {copied ? "✓ Copiado" : "⧉ Copiar"}
    </button>
  );
}

function PromptCore({ block }) {
  const plain = block.lines.map(l => `[${l.tag}] ${l.x}`).join("\n\n");
  const tagClass = (t) => {
    if (t === "C") return "core-c";
    if (t === "O") return "core-o";
    if (t === "R") return "core-r";
    if (t === "E") return "core-e";
    return "core-c";
  };
  return (
    <div className="prompt">
      <div className="prompt-head">
        <span className="prompt-meta">⌨ {block.title || "Prompt CORE"}</span>
        <CopyButton text={plain} />
      </div>
      <div className="prompt-body">
        {block.lines.map((l, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <span className={`core-tag ${tagClass(l.tag)}`}>{l.tag}</span>
            {l.x}
          </div>
        ))}
      </div>
    </div>
  );
}

function PromptRaw({ text }) {
  return (
    <div className="prompt">
      <div className="prompt-head">
        <span className="prompt-meta" style={{ color: "#E8A78E" }}>⚠ Prompt SIN anonimizar (ejemplo)</span>
        <CopyButton text={text} />
      </div>
      <div className="prompt-body" style={{ color: "#F1D9CC" }}>{text}</div>
    </div>
  );
}

function Callout({ kind, head, children }) {
  return (
    <div className={`callout callout-${kind}`}>
      <div className="callout-head">{head}</div>
      <p dangerouslySetInnerHTML={{ __html: md(children) }} />
    </div>
  );
}

function BigNumbers({ items }) {
  return (
    <div className="grid-3" style={{ margin: "8px 0 16px" }}>
      {items.map((it, i) => (
        <div key={i}>
          <div className={`big-number ${it.c || ""}`} style={it.fs ? { fontSize: `${it.fs}px` } : undefined}>{it.n}</div>
          <div className="big-number-label">{it.l}</div>
          {it.sub && <div className="big-number-sub">{it.sub}</div>}
        </div>
      ))}
    </div>
  );
}

function Compare({ bad, good }) {
  return (
    <div className="compare">
      {bad && (
        <div className="compare-col bad">
          <div className="compare-col-head">
            <span>✕ {bad.head}</span>
          </div>
          <div className="compare-col-body">
            {bad.items.map((t, i) => <p key={i} dangerouslySetInnerHTML={{ __html: md(t) }} />)}
          </div>
        </div>
      )}
      {good && (
        <div className="compare-col good">
          <div className="compare-col-head">
            <span>✓ {good.head}</span>
          </div>
          <div className="compare-col-body">
            {good.items.map((t, i) => <p key={i} dangerouslySetInnerHTML={{ __html: md(t) }} />)}
          </div>
        </div>
      )}
    </div>
  );
}

function Grid3({ items }) {
  return (
    <div className="grid-3">
      {items.map((it, i) => (
        <div key={i} className="card">
          {it.mono ? (
            <>
              <div className="card-title" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--burgundy)" }}>{it.mono}</div>
              <p dangerouslySetInnerHTML={{ __html: md(it.body) }} />
            </>
          ) : (
            <>
              <div className="card-title" dangerouslySetInnerHTML={{ __html: md(it.title) }} />
              <p dangerouslySetInnerHTML={{ __html: md(it.body) }} />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function Grid4({ items }) {
  return (
    <div className="grid-4">
      {items.map((it, i) => (
        <div key={i} className="card">
          <div className="card-title" dangerouslySetInnerHTML={{ __html: md(it.title) }} />
          <p dangerouslySetInnerHTML={{ __html: md(it.body) }} />
        </div>
      ))}
    </div>
  );
}

function Grid2({ items }) {
  return (
    <div className="grid-2">
      {items.map((it, i) => (
        <div key={i} className="card" style={it.chip ? { borderLeft: `4px solid var(--c-${it.chip === "c" ? "contexto" : it.chip === "o" ? "objetivo" : it.chip === "r" ? "restric" : "expect"})` } : undefined}>
          <div className="card-title">
            {it.letter && <span className={`chip chip-${it.chip}`} style={{ padding: "2px 8px" }}>{it.letter}</span>}
            <span dangerouslySetInnerHTML={{ __html: md(it.title) }} />
          </div>
          <p dangerouslySetInnerHTML={{ __html: md(it.body) }} />
        </div>
      ))}
    </div>
  );
}

function Schema({ label, parts }) {
  return (
    <div className="schema">
      <div className="schema-label">{label}</div>
      <div className="schema-window">
        {parts.map((p, i) => {
          if (p.kind === "topbar") {
            return (
              <div key={i} className="schema-topbar">
                <span className="schema-dot" />
                <span className="schema-dot" />
                <span className="schema-dot" />
                <span style={{ flex: 1 }} />
                <span style={{ fontFamily: "monospace", fontSize: 11, color: "var(--ink-3)" }}>m365.cloud.microsoft/chat</span>
              </div>
            );
          }
          if (p.kind === "row") {
            return (
              <div key={i} style={{ display: "flex", gap: 10, padding: "12px 14px" }}>
                {p.items.map((it, j) => (
                  <div
                    key={j}
                    className={`schema-box ${it.highlight ? "schema-highlight" : ""}`}
                    style={{ flex: it.width || 1 }}
                  >
                    {it.box}
                  </div>
                ))}
              </div>
            );
          }
          return null;
        })}
      </div>
      {parts.filter(p => p.arrow).map((p, i) => (
        <div key={`a${i}`} style={{ marginTop: 12 }}>
          <span className="schema-arrow">{p.arrow}</span>
        </div>
      ))}
    </div>
  );
}

function TrapReveal({ items }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div style={{ margin: "12px 0" }}>
      {!revealed ? (
        <button className="icon-btn" style={{ height: 40, padding: "0 18px" }} onClick={() => setRevealed(true)}>
          Revelar los 5 elementos expuestos →
        </button>
      ) : (
        <div className="callout callout-alert" style={{ margin: 0 }}>
          <div className="callout-head">5 exposiciones identificadas</div>
          <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
            {items.map((it, i) => (
              <li key={i} style={{ marginBottom: 6, fontSize: 14, lineHeight: 1.5 }}>
                <strong style={{ color: "var(--burgundy)" }}>{it.tag}:</strong> {it.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function AforismoMini({ x }) {
  return (
    <div style={{
      margin: "16px 0",
      padding: "20px 24px",
      borderLeft: "4px solid var(--gold)",
      background: "var(--gold-soft)",
      fontStyle: "italic",
      fontSize: 17,
      fontWeight: 500,
      lineHeight: 1.4,
      color: "var(--ink)",
      borderRadius: "0 10px 10px 0",
    }}>
      {x}
    </div>
  );
}

function ExerciseTextarea() {
  const [value, setValue] = useState("");
  const [rubric, setRubric] = useState({ c: false, o: false, r: false, e: false });
  return (
    <>
      <textarea
        placeholder="[C] Soy analista de...&#10;[O] Necesito un...&#10;[R] No inventes...&#10;[E] Formato: ..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <div className="rubric">
        {[
          { k: "c", letter: "C", label: "Contexto claro", sub: "Rol, empresa" },
          { k: "o", letter: "O", label: "Objetivo específico", sub: "Entregable concreto" },
          { k: "r", letter: "R", label: "Restricciones", sub: "Largo, qué NO" },
          { k: "e", letter: "E", label: "Expectativas", sub: "Formato, tono" },
        ].map(it => (
          <button
            key={it.k}
            className={`rubric-item ${rubric[it.k] ? "checked" : ""}`}
            onClick={() => setRubric(r => ({ ...r, [it.k]: !r[it.k] }))}
          >
            <span className="rubric-check">{rubric[it.k] ? "✓" : ""}</span>
            <span>
              <span className="rubric-label">{it.letter} · {it.label}</span>
              <span className="rubric-sub" style={{ display: "block" }}>{it.sub}</span>
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

function Matcher({ items }) {
  const [answers, setAnswers] = useState({});
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 8 }}>
      {items.map((it, i) => {
        const chosen = answers[i];
        return (
          <div key={i} className="card" style={{ padding: 18 }}>
            <div style={{ fontSize: 14.5, fontWeight: 600, marginBottom: 10, color: "var(--ink)" }}>
              <span style={{ color: "var(--burgundy)" }}>Tarea {i + 1}.</span> {it.task}
            </div>
            <div className="q-options">
              {it.options.map((op, j) => {
                let cls = "q-option";
                if (chosen != null) {
                  if (j === it.correct) cls += " correct";
                  else if (j === chosen) cls += " incorrect";
                  else cls += " muted";
                }
                return (
                  <button
                    key={j}
                    className={cls}
                    onClick={() => chosen == null && setAnswers(a => ({ ...a, [i]: j }))}
                    disabled={chosen != null}
                  >
                    <span className="q-letter">{String.fromCharCode(65 + j)}</span>
                    <span>{op}</span>
                  </button>
                );
              })}
            </div>
            {chosen != null && (
              <div className={`q-feedback ${chosen === it.correct ? "ok" : "bad"}`} style={{ marginTop: 10 }}>
                <b>{chosen === it.correct ? "Correcto." : "Revisemos."}</b> {it.explain}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function AgentSteps({ steps }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "10px 0" }}>
      {steps.map((s, i) => (
        <div key={i} className="card" style={{ display: "flex", gap: 16, padding: "16px 20px" }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "var(--burgundy)", color: "var(--cream)",
            display: "grid", placeItems: "center",
            fontWeight: 700, fontSize: 16, flexShrink: 0,
          }}>{s.n}</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14.5, color: "var(--ink)" }}>{s.title}</div>
            <div style={{ fontSize: 13.5, color: "var(--ink-2)", marginTop: 4, lineHeight: 1.5 }}>{s.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((it, i) => (
        <div key={i} className="tl-item">
          <div className="tl-when">{it.when}</div>
          <div className="tl-what">{it.what}</div>
          <div className="tl-why">{it.why}</div>
        </div>
      ))}
    </div>
  );
}

// ---------- LLM Simulation (desplegable tipo chat) ----------

function LlmSim({ user, answer, reveals }) {
  const [step, setStep] = React.useState(0);
  const [typed, setTyped] = React.useState("");
  const [thinking, setThinking] = React.useState(false);

  React.useEffect(() => {
    if (step !== 1) return;
    setThinking(true);
    setTyped("");
    const thinkT = setTimeout(() => {
      setThinking(false);
      let i = 0;
      const tick = () => {
        i++;
        setTyped(answer.slice(0, i));
        if (i < answer.length) setTimeout(tick, 55);
      };
      tick();
    }, 750);
    return () => clearTimeout(thinkT);
  }, [step, answer]);

  const done = step === 1 && !thinking && typed.length === answer.length;

  return (
    <div className="llm-sim">
      <div className="llm-sim-head">
        <div className="llm-sim-head-left">
          <span className="llm-sim-dot" />
          <span>Experimento mental · simulación LLM</span>
        </div>
        <div className="llm-sim-meta">Paso {step + 1} / 3</div>
      </div>

      <div className="llm-sim-chat">
        <div className="llm-row user">
          <div className="llm-label">Usuario →</div>
          <div className="llm-content">{user}</div>
        </div>
        {step >= 1 && (
          <div className="llm-row bot">
            <div className="llm-label">LLM →</div>
            <div className="llm-content">
              {thinking ? (
                <span className="llm-typing"><span/><span/><span/></span>
              ) : (
                <span>
                  {typed}
                  {typed.length < answer.length && <span className="llm-cursor">▌</span>}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="llm-sim-controls">
        {step === 0 && (
          <button className="llm-sim-btn" onClick={() => setStep(1)}>
            Ver respuesta del LLM →
          </button>
        )}
        {done && (
          <button className="llm-sim-btn" onClick={() => setStep(2)}>
            ¿Por qué respondió eso? →
          </button>
        )}
        {step >= 1 && (
          <button className="llm-sim-btn-ghost" onClick={() => { setStep(0); setTyped(""); }}>
            ↺ Reiniciar
          </button>
        )}
      </div>

      {step === 2 && (
        <div className="llm-sim-reveals">
          {reveals.map((r, i) => (
            <div key={i} className="llm-reveal" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="llm-reveal-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="llm-reveal-body">
                <div className="llm-reveal-head">{r.head}</div>
                <p dangerouslySetInnerHTML={{ __html: md(r.x) }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- Lesson body renderer ----------

function renderPart(part, key) {
  switch (part.t) {
    case "p":
      return <p key={key} dangerouslySetInnerHTML={{ __html: md(part.x) }} />;
    case "callout":
      return <Callout key={key} kind={part.kind} head={part.head}>{part.x}</Callout>;
    case "bignums":
      return <BigNumbers key={key} items={part.items} />;
    case "compare":
      return <Compare key={key} bad={part.bad} good={part.good} />;
    case "grid2":
      return <Grid2 key={key} items={part.items} />;
    case "grid3":
      return <Grid3 key={key} items={part.items} />;
    case "grid4":
      return <Grid4 key={key} items={part.items} />;
    case "schema":
      return <Schema key={key} label={part.label} parts={part.parts} />;
    case "prompt-raw":
      return <PromptRaw key={key} text={part.x} />;
    case "prompt-core":
      return <PromptCore key={key} block={part} />;
    case "trap-reveal":
      return <TrapReveal key={key} items={part.items} />;
    case "core-chips":
      return <CoreChipRow key={key} />;
    case "aforismo-mini":
      return <AforismoMini key={key} x={part.x} />;
    case "exercise-textarea":
      return <ExerciseTextarea key={key} />;
    case "rubric":
      return null; // handled inside ExerciseTextarea
    case "matcher":
      return <Matcher key={key} items={part.items} />;
    case "agent-steps":
      return <AgentSteps key={key} steps={part.steps} />;
    case "timeline":
      return <Timeline key={key} items={part.items} />;
    case "llm-sim":
      return <LlmSim key={key} user={part.user} answer={part.answer} reveals={part.reveals} />;
    default:
      return null;
  }
}

Object.assign(window, {
  CoreChipRow, CopyButton, PromptCore, PromptRaw, Callout, BigNumbers,
  Compare, Grid2, Grid3, Grid4, Schema, TrapReveal, AforismoMini,
  ExerciseTextarea, Matcher, AgentSteps, Timeline, LlmSim, renderPart,
});
