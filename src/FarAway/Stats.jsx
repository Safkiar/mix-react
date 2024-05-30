function Stats({ items, statisticbar }) {
  if (!items.length)
    return (
      <p className={statisticbar}>
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className={statisticbar}>
      <em>
        {percentage === 100
          ? "You have everything to go!!!"
          : `You have ${numItems} items on your list
        , and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
