export const SERVICES = [
  { icon: "monitor", title: "Custom Website Development", text: "Fast, responsive, custom-built websites made exactly for your business goals — no bloated templates." },
  { icon: "wordpress", title: "WordPress Development", text: "Custom WordPress websites, themes and functionality — easy for you to manage, powerful for your visitors." },
  { icon: "bag", title: "Shopify Development", text: "Shopify stores and custom themes designed to sell — smooth checkout and a great mobile shopping experience." },
  { icon: "cart", title: "eCommerce Solutions", text: "Complete online store solutions — products, payments, orders and everything you need to sell online." },
  { icon: "pen", title: "Website Design", text: "Modern, clean, premium design that matches your brand and turns visitors into customers." },
  { icon: "bolt", title: "Website Speed Optimization", text: "High-performance optimization for loading speed and Core Web Vitals — because slow websites lose customers." },
  { icon: "wrench", title: "Website Maintenance", text: "Updates, backups, security checks and small fixes — your website stays safe, fresh and online." },
  { icon: "server", title: "IT Solutions", text: "Server setup & configuration, networking and complete IT solutions for your office and business systems." },
  { icon: "headset", title: "Technical Support", text: "Reliable, friendly tech support whenever you need it — open 24 hours, every day." },
  { icon: "trend", title: "Digital Business Solutions", text: "SEO, digital marketing and video marketing strategies that help your business get found and grow." },
];

// Used by the contact form's "Service Needed" dropdown
export const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), "Other"];
