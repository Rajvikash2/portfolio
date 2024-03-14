import React from 'react'


export const Header = () => {
  return (
    <header className=' z-50  max-w-full'>
   <div className='box-border  px-16 py-6  shadow-lg shadow-black max-w-full bg-black'>
        <div className='flex justify-between  box-border max-w-full'>
          <div className='box-border max-w-fit'>
              <h1 className='text-yellow-400 font-bold text-2xl max-sm:text-xl max-w-fit box-border '>
                  <span className='text-3xl mr-2 max-sm:text-xl bg-white p-2 rounded-r-full text-black max-w-fit box-border'>Rajvikash's</span> 𝙿𝚘𝚛𝚝𝚏𝚘𝚕𝚒𝚘
                  </h1>
            </div>
              <div className='max-[742px]:hidden box-border'>
                    <ul className='flex flex-row gap-6 mr-10 box-border'>
                      <li>
                        <a href="#about-me">About</a>
                      </li>
                      <li>
                        <a href="#projects">Projects</a>
                      </li>
                      <li>
                        <a href="#skill-id">Skills</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
              </div>
        </div>
    </div>
   </header>
  )
}
