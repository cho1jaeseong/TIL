import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { AnimatePresence, motion } from 'framer-motion';

const Cart = (props) => {
  const Mycart = useSelector((state) => state.cart.items);

  return (
    
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <AnimatePresence>
          {Mycart.map((cart) => (
            <motion.div
              key={cart.id}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <CartItem
                item={{
                  id: cart.id,
                  title: cart.title,
                  quantity: cart.quantity,
                  total: cart.totalPrice,
                  price: cart.price,
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
    </Card>
  );
};

export default Cart;
