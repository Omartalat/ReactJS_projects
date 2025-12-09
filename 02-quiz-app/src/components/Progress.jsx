import { useEffect, useState } from "react";

const TIMER = 10000;

export default function Progress() {
  const [remainingTime, setRemainingTime] = useState(TIMER);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 50);
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainingTime} max={TIMER}></progress>;
}
