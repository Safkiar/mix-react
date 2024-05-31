import Counter from "./Counter";
import styles from "./Compound.module.css";

function Compound() {
  return (
    <div className={styles.compound}>
      <h1>Compound component pattern = createContext()</h1>
      <Counter>
        <Counter.Label>Flexibe counter</Counter.Label>
        <div className={styles.counter}>
          <Counter.Decrease icon="-" />
          <Counter.Count />
          <Counter.Increase icon="+" />
        </div>
      </Counter>
      <Counter>
        <div className={styles.counter}>
          <Counter.Decrease icon="◀️" />
          <Counter.Count />
          <Counter.Increase icon="▶️" />
        </div>
      </Counter>
    </div>
  );
}

export default Compound;
