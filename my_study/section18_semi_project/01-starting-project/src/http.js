import axios from "axios"


export async function fetchFood(){
    const response = await axios.get("http://localhost:3000/meals")
    if(response.statusText!=="OK"){
        throw new Error("Failed to fetch food")
    }
    return response.data
}