import enTranslation from "config/i18n/en/translation.json";
import koTranslation from "config/i18n/ko/translation.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ko: {
      translation: koTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
  fallbackLng: "ko",
  supportedLngs: ["ko", "en"],
});

export default i18n;
