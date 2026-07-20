// Filigrane en contour seul ("Nº 08" du CTA final, "Nº 404" de la page
// introuvable). Rendu en SVG plutôt qu'en texte + font-size : un viewBox
// fixe garantit des proportions identiques à toute taille d'écran, le SVG
// se contentant de s'étirer uniformément (aucune déformation possible).

function Watermark({ text, className = "" }) {
  return (
    <svg
      className={`watermark-svg ${className}`.trim()}
      viewBox="0 0 640 280"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <text x="320" y="200" textAnchor="middle">
        {text}
      </text>
    </svg>
  );
}

export default Watermark;
