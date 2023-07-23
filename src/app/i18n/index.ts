import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import global_en from './locales/en.json'
import global_ru from './locales/ru.json'

i18n.use(Backend).use(initReactI18next).init({
  fallbackLng: 'ru',
  debug: true,
  resources:{
    en:{
      global: global_en,
    },
    ru:{
        global: global_ru,
    }
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;