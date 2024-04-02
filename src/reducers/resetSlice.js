import { createSlice } from "@reduxjs/toolkit";

const resetSlice = createSlice({
  name: "reset",
  initialState: {},
  reducers: {
    resetAll: () => ({}),
  },
});

export const { resetAll } = resetSlice.actions;
export default resetSlice.reducer;
