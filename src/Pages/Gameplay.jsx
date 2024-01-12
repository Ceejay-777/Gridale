import React, { useEffect } from "react";
import {
  generateRandomColors,
  color_2x2_bg,
  color_3x3_bg,
  color_4x4_bg,
} from "../gridGenerate";
import { useGridSettings } from "../../GridContext";

const Gameplay = () => {
  const {
    gridColorList,
    setGridColorList,
    totalColorNo,
    setTotalColorNo,
    gridColorNo,
    setGridColorNo,
  } = useGridSettings();

  let randomColorsList = generateRandomColors(
    gridColorList,
    totalColorNo,
    gridColorNo
  );
  const [randomColors, primaryColor] = randomColorsList;

  useEffect(() => {
    console.log(gridColorList, gridColorNo, totalColorNo);
  }, []);

  return (
    <div>
      <div className={`w-12 h-12 mb-16 ${primaryColor}`}></div>

      <div className="grid gap-8 mainGrid mx-auto">
        {randomColors.map((color, index) => {
          return <div key={index} className={`w-12 h-12 ${color}`}></div>;
        })}
      </div>
    </div>
  );
};

export default Gameplay;
