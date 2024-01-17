import { createSlice } from "@reduxjs/toolkit"

const initialCartState = { cart : {}}

const cartSlice = createSlice({
    name : "cart",
    initialState:initialCartState,
    reducer:{
        plusCart(state,action){
            state.cart = {...state.cart  }
            console.log(state.cart)
            console.log(action)


        }
    }

})  
export const cartAction = cartSlice.actions
export default cartSlice.reducer