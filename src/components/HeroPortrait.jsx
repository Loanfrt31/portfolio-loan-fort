import { useState } from "react";
import Reveal from "./Reveal.jsx";

// Mise en scène "portrait dans l'arche" : un plein cintre (voile orange,
// filet hairline) posé derrière le portrait détouré, dont le buste est
// aligné à la base de l'arche et dont la tête déborde légèrement au-dessus
// (voir --overflow-h en CSS) — effet éditorial voulu, le sujet sort du cadre.

function HeroPortrait({ t }) {
  const [imgFailed, setImgFailed] = useState(false);
  const portrait = t.home.portrait;

  return (
    <Reveal as="div" className="hero-portrait">
      <div className="hero-portrait-frame">
        <span className="hero-portrait-arch" aria-hidden="true" />
        {!imgFailed && (
          <img
            className="hero-portrait-image"
            src="/portrait-v2.png"
            alt={portrait.alt}
            onError={() => setImgFailed(true)}
          />
        )}
      </div>

      <span className="hero-portrait-divider" aria-hidden="true" />

      <p className="hero-portrait-name">{portrait.line1}</p>
      <p className="hero-portrait-number">{portrait.number}</p>
      <p className="hero-portrait-next">
        {portrait.availabilityPrefix}
        <span className="hero-portrait-next-highlight">{portrait.availabilityHighlight}</span>
        {portrait.availabilitySuffix}
      </p>
    </Reveal>
  );
}

export default HeroPortrait;
