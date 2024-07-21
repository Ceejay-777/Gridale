import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 6
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    increment: (state) => {
      state.totalTime -= 1;
    },
    decrement: (state) => {
      state.totalTime -= 1;
    },
    reset: (state) => {
      state.totalTime = 0;
    },
  },
});

export const { increment, decrement, reset } = timerSlice.actions;
export default timerSlice.reducer;
