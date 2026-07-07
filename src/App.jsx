import { useEffect, useState } from "react";
import { content } from "./content.js";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import ProjectAustralia from "./pages/ProjectAustralia.jsx";
import Preloader from "./components/Preloader.jsx";
import "./App.css";

const DEFAULT_ABOUT_TAB = "experience";

function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("fr");
  // L'onglet actif de la page À propos vit ici (et non dans About) pour
  // survivre au changement de langue, qui remonte <main> via sa key.
  const [aboutTab, setAboutTab] = useState(DEFAULT_ABOUT_TAB);
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

  // Retour instantané en haut de page à chaque navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page, lang]);

  const handleSetPage = (nextPage) => {
    // Quitter la page À propos réinitialise son onglet actif
    if (page === "about" && nextPage !== "about") {
      setAboutTab(DEFAULT_ABOUT_TAB);
    }
    setPage(nextPage);
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
  } else PageComponent = <Home t={t} setPage={handleSetPage} />;

  return (
    <>
      {showPreloader && <Preloader t={t} onFinish={() => setShowPreloader(false)} />}
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
