import { useEffect, useRef, useState } from "react";

// Révèle un élément (fondu + translation, voir .reveal dans App.css) la
// première fois qu'il entre dans le viewport, une seule fois — pas de rejeu
// au scroll remontant. Respecte prefers-reduced-motion (tout visible d'emblée).

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, revealed];
}

export default useReveal;
