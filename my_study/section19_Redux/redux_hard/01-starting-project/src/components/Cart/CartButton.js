import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-Slice';
import { motion, useAnimation } from 'framer-motion';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleHandler = () => {
    dispatch(uiAction.toggle());
  };

  return (
    <motion.div animate={{scale:[1,1.03,1]}} transition={{duration:0.3}}   >
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <motion.span  className={classes.badge}>
        {totalQuantity}
      </motion.span>
    </button>
    </motion.div>
  );
};

export default CartButton;
