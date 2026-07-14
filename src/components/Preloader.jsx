import { useEffect, useState } from "react";

// Écran d'entrée monogramme, affiché une seule fois au chargement initial
// (jamais lors des navigations internes — voir App.jsx). Séquence : entrée
// en fondu (0.8s) → tenue (0.4s) → sortie en fondu (0.4s), puis démontage.
const ENTER_MS = 800;
const HOLD_MS = 400;
const EXIT_MS = 400;

function Preloader({ t, onFinish }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const toExit = setTimeout(() => setExiting(true), ENTER_MS + HOLD_MS);
    const toFinish = setTimeout(onFinish, ENTER_MS + HOLD_MS + EXIT_MS);
    return () => {
      clearTimeout(toExit);
      clearTimeout(toFinish);
    };
  }, [onFinish]);

  return (
    <div className={`preloader ${exiting ? "is-exiting" : ""}`} aria-hidden="true">
      <span className="preloader-monogram">{t.home.portrait.initials}</span>
      <span className="preloader-number">{t.home.portrait.number}</span>
    </div>
  );
}

export default Preloader;
