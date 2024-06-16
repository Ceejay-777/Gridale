import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Theme from "../components/Theme";
import GridaleLoader from "../Loaders/GridaleLoader";
import Cee from "../assets/Cee.png";
import MainButton from "../components/MainButton";
import { useGridSettings } from "../components/GridContext";
import Sound from "../components/Sound";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 min-h-screen 2 lg:p-12 flex flex-col justify-between items-center">
      <div className="ml-auto flex gap-2 md:gap-6 w-fit items-center">
        <Sound />
        <Theme />
      </div>
      <div className="md:flex justify-around items-center gap-12 my-12 max-w-[1200px] mx-auto lg:my-20 w-full">
        <GridaleLoader />
        <div className="flex flex-col justify-center items-center flex-grow max-w-[400px] gap-8 mx-auto md:mx-0">
          <MainButton
            background="bg-yellow-400"
            onClick={() => {
              navigate("/game");
            }}
          >
            Play
          </MainButton>
          <MainButton
            background="bg-blue-700"
            onClick={() => navigate("/settings")}
          >
            Settings
          </MainButton>
          <MainButton
            background="bg-red-700"
            onClick={() => navigate("/about")}
          >
            About
          </MainButton>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center mt-10">
        <p className="text-xs dark:text-white text-center ">
          Developed by CeeJay
        </p>
        <div className="w-6 h-6 inline-block rounded-sm dark:border-2 dark:border-white">
          <img src={Cee} alt="Ceejay" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
