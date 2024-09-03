import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./lang/en.json";
import translationAr from "./lang/ar.json";
import languageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
};
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false,
      },
      react: {
          useSuspense: false 
    }
  });

export default i18n;
