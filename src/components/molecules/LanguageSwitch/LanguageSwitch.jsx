import { Segmented } from "antd";
import { useTranslation } from "react-i18next";

function LanguageSwitch() {
  const { i18n } = useTranslation();

  /**
   *
   * @param {string | number} language
   */
  function handleChange(language) {
    if (typeof language === "string") {
      i18n.changeLanguage(language.toLowerCase());
    }
  }

  return (
    <Segmented
      options={["KO", "EN"]}
      value={i18n.language.toUpperCase()}
      onChange={(e) => handleChange(e)}
    />
  );
}

export default LanguageSwitch;
