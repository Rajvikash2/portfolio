import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="z-50 w-full sticky top-0">
      <div className="px-4 sm:px-8 lg:px-16 py-3 sm:py-4 lg:py-6 shadow-lg shadow-black w-full bg-black">
        <div className="flex justify-between items-center w-full">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <h1 className="text-yellow-400 font-bold text-lg sm:text-xl lg:text-2xl">
              <span className="text-xl sm:text-2xl lg:text-3xl mr-1 sm:mr-2 bg-white px-2 py-1 rounded-r-full text-black">
                Rajvikash's
              </span>
              𝙿𝚘𝚛𝚝𝚏𝚘𝚕𝚒𝚘
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-8">
              <li>
                <a 
                  href="#about-me" 
                  className="text-white hover:text-yellow-400 transition duration-300 text-sm lg:text-base font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-white hover:text-yellow-400 transition duration-300 text-sm lg:text-base font-medium"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skill-id" 
                  className="text-white hover:text-yellow-400 transition duration-300 text-sm lg:text-base font-medium"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white hover:text-yellow-400 transition duration-300 text-sm lg:text-base font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-yellow-400 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded-lg p-1"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen 
            ? 'max-h-64 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="border-t border-gray-700 pt-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <a 
                  href="#about-me" 
                  onClick={closeMenu}
                  className="block text-white hover:text-yellow-400 transition duration-300 py-2 px-2 rounded-lg hover:bg-gray-800 font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={closeMenu}
                  className="block text-white hover:text-yellow-400 transition duration-300 py-2 px-2 rounded-lg hover:bg-gray-800 font-medium"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skill-id" 
                  onClick={closeMenu}
                  className="block text-white hover:text-yellow-400 transition duration-300 py-2 px-2 rounded-lg hover:bg-gray-800 font-medium"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={closeMenu}
                  className="block text-white hover:text-yellow-400 transition duration-300 py-2 px-2 rounded-lg hover:bg-gray-800 font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='w-[90%] mx-auto h-[1px] bg-gradient-to-r from-red-200/10 via-gray-300/40 animate-pulse duration-[1700ms] to-red-200/10 '></div>
    </header>
  );
}

export default Header;