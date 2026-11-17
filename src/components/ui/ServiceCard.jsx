import ServiceIcons from "../icons/ServiceIcons";

/** Service card with the mouse-follow spotlight effect. */
export default function ServiceCard({ icon, title, text }) {
  const onMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
    card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
  };

  return (
    <article className="svc-card reveal" onMouseMove={onMove}>
      <div className="svc-icon">{ServiceIcons[icon]}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
