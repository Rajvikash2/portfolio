import React from 'react';
import Aurora from '../components/reactbits/Aurora';
import SplitText from '../components/reactbits/SplitText';
import GradientText from '../components/reactbits/GradientText';

export const About = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-[#0d0d0d] to-[#1a1a1a]">
      <Aurora colorStops={['#3d5c17', '#0d0d0d', '#3d5c17']} amplitude={1.0} blend={0.55} />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 px-4 py-1 rounded-full border border-[#89F336]/30 text-[#c8f7a8] text-sm tracking-wide">
          Available for new opportunities
        </span>

        <h1 className="font-extrabold text-4xl md:text-6xl leading-tight" style={{ color: '#89F336' }}>
          <SplitText text="Hey, I'm Rajvikash" />
        </h1>

        <h2 className="font-bold text-2xl md:text-4xl mt-3">
          <GradientText colors={['#89F336', '#e4ffc9', '#89F336']}>
            Fullstack Developer
          </GradientText>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl">
          I build end-to-end products — from Node.js/Express backends and
          PostgreSQL/MongoDB data layers to React & Next.js frontends —
          currently shipping real-world platforms at{' '}
          <span className="text-[#89F336] font-medium">Anthill Networks</span>.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full font-semibold bg-[#89F336] text-black hover:scale-105 transition-transform"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full font-semibold border border-[#89F336]/50 text-[#89F336] hover:bg-[#89F336]/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};