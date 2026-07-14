import { useState } from "react";

// Section repliable : en-tête cliquable (bouton, chevron SVG pivotant) +
// contenu animé en hauteur via la technique CSS grid-template-rows 0fr/1fr
// (pas de mesure JS de hauteur, transition fluide vers "auto" par nature).
// Ouverte par défaut ; l'état ne vit qu'en mémoire React (pas de localStorage).

function CollapsibleSection({ label, className = "", children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={className}>
      <button
        type="button"
        className="collapsible-heading"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="home-section-heading-label">{label}</span>
        <span className="home-section-heading-line" aria-hidden="true" />
        <svg
          className={`collapsible-chevron ${open ? "" : "is-collapsed"}`}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          aria-hidden="true"
        >
          <path
            d="M3 5 L7 9 L11 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={`collapsible-content ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="collapsible-inner">{children}</div>
      </div>
    </div>
  );
}

export default CollapsibleSection;
