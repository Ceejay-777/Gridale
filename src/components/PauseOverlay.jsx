import React from 'react'
import MainButton from './MainButton'
import Theme from './Theme';

const PauseOverlay = ({onCancle, onRestart, onSet}) => {
  return (
    <div className="absolute w-full h-full flex justify-center items-center z-40 bg-black/50 dark:bg-white/50" onClick={onCancle}>
      <div className="dark:bg-black w-4/5 max-w-[600px] max-h-[500px] h-3/5 rounded-2xl flex items-center justify-center flex-col bg-white relative">
        <div className="ml-auto rounded-full mr-4 absolute top-6 right-2">
          <Theme />
        </div>
        <div className="mx-auto flex items-center justify-center gap-8 flex-col w-4/5">
          <MainButton background="bg-yellow-400" onClick={onRestart}>Restart</MainButton>
          <MainButton background="bg-green-700" onClick={onSet}>Settings</MainButton>
          <MainButton background="bg-red-700" addStyles="mt-0" onClick={onCancle}>
            Cancle
          </MainButton>
        </div>
      </div>
    </div>
  );
}

export default PauseOverlay
