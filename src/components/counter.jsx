import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  function countup() {
    // 引数prevStateならばprevState+1となる無名関数と変わらない
    // 関数のメリットは同期処理なので、countがawaitされてても値がきちんと反映される
    setCount((prevState) => prevState + 1);
  }

  function countdown() {
    setCount((prevState) => prevState - 1);
  }

  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={countup}>up</button>
      <button onClick={countdown}>down</button>
    </div>
  );
};

export default Counter;
