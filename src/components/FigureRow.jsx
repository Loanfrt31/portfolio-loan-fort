// Ligne élégante "valeur — précision" entre deux filets hairline, avec de
// fins séparateurs verticaux. Utilisée pour les chiffres clés, les
// compétences et les langues sur la page À propos.

import Reveal from "./Reveal.jsx";

function FigureRow({ label, items }) {
  return (
    <div className="figure-block">
      {label && <h2 className="section-label">{label}</h2>}
      <div className="figure-row">
        {items.map((item, index) => (
          <Reveal as="div" className="figure-item" delay={index * 80} key={item.value}>
            <span className="figure-value">{item.value}</span>
            {item.label && <span className="figure-label">{item.label}</span>}
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default FigureRow;
