import { useDispatch, useSelector } from "react-redux";
import { submitForm, updateFormValue } from "../../redux/slices/modalFormSlice";
import clsx from "clsx";
import Donut from "./img/donut.png";
import style from "./ModalBasket.module.css";

export function ModalBasket() {
  const modalForm = useSelector((state) => state.modalForm);
  const { basketList } = useSelector((state) => state.basketList);
  const dispatch = useDispatch();

  const basketListForForm = basketList.map((item) => {
    return { id: item.id, count: item.count };
  });

  function inputChange(e) {
    dispatch(
      updateFormValue({
        field: e.target.name,
        value: e.target.value,
      })
    );
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    dispatch(submitForm({ ...modalForm, basketListForForm }));
  }

  return (
    <div className={style.modal_wrapper}>
      <div className={style.background}>
        <div className={style.image_container}>
          <img className={style.img_item} src={Donut} alt="donut" />
        </div>
      </div>

      <div className={style.delivery_form}>
        <h2 className={style.title}>Доставка</h2>
        <form
          className={style.form_item}
          onSubmit={handleSubmitForm}
          id="basketForm"
        >
          <fieldset className={style.fieldset}>
            <input
              type="text"
              name="name"
              value={modalForm.name}
              className={style.input}
              placeholder="Ваше имя"
              onChange={inputChange}
            />
            <input
              type="tel"
              name="tel"
              value={modalForm.tel}
              className={style.input}
              placeholder="Телефон"
              onChange={inputChange}
            />
          </fieldset>
          <fieldset className={clsx(style.fieldset, style.fieldset_radio)}>
            <label className={style.label}>
              <input
                className={style.radio}
                type="radio"
                name="method"
                value="pickup"
                checked={modalForm.method === "pickup"}
                onChange={inputChange}
              />
              <span className={style.radio_name}>Самовывоз</span>
            </label>
            <label className={style.label}>
              <input
                className={style.radio}
                type="radio"
                name="method"
                value="delivery"
                checked={modalForm.method === "delivery"}
                onChange={inputChange}
              />
              <span className={style.radio_name}>Доставка</span>
            </label>
          </fieldset>
          <fieldset
            className={clsx(
              style.fieldset,
              modalForm.method === "pickup" && style.fieldset_hide
            )}
          >
            <input
              type="text"
              name="address"
              value={modalForm.address}
              className={style.input}
              placeholder="Улица, дом, квартира"
              onChange={inputChange}
            />
            <div className={style.input_half}>
              <input
                type="number"
                name="floor"
                value={modalForm.floor}
                className={style.input}
                placeholder="Этаж"
                onChange={inputChange}
              />
              <input
                type="number"
                name="intercom"
                value={modalForm.intercom}
                className={style.input}
                placeholder="Домофон"
                onChange={inputChange}
              />
            </div>
          </fieldset>
          <button className={style.form_btn} type="submit" form="basketForm">
            Оформить
          </button>
        </form>
      </div>
    </div>
  );
}
