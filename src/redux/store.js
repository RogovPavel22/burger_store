import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/caregoriesSlice";
import productReducer from "./slices/productSlice";
import basketReducer from "./slices/basketSlice";
import modalProductReducer from "./slices/modalProductSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productReducer,
    basketList: basketReducer,
    modalProduct: modalProductReducer,
  },
});
