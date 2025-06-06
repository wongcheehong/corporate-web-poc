import { href, Link, useNavigation } from 'react-router';
import type { Route } from './+types/posts.$id';
import { Header } from '../components/Header';
import { LoadingSpinner } from '~/components/Spinner';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '~/lib/languageUtils';

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch post ${params.id}`);
  }
  return response.json();
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const { t } = useTranslation();
  const { hrefLang } = useLanguage();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Link
              to={href('/:lang?/posts', { lang: hrefLang })}
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              {t('posts.backToPosts')}
            </Link>
          </div>
          {isLoading ? (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex justify-center items-center py-20">
              <LoadingSpinner className="text-blue-600" />
            </div>
          ) : (
            <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h1 className="text-3xl font-bold mb-6 text-gray-900">
                {loaderData.title}
              </h1>
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line">
                  {loaderData.body}
                </p>
              </div>
            </article>
          )}
        </div>
      </main>
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p>{t('footer.copyright', { year: currentYear })}</p>
      </footer>
    </div>
  );
}
