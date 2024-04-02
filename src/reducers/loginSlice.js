import { createSlice } from "@reduxjs/toolkit";
import { resetAll } from "./resetSlice";

const initialState = {
  authRes: false,
  loginResponse: {},
};

const loginSlice = createSlice({
  name: "loginPage",
  initialState,
  reducers: {
    authentication: (state, action) => {
      state.loginResponse = action.payload;
      state.authRes = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetAll, () => {
      return loginSlice.getInitialState;
    });
  },
});

export const { authentication } = loginSlice.actions;
export default loginSlice.reducer;
