import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../const";
import {
  isClose,
  minusCount,
  plusCount,
} from "../../redux/slices/modalProductSlice";
import { Count } from "../Count/Count";
import style from "./ModalProduct.module.css";
import clsx from "clsx";
import { addBasketListFromModal } from "../../redux/slices/basketSlice";

export function ModalProduct() {
  const { modalState, productItem } = useSelector(
    (state) => state.modalProduct
  );
  const dispatch = useDispatch();

  function closeModal(e) {
    if (e.target.classList.contains("close")) dispatch(isClose());
  }

  function addBasketProducts() {
    dispatch(addBasketListFromModal(productItem));
    dispatch(isClose());
  }

  return (
    modalState && (
    <div
      className={clsx(style.modal_container, "close")}
      onClick={(e) => closeModal(e)}
    >
      <div className={style.modal}>
        <div className={style.modal_head}>
          <h2 className={style.title}>{productItem.title}</h2>
          <button
            className={style.btn_close}
            onClick={() => dispatch(isClose())}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect
                x="5.0752"
                y="5.28249"
                width="1"
                height="20"
                transform="rotate(-45 5.0752 5.28249)"
                fill="#B1B1B1"
              />
              <rect
                x="5.78223"
                y="19.4246"
                width="1"
                height="20"
                transform="rotate(-135 5.78223 19.4246)"
                fill="#B1B1B1"
              />
            </svg>
          </button>
        </div>
        <div className={style.modal_body}>
          <div className={style.img_wrapper}>
            <img
              className={style.img_item}
              src={`${API_URL}/${productItem.image}`}
              alt=""
            />
          </div>
          <div className={style.modal_text}>
            <p className={style.descr}>{productItem.description}</p>
            <ul className={style.ingredients_list}>
              <li className={style.list_caption}>
                <h6>Состав:</h6>
              </li>
              {productItem.ingredients.map((item, i) => {
                return (
                  <li key={i} className={style.ingredients_item}>
                    {item}
                  </li>
                );
              })}
            </ul>
            <span className={style.product_weight}>
              {productItem.weight}г, ккал {productItem.calories}
            </span>
          </div>
        </div>
        <div className={style.modal_footer}>
          <div className={style.footer_wrap}>
            <button className={style.add_btn} onClick={addBasketProducts}>
              Добавить
            </button>
            <Count item={productItem} plus={plusCount} minus={minusCount} />
          </div>
          <span className={style.price}>{productItem.price}₽</span>
        </div>
      </div>
    </div>
    )
  );
}
