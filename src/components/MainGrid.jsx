import React, { useMemo, useRef, useState } from 'react'
import { useGridSettings } from './GridContext';
import {
  color_2x2_bg,
  color_3x3_bg,
  color_4x4_bg,
  generateRandomColors,
  shuffle,
} from "../gridGenerate";
import { v4 as uuidv4 } from "uuid";


const MainGrid = ({ gridColorList, totalClicksRef, totalCorrectClicksRef }) => {
  const mainGridRef = useRef();
  const clicksRef = useRef(0);
  const { gridCorrectClickSoundRef, gridWrongClickSoundRef } =
    useGridSettings();
  let gridType, totalColorNo, gridColorNo;

  switch (gridColorList) {
    case color_2x2_bg:
      gridType = "grid-cols-2";
      totalColorNo = 4;
      gridColorNo = 4;
      break;
    case color_3x3_bg:
      gridType = "grid-cols-3";
      totalColorNo = 9;
      gridColorNo = 7;
      break;
    default:
      gridType = "grid-cols-4";
      totalColorNo = 16;
      gridColorNo = 13;
  }

  const [randomColorsList, setRandomColorsList] = useState(
    generateRandomColors(gridColorList, totalColorNo, gridColorNo)
  );

  const [randomColors, primaryColor] = randomColorsList;

  const handleGridClick = (event) => {
    const thisClasslist = event.currentTarget.classList;
    totalClicksRef.current += 1;
    if (thisClasslist.contains(primaryColor)) {
      event.currentTarget.style.opacity = "0.5";
      if (!thisClasslist.contains("clicked")) {
        thisClasslist.add("clicked");
        gridCorrectClickSoundRef.current.play();
        clicksRef.current += 1;
        totalCorrectClicksRef.current += 1;
      } else {
        gridWrongClickSoundRef.current.play();
      }
    } else {
      gridWrongClickSoundRef.current.play();
    }

    console.log(totalClicksRef, totalCorrectClicksRef);
  };

  return useMemo(() => {
    return (
      <div className="flex gap-1 mb-2">
        <div
          className={`${primaryColor}  border-[1px] border-slate-500 w-[5%] rounded-lg`}
        ></div>
        <div
          className={`grid ${gridType} mx-auto gap-1 w-full`}
          ref={mainGridRef}
        >
          {randomColors.map((color) => {
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
export default MainGrid
