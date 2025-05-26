import { useState } from "react";
import Confetti from "./components/Confetti";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Languages from "./components/Languages";
import NewGame from "./components/NewGame";
import Status from "./components/Status";
import Word from "./components/Word";
import { languages } from "./languages";
import { getWord } from "./utils";

function App() {
  const [currentWord, setCurrentWord] = useState(() => getWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  function startNewGame() {
    setCurrentWord(getWord());
    setGuessedLetters([]);
  }

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount === languages.length;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters.at(-1);
  const isLastGuessWrong =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  function handleGuessedLetter(letter) {
    setGuessedLetters((prevLetters) => {
      const uniqueLetters = new Set(prevLetters);
      uniqueLetters.add(letter);
      return [...uniqueLetters];
    });
  }

  return (
    <>
      <Header />
      <Status
        wrongGuessCount={wrongGuessCount}
        isLastGuessWrong={isLastGuessWrong}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
      />
      <Languages languages={languages} wrongGuessCount={wrongGuessCount} />
      <Word
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />
      <Keyboard
        onLetterClick={handleGuessedLetter}
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
      />
      {isGameOver && <NewGame handleNewGame={startNewGame} />}
      {isGameWon && <Confetti />}
    </>
  );
}

export default App;
