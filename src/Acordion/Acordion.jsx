import { useState } from "react";
import styles from "./Acordion.module.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function Acordion() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className={styles.accordion}>
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`${styles.item} ${isOpen ? styles.open : ""}`}
      onClick={handleToggle}
    >
      <p className={styles.number}>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.icon}>{isOpen ? "-" : "+"}</p>

      {isOpen && <div className={styles.contentBox}>{children}</div>}
    </div>
  );
}

export default Acordion;
