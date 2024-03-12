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

const GameClassic = () => {
  const clicksRef = useRef(0);

  const generate_2x2_grid = () => {
    clicksRef.current = 0;
    setGridColorList(color_2x2_bg);
    return generateRandomColors(color_2x2_bg, 4, 4);
  };

  const generate_3x3_grid = () => {
    clicksRef.current = 0;
    setGridColorList(color_3x3_bg);
    return generateRandomColors(color_3x3_bg, 9, 7);
  };

  const generate_4x4_grid = () => {
    clicksRef.current = 0;
    setGridColorList(color_4x4_bg);
    return generateRandomColors(color_4x4_bg, 16, 13);
  };

  const navigate = useNavigate();
  const [gridColorList, setGridColorList] = useState();
  const [gridType, setGridType] = useState("grid-cols-2");
  const [randomColorsList, setRandomColorsList] = useState(generate_2x2_grid);
  const [started, setStarted] = useState(false);
  const [totalTime, setTotalTime] = useState(10);
  const totalTimeoutRef = useRef(null);
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
      mainGridRef.current.classList.contains("grid-cols-2") &&
      clicksRef.current === 1
    ) {
      nextGrid();
    } else if (
      mainGridRef.current.classList.contains("grid-cols-3") &&
      clicksRef.current === 3
    ) {
      nextGrid();
    } else if (
      mainGridRef.current.classList.contains("grid-cols-4") &&
      clicksRef.current === 4
    ) {
      nextGrid();
    }
  };

  const nextGrid = () => {
    gridsCountRef.current += 1;

    if (gridsCountRef.current <= 5) {
      setRandomColorsList(generate_2x2_grid);
    } else if (gridsCountRef.current > 5 && gridsCountRef.current <= 8) {
      setRandomColorsList(generate_3x3_grid);
    } else if (gridsCountRef.current > 8) {
      setRandomColorsList(generate_4x4_grid);
    }
  };

  useEffect(() => {
    clicksRef.current = 0;
    if (gridColorList == color_2x2_bg) {
      setGridType("grid-cols-2");
    } else if (gridColorList == color_3x3_bg) {
      setGridType("grid-cols-3");
    } else setGridType("grid-cols-4");
  }, [gridColorList]);

  useEffect(() => clearTimeout(totalTimeoutRef.current))

  const startTime = () => {
    setStarted(true);
    setTotalTime(30);

    totalTimeoutRef = setTimeout(() => {
      console.log("Okay")
      navigate("/result");
    }, totalTime * 1000);
  };

  const handleStop = () => {
    clearInterval(totalTimeoutRef.current);
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
        <h1 className={"text-black dark:text-white"}>Classic</h1>
      <div className="w-4/5">
        {started ? (
          <div>
            <Timer seconds={totalTime}></Timer>
            <div className={`w-12 h-12 mb-16 ${primaryColor} rounded-xl`}></div>
            <div className={`grid ${gridType} mx-auto w-4/5 gap-[2px]`} ref={mainGridRef}>
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
          <button
            className="px-[1.5rem] py-[1rem] mt-8 bg-red-600 rounded-xl w-[90%] text-lg font-bold hover:scale-110"
            onClick={startTime}
          >
            Start
          </button>
          
          <button
            onClick={() => {
              navigate("/settings");
            }}
            className="px-[1.5rem] py-[1rem] mt-8 bg-blue-600 rounded-xl w-[90%] text-lg font-bold hover:scale-110"
          >
            Settings
          </button>
          {/* <button
            className="px-[1.5rem] py-[1rem] mt-8 bg-yellow-400 rounded-xl w-[90%] text-lg font-bold hover:scale-110"
            onClick={nextGrid}
          >
            Next
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default GameClassic;

// const Timer = ({ seconds }) => {
//   const [time, setTime] = useState(seconds);

//   useEffect(() => {
//     if (time <= 0) {
//       return;
//     }

//     const timer = setInterval(() => {
//       setTime((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [time]);

//   const formatTime = (timeInSeconds) => {
//     const minutes = Math.floor(timeInSeconds / 60)
//       .toString()
//       .padStart(2, "0");
//     const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
//     return `${minutes}:${seconds}`;
//   };

//   return <div>{formatTime(time)}</div>;
// };
