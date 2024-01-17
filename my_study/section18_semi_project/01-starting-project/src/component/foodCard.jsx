import classes from './foodCard.module.css';
export default function FoodCard({food}){

    return (<>
    <div className={classes.wrapper}>
       <img src={`http://localhost:3000/${food.image}`}/>
       <h3>{food.name}</h3>
       <h5>{food.price}</h5>
       <h5>{food.description}</h5>
       <button>Add to Cart</button>
    </div>

    </>)
}