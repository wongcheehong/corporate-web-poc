import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  // Load translations from the /public/locales folder
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    // Default language
    fallbackLng: 'en',
    // Debug mode in development
    debug: process.env.NODE_ENV === 'development',
    
    // Namespace configuration
    defaultNS: 'common',
    ns: ['common'],
    
    interpolation: {
      // React already safes from XSS
      escapeValue: false,
    },
    
    // Backend configuration for loading translations
    backend: {
      // Path to load resources from
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    
    // Detect language options
    detection: {
      // Order of detection methods
      order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      // Cookie options
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      // Cache user language
      caches: ['localStorage', 'cookie'],
    },
    
    // React options
    react: {
      // Wait for translations to be loaded before rendering
      useSuspense: true,
    },
  });

export default i18n;
