import React, { useEffect, useState, useRef } from "react";
import { useGridSettings } from "./GridContext";

const Timer = ({ isPaused }) => {
  const { currentTimerTime, setCurrentTimerTime } = useGridSettings();
  const [time, setTime] = useState(currentTimerTime);
  const timerRef = useRef();

  useEffect(() => {
    console.log(time, currentTimerTime);
    if (time <= 0) {
      return;
    }

    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        setCurrentTimerTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [time, isPaused]);

  useEffect(() => {
    if (isPaused) {
      console.log("Paused");
      setCurrentTimerTime(time);
    }
  }, [isPaused]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={"dark:text-white text-black w-fit text-xl "}>
      {formatTime(time)}
    </div>
  );
};

export default Timer;
 