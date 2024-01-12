import React, { createContext, useContext, useState } from "react";
import { color_4x4_bg } from "./src/gridGenerate";
const gridSettings = createContext();

export const GridContext = ({ children }) => {
  const [gridColorList, setGridColorList] = useState(color_4x4_bg);
  const [gridColorNo, setGridColorNo] = useState(13);
  const [totalColorNo, setTotalColorNo] = useState(16);

  return (
    <gridSettings.Provider
      value={{
        gridColorList,
        setGridColorList,
        gridColorNo,
        setGridColorNo,
        totalColorNo,
        setTotalColorNo,
      }}
    >
      {children}
    </gridSettings.Provider>
  );
};

export const useGridSettings = () => useContext(gridSettings);
