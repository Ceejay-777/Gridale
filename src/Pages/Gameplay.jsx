import React, { useEffect, useId, useState } from "react";
import {
  color_2x2_bg,
  color_3x3_bg,
  color_4x4_bg,
  generateRandomColors,
} from "../gridGenerate";
import { useGridSettings } from "../../GridContext";
import { useNavigate } from "react-router";

const Gameplay = () => {
  const navigate = useNavigate();

  const [gridStyle, setGridStyle] = useState("mainGrid-4x4");

  const {
    gridColorList,
    // setGridColorList,
    totalColorNo,
    // setTotalColorNo,
    gridColorNo,
    // setGridColorNo,
  } = useGridSettings();

  let randomColorsList = generateRandomColors(
    gridColorList,
    totalColorNo,
    gridColorNo
  );

  const [randomColors, primaryColor] = randomColorsList;

  const handleGridClick = (event) => {
    if (event.currentTarget.classList.contains(primaryColor)) {
      event.currentTarget.style.opacity = "0.5";
    }
  };

  // useEffect(() => {
  //   console.log(
  //     gridColorList,
  //     gridColorNo,
  //     totalColorNo,
  //     randomColors,
  //     primaryColor
  //   );
  // }, []);

  useEffect(() => {
    if (gridColorList == color_2x2_bg) {
      setGridStyle("mainGrid-2x2");
    } else if (gridColorList == color_3x3_bg) {
      setGridStyle("mainGrid-3x3");
    } else setGridStyle("mainGrid-4x4");
  }, [gridColorList]);

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
    </div>
  );
};

export default Gameplay;
