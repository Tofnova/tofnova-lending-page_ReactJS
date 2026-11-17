import SkillBar from "../ui/SkillBar";
import { SKILL_GROUPS, TECH_PILLS } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <p className="eyebrow center reveal">Our Skills &amp; Expertise</p>
        <h2 className="center reveal">Technologies <span className="grad">We Use</span></h2>
        <div className="skills-grid">
          {SKILL_GROUPS.map((g) => (
            <div className="skill-group reveal" key={g.title}>
              <h3>{g.title}</h3>
              {g.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          ))}
        </div>
        <div className="tech-pills reveal">
          {TECH_PILLS.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
