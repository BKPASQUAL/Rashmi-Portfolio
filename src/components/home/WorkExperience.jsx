import React from "react";

const experiences = [
  {
    id: 1,
    title: "Associate Software Engineer - Research & Development",
    company: "Hayleys Fentons",
    duration: "Aug 2023 - Present",
    description: [
      "Proficient in designing and developing user interfaces for web applications using HTML, CSS, and modern front-end frameworks to ensure responsive and visually appealing designs.",
      "Skilled in back-end development using PHP and JavaScript, integrating server-side logic with databases to create robust and scalable web applications.",
      "Experienced in end-to-end development processes, including requirement analysis, coding, testing, and deployment, ensuring seamless functionality and user experience.",
      "Adept at collaborating with cross-functional teams to deliver innovative and efficient web solutions.",
    ],
  },
  {
    id: 2,
    title: "Intern - Software Engineer - Research & Development",
    company: "Hayleys Fentons",
    duration: "Apr 2022 - Aug 2022",
    description: [
      "Interned as a Full-Stack Developer, where I developed and implemented various software systems for in-house operations and external companies to optimize workflows.",
      "Gained hands-on experience in database design and system architecture.",
      "Managed backend development using PHP, Python, and .NET, while also building responsive frontend interfaces with JavaScript, CSS, and jQuery.",
    ],
  },
];

function WorkExperience() {
  return (
    <div
      id="work"
      className="pb-16 px-4 sm:px-8 bg-bgcolour flex flex-col items-center dark:bg-darkBg"
    >
      {/* Section Title */}
      <div className="text-center sm:text-left mb-12 w-full max-w-screen-lg">
        <p className="text-2xl text-navy mt-2 leading-loose">Career</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white">
          Work Experience
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-navy w-full max-w-screen-lg">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="mb-8 sm:mb-12 ml-6 group transition-all duration-300 ease-in-out cursor-pointer"
          >
            {/* Timeline Marker */}
            <div className="absolute w-5 h-5 bg-navy rounded-full -left-2.5 border-2 border-white"></div>
            {/* Content */}
            <div className="bg-white hover:bg-navy group p-5 md:p-8 rounded-lg shadow-lg transition-all duration-300 group-hover:text-white dark:bg-black dark:hover:bg-navy">
              <h3 className="text-xl sm:text-2xl font-semibold text-black transition-all duration-300 group-hover:text-white dark:text-white">
                {exp.title}
              </h3>
              <p className="text-lg text-navy font-medium transition-all duration-300 group-hover:text-white">
                {exp.company}
              </p>
              <span className="text-primaryText text-sm transition-all duration-300 group-hover:text-white dark:text-darkSecondary">
                {exp.duration}
              </span>
              <ul className="list-disc list-outside text-primaryText ml-4 mt-4 transition-all duration-300 group-hover:text-white dark:text-darkSecondary">
                {exp.description.map((desc, index) => (
                  <li className="mb-2" key={index}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
