import React from "react";
import { randomColors, primaryColor } from "../gridGenerate";

const Gameplay = () => {
  return (
    <div>
      <div className={`w-12 h-12 mb-16 ${primaryColor}`}></div>

      <div className="grid grid-cols-4 gap-4">
        {randomColors.map((color, index) => {
          return <div key={index} className={`w-12 h-12 ${color}`}></div>;
        })}
      </div>
    </div>
  );
};

export default Gameplay;
