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
  const [gameMode, setGameMode] = useLocalStorage("Game mode", "classic");
  const [totalTime, setTotalTime] = useLocalStorage("totalTime", 30);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [gridType, setGridType] = useLocalStorage("gridType", "grid-cols-4")
  const [totalClicks, setTotalClicks] = useState(0)
  const [totalCorrectClicks, setTotalCorrectClicks] = useState(0)
  const [currentTimerTime, setCurrentTimerTime] = useState(totalTime);

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
        gameMode,
        setGameMode,
        totalTime,
        setTotalTime,
        theme,
        setTheme,
        gridType,
        setGridType,
        totalClicks,
        setTotalClicks,
        currentTimerTime,
        setCurrentTimerTime,
        totalCorrectClicks,
        setTotalCorrectClicks,
      }}
    >
      {children}
    </gridSettings.Provider>
  );
};

export const useGridSettings = () => useContext(gridSettings);
