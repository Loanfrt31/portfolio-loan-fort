import { useEffect, useState } from "react";
import { content } from "./content.js";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import ProjectAustralia from "./pages/ProjectAustralia.jsx";
import Preloader from "./components/Preloader.jsx";
import CursorHalo from "./components/CursorHalo.jsx";
import "./App.css";

const DEFAULT_ABOUT_TAB = "experience";

function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("fr");
  // L'onglet actif de la page À propos vit ici (et non dans About) pour
  // survivre au changement de langue, qui remonte <main> via sa key.
  const [aboutTab, setAboutTab] = useState(DEFAULT_ABOUT_TAB);
  // Sujet "Centres d'intérêt" à faire défiler jusqu'à sa vue une fois la
  // page À propos montée (voir goToInterest, déclenché depuis les cartes
  // "Trois chapitres" de l'accueil) ; null en navigation normale.
  const [interestTarget, setInterestTarget] = useState(null);
  // Le préloader ne s'affiche qu'une fois, au tout premier montage de l'app
  // (jamais lors des navigations internes) — et jamais si l'utilisateur
  // préfère un mouvement réduit.
  const [showPreloader, setShowPreloader] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const t = content[lang];

  // Titre de l'onglet, toujours identique quelle que soit la page/langue
  useEffect(() => {
    document.title = t.meta.title;
  }, [t]);

  // Retour instantané en haut de page à chaque navigation — sauf lorsqu'une
  // navigation ciblée vers un bloc "Centres d'intérêt" est en cours (voir
  // l'effet suivant, qui gère alors lui-même le défilement).
  useEffect(() => {
    if (interestTarget) return;
    window.scrollTo(0, 0);
  }, [page, lang]);

  // Défilement jusqu'au bloc "Centres d'intérêt" ciblé, une fois la page À
  // propos montée sur le bon onglet.
  useEffect(() => {
    if (page !== "about" || aboutTab !== "interests" || !interestTarget) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(`interest-${interestTarget}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setInterestTarget(null);
    });
    return () => cancelAnimationFrame(frame);
  }, [page, aboutTab, interestTarget]);

  const handleSetPage = (nextPage) => {
    // Quitter la page À propos réinitialise son onglet actif
    if (page === "about" && nextPage !== "about") {
      setAboutTab(DEFAULT_ABOUT_TAB);
    }
    setPage(nextPage);
  };

  // Depuis l'accueil ("Trois centres d'intérêt") : ouvre directement l'onglet
  // Centres d'intérêt de la page À propos. Un `subject` optionnel fait aussi
  // défiler jusqu'au bloc correspondant (voir l'effet ci-dessus) ; sans
  // sujet, on atterrit simplement en haut de l'onglet.
  const goToInterest = (subject) => {
    setAboutTab("interests");
    setInterestTarget(subject);
    setPage("about");
  };

  let PageComponent;
  if (page === "about") {
    PageComponent = <About t={t} aboutTab={aboutTab} setAboutTab={setAboutTab} />;
  } else if (page === "projects") PageComponent = <Projects t={t} setPage={handleSetPage} />;
  else if (page === "contact") PageComponent = <Contact t={t} />;
  else if (page === "projectAustralia") {
    // Page dédiée, volontairement absente de la nav et du hamburger :
    // accessible uniquement via les cartes Accueil et Projets.
    PageComponent = <ProjectAustralia t={t} setPage={handleSetPage} />;
  } else PageComponent = <Home t={t} setPage={handleSetPage} goToInterest={goToInterest} />;

  return (
    <>
      {showPreloader && <Preloader t={t} onFinish={() => setShowPreloader(false)} />}
      <CursorHalo />
      <Nav page={page} setPage={handleSetPage} lang={lang} setLang={setLang} t={t} />
      <main className="page-transition" key={page + lang}>
        {PageComponent}
      </main>
      <footer className="site-footer">
        <p>{t.footer.text(new Date().getFullYear())}</p>
      </footer>
    </>
  );
}

export default App;
