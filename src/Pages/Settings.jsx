import React, { useEffect, useState } from "react";
import MainButton from "../components/MainButton";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { setGridType } from "../modules/slices/gridSlice";
import {
  setTotalTime,
  setGameMode,
  setBgSoundPlaying,
  setSoundsPlaying,
  allgameSettings,
} from "../modules/slices/gameSettingsSlice";
import {
  bgSound,
  buttonClickSound,
  nextGridSound,
  playSound,
} from "../modules/soundManager";

const Settings = () => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [optionType, setOptionType] = useState();
  const {soundsPlaying} = useSelector(allgameSettings)
  const [selected, setSelected] = useState()

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
          background="bg-red-600"
          addStyles={'w-full ${selected === "mode" && }'}
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
        className={`bg-slate-200 w-3/5 h-full absolute right-0 top-0 transition-transform duration-200 dark:bg-black max-w-[600px] ${
          optionsOpen ? "translate-x-[0%]" : "translate-x-[100%]"
        } overflow-y-scroll py-4`}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className=" absolute top-4 left-4 p-2 rounded-full bg-red-600 hover:scale-105 w-fit"
          onClick={() => {
            playSound(nextGridSound, soundsPlaying)
            setOptionsOpen(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
        </div>
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
  const { bgSoundPlaying, soundsPlaying } = useSelector(
    (state) => state.gameSettings
  );
  const dispatch = useDispatch();

  return (
    <div className="w-4/5 h-full flex flex-col gap-8 text-black items-center dark:text-white justify-center mx-auto">
      <div className="flex flex-col gap-8">
        <div
          className="flex items-center gap-4"
          onClick={() => {
            playSound(buttonClickSound, soundsPlaying);
            if (bgSoundPlaying) {
              bgSound.pause();
              dispatch(setBgSoundPlaying(false));
            } else {
              bgSound.play();
              dispatch(setBgSoundPlaying(true));
            }
          }}
        >
          <div className="dark:border-white border-black w-9 h-9 border-2">
            {bgSoundPlaying && (
              <div className="p-1 bg-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="4"
                  stroke="currentColor"
                  className="w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
            )}
          </div>
          <p>Music</p>
        </div>
        <div
          className="flex items-center justify-between gap-4"
          onClick={() => {
            buttonClickSound.play();
            if (soundsPlaying) {
              dispatch(setSoundsPlaying(false));
            } else {
              dispatch(setSoundsPlaying(true));
            }
          }}
        >
          <div className="w-9 h-9 dark:border-white border-black border-2">
            {soundsPlaying && (
              <div className="p-1 bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="4"
                  stroke="currentColor"
                  className="w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
            )}
          </div>
          <p>Sounds</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
