/* Optional AI fallback for questions the built-in engine can't answer.
   Off unless VITE_ASSISTANT_ENDPOINT points at YOUR server-side proxy
   (it holds the API key and the portfolio grounding). The browser never
   sees a key. Contract: POST { message, lang, history } → { reply }.
   See docs/ASSISTANT.md. */

const ENDPOINT = import.meta.env?.VITE_ASSISTANT_ENDPOINT;

export const aiEnabled = Boolean(ENDPOINT);

export async function askAI({ message, lang, history, signal }) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, lang, history }),
    signal,
  });
  if (!res.ok) throw new Error(`Assistant endpoint responded ${res.status}`);
  const data = await res.json();
  if (!data || typeof data.reply !== "string" || !data.reply.trim()) throw new Error("Empty reply");
  return data.reply.trim();
}
