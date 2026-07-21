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

// Séquence de l'animation d'invitation au swipe, une fois la zone des
// onglets visible à l'écran (voir l'IntersectionObserver ci-dessous). Rejouée
// à chaque visite de la page (aucune mémorisation entre montages) : le seuil
// élevé (80%) garantit qu'elle ne se déclenche que quand l'utilisateur est
// vraiment au niveau du carousel, pas simplement en chemin vers lui.
const HINT_INTERSECTION_THRESHOLD = 0.8;
const HINT_ENTER_DELAY_MS = 800;

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

  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current;

  // Points indicateurs masqués par défaut (mobile) : la mention "Swipe to
  // navigate" occupe leur emplacement jusqu'au premier geste, qui les révèle
  // pour le reste de cette visite de la page. Aucune mémorisation entre
  // montages : revenir sur la page À propos (nouveau montage) réinitialise
  // tout, l'animation se rejoue. Le glissement du panneau est désactivé avec
  // un mouvement réduit, mais la mention apparaît quand même (sans fondu,
  // voir App.css).
  const [pointsRevealed, setPointsRevealed] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const pointsRevealedRef = useRef(false);
  const hintDelayTimer = useRef(null);

  const revealPoints = () => {
    if (pointsRevealedRef.current) return;
    pointsRevealedRef.current = true;
    clearTimeout(hintDelayTimer.current);
    setHintVisible(false);
    setPointsRevealed(true);
  };

  // Se déclenche quand la zone des onglets (points + libellé) entre dans le
  // viewport à au moins 80% — pas au chargement de la page, qui peut se
  // faire bien avant que l'utilisateur n'ait scrollé jusque-là.
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (!window.matchMedia("(max-width: 820px)").matches) return undefined;

    const el = tabsZoneRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || pointsRevealedRef.current) return;
        observer.disconnect();
        hintDelayTimer.current = setTimeout(() => {
          if (pointsRevealedRef.current) return;
          setHintVisible(true);
        }, HINT_ENTER_DELAY_MS);
      },
      { threshold: HINT_INTERSECTION_THRESHOLD }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(hintDelayTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    revealPoints();
    goToIndex(dx < 0 ? activeIndex + 1 : activeIndex - 1);
  };

  return (
    <div className="page page-about">
      <header className="page-header">
        <h1 className="cursor-halo-target">{about.title}</h1>
        <p className="tagline">{about.tagline}</p>
      </header>

      <p className="about-intro">{about.intro}</p>

      <div className="about-carousel-section">
        <p className="about-carousel-section-label">{about.exploreLabel}</p>

        <div ref={tabsZoneRef}>
          <Tabs tabs={tabs} activeKey={aboutTab} onChange={changeTab} label={about.title} />
          <TabsCarousel
            tabs={tabs}
            activeKey={aboutTab}
            onChange={changeTab}
            label={about.title}
            hintText={about.swipeHint}
            hintVisible={hintVisible}
            pointsRevealed={pointsRevealed}
            onFirstGesture={revealPoints}
          />
        </div>

        <div
          className="tab-panel"
          key={aboutTab}
          role="tabpanel"
          id={`panel-${aboutTab}`}
          aria-labelledby={`tab-${aboutTab} carousel-label-${aboutTab}`}
          style={{ "--dir": tabDirection }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`tab-panel-inner ${hintVisible && !prefersReducedMotion ? "is-swipe-hint" : ""}`.trim()}
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
      </div>
    </div>
  );
}

export default About;
