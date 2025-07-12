import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isPartyTime, setIsPartyTime] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Countdown to 6:00 PM (18:00) on 2025-07-12
    const partyDate = new Date('2025-07-12T18:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = partyDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setIsPartyTime(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`backdrop-blur-xl rounded-3xl p-6 border transition-all duration-300 hover:scale-105 ${
      isDarkMode
        ? 'bg-white/10 border-white/20'
        : 'bg-white/80 border-purple-200'
    }`}>
      <h3 className={`text-xl font-bold mb-4 text-center ${
        isDarkMode ? 'text-white' : 'text-purple-800'
      }`}>
        Party Countdown ✨
      </h3>
      {isPartyTime ? (
        <div className="text-2xl md:text-3xl font-bold text-center text-pink-500 animate-bounce drop-shadow-lg">
          It's Party Time! 🎉
        </div>
      ) : (
        <div className="flex justify-center gap-3">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className={`text-center p-3 rounded-xl backdrop-blur-sm transition-colors duration-300 ${
              isDarkMode
                ? 'bg-white/10 hover:bg-white/20'
                : 'bg-purple-100/50 hover:bg-purple-200/50'
            }`}>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                {value}
              </div>
              <div className={`text-xs capitalize ${
                isDarkMode ? 'text-white/70' : 'text-purple-600'
              }`}>
                {unit}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;