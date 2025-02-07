import { createSlice } from "@reduxjs/toolkit";

const initialState: { mode: string } = { mode: "light" };

export const appSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMode } = appSlice.actions;

export default appSlice.reducer;
