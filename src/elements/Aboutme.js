import React from 'react'

export const Aboutme = () => {
  return (
    <div className='w-full md:w-[90%] mx-auto px-10 py-10'>
      <h2 className='font-bold text-pink-600 text-4xl mb-12'>About Me</h2>
      <div className='w-[90%] text-xl text-gray-300 mt-5 flex flex-row max-sm:flex-col gap-5 justify-around'>
        <div className='bg-black p-4 rounded-xl border-4 border-gray-700'>
          <ul>
            <li>Location: Coimbatore, Tamil Nadu</li>
            <li>Education: B.E Computer Science and Engineering</li>
            <li>University: Sri Eshwar College of Engineering</li>
          </ul>
        </div>
        <div className='bg-black p-4 rounded-xl border-4 border-gray-700'>
          <ul>
            <li>Phone: +91 7418413345</li>
            <li>Email: rajvikash.r2022cse@sece.ac.in</li>
            <li>LinkedIn: <a href='https://www.linkedin.com/in/rajvikash-r-0b1b1a1b6/' className=''>linkedin.com/in/rajvikash-r-0b1b1a1b6</a></li>
          </ul>
        </div>
      </div>
      <div className='text-gray-200 bg-black  p-2 md:p-5 mt-10 text-2xl'>
        <h2>
          As an aspiring Computer Science Engineer at Sri Eshwar College of Engineering,
          I combine strong analytical skills with a passion for innovative technology solutions.
          My approach involves thorough problem analysis followed by implementing efficient,
          scalable solutions. I specialize in web development and software engineering,
          consistently seeking opportunities to expand my technical expertise.
        </h2>
        <div className='p-10 mt-8 shadow-md rounded-lg'>
          <div className='w-full md:w-[70%] mx-auto mt-10 bg-orange-500 p-4 rounded-lg rotate-3 hover:rotate-0 cursor-pointer custom-shadow transition-transform duration-300'>
            <h2 className='mb-3 max-md:text-lg text-black font-bold'>Technical Expertise</h2>
            <h2 className='text-white max-sm:text-sm max-md:text-lg max-sm:h-fit'>
              My hands-on experience spans across multiple domains of software development.
              I actively contribute to open-source projects, participate in hackathons,
              and develop full-stack applications. My project portfolio demonstrates
              proficiency in modern web technologies and a commitment to writing clean,
              maintainable code.
            </h2>
          </div>
          <div className='w-full md:w-[70%] mx-auto mt-24 bg-yellow-600 p-4 rounded-lg -rotate-3 hover:rotate-0 cursor-pointer transition-transform duration-300 custom-shadow'>
            <h2 className='mb-3 text-black font-bold max-sm:text-sm max-md:text-lg'>Academic Excellence</h2>
            <h2 className='text-white max-sm:text-sm max-md:text-lg'>
              My academic journey reflects a strong foundation in computer science fundamentals,
              with particular emphasis on web development and UI/UX design. I maintain a
              balanced approach between theoretical knowledge and practical implementation,
              consistently achieving academic excellence while pursuing industry-relevant skills
              and certifications.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}