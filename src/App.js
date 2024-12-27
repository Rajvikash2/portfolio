import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './elements/Header';
import { Projects } from './elements/Projects';
import { About } from './elements/About';
import { Skill } from './elements/Skill';
import { Aboutme } from './elements/Aboutme';
import { Contact } from './elements/Contact';

function App() {
  return (
    <div>
      <Header className="sticky top-0 z-50" />
      <main>
        <section id="about">
          <About />
        </section>

        <section id="about-me">
          <Aboutme />
        </section>


        <section id="skill-id">
          <Skill />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-2xl font-bold">Social links:</h2>
        
        <ul className="flex flex-wrap gap-6 mt-4">
          <li>
            <a 
              href="https://www.linkedin.com/in/rajvikash-r-b4312325a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors duration-300"
            >
              {/* <Linkedin size={20} /> */}
              <div className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0080ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="hover:underline">LinkedIn</span>
              </div>
            </a>
          </li>
          
          <li>
            <a 
              href="https://www.instagram.com/rajx_me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors duration-300"
            >
              {/* <Instagram size={20} /> */}
              <div className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span className="hover:underline">Instagram</span>
              </div>
            </a>
          </li>
          
          <li>
            <a 
              href="https://github.com/Rajvikash2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-gray-100 transition-colors duration-300"
            >
              {/* <Github size={20} /> Using Github icon as Reddit isn't available in lucide */}
              <div className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span className="hover:underline">Github</span>
              </div>
            </a>
          </li>
        </ul>

        <div className="mt-8 text-gray-400 text-sm">
          <p>&copy; 2024 Rajvikash. All rights reserved.</p>
          <p className="mt-2 flex items-center gap-2">
            Designed and built with 
            {/* <Heart size={16} className="text-red-500 animate-pulse" />  */}
            using React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
