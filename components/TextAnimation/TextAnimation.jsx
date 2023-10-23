const Index = ({ letters, className, textCenter }) => {
  return (
    <div className={className}>
      <div className="words-line">
        {letters.map((letter, index) => (
          <>
            <span
              key={index}
              className="anim-word-up inline-block"
              style={{ "--delay": `${letter.delay}s` }}
            >
              {letter.letter}
            </span>{" "}
          </>
        ))}
      </div>
    </div>
  );
};

export default Index;
