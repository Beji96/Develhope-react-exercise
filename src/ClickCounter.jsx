import React from "react";
import { useState } from "react";

function ClickCounter() {
  let [count, setCount] = useState(0);
  const clickHandler = (event) => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={clickHandler}>add</button>
    </div>
  );
}

export default ClickCounter;
