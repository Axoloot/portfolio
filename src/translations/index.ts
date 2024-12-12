import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './lang/fr.json';
import en from './lang/en.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // detection: options,
    detection: { order: ['path', 'navigator'] },
    fallbackLng: 'en',
    resources: {
      en,
      fr,
    },
    lng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
