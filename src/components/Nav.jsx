import { useEffect, useRef, useState } from "react";
import LangToggle from "./LangToggle.jsx";

// Barre de navigation sticky. Sur mobile (≤820px, voir App.css), les liens
// laissent place à un bouton hamburger qui ouvre un panneau plein écran.
//
// Le panneau est rendu en dehors du <header>, et non à l'intérieur : le
// header a un backdrop-filter (pour l'effet de flou), or backdrop-filter
// crée un "containing block" pour ses descendants en position: fixed.
// Si le panneau restait un enfant du header, son "position: fixed; inset: 0"
// serait limité à la petite hauteur du header au lieu de couvrir l'écran.

function Nav({ page, setPage, lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef(null);
  const hamburgerRef = useRef(null);
  const wasOpen = useRef(false);

  const pages = [
    { key: "home", label: t.nav.home },
    { key: "about", label: t.nav.about },
    { key: "projects", label: t.nav.projects },
    { key: "contact", label: t.nav.contact },
  ];

  const goTo = (key) => {
    setPage(key);
    setMenuOpen(false);
  };

  // Ouverture du panneau : bloque le scroll, écoute Échap, déplace le focus
  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";
    const firstLink = panelRef.current?.querySelector("button");
    firstLink?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // Rend le focus au bouton hamburger à la fermeture du panneau
  useEffect(() => {
    if (wasOpen.current && !menuOpen) {
      hamburgerRef.current?.focus();
    }
    wasOpen.current = menuOpen;
  }, [menuOpen]);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <button type="button" className="nav-logo" onClick={() => goTo("home")}>
            loan<span className="nav-logo-dot">.</span>fort{" "}
            <span className="nav-logo-accent">/08</span>
          </button>

          <nav className="nav-links" aria-label="Navigation principale">
            {pages.map((p) => (
              <button
                type="button"
                key={p.key}
                className={`nav-link ${page === p.key ? "active" : ""}`}
                onClick={() => goTo(p.key)}
                aria-current={page === p.key ? "page" : undefined}
              >
                {p.label}
              </button>
            ))}
          </nav>

          <div className="nav-right">
            <span className="nav-lang-desktop">
              <LangToggle lang={lang} setLang={setLang} t={t} />
            </span>
            <button
              type="button"
              className={`nav-hamburger ${menuOpen ? "open" : ""}`}
              aria-label={t.nav.menuLabel}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              ref={hamburgerRef}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.menuLabel}
          ref={panelRef}
        >
          <nav className="nav-panel-links" aria-label="Navigation mobile">
            {pages.map((p) => (
              <button
                type="button"
                key={p.key}
                className={`nav-panel-link ${page === p.key ? "active" : ""}`}
                onClick={() => goTo(p.key)}
                aria-current={page === p.key ? "page" : undefined}
              >
                {p.label}
              </button>
            ))}
          </nav>
          <div className="nav-panel-lang">
            <LangToggle lang={lang} setLang={setLang} t={t} />
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
