// Croquis au trait du contour des côtes de l'Australie (Tasmanie incluse),
// dessiné à la main en SVG — pas d'image ni de librairie de cartes.

// Position du point de destination sur la côte est. Déplacer ce point
// quand la ville de destination sera choisie.
const DESTINATION_POINT = { x: 262, y: 172 };

// Contour tracé dans le sens horaire à partir de la pointe du Cap York :
// descente le long du golfe de Carpentarie, Terre d'Arnhem, Kimberley,
// côte ouest, pointe sud-ouest, grande baie australienne (courbe concave),
// golfes de Spencer et Saint-Vincent, promontoire de Wilson, côte est
// jusqu'à Cairns et retour au Cap York.
const MAINLAND_PATH =
  "M 210 6 L 218 22 L 208 38 L 188 55 L 165 78 L 172 55 L 158 38 L 138 28 " +
  "L 122 40 L 112 35 L 98 42 L 85 52 L 75 68 L 62 92 L 52 112 L 45 135 " +
  "L 44 155 L 48 172 L 52 182 L 60 190 " +
  "Q 130 152 195 193 " + // grande baie australienne : courbe concave
  "L 208 208 L 218 200 L 228 210 L 240 222 " + // Fleurieu, Coorong, Wilsons Prom
  "L 252 205 L 258 192 L 262 172 " +
  "L 260 155 L 255 138 L 250 122 L 245 105 L 248 90 L 238 75 L 230 62 " +
  "L 220 48 L 212 32 L 210 18 Z";

const TASMANIA_PATH = "M 210 232 L 222 226 L 235 233 L 238 248 L 228 258 L 215 253 Z";

function AustraliaMap({ label }) {
  return (
    <svg
      className="australia-map"
      viewBox="0 0 300 260"
      role="img"
      aria-label={label}
    >
      <path className="australia-outline" d={MAINLAND_PATH} />
      <path className="australia-outline" d={TASMANIA_PATH} />
      <circle
        className="australia-dot-halo"
        cx={DESTINATION_POINT.x}
        cy={DESTINATION_POINT.y}
        r="16"
      />
      <circle
        className="australia-dot"
        cx={DESTINATION_POINT.x}
        cy={DESTINATION_POINT.y}
        r="4"
      />
    </svg>
  );
}

export default AustraliaMap;
