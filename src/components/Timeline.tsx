import React, { useState, useEffect } from 'react';
import { Calendar, Heart, Star, Music, Camera, Gift } from 'lucide-react';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const timelineEvents = [
    {
      id: 1,
      year: "2009",
      title: "The Beginning 👶",
      description: "A little star was born! The world became more magical.",
      icon: <Star className="w-5 h-5" />,
      color: "from-pink-400 to-purple-400",
      image: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 2,
      year: "2015",
      title: "First K-pop Love 🎵",
      description: "Discovered the magical world of K-pop and never looked back!",
      icon: <Music className="w-5 h-5" />,
      color: "from-purple-400 to-pink-400",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 3,
      year: "2018",
      title: "BFF Squad Formed 👯‍♀️",
      description: "Found my forever friends who love purple as much as I do!",
      icon: <Heart className="w-5 h-5" />,
      color: "from-pink-400 to-purple-400",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 4,
      year: "2020",
      title: "Purple Queen Era 💜",
      description: "Officially declared purple as my signature color. Crown fits perfectly!",
      icon: <Gift className="w-5 h-5" />,
      color: "from-purple-400 to-pink-400",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 5,
      year: "2022",
      title: "Concert Adventures 🎤",
      description: "Attended my first K-pop concert! Dreams do come true!",
      icon: <Camera className="w-5 h-5" />,
      color: "from-pink-400 to-purple-400",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 6,
      year: "2025",
      title: "Sweet Sixteen! 🎂",
      description: "The magical celebration begins! Ready for the next chapter!",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-purple-400 to-pink-400",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineElements = document.querySelectorAll('.timeline-item');
    timelineElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-pink-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M60 60L0 0h120v120L60 60z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            ✨ Life Scrapbook ✨
          </h2>
          <p className="text-xl text-white/80">Journey through my magical memories! 💜</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-purple-400 rounded-full opacity-30"></div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                data-index={index}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${event.color} p-1 shadow-2xl ${
                    visibleItems.includes(index) ? 'animate-pulse' : ''
                  }`}>
                    <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border-2 border-white/20">
                      {event.icon}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full max-w-md ${
                  index % 2 === 0 ? 'mr-8 text-right' : 'ml-8 text-left'
                } ${
                  visibleItems.includes(index) 
                    ? 'animate-fadeInUp' 
                    : 'opacity-0 transform translate-y-8'
                }`}>
                  <div className="group backdrop-blur-xl bg-white/10 rounded-3xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    {/* Year Badge */}
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-sm mb-4 shadow-lg`}>
                      {event.year}
                    </div>

                    {/* Image */}
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {event.description}
                    </p>

                    {/* Sparkle Effects */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 1}s`,
                            animationDuration: '1.5s'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Timeline;