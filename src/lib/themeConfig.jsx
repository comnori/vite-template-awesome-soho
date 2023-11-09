/**
 * @typedef {"dark" | "light"} themeTypeName
 *
 * @typedef {Object} antdConfigState
 * @prop {import("antd").ThemeConfig} [designToken]
 * @prop {import("antd/es/locale").Locale} [locale]
 * @prop {import("antd/es/config-provider/SizeContext").SizeType} [componentSize]
 * @prop {themeTypeName} themeName
 */

/** @type {themeTypeName} */
const getSystemCurrentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

/** @type {antdConfigState} */
const themeConfig = {
  themeName: getSystemCurrentTheme,
  designToken: {
    components: {
      Layout: {
        headerHeight: 64,
      },
    },
  },
  componentSize: "middle",
};

export default themeConfig;
