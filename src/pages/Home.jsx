import HeroPortrait from "../components/HeroPortrait.jsx";
import HeroTitle from "../components/HeroTitle.jsx";
import ProjectTeaserBand from "../components/ProjectTeaserBand.jsx";
import Watermark from "../components/Watermark.jsx";
import Reveal from "../components/Reveal.jsx";

function Home({ t, setPage, goToInterest }) {
  const home = t.home;

  return (
    <>
      <div className="page page-home">
        <section className="hero">
          <div className="hero-text">
            <span className="eyebrow">{home.eyebrow}</span>
            <HeroTitle t={t} />
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
            <HeroPortrait t={t} />
          </div>
        </section>

        <section className="home-section chapters-section">
          <Reveal as="div" className="home-section-heading">
            <span className="home-section-heading-label">{home.chapters.sectionTitle}</span>
            <span className="home-section-heading-line" aria-hidden="true" />
          </Reveal>

          <div className="chapters-grid">
            {home.chapters.items.map((item, index) => (
              <Reveal as="div" className="chapter-card" delay={index * 80} key={item.title}>
                <span className="chapter-index">{item.index}</span>
                <h2 className="chapter-title">{item.title}</h2>
                <p className="chapter-summary">{item.summary}</p>
              </Reveal>
            ))}
          </div>

          <div className="chapters-cta-row">
            <button type="button" className="btn btn-outline" onClick={() => goToInterest()}>
              {home.chapters.discoverCta}
            </button>
          </div>
        </section>

        <Reveal as="section" className="home-section ongoing-project-section">
          <div className="home-section-heading">
            <span className="home-section-heading-label">{home.ongoingProject.sectionTitle}</span>
            <span className="home-section-heading-line" aria-hidden="true" />
          </div>

          <ProjectTeaserBand t={t} setPage={setPage} />
        </Reveal>
      </div>

      {/* Hors du conteneur .page (largeur contrainte) pour pouvoir s'étendre
          d'un bord à l'autre de l'écran sans provoquer de débordement
          horizontal — voir .final-cta-band en CSS. */}
      <Reveal as="section" className="final-cta-band">
        <Watermark text={home.portrait.number} className="final-cta-watermark" />
        <div className="final-cta-inner">
          <span className="final-cta-eyebrow">{home.finalCta.eyebrow}</span>
          <p className="final-cta-title cursor-halo-target">{home.finalCta.title}</p>
          <button type="button" className="btn btn-primary" onClick={() => setPage("contact")}>
            {home.finalCta.button}
          </button>
        </div>
      </Reveal>
    </>
  );
}

export default Home;
