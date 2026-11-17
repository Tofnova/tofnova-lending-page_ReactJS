import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reduceMotion } from "./env";

gsap.registerPlugin(ScrollTrigger);

let lenis = null;
let tickerFn = null;
let rafId = null;

export function initSmoothScroll() {
  if (reduceMotion || lenis) return;
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  tickerFn = (t) => lenis.raf(t * 1000);
  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(0);
}

export function destroySmoothScroll() {
  if (tickerFn) gsap.ticker.remove(tickerFn);
  if (rafId) cancelAnimationFrame(rafId);
  if (lenis) lenis.destroy();
  lenis = null;
  tickerFn = null;
}

const headerHeight = () => {
  const h = document.querySelector("#siteHeader");
  return h ? h.offsetHeight : 76;
};

export function scrollToTarget(target) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset: -headerHeight() + 4, duration: 1.2 });
  } else {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - headerHeight() + 4,
      behavior: "smooth",
    });
  }
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.2 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
