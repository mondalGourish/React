import { useState } from "react";

function CounterUseState() {
  let [count, setCount] = useState(0);

  let incCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h4>Increase Count implemented using useState()</h4>
      <p>Count={count}</p>
      <button onClick={incCount}> Inc Count</button>
    </div>
  );
}
export default CounterUseState;
