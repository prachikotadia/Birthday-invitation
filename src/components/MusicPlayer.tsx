import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { isDarkMode } = useTheme();

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={`fixed bottom-6 left-6 z-50 backdrop-blur-xl rounded-2xl p-4 border transition-all duration-300 ${
      isDarkMode
        ? 'bg-white/10 border-white/20'
        : 'bg-purple-100/80 border-purple-200'
    }`}>
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
            isDarkMode
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
              : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>
        
        <div className="flex flex-col">
          <span className={`text-sm font-semibold ${
            isDarkMode ? 'text-white' : 'text-purple-800'
          }`}>
            OMG
          </span>
          <span className={`text-xs ${
            isDarkMode ? 'text-white/70' : 'text-purple-600'
          }`}>
            NewJeans
          </span>
        </div>
        
        <button
          onClick={toggleMute}
          className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isDarkMode
              ? 'bg-white/10 text-white/70 hover:bg-white/20'
              : 'bg-purple-200/50 text-purple-600 hover:bg-purple-200'
          }`}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>
      
      {/* Glow effect when playing */}
      {isPlaying && (
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-2xl animate-pulse"></div>
      )}
    </div>
  );
};

export default MusicPlayer;