import React, { createContext, useContext, useState } from "react";
const gridSettings = createContext();

export const GridContext = ({ children }) => {
  const [gridColorNo, setGridColorNo] = useState();
  const [totalColorNo, setTotalColorNo] = useState();

  return (
    <gridSettings.Provider
      value={[gridColorNo, setGridColorNo, totalColorNo, setTotalColorNo]}
    >
      {children}
    </gridSettings.Provider>
  );
};

export const useGridSettings = () => useContext(gridSettings);
