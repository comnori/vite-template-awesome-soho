import enTranslation from "config/i18n/en/translation.json";
import jaTranslation from "config/i18n/ja/translation.json";
import koTranslation from "config/i18n/ko/translation.json";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko: {
        translation: koTranslation,
      },
      en: {
        translation: enTranslation,
      },
      ja: {
        translation: jaTranslation,
      },
    },
    fallbackLng: "ko",
    supportedLngs: ["ko", "en", "ja"],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
