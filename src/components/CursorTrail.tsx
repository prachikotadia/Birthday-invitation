import React, { useEffect, useState } from 'react';

interface Trail {
  x: number;
  y: number;
  id: number;
}

const CursorTrail = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add new trail point
      const newTrail: Trail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++
      };
      
      setTrails(prev => [...prev, newTrail]);
      
      // Remove old trail points
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Cursor Trail */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-70 animate-ping"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            animationDelay: `${index * 0.1}s`,
            animationDuration: '1s'
          }}
        />
      ))}
      
      {/* Sparkle Effects */}
      {trails.filter((_, i) => i % 5 === 0).map((trail) => (
        <div
          key={`sparkle-${trail.id}`}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: trail.x + Math.random() * 20 - 10,
            top: trail.y + Math.random() * 20 - 10,
            animationDuration: `${0.5 + Math.random() * 0.5}s`
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;