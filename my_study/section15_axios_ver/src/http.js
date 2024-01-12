import axios from "axios";

export async function fetchAvailablePlaces(){
    const response = await axios.get("http://localhost:3000/places")
    if (response.statusText !=="OK") {
        throw new Error("Failed to fetch places")
      }
  return response.data.places
}

export async function upDateUserPlaces(places){
    
  const response = await axios.put('http://localhost:3000/user-places',{places})
  // console.log(response)

  if(response.statusText!=="OK"){
      throw new Error ("Failed")
  }
  return response.data
}

export async function fetchUserPlaces(){
  const response = await axios.get("http://localhost:3000/user-places")
  console.log(response)
  if(response.statusText!=="OK"){
    throw new Error("Failed to fetch User places")
  }
  return response.data.places
}