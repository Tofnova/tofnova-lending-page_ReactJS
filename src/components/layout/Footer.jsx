import { scrollToTop } from "../../lib/smoothScroll";
import { FOOTER_QUICK_LINKS, FOOTER_SERVICES, FOOTER_CONNECT } from "../../data/footer";

function FooterCol({ title, links }) {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/assets/logo-nav.png" alt="Tofnova Technology logo" className="footer-logo" />
          <p>
            Web Development and IT Solution Service Company.<br />
            <strong>YOUR GROWTH, OUR MISSION</strong>
          </p>
        </div>
        <FooterCol title="Quick Links" links={FOOTER_QUICK_LINKS} />
        <FooterCol title="Services" links={FOOTER_SERVICES} />
        <FooterCol title="Connect" links={FOOTER_CONNECT} />
      </div>
      <div className="footer-bottom container">
        <p>
          © <span id="year">{new Date().getFullYear()}</span> Tofnova Technology. All rights reserved. | Build • Innovate • Grow
        </p>
        <button id="toTop" aria-label="Back to top" onClick={scrollToTop}>↑</button>
      </div>
    </footer>
  );
}
