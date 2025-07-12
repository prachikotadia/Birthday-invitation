import React, { useState, useEffect } from 'react';
import { Music, Send, Headphones, AlertCircle, Play } from 'lucide-react';
import { songsApi } from '../services/api';
import { SongRequest } from '../lib/supabase';

const SongRequestsSection = () => {
  const [songs, setSongs] = useState<SongRequest[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    song_title: '',
    artist: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSongs();
  }, []);

  const loadSongs = async () => {
    try {
      setIsLoading(true);
      const songsData = await songsApi.getSongRequests();
      setSongs(songsData);
    } catch (err) {
      console.error('Failed to load songs:', err);
      setError('Failed to load song requests. Please refresh the page.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.song_title) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const newSong = await songsApi.submitSongRequest({
        name: formData.name,
        song_title: formData.song_title,
        artist: formData.artist || undefined
      });

      setSongs([newSong, ...songs]);
      setSubmitted(true);
      
      // Reset form
      setFormData({ name: '', song_title: '', artist: '' });
      
      // Reset submission state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Failed to submit song request:', err);
      setError('Failed to submit song request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            🎵 Song Requests 🎵
          </h2>
          <p className="text-xl text-white/80">Help create the perfect party playlist! ✨</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Song Request Form */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Request a Song</h3>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-200 text-sm">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-blue-300 focus:outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Song Title *</label>
                  <input
                    type="text"
                    name="song_title"
                    value={formData.song_title}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-blue-300 focus:outline-none transition-all duration-300"
                    placeholder="Enter song title"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Artist (optional)</label>
                  <input
                    type="text"
                    name="artist"
                    value={formData.artist}
                    onChange={handleChange}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-blue-300 focus:outline-none transition-all duration-300"
                    placeholder="Enter artist name"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 ${
                    submitted
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Adding to Playlist...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <Play className="w-5 h-5" />
                      <span>Song Added! 🎵</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Add to Playlist ✨</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Playlist Wall */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Party Playlist</h3>
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                </div>
              ) : (
                <>
                  <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                    {songs.map((song, index) => (
                      <div
                        key={song.id}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                        style={{
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-2">
                            <Music className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white text-sm">{song.song_title}</h4>
                            {song.artist && (
                              <p className="text-white/60 text-xs mt-1">by {song.artist}</p>
                            )}
                            <p className="text-white/50 text-xs mt-2">
                              Requested by {song.name} • {new Date(song.created_at).toLocaleDateString([], { 
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
                      {songs.length} songs in the playlist! 🎶
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

export default SongRequestsSection; 