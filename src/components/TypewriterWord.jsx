import { useEffect, useRef, useState } from "react";

// Écriture / effacement lettre par lettre, en boucle sur `words`. Chaque
// palier programme le suivant via un seul setTimeout (nettoyé avant chaque
// nouveau palier et au démontage) : aucune fuite de timer possible.
const TYPE_MS = 70;
const HOLD_MS = 2200;
const DELETE_MS = 40;
const GAP_MS = 300;

function TypewriterWord({ words }) {
  const reduceMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current;

  const [displayText, setDisplayText] = useState(() => (reduceMotion ? words[0] ?? "" : ""));
  const [wordIndex, setWordIndex] = useState(0);
  const [mode, setMode] = useState("typing"); // "typing" | "deleting"

  useEffect(() => {
    if (reduceMotion) return undefined;

    const word = words[wordIndex % words.length] ?? "";
    let delay;
    let advance;

    if (mode === "typing") {
      if (displayText.length < word.length) {
        delay = TYPE_MS;
        advance = () => setDisplayText(word.slice(0, displayText.length + 1));
      } else {
        delay = HOLD_MS;
        advance = () => setMode("deleting");
      }
    } else {
      if (displayText.length > 0) {
        delay = DELETE_MS;
        advance = () => setDisplayText(displayText.slice(0, -1));
      } else {
        delay = GAP_MS;
        advance = () => {
          setWordIndex((index) => (index + 1) % words.length);
          setMode("typing");
        };
      }
    }

    const timer = setTimeout(advance, delay);
    return () => clearTimeout(timer);
  }, [displayText, mode, wordIndex, words, reduceMotion]);

  return displayText;
}

export default TypewriterWord;
