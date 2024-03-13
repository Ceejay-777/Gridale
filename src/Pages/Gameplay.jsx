import React, { useEffect, useState, useRef } from "react";
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

const Gameplay = () => {
  const {
    totalTime,
    gridColorList,
    totalColorNo,
    gridColorNo,
    setGridColorList,
    gameMode,
  } = useGridSettings();
  const clicksRef = useRef(0);

  const navigate = useNavigate();
  const [gridType, setGridType] = useState("grid-cols-2");
  const [randomColorsList, setRandomColorsList] = useState(
    generateRandomColors(gridColorList, totalColorNo, gridColorNo)
  );
  const [started, setStarted] = useState(false);
  const timerRef = useRef();
  const mainGridRef = useRef();
  const gridsCountRef = useRef(0);

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
          navigate("/result");
        }, totalTime * 1000);
      }
      return () => clearTimeout(timerRef.current);
    }, [started]);

    const startTime = () => {
      setStarted(true);
    };

    const handleStop = () => {
      clearInterval(totalTimeoutRef.current);
    };

    return (
      <div className="flex justify-center items-center flex-col min-h-screen">
        <h1 className={"text-black dark:text-white capitalize"}>{gameMode}</h1>
        <div className="w-4/5">
          {started ? (
            <div>
              <Timer seconds={totalTime}></Timer>
              <div
                className={`w-12 h-12 mb-16 ${primaryColor} rounded-xl`}
              ></div>
              <div
                className={`grid ${gridType} mx-auto w-4/5 gap-[2px]`}
                ref={mainGridRef}
              >
                {randomColors.map((color) => {
                  const Id = uuidv4();
                  return (
                    <div
                      key={Id}
                      className={`aspect-square ${color} rounded-2xl border-[1px] border-slate-[800]`}
                      onClick={handleGridClick}
                    ></div>
                  );
                })}
              </div>
            </div>
          ) : (
            <Loading />
          )}
          <div className="flex flex-col items-center">
            {started || (
              <button
                className="px-[1.5rem] py-[1rem] mt-8 bg-red-600 rounded-xl w-[90%] text-lg font-bold hover:scale-110"
                onClick={startTime}
              >
                Start
              </button>
            )}
            <button
              onClick={() => {
                navigate("/settings");
              }}
              className="px-[1.5rem] py-[1rem] mt-8 bg-blue-600 rounded-xl w-[90%] text-lg font-bold hover:scale-110"
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    );
  };

}

export default Gameplay


