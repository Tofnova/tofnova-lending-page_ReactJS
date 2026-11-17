import Button from "../ui/Button";

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container work-inner reveal">
        <p className="eyebrow center">Our Work</p>
        <h2 className="center">See What <span className="grad">We Build</span></h2>
        <p className="section-sub center">
          Explore our current project showcase on our Google site — and imagine what we can build for your business next.
        </p>
        <div className="center">
          <Button href="https://sites.google.com/view/tofnova" target="_blank" rel="noopener noreferrer">
            View Our Work ↗
          </Button>
          <Button href="#contact" variant="ghost">Start Your Project</Button>
        </div>
      </div>
    </section>
  );
}
