import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "./slices/gridSlice";
import gameSettingsReducer from "./slices/gameSettingsSlice"

export const store = configureStore({
  reducer: {
    grid: gridReducer,
    gameSettings: gameSettingsReducer,
  },
});
