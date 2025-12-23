import { useEffect, useState, useRef } from "react";

export default function Progress({ onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(10000);
  const intervalRef = useRef(null);

  useEffect(() => {
    console.log("TIMER STARTED");
    intervalRef.current = setInterval(() => {
      // Prevent negative values for cleanliness
      setRemainingTime((prev) => Math.max(prev - 50, 0));
    }, 50);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (remainingTime === 0 && intervalRef.current) {
      console.log("TIMER STOPPED - reached 0");
      clearInterval(intervalRef.current);
    }
  }, [remainingTime]);

  useEffect(() => {
    const timer = setTimeout(onTimeout, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout]);

  return <progress value={remainingTime} max={10000} />;
}
