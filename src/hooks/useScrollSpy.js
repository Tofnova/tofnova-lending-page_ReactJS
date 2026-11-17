import { useEffect, useState } from "react";

/** Returns the id of the section currently in view. */
export default function useScrollSpy(ids, initial = "home") {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { rootMargin: "-38% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
    return () => spy.disconnect();
  }, [ids]);

  return active;
}
