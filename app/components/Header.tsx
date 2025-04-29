import { href, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '~/lib/languageUtils';

export function Header() {
  const { t } = useTranslation();
  const { hrefLang } = useLanguage();

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">{t('app.title')}</div>
        <div className="flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to={hrefLang === undefined ? '/' : `/${hrefLang}`}
                  className="hover:underline"
                >
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link
                  to={href('/:lang?/about', { lang: hrefLang })}
                  className="hover:underline"
                >
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link
                  to={href('/:lang?/posts', { lang: hrefLang })}
                  className="hover:underline"
                >
                  {t('navigation.posts')}
                </Link>
              </li>
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
