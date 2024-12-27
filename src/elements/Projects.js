import React from 'react'
import expense from '../components/expense.png'
import blog from '../components/blog.png'
import pas from '../components/pas.png'
import tm from '../components/tm.jpg'
import sp from '../components/sp.png'
import gvm from '../components/gvm.jpg'

export const Projects = () => {
  // Project data to make the component more maintainable
  const projects = [
    {
      id: 1,
      image: expense,
      title: 'Issue Tracker',
      description: 'A responsive issue tracking app created using NextJs. The backend is powered by MySQL with PRISMA ORM.',
      githubLink: 'https://github.com/Rajvikash2/issue-tracker'
    },
    {
      id: 2,
      image: blog,
      title: 'Simple Blog Page',
      description: 'A responsive blog page created using React.',
      githubLink: 'https://github.com/YourUsername/blog-project'
    },
    {
      id: 3,
      image: pas,
      title: 'AutoChad',
      description: 'A simple web application developed using React.ts and Hono for ride booking',
      githubLink: 'https://auto-chad.vercel.app/'
    },
    {
      id: 4,
      image: tm,
      title: 'Head Count Detector',
      description: 'A python model of Yolo v8 which is used to count the head count.Run using fast API',
      githubLink: 'https://github.com/Rajvikash2/head_count.git'
    },
    {
      id: 5,
      image: sp,
      title: 'Fixxy',
      description: 'A room complaint register app. Created with react. Has a beautiful UI and simple to use',
      githubLink: 'https://github.com/FixxyFrontend/UserPage.git'
    },
    {
      id: 6,
      image: gvm,
      title: 'Password Manager',
      description: 'A simple password vault built using React TypeScript and Hono.js as backend.',
      githubLink: 'https://gvm-2k24.vercel.app/'
    }
  ];

  return (
    <div className='container m-auto px-4 sm:px-10 py-10 relative'>
      {/* Background blur effect */}
      {/* <div className='absolute inset-0 bg-gray-950 backdrop-blur-sm z-0'></div> */}
      
      <h2 className='font-bold text-pink-600 text-3xl sm:text-4xl mb-12  relative z-10'>Projects</h2>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center relative z-10'>
        {projects.map((project) => (
          <div 
            key={project.id} 
            className='border border-gray-200/50 p-5 rounded-lg flex flex-col gap-4 
            transform transition-all duration-300 hover:shadow-xl hover:scale-105 
            hover:border-pink-300/70 group 
            bg-zinc-950 backdrop-blur-md 
            relative overflow-hidden'
          >
            {/* Subtle background glow */}
            <div className='absolute -top-1/2 -left-1/2 w-full h-full bg-pink-200/30 rounded-full blur-3xl opacity-50 z-0'></div>
            
            <div className='flex justify-center w-full h-48 overflow-hidden rounded-md relative z-10'>
              <img 
                className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 
                brightness-90 group-hover:brightness-100' 
                src={project.image} 
                alt={project.title} 
              />
            </div>
            <h2 className='font-bold text-xl text-gray-200 relative z-10'>{project.title}</h2>
            <p className='text-gray-400 flex-grow relative z-10'>{project.description}</p>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className='w-full relative z-10'
            >
              <button 
                className='w-full bg-blue-600/80 text-white py-2 rounded-md 
                hover:bg-pink-700 transition-colors duration-300 
                flex items-center justify-center gap-2
                backdrop-blur-sm'
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                View Project
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};