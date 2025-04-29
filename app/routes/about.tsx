import { Header } from '../components/Header';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{t('about.title')}</h1>
          <div className="bg-white shadow-sm rounded-lg p-6 mb-6 text-gray-900">
            <h2 className="text-xl font-semibold mb-3">
              {t('about.story.title')}
            </h2>
            <p className="mb-4">{t('about.story.content1')}</p>
            <p>{t('about.story.content2')}</p>
          </div>
          <div className="bg-gray-50 shadow-sm rounded-lg p-6 text-gray-900">
            <h2 className="text-xl font-semibold mb-3">
              {t('about.values.title')}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {(
                t('about.values.items', { returnObjects: true }) as string[]
              ).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p>{t('footer.copyright', { year: currentYear })}</p>
      </footer>
    </div>
  );
}
