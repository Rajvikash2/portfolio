import React from 'react';

export  const Skill = () => {
  const skills = [
    { name: 'HTML5', icon: "https://devicon-website.vercel.app/api/html5/plain-wordmark.svg", glowColor: "hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.7)]" },
    { name: 'MongoDB', icon: "https://devicon-website.vercel.app/api/mongodb/original-wordmark.svg", glowColor: "hover:drop-shadow-[0_0_25px_rgba(34,197,94,0.7)]" },
    { name: 'JavaScript', icon: "https://devicon-website.vercel.app/api/javascript/original.svg", glowColor: "hover:drop-shadow-[0_0_25px_rgba(234,179,8,0.7)]" },
    { name: 'TypeScript', icon: "https://devicon-website.vercel.app/api/typescript/original.svg", glowColor: "hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]" },
    { name: 'Node.js', icon: "https://devicon-website.vercel.app/api/nodejs/original-wordmark.svg", glowColor: "hover:drop-shadow-[0_0_25px_rgba(34,197,94,0.7)]" },
    { name: 'React', icon: "https://devicon-website.vercel.app/api/react/original.svg", glowColor: "hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.7)]" },
    { name: 'Next', icon: "https://devicon-website.vercel.app/api/nextjs/original-wordmark.svg?color=%236A6868", glowColor: "hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]" },
    { name: 'Express', icon: "https://devicon-website.vercel.app/api/express/original-wordmark.svg?color=%23FFFFFF", glowColor: "hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]" },
    { name: 'TailwindCSS', icon: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg", glowColor: "hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.7)]" },
    { name: 'CSS3', icon: "https://devicon-website.vercel.app/api/css3/plain-wordmark.svg", glowColor: "hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]" },
    { name: 'Python', icon: "https://devicon-website.vercel.app/api/python/original-wordmark.svg", glowColor: "hover:drop-shadow-[0_0_25px_rgba(234,179,8,0.7)]" },
    { name: 'Java', icon: "https://devicon-website.vercel.app/api/java/original-wordmark.svg", glowColor: "hover:drop-shadow-[0_0_25px_rgba(239,68,68,0.7)]" },
  ];

  return (
    <div className="w-[90%] mx-auto px-6 py-10 bg-black bg-opacity-65">
      <h2 className="font-bold text-pink-600 text-4xl mb-8">Skills</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`p-4 rounded-xl transition-all duration-300 hover:scale-110 ${skill.glowColor} hover:shadow-2xl cursor-pointer`}>
              <img 
                src={skill.icon} 
                className="w-24 h-24 md:w-32 md:h-32" 
                alt={skill.name}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-xl text-gray-400 mt-8">
        <h2>
          I am proficient in building responsive and visually appealing web pages using
          TailwindCSS. My attention to detail ensures that the user interface is
          both functional and aesthetically pleasing.
        </h2>
        <h2 className="mt-4">
        With solid experience in modern web development, I have honed my skills in React.js, building interactive 
        and dynamic user interfaces with efficient state management. Additionally, I have hands-on experience working 
        with Next.js and have completed a project using it. 
        While I am more proficient in React, I am actively expanding my expertise in Next.js. 
        Currently, I am working as a Software Developer Intern, gaining industry experience and 
        refining my skills in real-world applications.
        </h2>
      </div>
    </div>
  );
};

