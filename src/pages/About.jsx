import { useRef, useState } from "react";
import FigureRow from "../components/FigureRow.jsx";
import Tabs from "../components/Tabs.jsx";
import TabsCarousel from "../components/TabsCarousel.jsx";

// Seuils du swipe tactile : au-delà de 50px horizontaux, et nettement
// plus horizontal que vertical, pour ne jamais gêner le scroll de la page.
const SWIPE_THRESHOLD = 50;
const SWIPE_DIRECTION_RATIO = 1.5;

function ResumeGroup({ entries }) {
  return (
    <div className="resume-entries">
      {entries.map((entry) => (
        <div className="resume-entry" key={entry.date + entry.title}>
          <span className="resume-date">{entry.date}</span>
          <div className="resume-content">
            <h3 className="resume-title">{entry.title}</h3>
            {entry.place && <p className="resume-place">{entry.place}</p>}
            {entry.desc && <p className="resume-desc">{entry.desc}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function About({ t, aboutTab, setAboutTab }) {
  const about = t.about;

  const tabs = [
    { key: "experience", label: about.resume.experience.title },
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
  }));

  const activeIndex = tabs.findIndex((tab) => tab.key === aboutTab);
  // Sens du dernier changement d'onglet (1 = suivant, -1 = précédent),
  // pour orienter l'animation d'entrée du panneau sur mobile.
  const [tabDirection, setTabDirection] = useState(1);
  const touchStart = useRef(null);

  const goToIndex = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= tabs.length || nextIndex === activeIndex) return;
    setTabDirection(nextIndex > activeIndex ? 1 : -1);
    setAboutTab(tabs[nextIndex].key);
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
    goToIndex(dx < 0 ? activeIndex + 1 : activeIndex - 1);
  };

  return (
    <div className="page page-about">
      <header className="page-header">
        <h1>{about.title}</h1>
        <p className="tagline">{about.tagline}</p>
      </header>

      <p className="about-intro">{about.intro}</p>

      <Tabs tabs={tabs} activeKey={aboutTab} onChange={changeTab} label={about.title} />
      <TabsCarousel tabs={tabs} activeKey={aboutTab} onChange={changeTab} label={about.title} />

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
        {aboutTab === "experience" && <ResumeGroup entries={about.resume.experience.entries} />}
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
