import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const hide = () => setDone(true);
    let t1;
    const onLoad = () => { t1 = setTimeout(hide, 350); };

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    const safety = setTimeout(hide, 2600); // safety

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(t1);
      clearTimeout(safety);
    };
  }, []);

  return (
    <div id="preloader" className={done ? "done" : ""} aria-hidden="true">
      <img src="/assets/logo-nav.png" alt="" className="pre-logo" />
      <p className="pre-tag">Build • Innovate • Grow</p>
    </div>
  );
}
