import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/caregoriesSlice";
import productReducer from "./slices/productSlice";
import basketReducer from "./slices/basketSlice";
import modalReducer from "./slices/modalSlice";
import modalProductReducer from "./slices/modalProductSlice";
import modalFormReducer from "./slices/modalFormSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productReducer,
    basketList: basketReducer,
    modal: modalReducer,
    modalProduct: modalProductReducer,
    modalForm: modalFormReducer,
  },
});
