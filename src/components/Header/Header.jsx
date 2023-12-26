import clsx from "clsx";
import style from "./Header.module.css";
import Logo from "./img/Logo.png";
import Burger from "./img/burger.png";

export function Header() {
  return (
    <header className={style.header}>
      <div className={clsx("container", style.header_wrapper)}>
        <div className={style.logo}>
          <img className={style.logo_item} src={Logo} alt="Logo" />
        </div>
        <div className={style.content}>
          <div className={style.content_img}>
            <img  className={style.img_item} src={Burger} alt="Burger" />
          </div>
          <div className={style.content_text}>
            <h1 className={style.title}>
              Только самые <span className={style.title_orange}>сочные бургеры!</span>
            </h1>
            <p className={style.subtitle}>Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </div>
    </header>
  );
}
