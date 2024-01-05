import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    isOpen: (state) => {
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
      state.active = true;
    },

    isClose: (state) => {
      document.querySelector("body").classList.remove("offcsroll");
      document.querySelector("body").style.marginRight = `0px`;
      state.active = false;
    },
  },
});

export const { isOpen, isClose } = modalSlice.actions;
export default modalSlice.reducer;
