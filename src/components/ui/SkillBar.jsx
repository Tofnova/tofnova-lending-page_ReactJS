import { useEffect, useRef } from "react";
import gsap from "gsap";
import useInView from "../../hooks/useInView";
import { reduceMotion } from "../../lib/env";

/** Animated skill progress bar. */
export default function SkillBar({ name, level }) {
  const barRef = useRef(null);
  const seen = useInView(barRef, 0.4);

  useEffect(() => {
    if (!seen || !barRef.current) return;
    const w = level + "%";
    if (reduceMotion) barRef.current.style.width = w;
    else gsap.to(barRef.current, { width: w, duration: 1.3, ease: "power3.out" });
  }, [seen, level]);

  return (
    <div className="skill">
      <div className="skill-head">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="bar">
        <i ref={barRef} />
      </div>
    </div>
  );
}
