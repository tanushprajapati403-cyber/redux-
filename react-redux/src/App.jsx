import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementbyvalue,
} from "./features/CounterReducer";

const App = () => {
  let { count } = useSelector((store) => store.counter);
  let despatch = useDispatch();
  let [value, setValue] = useState(0);

  return (
    <div>
      <h1>React redux</h1>
      <h1>count is {count}</h1>
      <button onClick={() => despatch(increment())}>increment</button>
      <button onClick={() => despatch(decrement())}>decrement</button>
      <input
        type="number"
        placeholder="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => despatch(incrementbyvalue(value))}>
        input add
      </button>
    </div>
  );
};

export default App;
