import { useState } from "react";

import {
  FileText,
  ExternalLink,

} from "lucide-react";
import Header from "./component/Header";
import SearchBox from "./component/SearchBox";
import Footer from "./component/Footer";

const App = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [typedAnswer, setTypedAnswer] = useState("");

  const simulatedResponse = {
    answer:
      " Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased's annual income should be added as future prospects.",
    citations: [
      {
        text: "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
        source: "Dani_Devi_v_Pritam_Singh.pdf",
        link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
      },
    ],
  };

  const handleSubmit = () => {
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    setTypedAnswer("");

    setTimeout(() => {
      setResponse(simulatedResponse);

      let index = 0;
      const interval = setInterval(() => {
        setTypedAnswer((prev) => prev + simulatedResponse.answer.charAt(index));
        index++;

        if (index >= simulatedResponse.answer.length) {
          clearInterval(interval);
          setLoading(false);
        }
      }, 20);
      setQuery( "")
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* animations-part */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(0)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
      {/* animations-End */}
      <div className="relative z-10 min-h-screen  font-inter p-6 flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <Header />
          <SearchBox
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
            loading={loading}
            handleKeyPress={handleKeyPress}
          />

          {/* Response Display */}
          {response && (
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-full">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Legal Analysis
                </h2>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
                <p className="text-gray-100 leading-relaxed text-lg whitespace-pre-wrap">
                  {typedAnswer}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              {response.citations && response.citations.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-purple-300 flex items-center space-x-2">
                    <ExternalLink className="w-5 h-5" />
                    <span>Legal Citations</span>
                  </h3>
                  {response.citations.map((citation, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <a
                        href={citation.link}
                        target="_blank"
                        className="block group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg flex-shrink-0">
                            <FileText className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed mb-2 group-hover:text-white transition-colors">
                              "{citation.text}"
                            </p>

                            <div className="flex justify-between space-x-2 text-sm text-purple-300 group-hover:text-purple-200 transition-colors">
                              <div>
                                <span>Source: {citation.source}</span>
                              </div>
                              <div className="bg-purple-800 text-white px-4 py-2 rounded shadow-md animate-pulse hover:bg-purple-700 cursor-pointer transition">
                                Click to PDF
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}



          
           <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
