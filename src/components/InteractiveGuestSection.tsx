import React, { useState } from 'react';
import { Send, Sparkles, Heart, Users } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface Guest {
  id: number;
  name: string;
  emoji: string;
  timestamp: number;
}

const InteractiveGuestSection = () => {
  const [guestName, setGuestName] = useState('');
  const [guests, setGuests] = useState<Guest[]>([
    { id: 1, name: "Sarah", emoji: "🥳", timestamp: Date.now() - 300000 },
    { id: 2, name: "Maya", emoji: "🌸", timestamp: Date.now() - 240000 },
    { id: 3, name: "Emma", emoji: "🎧", timestamp: Date.now() - 180000 },
    { id: 4, name: "Zoe", emoji: "🌟", timestamp: Date.now() - 120000 },
    { id: 5, name: "Lily", emoji: "💃", timestamp: Date.now() - 60000 }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [newGuestId, setNewGuestId] = useState<number | null>(null);
  const { isDarkMode } = useTheme();

  const emojis = ["🥳", "🌸", "🎧", "🌟", "💃", "🎉", "💜", "✨", "🎂", "🎈"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const newGuest: Guest = {
        id: guests.length + 1,
        name: guestName.trim(),
        emoji: randomEmoji,
        timestamp: Date.now()
      };

      setGuests(prev => [newGuest, ...prev]);
      setNewGuestId(newGuest.id);
      setGuestName('');
      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset success message
      setTimeout(() => {
        setShowSuccess(false);
        setNewGuestId(null);
      }, 3000);
    }, 1000);
  };

  return (
    <section className={`py-20 relative overflow-hidden transition-all duration-1000 ${
      isDarkMode
        ? 'bg-gradient-to-b from-purple-900 to-indigo-900'
        : 'bg-gradient-to-b from-purple-100 to-pink-100'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent`}>
            RSVP & Be Part of the Magic 🌟
          </h2>
          <p className={`text-lg md:text-xl ${
            isDarkMode ? 'text-white/80' : 'text-purple-700'
          }`}>
            Join the celebration and see your name light up the guest wall! ✨
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* RSVP Form */}
            <div className={`backdrop-blur-xl rounded-3xl p-6 md:p-8 border transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? 'bg-white/10 border-white/20 hover:bg-white/15'
                : 'bg-white/80 border-purple-200 hover:bg-white/90'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-purple-800'
                }`}>
                  Add Your Name!
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-white/80' : 'text-purple-700'
                  }`}>
                    What's your name, lovely guest?
                  </label>
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Enter your name..."
                    className={`w-full px-4 py-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 ${
                      isDarkMode
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20'
                        : 'bg-white/50 border-purple-200 text-purple-800 placeholder-purple-400 focus:bg-white'
                    }`}
                    maxLength={20}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!guestName.trim() || isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 ${
                    !guestName.trim() || isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:shadow-2xl'
                  } ${
                    showSuccess
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Adding Magic...</span>
                    </>
                  ) : showSuccess ? (
                    <>
                      <Heart className="w-5 h-5" />
                      <span>You're officially in the party squad! 💃</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Add Me to Ashi's Guest List 🎉</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Live Guest Wall */}
            <div className={`backdrop-blur-xl rounded-3xl p-6 md:p-8 border transition-all duration-300 ${
              isDarkMode
                ? 'bg-white/10 border-white/20 hover:bg-white/15'
                : 'bg-white/80 border-purple-200 hover:bg-white/90'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-purple-800'
                }`}>
                  Who's Coming? 🎈
                </h3>
              </div>

              <div className={`text-center mb-6 p-3 rounded-xl ${
                isDarkMode ? 'bg-white/5' : 'bg-purple-100/50'
              }`}>
                <span className={`text-lg font-semibold ${
                  isDarkMode ? 'text-white' : 'text-purple-800'
                }`}>
                  {guests.length} guests and counting! 🎉
                </span>
              </div>

              <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                {guests.map((guest, index) => (
                  <div
                    key={guest.id}
                    className={`p-4 rounded-2xl transition-all duration-500 hover:scale-105 ${
                      newGuestId === guest.id
                        ? 'animate-bounce bg-gradient-to-r from-pink-400/20 to-purple-400/20 border-2 border-pink-300'
                        : isDarkMode
                        ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                        : 'bg-purple-50/50 hover:bg-purple-100/50 border border-purple-200'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: newGuestId === guest.id ? 'flyIn 0.8s ease-out' : 'none'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl animate-pulse">
                        {guest.emoji}
                      </div>
                      <div className="flex-1">
                        <span className={`font-semibold text-lg ${
                          isDarkMode ? 'text-white' : 'text-purple-800'
                        }`}>
                          {guest.name}
                        </span>
                      </div>
                      {newGuestId === guest.id && (
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1 h-1 bg-pink-400 rounded-full animate-ping"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flyIn {
          0% {
            transform: translateX(100%) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateX(-10%) scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        
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

export default InteractiveGuestSection;