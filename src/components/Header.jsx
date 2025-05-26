import Logo from "./Logo";

export default function Header() {
  return (
    <header className="md:w-2/4 flex flex-col justify-center items-center gap-4 text-slate-100">
      <Logo width="60px" />
      <h1 className="font-medium text-2xl">Endgame</h1>
      <p className="md:w-2/4 text-lg text-slate-400 text-center">
        Guess the word within 8 attempts to keep the programming world safe from
        Assembly!
      </p>
    </header>
  );
}
