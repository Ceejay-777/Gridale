import React from "react";
import { buttonClickSound } from "../modules/soundManager";

const MainButton = ({
  children,
  background,
  addStyles,
  onClick,
  playClick = true,
}) => {
  return (
    <button
      className={`px-[1.5rem] py-[1rem] w-full rounded-xl text-lg font-bold hover:scale-105 ${background} text-white dark:text-black max-w-[400px] ${addStyles}`}
      onClick={(event) => {
        onClick(event)
        if (playClick) {
          buttonClickSound.play()
        }
      }}
    >
      {children}
    </button>
  );
};

export default MainButton;
