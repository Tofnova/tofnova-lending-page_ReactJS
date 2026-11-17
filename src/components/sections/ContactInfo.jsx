import SocialLinks from "../ui/SocialLinks";
import { WHATSAPP_URL } from "../../config/site";
import { GOOGLE_PROFILE_URL } from "../../data/contact";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <p className="eyebrow reveal">Contact Us</p>
      <h2 className="reveal">Let's Talk About <span className="grad">Your Project</span></h2>
      <p className="reveal">
        Send the form and it will open WhatsApp with your details ready — just press send. We usually reply fast.
      </p>
      <ul className="contact-list reveal">
        <li>
          <strong>Phone / WhatsApp:</strong>{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">+880 1742-184705</a>
        </li>
        <li><strong>Address:</strong> Ataikula Bazar Square Market, Ataikula 6600, Bangladesh</li>
        <li><strong>Hours:</strong> Open 24 Hours — Every Day</li>
        <li>
          <strong>Google:</strong> Rated ★ 5.0 —{" "}
          <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer">View our profile</a>
        </li>
      </ul>
      <div className="follow reveal">
        <p>Follow Tofnova Technology:</p>
        <SocialLinks />
      </div>
    </div>
  );
}
