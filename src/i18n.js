import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// http://localhost:3000/locals/en/translation
i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init(
    {
      backend: {
        loadPath: "http://localhost:3000/locals/{{lng}}/{{ns}}",
        allowMultiLoading: false,
        crossDomain: true,
      },
      lng: "en",
      fallbackLng: "en",
      debug: false,
      detection: {
        order: ["queryString", "cookie"],
        cache: ["cookie"],
      },
      interpolation: {
        escapeValue: false,
      },
    },
    (error, t) => {
      if (error) console.log(error);
    }
  );

export default i18n;
