import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Dashboard', 'Bets', 'Messages', 'Wallet', 'History'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="px-4 sm:px-8 py-4 sm:py-6">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="text-2xl font-bold">Frystlk</span>
          </div>
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="relative px-4 py-2 text-lg font-medium transition-colors duration-200 hover:text-orange-500"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden relative">
        {/* Mobile Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold">Frystlk</span>
          </div>
          
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 z-50 relative"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 animate-in slide-in-from-top-2 duration-300">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 relative z-50">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-3 text-lg font-medium transition-colors text-black duration-200 hover:bg-gray-50 hover:text-orange-500 rounded-lg block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tablet Navigation (md-lg breakpoint) */}
      <div className="hidden md:flex lg:hidden items-center justify-between relative">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-2xl font-bold">Frystlk</span>
        </div>
        
        {/* Tablet Menu Button */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg text-black hover:bg-gray-100 transition-colors duration-200 z-50 relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}></span>
            <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}></span>
          </div>
        </button>
        
        {/* Tablet Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 text-black bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="px-4 py-3 text-center text-lg font-medium transition-colors duration-200 hover:bg-gray-50 hover:text-orange-500 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;