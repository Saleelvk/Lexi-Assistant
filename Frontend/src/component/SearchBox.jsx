import { Clock, FileText, Search, Sparkles } from "lucide-react";

function SearchBox({ query, setQuery, handleSubmit, loading, handleKeyPress }) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 mb-8">
        <div className="relative">
          <textarea
            placeholder="Ask your legal question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full p-6 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder-gray-300 resize-none focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-lg"
            rows="4"
          />
          <div className="absolute bottom-4 right-4 text-gray-400 text-sm">
            Ctrl+Enter to submit
          </div>
        </div>
  
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-4 text-gray-300">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span className="text-sm">Source Citations</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Instant Results</span>
            </div>
          </div>
  
          <button
            onClick={handleSubmit}
            disabled={loading || !query.trim()}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center space-x-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span>Search Legal Database</span>
              </>
            )}
          </button>
        </div>
      </div>
    );
  }
  
  export default SearchBox;
  