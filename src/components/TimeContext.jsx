import React, { useContext, useState, createContext } from "react";
import { useGridSettings } from "./GridContext";
const timeContext = createContext();

export const TimeContext = ({ children }) => {
  const { totalTime } = useGridSettings();
  const [currentTimerTime, setCurrentTimerTime] = useState(totalTime);

  return (
    <timeContext.Provider value={{currentTimerTime, setCurrentTimerTime}}>
        {children}
    </timeContext.Provider>
  )
};

export const useTimeContext = () => useContext(timeContext)
