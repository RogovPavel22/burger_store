import { useDispatch } from "react-redux";
import { addBasketList, removeProduct } from "../../redux/slices/basketSlice";
import style from "./Count.module.css";

export function Count({ item }) {
  const dispatch = useDispatch();

  return (
    <div className={style.count}>
      <button className={style.count_btn} onClick={() => dispatch(removeProduct(item))}>
        -
      </button>
      <span className={style.count_num}>{item.count}</span>
      <button
        className={style.count_btn}
        onClick={() => dispatch(addBasketList(item))}
      >
        +
      </button>
    </div>
  );
}
