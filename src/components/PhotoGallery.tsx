import React, { useState } from 'react';
import { X, Heart, Camera, ArrowLeft, Folder, Image } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface Photo {
  id: number;
  src: string;
  caption: string;
  likes: number;
}

interface PhotoFolder {
  id: number;
  name: string;
  icon: string;
  description: string;
  coverImage: string;
  photos: Photo[];
}

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [openFolder, setOpenFolder] = useState<number | null>(null);
  const [selectedFolderPhotos, setSelectedFolderPhotos] = useState<Photo[]>([]);
  const { isDarkMode } = useTheme();

  const photoFolders: PhotoFolder[] = [
    {
      id: 1,
      name: "K-pop Concert Vibes",
      icon: "🎤",
      description: "Amazing moments from concerts and K-pop events!",
      coverImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      photos: [
        { id: 1, src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Squad goals at the K-pop concert! 🎤✨", likes: 47 },
        { id: 2, src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Dancing to our favorite songs! 💃", likes: 52 },
        { id: 3, src: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Concert lights and magic! ✨", likes: 38 },
        { id: 4, src: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Best night ever with my girls! 💜", likes: 61 },
        { id: 5, src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Singing along to every song! 🎵", likes: 73 },
        { id: 6, src: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Concert outfit on point! 👗", likes: 44 },
        { id: 7, src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Front row energy! 🔥", likes: 56 },
        { id: 8, src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Making memories! 📸", likes: 42 },
        { id: 9, src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Concert glow! ✨", likes: 39 },
        { id: 10, src: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Living our best life! 💫", likes: 67 },
        { id: 11, src: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple lights everywhere! 💜", likes: 48 },
        { id: 12, src: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Concert vibes forever! 🎶", likes: 55 },
        { id: 13, src: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Dancing queens! 👑", likes: 63 },
        { id: 14, src: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Stage lights magic! ✨", likes: 41 },
        { id: 15, src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Concert memories! 💭", likes: 59 },
        { id: 16, src: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Best friends forever! 👯‍♀️", likes: 72 },
        { id: 17, src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Concert energy! ⚡", likes: 46 },
        { id: 18, src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Magical night! 🌟", likes: 54 },
        { id: 19, src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Concert squad! 👥", likes: 68 },
        { id: 20, src: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Unforgettable moments! 💖", likes: 75 }
      ]
    },
    {
      id: 2,
      name: "Birthday Celebrations",
      icon: "🎂",
      description: "Sweet memories from past birthdays and celebrations!",
      coverImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      photos: [
        { id: 21, src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Birthday girl vibes all year round! 💜", likes: 52 },
        { id: 22, src: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Making memories with my favorite people 💕", likes: 38 },
        { id: 23, src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Dancing like nobody's watching! 💃", likes: 61 },
        { id: 24, src: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Sweet 16 preview with my besties! 🎂", likes: 73 },
        { id: 25, src: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple everything because it's my color! 💜", likes: 44 },
        { id: 26, src: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Birthday cake moments! 🍰", likes: 56 },
        { id: 27, src: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Celebration time! 🎉", likes: 42 },
        { id: 28, src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Birthday wishes coming true! ⭐", likes: 39 },
        { id: 29, src: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Party planning mode! 📝", likes: 67 },
        { id: 30, src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Birthday countdown! ⏰", likes: 48 },
        { id: 31, src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Sweet sixteen dreams! 💭", likes: 55 },
        { id: 32, src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Birthday magic! ✨", likes: 63 },
        { id: 33, src: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Celebration vibes! 🎊", likes: 41 },
        { id: 34, src: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Birthday glow up! ✨", likes: 59 },
        { id: 35, src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Party ready! 🎈", likes: 72 },
        { id: 36, src: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Birthday squad! 👯‍♀️", likes: 46 },
        { id: 37, src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Sweet moments! 🍭", likes: 54 },
        { id: 38, src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Birthday princess! 👸", likes: 68 },
        { id: 39, src: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Celebration memories! 📸", likes: 75 },
        { id: 40, src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Birthday bliss! 😊", likes: 58 }
      ]
    },
    {
      id: 3,
      name: "Friends Forever",
      icon: "👯‍♀️",
      description: "Precious moments with my amazing friends!",
      coverImage: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      photos: [
        { id: 41, src: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Best friends forever! 💕", likes: 89 },
        { id: 42, src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Friendship goals! 👯‍♀️", likes: 76 },
        { id: 43, src: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Squad adventures! 🌟", likes: 64 },
        { id: 44, src: "https://images.pexels.com/photos/1181677/pexels-photo-1677.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Laughing together! 😂", likes: 82 },
        { id: 45, src: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Friendship magic! ✨", likes: 57 },
        { id: 46, src: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Making memories! 📷", likes: 71 },
        { id: 47, src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Friend group vibes! 💫", likes: 45 },
        { id: 48, src: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Together forever! 🤝", likes: 69 },
        { id: 49, src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Friendship adventures! 🗺️", likes: 53 },
        { id: 50, src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Squad love! 💜", likes: 78 },
        { id: 51, src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Best times together! ⏰", likes: 62 },
        { id: 52, src: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Friendship goals achieved! 🎯", likes: 84 },
        { id: 53, src: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Squad selfie! 🤳", likes: 66 },
        { id: 54, src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Friends who slay together! 💅", likes: 73 },
        { id: 55, src: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Unbreakable bond! 🔗", likes: 91 },
        { id: 56, src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Friendship sparkles! ✨", likes: 58 },
        { id: 57, src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Squad energy! ⚡", likes: 67 },
        { id: 58, src: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Together we shine! 🌟", likes: 85 },
        { id: 59, src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Friendship forever! ♾️", likes: 79 },
        { id: 60, src: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "My amazing squad! 👑", likes: 93 }
      ]
    },
    {
      id: 4,
      name: "Purple Queen Era",
      icon: "👑",
      description: "All things purple and royal vibes!",
      coverImage: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
      photos: [
        { id: 61, src: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple everything because it's my color! 💜", likes: 44 },
        { id: 62, src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple queen vibes! 👑", likes: 67 },
        { id: 63, src: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Royal purple aesthetic! 💜", likes: 52 },
        { id: 64, src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple power! ⚡", likes: 73 },
        { id: 65, src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Living in purple! 💜", likes: 58 },
        { id: 66, src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple dreams! 💭", likes: 61 },
        { id: 67, src: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Queen energy! 👸", likes: 79 },
        { id: 68, src: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple magic! ✨", likes: 46 },
        { id: 69, src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Royal vibes only! 👑", likes: 84 },
        { id: 70, src: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple perfection! 💜", likes: 55 },
        { id: 71, src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Crown fits perfectly! 👑", likes: 72 },
        { id: 72, src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple princess! 👸", likes: 68 },
        { id: 73, src: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Majestic moments! ✨", likes: 76 },
        { id: 74, src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple reign! 👑", likes: 63 },
        { id: 75, src: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Royal treatment! 💜", likes: 81 },
        { id: 76, src: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple paradise! 🏰", likes: 59 },
        { id: 77, src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Queen of purple! 👑", likes: 87 },
        { id: 78, src: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple elegance! 💜", likes: 64 },
        { id: 79, src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Royal purple mood! 👸", likes: 75 },
        { id: 80, src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400", caption: "Purple queen forever! 💜👑", likes: 92 }
      ]
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const openFolderView = (folder: PhotoFolder) => {
    setOpenFolder(folder.id);
    setSelectedFolderPhotos(folder.photos);
  };

  const closeFolderView = () => {
    setOpenFolder(null);
    setSelectedFolderPhotos([]);
  };

  return (
    <section className={`py-20 relative transition-all duration-1000 ${
      isDarkMode
        ? 'bg-gradient-to-b from-pink-900 to-purple-900'
        : 'bg-gradient-to-b from-pink-50 to-purple-100'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M0 0h80v80H0z%22/%3E%3Cg%3E%3Cpath d=%22M20 20h20v20H20z%22/%3E%3Cpath d=%22M40 40h20v20H40z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent`}>
            📷 Memory Folders 📷
          </h2>
          <p className={`text-lg md:text-xl ${
            isDarkMode ? 'text-white/80' : 'text-purple-700'
          }`}>
            {openFolder ? 'Browse through magical memories!' : 'Click on any folder to explore amazing memories! ✨'}
          </p>
        </div>

        {/* Folder View */}
        {!openFolder && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {photoFolders.map((folder) => (
              <div
                key={folder.id}
                onClick={() => openFolderView(folder)}
                className={`group relative cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95 active:animate-bounce`}
              >
                {/* Glass Card */}
                <div className={`backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 border transition-all duration-300 hover:scale-105 shadow-lg sm:shadow-xl md:shadow-2xl ${
                  isDarkMode
                    ? 'bg-white/10 border-white/20 hover:bg-white/20'
                    : 'bg-white/80 border-purple-200 hover:bg-white/90'
                }`}>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Folder Icon and Cover */}
                  <div className="relative mb-2 sm:mb-3 md:mb-4">
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border-2 border-white/10 group-hover:border-white/30 transition-all duration-300">
                      {/* Glowing border effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
                      <img
                        src={folder.coverImage}
                        alt={folder.name}
                        className="relative w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover transform group-hover:scale-110 group-active:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Folder Icon Overlay */}
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`rounded-full p-2 ${
                          isDarkMode ? 'bg-white/90' : 'bg-purple-100/90'
                        }`}>
                          <Folder className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ${
                            isDarkMode ? 'text-purple-600' : 'text-purple-700'
                          }`} />
                        </div>
                      </div>

                      {/* Photo Count */}
                      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`rounded-full px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-semibold ${
                          isDarkMode ? 'bg-white/90 text-purple-800' : 'bg-purple-100/90 text-purple-700'
                        }`}>
                          {folder.photos.length} photos
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Folder Info */}
                  <div className="text-center relative z-10">
                    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <span className="text-lg sm:text-xl md:text-2xl">{folder.icon}</span>
                      <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold group-hover:text-pink-400 transition-colors duration-300 leading-tight ${
                        isDarkMode ? 'text-white' : 'text-purple-800'
                      }`}>
                        {folder.name}
                      </h3>
                    </div>
                    <p className={`text-xs sm:text-sm ${
                      isDarkMode ? 'text-white/70' : 'text-purple-600'
                    } leading-tight`}>
                      {folder.description}
                    </p>
                  </div>

                  {/* Sparkle Effects on Hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Photo Grid View */}
        {openFolder && (
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <button
                onClick={closeFolderView}
                className={`flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDarkMode
                    ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    : 'bg-white/80 text-purple-800 border border-purple-200 hover:bg-white'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Folders</span>
              </button>
            </div>

            {/* Current Folder Info */}
            <div className={`backdrop-blur-xl rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border text-center ${
              isDarkMode
                ? 'bg-white/10 border-white/20'
                : 'bg-white/80 border-purple-200'
            }`}>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl">{photoFolders.find(f => f.id === openFolder)?.icon}</span>
                <h3 className={`text-xl sm:text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-purple-800'
                }`}>
                  {photoFolders.find(f => f.id === openFolder)?.name}
                </h3>
              </div>
              <p className={`text-sm sm:text-base ${
                isDarkMode ? 'text-white/70' : 'text-purple-600'
              }`}>
                {selectedFolderPhotos.length} magical memories to explore!
              </p>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              {selectedFolderPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95 active:animate-bounce"
                  onClick={() => openLightbox(index)}
                >
                  {/* Glass Card */}
                  <div className={`backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-3 border transition-all duration-300 shadow-md sm:shadow-lg ${
                    isDarkMode
                      ? 'bg-white/10 border-white/20 hover:bg-white/20'
                      : 'bg-white/80 border-purple-200 hover:bg-white/90'
                  }`}>
                    {/* Photo */}
                    <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-2 sm:mb-3 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                      {/* Glowing border effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300 rounded-lg sm:rounded-xl"></div>
                      <img
                        src={photo.src}
                        alt={`Memory ${photo.id}`}
                        className="relative w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover transform group-hover:scale-110 group-active:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Camera Icon */}
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-1">
                          <Camera className="w-2 h-2 sm:w-3 sm:h-3 text-purple-600" />
                        </div>
                      </div>
                    </div>

                    {/* Likes */}
                    <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="w-2 h-2 sm:w-3 sm:h-3 text-pink-400" />
                      <span className={`text-xs sm:text-sm ${
                        isDarkMode ? 'text-white/70' : 'text-purple-600'
                      }`}>
                        {photo.likes}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && selectedFolderPhotos.length > 0 && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className={`absolute top-4 right-4 z-10 rounded-full p-2 transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                  : 'bg-white/80 backdrop-blur-sm hover:bg-white'
              }`}
            >
              <X className={`w-6 h-6 ${
                isDarkMode ? 'text-white' : 'text-purple-800'
              }`} />
            </button>

            {/* Image */}
            <div className={`backdrop-blur-xl rounded-3xl p-6 border ${
              isDarkMode
                ? 'bg-white/10 border-white/20'
                : 'bg-white/90 border-purple-200'
            }`}>
              <img
                src={selectedFolderPhotos[selectedImage].src}
                alt={`Memory ${selectedFolderPhotos[selectedImage].id}`}
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Caption */}
              <div className="text-center mt-6">
                <p className={`text-lg mb-4 ${
                  isDarkMode ? 'text-white' : 'text-purple-800'
                }`}>
                  {selectedFolderPhotos[selectedImage].caption}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400" />
                  <span className={`${
                    isDarkMode ? 'text-white/70' : 'text-purple-600'
                  }`}>
                    {selectedFolderPhotos[selectedImage].likes} likes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;