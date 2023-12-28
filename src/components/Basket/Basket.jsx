import style from "./Basket.module.css";
import test from "../../assets/img/0700847980.jpg";
import { Count } from "../Count/Count";

export function Basket() {
  return (
    <div className={style.basket}>
      <div className={style.basket_head}>
        <h3 className={style.title}>Корзина</h3>
        <span className={style.head_count}>4</span>
      </div>
      <div className={style.basket_body}>
        <div className={style.card}>
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
        </div>
        <div className={style.card}>
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
        </div>
        <div className={style.card}>
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
        </div>
      </div>
      <div className={style.basket_footer}>
        <div className={style.sum}>
          <h4>Итого</h4>
          <span>1279₽</span>
        </div>
        <button className={style.order_btn}>Оформить заказ</button>
        <span className={style.delivery}>Бесплатная доставка</span>
      </div>
    </div>
  );
}
