import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../const";
import { minusCount, plusCount } from "../../redux/slices/modalProductSlice";
import { addBasketListFromModal } from "../../redux/slices/basketSlice";
import { isCloseProduct } from "../../redux/slices/modalSlice";
import { Count } from "../Count/Count";
import style from "./ModalProduct.module.css";

export function ModalProduct() {
  const { productItem } = useSelector((state) => state.modalProduct);
  const dispatch = useDispatch();

  function addBasketProducts() {
    dispatch(addBasketListFromModal(productItem));
    dispatch(isCloseProduct());
  }

  return (
    productItem.count && (
      <div className={style.modal_content_wrap}>
        <h2 className={style.title}>{productItem.title}</h2>
        <div className={style.modal_body}>
          <div className={style.img_wrapper}>
            <img
              className={style.img_item}
              src={`${API_URL}/${productItem.image}`}
              alt={productItem.title}
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
    )
  );
}
