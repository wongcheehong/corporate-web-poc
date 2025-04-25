import type { Route } from './+types/home';
import { Header } from '../components/Header';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Home | Corporate Web' },
    { name: 'description', content: 'Welcome to Corporate Web!' },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Welcome to Corporate Web</h1>
          <p className="text-lg mb-4">
            This is a simple corporate website built with React Router v7 and
            Tailwind CSS.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-gray-900">
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p>
              To provide innovative solutions that help businesses thrive in the
              digital age.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p> {new Date().getFullYear()} Corporate Web. All rights reserved.</p>
      </footer>
    </div>
  );
}
