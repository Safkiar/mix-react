function Error({ error }) {
  return (
    <p className={error}>
      <span>💥</span> There was an error fetching questions.
    </p>
  );
}

export default Error;
