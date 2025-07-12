import React from 'react';
import { Heart, Star, Music } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const AboutAshi = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 relative overflow-hidden transition-all duration-1000 ${
      isDarkMode
        ? 'bg-gradient-to-b from-indigo-900 to-purple-900'
        : 'bg-gradient-to-b from-pink-50 to-purple-100'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M40 40m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent`}>
            About the Birthday Girl 💜
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 border transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? 'bg-white/10 border-white/20'
              : 'bg-white/80 border-purple-200'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Ashi's Photo */}
              <div className="md:col-span-1 text-center">
                <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <img
                    src="dist\Ashis's Photo\Ashi Sweet 16\Screenshot 2025-07-12 141328.png"
                    alt="Ashi"
                    className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-400/20 to-transparent"></div>
                  
                  {/* Floating sparkles around photo */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full animate-ping opacity-60"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random()}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Note from Ashi */}
              <div className="md:col-span-2">
                <div className={`relative p-6 rounded-2xl ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-purple-800/30 to-pink-800/30'
                    : 'bg-gradient-to-br from-purple-100/50 to-pink-100/50'
                } border ${
                  isDarkMode ? 'border-white/10' : 'border-purple-200'
                }`}>
                  {/* Handwritten style header */}
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-pink-400" />
                    <h3 className={`text-2xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-purple-800'
                    }`} style={{ fontFamily: 'cursive' }}>
                      Note from Ashi
                    </h3>
                  </div>
                  
                  <div className={`text-lg leading-relaxed ${
                    isDarkMode ? 'text-white/90' : 'text-purple-700'
                  }`} style={{ fontFamily: 'cursive' }}>
                    <p className="mb-4">
                      Hey beautiful souls! 💜 I can't believe I'm turning 16! This feels like such a magical milestone, and I want to celebrate it with all my favorite people.
                    </p>
                 
                    <p className="mb-4">
                      This party is going to be EPIC! We'll have amazing music, delicious cake, and so many surprises. I can't wait to dance the night away with you all! 💃✨
                    </p>
                    <p className="text-right font-semibold">
                      With love and sparkles,<br />
                      <span className="text-pink-400">Ashi 💜</span>
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2">
                    <Star className="w-4 h-4 text-yellow-300 animate-pulse" />
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Music className="w-4 h-4 text-purple-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAshi;