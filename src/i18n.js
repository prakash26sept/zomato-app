import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/english.json";
import hi from "./locales/hi/hindi.json";
i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {

        hi: {
            translations: hi
        }, en: {
            translations: en
        },
    },
    fallbackLng: "en",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;