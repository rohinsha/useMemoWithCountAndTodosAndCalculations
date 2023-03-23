import "./styles.css";
import { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([]);
  const expensiveCal = (num) => {
    console.log("inside expensive Cal function");
    for (let i = 0; i < 10000; i++) {
      num += 1;
    }
    return num;
  };
  const calculation = useMemo(() => expensiveCal(count), [count]);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          console.log("added count");
        }}
      >
        Add count by 1
      </button>
      <hr />
      {todos.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <button
        onClick={() => {
          setTodos((prev) => [...prev, "new item"]);
          console.log("added todos");
        }}
      >
        Add todos
      </button>

      <h1>Calculations:{calculation}</h1>
    </div>
  );
}
