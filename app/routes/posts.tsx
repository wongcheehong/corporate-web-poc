import { Link, useNavigation } from 'react-router';
import type { Route } from './+types/posts';
import { Header } from '../components/Header';
import type { Post } from '~/types/post';
import { LoadingSpinner } from '~/components/Spinner';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Posts | Corporate Web' },
    { name: 'description', content: 'Blog posts from Corporate Web' },
  ];
}

export async function clientLoader() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

export default function Posts({ loaderData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Posts</h1>
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <LoadingSpinner className="text-blue-600" />
            </div>
          ) : (
            <div className="space-y-4">
              {loaderData.map((post: Post) => (
                <div
                  key={post.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <h2 className="text-xl font-semibold mb-2">
                    <Link
                      to={`/posts/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 line-clamp-2">{post.body}</p>
                  <div className="mt-4">
                    <Link
                      to={`/posts/${post.id}`}
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                    >
                      Read more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Corporate Web. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
