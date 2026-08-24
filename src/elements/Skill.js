import React from "react";
import Marquee from "react-fast-marquee";

const frontendSkills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://devicon-website.vercel.app/api/express/original.svg?color=%23FFFFFF",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Nginx",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

const tools = [
  {
    name: "Drizzle ORM",
    icon: "https://cdn.simpleicons.org/drizzle/C5F74F",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "Cloudflare",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.simpleicons.org/vercel/FFFFFF",
  },
  {
    name: "Render",
    icon: "https://cdn.simpleicons.org/render/FFFFFF",
  },
];

const SkillCard = ({ skill }) => {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-4
        min-w-[190px]
        md:min-w-[220px]
        mx-3
        px-5
        py-4
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-[#89F336]/40
        hover:bg-[#89F336]/[0.04]
        hover:shadow-[0_0_30px_rgba(137,243,54,0.10)]
      "
    >
      <div
        className="
          flex
          items-center
          justify-center
          w-11
          h-11
          rounded-xl
          bg-black/60
          border
          border-white/[0.06]
          group-hover:border-[#89F336]/30
          transition-colors
        "
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className="
            w-7
            h-7
            object-contain
            transition-transform
            duration-300
            group-hover:scale-110
          "
          loading="lazy"
        />
      </div>

      <div>
        <p className="text-white font-medium whitespace-nowrap">
          {skill.name}
        </p>

        <p className="text-gray-600 text-xs mt-1">
          Technology
        </p>
      </div>
    </div>
  );
};

const SkillMarquee = ({
  skills,
  direction = "left",
  speed = 45,
}) => {
  return (
    <Marquee
      direction={direction}
      speed={speed}
      autoFill
      pauseOnHover
      gradient
      gradientColor="#000000"
      gradientWidth={120}
    >
      {skills.map((skill) => (
        <SkillCard
          key={`${direction}-${skill.name}`}
          skill={skill}
        />
      ))}
    </Marquee>
  );
};

export const Skill = () => {
  return (
    <section
      id="skills"
      className="
        relative
        w-full
        md:w-[90%]
        mx-auto
        px-6
        md:px-10
        py-24
        overflow-hidden
      "
    >
      {/* Ambient glow */}

      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[300px]
          rounded-full
          bg-[#89F336]/[0.035]
          blur-[130px]
          pointer-events-none
        "
      />

      {/* Header */}

      <div
        data-aos="fade-up"
        className="relative max-w-4xl mb-14"
      >
        <p className="text-[#89F336] text-sm uppercase tracking-[0.4em] mb-4">
          TECHNOLOGY
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          The stack behind
          <span className="text-[#89F336]"> what I build.</span>
        </h2>

        <div className="w-20 h-1 bg-[#89F336] rounded-full mt-6" />

        <p className="text-gray-400 text-lg md:text-xl leading-8 mt-7 max-w-3xl">
          From interactive interfaces to scalable backend systems and
          production infrastructure, these are the technologies I work with
          to turn ideas into reliable software.
        </p>
      </div>

      {/* Frontend */}

      <div
        data-aos="fade-right"
        data-aos-duration="900"
        className="mb-7"
      >
        <div className="flex items-center gap-3 mb-4 px-2">
          <span className="w-2 h-2 rounded-full bg-[#89F336]" />

          <span className="text-gray-500 text-xs uppercase tracking-[0.3em]">
            Frontend Engineering
          </span>
        </div>

        <SkillMarquee
          skills={frontendSkills}
          direction="left"
          speed={42}
        />
      </div>

      {/* Backend */}

      <div
        data-aos="fade-left"
        data-aos-duration="900"
        className="mb-7"
      >
        <div className="flex items-center justify-end gap-3 mb-4 px-2">
          <span className="text-gray-500 text-xs uppercase tracking-[0.3em]">
            Backend & Data
          </span>

          <span className="w-2 h-2 rounded-full bg-[#89F336]" />
        </div>

        <SkillMarquee
          skills={backendSkills}
          direction="right"
          speed={38}
        />
      </div>

      {/* Tools */}

      <div
        data-aos="fade-right"
        data-aos-duration="900"
      >
        <div className="flex items-center gap-3 mb-4 px-2">
          <span className="w-2 h-2 rounded-full bg-[#89F336]" />

          <span className="text-gray-500 text-xs uppercase tracking-[0.3em]">
            Infrastructure & Tools
          </span>
        </div>

        <SkillMarquee
          skills={tools}
          direction="left"
          speed={32}
        />
      </div>

      {/* Bottom statement */}

      <div
        data-aos="fade-up"
        className="
          relative
          mt-20
          flex
          justify-center
        "
      >
        <div
          className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-3
            text-center
          "
        >
          <span className="text-gray-500">
            Building with
          </span>

          <span className="text-[#89F336] font-medium">
            modern technologies
          </span>

          <span className="text-gray-500">
            for
          </span>

          <span className="text-white font-medium">
            production
          </span>
        </div>
      </div>
    </section>
  );
};