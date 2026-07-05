import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CounterReducer";

export let store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
