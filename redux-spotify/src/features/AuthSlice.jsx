import { createSlice, current } from "@reduxjs/toolkit";

let authSlice = createSlice({
  name: "auth",
  initialState: {
    registerdUser: null,
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    registerUser: (state, action) => {
      state.registerdUser = action.payload;
      console.log(current(state));
    },
    loginUser: (state, action) => {
      if (
        state.registerdUser &&
        state.registerdUser.email === action.payload.email
      ) {
        state.user = action.payload;
        state.isAuthenticated = true;
        console.log(current(state));
        alert("Login Succesfully.....");
      } else {
        alert("email are not same.....");
      }
    },
    logoutUser: (state) => {
        state.user = null;
        state.isAuthenticated = false;
    },
  },
});

export let { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
