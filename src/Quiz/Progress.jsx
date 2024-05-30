function Progress({
  index,
  NumLength,
  points,
  maxPossiblePoints,
  answer,
  progress,
}) {
  return (
    <header className={progress}>
      <progress max={NumLength} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {NumLength}
      </p>
      <p>
        <strong>
          {points} / {maxPossiblePoints}{" "}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
