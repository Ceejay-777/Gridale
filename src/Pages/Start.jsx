import React from "react";
import MainButton from "../components/MainButton";
import Loading from "../Loaders/Loading";

const Start = () => {
  return (
    <div className="flex flex-col items-center gap-8">
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
};

export default Start;
