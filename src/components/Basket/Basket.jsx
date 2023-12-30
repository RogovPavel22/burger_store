import style from "./Basket.module.css";
import test from "../../assets/img/0700847980.jpg";
import { Count } from "../Count/Count";
import { useState } from "react";
import clsx from "clsx";

export function Basket() {
  const [close, setClose] = useState(true)


  return (
    <div className={style.basket}>
      <div className={style.basket_head} onClick={() => setClose(!close)}>
        <h3 className={style.title}>Корзина</h3>
        <span className={style.head_count}>4</span>
      </div>
      <div className={clsx(style.close, !close && style.open)}>
        <ul className={style.basket_body}>
          <li className={style.card}>
            <div className={style.product}>
              <div className={style.img}>
                <img className={style.img_item} src={test} alt="" />
              </div>
              <div className={style.card_dscr}>
                <h5 className={style.card_name}>Супер сырный</h5>
                <span className={style.weight}>512г</span>
                <span className={style.price}>550₽</span>
              </div>
            </div>
            <Count />
          </li>
          <li className={style.card}>
            <div className={style.product}>
              <div className={style.img}>
                <img className={style.img_item} src={test} alt="" />
              </div>
              <div className={style.card_dscr}>
                <h5 className={style.card_name}>Супер сырный</h5>
                <span className={style.weight}>512г</span>
                <span className={style.price}>550₽</span>
              </div>
            </div>
            <Count />
          </li>
          <li className={style.card}>
            <div className={style.product}>
              <div className={style.img}>
                <img className={style.img_item} src={test} alt="" />
              </div>
              <div className={style.card_dscr}>
                <h5 className={style.card_name}>Супер сырный</h5>
                <span className={style.weight}>512г</span>
                <span className={style.price}>550₽</span>
              </div>
            </div>
            <Count />
          </li>
        </ul>
        <div className={style.basket_footer}>
          <div className={style.sum}>
            <p>Итого</p>
            <span>1279₽</span>
          </div>
          <button className={style.order_btn}>Оформить заказ</button>
          <span className={style.delivery}>Бесплатная доставка</span>
        </div>
      </div>
    </div>
  );
}
