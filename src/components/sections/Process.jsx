import { PROCESS_STEPS } from "../../data/process";

/** Pinned horizontal scroll on desktop (see useGsapAnimations). */
export default function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <p className="eyebrow center reveal">How We Work</p>
        <h2 className="center reveal">Our Working <span className="grad">Process</span></h2>
      </div>
      <div className="process-pin">
        <div className="process-track">
          {PROCESS_STEPS.map((p) => (
            <article className="process-card" key={p.step}>
              <span>{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
