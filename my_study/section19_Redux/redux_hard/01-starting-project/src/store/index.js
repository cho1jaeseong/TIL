import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-Slice";
import cartSlice from "./cart-Slice";
const store = configureStore({
    reducer : {ui : uiSlice ,  cart : cartSlice  }
})
export default store