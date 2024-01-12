## AXIOS 로 HTTP요청
큰 차이점은 아마 한번에 PUT,GET등의 요청 그리고 넘겨줄 데이터를 한번에 처리 가능 
받은 데이터를 굳이 .json()을 할 필요 X 
헷갈리면 consol로 찍어서 확인해보기
```javascript
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
```
# Helper 함수 
useEffect안에서 async,awit 사용하기 위해서 억지 함수 하나 생성 필요 ( useEffect(async() =>)) ->❌
```javascript 
  useEffect(()=>{
    console.log(1)
    async function fetchPlaces(){
      setIsFetching(true)
      try {
        const places = await fetchUserPlaces()
        setUserPlaces(places)
      } catch (error) {
        setError({ message: error.message || "Failed to fetch user places" })
      }
      setIsFetching(false)
    }
    fetchPlaces()
  },[])

```

# 이해 하기 힘들었던것
hook에 대해 아직 정확히 알지 못해서 생기는 이슈
순서대로 진행되면 setUserPlaces에 의해 userPlaces는 [selectedPlace, ...prevPickedPlaces] 이어야 하지만 사실 저 함수 안에서 아직 업데이트 되지 않아서 userPlaces는 아직 이전의 값을 가지고 있음 그로 인해 await upDateUserPlaces([selectedPlace, ...userPlaces]) 같이 axios 요청을 해야함, 장점은 이전의 값을 그대로 사용가능하기때문에 에러가 났을때 이전의 값을 그대로 처리 가능
```javascript
  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      await upDateUserPlaces([selectedPlace, ...userPlaces])
    } catch (error) {
      setUserPlaces(userPlaces)
      setErrorUpdatingPlaces({ message: error.message || "Failed to update places." })
    }
  }

```
