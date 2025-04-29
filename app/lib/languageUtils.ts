import {
  useParams,
  useNavigate,
  href as hrefFn,
  replace,
  redirect,
} from 'react-router';
import { useTranslation } from 'react-i18next';

// Supported languages
export const SUPPORTED_LANGUAGES = ['en', 'ms'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE = 'en' as const;

// Get language from URL params
export function getLanguageFromParams(lang?: string): SupportedLanguage {
  if (!lang) return DEFAULT_LANGUAGE;
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)
    ? (lang as SupportedLanguage)
    : DEFAULT_LANGUAGE;
}

type FunctionParams = Parameters<typeof hrefFn>;

// Hook to get and set the current language
export function useLanguage() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLanguage;

  // Change language and update URL
  const changeLanguage = (newLang: SupportedLanguage) => {
    if (newLang === currentLanguage) return;

    // Get current path without language prefix
    const path = window.location.pathname;
    const pathWithoutLang = path.endsWith(`/${currentLanguage}`)
      ? path.slice(0, -(currentLanguage.length + 1))
      : path.replace(`/${currentLanguage}/`, '/');

    // Build new path with language prefix
    let newPath =
      newLang === DEFAULT_LANGUAGE
        ? `${pathWithoutLang}`
        : `/${newLang}${pathWithoutLang}`;

    if (newPath === '') {
      newPath = '/';
    }

    // Change i18n language
    i18n.changeLanguage(newLang);

    navigate(newPath);
  };

  const hrefLang =
    currentLanguage === DEFAULT_LANGUAGE ? undefined : currentLanguage;

  return {
    currentLanguage,
    changeLanguage,
    hrefLang,
    isDefaultLanguage: currentLanguage === DEFAULT_LANGUAGE,
  };
}
