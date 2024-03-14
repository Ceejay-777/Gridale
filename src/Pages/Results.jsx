import React from "react";
import MainButton from "../components/MainButton";
import { useNavigate } from "react-router";

const Results = () => {
  const navigate = useNavigate();
  return (
    <MainButton background={"bg-yellow-400"} onClick={() => navigate("/game")}>
      Play Again
    </MainButton>
  );
};

export default Results;
