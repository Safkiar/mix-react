import Counter from "./Counter";

function Compound() {
  return (
    <>
      <h1>Compound component pattern = createContext()</h1>
      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Increase icon="+" />
        <Counter.Count />
      </Counter>
      <Counter>
        <Counter.Decrease icon="◀️" />
        <div>
          <Counter.Count />
        </div>
        <Counter.Increase icon="▶️" />
        <hr></hr>
      </Counter>
    </>
  );
}

export default Compound;
