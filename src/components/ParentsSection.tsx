import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ParentsSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 relative overflow-hidden transition-all duration-1000 ${
      isDarkMode
        ? 'bg-gradient-to-b from-purple-900 to-pink-900'
        : 'bg-gradient-to-b from-purple-50 to-pink-50'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent`}>
            Meet My Mumma & Dada 👨‍👩‍👧
          </h2>
          <p className={`text-lg md:text-xl ${
            isDarkMode ? 'text-white/80' : 'text-purple-700'
          }`}>
            The amazing people who made this celebration possible! 💜
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mumma */}
            <div className={`backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:scale-105 group ${
              isDarkMode
                ? 'bg-white/10 border-white/20 hover:bg-white/15'
                : 'bg-white/80 border-purple-200 hover:bg-white/90'
            }`}>
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
                  <img
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"
                    alt="Mumma"
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Sparkle border */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
                  
                  {/* Floating hearts */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-6 h-6 text-pink-400 animate-bounce" />
                  </div>
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-purple-800'
                }`}>
                  Priya Sharma
                </h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-white/70' : 'text-purple-600'
                }`}>
                  The sweetest mumma who makes the best birthday cakes! 🎂
                </p>
              </div>
            </div>

            {/* Dada */}
            <div className={`backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:scale-105 group ${
              isDarkMode
                ? 'bg-white/10 border-white/20 hover:bg-white/15'
                : 'bg-white/80 border-purple-200 hover:bg-white/90'
            }`}>
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
                  <img
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200"
                    alt="Dada"
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Sparkle border */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
                  
                  {/* Floating hearts */}
                  <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-6 h-6 text-purple-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-purple-800'
                }`}>
                  Rajesh Sharma
                </h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-white/70' : 'text-purple-600'
                }`}>
                  The coolest dada who supports all my K-pop dreams! 🎵
                </p>
              </div>
            </div>
          </div>

          {/* Thank you message */}
          <div className={`mt-12 text-center backdrop-blur-xl rounded-3xl p-6 border ${
            isDarkMode
              ? 'bg-white/10 border-white/20'
              : 'bg-white/80 border-purple-200'
          }`}>
            <p className={`text-lg ${
              isDarkMode ? 'text-white/90' : 'text-purple-700'
            }`} style={{ fontFamily: 'cursive' }}>
              Thank you Mumma & Dada for making my Sweet Sixteen dreams come true! 💜✨
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ParentsSection;