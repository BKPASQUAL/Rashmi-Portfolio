import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaAws,
  FaGithub,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiSequelize,
  SiFigma,
  SiC,
  SiNextdotjs,
  SiBootstrap,
  SiJquery,
  SiDart,
  SiFirebase,
  SiKotlin,
  SiDotnet,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

const VercelIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="50"
    height="50"
    fill="#C76395"
  >
    <path d="M64 0L0 128h128L64 0z" />
  </svg>
);

const MatlabIcon = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
    alt="MATLAB"
    width={50}
    height={50}
  />
);

const Python = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
    alt="Python"
    width={50}
    height={50}
  />
);




function Skills() {
  const icons = [
    { Icon: Python, name: "Python" },

    { Icon: SiJquery, name: "jQuery", color: "#0769AD" },
    { Icon: FaPhp, name: "PHP", color: "#777BB4" },
    { Icon: SiDart, name: "Flutter/Dart", color: "#0175C2" },
    { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { Icon: VercelIcon, name: "Vercel", color: "#C76395" },
    { Icon: SiKotlin, name: "Kotlin", color: "#0095D5" },
    { Icon: SiDotnet, name: "VB.NET", color: "#5C2D91" },
    { Icon: MatlabIcon, name: "MATLAB", color: "#0076A8" },
    { Icon: FaHtml5, name: "HTML", color: "#E34F26" },
    { Icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
    { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
    { Icon: FaReact, name: "React", color: "#61DAFB" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiExpress, name: "Express", color: "green" },
    { Icon: FaNodeJs, name: "Node.js", color: "#68A063" },
    { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
    // { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { Icon: SiSequelize, name: "Sequelize", color: "#52B0E7" },
    { Icon: SiRedux, name: "Redux", color: "#764ABC" },
    { Icon: FaJava, name: "Java", color: "#007396" },
    { Icon: FaAws, name: "AWS", color: "#FF9900" },
    { Icon: SiC, name: "C", color: "#1572B6" },
    // { Icon: AiOutlineApi, name: "Axios", color: "#5A9FD4" },
    // { Icon: SiNextdotjs, name: "Next.js", color: "#68A063" },
    { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
    { Icon: FaGithub, name: "GitHub", color: "#333" },
    
    // { Icon: FaReact, name: "MAUI", color: "#61DAFB" }, 
  ];

  return (
    <div className="bg-bgcolourtwo text-black px-6 md:px-16 lg:px-72 lg:py-28 py-10 md:py-20 dark:bg-black">
      <p className="mb-2 text-navy font-semibold text-center  text-lg  lg:text-2xl">
        Skills
      </p>
      <div className="text-3xl md:text-5xl font-extrabold text-center mb-10 md:mb-20 dark:text-white">
        My Tech Stack
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 lg:gap-10 gap-6 md:gap-10 justify-items-center">
        {icons.map(({ Icon, name, color }, index) => (
          <div key={index} className="flex flex-col items-center">
            <Icon size={50} md:size={60} color={color} />
            <p className="mt-2 text-sm md:text-lg font-semibold text-center dark:text-white">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
