import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Settings from "../Pages/Settings.jsx";
import Results from "../Pages/Results.jsx";
import Loading from "../Loaders/Loading.jsx";
import GameCustom from "../Pages/GameCustom.jsx";
import About from "../Pages/About.jsx";
import Gameplay from "../Pages/Gameplay.jsx";

const MyRoutes = () => {
  return (
    <div className="w-full min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="game" element={<Gameplay />} />
          <Route path="result" element={<Results />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MyRoutes;
