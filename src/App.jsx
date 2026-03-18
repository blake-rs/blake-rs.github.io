import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import SocialIcons from "./Components/SocialSidebar";
import SectionHeader from "./Components/SectionHeaders";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <SocialIcons />
      <div className="ml-[15%] mt-[100vh] w-full">
        <SectionHeader title="projects" />

        <SectionHeader title="skills" />

        <SectionHeader title="about" />

        <SectionHeader title="contacts" />
      </div>
    </>
  );
}

export default App;
