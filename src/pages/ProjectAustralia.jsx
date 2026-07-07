import Breadcrumb from "../components/Breadcrumb.jsx";
import AustraliaMap from "../components/AustraliaMap.jsx";
import MilestoneTrail from "../components/MilestoneTrail.jsx";
import WorldClocks from "../components/WorldClocks.jsx";
import Reveal from "../components/Reveal.jsx";

function ProjectAustralia({ t, setPage }) {
  const p = t.projectAustralia;

  return (
    <div className="page page-project-australia">
      <Breadcrumb
        ariaLabel={p.breadcrumbAriaLabel}
        items={[
          { label: p.breadcrumbProjects, onClick: () => setPage("projects") },
          { label: p.breadcrumbCurrent },
        ]}
      />

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

      <Reveal as="div">
        <MilestoneTrail milestones={p.milestones} />
      </Reveal>
    </div>
  );
}

export default ProjectAustralia;
