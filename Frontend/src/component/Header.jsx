import React from 'react'
import { Scale } from 'lucide-react'

function Header() {
  return (
    <div>
             <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-lg">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Lexi Legal Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your AI-powered legal research companion. Ask complex legal
              questions and get precise answers backed by authoritative sources.
            </p>
          </div>
      
    </div>
  )
}

export default Header
