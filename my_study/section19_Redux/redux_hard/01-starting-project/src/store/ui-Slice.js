import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name:"ui",
    initialState : {isVisibleui : 0, notification:null},
    reducers :{
        toggle(state){
            state.isVisibleui = !state.isVisibleui
        },
        showNotification(state,action){
            state.notification = {status :action.payload.status,title :action.payload.title,message :action.payload.message}
        }
    }
})
export const uiAction = uiSlice.actions
export default uiSlice.reducer