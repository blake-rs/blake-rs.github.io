import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import SocialIcons from "./Components/SocialSidebar";
import SectionHeader from "./Components/SectionHeaders";
import ProjectCard from "./Components/ProjectCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <SocialIcons />
      <div className="mt-[100vh]">
        <section id="projects">
          <SectionHeader title="projects" link="#projects" linkText="See All Projects"/>
          
          <div className="grid grid-cols-3 grid-rows-auto gap-5 justify-items-center mx-25">
            <ProjectCard
              title="Personal Portfolio"
              description="A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills."
              tech={["React", "Tailwind CSS", "JavaScript"]}
              github="https://github.com/blake-rs/portfolio-react"
              live="www"
              image="./src/assets/portfolio-image.png"
            />
          </div>
        </section>
        <section id="skills">
          <SectionHeader title="skills" />
        </section>

        <section id="about">
          <SectionHeader title="about" />
        </section>

        <section id="contacts">
          <SectionHeader title="contacts" />
        </section>
      </div>
    </>
  );
}

export default App;
