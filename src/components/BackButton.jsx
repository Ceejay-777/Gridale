import React from "react";
import { useNavigate } from "react-router";
import { nextGridSound, playSound } from "../modules/soundManager";
import { useSelector } from "react-redux";
import { allgameSettings } from "../slices/gameSettingsSlice";

const BackButton = () => {
  const navigate = useNavigate();
  const {soundsPlaying} = useSelector(allgameSettings)
  return (
    <div
      className="absolute top-4 left-4 p-2 rounded-full bg-blue-700 hover:scale-110"
      onClick={() => {
        navigate(-1);
        playSound(nextGridSound, soundsPlaying)
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.0"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
        />
      </svg>
    </div>
  );
};

export default BackButton;
