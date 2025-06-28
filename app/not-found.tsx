"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4 py-24">
      <div className="relative mb-8">
        <span className="text-[7rem] md:text-[10rem] font-black text-gray-900/10 select-none">
          404
        </span>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-7xl font-bold text-gray-900 outline-text pointer-events-none">
          Not Found
        </span>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
        Oops! Page not found
      </h1>
      <p className="text-gray-500 text-lg mb-8 text-center max-w-xl">
        Sorry, the page you{`’`}re looking for doesn{`’`}t exist or has been
        moved.
        <br />
        Let{`’`}s get you back to something stylish!
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full font-semibold transition"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>
    </main>
  );
}
