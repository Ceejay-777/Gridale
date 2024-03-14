import { useEffect, useRef, useState } from "react";
import { useGridSettings } from "./GridContext";
import { useTimeContext } from "./TimeContext";

export const useTimer = () => {
  const { totalTime } = useGridSettings();
  const [isPaused, setIsPaused] = useState(false);

  const Timer = ({ isPaused }) => {
    const { currentTimerTime, setCurrentTimerTime } = useTimeContext();
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
        setCurrentTimerTime(time - 1);
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
      <div className={"dark:text-white text-black  w-fit text-xl "}>
        {formatTime(time)}
      </div>
    );
  };

  return { Timer, isPaused, setIsPaused };
};
