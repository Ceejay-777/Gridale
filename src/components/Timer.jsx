import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { allgameSettings } from "../modules/slices/gameSettingsSlice";
import { playSound, timeUpSound } from "../modules/soundManager";
import Countdown, { zeroPad } from "react-countdown";
import { useNavigate } from "react-router";

const Timer = ({ isPaused }) => {
  const { totalTime, soundsPlaying } = useSelector(allgameSettings);
  const [now, setNow] = useState(Date.now());
  const [time, setTime] = useState()
  const countdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (isPaused) {
      if (timeUpSound.playing()) {
        timeUpSound.pause();
      }
      countdownRef.current.pause();
    } else {
      countdownRef.current.start();
    }
  }, [isPaused]);

  useEffect(() => {
    if (time < 6 && !timeUpSound.playing()) {
      playSound(timeUpSound, soundsPlaying);
    }

    return () => {
      timeUpSound.stop();
    };
  }, [time]);

  const renderer = ({ minutes, seconds, milliseconds }) => {
    return (
      <div className={`w-fit text-xl md:text-2xl ${time < 6 ? "text-red-500 dark:text-red-500" : "text-black dark:text-white"}`}>
        {`${zeroPad(minutes)}:${zeroPad(seconds)}:${zeroPad(milliseconds, 4)}`}
      </div>
    );
  };

  return (
    <Countdown
      date={now + totalTime * 1000}
      intervalDelay={1}
      precision={3}
      renderer={renderer}
      key={1}
      ref={countdownRef}
      onComplete={() => navigate("/result")}
      onTick={({seconds}) => setTime(seconds)}
    ></Countdown>
  );
};

export default Timer;
