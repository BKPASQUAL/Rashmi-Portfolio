import React from "react";
import img from "../../assets/images/RAshmi.jpeg";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

function HeroSection() {
  return (
    <div className="bg-bgcolour text-black px-4 sm:px-8 mt-10 pt-4 sm:pt-4 md:pt-4 lg:py-56 md:px-16 lg:px-72 lg:mt-0 flex flex-col-reverse lg:flex-row items-center dark:bg-darkBg">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
          <span className="text-black dark:text-white">Hey, I'm </span>
          <span className="text-navy">Rashmi </span>
          <p className="text-base md:text-lg text-black dark:text-white">
            {" "}
            BSc. in Engineering (Honours) in Computer Systems Engineering
          </p>
        </h1>

        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black dark:text-white">
          Systems Engineer
        </h1>

        {/* <p className="text-secondaryText text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-justify dark:text-darkPrimary">
          I’m passionate about learning and growing as a developer, with a love
          for coding and creating impactful projects. Outside work, I enjoy
          cricket and unwinding with Netflix. Skilled in
          <b className="text-navy"> JavaScript </b> and the
          <b className="text-navy"> MERN stack </b>, I’m excited to keep
          evolving in the world of software engineering. Let's connect!
        </p> */}

        <p className="text-secondaryText text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-justify dark:text-darkSecondary">
          I am a dedicated Systems Engineer with a strong foundation in Computer
          Systems Engineering, having graduated with First Class Honours. I am
          passionate about leveraging technology to solve real-world challenges.
          My expertise spans software development, machine learning, and systems
          integration, enabling me to design and implement innovative solutions
          that bridge theoretical knowledge with practical applications. With
          hands-on experience in both academic and professional settings, I
          strive to deliver impactful results by combining analytical thinking,
          creativity, and a commitment to excellence.
        </p>

        <div className="flex space-x-3 sm:space-x-4 md:space-x-6">
          <a
            href="https://www.linkedin.com/in/rashmi-jayasekara-b217531b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white p-2 sm:p-3 md:p-4 shadow border-blue-gray-50 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group "
            title="LinkedIn"
          >
            <FaLinkedin
              size={24}
              className="transition-colors duration-250 text-[#0A66C2] group-hover:text-white"
            />
          </a>

          <a
            href="https://github.com/rashmijayasekara1027"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white p-2 sm:p-3 md:p-4 shadow border-blue-gray-50 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
            title="GitHub"
          >
            <FaGithub
              size={24}
              className="transition-colors duration-250 text-[#171515] group-hover:text-white"
            />
          </a>

          <a
            href="mailto:rashmijayasekara181@gmail.com"
            className="flex items-center bg-white p-2 sm:p-3 md:p-4 shadow border-blue-gray-50 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
            title="Email"
          >
            <FaEnvelope
              size={24}
              className="transition-colors duration-250 text-[#D44638] group-hover:text-white"
            />
          </a>

          <a
            href="https://wa.me/+94761506427"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white p-2 sm:p-3 md:p-4 shadow border-blue-gray-50 rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 hover:bg-navy group"
            title="WhatsApp"
          >
            <FaWhatsapp
              size={24}
              className="transition-colors duration-250 text-[#25D366] group-hover:text-white"
            />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mb-10 lg:mb-0">
        <img
          src={img}
          alt="Hero Section"
          className="w-2/3 sm:w-3/4 md:w-full max-w-xs sm:max-w-md rounded-md shadow-xl border-blue-gray-50"
        />
      </div>
    </div>
  );
}

export default HeroSection;
