import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  color_2x2_bg,
  color_3x3_bg,
  color_4x4_bg,
  generateRandomColors,
} from "../gridGenerate";
import { useGridSettings } from "../../GridContext";
import { useNavigate } from "react-router";

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
  const [gridStyle, setGridStyle] = useState("mainGrid-4x4");
  const [randomColorsList, setRandomColorsList] = useState(generate_2x2_grid);
  // const [randomColors, setRandomColors] = useState()
  // const [primaryColor, setPrimaryColor] = useState()
  const totalTime = useRef(null);
  const countRef = useRef(0);
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
        console.log(clicksRef.current);
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
    gridsCountRef.current += 1;

    if (gridsCountRef.current <= 5) {
      setRandomColorsList(generate_2x2_grid);
    } else if (gridsCountRef.current > 5 && gridsCountRef.current <= 8) {
      console.log("Okay");
      setRandomColorsList(generate_3x3_grid);
    } else if (gridsCountRef.current > 8) {
      setRandomColorsList(generate_4x4_grid);
    }
  };

  useEffect(() => {
    clicksRef.current = 0;
    if (gridColorList == color_2x2_bg) {
      setGridStyle("mainGrid-2x2");
    } else if (gridColorList == color_3x3_bg) {
      setGridStyle("mainGrid-3x3");
    } else setGridStyle("mainGrid-4x4");
  }, [gridColorList]);

  const startTime = () => {
    totalTime.current = setInterval(() => {
      countRef.current += 1;
      console.log(countRef.current);
      if (countRef.current >= 30) {
        handleStop();
      }
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(totalTime.current);
  };

  return (
    <div>
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

export default GameClassic;
