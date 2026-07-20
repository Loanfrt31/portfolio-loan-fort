// Frise horizontale de jalons (verticale sur mobile, voir App.css). Chaque
// jalon est positionné le long d'un filet hairline ; le segment jusqu'au
// dernier jalon accompli est colorié en orange.

// Marge fixe (px, pas %) à chaque extrémité : juste assez pour que le rayon
// du premier/dernier point ne soit pas rogné par l'overflow:hidden du
// conteneur repliable (voir CollapsibleSection) — imperceptible à l'œil,
// contrairement à un retrait en %, qui décalerait visiblement la frise par
// rapport au titre/récit/tags au-dessus (alignés, eux, sur le bord exact).
const EDGE_PX = 6;

function MilestoneTrail({ milestones }) {
  const lastDoneIndex = milestones.reduce((acc, m, i) => (m.done ? i : acc), -1);
  const progressRatio =
    milestones.length > 1 && lastDoneIndex > 0 ? lastDoneIndex / (milestones.length - 1) : 0;
  const edge = `${EDGE_PX}px`;

  return (
    <div className="milestones">
      <div className="milestones-line" style={{ "--edge": edge }} aria-hidden="true" />
      <div
        className="milestones-progress"
        style={{
          "--edge": edge,
          "--progress-ratio": `calc(${progressRatio} * (100% - ${EDGE_PX * 2}px))`,
        }}
        aria-hidden="true"
      />
      {milestones.map((m, i) => {
        const pos =
          milestones.length > 1
            ? `calc(${edge} + ${i / (milestones.length - 1)} * (100% - ${EDGE_PX * 2}px))`
            : edge;
        // Les libellés de première/dernière position se centrent sur leur
        // point comme les autres, mais avec un label large (ex. "Baccalauréat
        // earned"), ce centrage les ferait déborder du conteneur près des
        // bords — ils s'accrochent donc par leur bord interne à la place
        // (voir .milestone.is-first / .is-last en CSS).
        const isFirst = i === 0;
        const isLast = i === milestones.length - 1;
        const edgeClass = isFirst ? "is-first" : isLast ? "is-last" : "";
        return (
          <div
            className={`milestone ${m.done ? "done" : ""} ${edgeClass}`.trim()}
            key={m.label}
            style={{ "--pos": pos }}
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
