import { useState } from "react";
import styles from "./FarAway.module.css";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className={styles.addform} onSubmit={handleSubmit}>
      <h3 className={styles.h3__faraway}>What do you need for your trip?</h3>
      <select
        className={styles.interface__faraway}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className={styles.interface__faraway}
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className={styles.interface__faraway}>Add</button>
    </form>
  );
}

export default Form;
