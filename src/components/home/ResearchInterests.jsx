import React from "react";
import { FaWifi, FaRobot, FaServer, FaCloud, FaBrain, FaMicrochip,FaNetworkWired } from "react-icons/fa";

// Define the data array
const researchData = [
  {
    title: "Networking and Communication Systems",
    icon: <FaNetworkWired className="text-4xl mb-2 text-blue-500" />,
    description: "Exploring efficient communication protocols and network design for high-speed, reliable data transmission.",
  },
  {
    title: "Machine Learning and Deep Learning",
    icon: <FaRobot className="text-4xl mb-2 text-green-500" />,
    description: "Applying machine learning algorithms to automate processes and gain insights from large datasets.",
  },
  {
    title: "Advanced Computing Architectures",
    icon: <FaMicrochip className="text-4xl mb-2 text-orange-500" />,
    description: "Designing and optimizing high-performance computing systems for complex computations.",
  },
  {
    title: "Internet of Things (IoT) Applications",
    icon: <FaCloud className="text-4xl mb-2 text-indigo-500" />,
    description: "Developing interconnected systems for smart homes, cities, and industries using IoT devices.",
  },
  {
    title: "Intelligent Control Systems",
    icon: <FaBrain className="text-4xl mb-2 text-purple-500" />,
    description: "Creating autonomous systems that can adapt and make decisions in real-time environments.",
  },
  {
    title: "Artificial Intelligence",
    icon: <FaBrain className="text-4xl mb-2 text-red-500" />,
    description: "Investigating AI techniques to enhance machine learning, robotics, and natural language processing.",
  },
];

function ResearchInterests() {
  return (
    <div className="bg-bgcolour text-black px-6 md:px-16 py-10 md:py-16 lg:py-28 lg:px-72 dark:bg-darkBg">
      <p className="mb-2 text-navy font-semibold text-center text-lg lg:text-2xl">
        Areas of Focus
      </p>

      <div className="text-3xl md:text-5xl mb-10 lg:mb-20 font-extrabold text-center dark:text-white">
        Research Interests
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {researchData.map((research, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black rounded-lg p-6 flex flex-col group text-start shadow-lg hover:shadow-xl hover:bg-navy dark:hover:bg-navy transform hover:scale-105 transition-all duration-300 "
          >
            {research.icon}
            <h3 className="text-2xl font-semibold   dark:text-white group-hover:text-white dark:group-hover:text-black mt-4 mb-2">{research.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black">{research.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchInterests;
