import { useEffect, useState } from "react";
import { content } from "./content.js";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import ProjectAustralia from "./pages/ProjectAustralia.jsx";
import NotFound from "./pages/NotFound.jsx";
import Preloader from "./components/Preloader.jsx";
import CursorHalo from "./components/CursorHalo.jsx";
import "./App.css";

const DEFAULT_ABOUT_TAB = "experience";
// Durée du fondu de transition de langue (voir handleSetLang) — doit
// correspondre à la transition CSS de .page-transition.is-lang-fading.
const LANG_FADE_MS = 200;

function App() {
  // Toute URL autre que "/" (ex. lien direct vers /un-truc) affiche la page
  // 404 dès le premier rendu — voir vercel.json pour la réécriture SPA qui
  // permet à ces URL d'atteindre l'application plutôt que le 404 brut.
  const [page, setPage] = useState(() =>
    window.location.pathname !== "/" ? "notFound" : "home"
  );
  // L'anglais est la langue par défaut : le site s'adresse en priorité aux
  // recruteurs australiens. Le français reste disponible via le toggle.
  const [lang, setLang] = useState("en");
  // Vrai pendant le court fondu de sortie/entrée déclenché par le toggle
  // FR/EN (voir handleSetLang) — distinct des transitions de page normales.
  const [langFading, setLangFading] = useState(false);
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

  // <html lang> suit la langue active (accessibilité + SEO)
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Signature discrète en console, une seule fois par chargement
  useEffect(() => {
    console.log(
      "%c Nº 08 %c\n%cSite conçu et codé par Loan Fort — curieux ? Écrivez-moi : fortloan.08@gmail.com\n%cDesigned and coded by Loan Fort — curious? Write me: fortloan.08@gmail.com",
      "background:#E2621B;color:#fff;font-weight:600;padding:2px 8px;border-radius:3px;font-family:monospace;",
      "",
      "color:#6F6A61;font-size:12px;line-height:1.6;",
      "color:#6F6A61;font-size:12px;line-height:1.6;"
    );
  }, []);

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

  // Bouton "Retour à l'accueil" de la page 404 : nettoie l'URL avant de
  // revenir, pour ne pas rester bloqué sur une route inconnue.
  const goHome = () => {
    window.history.replaceState(null, "", "/");
    setPage("home");
  };

  // Toggle FR/EN : court fondu de sortie avant de basculer réellement le
  // contenu, puis fondu d'entrée (voir .page-transition.is-lang-fading).
  // Instantané si l'utilisateur préfère un mouvement réduit.
  const handleSetLang = (nextLang) => {
    if (nextLang === lang) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLang(nextLang);
      return;
    }
    setLangFading(true);
    setTimeout(() => {
      setLang(nextLang);
      requestAnimationFrame(() => requestAnimationFrame(() => setLangFading(false)));
    }, LANG_FADE_MS);
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
  if (page === "notFound") {
    PageComponent = <NotFound t={t} onBackHome={goHome} />;
  } else if (page === "about") {
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
      <Nav page={page} setPage={handleSetPage} lang={lang} setLang={handleSetLang} t={t} />
      <main
        className={`page-transition ${langFading ? "is-lang-fading" : ""}`.trim()}
        key={page + lang}
      >
        {PageComponent}
      </main>
      <footer className="site-footer">
        <p>{t.footer.text(new Date().getFullYear())}</p>
      </footer>
    </>
  );
}

export default App;
