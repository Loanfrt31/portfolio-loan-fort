import TypewriterWord from "./TypewriterWord.jsx";

// Titre du hero : premier mot en machine à écrire (boucle sur
// home.rotatingWords), "en devenir." fixe en dessous. La zone visuelle est
// masquée aux lecteurs d'écran au profit d'un texte équivalent statique.
function HeroTitle({ t }) {
  const home = t.home;

  return (
    <h1 className="hero-title cursor-halo-target">
      <span className="hero-title-visual" aria-hidden="true">
        <span className="hero-title-rotating">
          <TypewriterWord words={home.rotatingWords.words} />
          <span className="hero-title-cursor" />
        </span>
        <br />
        <em>{home.titleLine2}</em>
      </span>
      <span className="sr-only">{home.rotatingWords.srLabel}</span>
    </h1>
  );
}

export default HeroTitle;
