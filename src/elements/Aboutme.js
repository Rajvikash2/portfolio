import React from 'react'

export const Aboutme = () => {
  return (
    <div className='container m-auto px-10 py-10 '>

    <h2 className='font-bold text-pink-600 text-4xl mb-12'>About Me</h2>

    <div className='text-xl text-gray-400 mt-5 flex flex-row justify-evenly mr-64'>
     <div>
     <ul>
        <li>Born : 22 Aug 2004</li>
        <li>Age : 19</li>
        <li>Location : Coimbatore</li>
      </ul>
     </div>

     <div>
      <ul>
        <li>Phone : 1234567890</li>
        <li>Email :rajvikash.r2022cse@sece.ac.in</li>
        <li>Native : Salem</li>
        
      </ul>
     </div>
     
    </div>

    <div className='text-gray-400 pr-28 mt-10 text-2xl'>
      <h2> Currently doing my UG in computer science engineering, 
        in Sri Eshwar College of engineering, Coimbatore . I'm kinda person
         who takes more interest towards learning new stuff. I always find a way to
          understand problems first and then try to solve it. Have more interest 
          in working with computers and solving more problems</h2>


          <div className='border border-yellow-300 p-10 py-12 mt-8 shadow-md shadow-yellow-400 rounded-lg'>

          <div className='mt-24 bg-orange-500 p-4 rounded-lg rotate-3'>
          <h2 className='mb-3 text-black font-bold'>Hands on experience :</h2>
          <h2 className='text-white'>Beyond the classroom, I actively engage in hands-on projects 
            and coding activities. Whether it's experimenting with different
             programming languages, contributing to open-source projects, or 
             participating in hackathons, I'm always seeking ways to apply my knowledge in real-world scenarios.</h2>
          </div>

          <div className='mt-24 bg-yellow-600 p-4 rounded-lg -rotate-3'>
          <h2 className='mb-3 text-black font-bold'>Academic Journey :</h2>
          <h2 className='text-white'>As a student, I always strive to understand problems before finding solutions. 
            I find joy in the process of unraveling complex challenges and embracing the learning
             curve that comes with it. My coursework has exposed me to a variety of subjects, but
              I have a particular interest in Web Development and UI/UX designing.</h2>
          </div>


          </div>

       
          
    </div>

    </div>
  )
}
