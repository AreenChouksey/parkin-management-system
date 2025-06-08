
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { User } from '../types/user';
import UserDropdown from './UserDropdown';

interface NavigationProps {
  user: User | null;
  onLogout: () => void;
  onShowLogin: () => void;
  onShowSignup: () => void;
  isLoggedIn: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  user,
  onLogout,
  onShowLogin,
  onShowSignup,
  isLoggedIn
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-slate-800 text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://www.ewaysservices.com/images/eways.jpg" 
              alt="Eways Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold">At Parkkin</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!isLoggedIn ? (
              <>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </button>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={onShowLogin}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    Login
                  </button>
                  <button
                    onClick={onShowSignup}
                    className="border border-white border-opacity-30 hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    Sign Up
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className="hover:text-blue-400 transition-colors duration-200">
                  Dashboard
                </button>
                <button className="hover:text-blue-400 transition-colors duration-200">
                  Reservations
                </button>
                <button className="hover:text-blue-400 transition-colors duration-200">
                  Reports
                </button>
                <UserDropdown user={user} onLogout={onLogout} />
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            {!isLoggedIn ? (
              <>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-200"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </button>
                <div className="pt-4 space-y-2">
                  <button
                    onClick={onShowLogin}
                    className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-colors duration-200"
                  >
                    Login
                  </button>
                  <button
                    onClick={onShowSignup}
                    className="w-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-10 py-2 rounded-lg transition-colors duration-200"
                  >
                    Sign Up
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-200">
                  Dashboard
                </button>
                <button className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-200">
                  Reservations
                </button>
                <button className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-200">
                  Reports
                </button>
                <div className="pt-2">
                  <UserDropdown user={user} onLogout={onLogout} isMobile />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
