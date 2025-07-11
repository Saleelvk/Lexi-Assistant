import React from 'react';
import { Scale } from 'lucide-react';

function Header() {
  return (
    <div className="text-center mb-10 sm:mb-12 px-4">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 sm:p-4 rounded-full shadow-lg">
          <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
        Lexi Legal Assistant
      </h1>
      <p className="text-base sm:text-xl text-gray-300 max-w-xl mx-auto">
        Your AI-powered legal research companion. Ask complex legal
        questions and get precise answers backed by authoritative sources.
      </p>
    </div>
  );
}

export default Header;
