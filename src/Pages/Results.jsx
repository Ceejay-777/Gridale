import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import MainButton from "../components/MainButton";
import { useNavigate } from "react-router";
import { apprentice } from "../assets/Badges/apprentice.jsx";
import { junior } from "../assets/Badges/junior.jsx";
import { journeyman } from "../assets/Badges/journeyman.jsx";
import { master } from "../assets/Badges/master.jsx";
import { senior } from "../assets/Badges/senior.jsx";
import { nextGridSound, playSound, successTwoSound } from "../modules/soundManager.js";
import { allgameSettings } from "../modules/slices/gameSettingsSlice.js";

const Results = () => {
  const navigate = useNavigate();
  const { totalClicks, totalCorrectClicks, totalPossibleClicks } = useSelector(
    (state) => state.grid
  );
  const {soundsPlaying} = useSelector(allgameSettings)
  const aura = (parseInt(totalCorrectClicks) / parseInt(totalClicks)) * 100;
  const composure =
    (parseFloat(totalCorrectClicks) / parseFloat(totalPossibleClicks)) * 100;
  const rank = (composure * 70 + aura * 30) / 100;

  let ranking, badge;

  useEffect(() => {
    playSound(successTwoSound, soundsPlaying)
  }, []);

  if (rank) {
    if (rank <= 20) {
      ranking = "Junior";
      badge = junior;
    } else if (rank <= 40) {
      ranking = "Apprentice";
      badge = apprentice;
    } else if (rank <= 60) {
      ranking = "Journeyman";
      badge = journeyman;
    } else if (rank <= 80) {
      ranking = "Senior";
      badge = senior;
    } else {
      ranking = "Master";
      badge = master;
    }
  } else badge = junior;

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div
        className="h-10 w-10 p-2 bg-orange-500 rounded-full hover:scale-110 fixed top-4 right-4 md:w-14 md:h-14"
        onClick={() => {
          navigate("/");
          playSound(nextGridSound, soundsPlaying)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-full h-full text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </div>

      <div className="w-3/5 max-w-[400px] rotate">{badge}</div>
      <div className="w-full p-2 flex flex-col items-center gap-2">
        <p className="dark:text-white">
          {`Composure: ${composure ? composure.toFixed(2) + "%" : "0%"}`}
        </p>
        <p className="dark:text-white ">
          {`Aura: ${aura ? aura.toFixed(2) + "%" : "0%"}`}
        </p>
        <p className="dark:text-white">
          {`Rank: ${rank ? " Grid " + ranking : "Nothing for you eje!"}`}
        </p>
        <div className="w-4/5 mt-6 justify-center flex ">
          <MainButton
            background={"bg-yellow-400"}
            onClick={() => navigate("/game")}
          >
            Play Again
          </MainButton>
        </div>
        <p className="dark:text-white text-black hover:underline mt-4" onClick={() => navigate("/info/rank")}>See ranking info</p>
      </div>
    </div>
  );
};

export default Results;
