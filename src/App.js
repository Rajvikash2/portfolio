import './App.css';

import Header from './elements/Header';
import { Projects } from './elements/Projects';
import { About } from './elements/About';
import { Skill } from './elements/Skill';
import { Aboutme } from './elements/Aboutme';
import { Contact } from './elements/Contact';

function App() {
  return (
  <div  className=" ">
  
   <Header />
   <main>
    <section id='about'>
    <About />
    </section>
      
    <section id='projects'>
     <Projects />
    </section>
          
    <section id='skill-id'>
       <Skill />
    </section>

   <section id='about-me'>
    <Aboutme />
   </section>
     
     <section id='contact'>
       <Contact />
     </section>
   </main>
   <footer className='bg-black p-5'>
      <div>
        <h2 className='text-white text-2xl font-bold'>Quick links :</h2>
        <ul className='flex flex-row gap-2 mt-4 text-blue-700 underline'>
          <li>
            <a href="#about-me">0-> About</a>
          </li>
          <li>
            <a href="#projects">0-> Projects</a>
          </li>
          <li>
            <a href="#skill-id">0-> Skills</a>
          </li>
          <li>
            <a href="#contact">0-> Contact</a>
          </li>
        </ul>
      </div>
      <div class="mt-10">
      <p>&copy; 2024 Rajvikash. All rights reserved.</p>
      <p>Designed and built with <i class="fas fa-heart text-red-500"></i> using React and Tailwind CSS.</p>
    </div>
   </footer>
  </div>
  );
}

export default App;
