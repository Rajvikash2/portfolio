import React from 'react'

export const Skill = () => {
  return (
    <div className='container m-auto px-6 py-10'>
      <h2 className='font-bold text-pink-600 text-4xl mb-8'>Skills</h2>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
        <div className='flex flex-col items-center'>
          <img src="https://devicon-website.vercel.app/api/html5/plain-wordmark.svg" className='w-24 h-24 md:w-32 md:h-32' alt='HTML5'/>
        </div>
        <div className='flex flex-col items-center'>
          <img src="https://devicon-website.vercel.app/api/mongodb/original-wordmark.svg" className='w-24 h-24 md:w-32 md:h-32' alt='MongoDB'/>
        </div>
        <div className='flex flex-col items-center'>
          <img src="https://devicon-website.vercel.app/api/javascript/original.svg" className='w-24 h-24 md:w-32 md:h-32' alt='JavaScript'/>
        </div>
        <div className='flex flex-col items-center'>
          <img src="https://devicon-website.vercel.app/api/typescript/original.svg" className='w-24 h-24 md:w-32 md:h-32' alt='TypeScript'/>
        </div>
        <div className='flex flex-col items-center'>
          <img src="https://devicon-website.vercel.app/api/nodejs/original-wordmark.svg" className='w-24 h-24 md:w-32 md:h-32' alt='Node.js'/>
        </div>
        <div className='flex flex-col items-center'>
          <img src="https://devicon-website.vercel.app/api/react/original.svg" className='w-24 h-24 md:w-32 md:h-32' alt='React'/>
        </div>
        <div className='flex flex-col items-center'>
          <img src="https://devicon-website.vercel.app/api/express/original-wordmark.svg?color=%23FFFFFF" className='w-24 h-24 md:w-32 md:h-32 ' alt='Express'/>
        </div>
        <div className='flex flex-col items-center'>
          <img src="https://devicon-website.vercel.app/api/tailwindcss/plain.svg" className='w-24 h-24 md:w-32 md:h-32' alt='TailwindCSS'/>
        </div>
        <div className='flex flex-col items-center'>
          <img src="https://devicon-website.vercel.app/api/css3/plain-wordmark.svg" className='w-24 h-24 md:w-32 md:h-32' alt='CSS3'/>
        </div>
        <div className='flex flex-col items-center'>
          <img src="https://devicon-website.vercel.app/api/python/original-wordmark.svg" className='w-24 h-24 md:w-32 md:h-32' alt='Python'/>
        </div>
        <div className='flex flex-col items-center'>
          <img src="https://devicon-website.vercel.app/api/java/original-wordmark.svg" className='w-24 h-24 md:w-32 md:h-32' alt='Java'/>
        </div>
      </div>

      <div className='text-xl text-gray-400 mt-8 '>
        <h2>
          I am proficient in building responsive and visually appealing web pages using 
          HTML and CSS. My attention to detail ensures that the user interface is 
          both functional and aesthetically pleasing.
        </h2>

        <h2 className='mt-4'>
          With a growing passion for modern web development, I am currently focusing 
          on mastering React.js. I have hands-on experience in building interactive 
          and dynamic user interfaces, leveraging the power of React 
          components and state management.
        </h2>
      </div>
    </div>
  )
}
