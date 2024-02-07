import React, { useEffect, useState } from "react";
import { useGridSettings } from "../../GridContext";
import { generateRandomColors } from "../gridGenerate";
import { v4 as uuidv4 } from "uuid";
import Loading from "../Loading";

const GameCustom = () => {
  const {
    gridColorList,
    setGridColorList,
    totalColorNo,
    // setTotalColorNo,
    gridColorNo,
    // setGridColorNo,
  } = useGridSettings();

  const [started, setStarted] = useState(false);
  const [randomColorsList, setRandomColorsList] = useState(
    generateRandomColors(gridColorList, totalColorNo, gridColorNo)
  );

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

  const nextGrid = () => {
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
            {randomColorsList.map((color) => {
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

      {/* <button className="p-4 border-2 border-black mt-8" onClick={startTime}>
        Start
      </button>

      <button className="p-4 border-2 border-black mt-8" onClick={nextGrid}>
        Next
      </button> */}
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
