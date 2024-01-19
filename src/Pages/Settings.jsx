import React, { useEffect } from "react";
import { useGridSettings } from "../../GridContext";
import { color_2x2_bg, color_3x3_bg, color_4x4_bg } from "../gridGenerate";
import { useNavigate } from "react-router";

const Settings = () => {
  const navigate = useNavigate();
  const {
    gridColorList,
    setGridColorList,
    gridColorNo,
    setGridColorNo,
    totalColorNo,
    setTotalColorNo,
    classicMode,
    setClassicMode,
    customMode,
    setCustomMode,
  } = useGridSettings();

  // useEffect(() => {
  //   console.log(gridColorList, gridColorNo, totalColorNo);
  // }, [gridColorList, gridColorNo, totalColorNo]);

  const handleClassicMode = () => {
    setCustomMode(false);
    setClassicMode(true);
  };

  return (
    <div className="mt-12">
      <button
        className="border-2 text-lg font-semibold mx-8 p-4 border-black"
        onClick={() => {
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
          setGridColorList(color_4x4_bg);
          setTotalColorNo(16);
          setGridColorNo(13);
        }}
      >
        4 x 4
      </button>

      <button
        className="border-2 text-lg font-semibold mx-8 p-4 border-black"
        onClick={handleClassicMode}
      >
        Classic
      </button>

      <button
        onClick={() => {
          navigate("/game");
        }}
        className="p-4 border-2 border-black mt-8"
      >
        Game
      </button>
    </div>
  );
};

export default Settings;
