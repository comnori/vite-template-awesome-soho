/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import themeConfig from "lib/themeConfig";

export const antdSlice = createSlice({
  name: "antdConfig",
  initialState: themeConfig,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.themeName === "light" ? "dark" : "light";
      state.themeName = newTheme;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
    },
  },
});

export const { toggleTheme } = antdSlice.actions;

export default antdSlice.reducer;
