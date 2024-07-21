import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "../slices/TimerSlice";
import gridReducer from "../slices/gridSlice";
import gameSettingsReducer from "../slices/gameSettingsSlice"

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    grid: gridReducer,
    gameSettings: gameSettingsReducer,
  },
});
