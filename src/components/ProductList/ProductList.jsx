import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/slices/productSlice";
import { API_URL } from "../../const";
import style from "./ProductList.module.css";

export function ProductList() {
  const { product } = useSelector((state) => state.products);
  const { category, activeCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category.length) {
      dispatch(fetchProduct(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <div className={style.product_list}>
      <h2 className={style.product_list_title}>
        {category[activeCategory]?.rus}
      </h2>
      <div className={style.cards_wrapper}>
        {product.map((item) => {
          return (
            <article className={style.card}>
              <div className={style.card_img}>
                <img
                  className={style.img_item}
                  src={`${API_URL}/${item.image}`}
                  alt={item.category}
                />
              </div>
              <span className={style.price}>{item.price}₽</span>
              <h5 className={style.card_name}>{item.title}</h5>
              <span className={style.weight}>{item.weight}г</span>
              <button className={style.card_btn}>Добавить</button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
