import { useEffect, useRef, useState } from "react";
import { PROFILE } from "../data/cv";
import { asset, REDUCED } from "../lib/hooks";
import Icon from "../components/Icon";
import { LANGS, STRINGS } from "./i18n.js";
import { useAssistant } from "./useAssistant.js";
import Reply, { Suggestions } from "./Reply.jsx";
import "./assistant.css";

const STARTERS = ["who", "tech", "projects", "contact"];
// below this width the panel fills the screen (matches the phone breakpoint in assistant.css)
const PHONE = "(max-width: 734px)";

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const { lang, setLang, messages, status, send, retry, reset } = useAssistant();
  const t = STRINGS[lang];

  const fabRef = useRef(null);
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const logRef = useRef(null);

  // lock the page behind the full-screen panel on phones (CSS scopes it to small screens)
  useEffect(() => {
    document.body.classList.toggle("assistant-open", open);
    return () => document.body.classList.remove("assistant-open");
  }, [open]);

  // focus the input on open, but don't pop the keyboard on touch devices
  useEffect(() => {
    if (!open) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    (fine ? inputRef.current : panelRef.current)?.focus({ preventScroll: true });
  }, [open]);

  // keep the newest message in view
  useEffect(() => {
    const log = logRef.current;
    if (!log || !open) return;
    log.scrollTo({ top: log.scrollHeight, behavior: REDUCED ? "auto" : "smooth" });
  }, [messages.length, status, open, lang]);

  const close = () => {
    setOpen(false);
    if (panelRef.current?.contains(document.activeElement)) fabRef.current?.focus({ preventScroll: true });
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      close();
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (!draft.trim() || status === "typing") return;
    send(draft);
    setDraft("");
  };

  const pick = (question) => send(question);

  // section links: on phones the panel covers the page, so close it first
  const navigate = (e, id) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    if (window.matchMedia(PHONE).matches) {
      document.body.classList.remove("assistant-open");
      setOpen(false);
    }
    requestAnimationFrame(() => target.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" }));
  };

  const last = messages[messages.length - 1];
  const followUps = status === "idle" && last?.role === "bot" && last.reply ? last.reply.suggest : [];

  return (
    <>
      <button
        ref={fabRef}
        type="button"
        className={`assistant-fab ${open ? "is-open" : ""}`}
        aria-label={open ? t.ui.close : t.ui.open}
        aria-expanded={open}
        aria-controls="assistant-panel"
        title={t.ui.title}
        onClick={() => (open ? close() : setOpen(true))}
      >
        <Icon name="chat" size={24} className="assistant-fab__chat" />
        <Icon name="close" size={22} className="assistant-fab__close" />
      </button>

      <section
        id="assistant-panel"
        ref={panelRef}
        className={`assistant ${open ? "is-open" : ""}`}
        role="dialog"
        aria-labelledby="assistant-title"
        lang={lang}
        dir={LANGS[lang].dir}
        tabIndex={-1}
        inert={!open}
        onKeyDown={onKeyDown}
      >
        <header className="assistant__head">
          <img className="assistant__avatar" src={asset(PROFILE.photo)} alt="" width="36" height="36" />
          <div className="assistant__heading">
            <h2 id="assistant-title">{t.ui.title}</h2>
            <p>{t.ui.subtitle}</p>
          </div>
          <div className="assistant__lang" role="group" aria-label={t.ui.language}>
            {Object.entries(LANGS).map(([code, l]) => (
              <button
                key={code}
                type="button"
                lang={code}
                aria-pressed={lang === code}
                aria-label={l.name}
                onClick={() => setLang(code)}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button type="button" className="icon-btn" onClick={reset} aria-label={t.ui.newChat} title={t.ui.newChat} disabled={!messages.length}>
            <Icon name="refresh" size={18} />
          </button>
          <button type="button" className="icon-btn" onClick={close} aria-label={t.ui.close} title={t.ui.close}>
            <Icon name="close" size={18} />
          </button>
        </header>

        <div className="assistant__log" ref={logRef} role="log" aria-live="polite" aria-relevant="additions">
          <div className="a-turn">
            <p className="a-bubble a-bubble--bot">{t.welcome}</p>
          </div>
          {!messages.length ? <Suggestions keys={STARTERS} lang={lang} onPick={pick} /> : null}

          {messages.map((m) =>
            m.role === "user" ? (
              <p key={m.id} className="a-bubble a-bubble--user" dir="auto">
                {m.text}
              </p>
            ) : m.reply ? (
              <Reply key={m.id} reply={m.reply} lang={lang} onNavigate={navigate} />
            ) : (
              <div key={m.id} className="a-turn">
                <p className="a-bubble a-bubble--bot" dir="auto">{m.text}</p>
              </div>
            )
          )}

          {status === "typing" ? (
            <p className="a-bubble a-bubble--bot a-typing" role="status">
              <span className="a-sr">{t.ui.typing}</span>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </p>
          ) : null}

          {status === "error" ? (
            <div className="a-turn" role="alert">
              <p className="a-bubble a-bubble--bot a-bubble--error">{t.ui.errorText}</p>
              <button type="button" className="btn btn--ghost btn--sm" onClick={retry}>
                <Icon name="refresh" size={14} /> {t.ui.retry}
              </button>
            </div>
          ) : null}

          <Suggestions keys={followUps} lang={lang} onPick={pick} />
        </div>

        <form className="assistant__composer" onSubmit={submit}>
          <input
            ref={inputRef}
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={t.ui.placeholder}
            aria-label={t.ui.placeholder}
            maxLength={300}
            autoComplete="off"
            enterKeyHint="send"
            dir="auto"
          />
          <button type="submit" className="assistant__send" aria-label={t.ui.send} disabled={!draft.trim() || status === "typing"}>
            <Icon name="send" size={18} stroke={2} className="a-flip" />
          </button>
        </form>
      </section>
    </>
  );
}
