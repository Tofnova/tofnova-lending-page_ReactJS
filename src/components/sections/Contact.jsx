import ContactInfo from "./ContactInfo";
import LeadForm from "./LeadForm";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <ContactInfo />
        <LeadForm />
      </div>
    </section>
  );
}
