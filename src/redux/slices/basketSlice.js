import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketList: [],
  totalPrice: 0,
  totalCount: 0,
};

export const basketSlice = createSlice({
  name: "basketList",
  initialState,
  reducers: {
    addBasketList: (state, action) => {
      const basketItem = state.basketList.find(
        (item) => item.id === action.payload.id
      );

      if (basketItem) {
        basketItem.count += 1;
      } else {
        state.basketList.push({ ...action.payload, count: 1 });
      }

      state.totalCount = state.basketList.reduce(
        (acum, item) => acum + item.count,
        0
      );
      state.totalPrice = state.basketList.reduce(
        (acum, item) => acum + item.count * item.price,
        0
      );
    },

    removeProduct: (state, action) => {
      const basketItem = state.basketList.find(
        (item) => item.id === action.payload.id
      );

      if (basketItem.count > 1) {
        basketItem.count -= 1;
      } else {
        state.basketList = state.basketList.filter(
          (item) => item.id !== basketItem.id
        );
      }

      state.totalCount = state.basketList.reduce(
        (acum, item) => acum + item.count,
        0
      );
      state.totalPrice = state.basketList.reduce(
        (acum, item) => acum + item.count * item.price,
        0
      );
    },

    addBasketListFromModal: (state, action) => {
      const basketItem = state.basketList.find(
        (item) => item.id === action.payload.id
      );

      if (basketItem) {
        basketItem.count = basketItem.count + action.payload.count;
      } else {
        state.basketList.push(action.payload);
      }

      state.totalCount = state.basketList.reduce(
        (acum, item) => acum + item.count,
        0
      );
      state.totalPrice = state.basketList.reduce(
        (acum, item) => acum + item.count * item.price,
        0
      );
    },

    clearBasketList: (state) => {
      state.basketList = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addBasketList,
  removeProduct,
  addBasketListFromModal,
  clearBasketList,
} = basketSlice.actions;
export default basketSlice.reducer;
