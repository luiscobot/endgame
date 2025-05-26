export default function NewGame(props) {
  return (
    <button
      type="button"
      onClick={() => props.handleNewGame()}
      className="w-1/6 p-4 rounded-xl font-medium text-xl text-white bg-sky-600 cursor-pointer"
    >
      New Game
    </button>
  );
}
