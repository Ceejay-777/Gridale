import React, { createContext, useContext, useEffect, useRef, useState } from "react";
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
  const [gridType, setGridType] = useLocalStorage("gridType", "grid-cols-2");
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalCorrectClicks, setTotalCorrectClicks] = useState(0);
  const [currentTimerTime, setCurrentTimerTime] = useState(totalTime);
  const [bgSoundPlaying, setBgSoundPlaying] = useLocalStorage(
    "bgSound",
    "false"
  );
  const bgSoundRef = useRef(
    new Howl({
      src: ["/public/Sounds/backgroundSound.mp3"],
      preload: true,
      // onload: (error) => console.log("Loading Sound"),
      onplay: (id) => console.log("Playing Sound", id),
      onmute: (id) => console.log("Muted:", id),
      onplayerror: (id, error) => console.error("Play error", error),
      onloaderror: (id, error) => {
        console.error("Error loading sound:", error, id);
      },
      volume: 0.5,
    })
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    const bodyClasses = document.body.classList;

    if (bodyClasses.contains("dark")) {
      bodyClasses.remove("dark");
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
        bgSoundPlaying,
        setBgSoundPlaying,
        bgSoundRef,
      }}
    >
      {children}
    </gridSettings.Provider>
  );
};

export const useGridSettings = () => useContext(gridSettings);
