import Reveal from "../components/Reveal.jsx";

function Projects({ t, setPage }) {
  const projects = t.projects;
  const p = t.projectAustralia;
  const hasItems = projects.items.length > 0;

  return (
    <div className="page page-projects">
      <header className="page-header">
        <h1>{projects.title}</h1>
        <p className="tagline">{projects.tagline}</p>
      </header>

      <Reveal
        as="button"
        type="button"
        className="featured-project-card"
        onClick={() => setPage("projectAustralia")}
      >
        <span className="project-status">
          <span className="project-status-dot" aria-hidden="true" />
          {p.status}
        </span>
        <h2 className="featured-project-title">{p.title}</h2>
        <p className="featured-project-subtitle">{p.subtitle}</p>
        <p className="featured-project-summary">{p.summary}</p>
        <span className="featured-project-cta">
          {p.ctaView} <span className="cta-arrow" aria-hidden="true">→</span>
        </span>
      </Reveal>

      {hasItems && (
        <div className="projects-grid">
          {projects.items.map((project, index) => (
            <Reveal
              as="article"
              className="project-card"
              delay={index * 80}
              key={project.name}
            >
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <ul className="project-stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      )}

      <p className="projects-note">{p.emptyNote}</p>
    </div>
  );
}

export default Projects;
