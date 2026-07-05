import {configureStore} from "@reduxjs/toolkit";
import SongReducer from "../features/SongReducer";
import AuthSlice from "../features/AuthSlice";

export let store = configureStore({
  reducer: {
    music: SongReducer,
    auth : AuthSlice ,
  },
});
