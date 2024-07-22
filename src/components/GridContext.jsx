import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { color_2x2_bg } from "../modules/gridGenerate";
import useSessionStorage from "../modules/useSessionStorage";
import { Howl } from "howler";
const gridSettings = createContext();

export const GridContext = ({ children }) => {
  // const [gridColorList, setGridColorList] = useSessionStorage(
  //   "gridColorList",
  //   "grid2"
  // );
  // const [gameMode, setGameMode] = useSessionStorage("gameMode", "classic");
  // const [totalTime, setTotalTime] = useSessionStorage("totalTime", 60);
  // const [theme, setTheme] = useSessionStorage("theme", "dark");
  // const [totalClicks, setTotalClicks] = useState(0);
  // const [totalCorrectClicks, setTotalCorrectClicks] = useState(0);
  // const [totalPossibleClicks, setTotalPossibleClicks] = useState(0);
  // const [currentTimerTime, setCurrentTimerTime] = useState(totalTime);
  const [bgSoundPlaying, setBgSoundPlaying] = useState("false");
  const bgSoundRef = useRef(
    new Howl({
      src: ["/Sounds/backgroundSound.mp3"],
      preload: true,
      loop: true,
      onplay: (id) => console.log("Playing Sound", id),
      onpause: (id) => console.log("Paused Sound", id),
      onmute: (id) => console.log("Muted:", id),
      onplayerror: (id, error) => console.error("Play error", error),
      onloaderror: (id, error) => {
        console.error("Error loading sound:", error, id);
      },
      volume: 0.5,
    })
  );
  const gridCorrectClickSoundRef = useRef(
    new Howl({
      src: ["/Sounds/interfaceWav.wav"],
      preload: true,
      onloaderror: (id, error) => {
        console.error("Error loading sound:", error, id);
      },
      volume: 0.5,
    })
  );
  const gridWrongClickSoundRef = useRef(
    new Howl({
      src: ["/Sounds/wrong.mp3"],
      preload: true,
      onloaderror: (id, error) => {
        console.error("Error loading sound:", error, id);
      },
      volume: 0.5,
    })
  );
  const nextGridSoundRef = useRef(
    new Howl({
      src: ["/Sounds/nextGrid.mp3"],
      preload: true,
      onloaderror: (id, error) => {
        console.error("Error loading sound:", error, id);
      },
      volume: 0.5,
    })
  );
  const timeUpSoundRef = useRef(
    new Howl({
      src: ["/Sounds/timeUp.mp3"],
      preload: true,
      onloaderror: (id, error) => {
        console.error("Error loading sound:", error, id);
      },
      volume: 0,
    })
  );

  // useEffect(() => {
  //   return (() => Howler.stop())
  // }, [])

  return (
    <gridSettings.Provider
      value={{
        // gridColorList,
        // setGridColorList,
        // gameMode,
        // setGameMode,
        // totalTime,
        // setTotalTime,
        // theme,
        // setTheme,
        // totalClicks,
        // setTotalClicks,
        // currentTimerTime,
        // setCurrentTimerTime,
        // totalCorrectClicks,
        // setTotalCorrectClicks,
        // totalPossibleClicks,
        // setTotalPossibleClicks,
        bgSoundPlaying,
        setBgSoundPlaying,
        bgSoundRef,
        gridCorrectClickSoundRef,
        gridWrongClickSoundRef,
        nextGridSoundRef,
        timeUpSoundRef,
      }}
    >
      {children}
    </gridSettings.Provider>
  );
};

export const useGridSettings = () => useContext(gridSettings);
