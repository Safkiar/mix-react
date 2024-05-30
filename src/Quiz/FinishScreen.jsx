import styles from "./Quiz.module.css";

function FinishScreen({ highscore, points, maxPossiblePoints, dispatch }) {
  const percetange = (points / maxPossiblePoints) * 100;
  return (
    <div className={styles.resultcon}>
      <p className={styles.result}>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percetange)}%)
      </p>
      <p className={styles.highscore}>(Highscore: {highscore} points)</p>
      <button
        className={`${styles.btn} ${styles.btnui}`}
        onClick={() => dispatch({ type: `restart` })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
