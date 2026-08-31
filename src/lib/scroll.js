import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REDUCED } from "./env";

let lenis = null;
let caseOpen = false;

export function initSmoothScroll() {
  if (REDUCED || lenis) return;
  lenis = new Lenis({ lerp: 0.095, wheelMultiplier: 0.95 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

export function markCaseOpen(v) {
  caseOpen = v;
}

export function lockPage(lock) {
  document.body.classList.toggle("is-locked", lock);
  if (!lenis) return;
  if (lock) lenis.stop();
  else lenis.start();
}

export function scrollToTarget(target) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;
  if (lenis && !caseOpen) lenis.scrollTo(el, { offset: 0, duration: 1.4 });
  else el.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
}
