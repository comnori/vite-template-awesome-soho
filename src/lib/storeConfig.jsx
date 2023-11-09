import { configureStore } from "@reduxjs/toolkit";
import antdReducer from "features/antd/antdSlice";

/**
 * @typedef {Object} ReduxStore
 * @prop {import("./themeConfig").antdConfigState} antdConfig
 */

// TODO : hot reload 추가
const storeConfig = configureStore({
  reducer: { antdConfig: antdReducer },
});

export default storeConfig;
