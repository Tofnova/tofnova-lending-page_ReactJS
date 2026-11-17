import { useEffect } from "react";
import { initSmoothScroll, destroySmoothScroll, scrollToTarget } from "../lib/smoothScroll";

/** Lenis smooth scroll + smooth in-page anchor links (#about, #contact ...) */
export default function useSmoothScroll() {
  useEffect(() => {
    initSmoothScroll();

    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        scrollToTarget(id);
        history.replaceState(null, "", id);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      destroySmoothScroll();
    };
  }, []);
}
