import React, { createContext, useContext, useEffect, useState } from "react";
import { color_4x4_bg } from "../gridGenerate";
import useLocalStorage from "./useLS";
const gridSettings = createContext();

export const GridContext = ({ children }) => {
  const [gridColorList, setGridColorList] = useLocalStorage(
    "gridColorList",
    color_4x4_bg
  );
  const [gridColorNo, setGridColorNo] = useLocalStorage("gridColorNo", 13);
  const [totalColorNo, setTotalColorNo] = useLocalStorage("totalColorNo", 16);
  const [classicMode, setClassicMode] = useLocalStorage("classicMode", true);
  const [customMode, setCustomMode] = useLocalStorage("customMode", false);
  const [totalTime, setTotalTime] = useLocalStorage("totalTime", 30);
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    const bodyClasses = document.body.classList

    if(bodyClasses.contains("dark")) {
      bodyClasses.remove("dark")
    } else if (bodyClasses.contains("light")) {
      bodyClasses.remove("light");
    }
    bodyClasses.add(theme);
    
  }, [theme]);

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
        theme,
        setTheme,
      }}
    >
      {children}
    </gridSettings.Provider>
  );
};

export const useGridSettings = () => useContext(gridSettings);
