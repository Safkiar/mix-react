import styles from "./Quiz.module.css";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className={styles.options}>
      {question.options.map((option, index) => (
        <button
          className={`${styles.btn}  ${styles.btnoption} ${
            index === answer ? styles.answer : ""
          } 
          ${
            hasAnswered
              ? index === question.correctOption
                ? styles.correct
                : styles.wrong
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
