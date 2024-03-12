import React, { useEffect } from "react";
import GameClassic from "./GameClassic";
import GameCustom from "./GameCustom";
import { useGridSettings } from "../components/GridContext";

const Gameplay = () => {
  const { gameMode } = useGridSettings();
  useEffect(() => console.log(gameMode), [])
  return (
    <div className="">{gameMode === "classic" ? <GameClassic /> : <GameCustom />}</div>
  );
};

export default Gameplay;
