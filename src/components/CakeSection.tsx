import React, { useState } from 'react';
import { Heart, Star, Sparkles, Gift } from 'lucide-react';

const CakeSection = () => {
  const [isWishModalOpen, setIsWishModalOpen] = useState(false);
  const [wish, setWish] = useState('');
  const [wishes, setWishes] = useState([
    "May all your K-pop dreams come true! 💜",
    "Sixteen candles for sixteen amazing years! 🕯️",
    "Dancing through life with you! 💃",
    "Purple queen forever! 👑",
    "Sweet sixteen and so serene! ✨"
  ]);
  const [showWishSubmitted, setShowWishSubmitted] = useState(false);

  const handleWishSubmit = () => {
    if (wish.trim()) {
      setWishes([...wishes, wish]);
      setWish('');
      setShowWishSubmitted(true);
      setIsWishModalOpen(false);
      setTimeout(() => setShowWishSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M50 50m-30 0a30 30 0 1 1 60 0a30 30 0 1 1 -60 0%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            🎂 Magical Birthday Cake 🎂
          </h2>
          <p className="text-xl text-white/80">Make a wish and let the magic happen! ✨</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Cake Animation */}
            <div className="group relative">
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                {/* Cake Base */}
                <div className="relative inline-block">
                  {/* Cake Layers */}
                  <div className="relative">
                    {/* Bottom Layer */}
                    <div className="w-48 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl mx-auto shadow-xl group-hover:scale-105 transition-transform duration-300"></div>
                    
                    {/* Middle Layer */}
                    <div className="w-40 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl mx-auto -mt-2 shadow-lg group-hover:scale-105 transition-transform duration-300 delay-100"></div>
                    
                    {/* Top Layer */}
                    <div className="w-32 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl mx-auto -mt-2 shadow-md group-hover:scale-105 transition-transform duration-300 delay-200"></div>
                  </div>

                  {/* Candles */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="relative">
                        {/* Candle */}
                        <div className="w-1 h-6 bg-yellow-200 rounded-full shadow-sm"></div>
                        
                        {/* Flame */}
                        <div 
                          className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full animate-pulse shadow-lg"
                          style={{
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: `${1 + Math.random()}s`
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>

                  {/* Sparkles around cake */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${1 + Math.random()}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Cake Stand */}
                <div className="w-52 h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mx-auto mt-4 shadow-lg opacity-80 group-hover:scale-105 transition-transform duration-300"></div>

                {/* Wish Button */}
                <button
                  onClick={() => setIsWishModalOpen(true)}
                  className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-3 mx-auto group"
                >
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Send Your Magical Wish ✨</span>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </button>
              </div>
            </div>

            {/* Wishes Display */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Birthday Wishes</h3>
              </div>

              <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
                {wishes.map((wishText, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: index === wishes.length - 1 ? 'fadeInUp 0.5s ease-out' : 'none'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-2 flex-shrink-0">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed">{wishText}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-white/60 text-sm">
                  {wishes.length} magical wishes sent! 🌟
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wish Modal */}
      {isWishModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-full relative">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Make a Wish! 🌟</h3>
              <p className="text-white/80">Send Ashi your magical birthday wish!</p>
            </div>

            <textarea
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder="Write your magical wish here... ✨"
              className="w-full h-32 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-300 focus:outline-none transition-all duration-300 resize-none"
              maxLength={200}
            />

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setIsWishModalOpen(false)}
                className="flex-1 bg-white/10 text-white py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleWishSubmit}
                disabled={!wish.trim()}
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Send Wish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wish Submitted Notification */}
      {showWishSubmitted && (
        <div className="fixed top-8 right-8 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-xl z-50 animate-slideInFromRight">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            <span>Your wish has been sent! 💜</span>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
};

export default CakeSection;