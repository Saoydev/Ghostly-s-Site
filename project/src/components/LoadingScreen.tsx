// src/components/LoadingScreen.tsx
import React from 'react';
import { Shield } from 'lucide-react'; // Assuming you want to use the Shield icon

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center
        bg-black transition-opacity duration-700 ease-out
        ${isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="text-center">
        {/* Logo/Icon */}
        <div className="p-4 bg-[#fa1f5a] rounded-full inline-flex items-center justify-center mb-6 animate-pulse-slow">
          <Shield className="h-12 w-12 text-white" />
        </div>
        {/* Loading Text */}
        <h1 className="text-white text-5xl font-bold animate-fade-in-up">
          Loading <span className="text-[#fa1f5a]">Securely</span>
        </h1>
        {/* Optional: Add a simple loading spinner */}
        <div className="mt-8">
          <div className="w-10 h-10 border-4 border-t-4 border-white border-t-[#fa1f5a] rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;