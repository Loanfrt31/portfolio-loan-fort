// Frise horizontale de jalons (verticale sur mobile, voir App.css). Chaque
// jalon est positionné en pourcentage le long d'un filet hairline ; le
// segment jusqu'au dernier jalon accompli est colorié en orange.

const EDGE_INSET = 4; // % de marge de sécurité de chaque côté de la frise

function MilestoneTrail({ milestones }) {
  const lastDoneIndex = milestones.reduce((acc, m, i) => (m.done ? i : acc), -1);
  const span = 100 - EDGE_INSET * 2;
  const progressRatio =
    milestones.length > 1 && lastDoneIndex > 0 ? lastDoneIndex / (milestones.length - 1) : 0;

  return (
    <div className="milestones">
      <div className="milestones-line" style={{ "--edge": `${EDGE_INSET}%` }} aria-hidden="true" />
      <div
        className="milestones-progress"
        style={{ "--edge": `${EDGE_INSET}%`, "--progress-ratio": `${progressRatio * span}%` }}
        aria-hidden="true"
      />
      {milestones.map((m, i) => {
        const pos = EDGE_INSET + (milestones.length > 1 ? (i / (milestones.length - 1)) * span : 0);
        return (
          <div
            className={`milestone ${m.done ? "done" : ""}`}
            key={m.label}
            style={{ "--pos": `${pos}%` }}
          >
            <span className="milestone-dot" aria-hidden="true" />
            <span className="milestone-label">{m.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default MilestoneTrail;
