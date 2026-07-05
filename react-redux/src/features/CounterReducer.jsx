import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count === 0) {
        return;
      }
      state.count--;
    },
    incrementbyvalue: (state, action) => {
      state.count += Number(action.payload);
    },
  },
});

export let { increment, decrement, incrementbyvalue } = counterSlice.actions;
export default counterSlice.reducer;
