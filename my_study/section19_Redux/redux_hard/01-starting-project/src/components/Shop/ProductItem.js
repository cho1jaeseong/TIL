import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../store/cart-Slice';

const ProductItem = (props) => {
  const { title, price, description,id } = props;
  const dispatch = useDispatch()
  const addHandler= ()=>{
    dispatch(cartAction.addItemToCart(props))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler} >Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
