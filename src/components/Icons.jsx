/* ============================================================
   Icons.jsx — inline SVG icon set (stroke = currentColor)
   ============================================================ */

function S({ children, vb = "0 0 24 24", ...p }) {
  return (
    <svg
      viewBox={vb}
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...p}
    >
      {children}
    </svg>
  );
}

const F = { fill: "currentColor", stroke: "none" };

export const Brain = (p) => (
  <S {...p}>
    <path d="M12 5.2a2.6 2.6 0 0 0-4.9-.9 2.6 2.6 0 0 0-1.9 3.6 2.8 2.8 0 0 0-.9 3.6 2.9 2.9 0 0 0 .5 3.6 2.9 2.9 0 0 0 4.2 1.9c.6.5 1.4.8 2.2.8h.8" />
    <path d="M12 5.2a2.6 2.6 0 0 1 4.9-.9 2.6 2.6 0 0 1 1.9 3.6 2.8 2.8 0 0 1 .9 3.6 2.9 2.9 0 0 1-.5 3.6 2.9 2.9 0 0 1-4.2 1.9c-.6.5-1.4.8-2.2.8H12" />
    <path d="M12 5.2v13.5M9.3 8.8c.9.4 1.8.4 2.7 0M9.3 13.2c.9.4 1.8.4 2.7 0" />
    <path d="M14.7 8.8c-.9.4-1.8.4-2.7 0" />
  </S>
);

export const Code = (p) => (
  <S {...p}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.6 4.6l-3.2 14.8" />
  </S>
);

export const Search = (p) => (
  <S {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.6 15.6 4.9 4.9" />
  </S>
);

export const Cube = (p) => (
  <S {...p}>
    <path d="m12 2.5 8 4.5v9l-8 4.5L4 16V7l8-4.5Z" />
    <path d="M4.3 7.2 12 11.5l7.7-4.3M12 11.5v9" />
  </S>
);

export const Pencil = (p) => (
  <S {...p}>
    <path d="m4 20 1.1-4.2L16.5 4.4a2.12 2.12 0 0 1 3 3L8.2 18.9 4 20Z" />
    <path d="m14.6 6.4 3 3" />
  </S>
);

export const Plane = (p) => (
  <S {...p}>
    <path d="M21 3 3.6 10.3c-.8.34-.75 1.5.08 1.77l5.62 1.83 1.9 5.7c.27.8 1.42.85 1.76.07L21 3Z" />
    <path d="M21 3 9.3 13.9" />
  </S>
);

export const Mail = (p) => (
  <S {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="m4.5 8 7.5 5.4L19.5 8" />
  </S>
);

export const LinkedIn = (p) => (
  <S {...p}>
    <path
      {...F}
      d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
    />
  </S>
);

export const GitHub = (p) => (
  <S vb="0 0 16 16" {...p}>
    <path
      {...F}
      fillRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
    />
  </S>
);

export const Pin = (p) => (
  <S {...p}>
    <path d="M12 21s-6.5-5.3-6.5-10a6.5 6.5 0 0 1 13 0c0 4.7-6.5 10-6.5 10Z" />
    <circle cx="12" cy="10.5" r="2.3" />
  </S>
);

export const Lock = (p) => (
  <S {...p}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2" />
  </S>
);

export const Calendar = (p) => (
  <S {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4M7.5 13.5h3M13.5 13.5h3M7.5 16.75h3M13.5 16.75h3" />
  </S>
);

export const Cap = (p) => (
  <S {...p}>
    <path d="m12 4 10 4.5L12 13 2 8.5 12 4Z" />
    <path d="M6.5 10.7v4.3c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.3M22 8.5V13" />
  </S>
);

export const Rocket = (p) => (
  <S {...p}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </S>
);

export const Db = (p) => (
  <S {...p}>
    <ellipse cx="12" cy="5.5" rx="8" ry="3" />
    <path d="M4 5.5V12c0 1.66 3.58 3 8 3s8-1.34 8-3V5.5" />
    <path d="M4 12v6.5c0 1.66 3.58 3 8 3s8-1.34 8-3V12" />
  </S>
);

export const Chart = (p) => (
  <S {...p}>
    <path d="M4 4v15.5h16" />
    <path d="m7 14 4-4.5 3 2.5 5-6" />
    <circle cx="7" cy="14" r="1.1" {...F} />
    <circle cx="11" cy="9.5" r="1.1" {...F} />
    <circle cx="14" cy="12" r="1.1" {...F} />
    <circle cx="19" cy="6" r="1.1" {...F} />
  </S>
);

export const Robot = (p) => (
  <S {...p}>
    <rect x="4.5" y="8" width="15" height="11" rx="2.5" />
    <path d="M12 8V5M10.5 3.5h3" />
    <path d="M2.5 12.5v3M21.5 12.5v3" />
    <path d="M9 12.5v1.5M15 12.5v1.5M9.5 16.5h5" />
  </S>
);

export const Cloud = (p) => (
  <S {...p}>
    <path d="M7 18.5a4.5 4.5 0 0 1-.36-8.99 6 6 0 0 1 11.7 1.6A3.7 3.7 0 0 1 17.8 18.5H7Z" />
  </S>
);

export const Gear = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
  </S>
);

export const Check = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m8.5 12.2 2.4 2.4 4.8-5" />
  </S>
);

export const Plus = (p) => (
  <S {...p}>
    <path d="M12 5v14M5 12h14" />
  </S>
);

export const Bulb = (p) => (
  <S {...p}>
    <path d="M9.5 18h5M10.5 21h3" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.8.6 1.2 1.3 1.3 2.1h4.4c.1-.8.5-1.5 1.3-2.1A6 6 0 0 0 12 3Z" />
  </S>
);

export const Target = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" {...F} />
  </S>
);

export const Users = (p) => (
  <S {...p}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <circle cx="16.8" cy="9.5" r="2.5" />
    <path d="M16.5 14.6c2.4.3 4 2.1 4 4.4" />
  </S>
);

export const Sparkle = (p) => (
  <S {...p}>
    <path d="M12 3c.6 4.8 2.2 6.4 7 7-4.8.6-6.4 2.2-7 7-.6-4.8-2.2-6.4-7-7 4.8-.6 6.4-2.2 7-7Z" />
    <path d="M19 15.5c.3 2 1 2.7 3 3-2 .3-2.7 1-3 3-.3-2-1-2.7-3-3 2-.3 2.7-1 3-3Z" />
  </S>
);

export const InfinityIcon = (p) => (
  <S {...p}>
    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
  </S>
);

export const ArrowUpRight = (p) => (
  <S {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </S>
);

export const ArrowRight = (p) => (
  <S {...p}>
    <path d="M4 12h16M13 5l7 7-7 7" />
  </S>
);

export const ArrowDown = (p) => (
  <S {...p}>
    <path d="M12 4v16M5 13l7 7 7-7" />
  </S>
);

export const Sigma = (p) => (
  <S {...p}>
    <path d="M17 5.5H7.5l5.5 6.5-5.5 6.5H17" />
  </S>
);

export const Eye = (p) => (
  <S {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="3" />
  </S>
);

export const Layers = (p) => (
  <S {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m4.5 12.5 7.5 4.2 7.5-4.2M4.5 16.5 12 20.7l7.5-4.2" />
  </S>
);

export const Chat = (p) => (
  <S {...p}>
    <path d="M4 5.5h16V16H10.5L6 20v-4H4V5.5Z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </S>
);

export const Server = (p) => (
  <S {...p}>
    <rect x="4" y="4" width="16" height="7" rx="1.5" />
    <rect x="4" y="13" width="16" height="7" rx="1.5" />
    <circle cx="7.5" cy="7.5" r="0.4" {...F} />
    <circle cx="7.5" cy="16.5" r="0.4" {...F} />
    <path d="M11 7.5h6M11 16.5h6" />
  </S>
);

export const GitBranch = (p) => (
  <S {...p}>
    <circle cx="6" cy="6" r="2.2" />
    <circle cx="6" cy="18" r="2.2" />
    <circle cx="18" cy="8" r="2.2" />
    <path d="M6 8.2v7.6M18 10.2c0 3.8-4.5 4.3-9.5 4.6" />
  </S>
);

export const Brackets = (p) => (
  <S {...p}>
    <path d="M8 4H4.5v16H8M16 4h3.5v16H16M13.7 7.5l-3.4 9" />
  </S>
);

export const Network = (p) => (
  <S {...p}>
    <circle cx="12" cy="5" r="2.2" />
    <circle cx="5" cy="18" r="2.2" />
    <circle cx="19" cy="18" r="2.2" />
    <path d="M10.9 6.9 6.1 16.1M13.1 6.9l4.8 9.2M7.2 18h9.6" />
  </S>
);

/* ---------- tech brand glyphs (filled / mixed) ---------- */

export const Python = (p) => (
  <S {...p}>
    <path
      {...F}
      fillRule="evenodd"
      d="M11.9 2.2c-1.1 0-2.1.1-3 .32-2.6.58-3.06 1.78-3.06 4v1.63h6.12v.72H3.5c-1.79 0-3.35 1.08-3.84 3.13-.56 2.35-.59 3.82 0 6.27.44 1.83 1.48 3.13 3.27 3.13h2.12v-1.95c0-2.04 1.77-3.85 3.85-3.85h6.12c1.71 0 3.07-1.41 3.07-3.13V6.52c0-1.67-1.41-2.93-3.07-3.21-1.05-.18-2.14-.26-3.18-.26-.31 0-.61 0-.9.02Zm-3.34 1.9c.66 0 1.2.55 1.2 1.22 0 .68-.54 1.22-1.2 1.22a1.22 1.22 0 0 1 0-2.44Z"
    />
    <path
      {...F}
      fillRule="evenodd"
      d="M18.95 7.87v1.9c0 2.13-1.8 3.92-3.85 3.92H8.98a3.19 3.19 0 0 0-3.13 3.2v6c0 1.67 1.45 2.65 3.13 3.13 1.98.58 3.88.69 6.12 0 1.58-.46 3.14-1.38 3.14-3.13v-1.63h-6.13v-.72h9.26c1.8 0 2.47-1.25 3.1-3.13.64-1.95.61-3.82 0-6.27-.45-1.8-1.3-3.13-3.1-3.13h-2.42Zm-4.29 14.4c.67 0 1.2.55 1.2 1.23a1.22 1.22 0 0 1-1.2 1.21 1.21 1.21 0 0 1-1.2-1.21c0-.68.53-1.23 1.2-1.23Z"
    />
  </S>
);

export const ReactAtom = (p) => (
  <S {...p} strokeWidth="1.2">
    <circle cx="12" cy="12" r="1.7" {...F} />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </S>
);

export const TypeScript = (p) => (
  <S {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3.5" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="8.2"
      fontWeight="700"
      fontFamily="'IBM Plex Mono', monospace"
      fill="currentColor"
      stroke="none"
    >
      TS
    </text>
  </S>
);

export const JavaScript = (p) => (
  <S {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3.5" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="8.2"
      fontWeight="700"
      fontFamily="'IBM Plex Mono', monospace"
      fill="currentColor"
      stroke="none"
    >
      JS
    </text>
  </S>
);

/* name → component map used by data-driven sections */
const MAP = {
  brain: Brain,
  code: Code,
  search: Search,
  cube: Cube,
  pencil: Pencil,
  plane: Plane,
  mail: Mail,
  linkedin: LinkedIn,
  github: GitHub,
  pin: Pin,
  lock: Lock,
  calendar: Calendar,
  cap: Cap,
  rocket: Rocket,
  db: Db,
  chart: Chart,
  robot: Robot,
  cloud: Cloud,
  gear: Gear,
  check: Check,
  plus: Plus,
  bulb: Bulb,
  target: Target,
  users: Users,
  sparkle: Sparkle,
  infinity: InfinityIcon,
  sigma: Sigma,
  eye: Eye,
  layers: Layers,
  chat: Chat,
  server: Server,
  git: GitBranch,
  brackets: Brackets,
  network: Network,
  python: Python,
  react: ReactAtom,
  ts: TypeScript,
  js: JavaScript,
  "machine-learning": Brain,
  "deep-learning": Network,
  nlp: Chat,
  "computer-vision": Eye,
};

export default function Icon({ name, ...p }) {
  const C = MAP[name] || Code;
  return <C {...p} />;
}
