import { FC } from "react";

interface LetterFadeInProps {
  word: string;
  delay: number;
}

const LetterFadeIn: FC<LetterFadeInProps> = ({ word, delay }) => {
  const elements: JSX.Element[] = word
    .split("")
    .map((letter: string, i: number) => {
      return (
        <span
          key={i}
          className={"animate-fade-up animate-ease-out mb-0"}
          style={{ animationDelay: `${i * delay}ms` }}
        >
          {letter}
        </span>
      );
    });
  return elements;
};

export default LetterFadeIn;
