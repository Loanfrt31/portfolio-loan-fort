import FigureRow from "../components/FigureRow.jsx";
import Tabs from "../components/Tabs.jsx";

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

  return (
    <div className="page page-about">
      <header className="page-header">
        <h1>{about.title}</h1>
        <p className="tagline">{about.tagline}</p>
      </header>

      <p className="about-intro">{about.intro}</p>

      <Tabs tabs={tabs} activeKey={aboutTab} onChange={setAboutTab} label={about.title} />

      <div
        className="tab-panel"
        key={aboutTab}
        role="tabpanel"
        id={`panel-${aboutTab}`}
        aria-labelledby={`tab-${aboutTab}`}
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
