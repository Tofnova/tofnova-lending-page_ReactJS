/** Founder / team member card. */
export default function TeamCard({ name, photo, alt, role, experience, skills, contact }) {
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
      <div className="socal">
        {contact.map((c => (
     

            <div onClick={() => window.location.href = c.url} title={c.lable} style={{ backgroundColor: c.color }}>
              <div className="popp">
                {c.lable}
              </div>
              <i className={c.icon + " icon"}></i>
            </div>
          

        )))}
      </div>
    </article>
  );
}
