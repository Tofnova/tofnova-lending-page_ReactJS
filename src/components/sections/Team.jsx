import TeamCard from "../ui/TeamCard";
import { TEAM } from "../../data/team";

export default function Team() {
  return (
    <section id="team" className="section section-alt">
      <div className="container">
        <p className="eyebrow center reveal">The Founders</p>
        <h2 className="center reveal">Meet Our <span className="grad">Team</span></h2>
        <div className="team-grid">
          {TEAM.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
