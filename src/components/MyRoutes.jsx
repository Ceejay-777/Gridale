import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Settings from "../Pages/Settings.jsx";
import Results from "../Pages/Results.jsx";
import Gameplay from "../Pages/Gameplay.jsx";
import Info from "../Pages/Info.jsx";

const MyRoutes = () => {
  return (
    <div className="w-full min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="game" element={<Gameplay />} />
          <Route path="result" element={<Results />} />
          <Route path="info/:page" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MyRoutes;
