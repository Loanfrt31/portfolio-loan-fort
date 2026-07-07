import useReveal from "../hooks/useReveal.js";

// Enveloppe générique pour les apparitions au scroll (voir useReveal.js).
// `delay` (ms) permet un léger effet de cascade entre éléments d'un même
// groupe (ex. entrées d'un onglet, cartes).

function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, revealed] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${revealed ? "is-revealed" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
