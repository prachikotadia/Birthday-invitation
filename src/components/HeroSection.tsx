import React, { useState, useEffect } from 'react';
import { Heart, Star, Music } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`min-h-screen relative overflow-hidden flex items-center justify-center transition-all duration-1000 ${
      isDarkMode
        ? 'bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900'
        : 'bg-gradient-to-br from-purple-200 via-pink-100 to-purple-300'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-bounce">
        <div className={`w-8 h-8 rounded-full opacity-70 animate-pulse ${
          isDarkMode ? 'bg-pink-400' : 'bg-purple-400'
        }`}></div>
      </div>
      <div className="absolute top-40 right-32 animate-bounce delay-1000">
        <Heart className={`w-6 h-6 animate-pulse ${
          isDarkMode ? 'text-pink-300' : 'text-purple-500'
        }`} />
      </div>
      <div className="absolute bottom-32 left-16 animate-bounce delay-500">
        <Star className={`w-5 h-5 animate-pulse ${
          isDarkMode ? 'text-yellow-300' : 'text-purple-400'
        }`} />
      </div>
      <div className="absolute top-60 right-20 animate-bounce delay-700">
        <Music className={`w-7 h-7 animate-pulse ${
          isDarkMode ? 'text-purple-300' : 'text-pink-500'
        }`} />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4 md:px-8">
        <div className="group cursor-pointer">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 animate-pulse bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Ashi's Sweet Sixteen
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 pointer-events-none"></div>
        </div>
        
        <p className={`text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in ${
          isDarkMode ? 'text-white/90' : 'text-purple-800'
        }`}>
          💜 Queen's Magical Birthday Bash 💜
        </p>

        {/* Countdown Timer */}
        <div className="mb-8 max-w-md mx-auto">
          <CountdownTimer />
        </div>

        <div className={`backdrop-blur-xl rounded-2xl p-6 border max-w-md mx-auto ${
          isDarkMode
            ? 'bg-white/10 border-white/20'
            : 'bg-white/80 border-purple-200'
        }`}>
          <p className={`text-lg leading-relaxed ${
            isDarkMode ? 'text-white/90' : 'text-purple-800'
          }`}>
            Join me for the most magical night ever! 🎉<br />
            <span className={isDarkMode ? 'text-pink-300' : 'text-purple-600'}>
              July 12th, 2025 • 6:00 PM
            </span>
          </p>
        </div>
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-pulse ${
              isDarkMode ? 'bg-white' : 'bg-purple-400'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;