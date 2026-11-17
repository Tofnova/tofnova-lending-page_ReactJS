import FaqItem from "../ui/FaqItem";
import { FAQS } from "../../data/faq";

export default function Faq() {
  return (
    <section id="faq" className="section section-alt">
      <div className="container faq-wrap">
        <p className="eyebrow center reveal">FAQ</p>
        <h2 className="center reveal">Common <span className="grad">Questions</span></h2>
        {FAQS.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}
