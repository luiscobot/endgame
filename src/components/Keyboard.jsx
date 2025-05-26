import clsx from "clsx";
import { nanoid } from "nanoid";

export default function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    <div className="md:w-2/5 flex justify-center flex-wrap gap-2">
      {alphabet.split("").map((letter) => {
        const isGuessed = props.guessedLetters.includes(letter);
        const isCorrect = isGuessed && props.currentWord.includes(letter);
        const isWrong = isGuessed && !props.currentWord.includes(letter);

        const className = clsx(
          "w-12 px-1 py-2 border-2 rounded-md text-4xl text-center text-white uppercase",
          {
            "bg-green-400 border-green-800": isCorrect,
            "bg-red-400 border-red-800": isWrong,
            "bg-slate-800 border-slate-600": !isCorrect && !isWrong,
            "cursor-not-allowed": isGuessed || props.isGameOver,
            "cursor-pointer": !isGuessed && !props.isGameOver,
          },
        );

        return (
          <button
            type="button"
            key={nanoid()}
            onClick={() => props.onLetterClick(letter)}
            disabled={isGuessed || props.isGameOver}
            className={className}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
