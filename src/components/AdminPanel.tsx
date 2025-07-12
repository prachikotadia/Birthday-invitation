import React, { useState, useEffect } from 'react';
import { Download, Users, Heart, Music, Activity, BarChart3, AlertCircle } from 'lucide-react';
import { adminApi } from '../services/api';

interface Stats {
  totalGuests: number;
  totalWishes: number;
  totalSongs: number;
  totalInteractions: number;
}

const AdminPanel = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      setIsLoading(true);
      const statsData = await adminApi.getStats();
      setStats(statsData);
    } catch (err) {
      console.error('Failed to load stats:', err);
      setError('Failed to load statistics. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      setIsExporting(true);
      const data = await adminApi.exportAllData();
      
      // Create and download JSON file
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ashi-birthday-data-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to export data:', err);
      setError('Failed to export data. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  // Hidden admin access - triple click on the page title
  const handleTitleClick = () => {
    const now = Date.now();
    if (!window.lastTitleClick) {
      window.lastTitleClick = now;
    } else if (now - window.lastTitleClick < 1000) {
      window.titleClickCount = (window.titleClickCount || 0) + 1;
      if (window.titleClickCount >= 3) {
        setShowPanel(true);
        window.titleClickCount = 0;
      }
    } else {
      window.titleClickCount = 1;
    }
    window.lastTitleClick = now;
  };

  if (!showPanel) {
    return (
      <div 
        className="fixed top-4 left-4 z-50 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
        onClick={handleTitleClick}
      >
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-2">
          <BarChart3 className="w-4 h-4 text-white" />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Panel</h2>
          <button
            onClick={() => setShowPanel(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <span className="text-red-700 dark:text-red-300 text-sm">{error}</span>
          </div>
        )}

        {/* Statistics */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Statistics</h3>
          
          {isLoading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-400"></div>
            </div>
          ) : stats ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Guests</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalGuests}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-purple-500" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Birthday Wishes</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalWishes}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Music className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Song Requests</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalSongs}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Interactions</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalInteractions}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No data available</p>
          )}
        </div>

        {/* Export Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Export Data</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Download all guest data, birthday wishes, song requests, and interactions as a JSON file.
          </p>
          
          <button
            onClick={handleExport}
            disabled={isExporting}
            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
              isExporting
                ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 hover:scale-105'
            }`}
          >
            {isExporting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Exporting...</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>Export All Data</span>
              </>
            )}
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Note:</strong> This admin panel is hidden by default. To access it, triple-click on the page title area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 