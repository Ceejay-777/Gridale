import React, { useEffect, useRef } from "react";
import MyRoutes from "./components/MyRoutes.jsx";
import Timer from "./components/Timer.jsx";
import GridaleLogo from "./Loaders/GridaleLogo.jsx";
import PauseOverlay from "./components/PauseOverlay.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setSessionStorage } from "./modules/getSessionStorage.js";
import { bgSound } from "./modules/soundManager.js";
import { setBgSoundPlaying } from "./slices/gameSettingsSlice.js";

const App = () => {
  const { theme, bgSoundPlaying } = useSelector((state) => state.gameSettings);
  const firstRenderRef = useRef(true);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(bgSound.playing())
    dispatch(setBgSoundPlaying(bgSound.playing()))
  }, [bgSound.playing()])

  useEffect(() => {
    setSessionStorage("theme", theme);

    const bodyClasses = document.body.classList;

    if (bodyClasses.contains("dark")) {
      bodyClasses.remove("dark");
    } else if (bodyClasses.contains("light")) {
      bodyClasses.remove("light");
    }
    bodyClasses.add(theme);
  }, [theme]);

  return (
    <div
      className={`bg-slate-200 dark:bg-black min-h-screen transition-all duration-200 flex items-center min-w-[320px]`}
    >
      <MyRoutes />
      {/* <Test /> */}
      {/* <Timer /> */}
      {/* <GridaleLogo /> */}
      {/* <PauseOverlay /> */}
    </div>
  );
};

export default App;
