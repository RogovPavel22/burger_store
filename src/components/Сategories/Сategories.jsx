import { useState } from "react";
import style from "./Categories.module.css";
import clsx from "clsx";

const category = [
  { title: "burger", rus: "Бургеры", image: "img/burger.png" },
  { title: "snack", rus: "Закуски", image: "img/snack.png" },
  { title: "hot-dog", rus: "Хот-доги", image: "img/hot-dog.png" },
  { title: "combo", rus: "Комбо", image: "img/combo.png" },
  { title: "shawarma", rus: "Шаурма", image: "img/shawarma.png" },
  { title: "pizza", rus: "Пицца", image: "img/pizza.png" },
  { title: "wok", rus: "Вок", image: "img/wok.png" },
  { title: "dessert", rus: "Десерты", image: "img/dessert.png" },
  { title: "sauce", rus: "Соусы", image: "img/sauce.png" },
];

export function Categories() {
  const [active, setActive] = useState(0);

  return (
    <ul className={style.categories_list}>
      {category.map((item, i) => {
        return (
          <li key={item.title}>
            <button
              className={clsx(
                style.categories_btn,
                active === i ? style.active : ""
              )}
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => setActive(i)}
            >
              {item.rus}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
