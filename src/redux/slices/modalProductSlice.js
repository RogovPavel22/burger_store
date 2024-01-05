import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productItem: {},
};

export const modalProduct = createSlice({
  name: "modalProduct",
  initialState,
  reducers: {
    addProductModal: (state, action) => {
      state.productItem = { ...action.payload, count: 1 };
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

export const { addProductModal, plusCount, minusCount } = modalProduct.actions;
export default modalProduct.reducer;
