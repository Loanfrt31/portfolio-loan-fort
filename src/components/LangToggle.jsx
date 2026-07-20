// Petit sélecteur de langue FR/EN en forme de pilule.

function LangToggle({ lang, setLang, t }) {
  return (
    <div
      className="lang-toggle"
      role="group"
      aria-label="Choix de la langue / Language switch"
    >
      <button
        type="button"
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        {t.nav.langEn}
      </button>
      <button
        type="button"
        className={lang === "fr" ? "active" : ""}
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
      >
        {t.nav.langFr}
      </button>
    </div>
  );
}

export default LangToggle;
