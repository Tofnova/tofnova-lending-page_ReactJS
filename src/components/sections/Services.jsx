import ServiceCard from "../ui/ServiceCard";
import { SERVICES } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <p className="eyebrow center reveal">What We Offer</p>
        <h2 className="center reveal">Our <span className="grad">Services</span></h2>
        <p className="section-sub center reveal">
          Complete digital services for your business — from the first design to long-term support.
        </p>
        <div className="services-grid" id="servicesGrid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
