import { useDispatch } from "react-redux";
import style from "./Count.module.css";

export function Count({ item, plus, minus }) {
  const dispatch = useDispatch();

  return (
    <div className={style.count}>
      <button className={style.count_btn} onClick={() => dispatch(minus(item))}>
        -
      </button>
      <span className={style.count_num}>{item.count}</span>
      <button className={style.count_btn} onClick={() => dispatch(plus(item))}>
        +
      </button>
    </div>
  );
}
