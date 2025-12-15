import { useEffect, useState } from "react";

export default function Progress({ onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(10000);

  useEffect(() => {
    console.log("TIMER STARTED");
    const interval = setInterval(() => {
      // Prevent negative values for cleanliness
      setRemainingTime((prev) => Math.max(prev - 50, 0));
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(onTimeout, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout]);

  return <progress value={remainingTime} max={10000} />;
}