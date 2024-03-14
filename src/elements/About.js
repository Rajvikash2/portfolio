import React from 'react'
import profile from '../components/profile.jpg'
import profileback from '../components/profileback.png'

export const About = () => {
  return (
    <div className='container m-auto px-10 py-10 flex gap-2 '>
    <div className='px-5 mt-28'>
    <h1 className='font-bold text-4xl max-sm:text-2xl'>Hey I'm Rajvikash</h1>
    <h1 className='font-bold text-3xl mt-1 gradient-text max-w-lg'> Student & frontend developer</h1>
    <p className='text-gray-400'>Currently doing my UG in computer science engineering,<br /> in Sri Eshwar College of engineering, Coimbatore.</p>
    </div>
    <div className=' ml-52'>
      <img src={profile} width={250} alt='profile' className='border-4 border-black shadow-lg shadow-blue-800 rounded-full size-72'/>
      
    </div>
    </div>
  )
}
