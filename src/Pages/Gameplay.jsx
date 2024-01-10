import React from "react";
import { randomColors, primaryColor } from "../data";

const Gameplay = () => {
  return (
    <div>
      <div className="flex mb-16">
        {randomColors.map((color) => {
          return <div key={color} className={`w-8 h-8 ${color}`}></div>;
        })}
      </div>

      <div className={`w-12 h-12 ${primaryColor}`}></div>
    </div>
  );
};

export default Gameplay;
