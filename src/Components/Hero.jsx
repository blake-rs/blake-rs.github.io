import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div className="absolute top-[22%] left-[15%]">
        <h1 className="text-accent font-poppins text-8xl">
          <Typewriter
            words={[
              "Hello",
              "Hola",
              "Bonjour",
              "Hallo",
              "Ciao",
              "Olá",
              "नमस्ते",
              "こんにちは",
              "你好",
              "안녕하세요",
            ]}
            loop={0} // infinite
            cursor
            typeSpeed={180}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </h1>

        <h2 className="font-main font-normal text-white mt-6 text-4xl">
          I'm Blake
        </h2>
        <p className="font-poppins text-grey-300 max-w-md text-wrap mt-2 mr-10">
          A Computer Science student at the University of Auckland, graduating
          in 2027
        </p>
        <a href="#projects">
          <button className="border font-main font-light text-white border-accent px-4 py-2 mt-4 hover:bg-accent/20 transition">
            See my projects
          </button>
        </a>
      </div>
    </>
  );
};

export default Hero;
