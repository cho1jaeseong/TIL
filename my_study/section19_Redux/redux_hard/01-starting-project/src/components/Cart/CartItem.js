import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartAction } from '../../store/cart-Slice';
import { motion } from 'framer-motion';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(cartAction.addItemToCart(props.item));
  };

  const removeHandler = () => {
    dispatch(cartAction.removeItemFromCart(props.item.id));
  };

  return (
    <motion.li  initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          <motion.div key={quantity} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          ${total.toFixed(2)}{' '}
          </motion.div>
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x{' '}
          <motion.span key={quantity}  initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}
          >
            {quantity}
          </motion.span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </motion.li>
  );
};

export default CartItem
