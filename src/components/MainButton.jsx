import React from "react";
import { buttonClickSound, playSound } from "../modules/soundManager";
import { useSelector } from "react-redux";

const MainButton = ({
  children,
  background,
  addStyles,
  onClick,
  bordered,
  playClick = true,
}) => {
  const {soundsPlaying} = useSelector((state) => state.gameSettings)
  return (
    <button
      className={`px-[1.5rem] py-[1rem] w-full rounded-xl text-lg font-bold hover:scale-105 ${background} text-white dark:text-black max-w-[400px] ${addStyles} ${bordered && "border-2 dark:border-white border-black"}`}
      onClick={(event) => {
        onClick(event)
        if (playClick) {
          playSound(buttonClickSound, soundsPlaying)
        }
      }}
    >
      {children}
    </button>
  );
};

export default MainButton;
