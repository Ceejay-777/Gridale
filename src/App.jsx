import React, { useEffect, useRef } from "react";
import MyRoutes from "./components/MyRoutes.jsx";
import { useGridSettings } from "./components/GridContext.jsx";
import Timer from "./components/Timer.jsx";
import GridaleLogo from "./Loaders/GridaleLogo.jsx";
import PauseOverlay from "./components/PauseOverlay.jsx";
import { useSelector } from "react-redux";
import { setSessionStorage } from "./modules/getSessionStorage.js";

const App = () => {
  const backgroundSoundRef = useRef(null);
  const { bgSoundPlaying, setBgSoundPlaying, bgSoundRef } = useGridSettings();
  const {theme} = useSelector((state) => state.gameSettings)

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

  // useEffect(() => {
  //   if (bgSoundPlaying === "false") {
  //     bgSoundRef.current.play();
  //   } else bgSoundRef.current.pause();
  // }, [bgSoundPlaying]);

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
