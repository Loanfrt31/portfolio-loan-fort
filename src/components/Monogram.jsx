// La "Plaque monogramme" : élément signature de la page d'accueil.
// Esprit étiquette gravée de maison de luxe — sobre, précis, sans vocabulaire
// sportif ni gaming.

function Monogram({ data }) {
  return (
    <div className="monogram">
      <span className="monogram-initials">{data.initials}</span>
      <span className="monogram-number">{data.number}</span>
      <span className="monogram-rule" aria-hidden="true" />
      <ul className="monogram-lines">
        {data.lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <div className="monogram-footer">
        {data.footerText}
        <span className="monogram-footer-highlight">{data.footerHighlight}</span>
      </div>
    </div>
  );
}

export default Monogram;
