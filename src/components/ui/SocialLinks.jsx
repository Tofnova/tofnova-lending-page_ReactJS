import { SOCIAL_LINKS } from "../../data/contact";

export default function SocialLinks() {
  return (
    <div className="social-row">
      {SOCIAL_LINKS.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
          <i className={s.short}></i>
        </a>
      ))}
    </div>
  );
}
