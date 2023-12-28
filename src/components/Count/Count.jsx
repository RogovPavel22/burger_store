import { useState } from "react";
import style from "./Count.module.css";

export function Count() {
  const [count, setCount] = useState(1)

  function minus() {
    return count > 1 && setCount(count - 1)
  }

  return (
    <div className={style.count}>
      <button className={style.count_btn} onClick={minus}>-</button>
      <span className={style.count_num}>{count}</span>
      <button className={style.count_btn} onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
