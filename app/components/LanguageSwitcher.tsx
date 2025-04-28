import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      {['en', 'ms'].map((lng) => (
        <button
          key={lng}
          className={`px-2 py-1 text-sm font-medium rounded ${
            i18n.language === lng
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
