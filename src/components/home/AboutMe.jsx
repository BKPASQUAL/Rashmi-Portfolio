import React from "react";

function AboutMe() {
  return (
    <div className="bg-bgcolourtwo text-black px-6 md:px-16 lg:px-72 lg:py-28 py-10 md:py-20 dark:bg-black">
      <p className="mb-2 text-navy font-semibold text-2xl">Who I Am</p>
      <div className="text-3xl md:text-5xl font-extrabold text-start mb-10 md:mb-10 dark:text-white">
        About Me
      </div>
      <div>
        <p className="text-secondaryText text-sm text-justify sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8  dark:text-darkPrimary">
          Hi, I’m <b>Rashmi</b>! I’m
          a results-driven full-stack developer with a background in Computer
          System Engineering and a passion for creating impactful web and mobile
          applications. My expertise lies in Python and Flutter, allowing me to
          design and build efficient, user-friendly solutions. I’m also skilled
          in various programming languages, including PHP, Java, Kotlin, Dart,
          VB.NET, MATLAB, and JavaScript, which helps me tackle diverse
          challenges in software development. Beyond coding, I’m deeply
          interested in technology’s evolving landscape, particularly in areas
          like machine learning, artificial intelligence, robotics, and system
          integration. I’m committed to continuous learning and love exploring
          new tools and methodologies to refine my skills and innovate. When I’m
          not immersed in development, I enjoy relaxing with a good Netflix
          series or movie, as it helps me recharge and stay creative. I’m
          passionate about sharing knowledge, contributing to the developer
          community, and collaborating on meaningful projects. For me, coding is
          not just a profession—it’s a way to solve problems, bring ideas to
          life, and make the world more connected.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
