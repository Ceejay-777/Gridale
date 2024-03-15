import React, { createContext, useContext, useEffect, useState } from "react";
import { color_2x2_bg } from "../gridGenerate";
import useLocalStorage from "./useLS";
const gridSettings = createContext();

export const GridContext = ({ children }) => {
  const [gridColorList, setGridColorList] = useLocalStorage(
    "gridColorList",
    color_2x2_bg
  );
  const [gridColorNo, setGridColorNo] = useLocalStorage("gridColorNo", 4);
  const [totalColorNo, setTotalColorNo] = useLocalStorage("totalColorNo", 4);
  const [gameMode, setGameMode] = useLocalStorage("Game mode", "classic");
  const [totalTime, setTotalTime] = useLocalStorage("totalTime", 30);
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [gridType, setGridType] = useLocalStorage("gridType", "grid-cols-2")
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
