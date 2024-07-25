import { createSlice } from "@reduxjs/toolkit";
import {
  getSessionStorage,
  setSessionStorage,
} from "../modules/getSessionStorage";
import { bgSound } from "../modules/soundManager";

const initialState = {
  gameMode: getSessionStorage("gameMode", "classic"),
  theme: getSessionStorage("theme", "dark"),
  totalTime: getSessionStorage("totalTime", 60),
  bgSoundPlaying: getSessionStorage("bgSoundPlaying", false),
  soundsPlaying: getSessionStorage("soundsPlaying", true),
  currentTime: 60,
};

const gameSettingsSlice = createSlice({
  name: "gameSettings",
  initialState,
  reducers: {
    setGameMode: (state, action) => {
      state.gameMode = action.payload;
      setSessionStorage("gameMode", action.payload);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      setSessionStorage("theme", action.payload);
    },
    setTotalTime: (state, action) => {
      state.totalTime = action.payload;
      setSessionStorage("totalTime", action.payload);
    },
    setBgSoundPlaying: (state, action) => {
      state.bgSoundPlaying = action.payload
      setSessionStorage("bgSoundPlaying", action.payload)
    },
    setSoundsPlaying: (state, action) => {
      state.soundsPlaying = action.payload
      setSessionStorage("soundsPlaying", action.payload)
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    decrementCurrent: (state) => {
        state.currentTime -= 0.1
    }
  },
});

export const { setGameMode, setTheme, setTotalTime, setCurrentTime, decrementCurrent, setBgSoundPlaying, setSoundsPlaying } =
  gameSettingsSlice.actions;
export const allgameSettings = (state) => state.gameSettings
export default gameSettingsSlice.reducer;
