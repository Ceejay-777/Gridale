import React, { useEffect } from "react";
// import Gameplay from "./Pages/Gameplay";
import MyRoutes from "./components/MyRoutes.jsx";
import { useGridSettings } from "./components/GridContext.jsx";

const App = () => {
  const { dark, setDark } = useGridSettings();

  return (
    <div className={`${dark ? "bg-black" : "bg-white"} min-h-screen`}>
      <MyRoutes />
    </div>
  );
};

export default App;
