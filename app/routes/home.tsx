import { Header } from '../components/Header';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{t('home.welcome')}</h1>
          <p className="text-lg mb-4">{t('home.description')}</p>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-gray-900">
            <h2 className="text-xl font-semibold mb-3">
              {t('home.mission.title')}
            </h2>
            <p>{t('home.mission.content')}</p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p>{t('footer.copyright', { year: currentYear })}</p>
      </footer>
    </div>
  );
}
