import React, { useRef, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const memoryPhotos = [
  { src: "/Ashis's Photo/Ashi Sweet 16/IMG-20150831-WA0008.jpg", alt: "Childhood adventures!" },
  { src: "/Ashis's Photo/Ashi Sweet 16/IMG_5284(1).jpg", alt: "Best friends forever!" },
  { src: "/Ashis's Photo/Ashi Sweet 16/IMG_1809.JPG", alt: "Purple queen vibes!" },
  { src: "/Ashis's Photo/Ashi Sweet 16/IMG_4745.JPG", alt: "Living life to the fullest!" },
  { src: "/Ashis's Photo/Ashi Sweet 16/IMG_0665.JPG", alt: "Sweet moments!" },
  { src: "/Ashis's Photo/Ashi Sweet 16/DSC00705.JPG", alt: "Family love!" },
  { src: "/Ashis's Photo/Ashi Sweet 16/20160511_120151.jpg", alt: "Birthday celebrations!" },
  { src: "/Ashis's Photo/Ashi Sweet 16/20130727_181400.jpg", alt: "Summer memories!" },
  { src: "/Ashis's Photo/Ashi Sweet 16/20140704_093621.jpg", alt: "Independence Day fun!" },
];

const MemoryMovie = () => {
  const { isDarkMode } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame: number;
    let scrollSpeed = 1; // pixels per frame

    function autoScroll() {
      if (!scrollContainer) return;
      // If at end, jump back to start
      if (
        scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
        scrollContainer.scrollWidth - 1
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      animationFrame = requestAnimationFrame(autoScroll);
    }

    animationFrame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className={`py-16 relative transition-all duration-1000 ${
      isDarkMode
        ? 'bg-gradient-to-b from-pink-900 to-purple-900'
        : 'bg-gradient-to-b from-pink-50 to-purple-100'
    }`}>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="overflow-x-auto scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent"
          ref={scrollRef}
        >
          <div className="flex gap-6 md:gap-8 lg:gap-10 py-4" style={{ minHeight: 320 }}>
            {memoryPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 bg-white/80 dark:bg-white/10 rounded-3xl shadow-xl border border-pink-100 dark:border-white/20 overflow-hidden transition-transform duration-300 hover:scale-105"
                style={{ width: 200, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover w-full h-full"
                  draggable={false}
                  style={{ borderRadius: '1.5rem' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryMovie; 