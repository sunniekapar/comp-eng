export default function LetterFadeIn({
  word,
  delay,
}: {
  word: string;
  delay: number;
}) {
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
}
