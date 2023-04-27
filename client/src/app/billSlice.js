import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import billApi from "api/billApi";

export const getBill = createAsyncThunk("cart/getBill", async (payload) => {
  const data = await billApi.getBill(payload);

  return data;
});

export const addBill = createAsyncThunk("cart/addBill", async (payload) => {
  const data = await billApi.addBill(payload);

  return data;
});

const billSlice = createSlice({
  name: "bill",
  initialState: {
    billItems: [],
  },
  reducers: {},

  extraReducers: {
    [addBill.fulfilled]: (state, action) => {
      state.billItems = action.payload;
    },

    [getBill.fulfilled]: (state, action) => {
      state.billItems = action.payload;
    },
  },
});

const { actions, reducer } = billSlice;
export const { clearCart } = actions;
export default reducer;
