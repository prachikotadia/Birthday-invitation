import React, { useState, useEffect } from 'react';
import { Send, Sparkles, Heart, Users, AlertCircle } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { interactionsApi } from '../services/api';
import { GuestInteraction, supabase } from '../lib/supabase';

const InteractiveGuestSection = () => {
  const [guestName, setGuestName] = useState('');
  const [guests, setGuests] = useState<GuestInteraction[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [newGuestId, setNewGuestId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useTheme();

  const emojis = ["🥳", "🌸", "🎧", "🌟", "💃", "🎉", "💜", "✨", "🎂", "🎈"];

  // Load existing interactions and set up real-time subscription
  useEffect(() => {
    loadInteractions();
    setupRealtimeSubscription();

    return () => {
      // Cleanup subscription on unmount
      supabase.removeAllChannels();
    };
  }, []);

  const loadInteractions = async () => {
    try {
      setIsLoading(true);
      const interactions = await interactionsApi.getRecentInteractions(20);
      setGuests(interactions);
    } catch (err) {
      console.error('Failed to load interactions:', err);
      setError('Failed to load guest interactions. Please refresh the page.');
    } finally {
      setIsLoading(false);
    }
  };

  const setupRealtimeSubscription = () => {
    const subscription = interactionsApi.subscribeToInteractions((payload) => {
      if (payload.new) {
        setGuests(prev => [payload.new, ...prev.slice(0, 19)]); // Keep only 20 most recent
        setNewGuestId(payload.new.id);
        setTimeout(() => setNewGuestId(null), 3000);
      }
    });

    return subscription;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      
      const newInteraction = await interactionsApi.submitInteraction({
        name: guestName.trim(),
        emoji: randomEmoji,
        timestamp: Date.now()
      });

      setGuestName('');
      setShowSuccess(true);

      // Reset success message
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to submit interaction:', err);
      setError('Failed to add your name. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className={`text-sm ${isDarkMode ? 'text-red-200' : 'text-red-700'}`}>{error}</span>
                </div>
              )}

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
                    onChange={(e) => {
                      setGuestName(e.target.value);
                      if (error) setError(null);
                    }}
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

              {isLoading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-400"></div>
                </div>
              ) : (
                <>
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
                            <div className={`text-xs mt-1 ${
                              isDarkMode ? 'text-white/60' : 'text-purple-600'
                            }`}>
                              {new Date(guest.created_at).toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {guests.length === 0 && (
                    <div className={`text-center py-8 ${
                      isDarkMode ? 'text-white/60' : 'text-purple-600'
                    }`}>
                      <p>Be the first to join the party! 🎉</p>
                    </div>
                  )}
                </>
              )}
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