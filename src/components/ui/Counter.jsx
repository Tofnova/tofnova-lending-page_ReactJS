import { useEffect, useRef, useState } from "react";
import useInView from "../../hooks/useInView";

/** Number that counts up from 0 when scrolled into view. */
export default function Counter({ target, decimal = 0 }) {
  const ref = useRef(null);
  const seen = useInView(ref, 0.5);
  const [text, setText] = useState("0");

  useEffect(() => {
    if (!seen) return;
    let raf;
    const dur = 1400;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setText((target * e).toFixed(decimal));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setText(target.toFixed(decimal));
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, target, decimal]);

  return (
    <span className="counter" ref={ref}>
      {text}
    </span>
  );
}
