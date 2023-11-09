/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import themeConfig from "lib/themeConfig";

export const antdSlice = createSlice({
  name: "antdConfig",
  initialState: themeConfig,
  reducers: {
    toggleTheme: (state) => {
      const { themeName } = state;
      state.themeName = themeName === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = antdSlice.actions;

export default antdSlice.reducer;
