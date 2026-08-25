import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./elements/Header";
import { Projects } from "./elements/Projects";
import { About } from "./elements/About";
import { Skill } from "./elements/Skill";
import { Aboutme } from "./elements/Aboutme";
import { Contact } from "./elements/Contact";
import EvilEye from "./components/reactbits/EvilEye";
import { Footer } from "./elements/Footer";

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
  <div className="w-full h-[300px] md:h-[700px] bg-black">
          <EvilEye 
          eyeColor="#99ff37"
  intensity={1.5}
  pupilSize={0.6}
  irisWidth={0.25}
  glowIntensity={0.35}
  scale={0.8}
  noiseScale={1}
  pupilFollow={1}
  flameSpeed={1}
  backgroundColor="#000003"/>

        </div>
        <section id="projects">
          <Projects />
        </section>
      
        <section id="contact">
          <Contact />
        </section>
       
      </main>

      <footer className="bg-black p-8">
      
        <Footer/>
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
