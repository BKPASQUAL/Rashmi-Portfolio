import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloudUploadAlt,
  FaPencilRuler,
  FaLayerGroup,
  FaNetworkWired, // For Networking and Security
  FaTools, // For System Maintenance and Troubleshooting
} from "react-icons/fa";

const services = [
  {
    title: "Networking and Security",
    description:
      "Expertise in network configuration, security protocols, and ensuring the integrity of systems through firewalls, VPNs, and encryption. Specializing in risk management, threat analysis, and implementing secure network infrastructures.",
    icon: (
      <FaNetworkWired
        size={50}
        className="text-blue-500 group-hover:text-white dark:group-hover:text-blue-500"
      />
    ),
  },
  {
    title: "System Maintenance and Troubleshooting",
    description:
      "Proficient in maintaining and optimizing system performance. Troubleshooting hardware and software issues, applying patches, and ensuring baseooth system operations. Specializing in preventive maintenance, diagnostics, and system upgrades.",
    icon: (
      <FaTools
        size={50}
        className="text-green-500 group-hover:text-white dark:group-hover:text-green-500"
      />
    ),
  },
  {
    title: "Web Development",
    description:
      "Building dynamic, scalable, and responsive websites using modern web technologies like React, Vue.js, HTML5, CSS3, and JavaScript. Focus on user-centric design, performance optimization, and seamless user experiences.",
    icon: (
      <FaCode
        size={50}
        className="text-blue-500 group-hover:text-white dark:group-hover:text-blue-500"
      />
    ),
  },
  {
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications with frameworks like Flutter and React Native. Expertise in integrating native APIs, optimizing performance, and delivering seamless mobile experiences for both Android and iOS platforms.",
    icon: (
      <FaLayerGroup
        size={40}
        className="text-purple-500 group-hover:text-white dark:group-hover:text-purple-500"
      />
    ),
  },
  {
    title: "Database Management",
    description:
      "Designing and managing relational and non-relational databases like MySQL and MongoDB. Expertise in schema design, optimized queries, data security, and scalability. Ensuring reliable integration with applications for seamless data handling.",
    icon: (
      <FaDatabase
        size={40}
        className="text-red-500 group-hover:text-white dark:group-hover:text-red-500"
      />
    ),
  },
  {
    title: "Researching",
    description:
      "Conducting in-depth research in various fields, analyzing data, and producing valuable insights. Expertise in both qualitative and quantitative methods, with experience in academic and industry research projects.",
    icon: (
      <FaPencilRuler
        size={40}
        className="text-orange-500 group-hover:text-white dark:group-hover:text-orange-500"
      />
    ),
  },
];
function MyServices() {
  return (
    <div className="bg-bgcolour text-black px-6 md:px-16  py-10 md:py-16 lg:py-28 lg:px-72 dark:bg-darkBg">
      <p className="mb-2 text-navy font-semibold text-center  text-lg  lg:text-2xl">
        Whai I Do
      </p>

      <div className="text-3xl md:text-5xl lg:mb-12 font-extrabold text-center dark:text-white">
        Areas of Expertise
      </div>
      <div className="flex flex-col gap-6 p-4 md:p-10">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row gap-6 ">
          <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-lg flex flex-col p-8 group hover:bg-navy transition duration-300 hover:scale-105 dark:bg-black dark:text-white dark:hover:bg-navy   ">
            {services[0].icon}
            <div className="font-bold text-start mt-4 text-lg md:text-xl group-hover:text-white ">
              {services[0].title}
            </div>
            <p className="text-base text-gray-500 text-start mt-4 group-hover:text-white  dark:text-darkSecondary ">
              {services[0].description}
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-2/4">
            <div className="h-full bg-white rounded-lg shadow-lg flex flex-col p-8 group hover:bg-navy transition duration-300 hover:scale-105 dark:bg-black dark:text-white dark:hover:bg-navy ">
              {services[4].icon}
              <div className="font-bold text-start mt-4 text-lg md:text-xl group-hover:text-white  ">
                {services[4].title}
              </div>
              <p className="text-base text-gray-500 mt-4 group-hover:text-white ">
                {services[4].description}
              </p>
            </div>
            <div className="h-full bg-white rounded-lg shadow-lg flex flex-col p-8 group hover:bg-navy transition duration-300 hover:scale-105 dark:bg-black dark:text-white dark:hover:bg-navy">
              {services[1].icon}
              <div className="font-bold text-start mt-4 text-lg md:text-xl group-hover:text-white ">
                {services[1].title}
              </div>
              <p className="text-base text-gray-500 mt-4 group-hover:text-white ">
                {services[1].description}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-lg flex flex-col p-8 group hover:bg-navy transition duration-300 hover:scale-105 dark:bg-black dark:text-white dark:hover:bg-navy">
            {services[3].icon}
            <div className="font-bold text-start mt-4 text-lg md:text-xl group-hover:text-white ">
              {services[3].title}
            </div>
            <p className="text-base text-gray-500 mt-4 group-hover:text-white ">
              {services[3].description}
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg flex flex-col p-8 group hover:bg-navy transition duration-300 hover:scale-105 dark:bg-black dark:text-white dark:hover:bg-navy">
            {services[2].icon}
            <div className="font-bold text-start mt-4 text-lg md:text-xl group-hover:text-white ">
              {services[2].title}
            </div>
            <p className="text-base text-gray-500 mt-4 group-hover:text-white ">
              {services[2].description}
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg flex flex-col p-8 group hover:bg-navy transition duration-300 hover:scale-105 dark:bg-black dark:text-white dark:hover:bg-navy">
            {services[5].icon}
            <div className="font-bold text-start mt-4 text-lg md:text-xl group-hover:text-white ">
              {services[5].title}
            </div>
            <p className="text-base text-gray-500 mt-4 group-hover:text-white ">
              {services[5].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
