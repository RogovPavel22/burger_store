import { useRef } from "react";
import { useDispatch } from "react-redux";
import style from "./Modal.module.css";
import clsx from "clsx";

export function Modal({ children, active, close }) {
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  function closeModal(e) {
    if (e.target === modalRef.current) dispatch(close());
  }

  return (
    <div
      className={clsx(style.modal, active && style.active_modal)}
      onClick={(e) => closeModal(e)}
      ref={modalRef}
    >
      <div
        className={clsx("modal_content_wrapper" ,style.content_wrapper, active && style.active_wrapper)}
      >
        <button
          className={style.btn_close}
          tabIndex="1"
          onClick={() => dispatch(close())}
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
        {children}
      </div>
    </div>
  );
}
