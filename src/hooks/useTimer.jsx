import { DateTime } from "luxon";
import { useEffect, useState } from "react";

/**
 * @param {string} date
 */
export const useCountdown = (date) => {
  const [timeLeft, setTimeLeft] = useState(
    DateTime.fromISO(date).diffNow(["days", "hours", "minutes", "seconds"])
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(
        DateTime.fromISO(date).diffNow(["days", "hours", "minutes", "seconds"])
      );
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);
  return timeLeft;
};

