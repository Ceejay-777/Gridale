import { createSlice } from "@reduxjs/toolkit";
import { getSessionStorage, setSessionStorage } from "../getSessionStorage";

const initialState = {
  gridType: getSessionStorage("gridType", "grid2"),
  totalClicks: 0,
  totalCorrectClicks: 0,
  totalPossibleClicks: 0,
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    setGridType: (state, action) => {
      state.gridType = action.payload;
      setSessionStorage("gridType", action.payload)
    },
    setTotalClicks: (state, action) => {
      state.totalClicks = action.payload;
    },
    setTotalCorrectClicks: (state, action) => {
      state.totalCorrectClicks = action.payload;
    },
    setTotalPossibleClicks: (state, action) => {
      state.totalPossibleClicks = action.payload;
    },
  },
});

export const {
  setGridType,
  setTotalClicks,
  setTotalCorrectClicks,
  setTotalPossibleClicks,
} = gridSlice.actions;
export default gridSlice.reducer;
