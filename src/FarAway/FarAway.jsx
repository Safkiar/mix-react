import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import styles from "./FarAway.module.css";

function FarAway() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure to delete all items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className={styles.farAwayContainer}>
      <Logo h1style={styles.h1__faraway} />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} statisticbar={styles.stats} />
    </div>
  );
}

export default FarAway;
