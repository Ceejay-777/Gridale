import React, { useMemo, useRef, useState } from "react";
import {
  color_2x2_bg,
  color_3x3_bg,
  color_4x4_bg,
  generateRandomColors,
  shuffle,
} from "../modules/gridGenerate";
import { v4 as uuidv4 } from "uuid";
import { correctClickSound, wrongClickSound } from "../modules/soundManager";

const MainGrid = ({ gridType, totalClicksRef, totalCorrectClicksRef }) => {
  const mainGridRef = useRef();
  const clicksRef = useRef(0);
  let gridLayout, totalColorNo, gridColorNo, grid;

  switch (gridType) {
    case "grid2":
      grid = color_2x2_bg;
      gridLayout = "grid-cols-2";
      totalColorNo = 4;
      gridColorNo = 4;
      break;
    case "grid3":
      grid = color_3x3_bg;
      gridLayout = "grid-cols-3";
      totalColorNo = 9;
      gridColorNo = 7;
      break;
    case "grid4":
      grid = color_4x4_bg;
      gridLayout = "grid-cols-4";
      totalColorNo = 16;
      gridColorNo = 13;
      break;
  }

  const [randomColorsList, setRandomColorsList] = useState(
    generateRandomColors(grid, totalColorNo, gridColorNo)
  );

  const [randomColors, primaryColor] = randomColorsList;

  const handleGridClick = (event) => {
    const thisClasslist = event.currentTarget.classList;
    totalClicksRef.current += 1;
    if (thisClasslist.contains(primaryColor)) {
      event.currentTarget.style.opacity = "0.5";
      if (!thisClasslist.contains("clicked")) {
        thisClasslist.add("clicked");
        correctClickSound.play()
        clicksRef.current += 1;
        totalCorrectClicksRef.current += 1;
      } else {
        wrongClickSound.play();
      }
    } else {
      wrongClickSound.play();
    }
  };

  return useMemo(() => {
    return (
      <div className="flex gap-1 mb-4">
        <div
          className={`${primaryColor}  border-[1px] border-slate-500 w-[5%] rounded-lg`}
        ></div>
        <div
          className={`grid ${gridLayout} mx-auto gap-1 w-full`}
          ref={mainGridRef}
        >
          {shuffle(randomColors).map((color) => {
            const id = uuidv4();
            return (
              <div
                key={id}
                className={`aspect-square ${color} rounded-2xl border border-slate-500`}
                onMouseDown={handleGridClick}
              ></div>
            );
          })}
        </div>
        <div
          className={`${primaryColor} border-[1px] border-slate-500 w-[5%] rounded-lg`}
        ></div>
      </div>
    );
  }, [randomColors]);
};
export default MainGrid;
