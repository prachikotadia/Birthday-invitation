import React, { useState } from 'react';
import { Play, Heart } from 'lucide-react';

const AlbumWall = () => {
  const [hoveredAlbum, setHoveredAlbum] = useState<number | null>(null);

  const albums = [
    {
      id: 1,
      title: "New Jeans - OMG",
      artist: "NewJeans",
      color: "from-blue-400 to-purple-500",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 2,
      title: "BLACKPINK - Born Pink",
      artist: "BLACKPINK",
      color: "from-pink-400 to-red-500",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 3,
      title: "BTS - Love Yourself",
      artist: "BTS",
      color: "from-purple-400 to-pink-500",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 4,
      title: "TWICE - Fancy You",
      artist: "TWICE",
      color: "from-yellow-400 to-orange-500",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 5,
      title: "IVE - After Like",
      artist: "IVE",
      color: "from-green-400 to-blue-500",
      image: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 6,
      title: "LE SSERAFIM - Unforgiven",
      artist: "LE SSERAFIM",
      color: "from-red-400 to-pink-500",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M50 50m-40 0a40 40 0 1 1 80 0a40 40 0 1 1 -80 0%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            🎧 Ashi's K-Pop Vibe Wall 🎧
          </h2>
          <p className="text-lg md:text-xl text-white/80">My favorite albums that make every day feel like a concert! 💜</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {albums.map((album, index) => (
            <div
              key={album.id}
              className={`group relative cursor-pointer flex flex-col items-center transition-all duration-300 hover:scale-105 active:scale-95 ${
                hoveredAlbum === index ? 'z-10' : 'z-0'
              } w-full max-w-xs mx-auto`}
              onMouseEnter={() => setHoveredAlbum(index)}
              onMouseLeave={() => setHoveredAlbum(null)}
              style={{
                transform: hoveredAlbum === index ? 'rotateY(3deg) scale(1.05)' : 'rotateY(0deg) scale(1)',
                transformStyle: 'preserve-3d',
                touchAction: 'manipulation',
              }}
            >
              {/* Glass Card */}
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 relative overflow-hidden w-full aspect-[3/4] flex flex-col">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${album.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                
                {/* Album Cover */}
                <div className="relative mb-3 flex-1 overflow-hidden rounded-xl border-2 border-white/10 group-hover:border-white/30 transition-all duration-300 aspect-square">
                  {/* Glowing border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${album.color} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300 rounded-xl`}></div>
                  <img
                    src={album.image}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-active:scale-105"
                    style={{ borderRadius: '0.75rem' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Play Button (show only on hover for non-touch devices) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none md:pointer-events-auto">
                    <div className="bg-white/90 rounded-full p-2 sm:p-3 md:p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-white shadow-xl animate-bounce">
                      <Play className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-600 ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Album Info */}
                <div className="text-center relative z-10 mt-2">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-1 group-hover:text-pink-200 transition-colors duration-300 leading-tight">
                    {album.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/70 mb-2">{album.artist}</p>
                  {/* Heart Icon */}
                  <div className="flex justify-center">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-300 group-hover:text-pink-400 group-hover:scale-125 group-active:scale-110 transition-all duration-300 cursor-pointer" />
                  </div>
                </div>

                {/* Sparkle Effects on Hover (desktop only) */}
                {hoveredAlbum === index && (
                  <div className="absolute inset-0 pointer-events-none hidden md:block">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 1}s`,
                          animationDuration: '1s'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumWall;