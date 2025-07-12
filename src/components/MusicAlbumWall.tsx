import React from 'react';
import { useTheme } from './ThemeProvider';

const tracks = [
  {
    artist: 'TXT',
    title: 'Deja Vu',
    youtube: 'https://www.youtube.com/watch?v=DiHUEWBRQEI',
    art: '/Album/TXT.jpeg',
  },
  {
    artist: 'LE SSERAFIM',
    title: 'ANTIFRAGILE',
    youtube: 'https://www.youtube.com/watch?v=pyf8cbqyfPs',
    art: '/Album/LE SS1.png',
  },
  {
    artist: 'LE SSERAFIM',
    title: 'Perfect Night',
    youtube: 'https://www.youtube.com/watch?v=hLvWy2b857I',
    art: '/Album/LE SS2.png',
  },
  {
    artist: 'Jeff Satur',
    title: 'Fade',
    youtube: 'https://www.youtube.com/watch?v=6f5sozKp0R0',
    art: '/Album/Jeff Satur.jpeg',
  },
  {
    artist: 'Jeff Satur',
    title: 'Dum Dum',
    youtube: 'https://www.youtube.com/watch?v=xjh-mb9IuzU',
    art: '/Album/jeff2.jpg',
  },
];

const MusicAlbumWall = () => {
  const { isDarkMode } = useTheme();
  return (
    <section
      className={`py-16 transition-all duration-700 ${
        isDarkMode
          ? 'bg-gradient-to-b from-gray-900 to-purple-900'
          : 'bg-gradient-to-b from-gray-50 to-purple-100'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-sans">
          🎵 Music Album Wall 🎵
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto">
          {tracks.map((track, idx) => (
            <a
              key={idx}
              href={track.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center rounded-2xl shadow-lg border border-purple-200 dark:border-white/10 bg-white/80 dark:bg-white/10 p-4 md:p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer font-sans`}
              style={{ minWidth: 0 }}
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center">
                <img
                  src={track.art}
                  alt={`${track.artist} – ${track.title} cover`}
                  className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-90"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-purple-900 dark:text-white mb-1 text-center truncate w-full">
                {track.title}
              </h3>
              <p className="text-sm md:text-base text-purple-700 dark:text-purple-200 text-center w-full truncate">
                {track.artist}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicAlbumWall; 