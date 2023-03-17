import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: { default: ['en'] },
    nsSeparator: false,
    // keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
      lookupCookie: 'i18nextLng',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
