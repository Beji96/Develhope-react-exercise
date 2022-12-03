import { useState, useEffect } from "react";
import "./App.css";
import ClickCount from "./ClickCount";

export default function App() {
  let [count, setCount] = useState(0);

  const onCounterChange = (event) => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(`the number is ${count}`);
    return () => {
      console.log(`the number was ${count}`);
    };
  }, [count]);

  return (
    <div className="App">
      <ClickCount click={onCounterChange} count={count} />
    </div>
  );
}
