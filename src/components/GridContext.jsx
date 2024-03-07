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
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const val = localStorage.getItem("dark");
    console.log(typeof val);
    if (val) {
      console.log("It exists as", typeof JSON.parse(val), JSON.parse(val));
      setDark(JSON.parse(val));
    } else {
      console.log("It does not exist yet");
    }
  }, []);

  useEffect(() => {
    console.log(
      "I changed it to",
      typeof JSON.stringify(dark),
      JSON.stringify(dark)
    );
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

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
