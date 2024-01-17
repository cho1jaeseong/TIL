import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    plusCart(state, action) {
      const index = action.payload;
      state.cart[index][2] += 1;
    },
    minusCart(state, action) {
      const index = action.payload;
      if (state.cart[index][2] > 0) {
        state.cart[index][2] -= 1;
      }
    },
    removeZeroCountItems(state) {
      state.cart = state.cart.filter((item) => item[2] > 0);
    },
    addCart(state, action) {
        const [itemName, itemPrice] = action.payload;
        
        // Check if the item is already in the cart
        const existingItemIndex = state.cart.findIndex(([name]) => name === itemName);
  
        if (existingItemIndex !== -1) {
          // If the item is already in the cart, increment the count
          state.cart[existingItemIndex][2] += 1;
        } else {
          // If the item is not in the cart, add it with count 1
          state.cart = [[itemName, itemPrice, 1], ...state.cart];
    }
}
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
