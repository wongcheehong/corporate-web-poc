import type { Route } from './+types/about';
import { Header } from '../components/Header';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About | Corporate Web' },
    { name: 'description', content: 'Learn more about Corporate Web' },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <div className="bg-white shadow-sm rounded-lg p-6 mb-6 text-gray-900">
            <h2 className="text-xl font-semibold mb-3">Our Story</h2>
            <p className="mb-4">
              Founded in 2025, Corporate Web has been at the forefront of web
              development and digital transformation. We specialize in creating
              modern, responsive, and user-friendly web applications using
              cutting-edge technologies.
            </p>
            <p>
              Our team of experienced developers and designers is dedicated to
              delivering high-quality solutions that meet the unique needs of
              our clients.
            </p>
          </div>
          <div className="bg-gray-50 shadow-sm rounded-lg p-6 text-gray-900">
            <h2 className="text-xl font-semibold mb-3">Our Values</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Innovation and creativity in everything we do</li>
              <li>Customer satisfaction as our top priority</li>
              <li>Continuous learning and improvement</li>
              <li>Collaboration and teamwork</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Corporate Web. All rights reserved.</p>
      </footer>
    </div>
  );
}
