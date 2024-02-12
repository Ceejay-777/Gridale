import React from "react";
import GameClassic from "./GameClassic";
import GameCustom from "./GameCustom";
import { useGridSettings } from "../../GridContext";

const Gameplay = () => {
  const { customMode, classicMode } = useGridSettings();
  return <div>{classicMode ? <GameClassic /> : <GameCustom />}</div>;
};

export default Gameplay;
