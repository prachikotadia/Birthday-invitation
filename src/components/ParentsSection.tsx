import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ParentsSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className="py-16 bg-gradient-to-b from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 transition-all duration-700">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          👨‍👩‍👧 Mummy & Papa 👨‍👩‍👧
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
          {/* Mummy */}
          <div className="flex-1 flex flex-col items-center group">
            <div className="relative">
              <img
                src="/parents/Mummy.jpg"
                alt="Mummy"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg border-4 border-pink-200 dark:border-pink-700 mb-4 transition-all duration-300 group-hover:shadow-pink-400/60 group-hover:scale-105 group-hover:border-pink-400 group-hover:ring-8 group-hover:ring-pink-300/40"
              />
              {/* Sparkles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-pink-300 rounded-full opacity-70 animate-ping"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 1.5}s`,
                      animationDuration: '1.5s',
                    }}
                  />
                ))}
              </div>
            </div>
            <span className="text-lg font-semibold text-pink-700 dark:text-pink-200">Mummy</span>
          </div>
          {/* Papa */}
          <div className="flex-1 flex flex-col items-center group">
            <div className="relative">
              <img
                src="/parents/Papa.jpg"
                alt="Papa"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg border-4 border-purple-200 dark:border-purple-700 mb-4 transition-all duration-300 group-hover:shadow-purple-400/60 group-hover:scale-105 group-hover:border-purple-400 group-hover:ring-8 group-hover:ring-purple-300/40"
              />
              {/* Sparkles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-70 animate-ping"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 1.5}s`,
                      animationDuration: '1.5s',
                    }}
                  />
                ))}
              </div>
            </div>
            <span className="text-lg font-semibold text-purple-700 dark:text-purple-200">Papa</span>
          </div>
        </div>
        <p className="text-xl md:text-2xl text-purple-800 dark:text-white/80 font-medium mt-4">
          Thank you for your endless love, support, and guidance! 💖
        </p>
      </div>
    </section>
  );
};

export default ParentsSection;