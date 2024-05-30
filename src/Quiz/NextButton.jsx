function NextButton({ dispatch, answer, index, NumLength, btn, btnui }) {
  if (answer === null) return null;

  if (index < NumLength - 1)
    return (
      <button
        className={`${btn} ${btnui}`}
        onClick={() => dispatch({ type: `nextQuestion` })}
      >
        Next
      </button>
    );
  if (index === NumLength - 1)
    return (
      <button
        className={`${btn} ${btnui}`}
        onClick={() => dispatch({ type: `finish` })}
      >
        Finish
      </button>
    );
}

export default NextButton;
