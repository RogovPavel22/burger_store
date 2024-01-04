import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalState: false,
  productItem: {},
};

export const modalProduct = createSlice({
  name: "modalProduct",
  initialState,
  reducers: {
    isOpen: (state, action) => {
      state.productItem = { ...action.payload, count: 1 };
      document.querySelector("body").classList.add("offcsroll");

      // ширина скрола
      const div = document.createElement("div");
      div.style.overflowY = "scroll";
      div.style.width = "50px";
      div.style.height = "50px";
      document.body.append(div);
      const scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();

      document.querySelector("body").style.marginRight = `${scrollWidth}px`;
      state.modalState = true;
    },

    isClose: (state, action) => {
      document.querySelector("body").classList.remove("offcsroll");
      document.querySelector("body").style.marginRight = `0px`;
      state.modalState = false;
    },

    plusCount: (state) => {
      state.productItem.count = state.productItem.count + 1;
    },

    minusCount: (state) => {
      if (state.productItem.count > 1) {
        state.productItem.count = state.productItem.count - 1;
      }
    },
  },
});

export const { isOpen, isClose, plusCount, minusCount } = modalProduct.actions;
export default modalProduct.reducer;
