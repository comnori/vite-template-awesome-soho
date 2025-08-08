/**
 * @typedef {"dark" | "light"} themeTypeName
 *
 * @typedef {Object} antdConfigState
 * @prop {import("antd").ThemeConfig} [designToken]
 * @prop {import("antd/es/locale").Locale} [locale]
 * @prop {import("antd/es/config-provider/SizeContext").SizeType} [componentSize]
 * @prop {themeTypeName} themeName
 */

const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
const systemTheme =
  typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

/** @type {antdConfigState} */
const themeConfig = {
  themeName: savedTheme || systemTheme,
  designToken: {
    token: {
      colorPrimary: "#722ed1",
    },
    components: {
      Layout: {
        headerHeight: 64,
      },
      Button: {
        borderRadius: 2,
      },
    },
  },
  componentSize: "middle",
};

export default themeConfig;
