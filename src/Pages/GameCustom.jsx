import React, { useEffect, useState, useRef } from "react";
import { useGridSettings } from "../../GridContext";
import {
  generateRandomColors,
  color_2x2_bg,
  color_3x3_bg,
  color_4x4_bg,
} from "../gridGenerate";
import { v4 as uuidv4 } from "uuid";
import Loading from "../Loading";
import { useNavigate } from "react-router";

const GameCustom = () => {
  const {
    gridColorList,
    // setGridColorList,
    totalColorNo,
    // setTotalColorNo,
    gridColorNo,
    // setGridColorNo,
  } = useGridSettings();

  const [started, setStarted] = useState(false);
  const [randomColorsList, setRandomColorsList] = useState(
    generateRandomColors(gridColorList, totalColorNo, gridColorNo)
  );
  const totalTime = useRef(null);
  const mainGridRef = useRef();
  const clicksRef = useRef(0);
  const [gridStyle, setGridStyle] = useState("mainGrid-4x4");
  const navigate = useNavigate();

  const [randomColors, primaryColor] = randomColorsList;

  useEffect(() => {
    if (gridColorList == color_2x2_bg) {
      setGridStyle("mainGrid-2x2");
    } else if (gridColorList == color_3x3_bg) {
      setGridStyle("mainGrid-3x3");
    } else setGridStyle("mainGrid-4x4");
  }, [gridColorList]);

  const handleGridClick = (event) => {
    const thisClasslist = event.currentTarget.classList;
    if (thisClasslist.contains(primaryColor)) {
      event.currentTarget.style.opacity = "0.5";
      if (!thisClasslist.contains("clicked")) {
        thisClasslist.add("clicked");
        clicksRef.current += 1;
      }
      console.log(clicksRef.current);
    }

    if (
      mainGridRef.current.classList.contains("mainGrid-2x2") &&
      clicksRef.current === 1
    ) {
      nextGrid();
    } else if (
      mainGridRef.current.classList.contains("mainGrid-3x3") &&
      clicksRef.current === 3
    ) {
      nextGrid();
    } else if (
      mainGridRef.current.classList.contains("mainGrid-4x4") &&
      clicksRef.current === 4
    ) {
      nextGrid();
    }
  };

  const startTime = () => {
    setStarted(true);
    totalTime.current = setTimeout(() => {
      navigate("/result");
    }, 30000);
  };

  const nextGrid = () => {
    clicksRef.current = 0;
    setRandomColorsList(
      generateRandomColors(gridColorList, totalColorNo, gridColorNo)
    );
  };

  return (
    <div>
      {started ? (
        <div>
          {/* <Timer seconds={30}></Timer> */}
          <div className={`w-12 h-12 mb-16 ${primaryColor}`}></div>
          <div className={`grid ${gridStyle} mx-auto `} ref={mainGridRef}>
            {randomColors.map((color) => {
              const Id = uuidv4();
              return (
                <div
                  key={Id}
                  className={`w-12 h-12 ${color} border-[1px] border-white`}
                  onClick={handleGridClick}
                ></div>
              );
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}

      <button
        onClick={() => {
          navigate("/settings");
        }}
        className="p-4 border-2 border-black mt-8"
      >
        Settings
      </button>

      <button className="p-4 border-2 border-black mt-8" onClick={startTime}>
        Start
      </button>

      <button className="p-4 border-2 border-black mt-8" onClick={nextGrid}>
        Next
      </button>
    </div>
  );
};

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

export default GameCustom;
