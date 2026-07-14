import { useEffect, useState } from "react";
import { DEPARTURE_DATE } from "../content.js";

// Nombre de jours restants avant le départ (même arrondi — inférieur — que
// le grand compte à rebours de Countdown.jsx, pour que les deux affichages
// restent cohérents entre eux). Se met à jour chaque minute : suffisant pour
// une valeur en jours, sans le coût d'un ticking seconde par seconde.
function getDaysRemaining() {
  const diff = DEPARTURE_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return Math.floor(diff / 86400000);
}

function ProjectTeaserBand({ t, setPage }) {
  const home = t.home;
  const [days, setDays] = useState(getDaysRemaining);

  useEffect(() => {
    const id = setInterval(() => setDays(getDaysRemaining()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <button
      type="button"
      className="project-teaser-band"
      onClick={() => setPage("projectAustralia")}
    >
      <span className="teaser-band-status">
        <span className="project-status-dot" aria-hidden="true" />
        {t.projectAustralia.status}
      </span>
      <span className="teaser-band-title">{home.project.title}</span>
      <span className="teaser-band-days">
        {days !== null
          ? `${home.ongoingProject.dayCountPrefix}${days}`
          : home.ongoingProject.ongoingLabel}
      </span>
      <span className="teaser-band-cta">
        {home.project.cta} <span className="cta-arrow" aria-hidden="true">→</span>
      </span>
    </button>
  );
}

export default ProjectTeaserBand;
