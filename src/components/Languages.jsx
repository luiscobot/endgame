export default function Languages(props) {
  return (
    <section className="md:w-2/6 flex flex-wrap justify-center gap-2">
      {props.languages.map((language, index) => {
        const isLanguageLost = index < props.wrongGuessCount;

        return (
          <span
            key={language.name}
            className="p-2 rounded-lg font-medium"
            style={{
              color: isLanguageLost ? "#a3a3a3" : language.color,
              backgroundColor: isLanguageLost
                ? "#262626"
                : language.backgroundColor,
            }}
          >
            {language.name}
          </span>
        );
      })}
    </section>
  );
}
