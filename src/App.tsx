import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import AboutAshi from './components/AboutAshi';
import ParentsSection from './components/ParentsSection';
import AlbumWall from './components/AlbumWall';
import PhotoGallery from './components/PhotoGallery';
import InteractiveGuestSection from './components/InteractiveGuestSection';
import PartyLocation from './components/PartyLocation';
import CakeSection from './components/CakeSection';
import Timeline from './components/Timeline';
import MusicSection from './components/MusicSection';
import CursorTrail from './components/CursorTrail';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="relative">
        {/* Fixed UI Elements */}
        <ThemeToggle />
        <MusicPlayer />
        
        {/* Cursor Trail Effect */}
        <CursorTrail />
        
        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection />
          <AboutAshi />
          <ParentsSection />
          <AlbumWall />
          <PhotoGallery />
          <InteractiveGuestSection />
          <PartyLocation />
          <CakeSection />
          <Timeline />
          <MusicSection />
        </main>

        {/* Scroll to Top Button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 animate-bounce"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}

        {/* Background Sparkles */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;