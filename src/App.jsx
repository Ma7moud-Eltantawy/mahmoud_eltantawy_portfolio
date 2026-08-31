import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "./data/site";
import { REDUCED, TOUCH } from "./lib/env";
import { initSmoothScroll, lockPage, scrollToTarget, markCaseOpen } from "./lib/scroll";
import Certificates from "./components/Certificates.jsx";
import Loader from "./components/Loader.jsx";
import Cursor from "./components/Cursor.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Stack from "./components/Stack.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CaseOverlay from "./components/CaseOverlay.jsx";
import Journey from "./components/Journey.jsx";

const SCROLL_KEYS = {
  ArrowDown: 140, ArrowUp: -140,
  PageDown: 620, PageUp: -620,
};

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);
  const [caseIndex, setCaseIndex] = useState(-1);
  const [closing, setClosing] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const caseOpenRef = useRef(false);
  caseOpenRef.current = caseIndex >= 0;

  const closingRef = useRef(false);
  closingRef.current = closing;

  const suppressPopRef = useRef(false);
  const lastTriggerRef = useRef(null);
  const expandRef = useRef(null);

  /* ---------------- case study lifecycle ---------------- */

  function openCase(i, triggerEl) {
    if (caseOpenRef.current || closingRef.current) return;
    lastTriggerRef.current = triggerEl || null;
    caseOpenRef.current = true;
    lockPage(true);
    markCaseOpen(true);
    window.history.pushState({ case: true }, "", "#" + SITE.projects[i].id);
    setCaseIndex(i);
  }

  function beginClose(fromPop) {
    if (!caseOpenRef.current || closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    if (!fromPop && window.history.state && window.history.state.case) {
      suppressPopRef.current = true;
      window.history.back();
    }
  }

  function finalizeClose() {
    setCaseIndex(-1);
    closingRef.current = false;
    setClosing(false);
    lockPage(false);
    markCaseOpen(false);
    if (lastTriggerRef.current) {
      lastTriggerRef.current.focus({ preventScroll: true });
      lastTriggerRef.current = null;
    }
  }

  function goToNext() {
    if (!caseOpenRef.current) return;
    const total = SITE.projects.length;
    const nextIndex = (caseIndex + 1) % total;
    window.history.replaceState({ case: true }, "", "#" + SITE.projects[nextIndex].id);
    setCaseIndex(nextIndex);
  }

  /* ---------------- boot effects ---------------- */

  // smooth scroll, anchor delegation, tilt, generic reveals
  useEffect(() => {
    initSmoothScroll();

    /* delegated anchor handling (nav links, skip link, back to top…) */
    const onAnchorClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (href.length < 2) return;
      e.preventDefault();
      scrollToTarget(href);
    };
    document.addEventListener("click", onAnchorClick);

    /* pointer-driven tilt on [data-tilt] cards */
    const tiltCleanups = [];
    if (!TOUCH) {
      document.querySelectorAll("[data-tilt]").forEach((card) => {
        const onMove = (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform =
            `perspective(700px) rotateX(${py * -7}deg) rotateY(${px * 9}deg) translateY(-4px)`;
        };
        const onLeave = () => { card.style.transform = ""; };
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        tiltCleanups.push(() => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    /* generic scroll reveals — section titles + labelled items */
    let revealTriggers = [];
    if (!REDUCED) {
      [".sec-title", ".contact__title"].forEach((sel) => {
        const lines = Array.from(document.querySelectorAll(sel + " .line"));
        if (!lines.length) return;
        gsap.set(lines, { yPercent: 115 });
        revealTriggers.push(
          ScrollTrigger.create({
            trigger: sel, start: "top 84%", once: true,
            onEnter: () => gsap.to(lines, { yPercent: 0, duration: 1.15, stagger: 0.09, ease: "expo.out" }),
          })
        );
      });

      document.querySelectorAll("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0, y: 30, duration: 0.95, ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });
    }

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("load", onLoad);
      tiltCleanups.forEach((fn) => fn());
      revealTriggers.forEach((t) => t.kill());
    };
  }, []);

  /* keyboard parity while a case study is open */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!caseOpenRef.current) return;

      if (e.key === "Escape") { beginClose(false); return; }

      const tag = document.activeElement ? document.activeElement.tagName : "";
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      const scroller = document.getElementById("caseScroll");
      const overlay = document.getElementById("caseOverlay");
      if (!scroller) return;
      if (overlay && !overlay.contains(document.activeElement)) {
        scroller.focus({ preventScroll: true });
      }
      if (e.key === "Home") {
        e.preventDefault();
        scroller.scrollTo({ top: 0, behavior: "smooth" });
      } else if (e.key === "End") {
        e.preventDefault();
        scroller.scrollTo({ top: scroller.scrollHeight, behavior: "smooth" });
      } else if (e.key in SCROLL_KEYS) {
        e.preventDefault();
        scroller.scrollBy({ top: SCROLL_KEYS[e.key], behavior: "smooth" });
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  /* browser back closes the case study */
  useEffect(() => {
    const onPop = (e) => {
      if (suppressPopRef.current) { suppressPopRef.current = false; return; }
      if (!(e.state && e.state.case) && caseOpenRef.current) beginClose(true);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  /* deep link (#project-id) — after the loader has cleared */
  useEffect(() => {
    if (!loaderDone) return;
    const t = setTimeout(() => {
      if (caseOpenRef.current) return;
      const idx = SITE.projects.findIndex((p) => p.id === window.location.hash.slice(1));
      if (idx > -1) openCase(idx, null);
    }, REDUCED ? 100 : 300);
    return () => clearTimeout(t);
  }, [loaderDone]);

  function handleLoaderDone() {
    setLoaderDone(true);
    ScrollTrigger.refresh();
  }

  // Fallback: force loader done after 3.5s in case animation completes
  useEffect(() => {
    const t = setTimeout(() => setLoaderDone(true), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <a className="skip-link" href="#work">Skip to selected systems</a>

      {!loaderDone ? <Loader onDone={handleLoaderDone} /> : null}

      <Nav
        caseActive={caseIndex >= 0}
        caseNum={caseIndex >= 0 ? caseIndex + 1 : 1}
        introPlay={loaderDone}
        onBack={() => beginClose(false)}
        onNext={goToNext}
      />

      <main id="top">
        <Hero play={loaderDone} caseActive={caseIndex >= 0} />
        <Work onOpenCase={openCase} />
        <Stack />
        <Certificates />
        <Journey />
        <Contact />
        <Footer />
      </main>

      {caseIndex >= 0 ? (
        <CaseOverlay
          index={caseIndex}
          closing={closing}
          lastTrigger={lastTriggerRef.current}
          expandRef={expandRef}
          onCloseFinished={finalizeClose}
          onNext={goToNext}
          onBackRequest={() => beginClose(false)}
        />
      ) : null}

      {/* expanding visual: card → case-study transition */}
      <div className="expand" ref={expandRef} aria-hidden="true"></div>

      <Cursor />
    </>
  );
}
