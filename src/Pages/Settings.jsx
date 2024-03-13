import React, { useRef, useState } from "react";
import { useGridSettings } from "../components/GridContext";
import { color_2x2_bg, color_3x3_bg, color_4x4_bg } from "../gridGenerate";
import { useNavigate} from "react-router";
// import {useHistory} from "react-router-dom"

const Settings = () => {
  const navigate = useNavigate();

  const [optionsOpen, setOptionsOpen] = useState(false);
  const [optionType, setOptionType] = useState();

  const handleBodyClick = (event) => {
    if (optionsOpen && (event.target.id === "mainBody") ) {
      setOptionsOpen(false)
    }
  }

  return (
    <div className="dark:text-white flex justify-center items-center min-h-screen p-4" onClick={handleBodyClick} id="mainBody">
      <div
        className="absolute top-4 left-4 p-2 rounded-full bg-blue-700 hover:scale-110"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.0"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </div>
      <div className="w-4/5 flex flex-col">
        <button
          className="px-[1.5rem] py-[1rem] bg-red-600 rounded-xl text-lg font-bold hover:scale-110"
          onClick={() => {
            setOptionsOpen(true);
            setOptionType("mode");
          }}
        >
          Mode
        </button>
        <button className="px-[1.5rem] py-[1rem] mt-8 bg-yellow-400 rounded-xl text-lg font-bold hover:scale-110">
          Sound
        </button>
      </div>
      <div
        className={`bg-white w-3/5 min-h-screen absolute z-20 right-0 transition-transform duration-200 dark:bg-black ${
          optionsOpen ? "translate-x-[0%]" : "translate-x-[100%]"
        }` }
      >
        {optionType === "mode" && <ModeSelect setOptionType={setOptionType}/>}
        {optionType === "customSettings" && <CustomSettings />}
      </div>
    </div>
  );
};

const ModeSelect = ({setOptionType}) => {
  const { setGameMode, setTotalTime} = useGridSettings();
  return (
    <div className="w-full min-h-screen flex justify-center items-center dark:text-black">
      <div className="flex flex-col justify-center w-4/5">
        <button
          className="text-lg font-semibold rounded-2xl bg-green-600 p-4 hover:scale-110"
          onClick={() => {
            setGameMode("classic");
            setTotalTime(30)
          }}
        >
          Classic
        </button>
        <button
          className="text-lg font-semibold rounded-2xl bg-blue-700 p-4 mt-8 hover:scale-110"
          onClick={() => {
            setGameMode("custom");
            setOptionType("customSettings");
          }}
        >
          Custom
        </button>
      </div>
    </div>
  );
};

const CustomSettings = () => {
  const { setGridColorList, setGridColorNo, setTotalColorNo, setTotalTime, setGridType } =
    useGridSettings();
  return (
    <div className="w-full min-h-screen flex justify-center items-center dark:text-white flex-col gap-8 max-w-[350px] mx-auto">
      <div className="w-full">
        <h3 className="text-center mb-4">Grid Type</h3>
        <div className="flex flex-col gap-4">
          <button
            className=" bg-orange-600 rounded-2xl text-lg font-semibold mx-8 p-4 border-black dark:border-white hover:scale-110"
            onClick={() => {
              setGridColorList(color_2x2_bg);
              setTotalColorNo(4);
              setGridColorNo(4);
              setGridType("grid-cols-2")
            }}
          >
            2 x 2
          </button>
          <button
            className="bg-green-600 rounded-2xl text-lg font-semibold mx-8 p-4 border-black dark:border-white hover:scale-110"
            onClick={() => {
              setGridColorList(color_3x3_bg);
              setTotalColorNo(9);
              setGridColorNo(7);
              setGridType("grid-cols-3");
            }}
          >
            3 x 3
          </button>
          <button
            className="bg-yellow-400 rounded-2xl text-lg font-semibold mx-8 p-4 border-black dark:border-white hover:scale-110"
            onClick={() => {
              setGridColorList(color_4x4_bg);
              setTotalColorNo(16);
              setGridColorNo(13);
              setGridType("grid-cols-4");
            }}
          >
            4 x 4
          </button>
        </div>
      </div>

      <div className="w-full">
        <h3 className="text-center text-black dark:text-white mb-4">
          Total time
        </h3>
        <div className="w-full flex flex-col gap-4">
          <button
            className="bg-blue-600 rounded-2xl text-lg font-semibold mx-8 p-4 hover:scale-110"
            onClick={() => setTotalTime(30)}
          >
            30 secs
          </button>
          <button
            className="bg-orange-600 rounded-2xl text-lg font-semibold mx-8 p-4 hover:scale-110"
            onClick={() => setTotalTime(45)}
          >
            45 secs
          </button>
          <button
            className="bg-red-600 rounded-2xl text-lg font-semibold mx-8 p-4 hover:scale-110"
            onClick={() => setTotalTime(60)}
          >
            60 secs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
