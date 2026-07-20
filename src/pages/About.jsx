import { useEffect, useRef, useState } from "react";
import FigureRow from "../components/FigureRow.jsx";
import Tabs from "../components/Tabs.jsx";
import TabsCarousel from "../components/TabsCarousel.jsx";
import Reveal from "../components/Reveal.jsx";

// Seuils du swipe tactile : au-delà de 60px horizontaux, et nettement
// plus horizontal que vertical (x2), pour ne jamais confondre un swipe
// d'onglet avec un scroll vertical à inertie.
const SWIPE_THRESHOLD = 60;
const SWIPE_DIRECTION_RATIO = 2;

// Mémorise si l'animation d'invitation au swipe a déjà été jouée, pour toute
// la durée de la session (jusqu'au rechargement de la page) — pas au-delà :
// aucun localStorage, juste une variable de module qui survit aux montages/
// démontages répétés de <About> au fil de la navigation.
let swipeHintShownThisSession = false;

function ResumeGroup({ entries }) {
  return (
    <div className="resume-entries">
      {entries.map((entry, index) => (
        <Reveal
          as="div"
          className={`resume-entry ${entry.pending ? "is-pending" : ""}`.trim()}
          delay={index * 80}
          id={entry.domId}
          key={entry.date + entry.title}
        >
          <span className="resume-date">{entry.date}</span>
          <div className="resume-content">
            <h2 className="resume-title">{entry.title}</h2>
            {entry.place && <p className="resume-place">{entry.place}</p>}
            {entry.desc && <p className="resume-desc">{entry.desc}</p>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function About({ t, aboutTab, setAboutTab }) {
  const about = t.about;

  const tabs = [
    { key: "experience", label: about.resume.experience.title },
    { key: "licences", label: about.resume.licences.title },
    { key: "diplomas", label: about.resume.diplomas.title },
    { key: "education", label: about.resume.education.title },
    { key: "interests", label: about.interestsTitle },
    { key: "skills", label: about.skillsTitle },
    { key: "languages", label: about.langsTitle },
  ];

  // Le gabarit "Centres d'intérêt" reprend strictement celui de Formation :
  // les index 01/02/03 occupent la colonne des dates.
  const interestEntries = about.interests.map((interest) => ({
    date: interest.index,
    title: interest.title,
    desc: interest.text,
    // Ancre stable ciblée depuis les cartes "Trois chapitres" de l'accueil
    // (voir App.jsx / goToInterest), indépendante de l'ordre d'affichage.
    domId: `interest-${interest.subject}`,
  }));

  const activeIndex = tabs.findIndex((tab) => tab.key === aboutTab);
  // Sens du dernier changement d'onglet (1 = suivant, -1 = précédent),
  // pour orienter l'animation d'entrée du panneau sur mobile.
  const [tabDirection, setTabDirection] = useState(1);
  const touchStart = useRef(null);
  const tabsZoneRef = useRef(null);

  // Animation d'invitation au swipe (mobile, une fois par session) : voir
  // swipeHintShownThisSession ci-dessus. N'a jamais lieu avec un mouvement
  // réduit — les chevrons suffisent alors comme affordance de navigation.
  const [showSwipeHint, setShowSwipeHint] = useState(() => {
    if (swipeHintShownThisSession) return false;
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return window.matchMedia("(max-width: 820px)").matches;
  });

  const dismissSwipeHint = () => {
    if (swipeHintShownThisSession) return;
    swipeHintShownThisSession = true;
    setShowSwipeHint(false);
  };

  // La mention s'estompe après 4s si elle n'a pas déjà été balayée par un
  // swipe ou un tap.
  useEffect(() => {
    if (!showSwipeHint) return undefined;
    const timer = setTimeout(dismissSwipeHint, 4000);
    return () => clearTimeout(timer);
  }, [showSwipeHint]);

  // Si le changement d'onglet (swipe ou tap) a lieu alors que le haut de la
  // zone d'onglets a défilé hors écran (cas : on était en bas d'un onglet
  // long), on y ramène la page — sinon l'utilisateur atterrit au milieu
  // d'un contenu différent sans repère.
  const scrollTabsIntoViewIfNeeded = () => {
    const el = tabsZoneRef.current;
    if (!el || el.getBoundingClientRect().top >= 0) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const goToIndex = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= tabs.length || nextIndex === activeIndex) return;
    setTabDirection(nextIndex > activeIndex ? 1 : -1);
    setAboutTab(tabs[nextIndex].key);
    scrollTabsIntoViewIfNeeded();
  };

  const changeTab = (nextKey) => {
    goToIndex(tabs.findIndex((tab) => tab.key === nextKey));
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy) * SWIPE_DIRECTION_RATIO) {
      return;
    }
    dismissSwipeHint();
    goToIndex(dx < 0 ? activeIndex + 1 : activeIndex - 1);
  };

  return (
    <div className="page page-about">
      <header className="page-header">
        <h1 className="cursor-halo-target">{about.title}</h1>
        <p className="tagline">{about.tagline}</p>
      </header>

      <p className="about-intro">{about.intro}</p>

      <div ref={tabsZoneRef}>
        <Tabs tabs={tabs} activeKey={aboutTab} onChange={changeTab} label={about.title} />
        <TabsCarousel
          tabs={tabs}
          activeKey={aboutTab}
          onChange={changeTab}
          label={about.title}
          hint={showSwipeHint ? about.swipeHint : null}
          onHintDismiss={dismissSwipeHint}
        />
      </div>

      <div
        className={`tab-panel ${showSwipeHint ? "is-swipe-hint" : ""}`.trim()}
        key={aboutTab}
        role="tabpanel"
        id={`panel-${aboutTab}`}
        aria-labelledby={`tab-${aboutTab} carousel-label-${aboutTab}`}
        style={{ "--dir": tabDirection }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {aboutTab === "experience" && <ResumeGroup entries={about.resume.experience.entries} />}
        {aboutTab === "licences" && <ResumeGroup entries={about.resume.licences.entries} />}
        {aboutTab === "diplomas" && <ResumeGroup entries={about.resume.diplomas.entries} />}
        {aboutTab === "education" && <ResumeGroup entries={about.resume.education.entries} />}
        {aboutTab === "interests" && <ResumeGroup entries={interestEntries} />}

        {aboutTab === "skills" && <FigureRow items={about.competences} />}
        {aboutTab === "languages" && <FigureRow items={about.langues} />}
      </div>
    </div>
  );
}

export default About;
