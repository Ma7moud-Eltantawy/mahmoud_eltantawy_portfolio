/* art.js — deterministic generative SVG visuals per project */

export function rng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 1600, H = 1000;

const C = {
  bg: "#121009",
  bone: "#eae5da",
  accent: "#ff4d00",
};

const faint = (a) => `rgba(234,229,218,${a})`;

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function frame(inner) {
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
    <rect width="${W}" height="${H}" fill="${C.bg}"/>${inner}</svg>`;
}

const modes = {
  waveform(cfg) {
    const r = rng(cfg.seed || 1);
    let out = "";
    for (let l = 0; l < 9; l++) {
      const yBase = 140 + l * 90 + r() * 30;
      const amp = 14 + r() * 26;
      const spikeX = 300 + r() * 900;
      let d = `M -20 ${yBase}`;
      for (let x = 0; x <= W + 40; x += 16) {
        let y = yBase
          + Math.sin(x / 90 + l * 1.7 + (cfg.seed || 1)) * amp
          + Math.sin(x / 31 + l) * amp * 0.35;
        const dist = Math.abs(x - spikeX);
        if (dist < 130) y -= Math.cos((dist / 130) * Math.PI * 0.5) ** 2 * (150 + r() * 60);
        d += ` L ${x} ${y.toFixed(1)}`;
      }
      const isAccent = l === 4;
      out += `<path d="${d}" fill="none" stroke="${isAccent ? C.accent : C.bone}"
        stroke-opacity="${isAccent ? 0.95 : 0.28 + l * 0.06}" stroke-width="${isAccent ? 3 : 1.5}"/>`;
    }
    return frame(out);
  },

  constellation(cfg) {
    const r = rng(cfg.seed || 1);
    const pts = [];
    for (let i = 0; i < 42; i++) pts.push({ x: r() * W, y: r() * H, s: 2 + r() * 5 });
    let out = "";
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 120000) {
          out += `<line x1="${pts[i].x}" y1="${pts[i].y}" x2="${pts[j].x}" y2="${pts[j].y}"
            stroke="${C.bone}" stroke-opacity="${((1 - d2 / 120000) * 0.35).toFixed(2)}" stroke-width="1"/>`;
        }
      }
    }
    pts.forEach((p, i) => {
      const accent = i % 7 === 0;
      out += `<circle cx="${p.x}" cy="${p.y}" r="${accent ? p.s * 1.8 : p.s}"
        fill="${accent ? C.accent : C.bone}" fill-opacity="${accent ? 1 : 0.85}"/>`;
    });
    return frame(out);
  },

  grid(cfg) {
    const r = rng(cfg.seed || 1);
    const cols = 16, rows = 10, cw = W / cols, ch = H / rows;
    const hx = Math.floor(r() * cols), hy = Math.floor(r() * rows);
    let out = "";
    for (let cx = 0; cx < cols; cx++) {
      for (let cy = 0; cy < rows; cy++) {
        const heat = Math.max(0, 1 - Math.hypot(cx - hx, cy - hy) / 7);
        if (r() < 0.12 + heat * 0.75) {
          const isAccent = heat > 0.62 && r() < 0.8;
          out += `<rect x="${cx * cw + 4}" y="${cy * ch + 4}" width="${cw - 8}" height="${ch - 8}"
            fill="${isAccent ? C.accent : C.bone}" fill-opacity="${(0.08 + heat * 0.55).toFixed(2)}"/>`;
        } else if (r() < 0.5) {
          out += `<circle cx="${cx * cw + cw / 2}" cy="${cy * ch + ch / 2}" r="2"
            fill="${C.bone}" fill-opacity="0.3"/>`;
        }
      }
    }
    return frame(out);
  },

  glyph(cfg) {
    const r = rng(cfg.seed || 1);
    const chars = ["A", "R", "S", "K", "O", "/", "&", "*"];
    let out = "";
    for (let row = 0; row < 12; row++) {
      for (let col = 0; col < 24; col++) {
        if (r() < 0.45) continue;
        const ch = chars[Math.floor(r() * chars.length)];
        const isAccent = r() < 0.05;
        out += `<text x="${col * 68 + 20}" y="${row * 86 + 50}"
          font-family="'Archivo',sans-serif" font-weight="${Math.floor(400 + r() * 500)}"
          font-size="${(18 + r() * 70).toFixed(0)}" letter-spacing="-2"
          fill="${isAccent ? C.accent : C.bone}" fill-opacity="${(0.25 + r() * 0.65).toFixed(2)}">${ch}</text>`;
      }
    }
    return frame(out);
  },

  flow(cfg) {
    const labels = Array.isArray(cfg.labels) && cfg.labels.length
      ? cfg.labels.slice(0, 6)
      : ["INPUT", "PROCESS", "OUTPUT"];
    const r = rng(cfg.seed || 1);
    const n = labels.length;
    const padX = 110, gap = (W - padX * 2) / (n - 1);
    const bw = Math.min(gap * 0.62, 210), bh = 120;
    let out = "";

    for (let i = 0; i < n - 1; i++) {
      const x1 = padX + gap * i + bw, x2 = padX + gap * (i + 1);
      const y1 = 500 + Math.sin(i * 1.3 + r()) * 60 + bh / 2;
      const y2 = 500 + Math.sin((i + 1) * 1.3 + r()) * 60 + bh / 2;
      const mx = (x1 + x2) / 2;
      out += `<path d="M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}"
        fill="none" stroke="${faint(0.45)}" stroke-width="2" stroke-dasharray="6 8"/>`;
      out += `<circle cx="${x2}" cy="${y2}" r="4" fill="${C.accent}" fill-opacity="0.9"/>`;
    }

    labels.forEach((label, i) => {
      const x = padX + gap * i;
      const y = 500 + Math.sin(i * 1.3 + r()) * 60;
      const isAccent = i === n - 1;
      out += `
        <rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="6"
          fill="${faint(isAccent ? 0.06 : 0.03)}"
          stroke="${isAccent ? C.accent : faint(0.5)}" stroke-width="${isAccent ? 2.5 : 1.5}"/>
        <text x="${x + bw / 2}" y="${y + bh / 2 + 7}" text-anchor="middle"
          font-family="'IBM Plex Mono',monospace" font-size="${Math.min(24, 150 / label.length)}"
          letter-spacing="3" fill="${isAccent ? C.accent : C.bone}" fill-opacity="0.92">${esc(label)}</text>
        <text x="${x + bw / 2}" y="${y - 16}" text-anchor="middle"
          font-family="'IBM Plex Mono',monospace" font-size="17" letter-spacing="2"
          fill="${faint(0.35)}">${String(i + 1).padStart(2, "0")}</text>`;
    });
    return frame(out);
  },

  arch(cfg) {
    const r = rng(cfg.seed || 1);
    const layers = cfg.layers || ["INTERFACE", "API", "DATA", "MODEL"];
    let out = "";
    const bandH = 150, startX = 200, endX = W - 200;
    layers.forEach((name, i) => {
      const y = 120 + i * (bandH + 60);
      const isAccent = i === layers.length - 1;
      out += `<rect x="120" y="${y}" width="${W - 240}" height="${bandH}" rx="8"
        fill="${faint(isAccent ? 0.05 : 0.028)}" stroke="${isAccent ? C.accent : faint(0.4)}" stroke-width="1.5"/>`;
      out += `<text x="160" y="${y + bandH / 2 + 7}" font-family="'IBM Plex Mono',monospace"
        font-size="21" letter-spacing="3" fill="${isAccent ? C.accent : faint(0.75)}">${esc(name)}</text>`;
      const nodesN = 3 + Math.floor(r() * 3);
      for (let k = 0; k < nodesN; k++) {
        const nx = startX + ((endX - startX) / nodesN) * k + r() * 40;
        out += `<circle cx="${nx}" cy="${y + bandH / 2}" r="${5 + r() * 6}"
          fill="${r() < 0.3 ? C.accent : C.bone}" fill-opacity="${0.4 + r() * 0.5}"/>`;
      }
      if (i < layers.length - 1) {
        out += `<line x1="${W / 2}" y1="${y + bandH}" x2="${W / 2}" y2="${y + bandH + 60}"
          stroke="${faint(0.4)}" stroke-width="2" stroke-dasharray="5 7"/>`;
      }
    });
    return frame(out);
  },
};

export function makeArt(cfg) {
  const fn = modes[cfg && cfg.mode] || modes.grid;
  try { return fn(cfg || {}); } catch (e) { return modes.grid({ seed: 1 }); }
}
