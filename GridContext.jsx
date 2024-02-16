import React, { createContext, useContext, useState } from "react";
import { color_4x4_bg } from "./src/gridGenerate";
const gridSettings = createContext();

export const GridContext = ({ children }) => {
  const [gridColorList, setGridColorList] = useState(color_4x4_bg);
  const [gridColorNo, setGridColorNo] = useState(13);
  const [totalColorNo, setTotalColorNo] = useState(16);
  const [classicMode, setClassicMode] = useState(true);
  const [customMode, setCustomMode] = useState(false);
  const [totalTime, setTotalTime] = useState(30);
  const [dark, setDark] = useState(true);

  return (
    <gridSettings.Provider
      value={{
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
        totalTime,
        setTotalTime,
        dark,
        setDark,
      }}
    >
      {children}
    </gridSettings.Provider>
  );
};

export const useGridSettings = () => useContext(gridSettings);
