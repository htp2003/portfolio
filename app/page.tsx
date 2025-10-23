'use client';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-bold">
          Hà Tấn Phát
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl">
          Building modern web applications with React, TypeScript, and Node.js
        </p>
      </div>
    </main>
  );
}