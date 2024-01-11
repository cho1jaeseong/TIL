import { useState } from 'react';
import Places from './Places.jsx';

const places = localStorage.getItem()



export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces,setAvailablePlaces]=useState([])
  fetch("http://localhost:3000/places").then((response)=>{
    response.json()
  } )


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
