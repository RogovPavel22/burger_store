import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, POSTFIX } from "../../const";

export const fetchProduct = createAsyncThunk(
  "product/fetch",
  async (category) => {
    const response = await fetch(`${API_URL}${POSTFIX}?category=${category}`);
    return response.json();
  }
);

const initialState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productSlice.reducer