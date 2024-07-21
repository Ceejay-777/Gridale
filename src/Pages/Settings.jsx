import React, { useState } from "react";
import { useNavigate } from "react-router";
import MainButton from "../components/MainButton";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { setGridType } from "../slices/gridSlice";
import { setSessionStorage } from "../modules/getSessionStorage";
import { setTotalTime, setGameMode } from "../slices/gameSettingsSlice";

const Settings = () => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [optionType, setOptionType] = useState();

  return (
    <div
      className="dark:text-white flex justify-center items-center min-h-screen p-4 relative overflow-x-hidden"
      onClick={() => {
        if (optionsOpen) {
          setOptionsOpen(false);
        }
      }}
    >
      <BackButton />
      <div className="w-4/5 flex flex-col gap-8 text-white items-center dark:text-black">
        <MainButton
          background=" bg-red-600"
          addStyles="w-full"
          onClick={(event) => {
            event.stopPropagation();
            setOptionsOpen(true);
            setOptionType("mode");
          }}
        >
          Mode
        </MainButton>
        <MainButton
          background="bg-yellow-400"
          addStyles="w-full"
          onClick={(event) => {
            event.stopPropagation();
            setOptionsOpen(true);
            setOptionType("soundSettings");
          }}
        >
          Sound
        </MainButton>
      </div>
      <div
        className={`bg-white w-3/5 h-full absolute right-0 top-0 transition-transform duration-200 dark:bg-black max-w-[600px] ${
          optionsOpen ? "translate-x-[0%]" : "translate-x-[100%]"
        } overflow-y-scroll`}
        onClick={(event) => event.stopPropagation()}
      >
        {optionType === "mode" && <ModeSelect setOptionType={setOptionType} />}
        {optionType === "customSettings" && <CustomSettings />}
        {optionType === "soundSettings" && <SoundSettings />}
      </div>
    </div>
  );
};

const ModeSelect = ({ setOptionType }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full min-h-screen flex justify-center items-center text-white dark:text-black">
      <div className="flex flex-col justify-between items-center gap-6 w-4/5">
        <MainButton
          background="bg-green-600"
          addStyles={"mb-8"}
          onClick={() => {
            dispatch(setGameMode("classic"));
            dispatch(setTotalTime(60));
          }}
        >
          Classic
        </MainButton>
        <MainButton
          background="bg-blue-700"
          addStyles={"mb-8"}
          onClick={() => {
            dispatch(setGameMode("custom"));
            setOptionType("customSettings");
          }}
        >
          Custom
        </MainButton>
        <MainButton
          background="bg-orange-600"
          onClick={() => {
            dispatch(setGameMode("survival"));
          }}
        >
          Survival
        </MainButton>
      </div>
    </div>
  );
};

const CustomSettings = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full min-h-screen flex justify-center items-center dark:text-white flex-col gap-8 max-w-[350px] mx-auto">
      <div className="w-full">
        <h3 className="text-center mb-4">Grid Type</h3>
        <div className="w-4/5 mx-auto flex flex-col items-center gap-6">
          <MainButton
            background=" bg-orange-600"
            onClick={() => {
              dispatch(setGridType("grid2"));
            }}
          >
            2 x 2
          </MainButton>
          <MainButton
            background="bg-green-600"
            onClick={() => {
              dispatch(setGridType("grid3"));
            }}
          >
            3 x 3
          </MainButton>
          <MainButton
            background="bg-yellow-400"
            onClick={() => {
              dispatch(setGridType("grid4"));
            }}
          >
            4 x 4
          </MainButton>
        </div>
      </div>

      <div className="w-full">
        <h3 className="text-center text-black dark:text-white mb-4">
          Total time
        </h3>
        <div className="w-4/5 mx-auto flex flex-col items-center gap-6">
          <MainButton
            background="bg-blue-600"
            onClick={() => {
              dispatch(setTotalTime(30));
            }}
          >
            30 secs
          </MainButton>
          <MainButton
            background="bg-orange-600"
            onClick={() => {
              dispatch(setTotalTime(45));
            }}
          >
            45 secs
          </MainButton>
          <MainButton
            background="bg-red-600"
            onClick={() => {
              dispatch(setTotalTime(60));
            }}
          >
            60 secs
          </MainButton>
        </div>
      </div>
    </div>
  );
};

const SoundSettings = () => {
  return (
    <div className="w-4/5 flex flex-col gap-8 text-white items-center dark:text-black">
      <div>
        <div className="border-2 w-8 h-8 dark:border-white border-black"></div>
      </div>
    </div>
  );
};

export default Settings;
