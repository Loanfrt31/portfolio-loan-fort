// Variante mobile des onglets À propos : rangée de points + libellé actif.
// Le geste de swipe est géré par le parent (About.jsx) sur le panneau de
// contenu ; ce composant ne gère que les points et le libellé.

function TabsCarousel({ tabs, activeKey, onChange, label }) {
  const activeIndex = tabs.findIndex((tab) => tab.key === activeKey);
  const activeTab = tabs[activeIndex];

  const handleKeyDown = (event, index) => {
    let nextIndex = null;

    if (event.key === "ArrowRight") nextIndex = Math.min(index + 1, tabs.length - 1);
    else if (event.key === "ArrowLeft") nextIndex = Math.max(index - 1, 0);

    if (nextIndex !== null && nextIndex !== index) {
      event.preventDefault();
      onChange(tabs[nextIndex].key);
    }
  };

  return (
    <div className="tabs-carousel">
      <div className="carousel-dots" role="tablist" aria-label={label}>
        {tabs.map((tab, index) => {
          const isActive = tab.key === activeKey;
          return (
            <button
              type="button"
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              aria-label={tab.label}
              aria-controls={`panel-${tab.key}`}
              tabIndex={isActive ? 0 : -1}
              className={`carousel-dot ${isActive ? "active" : ""}`}
              onClick={() => onChange(tab.key)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            />
          );
        })}
      </div>
      <p className="carousel-label" id={`carousel-label-${activeTab.key}`}>
        {activeTab.label}
      </p>
    </div>
  );
}

export default TabsCarousel;
