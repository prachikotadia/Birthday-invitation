import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Copy, Navigation } from 'lucide-react';

const VENUE = "Royal Albert's Palace";
const ADDRESS = "1050 King Georges Post Rd, Fords, NJ 08863";
const DATE = "07/12/2025";
const TIME = "6:00 PM";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const PartyLocation = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 transition-all duration-700">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          🎉 Party Location 🎉
        </h2>
        <div className="bg-white/80 dark:bg-white/10 rounded-2xl shadow-lg p-6 md:p-10 border border-purple-200 dark:border-white/10 mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-purple-900 dark:text-white mb-2 flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6 text-pink-500" /> {VENUE}
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-4">
            <span className="text-lg md:text-xl text-purple-700 dark:text-purple-200 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              {ADDRESS}
            </span>
            <button
              onClick={copyAddress}
              className="ml-2 px-3 py-1 rounded-lg bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs font-semibold flex items-center gap-1 hover:scale-105 transition"
              title="Copy address"
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 mb-6">
            <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-xl px-6 py-3 font-bold text-lg md:text-xl shadow-md flex items-center gap-2">
              <Calendar className="w-5 h-5" /> {DATE}
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl px-6 py-3 font-bold text-lg md:text-xl shadow-md flex items-center gap-2">
              <Clock className="w-5 h-5" /> {TIME}
            </div>
          </div>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:scale-110 hover:shadow-pink-400/40 focus:scale-110 focus:shadow-pink-400/40 transition mb-6"
          >
            <Navigation className="w-5 h-5 animate-bounce" /> Get Directions
          </a>
          <div className="rounded-xl overflow-hidden shadow-lg border border-purple-200 dark:border-white/10 mt-6 flex items-center justify-center">
            {/* Interactive static map placeholder */}
            <div className="relative w-full h-64 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <MapPin className="w-20 h-20 text-pink-500 drop-shadow-lg animate-pulse group-hover:scale-125 group-hover:text-purple-600 transition-all duration-300" />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-white/10 px-4 py-2 rounded-xl text-purple-700 dark:text-purple-200 text-lg font-semibold shadow-md group-hover:bg-pink-100 group-hover:text-pink-700 transition-all duration-300">
                {VENUE}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartyLocation;