## HTTP 요청보내기
async를 useEffect안에서 사용할때 함수를 하나 따로 정의해야지 사용가능
```javascript

  useEffect(()=>{
    async function fetchPlacer(){
      const response = await fetch("http://localhost:3000/places")
      const resData = await response.json()
      setAvailablePlaces(resData.places)
    }
    fetchPlacer()
  },[])
  
```
# 에러처리
fetch 실패시 일어날수 있는 에러메시지를 표시하면 UI를 개선할수 있다
try catch를 통하여 함, message가 있을때와 아닐때가 있기때문에 || 을 통하여 대비
```javascript
 useEffect(() => {
    setIsFetching(true)
    async function fetchPlacer() {
      try {
        const response = await fetch("http://localhost:3000/places")
        const resData = await response.json()

        if (!response.ok) {
          throw new Error("Failed to fetch places")
        }
        setAvailablePlaces(resData.places)
      }catch(error){
        setError({message:error.message || "Could not fetch places"})
      }
      setIsFetching(false)
    }
    fetchPlacer()
  }, [])

  if(error){
    return <Error title="An error occurred!" message={error.message}/>
  }

```