import React from 'react';
import profile from '../components/profile.jpg'
export const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 py-6 md:py-10">
      <div className="flex flex-col md:flex-row items-center justify-around gap-8">
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="font-bold text-3xl md:text-4xl">Hey I'm Rajvikash</h1>
          <h2 className="gradient-text font-bold text-2xl md:text-3xl mt-1 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Student & fullstack developer
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg">
            Currently doing my UG in computer science engineering,
            <br className="hidden md:block" /> in Sri Eshwar College of engineering, Coimbatore.
          </p>
        </div>
        
        <div className="order-1 md:order-2">
          <img
            src={profile}
            alt="profile"
            className="rounded-full border-4 border-black shadow-lg shadow-blue-800 w-48 h-48 md:w-72 md:h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
};