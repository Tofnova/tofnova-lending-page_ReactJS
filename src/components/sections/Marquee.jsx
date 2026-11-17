import { Fragment } from "react";
import { MARQUEE_TECH } from "../../data/hero";

export default function Marquee() {
  const items = [...MARQUEE_TECH, ...MARQUEE_TECH]; // duplicated for seamless loop
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <Fragment key={i}>
            <span>{t}</span>
            <b>✦</b>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
