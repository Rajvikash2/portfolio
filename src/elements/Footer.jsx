import React from 'react';
import LaserFlow from '../components/reactbits/LaserFlow';


export const Footer = () => {
  return (
    <footer className="bg-black">
      <LaserFlow color="#89F336" height={2} />

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-400">
          <p>&copy; 2026 Rajvikash </p>
          <p className="tracking-widest uppercase text-xs text-gray-500">
            Bengaluru, IN
          </p>
        </div>

        <h2 className="text-white text-xl font-bold mt-10 mb-4">Social links:</h2>

        <ul className="flex flex-wrap gap-6">
          <li>
            <a
              href="https://www.linkedin.com/in/rajvikash-r-b4312325a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#89F336] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="hover:underline">LinkedIn</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/rajx_me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#89F336] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="hover:underline">Instagram</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Rajvikash2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#89F336] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="hover:underline">Github</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Giant fading name */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none -mt-4">
        <h1
          className=" russo-bold  text-center leading-none tracking-tight"
          style={{
            fontSize: 'clamp(4rem, 18vw, 14rem)',
            backgroundImage: 'linear-gradient(180deg, rgba(86, 83, 85, 0.34), rgba(65, 63, 64, 0.58))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
          }}
        >
          RAJVIKASH
        </h1>
      </div>
    </footer>
  );
};