import { useEffect, useState } from "react";
import { fetchFood } from "./http";
import Header from "./component/Header";
import FoodCard from "./component/FoodCard"; // 파일명이 대소문자 구분되므로 주의하세요
import classes from "./App.module.css"
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)

  const pluscard =() =>{
    
  }

  const [foods, setFoods] = useState([]); // 초기값을 빈 배열로 변경
  useEffect(() => {
    async function fetchFoods() {
      try {
        const foodData = await fetchFood(); // 가정: fetchFood가 배열을 반환
        setFoods(foodData);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    }
    fetchFoods();
  }, []);


  return (
    <>
      <Header />
      <div className={classes.boss}>
      {foods.map((food, index) => (
        <FoodCard key={index} food={food} onClick />
      ))}
      </div>
    </>
  );
}

export default App;
