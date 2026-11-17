import { useState } from "react";
import Button from "../ui/Button";
import { SERVICE_OPTIONS } from "../../data/services";
import { BUDGET_OPTIONS } from "../../data/contact";
import { WHATSAPP_NUMBER, FORM_ENDPOINT, FORM_EXTRA } from "../../config/site";

const INITIAL = {
  name: "", email: "", phone: "", service: "", budget: "",
  subject: "", message: "", company_website: "", // company_website = spam honeypot
};

export default function LeadForm() {
  const [values, setValues] = useState(INITIAL);
  const [invalid, setInvalid] = useState({});
  const [status, setStatus] = useState({ msg: "", cls: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setInvalid((i) => ({ ...i, [name]: false })); // clear invalid mark as the user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam honeypot: silently "succeed" for bots, send nothing.
    if (values.company_website) {
      setStatus({ msg: "Thank you! Your message has been received.", cls: "ok" });
      setValues(INITIAL);
      return;
    }

    const v = {
      name: values.name.trim(), email: values.email.trim(),
      phone: values.phone.trim(), service: values.service,
      budget: values.budget, subject: values.subject.trim(),
      message: values.message.trim(),
    };

    const checks = {
      name: v.name.length >= 2,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email),
      service: !!v.service,
      subject: v.subject.length >= 2,
      message: v.message.length >= 5,
    };
    const bad = {};
    Object.keys(checks).forEach((k) => { bad[k] = !checks[k]; });
    setInvalid(bad);
    if (Object.values(checks).some((ok) => !ok)) {
      setStatus({ msg: "Please fill in the required fields correctly.", cls: "err" });
      return;
    }

    const text =
      "New Project Inquiry — Tofnova Technology Website\n" +
      "----------------------------------\n" +
      "Name: " + v.name + "\n" +
      "Email: " + v.email + "\n" +
      "Phone: " + (v.phone || "—") + "\n" +
      "Service: " + v.service + "\n" +
      "Budget: " + (v.budget || "—") + "\n" +
      "Subject: " + v.subject + "\n" +
      "Message: " + v.message;
    const waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
    const firstName = v.name.split(" ")[0];

    // 1) If a form inbox endpoint is configured, save/email the submission first.
    if (FORM_ENDPOINT) {
      setSending(true);
      try {
        const payload = { ...v, ...FORM_EXTRA, _subject: "Website Inquiry: " + v.subject, _template: "table" };
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("endpoint");
        setStatus({ msg: `Thank you, ${firstName}! Your inquiry has been submitted. Opening WhatsApp so we can talk right away…`, cls: "ok" });
      } catch (err) {
        setStatus({ msg: "We could not save the form copy, but no problem — opening WhatsApp with your details instead.", cls: "err" });
      }
      setSending(false);
    } else {
      setStatus({ msg: `Thank you, ${firstName}! Opening WhatsApp with your details pre-filled — just press send.`, cls: "ok" });
    }

    // 2) Always continue to WhatsApp with the full details.
    setTimeout(() => window.open(waUrl, "_blank", "noopener"), 500);
    setValues(INITIAL);
  };

  const cls = (name) => (invalid[name] ? "invalid" : "");

  return (
    <form id="leadForm" className="lead-form reveal" noValidate onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="fName">Full Name *</label>
          <input id="fName" name="name" type="text" placeholder="Your full name" required
            className={cls("name")} value={values.name} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="fEmail">Email Address *</label>
          <input id="fEmail" name="email" type="email" placeholder="you@example.com" required
            className={cls("email")} value={values.email} onChange={handleChange} />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="fPhone">Phone Number <small>(optional)</small></label>
          <input id="fPhone" name="phone" type="tel" placeholder="+880 1XXX-XXXXXX"
            value={values.phone} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="fService">Service Needed *</label>
          <select id="fService" name="service" required className={cls("service")}
            value={values.service} onChange={handleChange}>
            <option value="">Select a service…</option>
            {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="fBudget">Project Budget <small>(optional)</small></label>
          <select id="fBudget" name="budget" value={values.budget} onChange={handleChange}>
            <option value="">Select a range…</option>
            {BUDGET_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="fSubject">Subject *</label>
          <input id="fSubject" name="subject" type="text" placeholder="Project subject" required
            className={cls("subject")} value={values.subject} onChange={handleChange} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="fMessage">Message *</label>
        <textarea id="fMessage" name="message" rows="4" placeholder="Tell us about your project…" required
          className={cls("message")} value={values.message} onChange={handleChange} />
      </div>

      {/* Honeypot (spam protection) */}
      <input type="text" name="company_website" id="fHoney" tabIndex={-1} autoComplete="off"
        className="honey" aria-hidden="true" value={values.company_website} onChange={handleChange} />

      <Button type="submit" className="btn-submit" id="submitBtn" disabled={sending}>
        {sending ? "Sending…" : "Send & Continue on WhatsApp →"}
      </Button>
      <p className={`form-status ${status.cls}`} id="formStatus" role="status" aria-live="polite">{status.msg}</p>
      <p className="form-note">
        Submitting opens WhatsApp with your details pre-filled. When our form inbox is connected, your submission is also saved &amp; emailed to us automatically.
      </p>
    </form>
  );
}
