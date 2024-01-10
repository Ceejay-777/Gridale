import React from "react";
import { color_2x2_bg } from "../data";

const Gameplay = () => {
  return (
    <div>
      {color_2x2_bg.map((color) => {
        // const background = `bg-${color}-500`;
        // const background = `bg-yellow-500`;
        return <div key={color} className={`w-8 h-8 ${color} bg-`}></div>;
      })}
    </div>
  );
};

export default Gameplay;
