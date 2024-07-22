import React, { useEffect, useState, useRef } from "react";
import { useGridSettings } from "./GridContext";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTime, decrementCurrent } from "../slices/gameSettingsSlice";

const Timer = ({ isPaused }) => {
  const { timeUpSoundRef } =
    useGridSettings();

  const { currentTime } = useSelector((state) => state.gameSettings);
  const [time, setTime] = useState(currentTime);
  const timerRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    if (time <= 0) {
      return;
    }

    if (time < 6 && !timeUpSoundRef.current.playing()) {
      timeUpSoundRef.current.play();
    }

    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 0.1);
        dispatch(decrementCurrent());
      }, 100);
    }

    return () => {
      clearInterval(timerRef.current);
      timeUpSoundRef.current.stop();
    };
  }, [time, isPaused]);

  useEffect(() => {
    if (isPaused) {
      console.log("Paused");
      dispatch(setCurrentTime(time));
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
    <div className={"dark:text-white text-black w-fit text-xl md:text-2xl"}>
      {formatTime(time)}
    </div>
  );
};

export default Timer;
