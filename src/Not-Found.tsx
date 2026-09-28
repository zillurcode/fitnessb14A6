import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-[#0d0f12] text-white flex flex-col items-center justify-center px-4 text-center">
      
      <h1 className="text-8xl md:text-9xl font-black text-[#ccff00] tracking-widest">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mt-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-xs md:text-sm text-gray-400 max-w-md mt-2">
        The workout or page you are looking for doesn't exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="mt-6 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:scale-105 uppercase tracking-wide"
      >
        Back to Workouts
      </Link>
    </div>
  );
}