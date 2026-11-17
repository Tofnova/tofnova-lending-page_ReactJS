import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reduceMotion } from "../lib/env";

gsap.registerPlugin(ScrollTrigger);

const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

/**
 * Page-level GSAP animations: hero entrance, section fade-up reveals,
 * parallax layers and the pinned horizontal "Process" scroll.
 */
export default function useGsapAnimations() {
  useEffect(() => {
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-eyebrow", { y: 26, opacity: 0, duration: 0.7, delay: 0.45 })
        .from(".hero-title", { y: 44, opacity: 0, duration: 0.9 }, "-=0.4")
        .from(".hero .reveal", { y: 30, opacity: 0, duration: 0.8, stagger: 0.12 }, "-=0.5");

      // Section reveals (fade-up, staggered per section)
      $$("main section:not(.hero)").forEach((sec) => {
        const items = $$(".reveal", sec);
        if (!items.length) return;
        gsap.from(items, {
          y: 42, opacity: 0, duration: 0.85, ease: "power3.out", stagger: 0.09,
          scrollTrigger: { trigger: sec, start: "top 78%" },
        });
      });

      // Parallax layers
      $$("[data-speed]").forEach((el) => {
        const sp = parseFloat(el.getAttribute("data-speed")) || 0.3;
        gsap.to(el, {
          y: () => (1 - sp) * 160, ease: "none",
          scrollTrigger: {
            trigger: el.closest("section") || el,
            start: "top bottom", end: "bottom top", scrub: 1,
          },
        });
      });

      // Process: pinned horizontal scroll on wide screens
      const track = document.querySelector(".process-track");
      if (track && window.matchMedia("(min-width: 1021px)").matches) {
        const cards = $$(".process-card", track);
        gsap.set(track, { display: "flex", width: "max-content", maxWidth: "none" });
        gsap.set(cards, { flex: "0 0 400px" });
        const getDist = () => Math.max(0, track.scrollWidth - window.innerWidth + 60);
        gsap.to(track, {
          x: () => -getDist(), ease: "none",
          scrollTrigger: {
            trigger: ".process-section", start: "top top+=70",
            end: () => "+=" + getDist(),
            pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
          },
        });
      }
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);
}
