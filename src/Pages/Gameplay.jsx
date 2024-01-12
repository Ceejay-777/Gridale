import React, { useEffect, useId } from "react";
import { generateRandomColors } from "../gridGenerate";
import { useGridSettings } from "../../GridContext";
import { useNavigate } from "react-router";

const Gameplay = () => {
  const navigate = useNavigate();
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

  return (
    <div>
      <div className={`w-12 h-12 mb-16 ${primaryColor}`}></div>

      <div className="grid gap-8 mainGrid mx-auto">
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
