import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Typewriter } from "react-simple-typewriter";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div className="absolute top-[22%] left-[15%]">
        <h1 className="text-accent font-poppins text-[clamp(4rem,8vw,6rem)]">
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
      </div>
    </>
  );
}

export default App;
