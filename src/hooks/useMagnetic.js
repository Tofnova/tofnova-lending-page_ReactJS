import { useEffect } from "react";
import gsap from "gsap";
import { finePointer, reduceMotion } from "../lib/env";

/** Magnetic hover effect for buttons (desktop only). */
export default function useMagnetic(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !finePointer || reduceMotion) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      gsap.to(el, {
        x: (e.clientX - r.left - r.width / 2) * 0.22,
        y: (e.clientY - r.top - r.height / 2) * 0.28,
        duration: 0.4,
        ease: "power3.out",
      });
    };
    const leave = () =>
      gsap.to(el, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.45)" });

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
      gsap.killTweensOf(el);
    };
  }, [ref]);
}
