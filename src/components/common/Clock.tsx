import { useEffect, useRef, useState } from "react";

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  const timerID = useRef();
  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const current: ReturnType<typeof setInterval> | undefined = timerID.current;
    setInterval(() => tick(), 1000);
    return () => {
      clearInterval(current);
    };
  }, []);

  return (
    <>
      {date.toLocaleDateString([], {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </>
  );
};
