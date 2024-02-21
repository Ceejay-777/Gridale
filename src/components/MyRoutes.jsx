import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Settings from "../Pages/Settings.jsx";
import Gameplay from "../Pages/Gameplay.jsx";
import Results from "../Pages/Results.jsx";
import Loading from "../Loaders/Loading.jsx";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="game" element={<Gameplay />} />
        <Route path="result" element={<Results />} />
        <Route path="loading" element={<Loading />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;