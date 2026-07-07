import { useEffect, useState } from "react";

const ORIGIN_TIMEZONE = "Europe/Paris";
// Remplacer par le fuseau de la ville de destination quand elle sera choisie
const DESTINATION_TIMEZONE = "Australia/Sydney";

function formatTime(timeZone) {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

function readTimes() {
  return {
    origin: formatTime(ORIGIN_TIMEZONE),
    destination: formatTime(DESTINATION_TIMEZONE),
  };
}

function WorldClocks({ originLabel, destinationLabel }) {
  const [times, setTimes] = useState(readTimes);

  useEffect(() => {
    const interval = setInterval(() => setTimes(readTimes()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="world-clocks">
      {originLabel} {times.origin} — {destinationLabel} {times.destination}
    </p>
  );
}

export default WorldClocks;
