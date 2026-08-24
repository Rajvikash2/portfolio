import React from "react";
import {
  Database,
  Server,
  Boxes,
  Cloud,
  Code2,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import MorphSlider from "../components/reactbits/MorphSlider";
import CountUp from "../components/reactbits/CountUp";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    tag: "Backend Engineering",
    title: "Scalable API Architecture",
    description:
      "Building production-grade REST APIs with Node.js, TypeScript, PostgreSQL, MongoDB, Redis, and BullMQ for high-performance backend systems.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    tag: "Frontend Engineering",
    title: "Modern React Experiences",
    description:
      "Developing fast, responsive applications with React, Next.js, Tailwind CSS, and TanStack Query while maintaining exceptional user experience.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    tag: "Cloud & DevOps",
    title: "Reliable Infrastructure",
    description:
      "Deploying containerized applications using Docker, Nginx, AWS EC2, VPS environments, and cloud object storage for scalable production systems.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    tag: "Engineering Impact",
    title: "Real Products. Real Users.",
    description:
      "Delivered and maintained multiple production platforms including GIL, Procevia, and House of Sabha, supporting real business operations.",
  },
];

const expertise = [
  {
    icon: <Server size={28} />,
    title: "Backend Systems",
    desc: "Node.js, Express, TypeScript, Authentication, REST APIs, RBAC",
  },
  {
    icon: <Database size={28} />,
    title: "Data Engineering",
    desc: "PostgreSQL, MongoDB, Redis, Drizzle ORM, Optimized Queries",
  },
  {
    icon: <Boxes size={28} />,
    title: "Architecture",
    desc: "BullMQ, Background Jobs, Scalable Services, Modular Design",
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud & DevOps",
    desc: "Docker, AWS EC2, Nginx, VPS, S3 Compatible Storage",
  },
];

const technologies = [
  "Node.js",
  "TypeScript",
  "Express",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "BullMQ",
  "Drizzle ORM",
  "Docker",
  "AWS",
  "Nginx",
  "Git",
  "TanStack Query",
];

export const Aboutme = () => {
  return (
    <section
      id="about-me"
      className="w-full md:w-[90%] mx-auto px-6 md:px-10 py-20"
    >
      {/* Heading */}

      <div className="max-w-5xl mb-16">
        <p className="uppercase tracking-[6px] text-[#89F336] text-sm mb-3">
          ABOUT ME
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Building scalable software that powers
          <span className="bg-[#89F336] p-0 text-black"> real businesses.</span>
        </h2>

        <div className="w-28 h-1 bg-[#89F336] rounded-full mt-6 mb-8" />

        <p className="text-gray-300 text-lg md:text-xl leading-9">
          I'm a Full Stack Software Engineer with a strong passion for backend
          engineering, scalable system architecture, and modern web development.
          My work focuses on designing production-ready applications that are
          fast, maintainable, and built for growth.
        </p>

        <p className="text-gray-400 text-lg leading-9 mt-6">
          At <span className="text-white">Anthill Networks</span>, I've
          engineered and shipped multiple production platforms from the ground
          up—designing databases, building secure APIs, implementing background
          job processing, deploying Dockerized services, and creating responsive
          React applications that deliver real business value.
        </p>
      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-6 mb-20">
        {[
          {
            value: "3",
            sign: "+",
            title: "Production Platforms",
          },
          {
            value: "15",
            sign: "+",
            title: "Core Technologies",
          },
          {
            value: "Full Stack",
            title: "End-to-End Development",
          },
          {
            value: "100",
            sign: "%",
            title: "Production Focused",
          },
        ].map((item,i) => (
          <div
            key={i}
            className="bg-black/50 group hover:bg-[#89F336]  border border-[#89F336]/20 rounded-2xl p-7 hover:border-[#89F336] transition-all duration-300"
          >
            {i!=2 &&<h3 className="text-[#89F336] group-hover:text-4xl duration-500 group-hover:text-black text-3xl font-bold">
              <CountUp
                from={0}
                to={item.value}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={0}
              />
              <span className="text-[#89F336] group-hover:text-4xl duration-500 group-hover:text-black text-3xl font-bold">{item.sign}</span>
            </h3>}
            {i==2 &&<h3 className="text-[#89F336] group-hover:text-4xl duration-500 group-hover:text-black text-3xl font-bold">
              {item.value}
            </h3>}

            <p className="text-gray-400 font-medium group-hover:text-black mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Expertise */}

      <div className="mb-20">
        <h3 className="text-3xl font-bold text-white mb-10">
          Engineering Expertise
        </h3>

        <div className="grid md:grid-cols-2 gap-7">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="group bg-black/50 border border-[#89F336]/20 rounded-2xl p-7 hover:border-[#89F336] transition-all duration-300"
            >
              <div className="text-[#89F336] mb-5">{item.icon}</div>

              <h4 className="text-xl text-white font-semibold mb-3">
                {item.title}
              </h4>

              <p className="text-gray-400 leading-8">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      

      {/* Quote */}

      <div className="mb-20 bg-gradient-to-r from-[#89F336]/10 to-transparent border-l-4 border-[#89F336] p-8 rounded-r-2xl">
        <Rocket className="text-[#89F336] mb-5" size={34} />

        <p className="text-2xl italic text-white leading-10">
          "I enjoy solving engineering challenges—from designing scalable
          backend systems and cloud infrastructure to crafting intuitive user
          experiences. My goal is always to build software that remains
          maintainable long after deployment."
        </p>
      </div>

      {/* Slider */}

      <div className="h-[450px] md:h-[560px] w-full md:w-[85%] mx-auto">
        <MorphSlider
          items={items}
          autoplay
          autoplayDelay={5}
          transition="melt"
          overlayColor="#000000"
        />
      </div>
    </section>
  );
};
