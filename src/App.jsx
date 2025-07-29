/* eslint-disable camelcase */
import { ConfigProvider, theme as antdTheme } from "antd";
import en_US from "antd/locale/en_US";
import ko_KR from "antd/locale/ko_KR";
import Router from "config/Router";
import LoggerProvider from "context/Logger/components/LoggerProvider";
import WebVitals from "lib/components/WebVitals";
import "lib/i18nextConfig";
import getLogger from "lib/pinoConfig";
import storeConfig from "lib/storeConfig";
import { useTranslation } from "react-i18next";
import { Provider as ReduxProvicer, useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Loading } from "./pages";

// TODO : Redux store로 이동
const extendedRouter = createBrowserRouter(Router, { basename: import.meta.env.BASE_URL });

const algorithmList = {
  light: antdTheme.defaultAlgorithm,
  dark: antdTheme.darkAlgorithm,
};

const languageList = {
  ko: ko_KR,
  en: en_US,
};

function Main() {
  const { designToken, themeName, componentSize } = useSelector(
    /** @param {import("lib/storeConfig").ReduxStore} state */ (state) => state.antdConfig,
  );

  const {
    i18n: { language },
  } = useTranslation();

  return (
    <ConfigProvider
      // @ts-ignore
      locale={languageList[language]}
      theme={{ ...designToken, algorithm: algorithmList[themeName] }}
      componentSize={componentSize}>
      <RouterProvider
        router={extendedRouter}
        fallbackElement={<Loading />}
      />
    </ConfigProvider>
  );
}

function App() {
  return (
    <WebVitals>
      <LoggerProvider logger={getLogger()}>
        <ReduxProvicer store={storeConfig}>
          <Main />
        </ReduxProvicer>
      </LoggerProvider>
    </WebVitals>
  );
}

export default App;
