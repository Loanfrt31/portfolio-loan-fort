import { useRef } from "react";

// Navigateur d'onglets accessible : rôles ARIA tablist/tab, "roving tabindex"
// et navigation au clavier (flèches gauche/droite, Home/End) comme recommandé
// par le pattern WAI-ARIA "tabs".

function Tabs({ tabs, activeKey, onChange, label }) {
  const buttonRefs = useRef({});

  const focusTab = (key) => {
    buttonRefs.current[key]?.focus();
  };

  const handleKeyDown = (event, index) => {
    let nextIndex = null;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      const nextTab = tabs[nextIndex];
      onChange(nextTab.key);
      focusTab(nextTab.key);
    }
  };

  return (
    <div className="tabs-nav-wrapper">
      <div className="tabs-nav" role="tablist" aria-label={label}>
        {tabs.map((tab, index) => {
          const isActive = tab.key === activeKey;
          return (
            <button
              type="button"
              key={tab.key}
              ref={(el) => (buttonRefs.current[tab.key] = el)}
              role="tab"
              id={`tab-${tab.key}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.key}`}
              tabIndex={isActive ? 0 : -1}
              className={`tab-button ${isActive ? "active" : ""}`}
              onClick={() => onChange(tab.key)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;
