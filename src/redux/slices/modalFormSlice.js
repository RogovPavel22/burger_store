import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isCloseDelivery } from "./modalSlice";
import { clearBasketList } from "./basketSlice";

const initialState = {
  name: "",
  tel: "",
  method: "pickup",
  address: "",
  floor: "",
  intercom: "",
};

export const submitForm = createAsyncThunk(
  "modalForm/submit",
  async (data, { dispatch }) => {
    const response = await fetch(
      "https://cloudy-slash-rubidium.glitch.me/api/order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.statusText}`);
    }

    dispatch(clearForm());
    dispatch(clearBasketList());
    dispatch(isCloseDelivery());

    return await response.json();
  }
);

export const modalForm = createSlice({
  name: "modalForm",
  initialState,
  reducers: {
    updateFormValue: (state, actions) => {
      state[actions.payload.field] = actions.payload.value;
    },

    clearForm: (state) => {
      state.name = "";
      state.tel = "";
      state.method = "pickup";
      state.address = "";
      state.floor = "";
      state.intercom = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(submitForm.fulfilled, (state, action) => {
      state.response = action.payload;
    });
  },
});

export const { updateFormValue, clearForm } = modalForm.actions;
export default modalForm.reducer;
