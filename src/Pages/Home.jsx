import React from "react";
import { useNavigate } from "react-router";
import Theme from "../Theme";
import GridaleLoader from "../Loaders/GridaleLoader";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Theme />
      <GridaleLoader />
      {/* <div className="text-8xl text-center mt-48">GRIDALE</div> */}
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={() => {
            navigate("/game");
          }}
          className="px-[1.5rem] py-[1rem] border-2 rounded-lg border-black mt-8"
        >
          Play
        </button>
        <button
          onClick={() => {
            navigate("/game");
          }}
          className="px-[1.5rem] py-[1rem] border-2 border-black mt-8"
        >
          Settings
        </button>
        <button
          onClick={() => {
            navigate("/game");
          }}
          className="px-[1.5rem] py-[1rem] border-2 border-black mt-8"
        >
          About
        </button>
      </div>
    </div>
  );
};

export default Home;
