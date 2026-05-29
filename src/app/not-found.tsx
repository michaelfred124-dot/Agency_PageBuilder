import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-400">
            404
          </h1>
          <h2 className="text-2xl font-bold tracking-tight">Site Not Found</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            The page or website you are looking for does not exist, has been removed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-md"
          >
            <MoveLeft className="w-5 h-5" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
