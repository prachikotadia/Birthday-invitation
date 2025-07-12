import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Send, Sparkles, AlertCircle } from 'lucide-react';
import { wishesApi } from '../services/api';
import { BirthdayWish } from '../lib/supabase';

const BirthdayWishesSection = () => {
  const [wishes, setWishes] = useState<BirthdayWish[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadWishes();
  }, []);

  const loadWishes = async () => {
    try {
      setIsLoading(true);
      const wishesData = await wishesApi.getWishes();
      setWishes(wishesData);
    } catch (err) {
      console.error('Failed to load wishes:', err);
      setError('Failed to load birthday wishes. Please refresh the page.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const newWish = await wishesApi.submitWish({
        name: formData.name,
        email: formData.email || undefined,
        message: formData.message
      });

      await loadWishes(); // Always reload from backend after submit
      setSubmitted(true);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Failed to submit wish:', err);
      setError('Failed to submit birthday wish. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pink-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            💝 Birthday Wishes 💝
          </h2>
          <p className="text-xl text-white/80">Share your love and birthday wishes for Ashi! ✨</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Wish Form */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Send Your Birthday Wish</h3>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-200 text-sm">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-300 focus:outline-none transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Email (optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-300 focus:outline-none transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Your Birthday Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-300 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Share your birthday wishes for Ashi! 💜"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 ${
                    submitted
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending Love...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <Heart className="w-5 h-5" />
                      <span>Wish Sent with Love! 💜</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Birthday Wish ✨</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Wishes Wall */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Wishes Wall</h3>
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-400"></div>
                </div>
              ) : (
                <>
                  <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                    {wishes.map((wish, index) => (
                      <div
                        key={wish.id}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                        style={{
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-2">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white text-sm">{wish.name}</h4>
                            <p className="text-white/70 text-sm mt-2">{wish.message}</p>
                            <p className="text-white/50 text-xs mt-2">
                              {new Date(wish.created_at).toLocaleDateString([], { 
                                month: 'short', 
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-white/60 text-sm">
                      {wishes.length} beautiful wishes sent! 💝
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayWishesSection; 