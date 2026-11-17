import Button from "../ui/Button";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-bg" data-speed="0.3" aria-hidden="true" />
      <div className="container cta-inner reveal">
        <h2>Let's Build Together</h2>
        <p>Have an idea? Let's turn it into digital success.</p>
        <Button href="#contact" variant="light">Get in Touch</Button>
      </div>
    </section>
  );
}
