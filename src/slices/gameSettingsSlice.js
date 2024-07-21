import { createSlice } from "@reduxjs/toolkit";
import {
  getSessionStorage,
  setSessionStorage,
} from "../modules/getSessionStorage";

const initialState = {
  gameMode: getSessionStorage("gameMode", "classic"),
  theme: getSessionStorage("theme", "dark"),
  totalTime: getSessionStorage("totalTime", 60),
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
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    decrementCurrent: (state) => {
        state.currentTime -= 1
    }
  },
});

export const { setGameMode, setTheme, setTotalTime, setCurrentTime, decrementCurrent } =
  gameSettingsSlice.actions;
export default gameSettingsSlice.reducer;
