import Monogram from "../components/Monogram.jsx";
import Countdown from "../components/Countdown.jsx";

function Home({ t, setPage }) {
  const home = t.home;

  return (
    <div className="page page-home">
      <section className="hero">
        <div className="hero-text">
          <span className="eyebrow">{home.eyebrow}</span>
          <h1 className="hero-title">
            {home.titleLine1}
            <br />
            <em>{home.titleLine2}</em>
          </h1>
          <p className="hero-intro">{home.intro}</p>
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setPage("about")}
            >
              {home.ctaPrimary}
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setPage("contact")}
            >
              {home.ctaSecondary}
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <Monogram data={home.monogram} />
        </div>
      </section>

      <section className="project-teaser">
        <span className="project-teaser-eyebrow">
          <span className="project-teaser-dot" aria-hidden="true" />
          {home.project.eyebrow}
        </span>
        <h2 className="project-teaser-title">{home.project.title}</h2>

        <Countdown t={t} />

        <div className="project-teaser-actions">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setPage("projectAustralia")}
          >
            {home.project.cta}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
