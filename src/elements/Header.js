import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="z-50 w-full">
      <div className="box-border px-4 sm:px-16 py-4 sm:py-6 shadow-lg shadow-black w-full bg-black">
        <div className="flex justify-between items-center box-border w-full">
          <div className="box-border max-w-fit">
            <h1 className="text-yellow-400 font-bold text-xl sm:text-2xl max-w-fit box-border">
              <span className="text-2xl sm:text-3xl mr-2 bg-white p-1 sm:p-2 rounded-r-full text-black box-border">
                Rajvikash's
              </span>{" "}
              𝙿𝚘𝚛𝚝𝚏𝚘𝚕𝚒𝚘
            </h1>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-yellow-400 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg 
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={` ${
              menuOpen ? 'block' : 'hidden'
            } md:block box-border`}
          >
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0 mr-4 sm:mr-10 box-border">
              <li>
                <a href="#about-me" className="hover:text-yellow-400 transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-yellow-400 transition duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skill-id" className="hover:text-yellow-400 transition duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
