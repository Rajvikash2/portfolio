import React from 'react'
import skills from '../components/skills.png'
export const Skill = () => {
  return (
    <div className='container m-auto px-10 py-10 '>
    <h2 className='font-bold text-pink-600 text-4xl mb-12'>Skills</h2>
  
     
    <div className='flex flex-row'>
    <div className='flex flex-col gap-12'>
  
  <div>
    <progress className='w-80 text-white rounded-full' value='90' max='100' label='Pyhton'></progress>
    <span className='ml-4 text-white text-xl font-bold'>Python</span>

    </div>
    
    <div>
    <progress className='w-80 text-white rounded-full' value='80' max='100' label='Pyhton'></progress>
    <span className='ml-4 text-white text-xl font-bold'>Java</span>

    </div>

    <div>
    <progress className='w-80 text-white rounded-full' value='90' max='100' label='Pyhton'></progress>
    <span className='ml-4 text-white text-xl font-bold'>C</span>

    </div>

    <div>
    <progress className='w-80 text-white rounded-full' value='70' max='100' label='Pyhton'></progress>
    <span className='ml-4 text-white text-xl font-bold'>React</span>

    </div>     
    </div>
    
    <img src={skills} width={225} alt='' className='size-22 max-sm:hidden bg-blend-overlay mr-16 shadow-lg custom-shadow'/>
    </div>


      <div className='text-xl text-gray-400 mt-5'>

        <h2>
        I am proficient in building responsive and visually appealing web pages using 
        HTML and CSS. My attention to detail ensures that the user interface is 
        both functional and aesthetically pleasing.
        </h2>

        <h2>
        With a growing passion for modern web development, I am currently focusing 
        on mastering React.js. I have hands-on experience in building interactive 
        and dynamic user interfaces, leveraging the power of React 
        components and state management.
        </h2>
      </div>

  
    
      </div> 
  )
}
