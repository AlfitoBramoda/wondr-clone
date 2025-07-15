"use client";

import { useState } from 'react';

function Navbar() {
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">wandr</span>
              <span className="text-xs text-gray-500 ml-1">by BNI</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Fitur Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsFeatureOpen(!isFeatureOpen)}
                  className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium flex items-center"
                >
                  Fitur
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isFeatureOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {isFeatureOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Fitur 1
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Fitur 2
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Fitur 3
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Info Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsInfoOpen(!isInfoOpen)}
                  className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium flex items-center"
                >
                  Info
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isInfoOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {isInfoOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Tentang Kami
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Kontak
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        FAQ
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Download Sekarang
            </button>
            
            <div className="flex items-center space-x-2 text-sm">
              <button className="text-gray-900 font-medium border-r border-gray-300 pr-2">
                ID
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-orange-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;