import React, { useEffect, useId, useState, useRef } from "react";
import {
  color_2x2_bg,
  color_3x3_bg,
  color_4x4_bg,
  generateRandomColors,
} from "../gridGenerate";
import { useGridSettings } from "../../GridContext";
import { useNavigate } from "react-router";

const GameClassic = () => {
  const generate_2x2_grid = () => {
    setGridColorList(color_2x2_bg);
    return generateRandomColors(color_2x2_bg, 4, 4);
  };

  const generate_3x3_grid = () => {
    setGridColorList(color_3x3_bg);
    return generateRandomColors(color_3x3_bg, 9, 7);
  };

  const generate_4x4_grid = () => {
    setGridColorList(color_4x4_bg);
    return generateRandomColors(color_4x4_bg, 16, 13);
  };

  const navigate = useNavigate();
  const [gridColorList, setGridColorList] = useState();
  const [gridStyle, setGridStyle] = useState("mainGrid-4x4");
  const [randomColorsList] = useState(generate_4x4_grid);
  const totalTime = useRef(null);
  const countRef = useRef(0);
  const clicksRef = useRef(0);

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

      <div className={`grid gap-8 ${gridStyle} mx-auto`}>
        {randomColors.map((color, index) => {
          return (
            <div
              key={useId()}
              className={`w-12 h-12 ${color}`}
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

      <button className="p-4 border-2 border-black mt-8" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
};

export default GameClassic;
