import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBgSoundPlaying } from "../modules/slices/gameSettingsSlice";
import { bgSound, buttonClickSound, playSound } from "../modules/soundManager";

const Sound = () => {
  const { bgSoundPlaying, soundsPlaying } = useSelector((state) => state.gameSettings);
  const firstRenderRef = useRef(0);

  const dispatch = useDispatch();

  const handleSound = () => {
    playSound(buttonClickSound, soundsPlaying)
    if (bgSound.playing()) {
      bgSound.pause();
      dispatch(setBgSoundPlaying(false))
    } else {
      bgSound.play();
      dispatch(setBgSoundPlaying(true))
    }
  };

  return (
    <div className="relative flex gap-2 items-center justify-center">
      {bgSoundPlaying || <div className="bg-green-600 rounded-lg py-1 px-2 font-semibold bubble bubbleright">
        Play Music?
      </div>}
      <div
        className="w-8 h-8 bg-orange-500 rounded-full p-1 md:w-12 md:h-12 md:p-2 hover:scale-110"
        onClick={handleSound}
      >
        {bgSoundPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.0"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Sound;
