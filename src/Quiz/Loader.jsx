import styles from "./Quiz.module.css";

export default function Loader() {
  return (
    <div className={styles.loadercontainer}>
      <div className={styles.loader}></div>
      <p>Loading questions...</p>
    </div>
  );
}
