import { useLanguage, SUPPORTED_LANGUAGES } from '../lib/languageUtils';

export function LanguageSwitcher() {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      {SUPPORTED_LANGUAGES.map((lng) => (
        <button
          key={lng}
          className={`px-2 py-1 text-sm font-medium rounded ${
            currentLanguage === lng
              ? 'bg-white text-blue-700 shadow-sm'
              : 'bg-blue-700 text-white/80 hover:text-white border border-white/20'
          }`}
          onClick={() => changeLanguage(lng)}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
