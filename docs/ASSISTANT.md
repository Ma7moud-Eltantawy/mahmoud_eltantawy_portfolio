# Mahmoud's Assistant · مساعد محمود

A floating chat guide that answers visitors' questions about Mahmoud, using only the portfolio content.

## How it works

Everything runs in the browser. There's no backend, API key, or database.

| File | Role |
|---|---|
| `src/assistant/engine.js` | Turns a message into a structured reply: keyword intents (EN, Arabic incl. Egyptian phrasing), small talk, lookup of projects, companies, technologies and glossary terms (with typo tolerance), and follow-ups on the current topic |
| `src/assistant/glossary.js` | Plain-language definitions for "what is …?" questions (EN + AR) |
| `src/assistant/i18n.js` | Interface text, reply phrasing, and Arabic renderings of CV content |
| `src/assistant/useAssistant.js` | Conversation state: messages, language, typing / error status (kept in `sessionStorage` for the tab) |
| `src/assistant/Reply.jsx` | Contextual UI per reply: profile, experience, skills, project cards, contact options, certifications |
| `src/assistant/Assistant.jsx` | Floating button, panel, composer, language switch |
| `src/assistant/assistant.css` | Styles built on `src/styles/tokens.css` |
| `src/assistant/ai.js` | Optional AI fallback (off by default) |

**Conversation memory:** each reply can set a topic (a project, company, skill, or glossary term). Short follow-ups such as "tell me more", "what was his role?", "what was it built with?", "where can I see it?", or "show me another" answer about that topic, and "yes" accepts the first suggested question. The topic lives in `sessionStorage` with the chat.

**Careful topics:** salary, remote work or relocation, and personal questions are never answered with invented details: the assistant points to contacting Mahmoud directly.

**Source of truth:** every fact comes from `src/data/cv.js`. When you add a project, skill, or certification there, the assistant picks it up automatically. You only need to update `i18n.js` for Arabic text that the CV doesn't contain:

- a new skill group (`skillGroups`)
- a new project category (`categories`)
- a new work location (`place`)

**Contact links:** built from `PROFILE` in `cv.js`. WhatsApp uses the phone number as `https://wa.me/<digits>`, with a short greeting the visitor can edit before sending. The assistant never claims a message was sent.

## Languages

The assistant replies in the language the visitor writes in, and the header switch changes it manually. Arabic renders right-to-left.

To add a language:

1. Add it to `LANGS` in `i18n.js`, with `dir` and, for non-Latin scripts, a `script` regex for detection.
2. Copy the `en` block in `STRINGS` and translate it.
3. Add its keywords to `INTENTS`, `PROJECT_ALIASES`, and `CATEGORY_WORDS` in `engine.js`.

## Teaching it new questions

Add keywords to the matching intent in `INTENTS` (`engine.js`). Order matters: on a tie, the intent listed first wins.

To add a new intent, you need to touch three files:

- **`engine.js`:** add the intent to `INTENTS`, plus its follow-up questions (`FOLLOW_UPS`) and portfolio sections (`SECTIONS`).
- **`i18n.js`:** add the reply text in `replies` for every language.
- **`Reply.jsx`:** optionally, add a block in `BLOCKS`.

## Optional: AI answers for open questions

The site is static on GitHub Pages, so an API key can't live in the frontend. If you want a language model to answer the questions the engine can't, deploy a small proxy (Cloudflare Worker, Vercel function, etc.) that keeps the key server-side. Then build with:

```bash
VITE_ASSISTANT_ENDPOINT=https://your-proxy.example.com/assistant npm run build
```

For GitHub Pages, add `VITE_ASSISTANT_ENDPOINT` as an `env:` value on the build step in `.github/workflows/deploy.yml`.

**Contract:** the browser sends `POST { message, lang, history }` and expects `{ reply }`, where `history` holds the visitor's last 5 messages. If the request fails, the chat shows an error with a retry button. Without the variable, open questions get a polite "I don't have that detail" reply with contact options.

**Grounding:** the proxy should include the portfolio content (`src/data/cv.js`) in its system prompt and tell the model to:

- answer only from that content, in the visitor's language (`lang`)
- never invent facts or links
- suggest contacting Mahmoud when the answer isn't there
