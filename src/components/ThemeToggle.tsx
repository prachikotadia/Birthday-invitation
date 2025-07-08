import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-4 rounded-full backdrop-blur-xl border transition-all duration-300 hover:scale-110 ${
        isDarkMode
          ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
          : 'bg-purple-100/80 border-purple-200 text-purple-800 hover:bg-purple-200/80'
      }`}
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6" />
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;