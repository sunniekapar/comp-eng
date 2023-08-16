import ArrowButton from "../components/ArrowButton";
import Typewriter from "typewriter-effect";
import { useState } from "react";
export default function Header() {
  const [isSubHeadingVisible, setIsSubHeadingVisible] = useState(false);
  return (
    <header className="flex flex-col justify-center min-h-screen text-center font-poppins">
      <div className="mb-16 text-9xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to CompEng")
              .start()
              .pauseFor(1500)
              .deleteChars(3)
              .pauseFor(1000)
              .typeString('<span class="text-blue-800">Eng</span>')
              .callFunction(() => setIsSubHeadingVisible(true));
          }}
          options={{
            cursorClassName: "text-9xl animate-typing font-thin",
            delay: 100,
          }}
        />
      </div>
      <p
        className={`mb-32 text-4xl font-light opacity-0 transition-all duration-200 ${
          isSubHeadingVisible && "animate-slideIn opacity-100"
        }`}
      >
        Where your dreams become reality
      </p>
      <ArrowButton direction="short" size="text-7xl" />
    </header>
  );
}
