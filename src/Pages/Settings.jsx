import React, { useEffect } from "react";
import { useGridSettings } from "../../GridContext";
import { color_2x2_bg, color_3x3_bg, color_4x4_bg } from "../gridGenerate";

const Settings = () => {
  const {
    gridColorList,
    setGridColorList,
    gridColorNo,
    setGridColorNo,
    totalColorNo,
    setTotalColorNo,
  } = useGridSettings();

  useEffect(() => {
    console.log(gridColorList, gridColorNo, totalColorNo);
  }, [gridColorList, gridColorNo, totalColorNo]);

  return (
    <div className="mt-12">
      <button
        className="border-2 text-lg font-semibold mx-8 p-4 border-black"
        onClick={() => {
          console.log("Clicked");
          setGridColorList(color_2x2_bg);
          setTotalColorNo(4);
          setGridColorNo(4);
          console.log("Okay");
        }}
      >
        2 x 2
      </button>
      <button
        className="border-2 text-lg font-semibold mx-8 p-4 border-black"
        onClick={() => {
          console.log("Clicked");
          setGridColorList(color_3x3_bg);
          setTotalColorNo(9);
          setGridColorNo(7);
        }}
      >
        3 x 3
      </button>
      <button
        className="border-2 text-lg font-semibold mx-8 p-4 border-black"
        onClick={() => {
          console.log("Clicked");
          setGridColorList(color_4x4_bg);
          setTotalColorNo(13);
          setGridColorNo(16);
        }}
      >
        4 x 4
      </button>
    </div>
  );
};

export default Settings;
