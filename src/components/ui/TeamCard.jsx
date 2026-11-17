/** Founder / team member card. */
export default function TeamCard({ name, photo, alt, role, experience, skills }) {
  return (
    <article className="team-card reveal">
      <div className="team-photo">
        <img src={photo} alt={alt} loading="lazy" />
      </div>
      <div className="team-body">
        <h3>{name}</h3>
        <p className="team-role">{role}</p>
        <p className="team-exp">{experience}</p>
        <div className="team-skills">
          {skills.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
