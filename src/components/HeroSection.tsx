
import React from 'react';

interface HeroSectionProps {
  onShowLogin: () => void;
  onShowSignup: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onShowLogin, onShowSignup }) => {
  const showDemo = () => {
    alert('Demo video would be shown here. This is a placeholder for the demo functionality.');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Smart Parking Management System
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Streamline your parking operations with our intuitive management system. 
              Monitor spaces, manage reservations, and optimize revenue all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onShowSignup}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get Started Free
              </button>
              <button
                onClick={showDemo}
                className="border-2 border-white border-opacity-30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 transform hover:scale-105 transition-all duration-200"
              >
                Watch Demo
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="w-20 h-32 bg-green-500 rounded-lg animate-pulse"></div>
                  <div className="w-20 h-32 bg-red-500 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="space-y-4">
                  <div className="w-20 h-32 bg-green-500 rounded-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="w-20 h-32 bg-yellow-500 rounded-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-sm opacity-75">Real-time Space Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
