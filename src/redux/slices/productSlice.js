import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, POSTFIX } from "../../const";

export const fetchProduct = createAsyncThunk(
  "product/fetch",
  async (category) => {
    const response = await fetch(`${API_URL}${POSTFIX}?category=${category}`);
    return await response.json();
  }
);

const initialState = {
  product: [],
  flagProduct: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.flagProduct = false;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.flagProduct = true;
      });
  },
});

export default productSlice.reducer;
