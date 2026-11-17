import Button from "../ui/Button";
import { HERO_BADGES, HERO_STRIP } from "../../data/hero";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1" data-speed="0.35" />
        <div className="blob blob-2" data-speed="0.6" />
        <div className="blob blob-3" data-speed="0.2" />
        <span className="float-code fc-1" data-speed="0.8">{"</>"}</span>
        <span className="float-code fc-2" data-speed="0.5">{"{ }"}</span>
        <span className="float-code fc-3" data-speed="1.1">{"<div>"}</span>
      </div>

      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow reveal">Web Development &amp; IT Solutions Company</p>
          <h1 className="hero-title">
            Your Trusted Partner in <span className="grad">Web &amp; IT Solutions</span>
          </h1>
          <p className="hero-sub reveal">
            Turning Ideas into Digital Success — we build responsive, secure, high-performance websites and provide reliable IT support that helps your business grow online.
          </p>
          <div className="hero-cta reveal">
            <Button href="#contact">Get in Touch</Button>
            <Button href="#services" variant="ghost">Explore Services ↓</Button>
          </div>
          <div className="hero-badges reveal">
            {HERO_BADGES.map((b) => (
              <span className="badge" key={b}>{b}</span>
            ))}
          </div>
        </div>

        <div className="hero-side reveal" aria-hidden="true">
          <p className="handwritten">Let's Build<br />Together</p>
        </div>
      </div>

      <div className="hero-strip">
        <div className="container hero-strip-inner">
          {HERO_STRIP.map((s) => (
            <span key={s} style={{ display: "contents" }}>
              <span>{s}</span>
              <i>•</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
