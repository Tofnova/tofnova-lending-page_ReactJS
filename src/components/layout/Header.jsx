import { useEffect, useState } from "react";
import Button from "../ui/Button";
import useScrollSpy from "../../hooks/useScrollSpy";
import { NAV_LINKS, SECTION_IDS } from "../../data/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="siteHeader" className={scrolled ? "scrolled" : ""}>
      <nav className="nav container" aria-label="Main">
        <a href="#home" className="brand">
          <img src="/assets/logo-nav.png" alt="Tofnova Technology logo" />
        </a>

        <ul className={`nav-links${open ? " open" : ""}`} id="navLinks" onClick={() => setOpen(false)}>
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={`nav-link${active === l.id ? " active" : ""}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="#contact" className="btn-nav">Get in Touch</Button>

        <button
          className="hamburger"
          id="hamburger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}
