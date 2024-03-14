import React from 'react'

export const Contact = () => {
  return (
    <div className='container m-auto px-10 py-10 '>
    <h2 className='font-bold text-pink-600 text-4xl mb-12 mt-14'>Contact</h2>

    <div className='flex flex-row justify-evenly'>

    <div className='flex flex-col gap-6'>
   <div className='flex gap-3'> 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>     
              
    <span className="hover:translate-x-[5px] transition-transform duration-300">Phone : +91 7418413345</span>
    </div>

    <div className='flex gap-3'>
         
    <a href='https://www.gmail.com'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mails"><rect width="16" height="13" x="6" y="4" rx="2"/><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"/><path d="M2 8v11c0 1.1.9 2 2 2h14"/></svg></a>
     <span class="hover:translate-x-[5px] transition-transform duration-300">Email : rajvikash.r2022cse@sece.ac.in</span>
    </div>

    <div className='flex gap-3'>
    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    <span className='hover:translate-x-[5px] transition-transform duration-300'>Address : Sri Eshwar College of Engineering, Coimbatore.
    </span></div>

   
   </div>


  <div className='flex flex-col gap-6'>

  <div class='flex gap-3'> 
<a href='https://www.instagram.com/rajx_me/' target='_blank'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  <span className='underline text-blue-400 hover:translate-x-[5px] transition-transform duration-300'>instagram : rajx_me</span>
</a>
</div>

<div class='flex gap-3'>
<div className='flex gap-3'>
      <a href='https://www.linkedin.com/in/rajvikash-r-b4312325a/' target='_blank'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
     <span className='underline text-blue-400 hover:translate-x-[-5px] transition-transform duration-300'>Linked In : Rajvikash R</span> 
      </a>
    </div>
</div>

  </div>

    </div>  

    </div>
  )
}
