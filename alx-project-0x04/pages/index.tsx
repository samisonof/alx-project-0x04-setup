import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to ALX Project 0x04 🚀</h1>
      <Link
        href="/counter-app"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition"
      >
        Open Counter App
      </Link>
    </main>
  );
}
