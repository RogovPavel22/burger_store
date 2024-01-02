import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Count } from "../Count/Count";
import { API_URL } from "../../const";
import clsx from "clsx";
import style from "./Basket.module.css";

export function Basket() {
  const [closeBasket, setcloseBasket] = useState(true);
  const { basketList, totalCount, totalPrice } = useSelector(
    (state) => state.basketList
  );

  useEffect(() => {
    if (basketList.length === 0) {
      setcloseBasket(true);
    }
  }, [basketList]);

  return (
    <div
      className={clsx(
        style.basket,
        !closeBasket && style.shadow,
        basketList.length > 0 && style.open_width
      )}
    >
      <div
        className={style.basket_head}
        style={basketList.length === 0 ? { pointerEvents: "none" } : { pointerEvents: "all" }}
        onClick={() => setcloseBasket(!closeBasket)}
      >
        <h3 className={style.title}>Корзина</h3>
        <p className={style.head_count}>{totalCount}</p>
      </div>
      {basketList.length ? (
        <div className={clsx(style.close, !closeBasket && style.open)}>
          <ul className={style.basket_body}>
            {basketList.map((item) => {
              return (
                <li className={style.card} key={item.id}>
                  <div className={style.product}>
                    <div className={style.img}>
                      <img
                        className={style.img_item}
                        src={`${API_URL}/${item.image}`}
                        alt={item.category}
                      />
                    </div>
                    <div className={style.card_dscr}>
                      <h5 className={style.card_name}>{item.title}</h5>
                      <span className={style.weight}>{item.weight}г</span>
                      <span className={style.price}>{item.price}₽</span>
                    </div>
                  </div>
                  <Count item={item} />
                </li>
              );
            })}
          </ul>
          <div className={style.basket_footer}>
            <div className={style.sum}>
              <p>Итого</p>
              <span>{totalPrice}₽</span>
            </div>
            <button className={style.order_btn}>Оформить заказ</button>
            {totalPrice >= 599 && (
              <span className={style.delivery}>Бесплатная доставка</span>
            )}
          </div>
        </div>
      ) : (
        <span className={style.empty}>Тут пока пусто :(</span>
      )}
    </div>
  );
}
