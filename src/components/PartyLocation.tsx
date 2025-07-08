import React, { useState } from 'react';
import { MapPin, Copy, Clock, Navigation } from 'lucide-react';

const PartyLocation = () => {
  const [copied, setCopied] = useState(false);
  const address = "123 Rainbow Avenue, Dreamland District, Magic City 90210";

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M60 60L0 0h120v120L60 60z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            📍 Party Location 📍
          </h2>
          <p className="text-xl text-white/80">Where the magic happens! Don't miss out! ✨</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Section */}
            <div className="group">
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                
                {/* Mock Map */}
                <div className="relative h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M20 20h20v20H20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
                  
                  {/* Pulsing Location Pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-pink-300 rounded-full animate-ping opacity-75"></div>
                      <div className="relative bg-pink-500 rounded-full p-3 shadow-lg">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Map Grid Lines */}
                  <div className="absolute inset-0 bg-grid-white/10 opacity-20"></div>
                </div>

                {/* Map Info */}
                <div className="mt-6 text-center">
                  <p className="text-white/80 text-sm mb-2">🎉 Sweet Sixteen Venue 🎉</p>
                  <div className="flex items-center justify-center gap-2">
                    <Navigation className="w-4 h-4 text-purple-300" />
                    <span className="text-white/70 text-sm">Interactive Map Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Venue Address</h3>
                    <p className="text-white/80 text-lg leading-relaxed mb-4">
                      {address}
                    </p>
                    <button
                      onClick={copyAddress}
                      className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 group"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                      {copied && (
                        <div className="absolute inset-0 bg-white/20 rounded-xl animate-ping"></div>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Party Details */}
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Party Schedule</h3>
                    <div className="space-y-3 text-white/80">
                      <div className="flex justify-between">
                        <span>🎵 Pre-party Music</span>
                        <span>6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>🎂 Birthday Celebration</span>
                        <span>7:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>💃 Dance Party</span>
                        <span>8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>🌟 Magical Surprises</span>
                        <span>All Night!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions Note */}
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 shadow-2xl border border-white/20 text-center">
                <p className="text-white/80 text-sm">
                  💜 Free parking available • Easy access via Rainbow Metro Line 💜
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartyLocation;