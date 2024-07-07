import React from 'react';

export default function GradientBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
      <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-radial from-black/20 to-transparent opacity-50 top-full left-full"></div>
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  );
}
