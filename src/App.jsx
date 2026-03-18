import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import SocialIcons from "./Components/SocialSidebar";
import SectionHeader from "./Components/SectionHeaders";
import ProjectCard from "./Components/ProjectCard";

import portfolioImg from './assets/portfolio-image.png';




function App() {
  const skills = [
    "Python",
    "JavaScript",
    "R",
    "React",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "SQL",
    "Data analysis",
    "Data structures & algorithms",
    "Object-oriented programming",
    "Computer architecture",
    "Computer networking",
    "Communication",
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <SocialIcons />

      <div className="mt-[100vh]">
        <section id="projects">
          <SectionHeader
            title="projects"
            link="#projects"
            linkText="See All Projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center mx-4 md:mx-25">
            <ProjectCard
              title="Personal Portfolio"
              description="A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills."
              tech={["React", "Tailwind CSS", "JavaScript"]}
              github="https://github.com/blake-rs/portfolio-react"
              live="www"
              image={portfolioImg}
            />

          </div>
        </section>

        <section id="skills max-w-screen">
          <SectionHeader title="skills" />

          <div className="flex flex-wrap gap-4 mx-[15%]">
            {skills.map((item, index) => (
              <span
                key={index}
                className="text-lg border px-3 border-accent text-accent py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="about">
          <SectionHeader title="about" />
          <p className="mx-[15%] font-main text-grey-300 text-wrap">
            I am a Computer Science student in my second year at the University
            of Auckland, graduating in 2027. I enjoy building full-stack
            applications, experimenting with modern frameworks, and constantly
            learning new technologies. In my free time, I enjoy reading, going
            to the gym, spending time outdoors on runs or hikes.
          </p>
        </section>

        <section id="contacts" className="mb-10">
          <SectionHeader title="contacts" />
          <p className="mx-[15%] font-main text-grey-300 text-wrap">
            Feel free to reach out to me via email at{" "}
            <a
              href="mailto:iblakesimpson@gmail.com"
              className="text-accent hover:underline"
            >
              iblakesimpson@gmail.com
            </a>
            <br></br>
            Or alternatively, you can find me on{" "}
            <a
              href="
https://www.linkedin.com/in/blake-rsimpson"
target="_blank"
              className="text-accent hover:underline"
            >
              LinkedIn{" "}
            </a>
            Or{" "}
            <a
              href="https://github.com/blake-rs"
              target="_blank"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
