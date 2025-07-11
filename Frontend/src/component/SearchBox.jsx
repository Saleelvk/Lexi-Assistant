import { Clock, FileText, Search, Sparkles } from "lucide-react";

function SearchBox({ query, setQuery, handleSubmit, loading, handleKeyPress }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl border border-white/20 mb-8">
      <div className="relative">
        <textarea
          placeholder="Ask your legal question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full p-4 sm:p-6 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder-gray-300 resize-none focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-base sm:text-lg"
          rows="4"
        />
        <div className="absolute bottom-3 right-4 text-gray-400 text-xs sm:text-sm">
          Ctrl+Enter to submit
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 space-y-4 sm:space-y-0">
        
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-300">
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
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center space-x-2 text-sm sm:text-base"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Search Legal Database</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
