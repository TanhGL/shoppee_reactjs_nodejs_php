import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import billReducer from "./billSlice";

const rootReducer = {
  user: userReducer,
  cart: cartReducer,
  bill: billReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
