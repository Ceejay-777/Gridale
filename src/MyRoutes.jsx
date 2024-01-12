import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Gameplay from "./Pages/Gameplay";
import Results from "./Pages/Results";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="game" element={<Gameplay />} />
        <Route path="result" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;