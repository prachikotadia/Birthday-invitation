import React, { useState } from 'react';
import { Play, Pause, Volume2, Shuffle, Repeat, Heart, Lightbulb, Sun, Moon } from 'lucide-react';

const MusicSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [lightMode, setLightMode] = useState(false);

  const playlist = [
    {
      id: 1,
      title: "OMG",
      artist: "NewJeans",
      duration: "3:32",
      color: "from-blue-400 to-purple-500"
    },
    {
      id: 2,
      title: "Pink Venom",
      artist: "BLACKPINK",
      duration: "3:07",
      color: "from-pink-400 to-red-500"
    },
    {
      id: 3,
      title: "Dynamite",
      artist: "BTS",
      duration: "3:19",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 4,
      title: "FANCY",
      artist: "TWICE",
      duration: "3:26",
      color: "from-green-400 to-teal-500"
    },
    {
      id: 5,
      title: "After LIKE",
      artist: "IVE",
      duration: "2:56",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 6,
      title: "UNFORGIVEN",
      artist: "LE SSERAFIM",
      duration: "3:04",
      color: "from-red-400 to-orange-500"
    }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <section className={`py-20 relative overflow-hidden transition-all duration-1000 ${
      lightMode 
        ? 'bg-gradient-to-b from-pink-200 to-purple-200' 
        : 'bg-gradient-to-b from-purple-900 to-indigo-900'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M50 50m-40 0a40 40 0 1 1 80 0a40 40 0 1 1 -80 0%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Concert Lights */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 rounded-full opacity-20 ${
              lightMode ? 'bg-purple-300' : 'bg-pink-400'
            } blur-3xl animate-pulse`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent`}>
            🎵 Ashi's Party Playlist 🎵
          </h2>
          <p className={`text-xl ${lightMode ? 'text-purple-800' : 'text-white/80'}`}>
            The beats that make my heart dance! 💜
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Music Player */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-2xl font-bold ${lightMode ? 'text-purple-800' : 'text-white'}`}>
                  Now Playing
                </h3>
                <button
                  onClick={toggleLightMode}
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    lightMode 
                      ? 'bg-purple-500 text-white hover:bg-purple-600' 
                      : 'bg-yellow-500 text-white hover:bg-yellow-600'
                  }`}
                >
                  {lightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
              </div>

              {/* Current Track Display */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10">
                <div className={`w-full h-32 rounded-2xl bg-gradient-to-r ${playlist[currentTrack].color} mb-4 flex items-center justify-center shadow-lg`}>
                  <div className="text-white text-4xl font-bold">
                    {playlist[currentTrack].title.charAt(0)}
                  </div>
                </div>
                
                <h4 className={`text-xl font-bold ${lightMode ? 'text-purple-800' : 'text-white'} mb-1`}>
                  {playlist[currentTrack].title}
                </h4>
                <p className={`${lightMode ? 'text-purple-600' : 'text-white/70'} mb-4`}>
                  {playlist[currentTrack].artist}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                  <div 
                    className={`bg-gradient-to-r ${playlist[currentTrack].color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: isPlaying ? '60%' : '0%' }}
                  ></div>
                </div>

                {/* Player Controls */}
                <div className="flex items-center justify-center gap-4">
                  <button className={`p-3 rounded-full ${lightMode ? 'bg-purple-500 hover:bg-purple-600' : 'bg-white/10 hover:bg-white/20'} transition-all duration-300 hover:scale-110`}>
                    <Shuffle className={`w-5 h-5 ${lightMode ? 'text-white' : 'text-white/70'}`} />
                  </button>
                  
                  <button
                    onClick={togglePlay}
                    className={`p-4 rounded-full bg-gradient-to-r ${playlist[currentTrack].color} text-white hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </button>
                  
                  <button className={`p-3 rounded-full ${lightMode ? 'bg-purple-500 hover:bg-purple-600' : 'bg-white/10 hover:bg-white/20'} transition-all duration-300 hover:scale-110`}>
                    <Repeat className={`w-5 h-5 ${lightMode ? 'text-white' : 'text-white/70'}`} />
                  </button>
                </div>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-4">
                <Volume2 className={`w-5 h-5 ${lightMode ? 'text-purple-700' : 'text-white/70'}`} />
                <div className="flex-1 bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>

            {/* Playlist */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${lightMode ? 'text-purple-800' : 'text-white'}`}>
                  My Favorites
                </h3>
              </div>

              <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                {playlist.map((track, index) => (
                  <div
                    key={track.id}
                    onClick={() => selectTrack(index)}
                    className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                      currentTrack === index
                        ? 'bg-white/20 border border-white/30'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${track.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-lg">
                        {track.title.charAt(0)}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`font-semibold ${lightMode ? 'text-purple-800' : 'text-white'}`}>
                        {track.title}
                      </h4>
                      <p className={`text-sm ${lightMode ? 'text-purple-600' : 'text-white/70'}`}>
                        {track.artist}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${lightMode ? 'text-purple-600' : 'text-white/70'}`}>
                        {track.duration}
                      </span>
                      {currentTrack === index && (
                        <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className={`text-sm ${lightMode ? 'text-purple-600' : 'text-white/60'}`}>
                  {playlist.length} songs • Perfect for dancing! 💃
                </p>
              </div>
            </div>
          </div>

          {/* Light Mode Toggle Info */}
          <div className="text-center mt-12">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 shadow-2xl border border-white/20 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Lightbulb className={`w-5 h-5 ${lightMode ? 'text-purple-700' : 'text-yellow-300'}`} />
                <span className={`font-semibold ${lightMode ? 'text-purple-800' : 'text-white'}`}>
                  {lightMode ? 'Pastel Day Mode' : 'Neon Concert Mode'}
                </span>
              </div>
              <p className={`text-sm ${lightMode ? 'text-purple-600' : 'text-white/70'}`}>
                Switch between dreamy day vibes and electric night energy!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

export default MusicSection;