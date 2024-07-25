import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTime, decrementCurrent, allgameSettings } from "../modules/slices/gameSettingsSlice";
import { timeUpSound } from "../modules/soundManager";
import Countdown from "react-countdown";

const Timer = ({ isPaused }) => {
  const { currentTime } = useSelector(allgameSettings);
  const [time, setTime] = useState(currentTime);
  const timerRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    if (time <= 0) {
      return;
    }

    if (time < 6 && !timeUpSound.playing()) {
      timeUpSound.play();
    }

    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        dispatch(decrementCurrent());
        console.log(currentTime, time)
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
      timeUpSound.stop();
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
    // <div className={"dark:text-white text-black w-fit text-xl md:text-2xl"}>
    //   {formatTime(time)}
    // </div>
    <Countdown date={30000} ></Countdown>
  );
};

export default Timer;
