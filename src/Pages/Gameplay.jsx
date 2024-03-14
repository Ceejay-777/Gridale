import React, { useEffect, useState, useRef, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  color_2x2_bg,
  color_3x3_bg,
  color_4x4_bg,
  generateRandomColors,
} from "../gridGenerate";
import { useGridSettings } from "../components/GridContext";
import { useNavigate } from "react-router";
import Loading from "../Loaders/Loading";
import Timer from "../components/Timer";
import GridaleLogo from "../Loaders/GridaleLogo";
import MainButton from "../components/MainButton";
import PauseOverlay from "../components/PauseOverlay";
import { useTimer } from "../components/useTimer.jsx";
import { TimeContext } from "../components/TimeContext.jsx";

const Gameplay = () => {
  const {
    totalTime,
    gridColorList,
    totalColorNo,
    gridColorNo,
    setGridColorList,
    gameMode,
    gridType,
    setGridType,
  } = useGridSettings();

  const navigate = useNavigate();
  const [randomColorsList, setRandomColorsList] = useState(
    generateRandomColors(gridColorList, totalColorNo, gridColorNo)
  );
  const [started, setStarted] = useState(false);
  const clicksRef = useRef(0);
  const timerRef = useRef();
  const mainGridRef = useRef();
  const gridsCountRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  const [randomColors, primaryColor] = randomColorsList;

  const handleGridClick = (event) => {
    const thisClasslist = event.currentTarget.classList;
    if (thisClasslist.contains(primaryColor)) {
      event.currentTarget.style.opacity = "0.5";
      if (!thisClasslist.contains("clicked")) {
        thisClasslist.add("clicked");
        clicksRef.current += 1;
      }
    }

    if (
      (mainGridRef.current.classList.contains("grid-cols-2") &&
        clicksRef.current === 1) ||
      (mainGridRef.current.classList.contains("grid-cols-3") &&
        clicksRef.current === 3) ||
      (mainGridRef.current.classList.contains("grid-cols-4") &&
        clicksRef.current === 4)
    ) {
      nextGrid();
    }
  };

  const nextClassicGrid = () => {
    gridsCountRef.current += 1;
    clicksRef.current = 0;

    if (gridsCountRef.current <= 5) {
      setGridColorList(color_2x2_bg);
      setRandomColorsList(generateRandomColors(color_2x2_bg, 4, 4));
    } else if (gridsCountRef.current > 5 && gridsCountRef.current <= 8) {
      setGridColorList(color_3x3_bg);
      setRandomColorsList(generateRandomColors(color_3x3_bg, 9, 7));
    } else if (gridsCountRef.current > 8) {
      setGridColorList(color_4x4_bg);
      setRandomColorsList(generateRandomColors(color_4x4_bg, 16, 13));
    }
  };

  const nextCustomGrid = () => {
    clicksRef.current = 0;
    setRandomColorsList(
      generateRandomColors(gridColorList, totalColorNo, gridColorNo)
    );
  };

  const nextGrid = gameMode === "classic" ? nextClassicGrid : nextCustomGrid;

  useEffect(() => {
    clicksRef.current = 0;
    if (gridColorList === color_2x2_bg) {
      setGridType("grid-cols-2");
    } else if (gridColorList === color_3x3_bg) {
      setGridType("grid-cols-3");
    } else if (gridColorList === color_4x4_bg) setGridType("grid-cols-4");
  }, [gridColorList]);

  useEffect(() => {
    if (started) {
      timerRef.current = setTimeout(() => {
        console.log("Okay");
        // navigate("/result");
      }, totalTime * 1000);
    }
    return () => clearTimeout(timerRef.current);
  }, [started]);

  const startTime = () => {
    setStarted(true);
  };

  const theTimer = useMemo(() => {
    return <Timer isPaused={isPaused} />;
  }, [isPaused]);

  return (
    <div>
      {isPaused && <PauseOverlay onCancle={() => setIsPaused(false)} />}
      <div className="flex justify-center items-center flex-col min-h-screen">
        <div className="fixed top-6  w-full flex justify-center items-center">
          <div className="fixed left-4">
            <GridaleLogo />
          </div>
          <h1 className={"text-black dark:text-white capitalize font-bold"}>
            {gameMode} Mode
          </h1>
          <div className="fixed right-6 flex w-fit gap-2 ">
            <div
              className="h-10 w-10 p-1 bg-yellow-400 rounded-full hover:scale-110"
              onClick={() => setIsPaused(true)}
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
                  d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div
              className="h-10 w-10 p-2 bg-green-700 rounded-full hover:scale-110"
              onClick={() => navigate("/")}
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
          </div>
        </div>
        <div className="w-4/5">
          {started ? (
            <div>
              <div className="flex justify-between items-center mb-16 mx-auto">
                {theTimer}
                <div
                  className={`w-14 h-14 ${primaryColor} rounded-xl border-[1px] border-slate-500`}
                ></div>
              </div>
              <div
                className={`grid ${gridType} mx-auto w-4/5 gap-[2px]`}
                ref={mainGridRef}
              >
                {randomColors.map((color) => {
                  const Id = uuidv4();
                  return (
                    <div
                      key={Id}
                      className={`aspect-square ${color} rounded-2xl border-[1px] border-slate-500`}
                      onClick={handleGridClick}
                    ></div>
                  );
                })}
              </div>
            </div>
          ) : (
            <Loading />
          )}
          {started || (
            <div className="flex flex-col items-center">
              <MainButton
                background="bg-red-600"
                addStyles="w-full mt-0"
                onClick={startTime}
              >
                Start
              </MainButton>

              <MainButton
                background="bg-blue-600"
                addStyles="w-full"
                onClick={() => {
                  navigate("/settings");
                }}
              >
                Settings
              </MainButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gameplay;
