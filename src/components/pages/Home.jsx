import React from "react";
import Navbar from "../common/Navbar";
import HeroSection from "../home/HeroSection";
import Skills from "../home/Skills";
import Projects from "../home/Projects";
import WorkExperience from "../home/WorkExperience";
import Education from "../home/Education";
import MyServices from "../home/MyServices";
import Certificates from "../home/Certificates";
import Footer from "../common/Footer";
import AboutMe from "../home/AboutMe";
import ResearchInterests from "../home/ResearchInterests";

function Home() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="focus areas">
        <ResearchInterests />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="expertise">
        <MyServices />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="work">
        <WorkExperience />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
