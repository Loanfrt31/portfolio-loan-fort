// Variante mobile des onglets À propos : rangée de points + chevrons latéraux
// + libellé actif. Le geste de swipe est géré par le parent (About.jsx) sur
// le panneau de contenu ; ce composant gère les points, les chevrons (tap)
// et l'éventuelle mention d'invitation au swipe.
//
// Les points sont masqués tant que pointsRevealed est faux : la mention
// occupe leur emplacement exact (fondu croisé, voir .carousel-dots-zone en
// CSS) jusqu'au premier geste, qui les révèle définitivement pour la session.
// La zone points/mention est placée sous la rangée chevrons + libellé, sans
// décoration propre (pas de filet autour d'elle).

function TabsCarousel({
  tabs,
  activeKey,
  onChange,
  label,
  hintText,
  hintVisible,
  pointsRevealed,
  onFirstGesture,
}) {
  const activeIndex = tabs.findIndex((tab) => tab.key === activeKey);
  const activeTab = tabs[activeIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === tabs.length - 1;

  const handleKeyDown = (event, index) => {
    let nextIndex = null;

    if (event.key === "ArrowRight") nextIndex = Math.min(index + 1, tabs.length - 1);
    else if (event.key === "ArrowLeft") nextIndex = Math.max(index - 1, 0);

    if (nextIndex !== null && nextIndex !== index) {
      event.preventDefault();
      onChange(tabs[nextIndex].key);
    }
  };

  const goStep = (step) => {
    const nextIndex = activeIndex + step;
    if (nextIndex < 0 || nextIndex >= tabs.length) return;
    onFirstGesture?.();
    onChange(tabs[nextIndex].key);
  };

  return (
    <div className="tabs-carousel">
      <div className="carousel-label-row">
        <button
          type="button"
          className={`carousel-chevron carousel-chevron-prev ${isFirst ? "is-hidden" : ""}`}
          aria-label={`${tabs[Math.max(activeIndex - 1, 0)].label}`}
          aria-hidden={isFirst}
          tabIndex={isFirst ? -1 : 0}
          onClick={() => goStep(-1)}
        >
          <svg width="9" height="15" viewBox="0 0 9 15" aria-hidden="true">
            <path
              d="M7.5 1.5 L1.5 7.5 L7.5 13.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <p className="carousel-label" id={`carousel-label-${activeTab.key}`}>
          {activeTab.label}
        </p>

        <button
          type="button"
          className={`carousel-chevron carousel-chevron-next ${isLast ? "is-hidden" : ""}`}
          aria-label={`${tabs[Math.min(activeIndex + 1, tabs.length - 1)].label}`}
          aria-hidden={isLast}
          tabIndex={isLast ? -1 : 0}
          onClick={() => goStep(1)}
        >
          <svg width="9" height="15" viewBox="0 0 9 15" aria-hidden="true">
            <path
              d="M1.5 1.5 L7.5 7.5 L1.5 13.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="carousel-dots-zone">
        <div
          className={`carousel-dots ${pointsRevealed ? "is-visible" : ""}`}
          role="tablist"
          aria-label={label}
        >
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
                onClick={() => {
                  onFirstGesture?.();
                  onChange(tab.key);
                }}
                onKeyDown={(event) => handleKeyDown(event, index)}
              />
            );
          })}
        </div>

        <p
          className={`carousel-swipe-hint ${hintVisible && !pointsRevealed ? "is-visible" : ""}`}
          aria-hidden="true"
        >
          <span className="carousel-swipe-hint-arrow">←</span>
          {hintText}
          <span className="carousel-swipe-hint-arrow">→</span>
        </p>
      </div>
    </div>
  );
}

export default TabsCarousel;
