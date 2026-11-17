import { useEffect, useRef } from "react";
import { finePointer, reduceMotion } from "../../lib/env";

const HOVER_SELECTOR = "a, button, .svc-card, .team-card, select, input, textarea";

/** Custom dot + ring cursor (desktop / fine pointer only). */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!finePointer || reduceMotion) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot) { dot.style.left = mx + "px"; dot.style.top = my + "px"; }
    };
    const onOver = (e) => {
      const hovering = e.target.closest && e.target.closest(HOVER_SELECTOR);
      if (ring) ring.classList.toggle("is-hover", !!hovering);
    };
    const loop = () => {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      if (ring) { ring.style.left = rx + "px"; ring.style.top = ry + "px"; }
      raf = requestAnimationFrame(loop);
    };

    addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);
    return () => {
      removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
