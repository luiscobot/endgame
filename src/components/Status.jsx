import clsx from "clsx";
import { languages } from "../languages";
import { getFarewellMessage } from "../utils";

export default function Status(props) {
  function getTitle() {
    if (props.isGameWon) {
      return "You win!";
    }

    if (props.isGameLost) {
      return "You lose!";
    }

    if (props.isLastGuessWrong) {
      return "Nice try";
    }
  }

  function getDescription() {
    if (props.isGameWon) {
      return "Congratulations!";
    }

    if (props.isGameLost) {
      return "Better luck next time!";
    }

    if (props.isLastGuessWrong) {
      return getFarewellMessage(languages[props.wrongGuessCount - 1].name);
    }
  }

  return (
    <section
      className={clsx(
        "md:w-2/6 p-4 rounded-xl",
        props.isLastGuessWrong && !props.isGameOver && "bg-violet-800",
        props.isGameWon && "bg-green-800",
        props.isGameLost && "bg-red-800",
      )}
    >
      <h2 className="font-medium text-xl text-center text-slate-200">
        {getTitle()}
      </h2>

      <p className="text-lg text-center text-slate-200">{getDescription()}</p>
    </section>
  );
}
