import { createSlice } from "@reduxjs/toolkit";
// отключене скрола у модалки
let scroll = 0;
function stopScroll() {
  const scrollPosition = window.scrollY;
  scroll = scrollPosition;
  document.querySelectorAll(".modal_content_wrapper").forEach(item => {
    item.style.marginRight = `${
      window.innerWidth - document.body.offsetWidth
    }px`
  })
  document.body.style.cssText = `
  overflow: hidden;
  position: fixed;
  top: -${scrollPosition}px;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding-right: ${window.innerWidth - document.body.offsetWidth}px;
  `;
}

function addScroll() {
  document.body.style.cssText = ``;
  document.querySelectorAll(".modal_content_wrapper").forEach(item => {
    item.style.marginRight = `0px`
  })
  window.scroll({ top: scroll });
}

const initialState = {
  activeProduct: false,
  activeDelivery: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    isOpenProduct: (state) => {
      stopScroll();
      state.activeProduct = true;
    },

    isCloseProduct: (state) => {
      addScroll();
      state.activeProduct = false;
    },

    isOpenDelivery: (state) => {
      stopScroll();
      state.activeDelivery = true;
    },

    isCloseDelivery: (state) => {
      addScroll();
      state.activeDelivery = false;
    },
  },
});

export const {
  isOpenProduct,
  isCloseProduct,
  isOpenDelivery,
  isCloseDelivery,
} = modalSlice.actions;
export default modalSlice.reducer;
