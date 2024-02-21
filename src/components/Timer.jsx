import React, { useEffect, useState } from "react";
import { useGridSettings } from "./GridContext";

const Timer = ({ seconds }) => {
  const [time, setTime] = useState(seconds);
  const { dark } = useGridSettings();

  useEffect(() => {
    if (time <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={dark ? "text-white" : "text-black"}>{formatTime(time)}</div>
  );
};

export default Timer;
