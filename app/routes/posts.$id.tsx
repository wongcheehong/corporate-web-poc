import { Link } from 'react-router';
import type { Route } from './+types/posts.$id';
import { Header } from '../components/Header';

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Post ${params.id} | Corporate Web` },
    { name: 'description', content: `View post ${params.id} details` },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch post ${params.id}`);
  }
  return response.json();
}

export function HydrateFallback() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Link
              to="/posts"
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
              Back to Posts
            </Link>
          </div>
          <div className="bg-gray-100 animate-pulse p-6 rounded-lg shadow-sm">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Corporate Web. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Link
              to="/posts"
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
              Back to Posts
            </Link>
          </div>
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
        </div>
      </main>
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Corporate Web. All rights reserved.</p>
      </footer>
    </div>
  );
}
