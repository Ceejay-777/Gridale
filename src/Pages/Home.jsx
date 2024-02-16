import React from "react";
import { useNavigate } from "react-router";
import Theme from "../Theme";
import GridaleLoader from "../Loaders/GridaleLoader";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <Theme />
      <GridaleLoader />
      {/* <div className="text-8xl text-center mt-48">GRIDALE</div> */}
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={() => {
            navigate("/game");
          }}
          className="px-[1.5rem] py-[1rem] border-2 rounded-xl border-black mt-8 w-4/5 bg-yellow-400  text-lg font-bold hover:scale-110"
        >
          Play
        </button>
        <button
          onClick={() => {
            navigate("/game");
          }}
          className="px-[1.5rem] py-[1rem] border-2 border-black mt-8 w-4/5 bg-blue-700 rounded-xl text-lg font-bold hover:scale-110"
        >
          Settings
        </button>
        <button
          onClick={() => {
            navigate("/game");
          }}
          className="px-[1.5rem] py-[1rem] border-2 border-black mt-8 bg-red-600 rounded-xl w-4/5 text-lg font-bold hover:scale-110"
        >
          About
        </button>
      </div>
    </div>
  );
};

export default Home;
