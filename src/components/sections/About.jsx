import Button from "../ui/Button";
import Counter from "../ui/Counter";
import { ABOUT_CARDS, STATS } from "../../data/about";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-sticky">
          <p className="eyebrow reveal">About Tofnova</p>
          <h2 className="reveal">
            Web Development and <span className="grad">IT Solution</span> Service Company
          </h2>
          <p className="reveal">
            At TOFNOVA, we combine technology, creativity, and reliable support to turn ideas into practical digital solutions.
          </p>
          <Button href="#team" className="reveal">Meet the Team</Button>
        </div>

        <div className="about-points">
          {ABOUT_CARDS.map((c) => (
            <article className="about-card reveal" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}

          <div className="stats reveal">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <strong>
                  <Counter target={s.target} decimal={s.decimal} />
                  {s.suffix}
                </strong>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
