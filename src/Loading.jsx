import React from "react";
import "./loader.css";

const Loading = () => {
  return (
    <div class="loader">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square last"></div>
      <div class="square clear"></div>
      <div class="square"></div>
      <div class="square last"></div>
      <div class="square clear"></div>
      <div class="square"></div>
      <div class="square last"></div>
    </div>
  );
};

export default Loading;
