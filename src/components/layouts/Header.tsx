import ArrowButton from "../ui/ArrowButton";
import Typewriter from "typewriter-effect";
import { useState } from "react";
export default function Header() {
  let headerTextSize: string = "text-5xl sm:text-7xl md:text-9xl";
  let subheaderTextSize: string = "text-2xl sm:text-3xl md:text-4xl";
  const test = () => {};
  const [isSubheadingVisible, setIsSubheadingVisible] = useState(false);
  console.log(test);
  return (
    <header className="flex flex-col items-center justify-center min-h-screen text-center font-poppins ">
      <div className={`mb-16 ${headerTextSize}`}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to CompEng")
              .start()
              .pauseFor(1500)
              .deleteChars(3)
              .pauseFor(1000)
              .typeString('<span class="text-blue-800">Eng</span>')
              .callFunction(() => setIsSubheadingVisible(true));
          }}
          options={{
            cursorClassName: `${headerTextSize} animate-pulse animate-infinite animate-duration-1000 animate-ease-linear font-thin`,
            delay: 100,
          }}
        />
      </div>
      <p className={`mb-32 ${subheaderTextSize} font-light h-10`}>
        {isSubheadingVisible &&
          "Where your dreams become reality".split("").map((letter, i) => {
            return (
              <span
                key={i}
                className={"animate-fade-up animate-ease-out"}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {letter}
              </span>
            );
          })}
      </p>
      <ArrowButton />
    </header>
  );
}
