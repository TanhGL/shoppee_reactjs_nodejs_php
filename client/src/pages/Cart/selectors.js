import { createSelector } from "@reduxjs/toolkit";

const cartItemsSelector = (state) => state.cart.cartItems;

// Count number of products in cart
export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);

// Caculate total of cart
export const cartTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((total, item) => {
      if (item.product.salePrice) {
        return total + item.product.salePrice * item.quantity;
      } else {
        return total + item.product.originPrice * item.quantity;
      }
    }, 0)
);
