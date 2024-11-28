import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      {/* Changed px-6 to px-8 and added max-w-[1400px] for a wider container */}
      <div className="max-w-[1400px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3"> {/* Increased space-x-2 to space-x-3 */}
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-800">Savvy Side Solutions</span>
            </Link>
          </div>

          {/* Navigation Items - Increased spacing between items */}
          <div className="flex items-center space-x-10"> {/* Increased space-x-8 to space-x-10 */}
            <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link to="/contact" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 