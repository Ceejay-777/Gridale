import React from "react";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <button
        onClick={() => {
          navigate("/game");
        }}
        className="p-4 border-2 border-black mt-8"
      >
        Game
      </button>
    </div>
  );
};

export default Home;
