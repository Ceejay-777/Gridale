import { useEffect, useRef, useState } from "react";
import { useGridSettings } from "./GridContext";
import { useTimeContext } from "./TimeContext";

export const useTimer = () => {
  const { totalTime } = useGridSettings();
  // const [isPaused, setIsPaused] = useState(false);

  
  return { Timer };
};
