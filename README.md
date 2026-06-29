<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mahmoud Eltantawy — Flutter Developer</title>
<meta name="description" content="Mahmoud Eltantawy — Flutter developer building offline-first POS, ERP and payment systems across Saudi Arabia and Egypt.">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230a0d12'/%3E%3Ctext x='32' y='42' font-family='monospace' font-size='28' fill='%2300e6a0' text-anchor='middle'%3E%3E_%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600&family=Zain:wght@400;700;800&display=swap" rel="stylesheet">
<style>
/* ============================================================
   TOKENS — DARK (default)
============================================================ */
:root{
  --bg:#0a0d12;
  --bg-1:#0e1218;
  --panel:#11151c;
  --panel-2:#161b24;
  --line:#212733;
  --line-soft:#1a1f29;
  --text:#eef1f6;
  --text-dim:#8d96a8;
  --text-faint:#566073;
  --accent:#00e6a0;
  --accent-dim:rgba(0,230,160,.13);
  --accent-2:#ff9d4d;
  --accent-2-dim:rgba(255,157,77,.13);
  --shadow:rgba(0,0,0,.6);
  --radius:14px;
  --maxw:1180px;
  --ease:cubic-bezier(.16,.84,.44,1);
  --font-display:'Space Grotesk',sans-serif;
  --font-body:'Inter',sans-serif;
  --font-mono:'IBM Plex Mono',monospace;
}

/* ============================================================
   TOKENS — LIGHT
============================================================ */
:root[data-theme="light"]{
  --bg:#f6f7f5;
  --bg-1:#ffffff;
  --panel:#ffffff;
  --panel-2:#f1f3f1;
  --line:#e1e4e0;
  --line-soft:#ebede9;
  --text:#11151c;
  --text-dim:#54606e;
  --text-faint:#8b93a0;
  --accent:#0a9d6f;
  --accent-dim:rgba(10,157,111,.12);
  --accent-2:#d97a2c;
  --accent-2-dim:rgba(217,122,44,.12);
  --shadow:rgba(20,30,30,.14);
}

/* ============================================================
   TOKENS — ARABIC FONT OVERRIDE
============================================================ */
:root[dir="rtl"]{
  --font-display:'Zain',sans-serif;
  --font-body:'Zain',sans-serif;
  --font-mono:'Zain',sans-serif;
}

*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  background:var(--bg);
  color:var(--text);
  font-family:var(--font-body);
  font-size:16px;
  line-height:1.6;
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
  transition:background .4s var(--ease),color .4s var(--ease);
}
:root[dir="rtl"] body{font-size:17px;line-height:1.75;}
::selection{background:var(--accent);color:#04130d;}
::-webkit-scrollbar{width:10px;}
::-webkit-scrollbar-track{background:var(--bg);}
::-webkit-scrollbar-thumb{background:var(--line);border-radius:8px;}
::-webkit-scrollbar-thumb:hover{background:var(--text-faint);}

a{color:inherit;text-decoration:none;}
img{display:block;max-width:100%;}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 32px;}

.mono{font-family:var(--font-mono);}
.display{font-family:var(--font-display);}

.eyebrow{
  font-family:var(--font-mono);
  font-size:12.5px;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--accent);
  display:flex;align-items:center;gap:10px;
  margin-bottom:18px;
}
:root[dir="rtl"] .eyebrow{letter-spacing:0;text-transform:none;font-size:14px;}
.eyebrow::before{
  content:'';width:7px;height:7px;border-radius:50%;
  background:var(--accent);box-shadow:0 0 0 4px var(--accent-dim);
  flex-shrink:0;
}

h2.section-title{
  font-family:var(--font-display);
  font-weight:600;
  font-size:clamp(28px,3.6vw,42px);
  letter-spacing:-.01em;
  margin-bottom:14px;
}
:root[dir="rtl"] h2.section-title{letter-spacing:0;font-weight:800;}
.section-sub{
  color:var(--text-dim);
  max-width:560px;
  font-size:15.5px;
  margin-bottom:56px;
}
section{position:relative;padding:120px 0;border-bottom:1px solid var(--line-soft);}
@media (max-width:720px){section{padding:80px 0;}}

/* reveal */
.reveal{opacity:0;transform:translateY(28px);transition:opacity .8s var(--ease),transform .8s var(--ease);}
.reveal.in{opacity:1;transform:translateY(0);}
@media (prefers-reduced-motion:reduce){
  .reveal{opacity:1;transform:none;transition:none;}
  *{animation-duration:.01ms !important;animation-iteration-count:1 !important;}
}

/* ============================================================
   BOOT OVERLAY
============================================================ */
#boot{
  position:fixed;inset:0;background:#05070a;z-index:999;
  display:flex;align-items:center;justify-content:center;
  transition:opacity .6s ease,visibility .6s ease;
}
#boot.hide{opacity:0;visibility:hidden;}
#boot pre{
  font-family:'IBM Plex Mono',monospace;
  color:#00e6a0;
  font-size:13px;
  line-height:1.7;
  white-space:pre-wrap;
  direction:ltr;
  text-align:left;
}
#boot .cursor{display:inline-block;width:8px;height:14px;background:#00e6a0;animation:blink 1s steps(2) infinite;vertical-align:middle;}
@keyframes blink{50%{opacity:0;}}

/* ============================================================
   NAV
============================================================ */
header{
  position:fixed;top:0;left:0;right:0;z-index:100;
  background:rgba(10,13,18,.72);backdrop-filter:blur(14px);
  border-bottom:1px solid var(--line-soft);
  transition:background .4s var(--ease);
}
:root[data-theme="light"] header{background:rgba(246,247,245,.78);}
nav{display:flex;align-items:center;justify-content:space-between;padding:18px 32px;max-width:var(--maxw);margin:0 auto;gap:18px;}
.logo{font-family:var(--font-mono);font-weight:600;font-size:15px;letter-spacing:.02em;display:flex;align-items:center;gap:8px;direction:ltr;}
.logo .dot{width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 4px var(--accent-dim);}
.navlinks{display:flex;gap:34px;font-size:14px;color:var(--text-dim);}
.navlinks a{transition:color .25s;position:relative;}
.navlinks a:hover{color:var(--text);}
.navlinks a::after{content:'';position:absolute;left:0;bottom:-6px;height:1px;width:0;background:var(--accent);transition:width .25s var(--ease);}
.navlinks a:hover::after{width:100%;}
.navsocial{display:flex;align-items:center;gap:12px;}
.icon-btn{
  width:34px;height:34px;border:1px solid var(--line);border-radius:9px;
  display:flex;align-items:center;justify-content:center;color:var(--text-dim);
  transition:all .25s var(--ease);background:none;cursor:pointer;
}
.icon-btn:hover{color:var(--accent);border-color:var(--accent);background:var(--accent-dim);transform:translateY(-2px);}
.icon-btn svg{width:16px;height:16px;}
.icon-btn .icon-sun{display:none;}
:root[data-theme="light"] .icon-btn .icon-sun{display:block;}
:root[data-theme="light"] .icon-btn .icon-moon{display:none;}
.icon-btn .icon-moon{display:block;}

.lang-switch{display:flex;border:1px solid var(--line);border-radius:9px;overflow:hidden;font-family:var(--font-mono);font-size:11.5px;}
.lang-opt{padding:8px 11px;color:var(--text-dim);cursor:pointer;background:none;border:none;font-family:inherit;font-size:inherit;transition:all .25s var(--ease);}
.lang-opt.active{background:var(--accent-dim);color:var(--accent);font-weight:600;}
.lang-opt:hover{color:var(--text);}

.navtime{font-family:var(--font-mono);font-size:12px;color:var(--text-faint);display:flex;align-items:center;gap:8px;direction:ltr;}
.burger{display:none;flex-direction:column;gap:5px;cursor:pointer;width:24px;background:none;border:none;}
.burger span{height:2px;background:var(--text);border-radius:2px;}

@media (max-width:980px){
  .navlinks{display:none;}
  .navtime{display:none;}
  .burger{display:flex;}
}

#mobilemenu{
  position:fixed;inset:0;top:64px;background:var(--bg);z-index:90;
  display:none;flex-direction:column;padding:40px 32px;gap:24px;
}
#mobilemenu.open{display:flex;}
#mobilemenu a{font-family:var(--font-display);font-size:24px;}
#mobilemenu .navsocial{margin-top:20px;}
#mobilemenu .mm-controls{display:flex;gap:14px;margin-top:10px;}

/* ============================================================
   HERO
============================================================ */
#hero{
  min-height:100vh;display:flex;align-items:center;
  padding-top:140px;padding-bottom:60px;border-bottom:1px solid var(--line-soft);
  position:relative;overflow:hidden;
}
#network-canvas{position:absolute;inset:0;width:100%;height:100%;opacity:.55;pointer-events:none;}
.hero-grid{
  position:relative;z-index:2;
  display:grid;grid-template-columns:1.15fr .85fr;gap:60px;align-items:center;
  width:100%;
}
@media (max-width:980px){.hero-grid{grid-template-columns:1fr;}}

.hero-title{
  font-family:var(--font-display);
  font-weight:700;
  font-size:clamp(40px,6vw,68px);
  line-height:1.04;
  letter-spacing:-.01em;
  margin-bottom:22px;
}
:root[dir="rtl"] .hero-title{line-height:1.25;font-weight:800;}
.hero-title .accent{color:var(--accent);}
.hero-line{
  font-size:18px;color:var(--text-dim);max-width:520px;margin-bottom:34px;
}
.hero-line b{color:var(--text);font-weight:600;}
.hero-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:38px;}
.btn{
  font-family:var(--font-mono);font-size:13.5px;letter-spacing:.03em;
  padding:14px 24px;border-radius:10px;display:inline-flex;align-items:center;gap:10px;
  transition:all .25s var(--ease);cursor:pointer;border:1px solid transparent;
}
:root[dir="rtl"] .btn{letter-spacing:0;font-size:15px;}
.btn-primary{background:var(--accent);color:#05140d;font-weight:600;}
:root[data-theme="light"] .btn-primary{color:#fff;}
.btn-primary:hover{transform:translateY(-3px);box-shadow:0 10px 30px -8px var(--accent-dim);}
.btn-ghost{border:1px solid var(--line);color:var(--text);}
.btn-ghost:hover{border-color:var(--text-dim);transform:translateY(-3px);}
.btn svg{width:14px;height:14px;}

.hero-meta{display:flex;gap:28px;flex-wrap:wrap;font-family:var(--font-mono);font-size:12.5px;color:var(--text-faint);}
:root[dir="rtl"] .hero-meta{font-size:14px;}
.hero-meta span{display:flex;align-items:center;gap:7px;}
.hero-meta .live{width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 3px var(--accent-dim);animation:pulse 2s ease-in-out infinite;}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:.4;}}

.stage{
  perspective:1400px;height:460px;position:relative;
  display:flex;align-items:center;justify-content:center;
}
.stack{
  position:relative;width:280px;height:340px;
  transform-style:preserve-3d;
  transition:transform .15s ease-out;
  direction:ltr;
}
.card3d{
  position:absolute;width:230px;border-radius:16px;
  background:linear-gradient(155deg,var(--panel-2),var(--panel));
  border:1px solid var(--line);
  box-shadow:0 30px 60px -20px var(--shadow);
  padding:18px;backdrop-filter:blur(6px);
  transform-style:preserve-3d;
  animation:floaty 7s ease-in-out infinite;
}
@keyframes floaty{0%,100%{transform:translateZ(var(--z,0px)) translateY(0px) rotate(var(--r,0deg));}50%{transform:translateZ(var(--z,0px)) translateY(-10px) rotate(var(--r,0deg));}}

.c1{--z:60px;--r:-7deg;top:6px;left:6px;z-index:4;animation-delay:0s;}
.c2{--z:0px;--r:4deg;top:64px;left:54px;z-index:3;animation-delay:.6s;}
.c3{--z:-50px;--r:-3deg;top:140px;left:6px;z-index:2;animation-delay:1.2s;opacity:.92;}
.c4{--z:-100px;--r:8deg;top:190px;left:70px;z-index:1;opacity:.75;animation-delay:1.8s;}

.card3d .cardlabel{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.1em;color:var(--text-faint);text-transform:uppercase;margin-bottom:10px;display:flex;justify-content:space-between;}
.card3d .cardlabel .led{width:6px;height:6px;border-radius:50%;background:var(--accent);}
.sync-rows div{display:flex;justify-content:space-between;font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--text-dim);padding:5px 0;border-bottom:1px dashed var(--line-soft);}
.sync-rows div:last-child{border-bottom:none;}
.sync-rows .ok{color:var(--accent);}
.wallet-amt{font-family:'Space Grotesk',sans-serif;font-size:22px;font-weight:700;margin:8px 0 4px;}
.wallet-sub{font-size:10.5px;color:var(--text-faint);font-family:'IBM Plex Mono',monospace;}
.receipt-line{font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:var(--text-dim);display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px dotted var(--line-soft);}
.receipt-total{display:flex;justify-content:space-between;font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--text);font-weight:600;margin-top:8px;padding-top:8px;border-top:1px solid var(--line);}
.keypad{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-top:6px;}
.keypad span{background:var(--panel);border:1px solid var(--line-soft);border-radius:6px;text-align:center;padding:7px 0;font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--text-dim);}

/* ============================================================
   MARQUEE — always LTR, tech terms stay in Latin script
============================================================ */
.marquee-wrap{border-bottom:1px solid var(--line-soft);background:var(--bg-1);overflow:hidden;padding:18px 0;direction:ltr;}
.marquee{display:flex;white-space:nowrap;animation:scroll 32s linear infinite;}
.marquee span{font-family:'IBM Plex Mono',monospace;font-size:13px;color:var(--text-faint);padding:0 22px;letter-spacing:.05em;display:flex;align-items:center;gap:22px;}
.marquee span .sep{color:var(--accent);}
@keyframes scroll{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

/* ============================================================
   STATS
============================================================ */
#stats .wrap{padding:64px 32px;display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line-soft);border:1px solid var(--line-soft);border-radius:var(--radius);overflow:hidden;}
#stats{padding:0;border-bottom:1px solid var(--line-soft);}
.stat-cell{background:var(--bg);padding:32px 26px;}
.stat-num{font-family:var(--font-display);font-size:38px;font-weight:700;color:var(--accent);}
.stat-label{font-size:13px;color:var(--text-dim);margin-top:6px;}
:root[dir="rtl"] .stat-label{font-size:14px;}
@media (max-width:780px){#stats .wrap{grid-template-columns:1fr 1fr;}}

/* ============================================================
   ABOUT
============================================================ */
#about .grid{display:grid;grid-template-columns:280px 1fr;gap:64px;align-items:start;}
@media (max-width:780px){#about .grid{grid-template-columns:1fr;}}
.avatar-wrap{position:relative;width:240px;}
.avatar-ring{
  width:240px;height:240px;border-radius:50%;overflow:hidden;
  border:1px solid var(--line);box-shadow:0 0 0 6px var(--bg-1),0 0 0 7px var(--line-soft);
  position:relative;
}
.avatar-ring img{width:100%;height:100%;object-fit:cover;}
.avatar-badge{
  position:absolute;bottom:-2px;right:6px;background:var(--bg);border:1px solid var(--accent);
  color:var(--accent);font-family:var(--font-mono);font-size:10.5px;padding:6px 10px;
  border-radius:20px;display:flex;align-items:center;gap:6px;
}
:root[dir="rtl"] .avatar-badge{right:auto;left:6px;}
.avatar-badge .led{width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 3px var(--accent-dim);}
.about-langs{display:flex;gap:10px;margin-top:26px;flex-wrap:wrap;}
.lang-tag{font-family:var(--font-mono);font-size:11.5px;border:1px solid var(--line);border-radius:7px;padding:7px 11px;color:var(--text-dim);}
.lang-tag b{color:var(--text);}

.about-copy p{color:var(--text-dim);font-size:16px;margin-bottom:18px;max-width:640px;}
:root[dir="rtl"] .about-copy p{font-size:17px;}
.about-copy p b{color:var(--text);font-weight:600;}
.edu-line{
  margin-top:24px;padding:18px 22px;border:1px solid var(--line);border-radius:12px;background:var(--panel);
  display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;
}
.edu-line .t{font-family:var(--font-display);font-weight:600;font-size:15.5px;}
.edu-line .s{color:var(--text-dim);font-size:13.5px;margin-top:4px;}
.edu-line .d{font-family:var(--font-mono);font-size:12px;color:var(--text-faint);white-space:nowrap;}

/* ============================================================
   EXPERIENCE — LEDGER
============================================================ */
.ledger{position:relative;padding-left:32px;}
.ledger::before{content:'';position:absolute;left:0;top:6px;bottom:6px;width:1px;background:var(--line);}
:root[dir="rtl"] .ledger{padding-left:0;padding-right:32px;}
:root[dir="rtl"] .ledger::before{left:auto;right:0;}
.entry{position:relative;padding-bottom:52px;}
.entry:last-child{padding-bottom:0;}
.entry::before{
  content:'';position:absolute;left:-37px;top:4px;width:11px;height:11px;border-radius:50%;
  background:var(--bg);border:2px solid var(--accent);box-shadow:0 0 0 4px var(--bg);
}
:root[dir="rtl"] .entry::before{left:auto;right:-37px;}
.entry-head{display:flex;justify-content:space-between;align-items:baseline;gap:20px;flex-wrap:wrap;margin-bottom:10px;}
.entry-id{font-family:var(--font-mono);font-size:12px;color:var(--accent);letter-spacing:.06em;direction:ltr;}
.entry-role{font-family:var(--font-display);font-size:22px;font-weight:600;margin-top:6px;}
:root[dir="rtl"] .entry-role{font-weight:800;}
.entry-co{color:var(--text-dim);font-size:15px;margin-top:2px;}
.entry-co a{color:var(--accent);border-bottom:1px dotted var(--accent);}
.entry-meta{font-family:var(--font-mono);font-size:12px;color:var(--text-faint);text-align:right;white-space:nowrap;direction:ltr;}
:root[dir="rtl"] .entry-meta{text-align:left;}
.entry-desc{color:var(--text-dim);font-size:15px;max-width:680px;margin-top:12px;}
:root[dir="rtl"] .entry-desc{font-size:16px;}
.current-tag{background:var(--accent-dim);color:var(--accent);font-family:var(--font-mono);font-size:10.5px;padding:3px 9px;border-radius:20px;margin-left:10px;}

/* ============================================================
   SKILLS
============================================================ */
.skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
@media (max-width:900px){.skills-grid{grid-template-columns:repeat(2,1fr);}}
@media (max-width:600px){.skills-grid{grid-template-columns:1fr;}}
.skill-card{background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);padding:24px;transition:transform .3s var(--ease),border-color .3s;}
.skill-card:hover{transform:translateY(-5px);border-color:var(--text-faint);}
.skill-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;}
.skill-name{font-family:var(--font-display);font-weight:600;font-size:15.5px;}
.skill-status{font-family:var(--font-mono);font-size:9.5px;color:var(--accent);display:flex;align-items:center;gap:5px;letter-spacing:.05em;direction:ltr;}
.skill-status .led{width:5px;height:5px;border-radius:50%;background:var(--accent);}
.skill-tags{display:flex;flex-wrap:wrap;gap:7px;direction:ltr;}
.skill-tags span{font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:var(--text-dim);background:var(--bg-1);border:1px solid var(--line-soft);padding:5px 9px;border-radius:6px;}

/* ============================================================
   PROJECTS
============================================================ */
.proj-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}
@media (max-width:780px){.proj-grid{grid-template-columns:1fr;}}
.proj-card{
  background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);
  padding:26px;transition:transform .3s var(--ease),border-color .3s;display:flex;flex-direction:column;
}
.proj-card:hover{transform:translateY(-5px);border-color:var(--accent);}
.proj-top{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;margin-bottom:14px;}
.proj-glyph{
  width:42px;height:42px;border-radius:10px;background:var(--bg-1);border:1px solid var(--line-soft);
  display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',sans-serif;font-weight:700;
  color:var(--accent);font-size:15px;flex-shrink:0;direction:ltr;
}
.proj-link{
  width:32px;height:32px;border-radius:8px;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;
  color:var(--text-dim);transition:.25s;flex-shrink:0;
}
.proj-card:hover .proj-link{color:var(--accent);border-color:var(--accent);}
.proj-link svg{width:14px;height:14px;}
.proj-private{font-family:var(--font-mono);font-size:9.5px;color:var(--text-faint);border:1px solid var(--line-soft);padding:6px 9px;border-radius:8px;white-space:nowrap;}
.proj-title{font-family:var(--font-display);font-weight:600;font-size:17.5px;margin-bottom:8px;}
.proj-desc{color:var(--text-dim);font-size:14px;flex-grow:1;margin-bottom:16px;}
:root[dir="rtl"] .proj-desc{font-size:15px;}
.proj-tags{display:flex;flex-wrap:wrap;gap:6px;direction:ltr;}
.proj-tags span{font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:var(--text-faint);background:var(--bg-1);padding:4px 8px;border-radius:5px;}

/* ============================================================
   COURSES
============================================================ */
.course-list{display:flex;flex-direction:column;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;}
.course-row{
  display:flex;justify-content:space-between;align-items:center;gap:16px;
  padding:18px 24px;border-bottom:1px solid var(--line-soft);background:var(--panel);
  transition:background .25s;
}
.course-row:hover{background:var(--panel-2);}
.course-row:last-child{border-bottom:none;}
.course-name{font-size:14.5px;color:var(--text);}
.course-org{font-family:var(--font-mono);font-size:12px;color:var(--text-faint);white-space:nowrap;}
.course-row a.course-link{display:flex;align-items:center;gap:8px;}
.course-row a.course-link svg{width:13px;height:13px;color:var(--text-faint);}
.course-row a.course-link:hover svg{color:var(--accent);}

/* ============================================================
   CONTACT
============================================================ */
#contact{border-bottom:none;}
.contact-box{
  background:linear-gradient(160deg,var(--panel-2),var(--panel));
  border:1px solid var(--line);border-radius:24px;padding:64px 48px;text-align:center;position:relative;overflow:hidden;
}
@media (max-width:600px){.contact-box{padding:44px 24px;}}
.contact-box::before{
  content:'';position:absolute;width:500px;height:500px;border-radius:50%;
  background:radial-gradient(circle,var(--accent-dim),transparent 70%);
  top:-250px;left:50%;transform:translateX(-50%);pointer-events:none;
}
.contact-title{font-family:var(--font-display);font-weight:700;font-size:clamp(30px,4.5vw,48px);position:relative;z-index:1;margin-bottom:18px;letter-spacing:-.01em;}
:root[dir="rtl"] .contact-title{font-weight:800;}
.contact-title .accent{color:var(--accent);}
.contact-sub{color:var(--text-dim);max-width:480px;margin:0 auto 34px;position:relative;z-index:1;}
:root[dir="rtl"] .contact-sub{font-size:17px;}
.contact-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1;margin-bottom:40px;}
.contact-direct{display:flex;justify-content:center;gap:36px;flex-wrap:wrap;font-family:var(--font-mono);font-size:13px;color:var(--text-dim);position:relative;z-index:1;direction:ltr;}
.contact-direct a:hover{color:var(--accent);}
.contact-direct span{display:flex;align-items:center;gap:8px;}
.contact-direct svg{width:14px;height:14px;}

footer{padding:36px 0;text-align:center;}
.footer-row{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px;}
.footer-row .mono{font-size:12px;color:var(--text-faint);}
.footer-social{display:flex;gap:10px;}
</style>
</head>
<body>

<div id="boot">
  <pre id="bootText">&gt; booting profile.sys<span class="cursor"></span></pre>
</div>

<header>
  <nav>
    <a href="#hero" class="logo"><span class="dot"></span>ME<span style="color:var(--text-faint)">_</span>portfolio</a>
    <div class="navlinks">
      <a href="#about" data-i18n="nav_about">About</a>
      <a href="#experience" data-i18n="nav_experience">Experience</a>
      <a href="#skills" data-i18n="nav_skills">Skills</a>
      <a href="#work" data-i18n="nav_work">Work</a>
      <a href="#contact" data-i18n="nav_contact">Contact</a>
    </div>
    <div style="display:flex;align-items:center;gap:14px;">
      <div class="navtime"><span style="width:6px;height:6px;border-radius:50%;background:var(--accent);display:inline-block;"></span><span id="localtime">--:--</span> · <span data-i18n="nav_city">Al Khobar</span></div>
      <div class="lang-switch">
        <button class="lang-opt" data-lang="en">EN</button>
        <button class="lang-opt" data-lang="ar">AR</button>
      </div>
      <button class="icon-btn" id="themeToggle" aria-label="Toggle theme" title="Toggle theme">
        <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
      </button>
      <div class="navsocial">
        <a class="icon-btn" href="https://github.com/Ma7moud-Eltantawy" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
        </a>
        <a class="icon-btn" href="https://linkedin.com/in/mahmoud-eltantawy-7b26321b1" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/></svg>
        </a>
        <a class="icon-btn" href="https://wa.me/966575820045?text=Hi%20Mahmoud%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20Flutter%20project." target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.08-1.34A9.96 9.96 0 0 0 12.02 22C17.5 22 22 17.52 22 12S17.5 2 12.02 2zm0 18.1c-1.6 0-3.1-.43-4.4-1.2l-.32-.19-3.02.8.8-2.95-.2-.32a8.08 8.08 0 0 1-1.25-4.24c0-4.47 3.65-8.1 8.16-8.1 4.5 0 8.15 3.63 8.15 8.1 0 4.46-3.65 8.1-8.12 8.1zm4.47-6.07c-.24-.12-1.45-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.37-1.94-1.18-.72-.63-1.2-1.4-1.34-1.64-.14-.24-.02-.37.11-.49.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.1-.18.05-.33-.02-.45-.08-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34 1 2.5.12.16 1.7 2.6 4.13 3.55 2.43.95 2.43.63 2.87.59.44-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/></svg>
        </a>
      </div>
      <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </nav>
</header>

<div id="mobilemenu">
  <a href="#about" data-i18n="nav_about">About</a>
  <a href="#experience" data-i18n="nav_experience">Experience</a>
  <a href="#skills" data-i18n="nav_skills">Skills</a>
  <a href="#work" data-i18n="nav_work">Work</a>
  <a href="#contact" data-i18n="nav_contact">Contact</a>
  <div class="mm-controls">
    <div class="lang-switch">
      <button class="lang-opt" data-lang="en">EN</button>
      <button class="lang-opt" data-lang="ar">AR</button>
    </div>
    <button class="icon-btn" id="themeToggleMobile" aria-label="Toggle theme">
      <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
      <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
    </button>
  </div>
  <div class="navsocial">
    <a class="icon-btn" href="https://github.com/Ma7moud-Eltantawy" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg></a>
    <a class="icon-btn" href="https://linkedin.com/in/mahmoud-eltantawy-7b26321b1" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/></svg></a>
    <a class="icon-btn" href="https://wa.me/966575820045" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.08-1.34A9.96 9.96 0 0 0 12.02 22C17.5 22 22 17.52 22 12S17.5 2 12.02 2zm0 18.1c-1.6 0-3.1-.43-4.4-1.2l-.32-.19-3.02.8.8-2.95-.2-.32a8.08 8.08 0 0 1-1.25-4.24c0-4.47 3.65-8.1 8.16-8.1 4.5 0 8.15 3.63 8.15 8.1 0 4.46-3.65 8.1-8.12 8.1z"/></svg></a>
  </div>
</div>

<!-- ============================================================
     HERO
============================================================ -->
<section id="hero">
  <canvas id="network-canvas"></canvas>
  <div class="wrap hero-grid">
    <div>
      <div class="eyebrow" data-i18n="hero_eyebrow">// Flutter Engineer — Al&nbsp;Khobar, Saudi Arabia</div>
      <h1 class="hero-title" data-i18n="hero_title">Mobile systems for<br>businesses that <span class="accent">can't&nbsp;afford<br>downtime.</span></h1>
      <p class="hero-line" data-i18n="hero_line">I'm <b>Mahmoud Eltantawy</b>, a Flutter developer who builds offline-first POS, ERP and payment platforms — the kind that keep working when the WiFi at the till doesn't.</p>
      <div class="hero-ctas">
        <a href="#work" class="btn btn-primary"><span data-i18n="btn_work">See the work</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
        <a href="https://wa.me/966575820045?text=Hi%20Mahmoud%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20Flutter%20project." target="_blank" rel="noopener" class="btn btn-ghost" data-i18n="btn_talk">Let's talk</a>
        <a href="https://flowcv.com/resume/12t1ipavewab" target="_blank" rel="noopener" class="btn btn-ghost">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/></svg>
          <span data-i18n="btn_cv">Download CV</span>
        </a>
      </div>
      <div class="hero-meta">
        <span><span class="live"></span><span data-i18n="meta_open">Open to new roles</span></span>
        <span data-i18n="meta_location">📍 Al Khobar, KSA</span>
        <span data-i18n="meta_years">2.5+ yrs in production Flutter</span>
      </div>
    </div>

    <div class="stage">
      <div class="stack" id="stack3d">
        <div class="card3d c1">
          <div class="cardlabel"><span>SYNC STATUS</span><span class="led"></span></div>
          <div class="sync-rows">
            <div><span>Cashier-01</span><span class="ok">SYNCED</span></div>
            <div><span>Kitchen-02</span><span class="ok">SYNCED</span></div>
            <div><span>Server</span><span class="ok">ONLINE</span></div>
          </div>
        </div>
        <div class="card3d c2">
          <div class="cardlabel"><span>WALLET</span><span class="led"></span></div>
          <div class="wallet-amt">SAR 12,480.00</div>
          <div class="wallet-sub">•••• 4471 — NFC ready</div>
        </div>
        <div class="card3d c3">
          <div class="cardlabel"><span>INVOICE #00482</span><span class="led"></span></div>
          <div class="receipt-line"><span>Item × 2</span><span>48.00</span></div>
          <div class="receipt-line"><span>Item × 1</span><span>22.50</span></div>
          <div class="receipt-line"><span>VAT 15%</span><span>10.58</span></div>
          <div class="receipt-total"><span>TOTAL</span><span>81.08</span></div>
        </div>
        <div class="card3d c4">
          <div class="cardlabel"><span>POS TERMINAL</span><span class="led"></span></div>
          <div class="keypad">
            <span>1</span><span>2</span><span>3</span>
            <span>4</span><span>5</span><span>6</span>
            <span>7</span><span>8</span><span>9</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="marquee-wrap">
  <div class="marquee" id="marquee">
    <span>FLUTTER &amp; DART<span class="sep">•</span>CLEAN ARCHITECTURE<span class="sep">•</span>REAL-TIME SOCKETS<span class="sep">•</span>FIREBASE<span class="sep">•</span>SQL SERVER<span class="sep">•</span>API GATEWAY<span class="sep">•</span>REST APIs<span class="sep">•</span>GETX / BLOC / PROVIDER<span class="sep">•</span>CI/CD — SHOREBIRD<span class="sep">•</span>OFFLINE-FIRST SYNC<span class="sep">•</span></span>
    <span>FLUTTER &amp; DART<span class="sep">•</span>CLEAN ARCHITECTURE<span class="sep">•</span>REAL-TIME SOCKETS<span class="sep">•</span>FIREBASE<span class="sep">•</span>SQL SERVER<span class="sep">•</span>API GATEWAY<span class="sep">•</span>REST APIs<span class="sep">•</span>GETX / BLOC / PROVIDER<span class="sep">•</span>CI/CD — SHOREBIRD<span class="sep">•</span>OFFLINE-FIRST SYNC<span class="sep">•</span></span>
  </div>
</div>

<!-- ============================================================
     STATS
============================================================ -->
<section id="stats">
  <div class="wrap reveal">
    <div class="stat-cell"><div class="stat-num">2.5+</div><div class="stat-label" data-i18n="stat1">Years shipping Flutter in production</div></div>
    <div class="stat-cell"><div class="stat-num">10+</div><div class="stat-label" data-i18n="stat2">Apps shipped — POS, ERP, wallets, HR</div></div>
    <div class="stat-cell"><div class="stat-num">2</div><div class="stat-label" data-i18n="stat3">Countries — Egypt &amp; Saudi Arabia</div></div>
    <div class="stat-cell"><div class="stat-num">100%</div><div class="stat-label" data-i18n="stat4">Offline-first by default</div></div>
  </div>
</section>

<!-- ============================================================
     ABOUT
============================================================ -->
<section id="about">
  <div class="wrap">
    <div class="eyebrow reveal" data-i18n="about_eyebrow">01 — About</div>
    <div class="grid">
      <div class="reveal">
        <div class="avatar-wrap">
          <div class="avatar-ring"><img src="data:image/jpeg;base64,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" alt="Mahmoud Eltantawy"></div>
          <div class="avatar-badge"><span class="led"></span><span data-i18n="about_available">Available</span></div>
        </div>
        <div class="about-langs">
          <span class="lang-tag"><b data-i18n="lang_ar_name">Arabic</b> — <span data-i18n="lang_ar_level">Native</span></span>
          <span class="lang-tag"><b data-i18n="lang_en_name">English</b> — <span data-i18n="lang_en_level">Professional</span></span>
        </div>
      </div>
      <div class="about-copy reveal">
        <h2 class="section-title" data-i18n="about_title">Two and a half years of making sure the app still works when the network doesn't.</h2>
        <p data-i18n="about_p1">I'm a Flutter developer based in <b>Al Khobar, Saudi Arabia</b>, originally from Egypt. Most of my work lives in the unglamorous, business-critical layer of mobile software: point-of-sale systems, multi-tenant ERPs, HR platforms, and payment apps that real cashiers, waiters, and accountants depend on every single day.</p>
        <p data-i18n="about_p2">I gravitate toward <b>clean architecture</b> and <b>offline-first design</b> — systems that keep functioning locally and reconcile automatically the moment connectivity comes back. I've built local POS engines wired directly to SQL Server, real-time order flows over WebSockets, and multi-tenant platforms where each client gets an isolated, customized experience.</p>
        <p data-i18n="about_p3">Outside of code, I'm constantly sharpening my English through daily practice, and I keep an entrepreneurial itch — I've sketched out plans for a logistics and shipping venture in Egypt on the side.</p>
        <div class="edu-line">
          <div>
            <div class="t" data-i18n="edu_title">B.Sc. Computer Science</div>
            <div class="s" data-i18n="edu_sub">Misr Higher Institute for Engineering &amp; Technology (MET) — Mansoura, Egypt</div>
          </div>
          <div class="d" data-i18n="edu_date">2018 — 2022 · Very Good</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     EXPERIENCE
============================================================ -->
<section id="experience">
  <div class="wrap">
    <div class="eyebrow reveal" data-i18n="exp_eyebrow">02 — Experience</div>
    <h2 class="section-title reveal" data-i18n="exp_title">Ledger of roles.</h2>
    <p class="section-sub reveal" data-i18n="exp_sub">Three entries, in order, each one a real production system handed to real businesses.</p>

    <div class="ledger reveal">
      <div class="entry">
        <div class="entry-head">
          <div>
            <div class="entry-id">ENTRY № 003</div>
            <div class="entry-role"><span data-i18n="exp3_role">Mid-Level Software Engineer / Mobile App Developer</span><span class="current-tag" data-i18n="exp_current">CURRENT</span></div>
            <div class="entry-co">Dolf Technologies</div>
          </div>
          <div class="entry-meta">Feb 2026 — Present</div>
        </div>
        <p class="entry-desc" data-i18n="exp3_desc">Building and maintaining mobile applications as part of the engineering team, carrying the same clean-architecture and offline-first standards into a new codebase.</p>
      </div>

      <div class="entry">
        <div class="entry-head">
          <div>
            <div class="entry-id">ENTRY № 002</div>
            <div class="entry-role" data-i18n="exp2_role">Mid-Level Flutter Developer</div>
            <div class="entry-co"><a href="https://tebalink.com/" target="_blank" rel="noopener">Teba-link</a> — <span data-i18n="exp2_co">accounting &amp; administrative software</span></div>
          </div>
          <div class="entry-meta">Feb 2024 — Jan 2026<br>Giza, Egypt</div>
        </div>
        <p class="entry-desc" data-i18n="exp2_desc">Enhanced and expanded a multi-tenant ERP system (Ezee Manager Pro / Tebalink ERP) used by multiple independent businesses on one platform. Built printing &amp; PDF modules, new financial reports, and reworked invoice calculations — plus a from-scratch local POS for restaurants wired directly to SQL Server, and a Flutter-based HR system with QR check-in.</p>
      </div>

      <div class="entry">
        <div class="entry-head">
          <div>
            <div class="entry-id">ENTRY № 001</div>
            <div class="entry-role" data-i18n="exp1_role">Flutter Developer</div>
            <div class="entry-co"><a href="https://www.darsaaed.com/ar" target="_blank" rel="noopener">Dar Alsaaed</a> — <span data-i18n="exp1_co">payments &amp; POS solutions</span></div>
          </div>
          <div class="entry-meta">Dec 2023 — Jun 2024<br>Riyadh, Saudi Arabia</div>
        </div>
        <p class="entry-desc" data-i18n="exp1_desc">Helped move a fintech app (Saaed Pay) from native to a fully cross-platform Flutter build — NFC payments, wallet management, transfers, and AR/EN support. Also owned the order-management module of Saaed POS, syncing orders over WebSocket for instant invoice generation.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     SKILLS
============================================================ -->
<section id="skills">
  <div class="wrap">
    <div class="eyebrow reveal" data-i18n="skills_eyebrow">03 — Skills</div>
    <h2 class="section-title reveal" data-i18n="skills_title">What's running under the hood.</h2>
    <p class="section-sub reveal" data-i18n="skills_sub">Grouped the way I'd actually structure a project — not just a tag cloud.</p>

    <div class="skills-grid reveal">
      <div class="skill-card">
        <div class="skill-head"><span class="skill-name" data-i18n="skill_mobile">Mobile Development</span><span class="skill-status"><span class="led"></span>ONLINE</span></div>
        <div class="skill-tags"><span>Dart</span><span>Flutter</span><span>GetX</span><span>Bloc</span><span>Provider</span></div>
      </div>
      <div class="skill-card">
        <div class="skill-head"><span class="skill-name" data-i18n="skill_arch">Architecture &amp; Design</span><span class="skill-status"><span class="led"></span>ONLINE</span></div>
        <div class="skill-tags"><span>Clean Architecture</span><span>SOLID</span><span>System Diagrams</span></div>
      </div>
      <div class="skill-card">
        <div class="skill-head"><span class="skill-name" data-i18n="skill_data">Data &amp; Sync</span><span class="skill-status"><span class="led"></span>ONLINE</span></div>
        <div class="skill-tags"><span>Real-Time Sockets</span><span>REST APIs</span><span>API Gateway</span><span>Firebase RTDB</span><span>Firestore</span><span>Supabase</span><span>SQL Server</span></div>
      </div>
      <div class="skill-card">
        <div class="skill-head"><span class="skill-name" data-i18n="skill_backend">Backend &amp; Languages</span><span class="skill-status"><span class="led"></span>ONLINE</span></div>
        <div class="skill-tags"><span>Node.js</span><span>Java</span><span>C++</span><span>JavaScript</span><span>OOP</span></div>
      </div>
      <div class="skill-card">
        <div class="skill-head"><span class="skill-name" data-i18n="skill_devops">DevOps &amp; Delivery</span><span class="skill-status"><span class="led"></span>ONLINE</span></div>
        <div class="skill-tags"><span>CI/CD</span><span>Shorebird</span><span>GitHub Actions</span><span>Fastlane</span><span>CodePush</span></div>
      </div>
      <div class="skill-card">
        <div class="skill-head"><span class="skill-name" data-i18n="skill_process">Process &amp; Quality</span><span class="skill-status"><span class="led"></span>ONLINE</span></div>
        <div class="skill-tags"><span>Agile</span><span>Software Management</span><span>Software Methodologies</span><span>Testing &amp; QA</span><span>R&amp;D</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     PROJECTS
============================================================ -->
<section id="work">
  <div class="wrap">
    <div class="eyebrow reveal" data-i18n="work_eyebrow">04 — Selected Work</div>
    <h2 class="section-title reveal" data-i18n="work_title">Ten systems, shipped to real businesses.</h2>
    <p class="section-sub reveal" data-i18n="work_sub">From a graduation project teaching literacy, to wallets moving real money.</p>

    <div class="proj-grid reveal">

      <div class="proj-card">
        <div class="proj-top"><div class="proj-glyph">ERP</div>
          <a class="proj-link" href="https://play.google.com/store/apps/details?id=com.tebalink.ezee_click_reports" target="_blank" rel="noopener" aria-label="Open on Play Store"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        </div>
        <div class="proj-title">Multi-Tenant ERP — Ezee Manager Pro</div>
        <p class="proj-desc" data-i18n="p1_desc">Offline-and-online ERP serving multiple isolated businesses on one platform, with automatic sync, custom print/PDF modules, and reworked financial reporting.</p>
        <div class="proj-tags"><span>Flutter</span><span>SQL Server</span><span>Offline Sync</span></div>
      </div>

      <div class="proj-card">
        <div class="proj-top"><div class="proj-glyph">POS</div>
          <a class="proj-link" href="https://play.google.com/store/apps/details?id=com.tebalink.ezee_resturant&hl=en-US" target="_blank" rel="noopener" aria-label="Open on Play Store"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        </div>
        <div class="proj-title">Ezee Restaurant — POS &amp; Management</div>
        <p class="proj-desc" data-i18n="p2_desc">A full local POS built from scratch, talking directly to SQL Server with no API layer — live sync between kitchen, cashier and waiter stations.</p>
        <div class="proj-tags"><span>Flutter</span><span>SQL Server</span><span>Local-first</span></div>
      </div>

      <div class="proj-card">
        <div class="proj-top"><div class="proj-glyph">PAY</div>
          <a class="proj-link" href="https://play.google.com/store/apps/details?id=sa.saaedpay.app.google" target="_blank" rel="noopener" aria-label="Open on Play Store"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        </div>
        <div class="proj-title">Saaed Pay</div>
        <p class="proj-desc" data-i18n="p3_desc">Fintech wallet app rebuilt cross-platform in Flutter: NFC payments, wallet top-ups, transfers and bill payments with full AR/EN support.</p>
        <div class="proj-tags"><span>Flutter</span><span>NFC</span><span>Fintech</span></div>
      </div>

      <div class="proj-card">
        <div class="proj-top"><div class="proj-glyph">POS</div>
          <span class="proj-private" data-i18n="tag_private">Private build</span>
        </div>
        <div class="proj-title">Saaed POS — Order Management</div>
        <p class="proj-desc" data-i18n="p4_desc">Owned the order-management module: REST for product data, WebSocket for live order updates, with instant invoice generation on quantity changes.</p>
        <div class="proj-tags"><span>WebSocket</span><span>REST API</span></div>
      </div>

      <div class="proj-card">
        <div class="proj-top"><div class="proj-glyph">RTL</div>
          <a class="proj-link" href="https://play.google.com/store/apps/details?id=com.alfakhera.alfakhera" target="_blank" rel="noopener" aria-label="Open on Play Store"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        </div>
        <div class="proj-title">ALFAKHRA</div>
        <p class="proj-desc" data-i18n="p5_desc">Migrated a men's fashion &amp; tailoring retail app from native to cross-platform Flutter — first phase of performance and UI groundwork.</p>
        <div class="proj-tags"><span>Flutter</span><span>Native Migration</span></div>
      </div>

      <div class="proj-card">
        <div class="proj-top"><div class="proj-glyph">HR</div>
          <a class="proj-link" href="https://github.com/Ma7moud-Eltantawy/ezee_hr" target="_blank" rel="noopener" aria-label="Open on GitHub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        </div>
        <div class="proj-title">Ezee HR</div>
        <p class="proj-desc" data-i18n="p6_desc">HR management app built from scratch — QR-based attendance, role-based permissions, leave requests and reporting, with RESTful sync.</p>
        <div class="proj-tags"><span>Flutter</span><span>REST API</span><span>QR</span></div>
      </div>

      <div class="proj-card">
        <div class="proj-top"><div class="proj-glyph">SHP</div>
          <a class="proj-link" href="https://github.com/Ma7moud-Eltantawy/Negozio-store" target="_blank" rel="noopener" aria-label="Open on GitHub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        </div>
        <div class="proj-title">Negozio Store</div>
        <p class="proj-desc" data-i18n="p7_desc">An e-commerce app with Google Maps, conversational voice AI, Firebase push notifications and Gmail verification baked in.</p>
        <div class="proj-tags"><span>Flutter</span><span>Provider</span><span>FCM</span></div>
      </div>

      <div class="proj-card">
        <div class="proj-top"><div class="proj-glyph">EDU</div>
          <a class="proj-link" href="https://github.com/Ma7moud-Eltantawy/illuminate" target="_blank" rel="noopener" aria-label="Open on GitHub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        </div>
        <div class="proj-title" data-i18n="p8_title">Illuminate (Graduation Project)</div>
        <p class="proj-desc" data-i18n="p8_desc">A literacy platform pairing volunteer teachers with adult learners — separate teacher and student apps for structured, interactive lessons.</p>
        <div class="proj-tags"><span>Flutter</span><span>Education</span></div>
      </div>

      <div class="proj-card">
        <div class="proj-top"><div class="proj-glyph">MKT</div>
          <span class="proj-private" data-i18n="tag_private">Private build</span>
        </div>
        <div class="proj-title" data-i18n="p9_title">E-commerce Multi-Tenant Platform</div>
        <p class="proj-desc" data-i18n="p9_desc">Each vendor gets a fully customized storefront and a private dashboard for products, orders and layout — with secure payments and bilingual UI.</p>
        <div class="proj-tags"><span>Flutter</span><span>Multi-tenant</span></div>
      </div>

      <div class="proj-card">
        <div class="proj-top"><div class="proj-glyph">PRT</div>
          <span class="proj-private" data-i18n="tag_dev">In development</span>
        </div>
        <div class="proj-title">Ezze Customer</div>
        <p class="proj-desc" data-i18n="p10_desc">A client-facing portal giving end-users of client companies real-time access to financial statements and live inventory data.</p>
        <div class="proj-tags"><span>Flutter</span><span>REST API</span></div>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================
     COURSES
============================================================ -->
<section id="courses">
  <div class="wrap">
    <div class="eyebrow reveal" data-i18n="courses_eyebrow">05 — Courses &amp; Certifications</div>
    <h2 class="section-title reveal" data-i18n="courses_title">Still compiling.</h2>
    <p class="section-sub reveal" data-i18n="courses_sub">Formal learning that backs up the production experience.</p>

    <div class="course-list reveal">
      <div class="course-row">
        <a class="course-link" href="https://drive.google.com/file/d/1g2x6qbBk0uAGDOPUVI9gho1XCHnH5UbO/view?usp=drive_link" target="_blank" rel="noopener"><span class="course-name">Flutter Development Bootcamp</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        <span class="course-org">The App Brewery</span>
      </div>
      <div class="course-row">
        <a class="course-link" href="https://www.udemy.com/certificate/UC-b6fa0c24-4166-4664-a9ba-f9aff3dc830d/" target="_blank" rel="noopener"><span class="course-name">The Complete 2022 Flutter &amp; Dart Development Course (Arabic)</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        <span class="course-org">Udemy</span>
      </div>
      <div class="course-row">
        <a class="course-link" href="https://www.udemy.com/certificate/UC-2076ada3-2d25-4dc6-a7f1-655e31e33805/" target="_blank" rel="noopener"><span class="course-name">Flutter Clean Architecture — Flutter 3 (Arabic)</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        <span class="course-org">Udemy</span>
      </div>
      <div class="course-row">
        <a class="course-link" href="https://www.coursera.org/account/accomplishments/certificate/AW2G88RPWUBG" target="_blank" rel="noopener"><span class="course-name">Foundations of Project Management</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        <span class="course-org">Google · Coursera</span>
      </div>
      <div class="course-row">
        <a class="course-link" href="https://www.coursera.org/account/accomplishments/certificate/BNDEGYPNFCAA" target="_blank" rel="noopener"><span class="course-name">Software Development Process Methodologies</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        <span class="course-org">U. of Minnesota</span>
      </div>
      <div class="course-row">
        <a class="course-link" href="https://www.coursera.org/account/accomplishments/certificate/LK8JXJ9EY7HA" target="_blank" rel="noopener"><span class="course-name">Agile Software Development</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
        <span class="course-org">U. of Minnesota</span>
      </div>
      <div class="course-row">
        <span class="course-name">The Complete Node.js Course — REST APIs with Express &amp; MongoDB</span>
        <span class="course-org">Maharatech</span>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     CONTACT
============================================================ -->
<section id="contact">
  <div class="wrap">
    <div class="contact-box reveal">
      <h2 class="contact-title" data-i18n="contact_title">Got a system that<br>needs <span class="accent">building?</span></h2>
      <p class="contact-sub" data-i18n="contact_sub">I'm currently open to new Flutter roles and freelance builds — POS, ERP, fintech, or anything that needs to survive a bad connection.</p>
      <div class="contact-ctas">
        <a href="https://wa.me/966575820045?text=Hi%20Mahmoud%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20Flutter%20project." target="_blank" rel="noopener" class="btn btn-primary">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.08-1.34A9.96 9.96 0 0 0 12.02 22C17.5 22 22 17.52 22 12S17.5 2 12.02 2z"/></svg>
          <span data-i18n="contact_btn_wa">Message on WhatsApp</span>
        </a>
        <a href="mailto:mahmoudeltantawy2019@gmail.com" class="btn btn-ghost" data-i18n="contact_btn_mail">Send an email</a>
        <a href="https://flowcv.com/resume/12t1ipavewab" target="_blank" rel="noopener" class="btn btn-ghost">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/></svg>
          <span data-i18n="btn_cv">Download CV</span>
        </a>
      </div>
      <div class="contact-direct">
        <a href="mailto:mahmoudeltantawy2019@gmail.com"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8"/></svg>mahmoudeltantawy2019@gmail.com</span></a>
        <a href="tel:+966575820045"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.61.54 2.39a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.69-1.11a2 2 0 0 1 2.11-.45c.78.24 1.58.42 2.39.54A2 2 0 0 1 22 16.92z"/></svg>+966 57 582 0045</span></a>
        <span data-i18n="contact_location">📍 Al Khobar, Saudi Arabia</span>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap footer-row">
    <span class="mono" data-i18n="footer_text">© 2026 Mahmoud Eltantawy — built one offline sync at a time.</span>
    <div class="footer-social">
      <a class="icon-btn" href="https://github.com/Ma7moud-Eltantawy" target="_blank" rel="noopener" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg></a>
      <a class="icon-btn" href="https://linkedin.com/in/mahmoud-eltantawy-7b26321b1" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/></svg></a>
      <a class="icon-btn" href="https://wa.me/966575820045" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.08-1.34A9.96 9.96 0 0 0 12.02 22C17.5 22 22 17.52 22 12S17.5 2 12.02 2z"/></svg></a>
    </div>
  </div>
</footer>

<script>
/* ---------- i18n dictionary ---------- */
const i18n = {
en:{
  nav_about:"About", nav_experience:"Experience", nav_skills:"Skills", nav_work:"Work", nav_contact:"Contact", nav_city:"Al Khobar",
  hero_eyebrow:"// Flutter Engineer — Al&nbsp;Khobar, Saudi Arabia",
  hero_title:`Mobile systems for<br>businesses that <span class="accent">can't&nbsp;afford<br>downtime.</span>`,
  hero_line:`I'm <b>Mahmoud Eltantawy</b>, a Flutter developer who builds offline-first POS, ERP and payment platforms — the kind that keep working when the WiFi at the till doesn't.`,
  btn_work:"See the work", btn_talk:"Let's talk", btn_cv:"Download CV",
  meta_open:"Open to new roles", meta_location:"📍 Al Khobar, KSA", meta_years:"2.5+ yrs in production Flutter",
  stat1:"Years shipping Flutter in production", stat2:"Apps shipped — POS, ERP, wallets, HR", stat3:"Countries — Egypt &amp; Saudi Arabia", stat4:"Offline-first by default",
  about_eyebrow:"01 — About", about_available:"Available",
  lang_ar_name:"Arabic", lang_ar_level:"Native", lang_en_name:"English", lang_en_level:"Professional",
  about_title:"Two and a half years of making sure the app still works when the network doesn't.",
  about_p1:`I'm a Flutter developer based in <b>Al Khobar, Saudi Arabia</b>, originally from Egypt. Most of my work lives in the unglamorous, business-critical layer of mobile software: point-of-sale systems, multi-tenant ERPs, HR platforms, and payment apps that real cashiers, waiters, and accountants depend on every single day.`,
  about_p2:`I gravitate toward <b>clean architecture</b> and <b>offline-first design</b> — systems that keep functioning locally and reconcile automatically the moment connectivity comes back. I've built local POS engines wired directly to SQL Server, real-time order flows over WebSockets, and multi-tenant platforms where each client gets an isolated, customized experience.`,
  about_p3:"Outside of code, I'm constantly sharpening my English through daily practice, and I keep an entrepreneurial itch — I've sketched out plans for a logistics and shipping venture in Egypt on the side.",
  edu_title:"B.Sc. Computer Science", edu_sub:"Misr Higher Institute for Engineering &amp; Technology (MET) — Mansoura, Egypt", edu_date:"2018 — 2022 · Very Good",
  exp_eyebrow:"02 — Experience", exp_title:"Ledger of roles.", exp_sub:"Three entries, in order, each one a real production system handed to real businesses.", exp_current:"CURRENT",
  exp3_role:"Mid-Level Software Engineer / Mobile App Developer",
  exp3_desc:"Building and maintaining mobile applications as part of the engineering team, carrying the same clean-architecture and offline-first standards into a new codebase.",
  exp2_role:"Mid-Level Flutter Developer", exp2_co:"accounting &amp; administrative software",
  exp2_desc:"Enhanced and expanded a multi-tenant ERP system (Ezee Manager Pro / Tebalink ERP) used by multiple independent businesses on one platform. Built printing &amp; PDF modules, new financial reports, and reworked invoice calculations — plus a from-scratch local POS for restaurants wired directly to SQL Server, and a Flutter-based HR system with QR check-in.",
  exp1_role:"Flutter Developer", exp1_co:"payments &amp; POS solutions",
  exp1_desc:"Helped move a fintech app (Saaed Pay) from native to a fully cross-platform Flutter build — NFC payments, wallet management, transfers, and AR/EN support. Also owned the order-management module of Saaed POS, syncing orders over WebSocket for instant invoice generation.",
  skills_eyebrow:"03 — Skills", skills_title:"What's running under the hood.", skills_sub:"Grouped the way I'd actually structure a project — not just a tag cloud.",
  skill_mobile:"Mobile Development", skill_arch:"Architecture &amp; Design", skill_data:"Data &amp; Sync", skill_backend:"Backend &amp; Languages", skill_devops:"DevOps &amp; Delivery", skill_process:"Process &amp; Quality",
  work_eyebrow:"04 — Selected Work", work_title:"Ten systems, shipped to real businesses.", work_sub:"From a graduation project teaching literacy, to wallets moving real money.",
  tag_private:"Private build", tag_dev:"In development",
  p1_desc:"Offline-and-online ERP serving multiple isolated businesses on one platform, with automatic sync, custom print/PDF modules, and reworked financial reporting.",
  p2_desc:"A full local POS built from scratch, talking directly to SQL Server with no API layer — live sync between kitchen, cashier and waiter stations.",
  p3_desc:"Fintech wallet app rebuilt cross-platform in Flutter: NFC payments, wallet top-ups, transfers and bill payments with full AR/EN support.",
  p4_desc:"Owned the order-management module: REST for product data, WebSocket for live order updates, with instant invoice generation on quantity changes.",
  p5_desc:"Migrated a men's fashion &amp; tailoring retail app from native to cross-platform Flutter — first phase of performance and UI groundwork.",
  p6_desc:"HR management app built from scratch — QR-based attendance, role-based permissions, leave requests and reporting, with RESTful sync.",
  p7_desc:"An e-commerce app with Google Maps, conversational voice AI, Firebase push notifications and Gmail verification baked in.",
  p8_title:"Illuminate (Graduation Project)", p8_desc:"A literacy platform pairing volunteer teachers with adult learners — separate teacher and student apps for structured, interactive lessons.",
  p9_title:"E-commerce Multi-Tenant Platform", p9_desc:"Each vendor gets a fully customized storefront and a private dashboard for products, orders and layout — with secure payments and bilingual UI.",
  p10_desc:"A client-facing portal giving end-users of client companies real-time access to financial statements and live inventory data.",
  courses_eyebrow:"05 — Courses &amp; Certifications", courses_title:"Still compiling.", courses_sub:"Formal learning that backs up the production experience.",
  contact_title:'Got a system that<br>needs <span class="accent">building?</span>',
  contact_sub:"I'm currently open to new Flutter roles and freelance builds — POS, ERP, fintech, or anything that needs to survive a bad connection.",
  contact_btn_wa:"Message on WhatsApp", contact_btn_mail:"Send an email", contact_location:"📍 Al Khobar, Saudi Arabia",
  footer_text:"© 2026 Mahmoud Eltantawy — built one offline sync at a time."
},
ar:{
  nav_about:"نبذة", nav_experience:"الخبرات", nav_skills:"المهارات", nav_work:"المشاريع", nav_contact:"تواصل", nav_city:"الخبر",
  hero_eyebrow:"// مطوّر Flutter — الخبر، المملكة العربية السعودية",
  hero_title:'أنظمة موبايل لشركات<br>لا تحتمل <span class="accent">توقف<br>الخدمة.</span>',
  hero_line:'أنا <b>محمود الطنطاوي</b>، مطوّر Flutter بنيت أنظمة POS وERP ومنصات دفع تعمل Offline-first — من النوع اللي يفضل شغال لما الواي فاي عند الكاشير يفصل.',
  btn_work:"شوف الشغل", btn_talk:"يلا نتكلم", btn_cv:"تحميل السيرة الذاتية",
  meta_open:"متاح لفرص جديدة", meta_location:"📍 الخبر، السعودية", meta_years:"+2.5 سنة خبرة فعلية في Flutter",
  stat1:"سنوات خبرة في إطلاق تطبيقات Flutter", stat2:"تطبيقات تم إطلاقها — POS، ERP، محافظ، HR", stat3:"دولتان — مصر والسعودية", stat4:"Offline-first كأساس للتصميم",
  about_eyebrow:"01 — نبذة عني", about_available:"متاح",
  lang_ar_name:"العربية", lang_ar_level:"اللغة الأم", lang_en_name:"الإنجليزية", lang_en_level:"احترافي",
  about_title:"سنتان ونصف من التأكد إن التطبيق يفضل شغال حتى لو الشبكة وقفت.",
  about_p1:'أنا مطوّر Flutter مقيم في <b>الخبر بالمملكة العربية السعودية</b>، وأصلي من مصر. معظم شغلي في الطبقة المهمة والغير لامعة من تطبيقات الموبايل: أنظمة نقاط بيع، أنظمة ERP متعددة المستأجرين، منصات HR، وتطبيقات دفع يعتمد عليها كاشيرز وويترز ومحاسبين حقيقيين كل يوم.',
  about_p2:'بميل لـ <b>Clean Architecture</b> وتصميم <b>Offline-first</b> — أنظمة تفضل شغالة محليًا وتتزامن تلقائيًا لما الاتصال يرجع. بنيت محركات POS محلية متوصلة مباشرة بـ SQL Server، وتدفقات طلبات لحظية عبر WebSocket، ومنصات Multi-tenant كل عميل فيها له تجربة مستقلة ومخصصة.',
  about_p3:"وبعيدًا عن الكود، بطوّر لغتي الإنجليزية يوميًا، وعندي روح ريادية بحاول أطورها — رسمت ملامح فكرة مشروع شحن ولوجستيك في مصر على الجانب.",
  edu_title:"بكالوريوس علوم حاسب", edu_sub:"المعهد العالي للهندسة والتكنولوجيا بالمنصورة (MET) — المنصورة، مصر", edu_date:"2018 — 2022 · جيد جدًا",
  exp_eyebrow:"02 — الخبرات", exp_title:"سجل الوظائف.", exp_sub:"ثلاث وظائف بالترتيب، كل واحدة نظام حقيقي تم تسليمه لشركات فعلية.", exp_current:"حاليًا",
  exp3_role:"مطوّر برمجيات / تطبيقات موبايل (مستوى متوسط)",
  exp3_desc:"بناء وصيانة تطبيقات الموبايل كجزء من فريق الهندسة، مع الالتزام بنفس معايير Clean Architecture وOffline-first في كود جديد.",
  exp2_role:"مطوّر Flutter (مستوى متوسط)", exp2_co:"برمجيات محاسبية وإدارية",
  exp2_desc:"طوّرت ووسّعت نظام ERP متعدد المستأجرين (Ezee Manager Pro / Tebalink ERP) تستخدمه شركات مستقلة متعددة على نفس المنصة. بنيت موديولات طباعة وPDF، تقارير مالية جديدة، وأعدت حسابات الفواتير — بالإضافة لنظام POS محلي للمطاعم من الصفر متوصل مباشرة بـ SQL Server، ونظام HR بـ Flutter بخاصية تسجيل حضور بالـ QR.",
  exp1_role:"مطوّر Flutter", exp1_co:"حلول دفع ونقاط بيع",
  exp1_desc:"ساعدت في تحويل تطبيق Fintech (Saaed Pay) من Native لـ Flutter بالكامل — دفع NFC، إدارة محفظة، تحويلات، ودعم عربي/إنجليزي. وكنت مسؤول عن موديول إدارة الطلبات في Saaed POS، بمزامنة عبر WebSocket لإصدار فواتير لحظي.",
  skills_eyebrow:"03 — المهارات", skills_title:"اللي شغال تحت الغطاء.", skills_sub:"متجمعة بالطريقة اللي هبني بيها أي مشروع فعليًا — مش مجرد كلمات عشوائية.",
  skill_mobile:"تطوير الموبايل", skill_arch:"الهيكلة والتصميم", skill_data:"البيانات والمزامنة", skill_backend:"Backend واللغات", skill_devops:"DevOps والنشر", skill_process:"العمليات والجودة",
  work_eyebrow:"04 — أهم المشاريع", work_title:"عشرة أنظمة، تم إطلاقها لشركات حقيقية.", work_sub:"من مشروع تخرج لتعليم القراءة والكتابة، لمحافظ بتحرك فلوس حقيقية.",
  tag_private:"نظام داخلي", tag_dev:"قيد التطوير",
  p1_desc:"نظام ERP يعمل أونلاين وأوفلاين لخدمة شركات مستقلة متعددة على نفس المنصة، بمزامنة تلقائية وموديولات طباعة/PDF مخصصة وتقارير مالية معاد بناؤها.",
  p2_desc:"نظام POS محلي كامل مبني من الصفر، متصل مباشرة بـ SQL Server بدون أي API — مزامنة لحظية بين المطبخ والكاشير والويتر.",
  p3_desc:"تطبيق محفظة Fintech تم إعادة بناؤه بـ Flutter: دفع NFC، شحن محفظة، تحويلات، ودفع فواتير بدعم كامل عربي/إنجليزي.",
  p4_desc:"كنت مسؤول عن موديول إدارة الطلبات: REST لبيانات المنتجات، WebSocket لتحديثات الطلبات اللحظية، وإصدار فواتير فوري عند تغيير الكمية.",
  p5_desc:"نقلت تطبيق تجزئة للأزياء الرجالية والخياطة من Native لـ Flutter — المرحلة الأولى من تحسين الأداء وبناء الواجهة.",
  p6_desc:"تطبيق إدارة HR مبني من الصفر — حضور بالـ QR، صلاحيات حسب الدور، طلبات إجازات وتقارير، بمزامنة RESTful.",
  p7_desc:"تطبيق تجارة إلكترونية بخرائط Google، مساعد صوتي بالذكاء الاصطناعي، إشعارات Firebase، وتفعيل بريد Gmail.",
  p8_title:"Illuminate (مشروع التخرج)", p8_desc:"منصة تعليم قراءة وكتابة تربط معلمين متطوعين بمتعلمين بالغين — تطبيقين منفصلين للمعلم والطالب لدروس تفاعلية منظمة.",
  p9_title:"منصة تجارة إلكترونية متعددة المستأجرين", p9_desc:"كل تاجر بياخد متجر مخصص بالكامل ولوحة تحكم خاصة للمنتجات والطلبات والتصميم — بدفع آمن وواجهة بلغتين.",
  p10_desc:"بوابة لعملاء الشركات بتعرض كشوف حسابات لحظية وبيانات مخزون حية.",
  courses_eyebrow:"05 — الدورات والشهادات", courses_title:"لسه بتعلم.", courses_sub:"تعلّم رسمي يدعم الخبرة العملية.",
  contact_title:'عندك نظام محتاج <span class="accent">بناء؟</span>',
  contact_sub:"متاح حاليًا لوظائف Flutter جديدة ومشاريع فريلانس — POS، ERP، Fintech، أو أي حاجة محتاجة تفضل شغالة في أسوأ الاتصالات.",
  contact_btn_wa:"تواصل على واتساب", contact_btn_mail:"ابعت إيميل", contact_location:"📍 الخبر، السعودية",
  footer_text:"© 2026 محمود الطنطاوي — كل مزامنة Offline في وقتها."
}
};

function applyLang(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = i18n[lang] && i18n[lang][key];
    if(val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('.lang-opt').forEach(b=> b.classList.toggle('active', b.dataset.lang===lang));
}
document.querySelectorAll('.lang-opt').forEach(btn=>{
  btn.addEventListener('click', ()=> applyLang(btn.dataset.lang));
});
const browserLang = (navigator.language || 'en').toLowerCase().startsWith('ar') ? 'ar' : 'en';
applyLang(browserLang);

/* ---------- theme ---------- */
function setTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
}
function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme');
  setTheme(cur === 'light' ? 'dark' : 'light');
}
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
setTheme(prefersLight ? 'light' : 'dark');
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('themeToggleMobile').addEventListener('click', toggleTheme);

/* ---------- boot sequence ---------- */
const bootLines = [
  '> booting profile.sys',
  '> loading modules: flutter, dart, firebase, sql-server...',
  '> connecting to offline-sync engine...',
  '> status: ONLINE',
  '> welcome — mahmoud eltantawy'
];
const bootEl = document.getElementById('bootText');
let bi = 0;
function typeBoot(){
  if(bi < bootLines.length){
    bootEl.innerHTML = bootLines.slice(0,bi+1).join('\\n') + '<span class="cursor"></span>';
    bi++;
    setTimeout(typeBoot, 260);
  } else {
    setTimeout(()=>{ document.getElementById('boot').classList.add('hide'); }, 350);
  }
}
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.getElementById('boot').classList.add('hide');
} else {
  typeBoot();
}

/* ---------- mobile menu ---------- */
const burger = document.getElementById('burger');
const mmenu = document.getElementById('mobilemenu');
burger.addEventListener('click', ()=> mmenu.classList.toggle('open'));
mmenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>mmenu.classList.remove('open')));

/* ---------- local time (Al Khobar / Asia Riyadh) ---------- */
function tick(){
  const el = document.getElementById('localtime');
  if(!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'Asia/Riyadh'});
}
tick(); setInterval(tick, 30000);

/* ---------- scroll reveal ---------- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
}

/* ---------- 3D parallax card stack ---------- */
const stage = document.querySelector('.stage');
const stack = document.getElementById('stack3d');
if(stage && stack && !reduceMotion){
  stage.addEventListener('mousemove', (e)=>{
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - 0.5;
    const y = (e.clientY - r.top)/r.height - 0.5;
    stack.style.transform = `rotateY(${x*18}deg) rotateX(${-y*18}deg)`;
  });
  stage.addEventListener('mouseleave', ()=>{ stack.style.transform = 'rotateY(0deg) rotateX(0deg)'; });
}

/* ---------- sync network canvas (theme-aware) ---------- */
(function(){
  const canvas = document.getElementById('network-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w,h,nodes=[];
  const labels = ['CLIENT','POS-01','POS-02','SERVER','CLOUD','KITCHEN','CASHIER','SYNC'];

  function colors(){
    const light = document.documentElement.getAttribute('data-theme') === 'light';
    return light ? {
      line:'rgba(10,157,111,0.14)', lineDim:'rgba(80,90,100,0.10)',
      node:(a)=>`rgba(10,157,111,${a})`, nodeOff:'rgba(120,130,140,0.55)', ring:(a)=>`rgba(10,157,111,${a})`
    } : {
      line:'rgba(0,230,160,0.10)', lineDim:'rgba(140,150,165,0.06)',
      node:(a)=>`rgba(0,230,160,${a})`, nodeOff:'rgba(140,150,165,0.5)', ring:(a)=>`rgba(0,230,160,${a})`
    };
  }

  function resize(){
    w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    h = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }
  function init(){
    resize();
    nodes = [];
    const count = window.innerWidth < 760 ? 7 : 11;
    for(let i=0;i<count;i++){
      nodes.push({
        x:Math.random()*w, y:Math.random()*h,
        vx:(Math.random()-0.5)*0.25*devicePixelRatio, vy:(Math.random()-0.5)*0.25*devicePixelRatio,
        r:(i===0?4:2.4)*devicePixelRatio,
        label: labels[i % labels.length],
        offline:false, pulse:Math.random()*Math.PI*2,
        toggleAt: performance.now() + 4000 + Math.random()*9000
      });
    }
  }
  function step(now){
    ctx.clearRect(0,0,w,h);
    const c = colors();
    for(let i=0;i<nodes.length;i++){
      const a = nodes[i];
      a.x += a.vx; a.y += a.vy;
      if(a.x<0||a.x>w) a.vx*=-1;
      if(a.y<0||a.y>h) a.vy*=-1;
      if(now > a.toggleAt){
        a.offline = !a.offline;
        a.toggleAt = now + 4000 + Math.random()*9000;
      }
    }
    for(let i=0;i<nodes.length;i++){
      const a = nodes[i];
      const dists = nodes.map((b,j)=>({j,d:(j===i)?1e9:Math.hypot(a.x-b.x,a.y-b.y)})).sort((p,q)=>p.d-q.d);
      for(let k=0;k<2;k++){
        const b = nodes[dists[k].j];
        const dim = a.offline||b.offline;
        ctx.beginPath();
        ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
        ctx.strokeStyle = dim ? c.lineDim : c.line;
        ctx.lineWidth = 1*devicePixelRatio;
        ctx.setLineDash(dim?[4*devicePixelRatio,4*devicePixelRatio]:[]);
        ctx.stroke();
      }
    }
    ctx.setLineDash([]);
    nodes.forEach(n=>{
      n.pulse += 0.02;
      const glow = n.offline ? 0 : (Math.sin(n.pulse)*0.4+0.6);
      ctx.beginPath();
      ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fillStyle = n.offline ? c.nodeOff : c.node(0.5+glow*0.5);
      ctx.fill();
      if(!n.offline){
        ctx.beginPath();
        ctx.arc(n.x,n.y,n.r+3*devicePixelRatio*glow,0,Math.PI*2);
        ctx.strokeStyle = c.ring(0.25*glow);
        ctx.stroke();
      }
    });
    requestAnimationFrame(step);
  }
  init();
  window.addEventListener('resize', init);
  if(!reduceMotion){ requestAnimationFrame(step); }
})();
</script>
</body>
</html>
