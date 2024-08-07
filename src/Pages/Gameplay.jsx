import React, { useEffect, useState, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  color_2x2_bg,
  generateGridslist,
  shuffle,
} from "../modules/gridGenerate";
import { useNavigate } from "react-router";
import Loading from "../Loaders/Loading";
import Timer from "../components/Timer";
import GridaleLogo from "../Loaders/GridaleLogo";
import MainButton from "../components/MainButton";
import PauseOverlay from "../components/PauseOverlay";
import MainGrid from "../components/MainGrid";
import {
  setTotalClicks,
  setTotalCorrectClicks,
  setTotalPossibleClicks,
} from "../modules/slices/gridSlice";
import { allgameSettings } from "../modules/slices/gameSettingsSlice";
import {
  buttonClickSound,
  nextGridSound,
  playSound,
} from "../modules/soundManager";

const Gameplay = () => {
  const { gridType } = useSelector((state) => state.grid);
  const { totalTime, gameMode, soundsPlaying } = useSelector(allgameSettings);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [started, setStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [restart, setRestart] = useState(false);
  const [gridsList, setGridsList] = useState();
  const totalClicksRef = useRef(0);
  const totalCorrectClicksRef = useRef(0);
  const totalPossibleClicksRef = useRef(0);
  const allGridsRef = useRef();
  const allGridsParentRef = useRef();
  const [animationSpeed, setAnimationSpeed] = useState();

  let gridListInfo, totalPossibleClicksInfo;

  const startComp = (
    <div className="flex flex-col items-center gap-8 w-full">
      <Loading />
      <MainButton
        background="bg-red-600"
        addStyles="w-full mt-0"
        onClick={() => setStarted(true)}
      >
        Start
      </MainButton>
      <MainButton
        background="bg-blue-600"
        addStyles="w-full"
        onClick={() => {
          navigate("/settings");
        }}
      >
        Settings
      </MainButton>
    </div>
  );

  useEffect(() => {
    switch (gameMode) {
      case "classic":
        [gridListInfo, totalPossibleClicksInfo] = generateGridslist(13, 16, 16);
        break;
      case "custom":
        switch (gridType) {
          case "grid2":
            switch (totalTime) {
              case 30:
                [gridListInfo, totalPossibleClicksInfo] = generateGridslist(
                  23,
                  0,
                  0
                );
                break;
              case 45:
                [gridListInfo, totalPossibleClicksInfo] = generateGridslist(
                  33,
                  0,
                  0
                );
                break;
              case 60:
                [gridListInfo, totalPossibleClicksInfo] = generateGridslist(
                  45,
                  0,
                  0
                );
                break;
            }
            break;
          case "grid3":
            switch (totalTime) {
              case 30:
                [gridListInfo, totalPossibleClicksInfo] = generateGridslist(
                  0,
                  23,
                  0
                );
                break;
              case 45:
                [gridListInfo, totalPossibleClicksInfo] = generateGridslist(
                  0,
                  33,
                  0
                );
                break;
              case 60:
                [gridListInfo, totalPossibleClicksInfo] = generateGridslist(
                  0,
                  45,
                  0
                );
                break;
            }
            break;
          case "grid4":
            switch (totalTime) {
              case 30:
                [gridListInfo, totalPossibleClicksInfo] = generateGridslist(
                  0,
                  0,
                  23
                );
                break;
              case 45:
                [gridListInfo, totalPossibleClicksInfo] = generateGridslist(
                  0,
                  0,
                  33
                );
                break;
              case 60:
                [gridListInfo, totalPossibleClicksInfo] = generateGridslist(
                  0,
                  0,
                  45
                );
                break;
            }
            break;
        }
    }
    setGridsList(gridListInfo);
    totalPossibleClicksRef.current = totalPossibleClicksInfo;
  }, [gridListInfo, totalPossibleClicksInfo]);

  useEffect(() => {
    return () => {
      dispatch(setTotalClicks(totalClicksRef.current));
      dispatch(setTotalCorrectClicks(totalCorrectClicksRef.current));
      dispatch(setTotalPossibleClicks(totalPossibleClicksRef.current));
    };
  }, []);

  useEffect(() => {
    if (started) {
      const container = allGridsRef.current;
      container.style.animationDuration = `${totalTime}s`;
    }
  }, [started]);

  useEffect(() => {
    if (started) {
      document.documentElement.style.setProperty(
        "--parentEleheight",
        `${allGridsParentRef.current.clientHeight}px`
      );
      setAnimationSpeed(allGridsRef.current.clientHeight / totalTime);

      if (isPaused) {
        allGridsRef.current.style.animationPlayState = "paused";
      } else {
        allGridsRef.current.style.animationPlayState = "running";
      }
    }
  }, [started, isPaused]);

  const theTimer = (
    <div className="mb-6 flex justify-between relative">
      <Timer isPaused={isPaused} />
      {/* <div className="flex gap-2">
          <button
            className="bg-red-500 w-8 h-8 rounded-lg p-1 hover:scale-105"
            onClick={() => setAnimationSpeed((prevSpeed) => (prevSpeed *= 1.5))}
          >
            +
          </button>
          <button
            className="bg-red-500 rounded-lg p-1 w-8 h-8 hover:scale-105"
            onClick={() => setAnimationSpeed((prevSpeed) => (prevSpeed /= 1.5))}
          >
            -
          </button>
          <button
            className="bg-red-500 rounded-lg p-1 hover:scale-105"
            onClick={() => addGrid(color_4x4_bg)}
          >
            Add grids
          </button>
        </div> */}
    </div>
  );

  const restartAnimation = () => {
    const element = allGridsRef.current;
    // Update the animation property to restart it
    element.style.animation = "none";

    // Force a reflow
    void element.offsetWidth;

    // Restore the animation property
    element.style.animation = "scrollUp";
    console.log(element.style.animation);
  };

  useEffect(() => {
    const adjustAnimationDuration = () => {
      const container = allGridsRef.current;
      if (container && animationSpeed) {
        const totalHeight = container.scrollHeight;
        const duration = totalHeight / animationSpeed;
        // console.log(duration, animationSpeed, totalHeight);
        container.style.animationDuration = `${duration}s`;
      }
    };

    adjustAnimationDuration();
  }, [gridsList, animationSpeed]);

  const addGrid = () => {
    setGridsList((prevList) => [...prevList, color_2x2_bg]);
  };

  return (
    <>
      {isPaused && (
        <PauseOverlay
          onCancle={() => setIsPaused(false)}
          onRestart={() => setStarted(false)}
          onSet={() => navigate("/settings")}
        />
      )}
      <div className="flex items-center flex-col justify-between max-h-screen h-screen pt-6">
        <div className="w-full flex justify-center items-center mb-12">
          <div className="fixed left-4">
            <GridaleLogo />
          </div>

          <h1
            className={
              "text-black dark:text-white capitalize font-bold text-sm md:text-xl"
            }
          >
            {gameMode} Mode
          </h1>
          <div className="fixed right-6 flex w-fit gap-2 ">
            {started && (
              <div
                className="h-10 w-10 p-1 bg-yellow-400 rounded-full hover:scale-110 md:w-14 md:h-14"
                onClick={() => {
                  setIsPaused(true);
                  playSound(buttonClickSound, soundsPlaying);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-full h-full text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            )}
            <div
              className="h-10 w-10 p-2 bg-green-700 rounded-full hover:scale-110 md:w-14 md:h-14"
              onClick={() => {
                navigate("/");
                playSound(nextGridSound, soundsPlaying);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-full h-full text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-4/5 max-w-[500px] md:mt-12 flex items-center flex-[1]">
          {started ? (
            <div className="w-full h-full flex flex-col">
              {theTimer}
              <div
                className="flex-[1] relative overflow-y-hidden"
                ref={allGridsParentRef}
              >
                <div ref={allGridsRef} className={`scrollUp absolute w-full`}>
                  {shuffle(gridsList).map((gridType, id) => {
                    return (
                      <MainGrid
                        gridType={gridType}
                        totalClicksRef={totalClicksRef}
                        totalCorrectClicksRef={totalCorrectClicksRef}
                        key={id}
                      />
                    );
                  })}
                  <p className="text-center text-white">All done</p>
                </div>
              </div>
            </div>
          ) : (
            startComp
          )}
        </div>
      </div>
    </>
  );
};

export default Gameplay;
