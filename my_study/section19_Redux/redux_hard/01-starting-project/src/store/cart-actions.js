import { cartAction } from "./cart-Slice";
import { uiAction } from "./ui-Slice";

export const fetchCartData=()=>{
    return async (dispatch)=>{
        const fetchData = async ()=>{
            const response = await fetch("https://nwitter-reloaded-bfe9c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json")
            if(!response.ok){
                throw new Error("Could niot fetch cart data!")
            }
            const data = await response.json()
            return data

        }

        try{
           const cartData =  await fetchData()
           dispatch(cartAction.replaceCart({
            items : cartData.items||[],
            totalQuantity:cartData.totalQuantity
           }))
        } catch(error){
            dispatch(uiAction.showNotification({
                status:"error",
                title:"Error!",
                message:"Fetching cart data failed"
              }))
        }
    }
}




export const sendCartData = (cart) => {
    return async (dispatch) => 
    {
        dispatch(uiAction.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data!"
        }))

        const sendRequest = async ()=>{
            const response = await fetch("https://nwitter-reloaded-bfe9c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
            {
                method: "PUT",
                body: JSON.stringify(cart),
            })
        if (!response.ok) {
            throw new Error("Sending cart data failed")
        }
        }
        try {
            await sendRequest()   
            dispatch(uiAction.showNotification({
                status:"success",
                title:"Success...",
                message:"Sent cart data successfully"
              })) 
        } catch (error) {
            dispatch(uiAction.showNotification({
                status:"error",
                title:"Error!",
                message:"Sending cart data failed"
              }))
        }

    }

}