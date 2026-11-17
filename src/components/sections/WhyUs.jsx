import { WHY_ITEMS } from "../../data/whyUs";

export default function WhyUs() {
  return (
    <section id="why-us" className="section">
      <div className="container why-grid">
        <div className="why-sticky">
          <p className="eyebrow reveal">Why Choose Us</p>
          <h2 className="reveal">
            Modern Solutions.<br /><span className="grad">Better Tomorrow.</span>
          </h2>
          <p className="reveal">We don't just deliver a website and disappear. We build, support and grow with you.</p>
          <p className="handwritten reveal">Let's Grow Together</p>
        </div>
        <div className="why-list">
          {WHY_ITEMS.map((w) => (
            <article className="why-card reveal" key={w.num}>
              <span className="why-num">{w.num}</span>
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
