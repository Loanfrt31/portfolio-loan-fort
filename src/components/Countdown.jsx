import { useEffect, useState } from "react";
import { DEPARTURE_DATE } from "../content.js";

function getRemaining() {
  const diff = DEPARTURE_DATE.getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

// Compte à rebours avant le départ pour l'Australie. Se met à jour chaque
// seconde et bascule sur un message définitif une fois la date atteinte.
function Countdown({ t }) {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const countdown = t.home.countdown;

  return (
    <section className="countdown">
      <span className="countdown-title">{countdown.title}</span>

      {remaining ? (
        <>
          <div className="countdown-row">
            <div className="countdown-item">
              <span className="countdown-value">{remaining.days}</span>
              <span className="countdown-label">{countdown.labels.days}</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{remaining.hours}</span>
              <span className="countdown-label">{countdown.labels.hours}</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{remaining.minutes}</span>
              <span className="countdown-label">{countdown.labels.minutes}</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{remaining.seconds}</span>
              <span className="countdown-label">{countdown.labels.seconds}</span>
            </div>
          </div>
          <span className="countdown-subtitle">{countdown.subtitle}</span>
        </>
      ) : (
        <p className="countdown-arrived">{countdown.arrivedMessage}</p>
      )}
    </section>
  );
}

export default Countdown;
