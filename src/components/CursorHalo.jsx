import { useEffect, useRef } from "react";

// Halo de curseur orange, actif uniquement au survol d'un élément portant la
// classe .cursor-halo-target (grands titres). Un seul nœud DOM réutilisé
// pour toute l'app ; position interpolée (lerp) via requestAnimationFrame —
// aucun re-render React déclenché par le mouvement de la souris.
const LERP = 0.15;

function CursorHalo() {
  const haloRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchOnly = window.matchMedia("(hover: none)").matches;
    if (prefersReducedMotion || isTouchOnly) return undefined;

    const halo = haloRef.current;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let started = false;
    let active = false;
    let frame;

    const handleMouseMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!started) {
        // Évite un fondu depuis le coin (0,0) au tout premier mouvement.
        currentX = targetX;
        currentY = targetY;
        started = true;
      }
      const isOverTarget = !!event.target.closest(".cursor-halo-target");
      if (isOverTarget !== active) {
        active = isOverTarget;
        halo.classList.toggle("is-active", active);
      }
    };

    const tick = () => {
      currentX += (targetX - currentX) * LERP;
      currentY += (targetY - currentY) * LERP;
      halo.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="cursor-halo" ref={haloRef} aria-hidden="true" />;
}

export default CursorHalo;
