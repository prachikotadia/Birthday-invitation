import React, { useState } from 'react';
import { Send, Sparkles, Heart, User } from 'lucide-react';

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [guestList, setGuestList] = useState([
    { id: 1, name: "Sarah Chen", message: "Can't wait to celebrate with you! 💜" },
    { id: 2, name: "Maya Johnson", message: "This is going to be AMAZING! 🎉" },
    { id: 3, name: "Emma Rodriguez", message: "Purple queen's big day! So excited!" },
    { id: 4, name: "Zoe Kim", message: "Ready to dance the night away! 💃" },
    { id: 5, name: "Lily Thompson", message: "Sweet 16 magic incoming! ✨" }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newGuest = {
        id: guestList.length + 1,
        name: formData.name,
        message: formData.message || "Can't wait to celebrate! 🎉"
      };
      
      setGuestList([...guestList, newGuest]);
      setSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({ name: '', email: '', guests: '1', message: '' });
      
      // Reset submission state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            💌 RSVP + Guest Wall 💌
          </h2>
          <p className="text-xl text-white/80">Join the celebration and share your excitement! ✨</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* RSVP Form */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Send Your Magical RSVP</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Your Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-300 focus:outline-none transition-all duration-300"
                        placeholder="Enter your name"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-300 focus:outline-none transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white focus:bg-white/20 focus:border-pink-300 focus:outline-none transition-all duration-300"
                  >
                    <option value="1" className="bg-purple-900">Just me!</option>
                    <option value="2" className="bg-purple-900">2 people</option>
                    <option value="3" className="bg-purple-900">3 people</option>
                    <option value="4" className="bg-purple-900">4 people</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Birthday Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-300 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Share your excitement! 💜"
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
                      <span>Sending Magic...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <Heart className="w-5 h-5" />
                      <span>Added to Guest List! 💜</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Add Me to the Party! ✨</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Guest Wall */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Guest Wall</h3>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {guestList.map((guest, index) => (
                  <div
                    key={guest.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: guest.id === guestList.length ? 'slideInFromRight 0.5s ease-out' : 'none'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-full p-2">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">{guest.name}</h4>
                        <p className="text-white/70 text-xs mt-1">{guest.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-white/60 text-sm">
                  {guestList.length} magical guests confirmed! 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
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

export default RSVPSection;