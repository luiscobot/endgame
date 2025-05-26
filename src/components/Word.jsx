import clsx from "clsx";
import { nanoid } from "nanoid";

export default function Word(props) {
  return (
    <div className="flex gap-0.5">
      {props.currentWord.split("").map((letter) => (
        <span
          key={nanoid()}
          className={clsx(
            "w-12 h-15 p-2 border-b-2 border-slate-400 text-4xl text-center uppercase bg-slate-800",
            props.isGameLost &&
              !props.guessedLetters.includes(letter) &&
              "text-red-400",
            props.guessedLetters.includes(letter) && "text-white",
          )}
        >
          {props.guessedLetters.includes(letter)
            ? letter
            : props.isGameLost
              ? letter
              : ""}
        </span>
      ))}
    </div>
  );
}
