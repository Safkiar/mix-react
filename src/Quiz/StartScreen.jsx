function StartScreen({ NumLength, dispatch, start, btn }) {
  return (
    <div className={start}>
      <h2>Welcome To React Quizz</h2>
      <h3>{NumLength} question</h3>
      <button className={btn} onClick={() => dispatch({ type: "start" })}>
        Let`s start
      </button>
    </div>
  );
}

export default StartScreen;
