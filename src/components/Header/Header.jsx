import clsx from "clsx";
import style from "./Header.module.css";
import Logo from "./Logo.png";

export function Header() {
  return (
    <header className={style.header}>
      <div className={clsx("container", style.header_wrapper)}>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div></div>
      </div>
    </header>
  );
}
