import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-blue-600 text-2xl font-bold">KoinX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Crypto Taxes
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Free Tools
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Resource Center
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Crypto Taxes
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Free Tools
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Resource Center
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;