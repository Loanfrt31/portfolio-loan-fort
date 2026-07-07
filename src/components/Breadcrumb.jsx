// Fil d'ariane en mono capitales espacées. Le dernier élément (page
// courante) n'a pas de onClick et n'est donc pas rendu comme un lien.

function Breadcrumb({ items, ariaLabel }) {
  return (
    <nav className="breadcrumb" aria-label={ariaLabel}>
      {items.map((item, i) => (
        <span className="breadcrumb-item" key={item.label}>
          {item.onClick ? (
            <button type="button" className="breadcrumb-link" onClick={item.onClick}>
              {item.label}
            </button>
          ) : (
            <span className="breadcrumb-current">{item.label}</span>
          )}
          {i < items.length - 1 && (
            <span className="breadcrumb-sep" aria-hidden="true">
              /
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumb;
