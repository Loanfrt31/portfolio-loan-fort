import Breadcrumb from "../components/Breadcrumb.jsx";
import AustraliaMap from "../components/AustraliaMap.jsx";
import MilestoneTrail from "../components/MilestoneTrail.jsx";
import WorldClocks from "../components/WorldClocks.jsx";
import Countdown from "../components/Countdown.jsx";
import CollapsibleSection from "../components/CollapsibleSection.jsx";
import Reveal from "../components/Reveal.jsx";

function ProjectAustralia({ t, setPage }) {
  const p = t.projectAustralia;
  const s = p.sections;
  const chapter2Unlocked = p.chapter2Unlocked;

  return (
    <div className="page page-project-australia">
      <Breadcrumb
        ariaLabel={p.breadcrumbAriaLabel}
        items={[
          { label: p.breadcrumbProjects, onClick: () => setPage("projects") },
          { label: p.breadcrumbCurrent },
        ]}
      />

      {/* Partie 1 — Le projet */}
      <CollapsibleSection label={s.project.title}>
        <span className="project-status">
          <span className="project-status-dot" aria-hidden="true" />
          {p.status}
        </span>

        <h1 className="project-title">{p.title}</h1>
        <p className="project-subtitle">{p.subtitle}</p>

        <div className="project-grid">
          <Reveal as="div" className="project-main">
            <p className="project-story">{p.story}</p>
            <div className="tags-row">
              {p.tags.map((tag) => (
                <span className="tag-chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" className="project-side" delay={80}>
            <AustraliaMap label={p.mapLabel} />
            <p className="map-caption">{p.mapCaption}</p>
            <WorldClocks
              originLabel={p.clockOriginLabel}
              destinationLabel={p.clockDestinationLabel}
            />
          </Reveal>
        </div>

        <Reveal as="div" className="project-countdown-panel">
          <span className="project-countdown-tag">{p.countdownLabel}</span>
          <Countdown t={t} />
        </Reveal>
      </CollapsibleSection>

      {/* Partie 2 — Chapitre 01 : la préparation */}
      <CollapsibleSection label={s.chapter1.title} className="project-chapter-heading">
        <Reveal as="p" className="project-chapter-intro">
          {s.chapter1.intro}
        </Reveal>

        <Reveal as="div">
          <MilestoneTrail milestones={p.milestones} />
        </Reveal>
      </CollapsibleSection>

      {/* Partie 3 — Chapitre 02 : la vie en Australie (verrouillé jusqu'au départ) */}
      <CollapsibleSection label={s.chapter2.title} className="project-chapter-heading">
        <Reveal
          as="div"
          className={`project-chapter2 ${chapter2Unlocked ? "" : "is-locked"}`.trim()}
        >
          {!chapter2Unlocked && (
            <p className="project-chapter2-locked-label">{s.chapter2.lockedLabel}</p>
          )}
          <p className="project-chapter2-text">
            {chapter2Unlocked ? s.chapter2.unlockedIntro : s.chapter2.lockedText}
          </p>
          {/* Futures entrées de carnet de bord : voir p.sections.chapter2.entries
              dans content.js une fois chapter2Unlocked passé à true. */}
        </Reveal>
      </CollapsibleSection>
    </div>
  );
}

export default ProjectAustralia;
