import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../const";
import { fetchCategory, setActive } from "../../redux/slices/caregoriesSlice";
import clsx from "clsx";
import style from "./Categories.module.css";

export function Categories() {
  const { category, activeCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <ul className={style.categories_list}>
      {category.map((item, i) => {
        return (
          <li key={item.title}>
            <button
              className={clsx(
                style.categories_btn,
                activeCategory === i ? style.active : ""
              )}
              style={{ backgroundImage: `url(${API_URL}/${item.image})` }}
              onClick={() => dispatch(setActive(i))}
            >
              {item.rus}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
