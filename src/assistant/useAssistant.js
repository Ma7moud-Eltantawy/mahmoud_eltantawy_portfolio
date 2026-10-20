import { useCallback, useEffect, useRef, useState } from "react";
import { REDUCED } from "../lib/hooks";
import { aiEnabled, askAI } from "./ai.js";
import { answer } from "./engine.js";
import { detectLang, initialLang, LANGS } from "./i18n.js";

const STORE = "mahmoud-assistant:v1";
const MAX_LEN = 300;

/* the conversation survives a reload in the same tab, never longer */
function load() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORE));
    if (saved && LANGS[saved.lang] && Array.isArray(saved.messages)) return saved;
  } catch {
    /* storage unavailable or corrupt: start fresh */
  }
  return null;
}

let uid = 0;
const nextId = () => `${Date.now().toString(36)}-${uid++}`;

/* Conversation state: messages, language, and whether a reply is on its way.
   status: "idle" | "typing" | "error" */
export function useAssistant() {
  const [saved] = useState(load);
  const [lang, setLang] = useState(() => saved?.lang || initialLang());
  const [messages, setMessages] = useState(() => saved?.messages || []);
  const [status, setStatus] = useState("idle");

  const timer = useRef(0);
  const request = useRef(null);
  const failed = useRef(null);
  // bumps on reset so a reply that lands afterwards is dropped
  const generation = useRef(0);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORE, JSON.stringify({ lang, messages }));
    } catch {
      /* storage full or blocked: the chat still works for this visit */
    }
  }, [lang, messages]);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
      request.current?.abort();
    },
    []
  );

  const push = (msg) => setMessages((list) => [...list, { id: nextId(), ...msg }]);

  const respond = useCallback(async (text, replyLang, history) => {
    const gen = generation.current;
    const reply = answer(text);
    setStatus("typing");

    if (reply.key === "fallback" && aiEnabled) {
      request.current?.abort();
      request.current = new AbortController();
      try {
        const out = await askAI({ message: text, lang: replyLang, history, signal: request.current.signal });
        if (gen !== generation.current) return;
        push({ role: "bot", text: out });
        setStatus("idle");
      } catch (err) {
        if (err.name === "AbortError" || gen !== generation.current) return;
        failed.current = { text, replyLang, history };
        setStatus("error");
      }
      return;
    }

    // a short, natural pause; instant when the visitor prefers less motion
    const delay = REDUCED ? 120 : 420 + Math.min(text.length * 6, 420);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (gen !== generation.current) return;
      push({ role: "bot", reply });
      setStatus("idle");
    }, delay);
  }, []);

  const send = useCallback(
    (raw) => {
      const text = String(raw || "").trim().slice(0, MAX_LEN);
      if (!text || status === "typing") return;
      // answer in the language the visitor writes in
      const detected = detectLang(text);
      const replyLang = detected || lang;
      if (replyLang !== lang) setLang(replyLang);
      const history = messages.filter((m) => m.role === "user").slice(-5).map((m) => m.text);
      push({ role: "user", text });
      respond(text, replyLang, history);
    },
    [status, lang, messages, respond]
  );

  const retry = useCallback(() => {
    if (!failed.current) return;
    const { text, replyLang, history } = failed.current;
    failed.current = null;
    respond(text, replyLang, history);
  }, [respond]);

  const reset = useCallback(() => {
    generation.current += 1;
    clearTimeout(timer.current);
    request.current?.abort();
    failed.current = null;
    setMessages([]);
    setStatus("idle");
  }, []);

  return { lang, setLang, messages, status, send, retry, reset };
}
