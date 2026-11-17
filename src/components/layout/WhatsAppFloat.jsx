import WhatsAppIcon from "../icons/WhatsAppIcon";
import { WHATSAPP_FLOAT_URL } from "../../config/site";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={WHATSAPP_FLOAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
