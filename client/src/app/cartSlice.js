import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "api/cartApi";

export const getProductsInCart = createAsyncThunk(
  "cart/getProductsInCart",
  async (payload) => {
    const data = await cartApi.getProductsInCart(payload);

    return data;
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (payload, thunkAPI) => {
    const { cartItems } = thunkAPI.getState().cart;

    const index = cartItems.findIndex((x) => x.id === payload.id);

    if (index >= 0) {
      // San pham da co trong gio hang

      const newItem = {
        ...payload,
        quantity: payload.quantity + cartItems[index].quantity,
      };

      const data = await cartApi.updateCart(newItem);
      return data;
    } else {
      // San pham chua co trong gio hang

      const data = await cartApi.addToCart(payload);
      return data;
    }
  }
);

export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (payload) => {
    const data = await cartApi.removeCartItem(payload);

    return data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    note: "",
  },
  reducers: {
    clearCart(state, action) {
      state.cartItems = [];
    },

    addNote(state, action) {
      state.note = action.payload;
    },
  },

  extraReducers: {
    [getProductsInCart.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
    },

    [addToCart.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
    },

    [removeCartItem.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

const { actions, reducer } = cartSlice;
export const { clearCart, addNote } = actions;
export default reducer;
