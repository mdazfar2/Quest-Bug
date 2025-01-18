import React from 'react';
import { Cloud, Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  navigateToHome: () => void;
  navigateToTasks: () => void;
}

function Navbar({ isMenuOpen, toggleMenu, navigateToHome, navigateToTasks }: NavbarProps) {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Cloud className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-blue-900">HelpOps Quest</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={navigateToHome} className="text-blue-900 hover:text-orange-500 transition-colors">Home</button>
            <button onClick={navigateToTasks} className="text-blue-900 hover:text-orange-500 transition-colors">Tasks</button>
            <a href="#" className="text-blue-900 hover:text-orange-500 transition-colors">Leaderboards</a>
            <a href="#" className="text-blue-900 hover:text-orange-500 transition-colors">Sponsor Us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-900">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <button onClick={navigateToHome} className="block w-full text-left px-3 py-2 text-blue-900 hover:text-orange-500">Home</button>
            <button onClick={navigateToTasks} className="block w-full text-left px-3 py-2 text-blue-900 hover:text-orange-500">Tasks</button>
            <a href="#" className="block px-3 py-2 text-blue-900 hover:text-orange-500">Leaderboards</a>
            <a href="#" className="block px-3 py-2 text-blue-900 hover:text-orange-500">Sponsor Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;