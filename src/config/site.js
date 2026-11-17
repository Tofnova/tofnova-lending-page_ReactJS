/* ============================================================
   FORM SETUP (dual submit: form inbox + WhatsApp)
   When you have a form inbox endpoint, paste it below — e.g.
   FormSubmit AJAX:  "https://formsubmit.co/ajax/YOUR-EMAIL"
   or a Web3Forms endpoint with its access key in FORM_EXTRA.
   While FORM_ENDPOINT is empty, submit opens WhatsApp directly
   with all form details pre-filled (nothing is lost).
   ============================================================ */
export const WHATSAPP_NUMBER = "8801742184705";
export const FORM_ENDPOINT = ""; // <-- paste form endpoint here to also save/email submissions
export const FORM_EXTRA = {};    // e.g. { access_key: "xxxx" } for Web3Forms

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_FLOAT_URL =
  `${WHATSAPP_URL}?text=Hello%20Tofnova%20Technology%2C%20I%20want%20to%20discuss%20a%20project.`;
