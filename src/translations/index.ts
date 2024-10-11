import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './lang/fr.json';
import en from './lang/en.json';

i18n.use(initReactI18next).init({
  detection: {
    order: ['navigator'],
    caches: [],
  },
  resources: {
    en,
    fr,
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
