import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import { fetchAvailablePlaces } from '../http.js';
import {sortPlacesByDistance} from "../loc.js"
import Error from './Error.jsx';
export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching,setIsFetching] = useState(false)
  const [availablePlaces,setAvailablePlaces] = useState([])
  const [error,setError] = useState()

  useEffect(()=>{
    setIsFetching(true)
    async function fetchPlace(){
      try {
        const places = await fetchAvailablePlaces()
        navigator.geolocation.getCurrentPosition((postion)=>{
          const sortedPlaces = sortPlacesByDistance(places, postion.coords.latitude, postion.coords.longitude)
          setAvailablePlaces(sortedPlaces)
          setIsFetching(false)
        })
      } catch (error) {
        setError({ message: error.message || "Could not fetch places" })
        setIsFetching(false)
      }
      
    }
    fetchPlace()
  },[])
if(error){
  return <Error title="An error occurred!" message={error.message} />
}


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
