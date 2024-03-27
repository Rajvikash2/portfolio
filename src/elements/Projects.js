import React from 'react'
import profile from '../components/profile.jpg'
import project from '../components/project.jpg'
import expense from '../components/expense.png'
import blog from '../components/blog.png'
import pas from '../components/pas.png'
import tm from '../components/tm.png'
import sp from '../components/sp.png'
import gvm from '../components/gvm.jpg'
export const Projects = () => {
  return (
    <div className='container m-auto px-10 py-10 '>
    <h2 className='font-bold text-pink-600 text-4xl mb-12'>Projects</h2>
    <div className='flex gap-10 flex-wrap'>
    <div className='border p-5 rounded-lg max-w-sm cursor-pointer flex flex-col gap-4'>
       <div className='flex justify-center w-full'>
       <img src={expense}width={220} alt='project'/>
       </div>
        <h2 className='font-bold'>Expense tracker:</h2>
          <p className='text-gray-400 w-sm'>A responsive expense tracking page created using react</p>
      </div>
       <div className='border p-5 rounded-lg max-w-sm cursor-pointer flex flex-col gap-4'>
         <div className='flex justify-center w-full'> <img src={blog} width={220} alt='project' /></div>            
        <h2 className='font-bold'>Simple blog page:</h2>
        <p className='text-gray-400'>A responsive blog page created using react</p>
       </div>
       <div className='border p-5 rounded-lg max-w-sm cursor-pointer flex flex-col gap-4'>
         <div className='flex justify-center w-full'><img src={pas} width={220} alt='project' /></div>
         <h2 className='font-bold'>Pet Adoption System:</h2>
        <p className='text-gray-400'>A JavaFX application created using  java for a pet adoption system.</p>
       </div>
       <div className='border p-5 rounded-lg max-w-sm cursor-pointer flex flex-col gap-4'>
         <div className='flex justify-center w-full'><img src={tm} width={220} alt='profile' /></div>
         <h2 className='font-bold'>Taskmanager App:</h2>
        <p className='text-gray-400'>A simple web application developed using react and storage provided by json server</p>
       </div>

       <div className='border p-5 rounded-lg max-w-sm cursor-pointer flex flex-col gap-4'>
         <div className='flex justify-center w-full'><img src={sp} width={220} alt='project' /></div>
         <h2 className='font-bold'>Spotify login page:</h2>
        <p className='text-gray-400'>A replica of Spotify sign up page done using HTML and CSS to  demonstrate my knowledge in web development.</p>
       </div>

       <div className='border p-5 rounded-lg max-w-sm cursor-pointer flex flex-col gap-4'>
         <div className='flex justify-center w-full'><img src={gvm} width={220} alt='profile' /></div>
         <h2 className='font-bold'>Password manager:</h2>
        <p className='text-gray-400'>A simple password vault built using reactTS and Hono JS as backend.</p>
       </div>

    </div>
 </div>
  )
}
