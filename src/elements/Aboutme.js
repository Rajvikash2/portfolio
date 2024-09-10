import React from 'react'

export const Aboutme = () => {
  return (
    <div className='container m-auto px-10 py-10 '>

    <h2 className='font-bold text-pink-600 text-4xl mb-12'>About Me</h2>

    <div className='text-xl text-gray-400 mt-5 flex flex-row max-sm:flex-col justify-around'>
     <div>
     <ul>
        <li>Born : 22 Aug 2004</li>
        <li>Age : 19</li>
        <li>Location : Coimbatore</li>
      </ul>
     </div>

     <div>
      <ul>
        <li>Phone : 7418413345</li>
        <li>Native : Salem</li>
        <li>Email :rajvikash.r2022cse@sece.ac.in</li>
        
        
      </ul>
     </div>
     
    </div>

    <div className='text-gray-400 p-10 max-sm:p-0 mt-10 text-2xl'>
      <h2> Currently doing my UG in computer science engineering, 
        in Sri Eshwar College of engineering, Coimbatore . I'm kinda person
         who takes more interest towards learning new stuff. I always find a way to
          understand problems first and then try to solve it. Have more interest 
          in working with computers and solving more problems</h2>


          <div className=' p-10 mt-8 shadow-md rounded-lg'>

          <div className='mt-10 bg-orange-500 p-4  rounded-lg rotate-3 hover:rotate-0 cursor-pointer custom-shadow transition-transform duration-300'>
          <h2 className='mb-3 max-md:text-lg text-black font-bold'>Hands on experience :</h2>
          <h2 className='text-white max-sm:text-sm max-md:text-lg max-sm:h-fit'>Beyond the classroom, I actively engage in hands-on projects 
            and coding activities. Whether it's experimenting with different
             programming languages, contributing to open-source projects, or 
             participating in hackathons, I'm always seeking ways to apply my knowledge in real-world scenarios.</h2>
          </div>
          <div className='mt-24 bg-yellow-600 p-4 rounded-lg -rotate-3 hover:rotate-0 cursor-pointer transition-transform duration-300 custom-shadow'>
          <h2 className='mb-3 text-black font-bold max-sm:text-sm max-md:text-lg'>Academic Journey :</h2>
          <h2 className='text-white max-sm:text-sm max-md:text-lg'>As a student, I always strive to understand problems before finding solutions. 
            I find joy in the process of unraveling complex challenges and embracing the learning
             curve that comes with it. My coursework has exposed me to a variety of subjects, but
              I have a particular interest in Web Development and UI/UX designing.</h2>
          </div>





          </div>

       
          
    </div>

    </div>
  )
}
