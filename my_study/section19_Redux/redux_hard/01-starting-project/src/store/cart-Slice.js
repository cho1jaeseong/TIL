import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        changed:false,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
        },
        addItemToCart(state, action) {
            state.changed= true
            state.totalQuantity++
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.items.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, title: newItem.title })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state, action) {
            state.changed= true
            state.totalQuantity--
            const removeId = action.payload
            const existingItem = state.items.find(item => item.id === removeId)
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== removeId)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        },
    }

})


export const cartAction = cartSlice.actions
export default cartSlice.reducer
