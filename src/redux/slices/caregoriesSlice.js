import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, POSTFIX } from "../../const";

export const fetchCategory = createAsyncThunk("category/fetch", async () => {
  const response = await fetch(`${API_URL}${POSTFIX}/category`);
  return response.json();
});

const initialState = {
  category: [],
  activeCategory: 0,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },
});

export const { setActive } = categoriesSlice.actions;
export default categoriesSlice.reducer;
