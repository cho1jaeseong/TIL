import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name:"ui",
    initialState : {isVisibleui : 0},
    reducers :{
        toggle(state){
            state.isVisibleui = !state.isVisibleui
        }
    }
})
export const uiAction = uiSlice.actions
export default uiSlice.reducer