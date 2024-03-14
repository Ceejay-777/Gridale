import React, { useEffect } from "react";
// import Gameplay from "./Pages/Gameplay";
import MyRoutes from "./components/MyRoutes.jsx";
import { useGridSettings } from "./components/GridContext.jsx";
import Gameplay from "./Pages/Gameplay.jsx";
import Timer from "./components/Timer.jsx";
import GridaleLogo from "./Loaders/GridaleLogo.jsx";
import PauseOverlay from "./components/PauseOverlay.jsx";

const App = () => {
  const { dark } = useGridSettings();

  return (
    <div className={`bg-white dark:bg-black min-h-screen`}>
      <MyRoutes />
      {/* <Timer /> */}
      {/* <GridaleLogo /> */}
      {/* <PauseOverlay /> */}
    </div>
  );
};

export default App;
